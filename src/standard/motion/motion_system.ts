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
import Motion from "./motion";
import Component from "../../component/component";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";

/**
 * MotionSystem handles basic physics calculations for entities with a motion component.
 * This system handles velocity, acceleration, angular velocity and angular acceleration.
 */
class MotionSystem extends System {
    /**
     * Ensure has Transform and Motion.
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Motion.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, MotionSystem.EVALUATOR, entities, subscriberID);
    }

    protected Update(dt: number): void {
        for(const entity of this.entities.values()) {
            const transform = entity.Get(Transform.KEY) as Transform;
            const motion = entity.Get(Motion.KEY) as Motion;

			// v += a * dt
			motion.velocity = motion.velocity.Add(motion.acceleration.Scale(dt));
			// p += v * dt
			transform.position = transform.position.Add(motion.velocity.Scale(dt));

			// v += a * dt
			motion.angularVelocity += motion.angularAcceleration * dt;
			// r += v * dt
			transform.angle += motion.angularVelocity * dt;
        }
    }
}

export default MotionSystem;