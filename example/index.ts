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

    Update(dt: number): void {}
}

class TestGame extends Game {
    constructor() {
        super("test-game");
    }

    OnStart(): void {
        new CollisionSystem(this.messageBus)
        new CollisionListenerSystem(this.messageBus);

        let a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(0,0)));
        a.Add(new Collider(Polygon.Rectangle(1,1)));

        let b = new Entity(this.messageBus);
        b.Add(new Transform(new Vector(1.1,1.1)));
        b.Add(new Collider(new Ellipse(new Vector(0.5, 2))));
    }
}

let testGame = new TestGame();

testGame.Start();