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
import SpriteSystem from "jamjar/lib/standard/sprite/sprite_system";
import CameraSystem from "jamjar/lib/standard/camera/camera_system";
import MotionSystem from "jamjar/lib/standard/motion/motion_system";
import KeyboardSystem from "jamjar/lib/standard/keyboard/keyboard_system";
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
import System from "../lib/system/system";
import IEntity from "../lib/entity/ientity";
import Component from "../lib/component/component";
import IScene from "../lib/scene/iscene";

class LoadingScene extends Scene {
    constructor(messageBus: IMessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, "FINISH_LOADING");
    }
    
    OnStart(): void {
        // display loading stuff
        this.messageBus.Publish(new Message("FINISH_LOADING"))
    }

    OnMessage(message: IMessage) {
        super.OnMessage(message);
        switch (message.type) {
            case "FINISH_LOADING": {
                this.Destroy();
                new SimpleScene(this.messageBus).Start();
                break;
            }
        }
    }
}

class Move extends Component {
    public static readonly KEY = "move";
    constructor() {
        super(Move.KEY);
    }
}

class MoveSystem extends System {
    // Only entities with move and motion components.
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Move.KEY, Motion.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private static readonly SPEED: number = 60;

    private pressedKeys: Set<string>;

    constructor(messageBus: IMessageBus, scene: IScene | undefined, pressedKeys: Set<string> = new Set()) {
        super(messageBus, { evaluator: MoveSystem.EVALUATOR, scene: scene} );
        this.pressedKeys = pressedKeys;
        messageBus.Subscribe(this, KeyboardSystem.MESSAGE_KEY_DOWN);
        messageBus.Subscribe(this, KeyboardSystem.MESSAGE_KEY_UP);
    }

    public OnMessage(message: IMessage) {
        super.OnMessage(message);
        switch(message.type) {
            case KeyboardSystem.MESSAGE_KEY_DOWN: {
                const upMessage = message as Message<string>;
                if (upMessage.payload === undefined) {
                    return;
                }
                this.pressedKeys.add(upMessage.payload)
                break;
            }
            case KeyboardSystem.MESSAGE_KEY_UP: {
                const downMessage = message as Message<string>;
                if (downMessage.payload === undefined) {
                    return;
                }
                this.pressedKeys.delete(downMessage.payload)
                break;
            }
        }
    }

    protected Update(): void {
        for(let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            const motion = entity.Get(Motion.KEY) as Motion;
            let targetVel = new Vector(0,0);
            if (this.pressedKeys.has("w")) {
                targetVel.y += MoveSystem.SPEED;
            }
            if (this.pressedKeys.has("s")) {
                targetVel.y -= MoveSystem.SPEED;
            }
            if (this.pressedKeys.has("a")) {
                targetVel.x -= MoveSystem.SPEED;
            }
            if (this.pressedKeys.has("d")) {
                targetVel.x += MoveSystem.SPEED;
            }
            motion.velocity = targetVel;
        }
    }
}

class SimpleScene extends Scene {
    OnStart(): void {
        new MotionSystem(this.messageBus, this);
        new InterpolationSystem(this.messageBus, this);
        new MoveSystem(this.messageBus, this);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0,0)));
        camera.Add(new Camera(new Color(0,0,0,1)));

        let a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(0,0), new Vector(20,20)));
        a.Add(new Sprite(new Color(1,0.3,0.7,1)));
        a.Add(new Motion(new Vector(0,0), new Vector(0,0), 0));
        a.Add(new Move());
    }
}

class ExampleGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "test-game");
    }

    OnStart(): void {
        new LoadingScene(this.messageBus).Start();
    }
}

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2");
if (!gl) {
    throw("WebGL2 not supported in this browser")
}

const messageBus = new MessageBus();

new EntityManager(messageBus);
new SpriteSystem(messageBus, gl);
new CameraSystem(messageBus, gl);
new KeyboardSystem(messageBus, document);

let exampleGame = new ExampleGame(messageBus);

exampleGame.Start();