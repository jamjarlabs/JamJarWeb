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

import KeyboardSystem from "./keyboard_system";
import FakeMessageBus from "../../fake/message_bus";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import System from "../../system/system";
import Reactor from "../../fake/reactor";

describe("KeyboardSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, KeyboardSystem, KeyboardSystem, IMessage];
    test.each<TestTuple>([
        [
            "Update - No queued key events",
            undefined,
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update - One queued event, fail to publish",
            new Error("fail to publish"),
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test"]],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), window.document, {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test"]],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update - Three queued events, success, clear queue",
            undefined,
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined,
                entities: [],
                keyEvents: [],
                subscriberID: 0
            }),
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined,
                entities: [],
                keyEvents: [["test", "test1"], ["test", "test2"], ["test", "test3"]],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: KeyboardSystem, system: KeyboardSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
        // Destroy required to remove event listeners
        system.Destroy();
        expectedState.Destroy();
    });
});

/**
 * TestKeyboardSystem is an extension of the KeyboardSystem that exposes the keypress functions,
 * allows testing them without having to use JS event listeners
 */
class TestKeyboardSystem extends KeyboardSystem {
    public SimulateKeyEvent(event: KeyboardEvent): void {
        this.keyEvent(event);
    }
}

describe("KeyboardSystem - key presses", () => {
    type TestTuple = [string, KeyboardSystem, TestKeyboardSystem, KeyboardEvent];
    test.each<TestTuple>([
        [
            "Key down",
            new TestKeyboardSystem(new FakeMessageBus(), document, { scene: undefined, subscriberID: 0, keyEvents: [
                ["keydown", "w"]
            ], entities: [] }),
            new TestKeyboardSystem(new FakeMessageBus(), document, { scene: undefined, subscriberID: 0, keyEvents: [], entities: [] }),
            new window.KeyboardEvent("keydown", { "key": "w", bubbles: true })
        ],
        [
            "Key up",
            new KeyboardSystem(new FakeMessageBus(), document, {
                scene: undefined, subscriberID: 0, keyEvents: [
                    ["keyup", "w"]
                ], entities: []
            }),
            new TestKeyboardSystem(new FakeMessageBus(), document, { scene: undefined, subscriberID: 0, keyEvents: [], entities: [] }),
            new window.KeyboardEvent("keyup", { "key": "w", bubbles: true })
        ]
    ])("%p", (description: string, expectedState: KeyboardSystem, system: TestKeyboardSystem, event: KeyboardEvent) => {
        system.SimulateKeyEvent(event)
        expect(system).toEqual(expectedState);
    });
});