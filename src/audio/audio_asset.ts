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

/**
 * AudioAsset represents an in-memory audio asset that has been loaded/attempted
 * to be loaded.
 * Stores meta info around the audio, such as a name, the success
 * of the audio being loaded, and any errors from loading it.
 * Also stores the audio data itself.
 */
class AudioAsset {

    /**
     * Message when an audio asset is finished loading.
     */
    public static readonly MESSAGE_FINISH_LOAD = "finish_audio_load";

    /**
     * Name of the audio asset, how it is referred to throughout the system, 
     * should be unique.
     */
    public name: string;
    /**
     * The data of the audio.
     */
    public buffer: AudioBuffer;
    /**
     * An optional field, contains any error from loading the audio, if there is
     * none it will be undefined.
     */
    public error?: Error;

    constructor(name: string, 
        buffer: AudioBuffer,
        error?: Error) {
        this.name = name;
        this.buffer = buffer;
        this.error = error;
    }
}

export default AudioAsset;