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

import MessageBus from "./message/message_bus";
import Message from "./message/message";
import System from "./system/system";
import EntityManager from "./entity/entity_manager";
import ISystemManager from "./system/isystem_manager";
import ISubscriber from "./message/isubscriber";
import Scene from "./scene/scene";
import IMessage from "./message/imessage";

abstract class Game implements ISubscriber, ISystemManager {

    private static readonly TIME_STEP = 1000 / 100;

    public readonly name: string;

    public systems: System[];

    protected scene: Scene | null;

    protected messageBus: MessageBus;

    private accumulator: number;
    private currentTime: number;

    constructor({name = "game"}: {name?: string}) {
        this.name = name;
        this.messageBus = new MessageBus();
        this.accumulator = 0;
        this.currentTime = 0;
        this.systems = [];
        this.scene = null;
        this.messageBus.Subscribe(this, [Scene.MESSAGE_START, Scene.MESSAGE_DESTROY])
        new EntityManager(this.messageBus);
    }

    protected abstract onStart(): void;

    public HandleMessage(message: IMessage): void {
        switch(message.type) {
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
    
    public Start(): void  {
        this.onStart();
        this.messageBus.Dispatch();
        this.accumulator = 0;
		this.currentTime = Date.now();
        this.loop();
        this.messageBus.Publish(new Message(System.MESSAGE_START));
    }

    public AddSystem(system: System): void {
        this.systems.push(system);
    }

    private loop(): void  {
		const newTime = Date.now();
		const frameTime = newTime - this.currentTime;
		this.currentTime = newTime;

		this.accumulator += frameTime;
		while (this.accumulator >= Game.TIME_STEP) {
			this.messageBus.Publish(new Message(System.MESSAGE_UPDATE, Game.TIME_STEP / 1000))
			this.messageBus.Dispatch();
			this.accumulator -= Game.TIME_STEP;
		}
		// const alpha = this.accumulator / Game.TIME_STEP;
		// render
		this.messageBus.Dispatch();
		requestAnimationFrame(() => { this.loop(); });
    }
}

export default Game;