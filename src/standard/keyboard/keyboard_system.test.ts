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
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import System from "../../system/system";
import Reactor from "../../fake/reactor";

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
        new KeyboardSystem(messageBus, document);
        if (expected instanceof Error) {
            expect(() => {
                document.dispatchEvent(event);
            }).toThrow(expected);
        } else {
            expect(() => {
                document.dispatchEvent(event);
            }).not.toThrow();
        }
    });
});

describe("SpriteSystem - OnMessage -> Update", () => {
    type TestTuple = [string, Error | undefined, KeyboardSystem, KeyboardSystem, IMessage];
    test.each<TestTuple>([
        [
            "No queued key events",
            undefined,
            new KeyboardSystem(new FakeMessageBus(), new JSDOM().window.document,  {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus(), new JSDOM().window.document, {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "One queued event, fail to publish",
            new Error("fail to publish"),
            new KeyboardSystem(new FakeMessageBus(), new JSDOM().window.document,  {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test"]],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus([ new Reactor("Publish", () => { throw("fail to publish"); })]), new JSDOM().window.document, {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test"]],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Three queued events, success, clear queue",
            undefined,
            new KeyboardSystem(new FakeMessageBus(), new JSDOM().window.document,  {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus(), new JSDOM().window.document, {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test1"], ["test", "test2"], ["test", "test3"]],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: KeyboardSystem, keyboardSystem: KeyboardSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                keyboardSystem.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(keyboardSystem.OnMessage(message)).toEqual(expected);
        }
        expect(keyboardSystem).toEqual(expectedState);
    });
});