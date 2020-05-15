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

import MessageBus from "./message_bus";
import Message from "./message";
import FakeSubscriber from "../fake/subscriber";
import Reactor from "../fake/reactor";
import IMessage from "./imessage";
import ISubscriber from "./isubscriber";

describe("MessageBus - Dispatch", () => {
    type TestTuple = [string, Error | undefined, MessageBus];
    test.each<TestTuple>([
        [
            "No messages",
            undefined,
            new MessageBus()
        ],
        [
            "No subscribers for message",
            undefined,
            new MessageBus({}, [new Message("test")])
        ],
        [
            "Matching subscriber, OnMessage fail",
            new Error("onmessage fail"),
            new MessageBus({
                "test": [
                    new FakeSubscriber(0, [new Reactor("OnMessage", () => { throw("onmessage fail"); })])
                ]
            }, [new Message("test")])
        ],
        [
            "5 matching subscribers, success",
            undefined,
            new MessageBus({
                "test": [
                    new FakeSubscriber(0),
                    new FakeSubscriber(1),
                    new FakeSubscriber(2),
                    new FakeSubscriber(3),
                    new FakeSubscriber(4)
                ],
                "not-matching": [
                    new FakeSubscriber(5, [new Reactor("OnMessage", () => { throw("unexpected match"); })]),
                    new FakeSubscriber(6, [new Reactor("OnMessage", () => { throw("unexpected match"); })]),
                    new FakeSubscriber(7, [new Reactor("OnMessage", () => { throw("unexpected match"); })])
                ]
            }, [new Message("test")])
        ],
    ])("%p", (description: string, expected: Error | undefined, messageBus: MessageBus) => {
        if (expected instanceof Error) {
            expect(() => { messageBus.Dispatch(); }).toThrow(expected);
        } else {
            expect(messageBus.Dispatch()).toEqual(expected);
        }
    });
});

describe("MessageBus - Publish", () => {
    type TestTuple = [string, Error | undefined, MessageBus, IMessage];
    test.each<TestTuple>([
        [
            "Success",
            undefined,
            new MessageBus(),
            new Message("test")
        ],
    ])("%p", (description: string, expected: Error | undefined, messageBus: MessageBus, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => { messageBus.Publish(message); }).toThrow(expected);
        } else {
            expect(messageBus.Publish(message)).toEqual(expected);
        }
    });
});

describe("MessageBus - Subscribe", () => {
    type TestTuple = [string, Error | undefined, MessageBus, ISubscriber, string | string[]];
    test.each<TestTuple>([
        [
            "Single type, no subscribers, success",
            undefined,
            new MessageBus(),
            new FakeSubscriber(0),
            "test"
        ],
        [
            "Single type, already subscribers, success",
            undefined,
            new MessageBus({
                "test": [
                    new FakeSubscriber(0),
                ]
            }),
            new FakeSubscriber(1),
            "test"
        ],
        [
            "Three type, 1 new, 2 with existing subscribers, success",
            undefined,
            new MessageBus({
                "test1": [
                    new FakeSubscriber(0),
                ],
                "test2": [
                    new FakeSubscriber(1),
                ]
            }),
            new FakeSubscriber(3),
            ["test1", "test2", "test3"]
        ],
    ])("%p", (description: string, expected: Error | undefined, messageBus: MessageBus, subscriber: ISubscriber, types: string | string[]) => {
        if (expected instanceof Error) {
            expect(() => { messageBus.Subscribe(subscriber, types); }).toThrow(expected);
        } else {
            expect(messageBus.Subscribe(subscriber, types)).toEqual(expected);
        }
    });
});

describe("MessageBus - UnsubscribeAll", () => {
    type TestTuple = [string, Error | undefined, MessageBus, ISubscriber];
    test.each<TestTuple>([
        [
            "No subscribers",
            undefined,
            new MessageBus(),
            new FakeSubscriber(0),
        ],
        [
            "3 subscriber groups, no matches",
            undefined,
            new MessageBus({
                "test1": [
                    new FakeSubscriber(0),
                ],
                "test2": [
                    new FakeSubscriber(1),
                ],
                "test3": [
                    new FakeSubscriber(2),
                ]
            }),
            new FakeSubscriber(4),
        ],
        [
            "5 subscriber groups, 3 matches",
            undefined,
            new MessageBus({
                "test1": [
                    new FakeSubscriber(0),
                ],
                "test2": [
                    new FakeSubscriber(1),
                    new FakeSubscriber(4),
                ],
                "test3": [
                    new FakeSubscriber(2),
                    new FakeSubscriber(4),
                ],
                "test4": [
                    new FakeSubscriber(4),
                ],
                "test5": [
                    new FakeSubscriber(5),
                ],
            }),
            new FakeSubscriber(4),
        ],
    ])("%p", (description: string, expected: Error | undefined, messageBus: MessageBus, subscriber: ISubscriber) => {
        if (expected instanceof Error) {
            expect(() => { messageBus.UnsubscribeAll(subscriber); }).toThrow(expected);
        } else {
            expect(messageBus.UnsubscribeAll(subscriber)).toEqual(expected);
        }
    });
});

describe("MessageBus - Unsubscribe", () => {
    type TestTuple = [string, Error | undefined, MessageBus, ISubscriber, string | string[]];
    test.each<TestTuple>([
        [
            "Single type, no subscribers, success",
            undefined,
            new MessageBus(),
            new FakeSubscriber(0),
            "test"
        ],
        [
            "Single type, no match, success",
            undefined,
            new MessageBus({
                "test": [
                    new FakeSubscriber(0),
                ]
            }),
            new FakeSubscriber(1),
            "test"
        ],
        [
            "Three type, 2 match, 1 no match, success",
            undefined,
            new MessageBus({
                "test1": [
                    new FakeSubscriber(3),
                ],
                "test2": [
                    new FakeSubscriber(3),
                ]
            }),
            new FakeSubscriber(3),
            ["test1", "test2", "test3"]
        ],
    ])("%p", (description: string, expected: Error | undefined, messageBus: MessageBus, subscriber: ISubscriber, types: string | string[]) => {
        if (expected instanceof Error) {
            expect(() => { messageBus.Unsubscribe(subscriber, types); }).toThrow(expected);
        } else {
            expect(messageBus.Unsubscribe(subscriber, types)).toEqual(expected);
        }
    });
});