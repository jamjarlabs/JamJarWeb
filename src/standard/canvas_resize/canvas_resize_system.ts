/*
Copyright 2021 JamJar Authors

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

import IMessageBus from "../../message/imessage_bus";
import IScene from "../../scene/iscene";
import IMessage from "../../message/imessage";
import System from "../../system/system";
import CanvasResize from "./canvas_resize";
import Message from "../../message/message";

class CanvasResizeSystem extends System {
    public static readonly MESSAGE_SET_ASPECT_RATIO = "jamjar_set_aspect_ratio";
    public static readonly MESSAGE_SET_MAX_RESOLUTION = "jamjar_set_max_resolution";

    private static readonly DEFAULT_ASPECT_RATIO = 16 / 9;

    private canvas: HTMLCanvasElement;
    private wrapper: HTMLElement;
    private observer: ResizeObserver;
    private aspectRatio: number;
    private maxResolution?: [number, number];

    constructor(
        messageBus: IMessageBus,
        canvas: HTMLCanvasElement,
        wrapper: HTMLElement,
        aspectRatio: number = CanvasResizeSystem.DEFAULT_ASPECT_RATIO,
        scene?: IScene,
        subscriberID?: number
    ) {
        super(messageBus, scene, subscriberID);
        this.canvas = canvas;
        this.wrapper = wrapper;
        this.aspectRatio = aspectRatio;
        this.observer = new ResizeObserver(this.onResize.bind(this));
        this.observer.observe(wrapper);
        this.resizeCanvas();
        this.messageBus.Subscribe(this, [
            CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO,
            CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO: {
                const setAspectRatioMessage = message as Message<number>;
                if (setAspectRatioMessage.payload === undefined) {
                    return;
                }
                this.aspectRatio = setAspectRatioMessage.payload;
                this.resizeCanvas();
                break;
            }
            case CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION: {
                const setMaxResolutionMessage = message as Message<[number, number]>;
                if (setMaxResolutionMessage.payload === undefined) {
                    return;
                }
                this.maxResolution = setMaxResolutionMessage.payload;
                this.resizeCanvas();
                break;
            }
        }
    }

    protected onResize(): void {
        this.resizeCanvas();
    }

    protected OnDestroy(): void {
        this.observer.disconnect();
    }

    private resizeCanvas(): void {
        let maxWidth = this.wrapper.clientWidth;
        let maxHeight = this.wrapper.clientHeight;
        if (this.maxResolution !== undefined && this.maxResolution[0] < maxWidth) {
            maxWidth = this.maxResolution[0];
        }
        if (this.maxResolution !== undefined && this.maxResolution[1] < maxHeight) {
            maxHeight = this.maxResolution[1];
        }

        const resolution = CanvasResize.GetLargestResolutionForAspect(this.aspectRatio, maxWidth, maxHeight);
        this.canvas.width = resolution[0];
        this.canvas.height = resolution[1];
    }
}

export default CanvasResizeSystem;
