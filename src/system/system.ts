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

import Message from "../message/message";
import IMessage from "../message/imessage";
import Subscriber from "../message/subscriber";
import Component from "../component/component";
import SystemEntity from "./system_entity";
import IMessageBus from "../message/imessage_bus";
import IEntity from "../entity/ientity";
import IScene from "../scene/iscene";
import Scene from "../scene/scene";
import Evaluator from "./evaluator";

/**
 * System is one of the key elements of the Entity-Component-System architecture.
 * A system is for implementing logic, manipulating entities and their components.
 */
abstract class System extends Subscriber {

    public static readonly MESSAGE_UPDATE = "system_update"
    public static readonly MESSAGE_REGISTER = "system_register";
    public static readonly MESSAGE_DEREGISTER = "system_deregister";

    protected entities: SystemEntity[];
    protected scene?: IScene;

    // The evaluator is used to evaluate if an entity with its components should be
    // tracked by the system
    private evaluator?: Evaluator

    constructor(protected messageBus: IMessageBus,
        { scene, evaluator, entities, subscriberID }:
            { scene: IScene | undefined; evaluator: Evaluator | undefined; entities: SystemEntity[]; subscriberID: number | undefined } =
            { scene: undefined, evaluator: undefined, entities: [], subscriberID: undefined }) {
        super(subscriberID);
        this.entities = entities;
        this.evaluator = evaluator;
        this.scene = scene;
        this.messageBus.Subscribe(this, [
            System.MESSAGE_UPDATE,
            System.MESSAGE_REGISTER,
            System.MESSAGE_DEREGISTER,
            Scene.MESSAGE_DESTROY
        ]);
    }

    /**
     * General update method, default empty. Override with custom logic.
     * @param dt DeltaTime
     */
    protected Update(dt: number): void {
        return;
    }

    public OnMessage(message: IMessage): void {
        switch (message.type) {
            case System.MESSAGE_UPDATE: {
                // Will always be non null
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                this.Update((message as Message<number>).payload!);
                break;
            }
            case System.MESSAGE_REGISTER: {
                const registerMessage = message as Message<[IEntity, Component[]]>;
                if (!registerMessage.payload) {
                    return;
                }
                this.register(registerMessage.payload[0], registerMessage.payload[1])
                break;
            }
            case System.MESSAGE_DEREGISTER: {
                const deregisterMessage = message as Message<IEntity>;
                if (!deregisterMessage.payload) {
                    return;
                }
                this.remove(deregisterMessage.payload);
                break;
            }
            case Scene.MESSAGE_DESTROY: {
                const sceneDestroyMessage = message as Message<IScene>;
                if (!sceneDestroyMessage.payload) {
                    return;
                }
                if (!this.scene) {
                    return;
                }
                if (sceneDestroyMessage.payload.id == this.scene.id) {
                    this.Destroy();
                }
                break;
            }
        }
    }

    /**
     * Custom Destroy logic should go here to facilitate garbage collection, for example
     * removing listeners.
     */
    protected OnDestroy(): void {
        return;
    }

    /**
     * Destroy destroys the System and unsubscribes it from all messages.
     * The System should be garbage collected after this, unless a direct
     * reference to it exists somewhere. Therefore direct references to
     * systems are discouraged; communication should all be through the
     * message bus.
     */
    public Destroy(): void {
        this.OnDestroy();
        this.messageBus.UnsubscribeAll(this);
    }

    /**
     * Helper function to retrieve the SystemEntity equivalent of an
     * Entity if it exists in this system, otherwise returns undefined.
     * @param {IEntity} entity The entity to get the SystemEntity of
     * @returns {SystemEntity|undefined} The system entity if it exists, otherwise undefined
     */
    protected GetSystemEntity(entity: IEntity): SystemEntity | undefined {
        for (let i = 0; i < this.entities.length; i++) {
            const systemEntity = this.entities[i];
            if (systemEntity.entity.id == entity.id) {
                return this.entities[i];
            }
        }
        return;
    }

    /**
     * register is used when a new entity is created with components, or an existing
     * entity's components are changed; register calls the evaluator to check if the
     * system should track this entity. If the evaluator returns true, the entity
     * is added to the System's internal entity array.
     * @param {IEntity} entity The entity to register
     * @param {Component[]} components The components of the registering entity.
     */
    private register(entity: IEntity, components: Component[]): void {
        if (!this.evaluator) {
            return;
        }

        this.remove(entity)

        // Evaluation check
        if (!this.evaluator(entity, components)) {
            return;
        }

        // Add component to system
        this.entities.push(new SystemEntity(entity, components));
    }

    /**
     * remove removes an entity from being tracked by the system
     * @param {IEntity} entity The entity to remove
     */
    private remove(entity: IEntity): void {
        for (let i = 0; i < this.entities.length; i++) {
            const systemEntity = this.entities[i];
            if (systemEntity.entity.id == entity.id) {
                this.entities.splice(i, 1);
                return;
            }
        }
    }
}

export default System;