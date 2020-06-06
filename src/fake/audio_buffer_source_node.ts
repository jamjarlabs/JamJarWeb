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

class FakeAudioBufferSourceNode extends Fake implements AudioBufferSourceNode {
    buffer!: AudioBuffer | null;
    detune!: AudioParam;
    loop!: boolean;
    loopEnd!: number;
    loopStart!: number;
    playbackRate!: AudioParam;
    channelCount!: number;
    channelCountMode!: ChannelCountMode;
    channelInterpretation!: ChannelInterpretation;
    context!: BaseAudioContext;
    numberOfInputs!: number;
    numberOfOutputs!: number;
    onended!: ((this: AudioScheduledSourceNode, ev: Event) => any) | null;
    
    start(when?: number | undefined, offset?: number | undefined, duration?: number | undefined): void {
        return;
    }
    addEventListener<K extends "ended">(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions | undefined): void;
    addEventListener(type: any, listener: any, options?: any) {
        return;
    }
    removeEventListener<K extends "ended">(type: K, listener: (this: AudioBufferSourceNode, ev: AudioScheduledSourceNodeEventMap[K]) => any, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions | undefined): void;
    removeEventListener(type: any, listener: any, options?: any) {
        return;
    }
    stop(when?: number | undefined): void {
        return;
    }
    connect(destinationNode: AudioNode, output?: number | undefined, input?: number | undefined): AudioNode;
    connect(destinationParam: AudioParam, output?: number | undefined): void;
    connect(destinationNode: any, output?: any, input?: any) {
        return {};
    }
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destinationNode: AudioNode): void;
    disconnect(destinationNode: AudioNode, output: number): void;
    disconnect(destinationNode: AudioNode, output: number, input: number): void;
    disconnect(destinationParam: AudioParam): void;
    disconnect(destinationParam: AudioParam, output: number): void;
    disconnect(destinationNode?: any, output?: any, input?: any) {
        return;
    }
    dispatchEvent(event: Event): boolean {
        return false;
    }

}

export default FakeAudioBufferSourceNode;