/*
Copyright 2019 JamJar Authors

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
import Transform from "jamjar/lib/transform/transform";
import Vector from "jamjar/lib/geometry/vector";
import InterpolationSystem from "jamjar/lib/interpolation/interpolation_system";
import MotionSystem from "jamjar/lib/motion/motion_system";
import SpriteSystem from "jamjar/lib/sprite/sprite_system";
import CameraSystem from "jamjar/lib/camera/camera_system";
import CollisionSystem from "jamjar/lib/collision/collision_system";
import EntityManager from "jamjar/lib/entity/entity_manager";
import Collider from "jamjar/lib/collision/collider";
import Polygon from "jamjar/lib/geometry/polygon";
import MessageBus from "jamjar/lib/message/message_bus";
import Camera from "jamjar/lib/camera/camera";
import Sprite from "jamjar/lib/sprite/sprite";
import Motion from "jamjar/lib/motion/motion";
import Color from "jamjar/lib/rendering/color";
import IMessageBus from "../lib/message/imessage_bus";

class ExampleGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "test-game");
    }

    OnStart(): void {
        new CollisionSystem(this.messageBus)

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0,0)));
        camera.Add(new Camera(new Color(0,0,0,1)));

        let a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(0,0), new Vector(20,20)));
        a.Add(new Sprite(new Color(1,0.3,0.7,1)));
        a.Add(new Collider(Polygon.Rectangle(1,1)));
        a.Add(new Motion());
    }
}

const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const gl = canvas.getContext("webgl2");
if (!gl) {
    throw("WebGL2 not supported in this browser")
}
const messageBus = new MessageBus();
new EntityManager(messageBus);
new InterpolationSystem(messageBus);
new MotionSystem(messageBus);
new SpriteSystem(messageBus, gl);
new CameraSystem(messageBus, gl);

let exampleGame = new ExampleGame(messageBus);

exampleGame.Start();