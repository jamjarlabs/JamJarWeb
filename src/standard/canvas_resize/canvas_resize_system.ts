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
import FullscreenSystem from "../fullscreen/fullscreen_system";

/**
 * CanvasResizeSystem handles automatically resizing the game canvas based on the aspect ratio, maximum resolution, and
 * the HTML wrapper element around the canvas. The system set the canvas to the resolution that meets the following
 * criteria:
 * 1. In the aspect ratio provided.
 * 2. Smaller than or equal to the maximum resolution if provided.
 * 3. Smaller than or equal to the wrapper size in pixels if not full screen.
 * 4. Smaller than or equal to the screen resolution if full screen.
 * 5. The largest possible resolution within these criteria.
 */
class CanvasResizeSystem extends System {
    public static readonly MESSAGE_SET_ASPECT_RATIO = "jamjar_set_aspect_ratio";
    public static readonly MESSAGE_SET_MAX_RESOLUTION = "jamjar_set_max_resolution";

    private static readonly DEFAULT_ASPECT_RATIO = 16 / 9;

    private canvas: HTMLCanvasElement;
    private wrapper: HTMLElement;
    private browserScreen: Screen;
    private observer: ResizeObserver;
    private aspectRatio: number;
    private maxResolution: [number, number] | null;
    private isFullscreen: boolean;

    constructor(
        messageBus: IMessageBus,
        canvas: HTMLCanvasElement,
        wrapper: HTMLElement,
        aspectRatio: number = CanvasResizeSystem.DEFAULT_ASPECT_RATIO,
        scene?: IScene,
        isFullscreen = false,
        maxResolution: [number, number] | null = null,
        browserScreen: Screen = screen,
        subscriberID?: number
    ) {
        super(messageBus, scene, subscriberID);
        this.canvas = canvas;
        this.wrapper = wrapper;
        this.aspectRatio = aspectRatio;
        this.isFullscreen = isFullscreen;
        this.maxResolution = maxResolution;
        this.browserScreen = browserScreen;
        this.observer = new ResizeObserver(this.onResize.bind(this));
        this.observer.observe(wrapper);
        this.resizeCanvas();
        this.messageBus.Subscribe(this, [
            CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO,
            CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION,
            FullscreenSystem.MESSAGE_ENTER_FULLSCREEN,
            FullscreenSystem.MESSAGE_EXIT_FULLSCREEN,
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
                const setMaxResolutionMessage = message as Message<[number, number] | null>;
                if (setMaxResolutionMessage.payload === undefined) {
                    return;
                }
                this.maxResolution = setMaxResolutionMessage.payload;
                this.resizeCanvas();
                break;
            }
            case FullscreenSystem.MESSAGE_ENTER_FULLSCREEN: {
                this.isFullscreen = true;
                this.resizeCanvas();
                break;
            }
            case FullscreenSystem.MESSAGE_EXIT_FULLSCREEN: {
                this.isFullscreen = false;
                // This is a little bit of a hack, when exiting full screen to make sure the wrapper isn't being
                // affected by the size of the canvas set the canvas (temporarily) to size 0x0, the wrapper will
                // be resized which will trigger the canvas to resize appropriately immediately.
                this.canvasToZero();
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

    private canvasToZero(): void {
        this.canvas.width = 0;
        this.canvas.height = 0;
    }

    private resizeCanvas(): void {
        let maxWidth: number;
        let maxHeight: number;

        if (this.isFullscreen) {
            // If full screen, use the screen dimensions
            maxWidth = this.browserScreen.width;
            maxHeight = this.browserScreen.height;
        } else {
            // If not full screen, use the wrapper dimensions
            maxWidth = this.wrapper.clientWidth;
            maxHeight = this.wrapper.clientHeight;
        }

        // If max resolution set, limit to the max resolution
        if (this.maxResolution !== null) {
            if (this.maxResolution[0] < maxWidth) {
                maxWidth = this.maxResolution[0];
            }
            if (this.maxResolution[1] < maxHeight) {
                maxHeight = this.maxResolution[1];
            }
        }

        const resolution = CanvasResize.GetLargestResolutionForAspect(this.aspectRatio, maxWidth, maxHeight);

        this.canvas.width = resolution[0];
        this.canvas.height = resolution[1];
    }
}

export default CanvasResizeSystem;
