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
import Transform from "jamjar/lib/components/transform";
import MessageBus from "jamjar/lib/message/message_bus";
import Component from "jamjar/lib/components/component";

class TestSystem extends System {

    constructor(messageBus: MessageBus) {
        super(messageBus, (entity: Entity, components: Component[]) => {
            for (const component of components) {
                if (component.key == Transform.KEY) {
                    return true;
                }
            }
            return false;
        })
    }

    update(dt: number) {
        for (const entity of this.entities) {
            const transform = entity.Get(Transform.KEY)! as Transform;
        }
    }

    start(): void {
        let entity = new Entity(this.messageBus);
        entity.Add(new Transform({}));
    }
}

class TestGame extends Game {
    constructor() {
        super({name: "test-game"});
        new TestSystem(this.messageBus);
    }
}

let testGame = new TestGame();

testGame.Start();