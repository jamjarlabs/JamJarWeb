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

import System from "../../system/system";
import Transform from "../transform/transform";
import Component from "../../component/component";
import Collider from "./collider";
import SystemEntity from "../../system/system_entity";
import Collision from "./collision";
import Message from "../../message/message";
import gjk from "./gjk";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import IScene from "../../scene/iscene";

/**
 * CollisionSystem watches for collisions between entities with Colliders and Transforms.
 * It uses a number of algorithms to first do a broad sweep of possible collisions,
 * then do a narrow sweep of the possible collisions to determine actual collisions and
 * info around them.
 * Once it has determined all collisions, it broadcasts them as messages.
 */
class CollisionSystem extends System {

    public static readonly MESSAGE_COLLISION_DETECTED = "collision_detected";

    // Only entities with a transform and camera
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, CollisionSystem.EVALUATOR, entities, subscriberID);
    }

    Update(): void {
        // Get collisions
        const collisions = this.narrowPhase(this.broadPhase());
        // Publish collisions
        for (const collision of collisions) {
            this.messageBus.Publish(new Message<Collision>(CollisionSystem.MESSAGE_COLLISION_DETECTED, collision));
        }
    }

    /**
     * broadPhase uses a broad phase collision detection algorithm, gathering pairs of possible
     * entities that are colliding.
     * @param {SystemEntity[]} entities Array of entities to check for possible collisions.
     * @returns {[SystemEntity, SystemEntity][]} A list of pairs of entities that could be colliding.
     */
    broadPhase(): [SystemEntity, SystemEntity][] {
        const possibleCollisions: [SystemEntity, SystemEntity][] = [];
        for (const a of this.entities.values()) {
            for (const b of this.entities.values()) {
                if (a.entity.id != b.entity.id) {
                    if (!possibleCollisions.some((collision) => {
                        return collision[0].entity.id == b.entity.id && collision[1].entity.id == a.entity.id;
                    })) {
                        possibleCollisions.push([a,b]);
                    }
                }
            }
        }
        return possibleCollisions;
    }

    /**
     * narrowPhase uses a narrow phase collision detection algorithm, taking a list of possible
     * collisions and determining actual collisions; alongside relevant collision info.
     * @param {[SystemEntity, SystemEntity][]} possibleCollisions Array of pairs of possible colliding entities.
     * @return {Collision[]} Array of detected collisions.
     */
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