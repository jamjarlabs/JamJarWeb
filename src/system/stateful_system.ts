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
import IMessage from "../message/imessage";
import IMessageBus from "../message/imessage_bus";
import Message from "../message/message";
import IScene from "../scene/iscene";
import System from "./system";

/**
 * StatefulSystem defines a system that tracks the state of entities and components by listening for register and
 * deregister messages.
 */
abstract class StatefulSystem extends System {
    /**
     * Message to register an entity + components with a system so it can be tracked.
     */
    public static readonly MESSAGE_REGISTER = "stateful_system_register";
    /**
     * Message to deregister an entity + components with a system so it is no longer tracked.
     */
    public static readonly MESSAGE_DEREGISTER = "stateful_system_deregister";

    constructor(messageBus: IMessageBus, scene?: IScene, subscriberID?: number) {
        super(messageBus, scene, subscriberID);
        this.messageBus = messageBus;
        this.scene = scene;
        this.messageBus.Subscribe(this, [StatefulSystem.MESSAGE_REGISTER, StatefulSystem.MESSAGE_DEREGISTER]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case StatefulSystem.MESSAGE_REGISTER: {
                const registerMessage = message as Message<[IEntity, Component[]]>;
                if (!registerMessage.payload) {
                    return;
                }
                this.register(registerMessage.payload[0], registerMessage.payload[1]);
                break;
            }
            case StatefulSystem.MESSAGE_DEREGISTER: {
                const deregisterMessage = message as Message<IEntity>;
                if (!deregisterMessage.payload) {
                    return;
                }
                this.remove(deregisterMessage.payload);
                break;
            }
        }
    }

    /**
     * register is used when a new entity is created with components, or an existing
     * entity's components are changed; register calls the evaluator to check if the
     * system should track this entity. If the evaluator returns true, the entity
     * is added to the System's internal entity array.
     * @param {IEntity} entity The entity to register
     * @param {Component[]} components The components of the registering entity.
     */
    protected abstract register(entity: IEntity, components: Component[]): void;

    /**
     * remove removes an entity from being tracked by the system
     * @param {IEntity} entity The entity to remove
     */
    protected abstract remove(entity: IEntity): void;
}

export default StatefulSystem;
