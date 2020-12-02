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
/* eslint-disable */

import Fake from "./fake";

class FakeAudioContext extends Fake implements AudioContext {
    baseLatency!: number;
    outputLatency!: number;
    audioWorklet!: AudioWorklet;
    currentTime!: number;
    destination!: AudioDestinationNode;
    listener!: AudioListener;
    onstatechange!: ((this: BaseAudioContext, ev: Event) => any) | null;
    sampleRate!: number;
    state!: AudioContextState;

    close(): Promise<void> {
        return Promise.resolve();
    }
    createMediaElementSource(mediaElement: HTMLMediaElement): MediaElementAudioSourceNode {
        return new MediaElementAudioSourceNode(new AudioContext(), { mediaElement: new HTMLMediaElement() });
    }
    createMediaStreamDestination(): MediaStreamAudioDestinationNode {
        return new MediaStreamAudioDestinationNode(new AudioContext());
    }
    createMediaStreamSource(mediaStream: MediaStream): MediaStreamAudioSourceNode {
        return new MediaStreamAudioSourceNode(new AudioContext(), { mediaStream: new MediaStream() });
    }
    createMediaStreamTrackSource(mediaStreamTrack: MediaStreamTrack): MediaStreamTrackAudioSourceNode {
        return new MediaStreamTrackAudioSourceNode(new AudioContext(), { mediaStreamTrack: new MediaStreamTrack() });
    }
    getOutputTimestamp(): AudioTimestamp {
        return {};
    }
    resume(): Promise<void> {
        return Promise.resolve();
    }
    suspend(): Promise<void> {
        return Promise.resolve();
    }
    addEventListener<K extends "statechange">(
        type: K,
        listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any,
        options?: boolean | AddEventListenerOptions | undefined
    ): void;
    addEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions | undefined
    ): void;
    addEventListener(type: any, listener: any, options?: any) {
        return;
    }
    removeEventListener<K extends "statechange">(
        type: K,
        listener: (this: AudioContext, ev: BaseAudioContextEventMap[K]) => any,
        options?: boolean | EventListenerOptions | undefined
    ): void;
    removeEventListener(
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions | undefined
    ): void;
    removeEventListener(type: any, listener: any, options?: any) {
        return;
    }
    createAnalyser(): AnalyserNode {
        return new AnalyserNode(new AudioContext());
    }
    createBiquadFilter(): BiquadFilterNode {
        return new BiquadFilterNode(new AudioContext());
    }
    createBuffer(numberOfChannels: number, length: number, sampleRate: number): AudioBuffer {
        return new AudioBuffer({ length, sampleRate, numberOfChannels });
    }
    createBufferSource(): AudioBufferSourceNode {
        return new AudioBufferSourceNode(new AudioContext());
    }
    createChannelMerger(numberOfInputs?: number | undefined): ChannelMergerNode {
        return new ChannelMergerNode(new AudioContext(), { numberOfInputs });
    }
    createChannelSplitter(numberOfOutputs?: number | undefined): ChannelSplitterNode {
        return new ChannelSplitterNode(new AudioContext(), { numberOfOutputs });
    }
    createConstantSource(): ConstantSourceNode {
        return new ConstantSourceNode(new AudioContext());
    }
    createConvolver(): ConvolverNode {
        return new ConvolverNode(new AudioContext());
    }
    createDelay(maxDelayTime?: number | undefined): DelayNode {
        return new DelayNode(new AudioContext());
    }
    createDynamicsCompressor(): DynamicsCompressorNode {
        return new DynamicsCompressorNode(new AudioContext());
    }
    createGain(): GainNode {
        return new GainNode(new AudioContext());
    }
    createIIRFilter(feedforward: number[], feedback: number[]): IIRFilterNode {
        return new IIRFilterNode(new AudioContext(), { feedback: feedback, feedforward: feedforward });
    }
    createOscillator(): OscillatorNode {
        return new OscillatorNode(new AudioContext());
    }
    createPanner(): PannerNode {
        return new PannerNode(new AudioContext());
    }
    createPeriodicWave(
        real: number[] | Float32Array,
        imag: number[] | Float32Array,
        constraints?: PeriodicWaveConstraints | undefined
    ): PeriodicWave {
        return new PeriodicWave(new AudioContext(), { real, imag });
    }
    createScriptProcessor(
        bufferSize?: number | undefined,
        numberOfInputChannels?: number | undefined,
        numberOfOutputChannels?: number | undefined
    ): ScriptProcessorNode {
        return new ScriptProcessorNode();
    }
    createStereoPanner(): StereoPannerNode {
        return new StereoPannerNode(new AudioContext());
    }
    createWaveShaper(): WaveShaperNode {
        return new WaveShaperNode(new AudioContext());
    }
    decodeAudioData(
        audioData: ArrayBuffer,
        successCallback?: DecodeSuccessCallback | null | undefined,
        errorCallback?: DecodeErrorCallback | null | undefined
    ): Promise<AudioBuffer> {
        return Promise.resolve(new AudioBuffer({ length: 0, sampleRate: 0 }));
    }
    dispatchEvent(event: Event): boolean {
        return false;
    }
}

export default FakeAudioContext;
