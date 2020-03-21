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
import MotionSystem from "jamjar/lib/standard/motion/motion_system";
import Collider from "jamjar/lib/standard/collision/collider";
import Collision from "jamjar/lib/standard/collision/collision";
import CollisionSystem from "jamjar/lib/standard/collision/collision_system";
import PointerSystem from "jamjar/lib/standard/pointer/pointer_system";
import InterpolationSystem from "jamjar/lib/standard/interpolation/interpolation_system";
import EntityManager from "jamjar/lib/entity/entity_manager";
import MessageBus from "jamjar/lib/message/message_bus";
import Camera from "jamjar/lib/standard/camera/camera";
import Sprite from "jamjar/lib/standard/sprite/sprite";
import Color from "jamjar/lib/rendering/color";
import IMessageBus from "jamjar/lib/message/imessage_bus";
import Motion from "jamjar/lib/standard/motion/motion";
import Scene from "jamjar/lib/scene/scene";
import IMessage from "jamjar/lib/message/imessage";
import Message from "jamjar/lib/message/message";
import System from "jamjar/lib/system/system";
import IEntity from "jamjar/lib/entity/ientity";
import Component from "jamjar/lib/component/component";
import IScene from "jamjar/lib/scene/iscene";
import SystemEntity from "jamjar/lib/system/system_entity";
import Pointer from "jamjar/lib/standard/pointer/pointer";
import Polygon from "jamjar/lib/standard/shape/polygon";

class Ball extends Component {
    public static readonly KEY = "ball";
    public active: boolean;
    constructor(active: boolean) {
        super(Ball.KEY);
        this.active = active;
    }
}

class Brick extends Component {
    public static readonly KEY = "brick";
    constructor() {
        super(Brick.KEY);
    }
}

class Player extends Component {
    public static readonly KEY = "move";
    constructor() {
        super(Player.KEY);
    }
}

class BallSystem extends System {
    public static readonly BALL_BOUNCE_SPEED_INCREASE = 1;
    public static readonly BALL_START_HEIGHT = -35;
    public static readonly WIDTH = 160;
    public static readonly HEIGHT = 90;

    // Only balls and players
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Ball.KEY, Transform.KEY, Motion.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Player.KEY, Transform.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Brick.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, BallSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, CollisionSystem.MESSAGE_COLLISION_DETECTED);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case CollisionSystem.MESSAGE_COLLISION_DETECTED: {
                const collisionMessage = message as Message<Collision>;
                if (collisionMessage.payload === undefined) {
                    return;
                }
                const balls = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Ball.KEY);
                });

                const bricks = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Brick.KEY);
                });
                for (let i = 0; i < balls.length; i++) {
                    const entity = balls[i];
                    let bounce = false;

                    if (collisionMessage.payload.a.id == entity.entity.id || collisionMessage.payload.b.id == entity.entity.id) {
                        bounce = true;
                    }

                    if (!bounce) {
                        return;
                    }

                    for (let j = 0; j < bricks.length; j++) {
                        const brick = bricks[j];
                        if (collisionMessage.payload.a.id == brick.entity.id || collisionMessage.payload.b.id == brick.entity.id) {
                            brick.Destroy();
                        }
                    }

                    const motion = entity.Get(Motion.KEY) as Motion;
                    const currentSpeed = motion.velocity.Magnitude();
                    motion.velocity = new Vector(motion.velocity.x, -motion.velocity.y).Normalize().Scale(currentSpeed + BallSystem.BALL_BOUNCE_SPEED_INCREASE);
                }
            }
        }
    }

    protected Update(): void {
        const player = [...this.entities.values()].filter((entity) => {
            return entity.Get(Player.KEY);
        })[0];

        const playerTransform = player.Get(Transform.KEY) as Transform;

        const balls = [...this.entities.values()].filter((entity) => {
            return entity.Get(Ball.KEY);
        });

        for (let i = 0; i < balls.length; i++) {
            const entity = balls[i];
            const ball = entity.Get(Ball.KEY) as Ball;
            const transform = entity.Get(Transform.KEY) as Transform;
            const motion = entity.Get(Motion.KEY) as Motion;

            if (!ball.active) {
                transform.position = new Vector(playerTransform.position.x, BallSystem.BALL_START_HEIGHT);
                continue;
            }

            if (transform.position.x > BallSystem.WIDTH / 2) {
                transform.position.x = BallSystem.WIDTH / 2 - 0.01;
                motion.velocity = new Vector(-motion.velocity.x, motion.velocity.y);
            }

            if (transform.position.x < -BallSystem.WIDTH / 2) {
                transform.position.x = -BallSystem.WIDTH / 2 + 0.01;
                motion.velocity = new Vector(-motion.velocity.x, motion.velocity.y);
            }

            if (transform.position.y > BallSystem.HEIGHT / 2) {
                transform.position.y = BallSystem.HEIGHT / 2 - 0.01;
                motion.velocity = new Vector(motion.velocity.x, -motion.velocity.y);
            }

            if (transform.position.y < -BallSystem.HEIGHT / 2) {
                ball.active = false;
                motion.velocity = new Vector(0, 0);
            }
        }
    }
}

class PlayerSystem extends System {
    private static readonly BALL_START_SPEED = 80;

    // Only balls and players
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Player.KEY, Motion.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Ball.KEY, Motion.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, PlayerSystem.EVALUATOR, entities, subscriberID);
        messageBus.Subscribe(this, "pointermove");
        messageBus.Subscribe(this, "pointerdown");
    }

    public OnMessage(message: IMessage) {
        super.OnMessage(message);
        switch (message.type) {
            case "pointermove": {
                const pointerMessage = message as Message<Pointer>;
                if (pointerMessage.payload === undefined) {
                    return;
                }
                const pointer = pointerMessage.payload;
                if (pointer.cameraInfos.length <= 0) {
                    return;
                }
                const players = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Player.KEY);
                });
                for (let i = 0; i < players.length; i++) {
                    const entity = players[i];
                    const transform = entity.Get(Transform.KEY) as Transform;
                    transform.position.x = pointer.cameraInfos[0].worldPosition.x;
                }
                const balls = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Ball.KEY);
                })
                for (let i = 0; i < balls.length; i++) {
                    const entity = balls[i];
                    const ball = entity.Get(Ball.KEY) as Ball;
                    if (!ball.active) {
                        const transform = entity.Get(Transform.KEY) as Transform;
                        transform.position.x = pointer.cameraInfos[0].worldPosition.x;
                    }
                }
                break;
            }
            case "pointerdown": {
                const balls = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Ball.KEY);
                })
                for (let i = 0; i < balls.length; i++) {
                    const entity = balls[i];
                    const ball = entity.Get(Ball.KEY) as Ball;
                    if (!ball.active) {
                        const motion = entity.Get(Motion.KEY) as Motion;
                        motion.velocity = new Vector(1 + Math.random() * (-1 - 1), 1 + Math.random() * (0 - 1)).Normalize().Scale(PlayerSystem.BALL_START_SPEED);
                        ball.active = true;
                    }
                }
            }
        }
    }
}

class SimpleScene extends Scene {
    OnStart(): void {
        new SpriteSystem(messageBus, this);
        new MotionSystem(this.messageBus, this);
        new InterpolationSystem(this.messageBus, this);
        new PlayerSystem(this.messageBus, this);
        new BallSystem(this.messageBus, this);
        new CollisionSystem(this.messageBus, this);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0, 0)));
        camera.Add(new Camera(new Color(0, 0, 0, 1), new Vector(0, 0), new Vector(1, 1), new Vector(160, 90)));
        camera.Add(new Motion(new Vector(0, 0), new Vector(0, 0), 0));

        const player = new Entity(this.messageBus);
        player.Add(new Transform(new Vector(0, -40), new Vector(30, 5)));
        player.Add(new Sprite(new Color(Math.random(), Math.random(), Math.random(), 1)));
        player.Add(new Motion(new Vector(0, 0), new Vector(0, 0), 0));
        player.Add(new Collider(Polygon.Rectangle(1, 1)))
        player.Add(new Player());

        const ball = new Entity(this.messageBus);
        ball.Add(new Transform(new Vector(0, -35), new Vector(4, 4)));
        ball.Add(new Sprite(new Color(Math.random(), Math.random(), Math.random(), 1)));
        ball.Add(new Motion(new Vector(0, 0), new Vector(0, 0), 0));
        ball.Add(new Collider(Polygon.Rectangle(1, 1)))
        ball.Add(new Ball(false));


        const brickColumns = Math.round(5 + Math.random() * (2 - 5))
        const brickRows = Math.round(5 + Math.random() * (2 - 5))

        for (let i = 0; i < brickColumns; i++) {
            for (let j = 0; j < brickRows; j++) {
                const brick = new Entity(this.messageBus);
                brick.Add(new Transform(new Vector((-brickColumns * 22) / 2 + 22 / 2 + i * 22, 40 - j * 10), new Vector(20, 5)));
                brick.Add(new Sprite(new Color(Math.random(), Math.random(), Math.random(), 1)));
                brick.Add(new Collider(Polygon.Rectangle(1, 1)))
                brick.Add(new Brick());
            }
        }
    }
}

class ExampleGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "test-game");
    }

    OnStart(): void {
        new SimpleScene(this.messageBus).Start();
    }
}

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2");
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

const messageBus = new MessageBus();

new EntityManager(messageBus);
new WebGLSystem(messageBus, gl);
new PointerSystem(messageBus, canvas);

let exampleGame = new ExampleGame(messageBus);

exampleGame.Start();