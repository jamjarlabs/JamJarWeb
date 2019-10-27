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
import Entity from "../entity/entity";
import Component from "../component/component";
import Transform from "../transform/transform";
import MessageBus from "../message/message_bus";
import Scene from "../scene/scene";
import SystemEntity from "../system/system_entity";
import IMessage from "../message/imessage";

/**
 * InterpolationSystem is responsible for updating each entities transform value after a render, so
 * its previous value is always 1 frame before.
 * This is part of the rendering process.
 */
class InterpolationSystem extends System {
    public static readonly MESSAGE_INTERPOLATE_TRANSFORMS = "interpolate_system_interpolate_transforms";

    // All entities with a transform
    private static readonly EVALUATOR = (entity: Entity, components: Component[]): boolean => {
        return components.some(
            component => component.key == Transform.KEY
        );
    };

    constructor(messageBus: MessageBus, scene?: Scene) {
        super(messageBus, { evaluator: InterpolationSystem.EVALUATOR, scene: scene });
        this.messageBus.Subscribe(this, InterpolationSystem.MESSAGE_INTERPOLATE_TRANSFORMS);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case InterpolationSystem.MESSAGE_INTERPOLATE_TRANSFORMS: {
                this.interpolateTransforms(this.entities);
                break;
            }
        }
    }

    /**
     * interpolateTransforms updates the `previous` member to be the current position of the transform.
     * This is used in rendering, allowing render systems to use the previous and current position to
     * interpolate its position when drawing.
     * @param {SystemEntity[]} entities The entities to update the interpolation positions of 
     */
    private interpolateTransforms(entities: SystemEntity[]): void {
        for (const entity of entities) {
            const transform = entity.Get(Transform.KEY) as Transform;
            transform.previous = transform.position.Copy();
        }
    }
}

export default InterpolationSystem;