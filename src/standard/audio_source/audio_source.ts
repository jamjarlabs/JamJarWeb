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

import Component from "../../component/component";
import IAudioOptions from "../../audio/iaudio_options";

/**
 * AudioSource is a component for storing information around audio and how it
 * should be played. 
 */
class AudioSource extends Component {
    /**
     * Key of the audio source component.
     */
    public static readonly KEY = "audio_source";

    /**
     * The name of the audio asset to play.
     */
    public audio: string;
    /**
     * If the audio is playing or not, true = playing, false = not playing.
     */
    public playing: boolean;
    /**
     * The volume of the audio, between 0 and 1
     */
    public volume: number;
    /**
     * If the audio should loop, equal to the number of loops it should
     * complete, or -1 for an infinite amount of loops. E.g. a value of 3 would
     * result in 1 initial play and 3 looped plays.
     */
    public loop: number;
    /**
     * The playback rate for the audio as a decimal proportion of the original
     * sampling rate. A value of 1.0 is the audio at normal speed, 0.5 is half
     * speed, 2.0 is double speed.
     */
    public playbackRate: number;
    /**
     * Audio processing function, during audio playback this function will be
     * called and allows injection of filters/customisation. This uses the Web
     * Audio API. The node returned should be the last node in the node chain.
     * https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
     */
    public audioProcessor?: (base: AudioBufferSourceNode, context: AudioContext) => AudioNode;
    /**
     * Internal variable used to track how many times the audio source has been
     * played, used to determine if it should continue looping.
     */
    public playCount: number;

    constructor(audio: string, options: IAudioOptions = {}, playCount = 0) {
        super(AudioSource.KEY);

        // Audio options
        const audioOptions = {
            playing: false,
            volume: 1.0,
            loop: 0,
            playbackRate: 1,
            ...options
        };
        this.audio = audio;
        this.playing = audioOptions.playing;
        this.volume = audioOptions.volume;
        this.loop = audioOptions.loop;
        this.playbackRate = audioOptions.playbackRate;
        this.audioProcessor = audioOptions.audioProcessor;

        // Internal state tracking
        this.playCount = playCount;
    }

    /**
     * Stops the audio, when it is replayed it will play from the start.
     */
    public Stop(): void {
        this.playing = false;
    }

    /**
     * Plays the audio, resets the play counter; will loop again for the number
     * of times specified.
     */
    public Play(): void {
        this.playing = true;
        this.playCount = 0;
    }
}

export default AudioSource;