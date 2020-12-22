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
import AllCollideAlgorithm from "./algorithm/all_collide_algorithm";
import IShape from "../../shape/ishape";
import ScriptTriggerRequest from "../script_trigger/script_trigger_request";
import ArraySystem from "../../system/array_system";

/**
 * CollisionSystem watches for collisions between entities with Colliders and Transforms.
 * It uses a number of algorithms to first do a broad sweep of possible collisions,
 * then do a narrow sweep of the possible collisions to determine actual collisions and
 * info around them.
 * Once it has determined all collisions, it broadcasts them as messages.
 */
class CollisionSystem extends ArraySystem {
    /**
     * Descriptor of a script triggered when a collision enter occurs.
     */
    public static readonly DESCRIPTOR_COLLISION_ENTER = "collision_enter";
    /**
     * Descriptor of a script triggered when a collision exit occurs.
     */
    public static readonly DESCRIPTOR_COLLISION_EXIT = "collision_exit";
    /**
     * Message published when a collision enter occurs.
     */
    public static readonly MESSAGE_COLLISION_ENTER = "collision_enter";
    /**
     * Message published when a collision exit occurs.
     */
    public static readonly MESSAGE_COLLISION_EXIT = "collision_exit";

    // Only entities with a transform and camera
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY].every((type) => components.some((component) => component.key === type));
    };

    private layerPairs: [string, string][];
    private narrowAlgorithm: ICollisionAlgorithm;
    private broadAlgorithm: ICollisionAlgorithm;
    private colliding: Collision[];

    constructor(
        messageBus: IMessageBus,
        layerPairs: [string, string][] = [],
        scene?: IScene,
        narrowAlgorithm: ICollisionAlgorithm = new GJKAlgorithm(),
        broadAlgorithm: ICollisionAlgorithm = new AllCollideAlgorithm(),
        colliding: Collision[] = [],
        entities?: SystemEntity[],
        subscriberID?: number
    ) {
        super(messageBus, scene, CollisionSystem.EVALUATOR, entities, subscriberID);
        this.layerPairs = layerPairs;
        this.narrowAlgorithm = narrowAlgorithm;
        this.broadAlgorithm = broadAlgorithm;
        this.colliding = colliding;
    }

    Update(): void {
        // Calculate shapes in worldspace, using transform and collider, store
        // shapes in a mapping of shape -> entity so the entity information can
        // be retrieved later using the shape reference
        const shapes: Map<IShape, SystemEntity> = new Map();
        for (let i = 0; i < this.entities.length; i++) {
            const entity = this.entities[i];
            const transform = entity.Get(Transform.KEY) as Transform;
            const collider = entity.Get(Collider.KEY) as Collider;
            const shape = collider.shape.Copy().Transform(transform);
            shapes.set(shape, entity);
        }

        // Triggers are script triggers to execute after handling collisions
        const triggers: ScriptTriggerRequest<Collision>[] = [];

        // Expired are existing collisions that are no longer colliding
        const expiredCollisions: Collision[] = [...this.colliding];

        // Collisions stores all new and continued collisions in this update
        const collisions: Collision[] = [];

        const broadCollisions = this.broadAlgorithm.CalculateCollisions([...shapes.keys()]);
        for (let i = 0; i < broadCollisions.length; i++) {
            const broadCollision = broadCollisions[i];
            // These null assertions can be made as the shapes returned by the
            // collision detection must retain references
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const a = shapes.get(broadCollision.a)!;
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const b = shapes.get(broadCollision.b)!;

            // Only allow collision with objects that are designated as
            // colliding by the collision pairs provided
            if (this.layerPairs.length !== 0) {
                let shouldCheck = false;
                for (let i = 0; i < this.layerPairs.length; i++) {
                    const collisionPair = this.layerPairs[i];
                    if (
                        (a.entity.layers.includes(collisionPair[0]) && b.entity.layers.includes(collisionPair[1])) ||
                        (b.entity.layers.includes(collisionPair[0]) && a.entity.layers.includes(collisionPair[1]))
                    ) {
                        shouldCheck = true;
                    }
                }
                if (!shouldCheck) {
                    continue;
                }
            }

            const narrowCollision = this.narrowAlgorithm.CalculateCollisions([broadCollision.a, broadCollision.b]);
            if (narrowCollision.length === 0) {
                // No collision
                continue;
            }

            const collision = new Collision(a.entity, b.entity, narrowCollision[0]);
            collisions.push(collision);

            // Determine if new collision
            let newCollision = true;
            for (let j = expiredCollisions.length - 1; j >= 0; j--) {
                const existing = this.colliding[j];
                if (
                    (existing.a.id === a.entity.id && existing.b.id === b.entity.id) ||
                    (existing.a.id === b.entity.id && existing.b.id === a.entity.id)
                ) {
                    newCollision = false;
                    expiredCollisions.splice(j, 1);
                    break;
                }
            }

            if (newCollision) {
                // New collision, counts as collision enter, send message and
                // trigger scripts
                this.messageBus.Publish(Message.New<Collision>(CollisionSystem.MESSAGE_COLLISION_ENTER, collision));

                const aCollider = a.Get(Collider.KEY) as Collider;
                if (aCollider.enterScript !== undefined) {
                    triggers.push(
                        new ScriptTriggerRequest<Collision>(
                            aCollider.enterScript,
                            CollisionSystem.DESCRIPTOR_COLLISION_ENTER,
                            collision.a,
                            collision
                        )
                    );
                }

                const bCollider = b.Get(Collider.KEY) as Collider;
                if (bCollider.enterScript !== undefined) {
                    triggers.push(
                        new ScriptTriggerRequest<Collision>(
                            bCollider.enterScript,
                            CollisionSystem.DESCRIPTOR_COLLISION_ENTER,
                            collision.b,
                            collision
                        )
                    );
                }
            }
        }

        for (const shape of shapes.keys()) {
            shape.Free();
        }
        shapes.clear();

        // Clear out expired (exited) collisions
        for (let i = 0; i < expiredCollisions.length; i++) {
            const expired = expiredCollisions[i];
            this.messageBus.Publish(Message.New<Collision>(CollisionSystem.MESSAGE_COLLISION_EXIT, expired));
            const aSystemEntity = this.entities.find((value) => value.entity.id === expired.a.id);
            if (aSystemEntity !== undefined) {
                const aCollider = aSystemEntity.Get(Collider.KEY) as Collider;
                if (aCollider.exitScript !== undefined) {
                    triggers.push(
                        new ScriptTriggerRequest<Collision>(
                            aCollider.exitScript,
                            CollisionSystem.DESCRIPTOR_COLLISION_EXIT,
                            expired.a,
                            expired
                        )
                    );
                }
            }
            const bSystemEntity = this.entities.find((value) => value.entity.id === expired.b.id);
            if (bSystemEntity !== undefined) {
                const bCollider = bSystemEntity.Get(Collider.KEY) as Collider;
                if (bCollider.exitScript !== undefined) {
                    triggers.push(
                        new ScriptTriggerRequest<Collision>(
                            bCollider.exitScript,
                            CollisionSystem.DESCRIPTOR_COLLISION_EXIT,
                            expired.b,
                            expired
                        )
                    );
                }
            }
        }

        this.colliding.length = 0;

        for (let i = 0; i < collisions.length; i++) {
            this.colliding.push(collisions[i]);
        }

        // Publish collision triggers
        for (let i = 0; i < triggers.length; i++) {
            this.messageBus.Publish(
                Message.New<ScriptTriggerRequest<Collision>>(ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT, triggers[i])
            );
        }
    }
}

export default CollisionSystem;
