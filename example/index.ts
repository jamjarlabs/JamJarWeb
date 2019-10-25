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
import Component from "../lib/component/component";

class BounceSystem extends System {

    private static readonly EVALUATOR = (entity: Entity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY, Motion.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: MessageBus) {
        super(messageBus, { evaluator: BounceSystem.EVALUATOR });
        this.messageBus.Subscribe(this, CollisionSystem.MESSAGE_COLLISION_DETECTED);
    }

    OnMessage(message: IMessage): void {
        super.OnMessage(message);
        if (message.type == CollisionSystem.MESSAGE_COLLISION_DETECTED) {
            const collisionMessage = message as Message<Collision>;
            if (collisionMessage.payload == undefined) {
                return;
            }
            const a = this.GetSystemEntity(collisionMessage.payload.a);
            const b = this.GetSystemEntity(collisionMessage.payload.b);

            if (a) {
                const transform = a.Get(Transform.KEY) as Transform;
                const motion = a.Get(Motion.KEY) as Motion;
                motion.velocity = motion.velocity.Invert();
                transform.position = transform.position.Add(motion.velocity.Scale(0.1));
            }

            if (b) {
                const transform = b.Get(Transform.KEY) as Transform;
                const motion = b.Get(Motion.KEY) as Motion;
                motion.velocity = motion.velocity.Invert();
                transform.position = transform.position.Add(motion.velocity.Scale(0.1));
            }
        }
    }
}

class TestGame extends Game {
    constructor() {
        super(document.getElementById("game-canvas") as HTMLCanvasElement, "test-game");
    }

    OnStart(): void {
        new CollisionSystem(this.messageBus)
        new BounceSystem(this.messageBus);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0,0)));
        camera.Add(new Camera(new Color(0,0,0,1), undefined, undefined, new Vector(160,90)));

        let a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(-75,0), new Vector(5,50)));
        a.Add(new Sprite(new Color(1,0,0,1)));
        a.Add(new Collider(Polygon.Rectangle(1,1)));
        a.Add(new Motion());

        let b = new Entity(this.messageBus);
        b.Add(new Transform(new Vector(0,0), new Vector(5,5), 45 * Math.PI / 180));
        b.Add(new Sprite(new Color(0,1,0,1)));
        b.Add(new Collider(Polygon.Rectangle(1,1)));
        b.Add(new Motion(new Vector(-40,0)))

        let c = new Entity(this.messageBus);
        c.Add(new Transform(new Vector(75,0), new Vector(5,50)));
        c.Add(new Sprite(new Color(0,0,1,1)));
        c.Add(new Collider(Polygon.Rectangle(1,1)));
        c.Add(new Motion());
    }
}

let testGame = new TestGame();

testGame.Start();