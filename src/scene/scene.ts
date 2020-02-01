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
import IMessage from "../message/imessage";
import Message from "../message/message";
import IMessageBus from "../message/imessage_bus";
import IScene from "./iscene";
import IEntity from "../entity/ientity";

/**
 * Scene is a way to categorise entities, components and systems together, allowing them to be loaded/deleted
 * together.
 */
abstract class Scene extends Subscriber implements IScene {

    public static readonly MESSAGE_DESTROY = "scene_destroy";
    public static readonly MESSAGE_ON_START = "scene_on_start";

    private static ID = 0;

    public id: number;

    private entities: IEntity[];

    constructor(protected messageBus: IMessageBus, entities: IEntity[] = []) {
        super();
        this.id = Scene.ID++;
        this.entities = entities;
        this.messageBus.Subscribe(this, [
            Scene.MESSAGE_ON_START
        ]);
    }

    /**
     * OnStart is triggered on scene start.
     */
    protected OnStart(): void {
        return;
    }

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

    public AddEntity(entity: IEntity): void {
        this.entities.push(entity);
    }

    /**
     * Destroy destroys the scene, alongside all linked entities, components and systems.
     */
    public Destroy(): void {
        this.messageBus.Publish(new Message<Scene>(Scene.MESSAGE_DESTROY, this));
        for (const entity of this.entities) {
            entity.Destroy();
        }
        this.entities = [];
    }

    /**
     * Start starts this scene
     */
    public Start(): void {
        this.messageBus.Publish(new Message<Scene>(Scene.MESSAGE_ON_START, this));
    }
}

export default Scene;