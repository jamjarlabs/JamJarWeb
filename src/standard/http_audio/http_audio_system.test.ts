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

import HTTPAudioSystem from "./http_audio_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import AudioAsset from "../../audio/audio_asset";
import AudioRequest from "../../audio/audio_request";
import FakeResponse from "../../fake/response";
import Reactor from "../../fake/reactor";
import ImageRequest from "../../rendering/image/image_request";

describe("HTTPAudioSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, HTTPAudioSystem, HTTPAudioSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new Message("unknown")
        ],
        [
            "Flush",
            undefined,
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new AudioAsset("test", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test1", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test2", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test3", new AudioBuffer({ length: 0, sampleRate: 0 }), new Error("test"))
                ]
            ),
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new AudioAsset("test", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test1", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test2", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test3", new AudioBuffer({ length: 0, sampleRate: 0 }), new Error("test"))
                ]
            ),
            new Message(HTTPAudioSystem.MESSAGE_REQUEST_FLUSH)
        ],
        [
            "Clear",
            undefined,
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new AudioAsset("test", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test1", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test2", new AudioBuffer({ length: 0, sampleRate: 0 })),
                    new AudioAsset("test3", new AudioBuffer({ length: 0, sampleRate: 0 }), new Error("test"))
                ]
            ),
            new Message(HTTPAudioSystem.MESSAGE_REQUEST_CLEAR)
        ],
        [
            "Request load, no payload",
            undefined,
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new Message(AudioRequest.MESSAGE_REQUEST_LOAD)
        ],
        [
            "Request load, success",
            undefined,
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [],
                undefined,
            ),
            new HTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [],
                undefined,
            ),
            new Message<ImageRequest>(AudioRequest.MESSAGE_REQUEST_LOAD, new ImageRequest("test", "test"))
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: HTTPAudioSystem, system: HTTPAudioSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        // Workaround for comparing anonymous/bound functions
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
    });
});

class TestHTTPAudioSystem extends HTTPAudioSystem {
    SimulateHandleResponse(response: Response): Promise<ArrayBuffer> {
        return this.handleResponse(response);
    }
    SimulateHTTPSuccess(buffer: AudioBuffer, request: AudioRequest): void {
        return this.httpSuccess(buffer, request);
    }
    SimulateHTTPError(request: AudioRequest, error: Error): void {
        return this.httpError(request, error);
    }
}

describe("HTTPAudioSystem - HandleResponse", () => {
    type TestTuple = [string, Error | ArrayBuffer, TestHTTPAudioSystem, TestHTTPAudioSystem, Response];
    test.each<TestTuple>([
        [
            "Handle response, error",
            new Error("test error!"),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            ((): Response => {
                const response = new FakeResponse();
                response.ok = false;
                response.statusText = "test error!";
                return response;
            })()
        ],
        [
            "Handle response, success",
            new ArrayBuffer(0),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            ((): Response => {
                const response = new FakeResponse([
                    new Reactor("arrayBuffer", (): ArrayBuffer => new ArrayBuffer(0))
                ]);
                response.ok = true;
                return response;
            })()
        ]
    ])("%p", (description: string, expected: Error | ArrayBuffer, expectedState: TestHTTPAudioSystem, system: TestHTTPAudioSystem, response: Response) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateHandleResponse(response);
            }).toThrow(expected);
        } else {
            expect(system.SimulateHandleResponse(response)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});

describe("HTTPAudioSystem - HTTP Success", () => {
    type TestTuple = [string, Error | undefined, TestHTTPAudioSystem, TestHTTPAudioSystem, AudioBuffer, AudioRequest];
    test.each<TestTuple>([
        [
            "Success",
            undefined,
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new AudioAsset("test", new AudioBuffer({ length: 0, sampleRate: 0 }))
                ]
            ),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new AudioBuffer({ length: 0, sampleRate: 0 }),
            new AudioRequest("test", "test")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TestHTTPAudioSystem, system: TestHTTPAudioSystem, buffer: AudioBuffer, request: AudioRequest) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateHTTPSuccess(buffer, request);
            }).toThrow(expected);
        } else {
            expect(system.SimulateHTTPSuccess(buffer, request)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});

describe("HTTPAudioSystem - HTTP Failure", () => {
    type TestTuple = [string, Error | undefined, TestHTTPAudioSystem, TestHTTPAudioSystem, AudioRequest, Error];
    test.each<TestTuple>([
        [
            "Failure",
            undefined,
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new AudioAsset("test", new AudioBuffer({ length: 0, sampleRate: 0 }), new Error("test error"))
                ]
            ),
            new TestHTTPAudioSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new AudioRequest("test", "test"),
            new Error("test error")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TestHTTPAudioSystem, system: TestHTTPAudioSystem, request: AudioRequest, error: Error) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateHTTPError(request, error);
            }).toThrow(expected);
        } else {
            expect(system.SimulateHTTPError(request, error)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});
