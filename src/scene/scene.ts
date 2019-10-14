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
import MessageBus from "../message/message_bus";
import IMessage from "../message/imessage";
import Message from "../message/message";
import ISystemManager from "../system/isystem_manager";
import System from "../system/system";

abstract class Scene implements ISubscriber, ISystemManager {

    public static readonly MESSAGE_START = "scene_start";
    public static readonly MESSAGE_DESTROY = "scene_destroy";

    private static ID = 0;

    public id: number;

    public systems: System[];

    constructor(public messageBus: MessageBus) {
        this.id = Scene.ID++;
        this.systems = [];
    }

    protected abstract onDestroy(): void;

    protected abstract onStart(): void;

    public AddSystem(system: System): void {
        this.systems.push(system);
    }

    public abstract HandleMessage(message: IMessage): void;

    public Destroy(): void {
        this.onDestroy();
        this.messageBus.Publish(new Message<Scene>(Scene.MESSAGE_DESTROY, this));
    }

    public Start(): void {
        this.onStart();
        this.messageBus.Publish(new Message<Scene>(Scene.MESSAGE_START, this));
    }
}

export default Scene;