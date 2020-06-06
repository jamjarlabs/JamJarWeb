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

class FakeGainNode extends Fake implements GainNode {
    gain!: AudioParam;
    channelCount!: number;
    channelCountMode!: ChannelCountMode;
    channelInterpretation!: ChannelInterpretation;
    context!: BaseAudioContext;
    numberOfInputs!: number;
    numberOfOutputs!: number;
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
        return {};
    }
    addEventListener(type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void {
        return;
    }
    dispatchEvent(event: Event): boolean {
        return false;
    }
    removeEventListener(type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined): void {
        return;
    }

}

export default FakeGainNode;