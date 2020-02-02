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

import IMessageBus from "../../message/imessage_bus";
import KeyboardSystem from "./keyboard_system";
import FakeMessageBus from "../../fake/message_bus";
import { JSDOM } from "jsdom";

// TODO: Add tests for publish failures, got into async hell when attempted previously

describe("KeyboardSystem - key presses", () => {
    type TestTuple = [string, Error | undefined, IMessageBus, HTMLDocument, KeyboardEvent];
    test.each<TestTuple>([
        [
            "Key down",
            undefined,
            new FakeMessageBus(),
            new JSDOM().window.document,
            ((): KeyboardEvent => {
                const window = new JSDOM().window;
                return new window.KeyboardEvent("keydown", { "key": "w" });
            })()
        ],
        [
            "Key up",
            undefined,
            new FakeMessageBus(),
            new JSDOM().window.document,
            ((): KeyboardEvent => {
                const window = new JSDOM().window;
                return new window.KeyboardEvent("keyup", { "key": "w" });
            })()
        ]
    ])("%p", (description: string, expected: Error | undefined, messageBus: IMessageBus, document: HTMLDocument, event: KeyboardEvent) => {
        if (expected instanceof Error) {
            expect(() => {
                new KeyboardSystem(messageBus, document);
                document.dispatchEvent(event);
            }).toThrow(expected);
        } else {
            expect(() => {
                new KeyboardSystem(messageBus, document);
                document.dispatchEvent(event);
            }).not.toThrow();
        }
    });
});