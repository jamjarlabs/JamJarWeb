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
import ComponentManager from "../component/component_manager";
import Entity from "./entity";
import Component from "../component/component";
import Message from "../message/message";
import MessageBus from "../message/message_bus";
import System from "../system/system";
import IMessage from "../message/imessage";

class EntityManager implements ISubscriber {
    private componentManagers: ComponentManager[];
    private messageBus: MessageBus

    constructor(messageBus: MessageBus) {
        this.messageBus = messageBus;
        this.componentManagers = [];
        this.messageBus.Subscribe(this, [
            Component.MESSAGE_ADD, 
            Component.MESSAGE_REMOVE, 
            Entity.MESSAGE_DESTROY
        ]);
    }

    public HandleMessage(message: IMessage): void {
		switch(message.type) {
            case Entity.MESSAGE_DESTROY: {
                const destroyMessage = message as Message<Entity>;
                if (!destroyMessage.payload) {
                    return;
                }
                this.destroyEntity(destroyMessage.payload);
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
        const components = this.getComponents(entity);
		this.messageBus.Publish(new Message<[Entity, Component[]]>(System.MESSAGE_REGISTER, [entity, components]));
    }

    private destroyEntity(entity: Entity): void {
        for (let i = 0; i < this.componentManagers.length; i++) {
            this.componentManagers[i].Remove(entity);
        }
        this.messageBus.Publish(new Message<Entity>(System.MESSAGE_DEREGISTER, entity));
    }
    
    private removeComponent(entity: Entity, key: string): void {
        const componentManager = this.getComponentManager(key);
        if (!componentManager) {
            return;
        }
        componentManager.Remove(entity);
        this.registerEntity(entity);
    }

    private addComponent(entity: Entity, component: Component): void {
        let componentManager = this.getComponentManager(component.key);
		if (!componentManager) {
			componentManager = new ComponentManager(component.key);
			this.componentManagers.push(componentManager);
		}
        componentManager.Add(entity, component);
        this.registerEntity(entity);
    }

    private getComponentManager(key: string): ComponentManager | null {
        for (let i = 0; i < this.componentManagers.length; i++) {
            if (this.componentManagers[i].key == key) {
                return this.componentManagers[i];
            }
        }
        return null;
    }

    private getComponents(entity: Entity): Component[] {
        const components: Component[] = [];
        for (let i = 0; i < this.componentManagers.length; i++) {
            const component = this.componentManagers[i].Get(entity);
            if (component) {
                components.push(component);
            }
        }
        return components;
    }
}

export default EntityManager;