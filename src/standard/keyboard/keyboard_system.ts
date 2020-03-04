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
    private inputElement: HTMLDocument;

    private keyEvents: [string, string][];

    constructor(messageBus: IMessageBus, inputElement: HTMLDocument,
        { scene, entities, subscriberID, keyEvents }:
            { scene: IScene | undefined; entities: Map<number, SystemEntity>; subscriberID: number | undefined; keyEvents: [string, string][] } =
            { scene: undefined, entities: new Map(), subscriberID: undefined, keyEvents: [] }) {
        super(messageBus, { scene, evaluator: undefined, entities, subscriberID });
        this.inputElement = inputElement;
        this.keyEvents = keyEvents;
        this.inputElement.addEventListener("keydown", this.keyEvent.bind(this));
        this.inputElement.addEventListener("keyup", this.keyEvent.bind(this));
    }

    protected Update(): void {
        for(let i = 0; i < this.keyEvents.length; i++) {
            const keyEvent = this.keyEvents[i];
            this.messageBus.Publish(new Message<string>(keyEvent[0], keyEvent[1]));
        }
        this.keyEvents = [];
    }

    protected OnDestroy(): void {
        this.inputElement.removeEventListener("keydown", this.keyEvent);
        this.inputElement.removeEventListener("keyup", this.keyEvent);
    }

    /**
     * When a Keyboard Event occurs; used to store keyboard events to be dispatched at the next update.
     * @param {KeyboardEvent} event Keyboard Event
     */
    protected keyEvent(event: KeyboardEvent): void {
        this.keyEvents.push([event.type, event.code]);
    }
}

export default KeyboardSystem;