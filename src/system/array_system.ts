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

import Component from "../component/component";
import IEntity from "../entity/ientity";
import IMessageBus from "../message/imessage_bus";
import IScene from "../scene/iscene";
import Evaluator from "./evaluator";
import StatefulSystem from "./stateful_system";
import SystemEntity from "./system_entity";

/**
 * ArraySystem defines a system that tracks entities and components using an array, allowing easy iteration.
 */
abstract class ArraySystem extends StatefulSystem {
    /**
     * The list of entities the system is tracking.
     */
    protected entities: SystemEntity[];

    /**
     * The evaluator is used to evaluate if an entity with its components should be
     * tracked by the system
     */
    private evaluator?: Evaluator;

    constructor(
        messageBus: IMessageBus,
        scene?: IScene,
        evaluator?: Evaluator,
        entities: SystemEntity[] = [],
        subscriberID?: number
    ) {
        super(messageBus, scene, subscriberID);
        this.entities = entities;
        this.evaluator = evaluator;
    }

    protected register(entity: IEntity, components: Component[]): void {
        if (!this.evaluator) {
            return;
        }

        this.remove(entity);

        // Evaluation check
        if (!this.evaluator(entity, components)) {
            return;
        }

        // Add component to system
        this.entities.push(new SystemEntity(entity, components));
    }

    protected remove(entity: IEntity): void {
        for (let i = this.entities.length - 1; i >= 0; i--) {
            if (this.entities[i].entity.id === entity.id) {
                this.entities.splice(i, 1);
                return;
            }
        }
    }
}

export default ArraySystem;
