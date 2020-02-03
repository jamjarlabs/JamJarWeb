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

import System from "../../system/system";
import IMessageBus from "../../message/imessage_bus";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import Message from "../../message/message";

/**
 * KeyboardSystem handles Keyboard input events, converting them into JamJar ECS messages.
 */
class KeyboardSystem extends System {

    // Message when a keyboard button is pressed down
    public static readonly MESSAGE_KEY_DOWN: string = "keyboard_key_down";
    // Message when a keyboard button is released
    public static readonly MESSAGE_KEY_UP: string = "keyboard_key_up";

    private inputElement: HTMLDocument;

    private keyEvents: [string, string][];

    constructor(messageBus: IMessageBus, inputElement: HTMLDocument,
        { scene, entities, subscriberID, keyEvents }:
            { scene: IScene | undefined; entities: SystemEntity[]; subscriberID: number | undefined; keyEvents: [string, string][] } =
            { scene: undefined, entities: [], subscriberID: undefined, keyEvents: [] }) {
        super(messageBus, { scene, evaluator: undefined, entities, subscriberID });
        this.inputElement = inputElement;
        this.keyEvents = keyEvents;
        this.inputElement.addEventListener("keydown", (event: KeyboardEvent): void => { 
            this.keyEvent(KeyboardSystem.MESSAGE_KEY_DOWN, event); 
        });
        this.inputElement.addEventListener("keyup", (event: KeyboardEvent): void => { 
            this.keyEvent(KeyboardSystem.MESSAGE_KEY_UP, event); 
        });
    }

    protected Update(): void {
        for(let i = 0; i < this.keyEvents.length; i++) {
            const keyEvent = this.keyEvents[i];
            this.messageBus.Publish(new Message<string>(keyEvent[0], keyEvent[1]));
        }
        this.keyEvents = [];
    }

    /**
     * When a Keyboard Event occurs; used to store keyboard events to be dispatched at the next update.
     * @param {string} type KeyboardEvent type
     * @param {KeyboardEvent} event Keyboard Event
     */
    private keyEvent(type: string, event: KeyboardEvent): void {
        this.keyEvents.push([type, event.key]);
    }
}

export default KeyboardSystem;