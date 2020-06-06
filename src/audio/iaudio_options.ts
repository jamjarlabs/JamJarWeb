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
 * IAudioOptions represents optional properties for audio playback, will
 * generally be used with defaults that are overridden.
 */
interface IAudioOptions {
    /**
     * If the audio is playing or not, true = playing, false = not playing.
     */
    playing?: boolean;
    /**
     * The volume of the audio, between 0 and 1
     */
    volume?: number;
    /**
     * If the audio should loop, equal to the number of loops it should
     * complete, or -1 for an infinite amount of loops. E.g. a value of 3 would
     * result in 1 initial play and 3 looped plays.
     */
    loop?: number;
    /**
     * The playback rate for the audio as a decimal proportion of the original
     * sampling rate. A value of 1.0 is the audio at normal speed, 0.5 is half
     * speed, 2.0 is double speed.
     */
    playbackRate?: number;
    /**
     * Audio processing function, during audio playback this function will be
     * called and allows injection of filters/customisation. This uses the Web
     * Audio API. The node returned should be the last node in the node chain.
     * https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
     */
    audioProcessor?: (base: AudioBufferSourceNode, context: AudioContext) => AudioNode;
}

export default IAudioOptions;