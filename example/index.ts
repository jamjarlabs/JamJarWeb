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
import System from "jamjar/lib/system/system";
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/transform/transform";
import Vector from "jamjar/lib/geometry/vector";
import CollisionSystem from "jamjar/lib/collision/collision_system";
import IMessage from "jamjar/lib/message/imessage";
import Collision from "jamjar/lib/collision/collision";
import Message from "jamjar/lib/message/message";
import Collider from "jamjar/lib/collision/collider";
import Polygon from "jamjar/lib/geometry/polygon";
import MessageBus from "jamjar/lib/message/message_bus";
import Ellipse from "jamjar/lib/geometry/ellipse";
import Camera from "jamjar/lib/camera/camera";
import Sprite from "jamjar/lib/sprite/sprite";
import Motion from "jamjar/lib/motion/motion";
import Color from "jamjar/lib/rendering/color";

class CollisionListenerSystem extends System {
    constructor(messageBus: MessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, CollisionSystem.MESSAGE_COLLISION_DETECTED);
    }

    OnMessage(message: IMessage): void {
        super.OnMessage(message);
        if (message.type == CollisionSystem.MESSAGE_COLLISION_DETECTED) {
            console.log(message as Message<Collision>);
        }
    }
}

class TestGame extends Game {
    constructor() {
        super(document.getElementById("game-canvas") as HTMLCanvasElement, "test-game");
    }

    OnStart(): void {
        new CollisionSystem(this.messageBus)
        new CollisionListenerSystem(this.messageBus);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0,0)));
        camera.Add(new Camera(new Color(0,0,0,1), undefined, undefined, new Vector(160,90)));

        let a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(0,0), new Vector(20,10)));
        a.Add(new Sprite(new Color(1,0,0,1)));
        a.Add(new Collider(Polygon.Rectangle(1,1)));

        let b = new Entity(this.messageBus);
        b.Add(new Transform(new Vector(4,0), new Vector(5,5)));
        b.Add(new Sprite(new Color(0,1,0,1)));
        b.Add(new Collider(Polygon.Rectangle(1,1)));
        b.Add(new Motion(new Vector(0,0)))
    }
}

let testGame = new TestGame();

testGame.Start();