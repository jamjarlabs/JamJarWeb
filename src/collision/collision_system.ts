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

import System from "../system/system";
import Transform from "../transform/transform";
import Component from "../component/component";
import Entity from "../entity/entity";
import MessageBus from "../message/message_bus";
import Scene from "../scene/scene";
import Collider from "./collider";
import SystemEntity from "../system/system_entity";
import Collision from "./collision";
import Message from "../message/message";
import gjk from "../algorithms/gjk";

class CollisionSystem extends System {

    public static readonly MESSAGE_COLLISION_DETECTED = "collision_detected";

    private static readonly EVALUATOR = (entity: Entity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: MessageBus, scene?: Scene) {
        super(messageBus, { evaluator: CollisionSystem.EVALUATOR, scene: scene });
    }

    Update(): void {
        const collisions = this.narrowPhase(this.broadPhase(this.entities));
        for (const collision of collisions) {
            this.messageBus.Publish(new Message<Collision>(CollisionSystem.MESSAGE_COLLISION_DETECTED, collision));
        }
    }

    broadPhase(entities: SystemEntity[]): [SystemEntity, SystemEntity][] {
        const possibleCollisions: [SystemEntity, SystemEntity][] = []
        for (let i = 0; i < entities.length; i++) {
            const a = entities[i];
            for (let j = 0; j < entities.length; j++) {
                const b = entities[j];
                if (a.entity.id != b.entity.id) {
                    possibleCollisions.push([a,b]);
                }
            }
        }
        return possibleCollisions;
    }

    narrowPhase(possibleCollisions: [SystemEntity, SystemEntity][]): Collision[] {
        const collisions: Collision[] = [];
        for (const possibleCollision of possibleCollisions) {
            const collision = gjk.Calculate(possibleCollision[0], possibleCollision[1]);
            if (!collision) {
                continue;
            }
            collisions.push(collision);
        }
        return collisions;
    }
}

export default CollisionSystem;