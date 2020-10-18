/*
Copyright 2020 JamJar Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {
    Game,
    Entity,
    Transform,
    Vector,
    WebGLSystem,
    SpriteSystem,
    PrimitiveSystem,
    MotionSystem,
    FullscreenSystem,
    KeyboardSystem,
    Collider,
    CollisionSystem,
    PointerSystem,
    InterpolationSystem,
    EntityManager,
    MessageBus,
    Camera,
    Sprite,
    Primitive,
    Color,
    IMessageBus,
    Motion,
    Scene,
    Polygon,
    Message,
    Texture,
    Component,
    System,
    IEntity,
    SystemEntity,
    IScene,
    IMessage,
    Pointer,
    Collision,
    UI,
    Material,
    TextSystem,
    Text,
    TextAlignment,
    TextureFiltering,
    FontRequest,
    DrawMode,
    Renderable
} from "jamjar"

class ScoreCounter extends Component {
    public static readonly KEY = "score_counter";

    public score: number;

    constructor(score: number = 0) {
        super(ScoreCounter.KEY);
        this.score = score;
    }
}

class ScoreSystem extends System {
    public static readonly MESSAGE_SCORE_INCREMENT = "message_score_increment";
    // Only entities with transform and bullet components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [ScoreCounter.KEY, Text.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, ScoreSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, ScoreSystem.MESSAGE_SCORE_INCREMENT)
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case ScoreSystem.MESSAGE_SCORE_INCREMENT: {
                for (const entity of this.entities.values()) {
                    const counter = entity.Get(ScoreCounter.KEY) as ScoreCounter;
                    const text = entity.Get(Text.KEY) as Text;
                    counter.score = counter.score + 1;
                    text.value = `SCORE:${counter.score}`;
                }
                break;
            }
        }
    }

}

class AsteroidSystem extends System {
    public static readonly ASTEROID_TAG = "asteroid";
    public static readonly ASTEROID_LAYER = "asteroid";
    public static readonly BASE_SPAWN_INTERVAL: number = 3000;

    private static readonly MIN_SPEED = 10;
    private static readonly MAX_SPEED = 50;
    private static readonly MIN_SPAWN_INTERVAL: number = 250;
    private static readonly SPAWN_MULTIPLIER: number = 0.95;
    private static readonly SPAWN_DISTANCE: number = 90;

    // Entities with transform and tagged as either asteroid, bullet, or player.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        // Has transform
        if (components.some(component => component.key === Transform.KEY)) {
            return entity.tags.includes(AsteroidSystem.ASTEROID_TAG) ||
                entity.tags.includes(BulletSystem.BULLET_TAG) ||
                entity.tags.includes(PlayerSystem.PLAYER_TAG);
        }
        return false;
    };

    private lastSpawnTime: number;
    private spawnInterval: number;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        lastSpawnTime: number = 0,
        spawnInterval: number = AsteroidSystem.BASE_SPAWN_INTERVAL,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
    ) {
        super(messageBus, scene, AsteroidSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, CollisionSystem.MESSAGE_COLLISION_ENTER);
        this.lastSpawnTime = lastSpawnTime;
        this.spawnInterval = spawnInterval;
    }

    protected Update(dt: number): void {
        const time = Date.now();
        if (this.lastSpawnTime + this.spawnInterval < time) {
            this.spawnInterval = this.spawnInterval * AsteroidSystem.SPAWN_MULTIPLIER;
            if (this.spawnInterval < AsteroidSystem.MIN_SPAWN_INTERVAL) {
                this.spawnInterval = AsteroidSystem.MIN_SPAWN_INTERVAL;
            }
            this.lastSpawnTime = time;

            const startPosition = Vector.New(0, 1)
                .RotateDeg(Vector.New(0, 0), randomBetweenInts(0, 359))
                .Normalize()
                .Scale(AsteroidSystem.SPAWN_DISTANCE);

            const size = Vector.New(randomBetweenInts(1, 15), randomBetweenInts(1, 15));

            this.createAsteroid(startPosition, size, AsteroidSystem.MAX_SPEED);
        }

        const asteroids = [...this.entities.values()].filter((entity) => {
            return entity.entity.tags.includes(AsteroidSystem.ASTEROID_TAG);
        });

        for (let i = 0; i < asteroids.length; i++) {
            const entity = asteroids[i];
            const transform = entity.Get(Transform.KEY) as Transform;

            if (transform.position.x > 150 || transform.position.x < -150 ||
                transform.position.y > 150 || transform.position.y < -150) {
                entity.Destroy();
            }
        }
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case CollisionSystem.MESSAGE_COLLISION_ENTER: {
                const collisionMessage = message as Message<Collision>;
                if (collisionMessage.payload === undefined) {
                    return;
                }
                const asteroids = [...this.entities.values()].filter((entity) => {
                    return entity.entity.tags.includes(AsteroidSystem.ASTEROID_TAG);
                });
                const bullets = [...this.entities.values()].filter((entity) => {
                    return entity.entity.tags.includes(BulletSystem.BULLET_TAG);
                });
                const players = [...this.entities.values()].filter((entity) => {
                    return entity.entity.tags.includes(PlayerSystem.PLAYER_TAG);
                });
                for (const bullet of bullets) {
                    let destroyEntity: IEntity | undefined = undefined;

                    if (bullet.entity.id == collisionMessage.payload.a.id) {
                        destroyEntity = collisionMessage.payload.b;
                    } else if (bullet.entity.id == collisionMessage.payload.b.id) {
                        destroyEntity = collisionMessage.payload.a;
                    }

                    if (destroyEntity === undefined) {
                        continue;
                    }

                    for (const entity of asteroids) {
                        if (entity === undefined || entity.entity.id != destroyEntity.id) {
                            continue;
                        }
                        entity.Destroy();
                        this.messageBus.Publish(new Message(ScoreSystem.MESSAGE_SCORE_INCREMENT));
                        return;
                    }
                }
                for (const asteroid of asteroids) {
                    let collisionEntity: IEntity | undefined = undefined;

                    if (asteroid.entity.id == collisionMessage.payload.a.id) {
                        collisionEntity = collisionMessage.payload.b;
                    } else if (asteroid.entity.id == collisionMessage.payload.b.id) {
                        collisionEntity = collisionMessage.payload.a;
                    }

                    if (collisionEntity === undefined) {
                        continue;
                    }

                    for (const player of players) {
                        if (player === undefined || player.entity.id !== collisionEntity.id) {
                            continue;
                        }
                        this.messageBus.Publish(new Message(MainScene.MESSAGE_GAME_OVER));
                        return;
                    }
                }
                break;
            }
        }
    }

    private createAsteroid(position: Vector, scale: Vector, maxSpeed: number): void {
        const asteroid = new Entity(this.messageBus, [AsteroidSystem.ASTEROID_TAG], [AsteroidSystem.ASTEROID_LAYER]);

        const towardsVector = Vector.New(0, 0).Sub(position).Normalize();

        const numberOfSides = randomBetweenInts(6, 10);

        let points: Vector[] = [];
        for (let i = 0; i < numberOfSides; i++) {
            points.push(Vector.New(Math.cos(2 * Math.PI * i / numberOfSides), Math.sin(2 * Math.PI * i / numberOfSides)).Scale(Math.random() * (0.5 - 1.5) + 1.5));
        }
        points.push(points[0]);
        const shape = new Polygon(points);

        asteroid.Add(new Transform(
            position,
            scale,
            Math.random() * (0 - Math.PI * 2) + Math.PI * 2));
        asteroid.Add(new Primitive(
            new Material({
                color: new Color(1, 1, 1, 1)
            }),
            0,
            shape,
            DrawMode.LINE_STRIP
        ));
        asteroid.Add(new Collider(shape));
        asteroid.Add(new Motion(towardsVector.Scale(Math.random() * randomBetweenInts(AsteroidSystem.MIN_SPEED, maxSpeed))));
        if (this.scene !== undefined) {
            this.scene.AddEntity(asteroid);
        }
    }
}

class BulletSystem extends System {
    public static readonly BULLET_TAG = "bullet";
    public static readonly BULLET_LAYER = "bullet";
    public static readonly SPEED = 40;


    // Only entities with transform component and bullet tag.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return components.some(component => component.key === Transform.KEY) &&
            entity.tags.includes(BulletSystem.BULLET_TAG);
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, BulletSystem.EVALUATOR, entities, subscriberID);
    }

    protected Update(dt: number): void {
        for (const bullet of this.entities.values()) {
            const transform = bullet.Get(Transform.KEY) as Transform;
            // Delete bullets beyond the game screen
            if (transform.position.x > 85 || transform.position.x < -85 ||
                transform.position.y > 50 || transform.position.y < -50) {
                bullet.Destroy();
            }
        }
    }

}

class CrosshairSystem extends System {
    public static readonly CROSSHAIR_TAG = "crosshair";
    // Only entities with transform, UI component and crosshair tag
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, UI.KEY].every((type) => components.some(
            component => component.key == type
        )) && entity.tags.includes(CrosshairSystem.CROSSHAIR_TAG);
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, CrosshairSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, ["pointermove", "pointerdown", "keydown"])
    }
    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case "pointermove":
            case "pointerdown": {
                const pointerMessage = message as Message<Pointer>;
                if (pointerMessage.payload === undefined) {
                    return;
                }
                for (const crosshair of this.entities.values()) {
                    const transform = crosshair.Get(Transform.KEY) as Transform;
                    const ui = crosshair.Get(UI.KEY) as UI;
                    for (const cameraInfo of pointerMessage.payload.cameraInfos) {
                        if (cameraInfo.camera.id != ui.camera.id) {
                            continue;
                        }
                        transform.position = cameraInfo.cameraPosition;
                    }
                }
                break;
            }
            case "keydown": {
                const keyMessage = message as Message<string>;
                if (keyMessage.payload === undefined) {
                    return;
                }
                if (keyMessage.payload == "KeyF") {
                    this.messageBus.Publish(new Message(FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN));
                }
                break;
            }
        }
    }

}

class PlayerSystem extends System {
    public static readonly PLAYER_TAG = "player";
    public static readonly PLAYER_LAYER = "player";

    // Only entities with transform component and player tag.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return components.some(component => component.key === Transform.KEY) &&
            entity.tags.includes(PlayerSystem.PLAYER_TAG);
    };

    private targetedPosition: Vector;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
        targetedPosition: Vector = Vector.New(0, 0)) {
        super(messageBus, scene, PlayerSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, ["pointermove", "pointerdown"]);
        this.targetedPosition = targetedPosition;
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case "pointermove": {
                const pointerMessage = message as Message<Pointer>;
                if (pointerMessage.payload === undefined) {
                    return;
                }
                for (const cameraInfo of pointerMessage.payload.cameraInfos) {
                    if (!cameraInfo.withinBounds) {
                        continue;
                    }
                    this.targetedPosition = cameraInfo.worldPosition;
                }
                break;
            }
            case "pointerdown": {
                for (const player of this.entities.values()) {
                    const pointerMessage = message as Message<Pointer>;
                    if (pointerMessage.payload === undefined) {
                        return;
                    }
                    for (const cameraInfo of pointerMessage.payload.cameraInfos) {
                        if (!cameraInfo.withinBounds) {
                            continue;
                        }
                        this.targetedPosition = cameraInfo.worldPosition;
                    }

                    const transform = player.Get(Transform.KEY) as Transform;
                    const orientation = this.getOrientationToTarget(transform.position);
                    const bullet = new Entity(this.messageBus, [BulletSystem.BULLET_TAG], [BulletSystem.BULLET_LAYER]);
                    const towardsVector = this.targetedPosition.Copy().Sub(transform.position).Normalize();

                    bullet.Add(new Transform(towardsVector.Copy().Scale(6), Vector.New(0.4, 3), orientation));
                    bullet.Add(new Primitive(
                        new Material({
                            color: new Color(0.54, 1, 0.54, 1)
                        }),
                        1,
                        new Polygon([
                            Vector.New(0, -0.5),
                            Vector.New(0, 0.5),
                        ]),
                        DrawMode.LINES
                    ))
                    bullet.Add(new Sprite(new Material({
                        texture: new Texture(
                            "bullet",
                            Polygon.RectangleByPoints(Vector.New(0, 0), Vector.New(1, 1))
                        )
                    }), 1));
                    bullet.Add(new Collider(Polygon.RectangleByDimensions(1, 1)))
                    bullet.Add(new Motion(towardsVector.Copy().Scale(BulletSystem.SPEED)));

                    if (this.scene !== undefined) {
                        this.scene.AddEntity(bullet);
                    }
                }
                break;
            }
        }
    }

    protected Update(dt: number): void {
        for (const player of this.entities.values()) {
            const transform = player.Get(Transform.KEY) as Transform;
            transform.angle = this.getOrientationToTarget(transform.position);
        }
    }

    private getOrientationToTarget(startPos: Vector): number {
        let theta = Math.atan2(this.targetedPosition.x - startPos.x, startPos.y - this.targetedPosition.y);

        if (theta < 0) {
            theta += Math.PI * 2;
        }

        return -theta + Math.PI;
    }
}

class GameOverScene extends Scene {
    OnStart(): void {
        new PrimitiveSystem(this.messageBus, this);
        new InterpolationSystem(this.messageBus, this);

        const virtualSize = Vector.New(160, 90);
        const viewportPosition = Vector.New(0, 0);
        const viewportScale = Vector.New(1, 1);
        const backgroundColor = new Color(0, 0, 0, 1);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(Vector.New(0, 0)));
        camera.Add(new Camera(backgroundColor, viewportPosition, viewportScale, virtualSize));
        this.AddEntity(camera);

        const gameOverHeight = 0.1;
        const gameOverWidth = gameOverHeight * (virtualSize.y / virtualSize.x);
        const gameOver = new Entity(this.messageBus);
        gameOver.Add(new Transform(Vector.New(0, 0), Vector.New(gameOverWidth, gameOverHeight)));
        gameOver.Add(new Text(2, "GAMEOVER", "test", TextAlignment.Center, 0.3, undefined, new Color(1, 1, 1, 1)));
        gameOver.Add(new UI(camera));
        this.AddEntity(gameOver);


        const playAgainHeight = 0.05;
        const playAgainWidth = playAgainHeight * (virtualSize.y / virtualSize.x);
        const playAgain = new Entity(this.messageBus);
        playAgain.Add(new Transform(Vector.New(0, -0.2), Vector.New(playAgainWidth, playAgainHeight)));
        playAgain.Add(new Text(2, "REFRESH TO REPLAY", "test", TextAlignment.Center, 0.3, undefined, new Color(1, 1, 1, 1)));
        playAgain.Add(new UI(camera));
        this.AddEntity(playAgain);

        const crosshair = new Entity(this.messageBus, [CrosshairSystem.CROSSHAIR_TAG]);
        crosshair.Add(new Transform(Vector.New(0, 0), Vector.New(0.03, 0.053)));
        crosshair.Add(new Primitive(
            new Material({
                color: new Color(1, 1, 1, 1)
            }),
            1,
            new Polygon([
                Vector.New(-0.25, -0.25),
                Vector.New(0.25, 0.25),
                Vector.New(0, 0),
                Vector.New(-0.25, 0.25),
                Vector.New(0.25, -0.25),
            ]),
            DrawMode.LINE_STRIP
        ))
        crosshair.Add(new UI(camera));
        this.AddEntity(crosshair);

    }
}

class MainScene extends Scene {
    public static readonly MESSAGE_GAME_OVER = "game_over";

    constructor(messageBus: IMessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, MainScene.MESSAGE_GAME_OVER);
    }

    OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case MainScene.MESSAGE_GAME_OVER: {
                new GameOverScene(this.messageBus).Start();
                this.Destroy();
                break;
            }
        }
    }

    OnStart(): void {
        new SpriteSystem(this.messageBus, this);
        new PrimitiveSystem(this.messageBus, this);
        new MotionSystem(this.messageBus, this);
        new InterpolationSystem(this.messageBus, this);
        new CollisionSystem(this.messageBus, [
            [BulletSystem.BULLET_LAYER, AsteroidSystem.ASTEROID_LAYER],
            [AsteroidSystem.ASTEROID_LAYER, PlayerSystem.PLAYER_LAYER]
        ], this);
        new PlayerSystem(this.messageBus, this);
        new BulletSystem(this.messageBus, this);
        new ScoreSystem(this.messageBus, this);
        new AsteroidSystem(this.messageBus, this);

        this.messageBus.Publish(new Message<FontRequest>(FontRequest.MESSAGE_REQUEST_LOAD, new FontRequest(
            "test",
            "VT323",
            "normal",
            100,
            {
                buffer: 0,
                cutoff: 1,
                radius: 1
            },
            {
                magFilter: TextureFiltering.NEAREST,
                minFilter: TextureFiltering.NEAREST,
            }
        )));

        const virtualSize = Vector.New(160, 90);
        const viewportPosition = Vector.New(0, 0);
        const viewportScale = Vector.New(1, 1);
        const backgroundColor = new Color(0, 0, 0, 1);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(Vector.New(0, 0)));
        camera.Add(new Camera(backgroundColor, viewportPosition, viewportScale, virtualSize));
        this.AddEntity(camera);

        const player = new Entity(this.messageBus, [PlayerSystem.PLAYER_TAG], [PlayerSystem.PLAYER_LAYER]);
        player.Add(new Transform(Vector.New(0, 0), Vector.New(2, 2)));
        player.Add(new Primitive(
            new Material({
                color: new Color(1, 1, 1, 1)
            }),
            0,
            new Polygon([
                Vector.New(0, 0.5),
                Vector.New(0.5, -0.5),
                Vector.New(-0.5, -0.5),
                Vector.New(0, 0.5)
            ]),
            DrawMode.LINE_STRIP
        ));
        player.Add(new Collider(new Polygon([
            Vector.New(0, 0.5),
            Vector.New(0.5, -0.5),
            Vector.New(-0.5, -0.5),
        ])));
        this.AddEntity(player);

        const crosshair = new Entity(this.messageBus, [CrosshairSystem.CROSSHAIR_TAG]);
        crosshair.Add(new Transform(Vector.New(0, 0), Vector.New(0.03, 0.053)));
        crosshair.Add(new Primitive(
            new Material({
                color: new Color(1, 1, 1, 1)
            }),
            1,
            new Polygon([
                Vector.New(-0.25, -0.25),
                Vector.New(0.25, 0.25),
                Vector.New(0, 0),
                Vector.New(-0.25, 0.25),
                Vector.New(0.25, -0.25),
            ]),
            DrawMode.LINE_STRIP
        ))
        crosshair.Add(new UI(camera));
        this.AddEntity(crosshair);

        const scoreHeight = 0.06;
        const scoreCharWidth = scoreHeight * (virtualSize.y / virtualSize.x);
        const scoreCounter = new Entity(this.messageBus);
        scoreCounter.Add(new Transform(Vector.New(0, 0.9), Vector.New(scoreCharWidth, scoreHeight)));
        scoreCounter.Add(new Text(2, "SCORE:0", "test", TextAlignment.Center, 0.3, undefined, new Color(1, 1, 1, 1)));
        scoreCounter.Add(new ScoreCounter());
        scoreCounter.Add(new UI(camera));
        this.AddEntity(scoreCounter);
    }
}

class Shooter extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shooter");
    }

    OnStart(): void {
        new MainScene(this.messageBus).Start();
    }
}

function randomBetweenInts(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

Vector.Init(5000);
Renderable.Init(500);

const messageBus = new MessageBus();

new EntityManager(messageBus);
new WebGLSystem(messageBus, gl);
new PointerSystem(messageBus, canvas);
new KeyboardSystem(messageBus, document);
new FullscreenSystem(messageBus, canvas, document);
new TextSystem(messageBus);
new CrosshairSystem(messageBus);

const shooter = new Shooter(messageBus);

shooter.Start();
