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

import IMessageBus from "../../message/imessage_bus";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import AudioRequest from "../../audio/audio_request";
import AudioAsset from "../../audio/audio_asset";
import MapSystem from "../../system/map_system";

/**
 * HTTPAudioSystem handles loading audio assets over HTTP and making them
 * available to the engine for playing.
 */
class HTTPAudioSystem extends MapSystem {
    /**
     * Message to send out all loaded asset messages that are currently loaded.
     */
    public static readonly MESSAGE_REQUEST_FLUSH = "request_audio_flush";
    /**
     * Message to clear out loaded assets.
     */
    public static readonly MESSAGE_REQUEST_CLEAR = "request_audio_clear";

    private assets: AudioAsset[];
    private context: AudioContext;

    constructor(
        messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
        assets: AudioAsset[] = [],
        context: AudioContext = new AudioContext()
    ) {
        super(messageBus, scene, undefined, entities, subscriberID);

        this.assets = assets;
        this.context = context;

        this.messageBus.Subscribe(this, [
            AudioRequest.MESSAGE_REQUEST_LOAD,
            HTTPAudioSystem.MESSAGE_REQUEST_FLUSH,
            HTTPAudioSystem.MESSAGE_REQUEST_CLEAR,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case AudioRequest.MESSAGE_REQUEST_LOAD: {
                const loadMessage = message as Message<AudioRequest>;
                if (loadMessage.payload === undefined) {
                    return;
                }
                this.load(loadMessage.payload);
                break;
            }
            case HTTPAudioSystem.MESSAGE_REQUEST_FLUSH: {
                this.flush();
                break;
            }
            case HTTPAudioSystem.MESSAGE_REQUEST_CLEAR: {
                this.clear();
                break;
            }
        }
    }

    protected httpSuccess(buffer: AudioBuffer, request: AudioRequest): void {
        const asset = new AudioAsset(request.name, buffer);
        this.messageBus.Publish(Message.New<AudioAsset>(AudioAsset.MESSAGE_FINISH_LOAD, asset));
        this.assets.push(asset);
    }

    protected httpError(request: AudioRequest, error: Error): void {
        const asset = new AudioAsset(request.name, new AudioBuffer({ length: 1, sampleRate: 3000 }), error);
        this.messageBus.Publish(Message.New<AudioAsset>(AudioAsset.MESSAGE_FINISH_LOAD, asset));
        this.assets.push(asset);
    }

    protected handleResponse(response: Response): Promise<ArrayBuffer> {
        if (!response.ok) {
            // Non 404 response code
            throw Error(response.statusText);
        }
        return response.arrayBuffer();
    }

    private load(request: AudioRequest): void {
        // HTTP fetch request to source
        fetch(request.source)
            .then(this.handleResponse)
            .then((buffer) => this.context.decodeAudioData(buffer))
            .then((buffer) => this.httpSuccess(buffer, request))
            .catch((error) => this.httpError(request, error));
    }

    private flush(): void {
        for (let i = 0; i < this.assets.length; i++) {
            this.messageBus.Publish(Message.New<AudioAsset>(AudioAsset.MESSAGE_FINISH_LOAD, this.assets[i]));
        }
    }

    private clear(): void {
        this.assets.length = 0;
    }
}

export default HTTPAudioSystem;
