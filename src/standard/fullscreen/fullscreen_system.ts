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
import SystemEntity from "../../system/system_entity";
import IMessage from "../../message/imessage";
import IScene from "../../scene/iscene";
import Message from "../../message/message";

/**
 * FullscreenSystem handles JS fullscreen change events, and provides a method for requesting 
 * entering/existing fullscreen/pointer lock.
 */
class FullscreenSystem extends System {

    public static readonly MESSAGE_REQUEST_ENTER_FULLSCREEN = "message_request_enter_fullscreen";
    public static readonly MESSAGE_REQUEST_EXIT_FULLSCREEN = "message_request_exit_fullscreen";

    public static readonly MESSAGE_ENTER_FULLSCREEN = "message_enter_fullscreen";
    public static readonly MESSAGE_EXIT_FULLSCREEN = "message_exit_fullscreen";

    private canvas: HTMLCanvasElement;
    private document: HTMLDocument;

    constructor(messageBus: IMessageBus, 
        canvas: HTMLCanvasElement, 
        document: HTMLDocument, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, undefined, entities, subscriberID);
        this.messageBus.Subscribe(this, [
            FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN,
            FullscreenSystem.MESSAGE_REQUEST_EXIT_FULLSCREEN,
        ]);
        this.canvas = canvas;
        this.document = document;
        this.document.addEventListener("fullscreenchange", this.onFullscreenChange.bind(this));
    }

    /**
     * When a fullsceenchange event occurs this method is called, handles forwarding the fullscreen events
     * into the JamJar ECS messaging system.
     * @param event The fullscreenchange event
     */
    protected onFullscreenChange(event: Event): void {
        if (this.document.fullscreenElement === null) {
            this.messageBus.Publish(new Message(FullscreenSystem.MESSAGE_EXIT_FULLSCREEN));
        } else {
            this.messageBus.Publish(new Message(FullscreenSystem.MESSAGE_ENTER_FULLSCREEN));
        }
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN: {
                this.canvas.requestFullscreen();
                this.canvas.requestPointerLock();
                break;
            }
            case FullscreenSystem.MESSAGE_REQUEST_EXIT_FULLSCREEN: {
                this.document.exitFullscreen();
                this.document.exitPointerLock();
                break;
            }
        }
    }
}

export default FullscreenSystem;