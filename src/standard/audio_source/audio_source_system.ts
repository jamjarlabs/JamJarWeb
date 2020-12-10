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

import AudioAsset from "../../audio/audio_asset";
import IMessageBus from "../../message/imessage_bus";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import AudioSource from "./audio_source";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Message from "../../message/message";
import IMessage from "../../message/imessage";
import MapSystem from "../../system/map_system";

/**
 * AudioSourceSystem handles interpreting AudioSources and playing the audio
 * associated with them with the Audio Web API.
 */
class AudioSourceSystem extends MapSystem {
    /**
     * Only entities with an audio source.
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return components.some((component) => component.key === AudioSource.KEY);
    };

    /**
     * Map of audio instances, mapped to entity IDs.
     */
    private instances: Map<number, AudioBufferSourceNode>;
    /**
     * Map of audio data, mapped to unique key names for retrieval and reuse.
     */
    private assets: Map<string, AudioBuffer>;
    /**
     * The context for playing the audio.
     */
    private context: AudioContext;

    constructor(
        messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
        instances: Map<number, AudioBufferSourceNode> = new Map(),
        assets: Map<string, AudioBuffer> = new Map(),
        context: AudioContext = new AudioContext()
    ) {
        super(messageBus, scene, AudioSourceSystem.EVALUATOR, entities, subscriberID);

        this.instances = instances;
        this.assets = assets;
        this.context = context;

        // Subscribe to audio asset loading
        this.messageBus.Subscribe(this, AudioAsset.MESSAGE_FINISH_LOAD);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case AudioAsset.MESSAGE_FINISH_LOAD: {
                const loadMessage = message as Message<AudioAsset>;
                if (loadMessage.payload === undefined) {
                    return;
                }
                this.load(loadMessage.payload);
                break;
            }
        }
    }

    private load(asset: AudioAsset): void {
        if (asset.error !== undefined) {
            console.warn(`Failed to load Audio asset '${asset.name}': ${asset.error.message}`);
            return;
        }
        this.assets.set(asset.name, asset.buffer);
    }

    protected audioEnd(entityID: number): void {
        // When an AudioBufferSourceNode finishes it cannot be reused, it is
        // single use - it should be deleted at this point so it can be garbage
        // collected and if it is played again (e.g. looped) it can be
        // inexpensively recreated from the AudioBuffer
        this.instances.delete(entityID);
    }

    protected Update(): void {
        for (const entity of this.entities.values()) {
            const source = entity.Get(AudioSource.KEY) as AudioSource;

            const asset = this.assets.get(source.audio);
            if (asset === undefined) {
                // Asset not loaded, skip handling this audio
                continue;
            }

            if (!source.playing) {
                // Not playing, stop audio if running
                const instance = this.instances.get(entity.entity.id);
                if (instance !== undefined) {
                    instance.stop();
                    this.instances.delete(entity.entity.id);
                }
                continue;
            }

            if (source.playCount > source.loop + 1 && source.loop !== -1) {
                // Played more times than looping and not infinitely looping,
                // skip playing audio
                source.playing = false;
                source.playCount = 0;
                continue;
            }

            if (this.instances.has(entity.entity.id)) {
                // Audio instance already exists, skip playing new, update
                // existing
                continue;
            }

            // Create new audio buffer source node from audio buffer
            const base = this.context.createBufferSource();
            base.buffer = asset;
            base.playbackRate.value = source.playbackRate;
            base.onended = this.audioEnd.bind(this, entity.entity.id);

            // End node keeps track of the end of the node chain
            let end: AudioNode = base;

            // If there is a supplied audio processor function, execute it
            if (source.audioProcessor !== undefined) {
                end = source.audioProcessor(base, this.context);
            }

            // Add volume gain node
            const volumeGain = this.context.createGain();
            volumeGain.gain.value = source.volume;
            end.connect(volumeGain);

            // Update end node to point to volume gain node, the last one added
            end = volumeGain;

            end.connect(this.context.destination);

            // Update instances with new audio buffer source node
            this.instances.set(entity.entity.id, base);

            // Increment the number of times played
            source.playCount++;

            // Play the audio
            base.start();
        }

        // Clear out unused audio instances - for example if the audio source it
        // is assigned to is removed from an entity or the entity is removed.
        for (const instanceKey of this.instances.keys()) {
            if (!this.entities.has(instanceKey)) {
                this.instances.delete(instanceKey);
            }
        }
    }
}

export default AudioSourceSystem;
