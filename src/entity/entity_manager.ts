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

import Subscriber from "../message/subscriber";
import ComponentManager from "../component/component_manager";
import Entity from "./entity";
import Component from "../component/component";
import Message from "../message/message";
import System from "../system/system";
import IMessage from "../message/imessage";
import IMessageBus from "../message/imessage_bus";
import IEntity from "./ientity";

/**
 * EntityManager keeps tracks of all entities and their components/changes in their components.
 * The EntityManager watches for changes in which components belong to an entity (add/remove), and
 * when a change is detected it will broadcast that a change has been detected in the entity and the
 * entity's new list of components.
 * The EntityManager also watches for entities being deleted and removes the deleted entity's
 * components.
 */
class EntityManager extends Subscriber {
    private componentManagers: ComponentManager[];
    private messageBus: IMessageBus

    constructor(messageBus: IMessageBus, componentManagers: ComponentManager[] = [], subscriberID?: number) {
        if (subscriberID !== undefined) {
            super(subscriberID);
        } else {
            super();
        }
        this.messageBus = messageBus;
        this.componentManagers = componentManagers;
        this.messageBus.Subscribe(this, [
            Component.MESSAGE_ADD,
            Component.MESSAGE_REMOVE,
            Entity.MESSAGE_DESTROY
        ]);
    }

    public OnMessage(message: IMessage): void {
        switch(message.type) {
            case Entity.MESSAGE_DESTROY: {
                const destroyMessage = message as Message<IEntity>;
                if (!destroyMessage.payload) {
                    return;
                }
                this.destroyEntity(destroyMessage.payload);
                break;
            }
            case Component.MESSAGE_ADD: {
                const componentMessage = message as Message<[IEntity,Component]>;
                if (!componentMessage.payload) {
                    return;
                }
                const entity = componentMessage.payload[0];
                const component = componentMessage.payload[1];
                this.addComponent(entity, component);
                break;
            }
            case Component.MESSAGE_REMOVE: {
                const componentMessage = message as Message<[IEntity,string]>;
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

    /**
     * registerEntity publishes that a change has happened to an entity's components, alongside its new
     * component list.
     * @param {IEntity} entity The entity that has changed components
     */
    private registerEntity(entity: IEntity): void {
        const components = this.getComponents(entity);
        this.messageBus.Publish(new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [entity, components]));
    }

    /**
     * destroyEntity publishes that an entity has been deleted and deregistered from the entity manager.
     * @param {IEntity} entity The entity that has been deleted
     */
    private destroyEntity(entity: IEntity): void {
        for (let i = 0; i < this.componentManagers.length; i++) {
            this.componentManagers[i].Remove(entity);
        }
        this.messageBus.Publish(new Message<IEntity>(System.MESSAGE_DEREGISTER, entity));
    }

    /**
     * removeComponent removes an entity's component by the component key provided.
     * @param {IEntity} entity Entity to remove the component from
     * @param {string} key Key of the component to remove
     */
    private removeComponent(entity: IEntity, key: string): void {
        const componentManager = this.getComponentManager(key);
        if (!componentManager) {
            return;
        }
        componentManager.Remove(entity);
        this.registerEntity(entity);
    }

    /**
     * addComponent adds a component to the entity manager for an entity.
     * @param {IEntity} entity Entity of the component to add
     * @param {Component} component Component to add
     */
    private addComponent(entity: IEntity, component: Component): void {
        let componentManager = this.getComponentManager(component.key);
        if (!componentManager) {
            componentManager = new ComponentManager(component.key);
            this.componentManagers.push(componentManager);
        }
        componentManager.Add(entity, component);
        this.registerEntity(entity);
    }

    /**
     * getComponentManager gets a component manager for a specific component, if it doesn't exist,
     * undefined is returned instead.
     * @param {string} key The key of the component to get the manager for
     * @returns {ComponentManager} The component manager for the component, if it doesn't exist undefined
     */
    private getComponentManager(key: string): ComponentManager | undefined {
        for (let i = 0; i < this.componentManagers.length; i++) {
            if (this.componentManagers[i].key === key) {
                return this.componentManagers[i];
            }
        }
        return undefined;
    }

    /**
     * getComponents gets all components belonging to an entity.
     * @param {IEntity} entity The entity to get the components of
     * @returns {Component[]} The list of components for the entity
     */
    private getComponents(entity: IEntity): Component[] {
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
