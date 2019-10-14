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

import Subscriber from "../message/subscriber";
import MessageBus from "../message/message_bus";
import IMessage from "../message/imessage";
import Message from "../message/message";
import Entity from "../entity/entity";

abstract class Scene extends Subscriber {

    public static readonly MESSAGE_DESTROY = "scene_destroy";
    private static readonly MESSAGE_ON_START = "scene_on_start";

    private static ID = 0;

    public id: number;

    private entities: Entity[];

    constructor(protected messageBus: MessageBus) {
        super();
        this.id = Scene.ID++;
        this.entities = [];
        this.messageBus.Subscribe(this, [
            Scene.MESSAGE_ON_START
        ]);
    }

    protected abstract OnStart(): void;

    public OnMessage(message: IMessage): void {
        switch(message.type) {
            case Scene.MESSAGE_ON_START: {
                const sceneStartMessage = message as Message<Scene>;
                if (!sceneStartMessage.payload) {
                    return;
                }
                if (this.id == sceneStartMessage.payload.id) {
                    this.OnStart();
                }
                break;
            }
        }
    }

    public AddEntity(entity: Entity): void {
        this.entities.push(entity);
    }

    public Destroy(): void {
        this.messageBus.Publish(new Message<Scene>(Scene.MESSAGE_DESTROY, this));
        for (const entity of this.entities) {
            entity.Destroy();
        }
        this.entities = [];
    }

    public Start(): void {
        this.OnStart();
    }
}

export default Scene;