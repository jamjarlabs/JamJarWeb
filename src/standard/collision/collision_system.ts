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
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import IScene from "../../scene/iscene";
import ICollisionAlgorithm from "./algorithm/icollision_algorithm";
import GJKAlgorithm from "./algorithm/gjk_algorithm";
import AlwaysCollideAlgorithm from "./algorithm/always_collide_algorithm";
import ScriptTriggerRequest from "../script_trigger/script_trigger_request";

/**
 * CollisionSystem watches for collisions between entities with Colliders and Transforms.
 * It uses a number of algorithms to first do a broad sweep of possible collisions,
 * then do a narrow sweep of the possible collisions to determine actual collisions and
 * info around them.
 * Once it has determined all collisions, it broadcasts them as messages.
 */
class CollisionSystem extends System {

    public static readonly DESCRIPTOR_COLLISION = "collision";

    public static readonly MESSAGE_COLLISION_DETECTED = "collision_detected";

    // Only entities with a transform and camera
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private collisionLayerPairs: [string, string][];
    private narrowAlgorithm: ICollisionAlgorithm;
    private broadAlgorithm: ICollisionAlgorithm;

    constructor(messageBus: IMessageBus,
        collisionLayerPairs: [string, string][] = [],
        scene?: IScene,
        narrowAlgorithm: ICollisionAlgorithm = new GJKAlgorithm(),
        broadAlgorithm: ICollisionAlgorithm = new AlwaysCollideAlgorithm(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, CollisionSystem.EVALUATOR, entities, subscriberID);
        this.collisionLayerPairs = collisionLayerPairs;
        this.narrowAlgorithm = narrowAlgorithm;
        this.broadAlgorithm = broadAlgorithm;
    }

    Update(): void {
        const triggers: ScriptTriggerRequest<Collision>[] = [];
        // Get collisions
        const collisions: Collision[] = [];
        for (const a of this.entities.values()) {

            const aTransform = a.Get(Transform.KEY) as Transform;
            const aCollider = a.Get(Collider.KEY) as Collider;
            const aShape = aCollider.shape.Transform(aTransform);

            for (const b of this.entities.values()) {
                if (a.entity.id === b.entity.id) {
                    // Don't check for collisions with same entity
                    continue;
                }

                const alreadyChecked = collisions.some((collision) => {
                    return collision.a.id === a.entity.id && collision.b.id === b.entity.id ||
                        collision.a.id === b.entity.id && collision.b.id === a.entity.id;
                });
                if (alreadyChecked) {
                    // Don't check the same collision twice
                    continue;
                }

                if (this.collisionLayerPairs.length !== 0) {
                    let shouldCheck = false;
                    for (const collisionPair of this.collisionLayerPairs) {
                        if ((a.entity.layers.includes(collisionPair[0]) && b.entity.layers.includes(collisionPair[1])) ||
                            (b.entity.layers.includes(collisionPair[0]) && a.entity.layers.includes(collisionPair[1]))) {
                                shouldCheck = true;
                        }
                    }
                    if (!shouldCheck) {
                        continue;
                    }
                }

                const bTransform = b.Get(Transform.KEY) as Transform;
                const bCollider = b.Get(Collider.KEY) as Collider;
                const bShape = bCollider.shape.Transform(bTransform);
                if (!this.broadAlgorithm.CalculateCollision(aShape, bShape)) {
                    // Broad algorithm discount collision
                    continue;
                }

                const collisionInfo = this.narrowAlgorithm.CalculateCollision(aShape, bShape);
                if (collisionInfo === undefined) {
                    // No collision
                    continue;
                }

                const collision = new Collision(
                    a.entity,
                    b.entity,
                    collisionInfo
                );

                // Collision detected
                collisions.push(collision);

                if (aCollider.script !== undefined) {
                    triggers.push(new ScriptTriggerRequest<Collision>(
                        aCollider.script,
                        CollisionSystem.DESCRIPTOR_COLLISION,
                        a.entity,
                        collision
                    ));
                }
                if (bCollider.script !== undefined) {
                    triggers.push(new ScriptTriggerRequest<Collision>(
                        bCollider.script,
                        CollisionSystem.DESCRIPTOR_COLLISION,
                        b.entity,
                        collision
                    ));
                }
            }
        }


        // Publish collisions
        for (const collision of collisions) {
            this.messageBus.Publish(new Message<Collision>(CollisionSystem.MESSAGE_COLLISION_DETECTED, collision));
        }

        // Publish collision triggers
        for (const trigger of triggers) {
            this.messageBus.Publish(new Message<ScriptTriggerRequest<Collision>>(ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT, trigger));
        }
    }
}

export default CollisionSystem;
