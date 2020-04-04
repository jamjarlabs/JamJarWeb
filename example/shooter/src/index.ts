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

import Game from "jamjar/lib/game"
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/standard/transform/transform";
import Vector from "jamjar/lib/geometry/vector";
import WebGLSystem from "jamjar/lib/standard/webgl/webgl_system";
import SpriteSystem from "jamjar/lib/standard/sprite/sprite_system";
import UISystem from "jamjar/lib/standard/ui/ui_system";
import MotionSystem from "jamjar/lib/standard/motion/motion_system";
import FullscreenSystem from "jamjar/lib/standard/fullscreen/fullscreen_system";
import KeyboardSystem from "jamjar/lib/standard/keyboard/keyboard_system";
import Collider from "jamjar/lib/standard/collision/collider";
import CollisionSystem from "jamjar/lib/standard/collision/collision_system";
import PointerSystem from "jamjar/lib/standard/pointer/pointer_system";
import HTTPImageSystem from "jamjar/lib/standard/http_image/http_image_system";
import InterpolationSystem from "jamjar/lib/standard/interpolation/interpolation_system";
import EntityManager from "jamjar/lib/entity/entity_manager";
import MessageBus from "jamjar/lib/message/message_bus";
import Camera from "jamjar/lib/standard/camera/camera";
import Sprite from "jamjar/lib/standard/sprite/sprite";
import Color from "jamjar/lib/rendering/color";
import IMessageBus from "jamjar/lib/message/imessage_bus";
import Motion from "jamjar/lib/standard/motion/motion";
import Scene from "jamjar/lib/scene/scene";
import Polygon from "jamjar/lib/standard/shape/polygon";
import Message from "jamjar/lib/message/message";
import Texture from "jamjar/lib/rendering/texture";
import Component from "jamjar/lib/component/component";
import System from "jamjar/lib/system/system";
import IEntity from "jamjar/lib/entity/ientity";
import SystemEntity from "jamjar/lib/system/system_entity";
import IScene from "jamjar/lib/scene/iscene";
import IMessage from "jamjar/lib/message/imessage";
import Pointer from "jamjar/lib/standard/pointer/pointer";
import Collision from "jamjar/lib/standard/collision/collision";
import UI from "jamjar/lib/standard/ui/ui";
import Material from "jamjar/lib/rendering/material";
import ImageAsset from "jamjar/lib/rendering/image_asset";
import ShaderAsset from "jamjar/lib/rendering/shader_asset";
import GLSLShader from "jamjar/lib/standard/glsl/glsl_shader";
import FontAsset from "jamjar/lib/rendering/font_asset";
import TextSystem from "jamjar/lib/standard/text/text_system";
import Text from "jamjar/lib/standard/text/text";
import TextAlignment from "../../../lib/standard/text/text_alignment";

class Player extends Component {
    public static readonly KEY = "player";
    constructor() {
        super(Player.KEY);
    }
}

class Bullet extends Component {
    public static readonly SPEED = 50;
    public static readonly KEY = "bullet";
    constructor() {
        super(Bullet.KEY);
    }
}

class Asteroid extends Component {
    public static readonly MIN_SPEED = 20;
    public static readonly MAX_SPEED = 40;
    public static readonly KEY = "asteroid";

    constructor() {
        super(Asteroid.KEY);
    }
}

class Crosshair extends Component {
    public static readonly KEY = "crosshair";

    constructor() {
        super(Crosshair.KEY);
    }
}

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
        switch(message.type) {
            case ScoreSystem.MESSAGE_SCORE_INCREMENT: {
                for (const entity of this.entities.values()) {
                    const counter = entity.Get(ScoreCounter.KEY) as ScoreCounter;
                    const text = entity.Get(Text.KEY) as Text;
                    counter.score = counter.score + 1;
                    text.value = `Score:${counter.score}`;
                }
                break;
            }
        }
    }

}

class AsteroidSystem extends System {
    // Only entities with transform and asteroid components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Asteroid.KEY, Transform.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Bullet.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    public static readonly BASE_SPAWN_INTERVAL: number = 3000;
    private static readonly MIN_SPAWN_INTERVAL: number = 500;
    private static readonly SPAWN_MULTIPLIER: number = 0.95;
    private static readonly SPAWN_DISTANCE: number = 90;

    private lastSpawnTime: number;
    private spawnInterval: number;
    private destroyed: number[];

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        lastSpawnTime: number = 0,
        spawnInterval: number = AsteroidSystem.BASE_SPAWN_INTERVAL,
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number,
        ) {
        super(messageBus, scene, AsteroidSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, CollisionSystem.MESSAGE_COLLISION_DETECTED);
        this.lastSpawnTime = lastSpawnTime;
        this.spawnInterval = spawnInterval;
        this.destroyed = [];
    }

    protected Update(dt: number): void {
        const time = Date.now();
        if (this.lastSpawnTime + this.spawnInterval < time) {
            this.spawnInterval = this.spawnInterval * AsteroidSystem.SPAWN_MULTIPLIER;
            if (this.spawnInterval < AsteroidSystem.MIN_SPAWN_INTERVAL) {
                this.spawnInterval = AsteroidSystem.MIN_SPAWN_INTERVAL;
            }
            this.lastSpawnTime = time;

            const startPosition = new Vector(0, 1)
                .RotateDeg(new Vector(0, 0), randomBetweenInts(0, 359))
                .Normalize()
                .Scale(AsteroidSystem.SPAWN_DISTANCE);

            const size = new Vector(randomBetweenInts(5, 30), randomBetweenInts(5, 30));

            this.createAsteroid(startPosition, size, Asteroid.MAX_SPEED);
        }

        const asteroids = [...this.entities.values()].filter((entity) => {
            return entity.Get(Asteroid.KEY);
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
            case CollisionSystem.MESSAGE_COLLISION_DETECTED: {
                const collisionMessage = message as Message<Collision>;
                if (collisionMessage.payload === undefined) {
                    return;
                }
                const asteroids = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Asteroid.KEY);
                });
                const bullets = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Bullet.KEY);
                });
                for (const bullet of bullets) {
                    let destroyEntity: IEntity | undefined = undefined;

                    if (bullet.entity.id == collisionMessage.payload.a.id) {
                        destroyEntity = collisionMessage.payload.b;
                    } else if (bullet.entity.id == collisionMessage.payload.b.id) {
                        destroyEntity = collisionMessage.payload.a;
                    }

                    if (destroyEntity === undefined || this.destroyed.includes(destroyEntity.id)) {
                        continue;
                    }
                    for (const entity of asteroids) {
                        if (entity === undefined || entity.entity.id != destroyEntity.id) {
                            continue;
                        }
                        entity.Destroy();
                        this.messageBus.Publish(new Message(ScoreSystem.MESSAGE_SCORE_INCREMENT));
                        this.destroyed.push(entity.entity.id);
                    }
                }
                break;
            }
        }
    }

    private createAsteroid(position: Vector, scale: Vector, maxSpeed: number): void {
        const asteroid = new Entity(this.messageBus);

        const towardsVector = new Vector(0, 0).Sub(position).Normalize();

        const numberOfSides = randomBetweenInts(6, 10);

        let points: Vector[] = [];
        for (let i = 0; i < numberOfSides; i++) {
            points.push(new Vector(Math.cos(2 * Math.PI * i / numberOfSides), Math.sin(2 * Math.PI * i / numberOfSides)).Scale(Math.random() * (0.5 - 1.5) + 1.5));
        }
        const shape = new Polygon(points);

        asteroid.Add(new Transform(
            position,
            scale,
            Math.random() * (0 - Math.PI * 2) + Math.PI * 2));

        asteroid.Add(new Sprite(new Material(new Texture("asteroid", shape.GetFloat32Array())), 0, shape));

        asteroid.Add(new Collider(shape));
        asteroid.Add(new Motion(towardsVector.Scale(Math.random() * randomBetweenInts(Asteroid.MIN_SPEED, maxSpeed))));
        asteroid.Add(new Asteroid());
    }
}

class BulletSystem extends System {
    // Only entities with transform and bullet components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Bullet.KEY, Transform.KEY].every((type) => components.some(
            component => component.key == type
        ));
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
    // Only entities with transform and crosshair components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Crosshair.KEY, Transform.KEY, UI.KEY].every((type) => components.some(
            component => component.key == type
        ));
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

class ControllerSystem extends System {
    // Only entities with transform and player components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Player.KEY, Transform.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private targetedPosition: Vector;

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number,
        targetedPosition: Vector = new Vector(0,0)) {
        super(messageBus, scene, ControllerSystem.EVALUATOR, entities, subscriberID);
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
                    const bullet = new Entity(this.messageBus);
                    const towardsVector = this.targetedPosition.Sub(transform.position).Normalize();

                    bullet.Add(new Transform(towardsVector.Scale(6), new Vector(0.2, 3), orientation));
                    bullet.Add(new Sprite(new Material(
                        new Texture(
                            "bullet", 
                            new Polygon([new Vector(1, 0), new Vector(0, 0), new Vector(0, 1), new Vector(1, 1)]).GetFloat32Array()
                        )), 1));
                    bullet.Add(new Collider(Polygon.Rectangle(1, 1)))
                    bullet.Add(new Motion(towardsVector.Scale(Bullet.SPEED)));
                    bullet.Add(new Bullet());

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

class MainScene extends Scene {
    OnStart(): void {
        new SpriteSystem(this.messageBus, this);
        new UISystem(this.messageBus, this);
        new MotionSystem(this.messageBus, this);
        new InterpolationSystem(this.messageBus, this);
        new CollisionSystem(this.messageBus, this);
        new HTTPImageSystem(this.messageBus, this);
        new ControllerSystem(this.messageBus, this);
        new BulletSystem(this.messageBus, this);
        new AsteroidSystem(this.messageBus, this);
        new CrosshairSystem(this.messageBus, this);
        new TextSystem(this.messageBus, this);
        new ScoreSystem(this.messageBus, this);

        this.messageBus.Publish(new Message<FontAsset>(FontAsset.MESSAGE_REQUEST_LOAD, new FontAsset(
            "test",
            "VT323",
            "normal",
            100,
            0,
            1,
            1
        )));

        this.messageBus.Publish(new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset(
            "bullet_frag_shader",
            new GLSLShader(
                ShaderAsset.FRAGMENT_TYPE,
                `#version 300 es
                precision mediump float;
                
                in vec2 vTextureCoordinate;
        
                out vec4 outColor;
        
                void main() {
                    outColor = vec4(0,1,0,1);
                }
                `
            )
        )));

        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["bullet", "assets/bullet.png"]));
        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["asteroid", "assets/asteroid.png"]));
        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["space_ship", "assets/space_ship.png"]));
        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["crosshair", "assets/crosshair.png"]));
        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["ui_banner", "assets/ui_banner.png"]));

        const virtualSize = new Vector(160, 90);
        const viewportPosition = new Vector(0, 0);
        const viewportScale = new Vector(1, 1);
        const backgroundColor = new Color(0, 0, 0, 1);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0, 0)));
        camera.Add(new Camera(backgroundColor, viewportPosition, viewportScale, virtualSize));
        this.AddEntity(camera);

        const player = new Entity(this.messageBus);
        player.Add(new Transform(new Vector(0, 0), new Vector(5, 5)));
        player.Add(new Sprite(
            new Material(
                new Texture("space_ship", new Polygon([new Vector(1, 0), new Vector(0, 0), new Vector(0, 1), new Vector(1, 1)]).GetFloat32Array())
            ), 
            0, 
            Polygon.Rectangle(1, 1)
        ));
        player.Add(new Collider(Polygon.Rectangle(1, 1)));
        player.Add(new Player());
        this.AddEntity(player);

        const crosshair = new Entity(this.messageBus);
        crosshair.Add(new Transform(new Vector(0, 0), new Vector(0.03, 0.053)));
        crosshair.Add(new Sprite(
            new Material(
                new Texture("crosshair", new Polygon([new Vector(1, 0), new Vector(0, 0), new Vector(0, 1), new Vector(1, 1)]).GetFloat32Array())
            ),
            1,
            Polygon.Rectangle(1, 1)
        ));
        crosshair.Add(new UI(camera));
        crosshair.Add(new Crosshair());
        this.AddEntity(crosshair);

        const scoreHeight = 0.08;
        const scoreCharWidth = scoreHeight * (virtualSize.y / virtualSize.x);
        const scoreCounter = new Entity(this.messageBus);
        scoreCounter.Add(new Transform(new Vector(0, 0.8), new Vector(scoreCharWidth, scoreHeight)));
        scoreCounter.Add(new Text(2, "Score:0", "test", TextAlignment.Center, 0.3, undefined, new Color(0,1,0)));
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

const messageBus = new MessageBus();

new EntityManager(messageBus);
new WebGLSystem(messageBus, gl);
new PointerSystem(messageBus, canvas);
new KeyboardSystem(messageBus, document);
new FullscreenSystem(messageBus, canvas, document);

const shooter = new Shooter(messageBus);

shooter.Start();