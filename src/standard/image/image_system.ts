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
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import ImageAsset from "./image_asset";

/**
 * ImageSystem handles loading image assets in and making them available
 * to the engine for rendering.
 */
class ImageSystem extends System {
    public static readonly MESSAGE_REQUEST_FLUSH = "request_image_flush";
    public static readonly MESSAGE_REQUEST_LOAD = "request_image_load";
    public static readonly MESSAGE_REQUEST_CLEAR = "request_image_clear";

    public static readonly MESSAGE_FINISH_LOAD = "request_finish_load_image";

    private loadQueue: ImageAsset[];
    private images: ImageAsset[];

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number,
        images: ImageAsset[] = [],
        loadQueue: ImageAsset[] = []) {
        super(messageBus, scene, undefined, entities, subscriberID)
        this.loadQueue = loadQueue;
        this.images = images;
        this.messageBus.Subscribe(this, ImageSystem.MESSAGE_REQUEST_LOAD);
        this.messageBus.Subscribe(this, ImageSystem.MESSAGE_REQUEST_FLUSH);
        this.messageBus.Subscribe(this, ImageSystem.MESSAGE_REQUEST_CLEAR);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case ImageSystem.MESSAGE_REQUEST_LOAD: {
                const loadMessage = message as Message<[string, string]>;
                if (loadMessage.payload === undefined) {
                    return;
                }
                const name = loadMessage.payload[0];
                const src = loadMessage.payload[1];
                this.load(name, src);
                break;
            }
            case ImageSystem.MESSAGE_REQUEST_FLUSH: {
                this.flush();
                break;
            }
            case ImageSystem.MESSAGE_REQUEST_CLEAR: {
                this.clear();
                break;
            }
        }
    }

    protected Update(): void {
        for (let i = 0; i < this.loadQueue.length; i++) {
            const imageAsset = this.loadQueue[i]
            this.images.push(imageAsset)
            this.messageBus.Publish(new Message<ImageAsset>(ImageSystem.MESSAGE_FINISH_LOAD, imageAsset));
        }
        this.loadQueue = [];
    }

    protected onLoad(event: Event | undefined, image: HTMLImageElement, name: string): void {
        const asset = new ImageAsset(name, image, true);
        this.messageBus.Publish(new Message<ImageAsset>(ImageSystem.MESSAGE_FINISH_LOAD, asset));
        this.images.push(asset);
    }

    protected onError(event: Event | undefined, image: HTMLImageElement, name: string): void {
        const asset = new ImageAsset(name, image, false, new Error(`Failed to load image ${name} from source ${image.src}`));
        this.messageBus.Publish(new Message<ImageAsset>(ImageSystem.MESSAGE_FINISH_LOAD, asset));
        this.images.push(asset);
    }

    private load(name: string, src: string): void {
        const img = new Image();
        img.addEventListener("error", this.onError.bind(this, event, img, name));
        img.addEventListener("load", this.onLoad.bind(this, event, img, name));
        img.src = src;
    }

    private flush(): void {
        for (let i = 0; i < this.images.length; i++) {
            this.messageBus.Publish(new Message<ImageAsset>(ImageSystem.MESSAGE_FINISH_LOAD, this.images[i]));
        }
    }

    private clear(): void {
        this.images = [];
    }

}

export default ImageSystem;