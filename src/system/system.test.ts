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

import Scene from "../scene/scene";
import IMessage from "../message/imessage";
import System from "./system";
import FakeMessageBus from "../fake/message_bus";
import Message from "../message/message";
import FakeScene from "../fake/scene";
import IScene from "../scene/iscene";
import Reactor from "../fake/reactor";

class TestSystem extends System {}

describe("System - OnMessage", () => {
    type TestTuple = [string, Error | undefined, System, IMessage];
    test.each<TestTuple>([
        ["Unused message type", undefined, new TestSystem(new FakeMessageBus()), new Message("unused")],
        ["Update", undefined, new TestSystem(new FakeMessageBus()), new Message(System.MESSAGE_UPDATE)],
        ["Destroy, no payload", undefined, new TestSystem(new FakeMessageBus()), new Message(Scene.MESSAGE_DESTROY)],
        [
            "Destroy, no scene",
            undefined,
            new TestSystem(new FakeMessageBus()),
            new Message<IScene>(Scene.MESSAGE_DESTROY, new FakeScene(0)),
        ],
        [
            "Destroy, no matching scene",
            undefined,
            new TestSystem(new FakeMessageBus(), new FakeScene(3)),
            new Message<IScene>(Scene.MESSAGE_DESTROY, new FakeScene(0)),
        ],
        [
            "Destroy, unsubscribe all fail",
            new Error("fail to unsubscribe all"),
            new TestSystem(
                new FakeMessageBus([
                    new Reactor("UnsubscribeAll", (): void => {
                        throw "fail to unsubscribe all";
                    }),
                ]),
                new FakeScene(0)
            ),
            new Message<IScene>(Scene.MESSAGE_DESTROY, new FakeScene(0)),
        ],
        [
            "Destroy, success",
            undefined,
            new TestSystem(new FakeMessageBus(), new FakeScene(0)),
            new Message<IScene>(Scene.MESSAGE_DESTROY, new FakeScene(0)),
        ],
    ])("%p", (description: string, expected: Error | undefined, system: System, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
    });
});
