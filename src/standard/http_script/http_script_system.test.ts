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

import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import HTTPScriptSystem from "./http_script_system";
import ScriptAsset from "../../scripting/script_asset";
import ScriptRequest from "../../scripting/script_request";
import FakeResponse from "../../fake/response";
import Reactor from "../../fake/reactor";

describe("HTTPScriptSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, HTTPScriptSystem, HTTPScriptSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new HTTPScriptSystem(
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
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "", new Error("test"))
                ]
            ),
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "", new Error("test"))
                ]
            ),
            new Message(HTTPScriptSystem.MESSAGE_REQUEST_FLUSH)
        ],
        [
            "Clear",
            undefined,
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "console.log('test');"),
                    new ScriptAsset("test", "", new Error("test")),
                ]
            ),
            new Message(HTTPScriptSystem.MESSAGE_REQUEST_CLEAR)
        ],
        [
            "Request load, no payload",
            undefined,
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new Message(ScriptRequest.MESSAGE_REQUEST_LOAD)
        ],
        [
            "Request load, success",
            undefined,
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [],
            ),
            new HTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [],
            ),
            new Message<ScriptRequest>(ScriptRequest.MESSAGE_REQUEST_LOAD, new ScriptRequest("test", "test"))
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: HTTPScriptSystem, system: HTTPScriptSystem, message: IMessage) => {
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

class TestHTTPScriptSystem extends HTTPScriptSystem {
    SimulateHandleResponse(response: Response): Promise<string> {
        return this.handleResponse(response);
    }
    SimulateHTTPSuccess(code: string, request: ScriptRequest): void {
        return this.httpSuccess(code, request);
    }
    SimulateHTTPError(request: ScriptRequest, error: Error): void {
        return this.httpError(request, error);
    }
}

describe("HTTPScriptSystem - HandleResponse", () => {
    type TestTuple = [string, Error | string, TestHTTPScriptSystem, TestHTTPScriptSystem, Response];
    test.each<TestTuple>([
        [
            "Handle response, error",
            new Error("test error!"),
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new TestHTTPScriptSystem(
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
            "console.log('success');",
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            ((): Response => {
                const response = new FakeResponse([
                    new Reactor("text", (): string => "console.log('success');")
                ]);
                response.ok = true;
                return response;
            })()
        ]
    ])("%p", (description: string, expected: Error | string, expectedState: TestHTTPScriptSystem, system: TestHTTPScriptSystem, response: Response) => {
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

describe("HTTPScriptSystem - HTTP Success", () => {
    type TestTuple = [string, Error | undefined, TestHTTPScriptSystem, TestHTTPScriptSystem, string, ScriptRequest];
    test.each<TestTuple>([
        [
            "Success",
            undefined,
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ScriptAsset("test", "console.log('success');")
                ]
            ),
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            "console.log('success');",
            new ScriptRequest("test", "test")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TestHTTPScriptSystem, system: TestHTTPScriptSystem, code: string, request: ScriptRequest) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateHTTPSuccess(code, request);
            }).toThrow(expected);
        } else {
            expect(system.SimulateHTTPSuccess(code, request)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});

describe("HTTPAudioSystem - HTTP Failure", () => {
    type TestTuple = [string, Error | undefined, TestHTTPScriptSystem, TestHTTPScriptSystem, ScriptRequest, Error];
    test.each<TestTuple>([
        [
            "Failure",
            undefined,
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ScriptAsset("test", "", new Error("test error"))
                ]
            ),
            new TestHTTPScriptSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new ScriptRequest("test", "test"),
            new Error("test error")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TestHTTPScriptSystem, system: TestHTTPScriptSystem, request: ScriptRequest, error: Error) => {
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
