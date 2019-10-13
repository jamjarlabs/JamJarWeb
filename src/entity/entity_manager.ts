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

import ISubscriber from "../message/isubscriber";
import ComponentManager from "../components/component_manager";
import Entity from "./entity";
import Component from "../components/component";
import Message from "../message/message";
import MessageBus from "../message/message_bus";
import System from "../system/system";
import IMessage from "../message/imessage";

class EntityManager implements ISubscriber {
    private componentManagers: Record<string, ComponentManager>;
    private componentManagersArr: ComponentManager[];
    private messageBus: MessageBus

    constructor(messageBus: MessageBus) {
        this.messageBus = messageBus;
        this.componentManagers = {};
        this.componentManagersArr = [];
        this.messageBus.Subscribe(this, [Component.MESSAGE_ADD, Component.MESSAGE_REMOVE, Entity.MESSAGE_DESTROY])
    }

    public HandleMessage(message: IMessage): void {
		switch(message.type) {
            case Entity.MESSAGE_DESTROY: {
                break;
            }
            case Component.MESSAGE_ADD: {
                const componentMessage = message as Message<[Entity,Component]>;
                if (!componentMessage.payload) {
                    return;
                }
                const entity = componentMessage.payload[0];
                const component = componentMessage.payload[1];
                this.addComponent(entity, component);
                break;
            }
            case Component.MESSAGE_REMOVE: {
                const componentMessage = message as Message<[Entity,string]>;
                if (!componentMessage.payload) {
                    return;
                }
                const entity = componentMessage.payload[0];
                const component = componentMessage.payload[1];
                this.removeComponent(entity, component);
                break;
            }
		}
    }

    private registerEntity(entity: Entity): void {
        const components = this.GetComponents(entity);
		this.messageBus.Publish(new Message<[Entity, Component[]]>(System.MESSAGE_REGISTER, [entity, components]));
    }
    
    private removeComponent(entity: Entity, key: string): void {
        let componentManager = this.componentManagers[key];
        if(!componentManager) {
            return;
        }
        componentManager.Remove(entity);
        this.registerEntity(entity);
    }

    private addComponent(entity: Entity, component: Component): void {
        let componentManager = this.componentManagers[component.key];
		if(!componentManager) {
			componentManager = new ComponentManager();
			this.componentManagersArr.push(componentManager);
			this.componentManagers[component.key] = componentManager;
		}
        componentManager.Add(entity, component);
        this.registerEntity(entity);
    }

    public GetComponents(entity: Entity): Component[] {
        const components: Component[] = [];
        for (let i = 0; i < this.componentManagersArr.length; i++) {
            const component = this.componentManagersArr[i].Get(entity);
            if (component) {
                components.push(component);
            }
        }
        return components;
    }
}

export default EntityManager;