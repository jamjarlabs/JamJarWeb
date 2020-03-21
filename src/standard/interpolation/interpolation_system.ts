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
import Component from "../../component/component";
import Transform from "../transform/transform";
import SystemEntity from "../../system/system_entity";
import IMessage from "../../message/imessage";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import Game from "../../game";
import IScene from "../../scene/iscene";

/**
 * InterpolationSystem is responsible for updating each entities transform value after a render, so
 * its previous value is always 1 frame before.
 * This is part of the rendering process.
 */
class InterpolationSystem extends System {
    /**
     * Ensure has Transform
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return components.some(
            component => component.key == Transform.KEY
        );
    };

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, InterpolationSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, Game.MESSAGE_POST_RENDER);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_POST_RENDER: {
                this.interpolateTransforms();
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
    private interpolateTransforms(): void {
        for (const entity of this.entities.values()) {
            const transform = entity.Get(Transform.KEY) as Transform;
            transform.previous = transform.position.Copy();
        }
    }
}

export default InterpolationSystem;