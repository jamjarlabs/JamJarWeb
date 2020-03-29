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
import ImageAsset from "../../rendering/image_asset";

/**
 * HTTPImageSystem handles loading image assets in and making them available
 * to the engine for rendering.
 */
class HTTPImageSystem extends System {
    public static readonly MESSAGE_REQUEST_FLUSH = "request_image_flush";
    public static readonly MESSAGE_REQUEST_CLEAR = "request_image_clear";

    private images: ImageAsset[];

    constructor(messageBus: IMessageBus, 
        scene?: IScene, 
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number,
        images: ImageAsset[] = []) {
        super(messageBus, scene, undefined, entities, subscriberID);
        this.images = images;
        this.messageBus.Subscribe(this, ImageAsset.MESSAGE_REQUEST_LOAD);
        this.messageBus.Subscribe(this, HTTPImageSystem.MESSAGE_REQUEST_FLUSH);
        this.messageBus.Subscribe(this, HTTPImageSystem.MESSAGE_REQUEST_CLEAR);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case ImageAsset.MESSAGE_REQUEST_LOAD: {
                const loadMessage = message as Message<[string, string]>;
                if (loadMessage.payload === undefined) {
                    return;
                }
                const name = loadMessage.payload[0];
                const src = loadMessage.payload[1];
                this.load(name, src);
                break;
            }
            case HTTPImageSystem.MESSAGE_REQUEST_FLUSH: {
                this.flush();
                break;
            }
            case HTTPImageSystem.MESSAGE_REQUEST_CLEAR: {
                this.clear();
                break;
            }
        }
    }

    protected onLoad(event: Event | undefined, image: HTMLImageElement, name: string): void {
        const asset = new ImageAsset(name, image, true);
        this.messageBus.Publish(new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, asset));
        this.images.push(asset);
    }

    protected onError(event: Event | undefined, image: HTMLImageElement, name: string): void {
        const asset = new ImageAsset(name, image, false, new Error(`Failed to load image ${name} from source ${image.src}`));
        this.messageBus.Publish(new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, asset));
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
            this.messageBus.Publish(new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, this.images[i]));
        }
    }

    private clear(): void {
        this.images = [];
    }

}

export default HTTPImageSystem;