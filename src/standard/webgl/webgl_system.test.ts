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
import Reactor from "../../fake/reactor";
import ImageAsset from "../../rendering/image_asset";
import WebGLSystem from "./webgl_system";

describe("WebGLSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, WebGLSystem, WebGLSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                []
            ),
            new Message("unknown")
        ],
        [
            "Load renderables",
            new Error("publish fail"),
            new WebGLSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0,
                [
                    new ImageAsset("test", new window.Image(), true),
                    new ImageAsset("test1", new window.Image(), false),
                    new ImageAsset("test2", new window.Image(), true)
                ]
            ),
            new WebGLSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => { throw ("publish fail") })
                ]),
                undefined,
                undefined,
                0,
                [
                    new ImageAsset("test", new window.Image(), true),
                    new ImageAsset("test1", new window.Image(), false),
                    new ImageAsset("test2", new window.Image(), true)
                ]
            ),
            new Message(HTTPImageSystem.MESSAGE_REQUEST_FLUSH)
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: WebGLSystem, system: WebGLSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});