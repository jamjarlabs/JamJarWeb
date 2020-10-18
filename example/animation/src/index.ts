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
    IMessageBus,
    EntityManager,
    MessageBus,
    Message,
    WebGLSystem,
    HTTPImageSystem,
    SpriteSystem,
    ImageRequest,
    TextureFiltering,
    Entity,
    Transform,
    Sprite,
    Camera,
    Material,
    Texture,
    Vector,
    Color,
    SpriteAnimatorSystem,
    SpriteAnimator,
    SpriteAnimation,
    SpriteKeyFrame,
    KeyboardSystem,
    System,
    IMessage,
    IEntity,
    Component,
    IScene,
    SystemEntity,
    Motion,
    MotionSystem,
    InterpolationSystem,, Renderable
} from "jamjar";

class TextureGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
        this.messageBus.Publish(new Message<ImageRequest>(ImageRequest.MESSAGE_REQUEST_LOAD, new ImageRequest(
            "animation_sheet",
            "assets/example.png",
            {
                minFilter: TextureFiltering.NEAREST,
                magFilter: TextureFiltering.NEAREST,
            }
        )));

        const spriteSheetIndices = Texture.GenerateSpritesheetIndex(1, 13);

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera(new Color(1,1,1,1)));
        cameraEntity.Add(new Transform());

        // Create player
        const player = new Entity(this.messageBus, ["player"]);
        player.Add(new Transform(Vector.New(0, 0), Vector.New(20,20)));
        player.Add(new Sprite(
            new Material({
                texture: new Texture("animation_sheet", spriteSheetIndices[0]),
            }),
        ));
        player.Add(new Motion());
        player.Add(new Player(40));
        player.Add(new SpriteAnimator(
            new Map<string, SpriteAnimation>([
                ["idle", new SpriteAnimation(
                    [
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[0]),
                            }),
                            10
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[1]),
                            }),
                            10
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[2]),
                            }),
                            10
                        ),
                    ],
                    10,
                    -1
                )],
                ["right", new SpriteAnimation(
                    [
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[3]),
                            }),
                            2
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[4]),
                            }),
                            2
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[5]),
                            }),
                            2
                        ),
                    ],
                    10,
                    -1
                )],
                ["left", new SpriteAnimation(
                    [
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[6]),
                            }),
                            2
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[7]),
                            }),
                            2
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[8]),
                            }),
                            2
                        ),
                    ],
                    10,
                    -1
                )],
                ["up", new SpriteAnimation(
                    [
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[9]),
                            }),
                            3
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[10]),
                            }),
                            3
                        ),
                    ],
                    10,
                    -1
                )],
                ["down", new SpriteAnimation(
                    [
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[11]),
                            }),
                            3
                        ),
                        new SpriteKeyFrame(
                            new Material({
                                texture: new Texture("animation_sheet", spriteSheetIndices[12]),
                            }),
                            3
                        ),
                    ],
                    10,
                    -1
                )]
            ]),
            "idle"
        ));
    }
}

class PlayerSystem extends System {
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Motion.KEY, SpriteAnimator.KEY, Player.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, PlayerSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, ["keydown", "keyup"])
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case "keydown": {
                const keyMessage = message as Message<string>;
                if (keyMessage.payload === undefined) {
                    return;
                }
                for (const entity of this.entities.values()) {
                    const player = entity.Get(Player.KEY) as Player;
                    const animator = entity.Get(SpriteAnimator.KEY) as SpriteAnimator;
                    if (keyMessage.payload === "KeyW") {
                        player.direction = Vector.New(0, 1);
                        if (animator.current !== undefined) {
                            animator.current = "up";
                        }
                    } else if (keyMessage.payload === "KeyS") {
                        player.direction = Vector.New(0, -1);
                        if (animator.current !== undefined) {
                            animator.current = "down";
                        }
                    } else if (keyMessage.payload === "KeyA") {
                        player.direction = Vector.New(-1, 0);
                        if (animator.current !== undefined) {
                            animator.current = "left";
                        }
                    } else if (keyMessage.payload === "KeyD") {
                        player.direction = Vector.New(1, 0);
                        if (animator.current !== undefined) {
                            animator.current = "right";
                        }
                    } else if (keyMessage.payload === "KeyF") {
                        if (animator.current === undefined) {
                            animator.current = "idle";
                        } else {
                            animator.current = undefined;
                        }
                    }
                }
                break;
            }
            case "keyup": {
                const keyMessage = message as Message<string>;
                if (keyMessage.payload === undefined) {
                    return;
                }
                for (const entity of this.entities.values()) {
                    const player = entity.Get(Player.KEY) as Player;
                    const animator = entity.Get(SpriteAnimator.KEY) as SpriteAnimator;
                    if (keyMessage.payload === "KeyW" && player.direction.y === 1) {
                        player.direction = Vector.New(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyS" && player.direction.y === -1) {
                        player.direction = Vector.New(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyA" && player.direction.x === -1) {
                        player.direction = Vector.New(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyD" && player.direction.x === 1) {
                        player.direction = Vector.New(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    }
                }
                break;
            }
        }
    }

    public Update(): void {
        for (const entity of this.entities.values()) {
            const motion = entity.Get(Motion.KEY) as Motion;
            const player = entity.Get(Player.KEY) as Player;
            const playerVelocity = player.direction.Copy().Scale(player.speed);
            motion.velocity = playerVelocity;
        }
    }
}

class Player extends Component {
    public static readonly KEY = "player";

    public speed: number;
    public direction: Vector;

    constructor(speed: number, direction: Vector = Vector.New(0,0)) {
        super(Player.KEY);
        this.speed = speed;
        this.direction = direction;
    }
}

// Get canvas
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;

// Get WebGL2 context
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

// Set up object pools
Vector.Init(200);
Renderable.Init(200);

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Set up game systems
new WebGLSystem(messageBus, gl);
new SpriteSystem(messageBus);
new SpriteAnimatorSystem(messageBus);
new HTTPImageSystem(messageBus);
new KeyboardSystem(messageBus, document);
new MotionSystem(messageBus);
new InterpolationSystem(messageBus);
new PlayerSystem(messageBus);

// Create and start game
new TextureGame(messageBus).Start();
