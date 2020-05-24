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
import IMessageBus from "jamjar/lib/message/imessage_bus";
import EntityManager from "jamjar/lib/entity/entity_manager";
import MessageBus from "jamjar/lib/message/message_bus";
import Message from "jamjar/lib/message/message";
import WebGLSystem from "jamjar/lib/standard/webgl/webgl_system";
import HTTPImageSystem from "jamjar/lib/standard/http_image/http_image_system";
import SpriteSystem from "jamjar/lib/standard/sprite/sprite_system";
import ImageRequest from "jamjar/lib/rendering/image/image_request";
import TextureFiltering from "jamjar/lib/rendering/texture/texture_filtering";
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/standard/transform/transform";
import Sprite from "jamjar/lib/standard/sprite/sprite";
import Camera from "jamjar/lib/standard/camera/camera";
import Material from "jamjar/lib/rendering/material/material";
import Texture from "jamjar/lib/rendering/texture/texture";
import Vector from "jamjar/lib/geometry/vector";
import Color from "jamjar/lib/rendering/color";
import SpriteAnimatorSystem from "jamjar/lib/standard/sprite_animator/sprite_animator_system";
import SpriteAnimator from "jamjar/lib/standard/sprite_animator/sprite_animator";
import SpriteAnimation from "jamjar/lib/standard/sprite_animator/sprite_animation";
import SpriteKeyFrame from "jamjar/lib/standard/sprite_animator/sprite_key_frame";
import KeyboardSystem from "jamjar/lib/standard/keyboard/keyboard_system";
import System from "jamjar/lib/system/system";
import IMessage from "jamjar/lib/message/imessage";
import IEntity from "jamjar/lib/entity/ientity";
import Component from "jamjar/lib/component/component";
import IScene from "jamjar/lib/scene/iscene";
import SystemEntity from "jamjar/lib/system/system_entity";
import Motion from "jamjar/lib/standard/motion/motion";
import MotionSystem from "jamjar/lib/standard/motion/motion_system";
import InterpolationSystem from "jamjar/lib/standard/interpolation/interpolation_system";

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
        player.Add(new Transform(new Vector(0, 0), new Vector(20,20)));
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
                        player.direction = new Vector(0, 1);
                        if (animator.current !== undefined) {
                            animator.current = "up";
                        }
                    } else if (keyMessage.payload === "KeyS") {
                        player.direction = new Vector(0, -1);
                        if (animator.current !== undefined) {
                            animator.current = "down";
                        }
                    } else if (keyMessage.payload === "KeyA") {
                        player.direction = new Vector(-1, 0);
                        if (animator.current !== undefined) {
                            animator.current = "left";
                        }
                    } else if (keyMessage.payload === "KeyD") {
                        player.direction = new Vector(1, 0);
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
                        player.direction = new Vector(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyS" && player.direction.y === -1) {
                        player.direction = new Vector(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyA" && player.direction.x === -1) {
                        player.direction = new Vector(0, 0);
                        if (animator.current !== undefined) {
                            animator.current = "idle";
                        }
                    } else if (keyMessage.payload === "KeyD" && player.direction.x === 1) {
                        player.direction = new Vector(0, 0);
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
            motion.velocity = player.direction.Scale(player.speed);
        }
    }
}

class Player extends Component {
    public static readonly KEY = "player";

    public speed: number;
    public direction: Vector;

    constructor(speed: number, direction: Vector = new Vector(0,0)) {
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

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Create WebGLSystem
new WebGLSystem(messageBus, gl);

// Create SpriteSystem
new SpriteSystem(messageBus);

// Create SpriteAnimationSystem
new SpriteAnimatorSystem(messageBus);

// Create Image loading system
new HTTPImageSystem(messageBus);

// Create Keyboard System
new KeyboardSystem(messageBus, document);

// Create Motion System
new MotionSystem(messageBus);

// Create Interpolation System
new InterpolationSystem(messageBus);

// Create custom Player System
new PlayerSystem(messageBus);

// Create and start game
new TextureGame(messageBus).Start();