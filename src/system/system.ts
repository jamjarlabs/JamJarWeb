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

import Message from "../message/message";
import IMessage from "../message/imessage";
import Subscriber from "../message/subscriber";
import IMessageBus from "../message/imessage_bus";
import IScene from "../scene/iscene";
import Scene from "../scene/scene";

/**
 * System is one of the key elements of the Entity-Component-System architecture.
 * A system is for implementing logic, manipulating entities and their components.
 */
abstract class System extends Subscriber {
    public static readonly MESSAGE_UPDATE = "system_update";

    /**
     * Reference to the message bus, the fundamental piece of JamJar
     * for communicating with other parts of the engine.
     */
    protected messageBus: IMessageBus;
    /**
     * Any scene this system is part of, will change the lifecycle of the
     * system to be part of the scene's lifecycle - it will be destroyed
     * when the scene is destroyed.
     */
    protected scene?: IScene;

    constructor(messageBus: IMessageBus, scene?: IScene, subscriberID?: number) {
        super(subscriberID);
        this.messageBus = messageBus;
        this.scene = scene;
        this.messageBus.Subscribe(this, [System.MESSAGE_UPDATE, Scene.MESSAGE_DESTROY]);
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
            case Scene.MESSAGE_DESTROY: {
                const sceneDestroyMessage = message as Message<IScene>;
                if (sceneDestroyMessage.payload === undefined) {
                    return;
                }
                if (this.scene === undefined) {
                    return;
                }
                if (sceneDestroyMessage.payload.id === this.scene.id) {
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
}

export default System;
