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
import Message from "../../message/message";
import IMessageBus from "../../message/imessage_bus";

/**
 * KeyboardSystem handles Keyboard input events, converting them into JamJar ECS messages.
 */
class KeyboardSystem extends System {

    // Message when a keyboard button is pressed down
    public static readonly MESSAGE_KEY_DOWN: string = "keyboard_key_down";
    // Message when a keyboard button is released
    public static readonly MESSAGE_KEY_UP: string = "keyboard_key_up";

    private inputElement: HTMLDocument;

    constructor(messageBus: IMessageBus, inputElement: HTMLDocument) {
        super(messageBus);
        this.inputElement = inputElement;
        this.inputElement.addEventListener("keydown", (event: KeyboardEvent): void => { this.keyDown(event); });
        this.inputElement.addEventListener("keyup", (event: KeyboardEvent): void => { this.keyUp(event); });
    }

    /**
     * On key down publish keydown ECS message.
     * @param {KeyboardEvent} event KeyboardEvent of the keydown
     */
    private keyDown(event: KeyboardEvent): void {
        this.messageBus.Publish(new Message<string>(KeyboardSystem.MESSAGE_KEY_DOWN, event.key));
    }

        /**
     * On key down publish keyup ECS message.
     * @param {KeyboardEvent} event KeyboardEvent of the keydown
     */
    private keyUp(event: KeyboardEvent): void {
        this.messageBus.Publish(new Message<string>(KeyboardSystem.MESSAGE_KEY_UP, event.key));
    }
}

export default KeyboardSystem;