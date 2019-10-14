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

import MessageBus from "../message/message_bus";
import Message from "../message/message";
import IMessage from "../message/imessage";
import ISubscriber from "../message/isubscriber";
import Entity from "../entity/entity";
import Component from "../component/component";
import SystemEntity from "./system_entity";
import Scene from "../scene/scene";

abstract class System implements ISubscriber {

    public static readonly MESSAGE_UPDATE = "system_update"
    public static readonly MESSAGE_START = "system_start"
    public static readonly MESSAGE_REGISTER = "system_register";
    public static readonly MESSAGE_DEREGISTER = "system_deregister";

    protected entities: SystemEntity[];
    protected scene: Scene | null;

    constructor(public messageBus: MessageBus, private evaluator?: (entity: Entity, components: Component[]) => boolean) {
        this.entities = [];
        this.scene = null;
        this.messageBus.Subscribe(this, [
            System.MESSAGE_START, 
            System.MESSAGE_UPDATE, 
            System.MESSAGE_REGISTER, 
            System.MESSAGE_DEREGISTER,
            Scene.MESSAGE_START,
            Scene.MESSAGE_DESTROY
        ]);
    }

    abstract start(): void

    abstract update(dt: number): void

    public HandleMessage(message: IMessage): void {
        switch(message.type) {
            case System.MESSAGE_START:{
                this.start();
                break;
            }
            case System.MESSAGE_UPDATE: {
                // Will always be non null
                /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
                this.update((message as Message<number>).payload!);
                break;
            }
            case System.MESSAGE_REGISTER: {
                const registerMessage = message as Message<[Entity, Component[]]>;
                if (!registerMessage.payload) {
                    return;
                }
                this.register(registerMessage.payload[0], registerMessage.payload[1])
                break;
            }
            case System.MESSAGE_DEREGISTER: {
                const deregisterMessage = message as Message<Entity>;
                if (!deregisterMessage.payload) {
                    return;
                }
                this.deregister(deregisterMessage.payload);
                break;
            }
            case Scene.MESSAGE_START: {
                const sceneStartMessage = message as Message<Scene>;
                if (!sceneStartMessage.payload) {
                    return;
                }
                this.scene = sceneStartMessage.payload;
                break;
            }
            case Scene.MESSAGE_DESTROY: {
                const sceneDestroyMessage = message as Message<Scene>;
                if (!sceneDestroyMessage.payload) {
                    return;
                }
                if (!this.scene) {
                    return;
                }
                if(sceneDestroyMessage.payload.id == this.scene.id) {
                    this.scene = null;
                }
                break;
            }
        }
    }

    private deregister(entity: Entity): void {
        this.remove(entity)
    }

    private register(entity: Entity, components: Component[]): void {
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

    private remove(entity: Entity): void {
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