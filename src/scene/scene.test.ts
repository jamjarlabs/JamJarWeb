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

import Scene from "./scene";
import IScene from "./iscene";
import IMessage from "../message/imessage";
import FakeMessageBus from "../fake/message_bus";
import Message from "../message/message";
import IMessageBus from "../message/imessage_bus";
import IEntity from "../entity/ientity";
import FakeEntity from "../fake/entity";
import Reactor from "../fake/reactor";

class TestScene extends Scene {
    constructor(messageBus: IMessageBus, id: number, entities: IEntity[] = []) {
        super(messageBus, entities);
        this.id = id;
    }
    
    OnStart(): void { 
        return;
    }
}

describe("Scene - OnMessage", () => {
    type TestTuple = [string, Error | undefined, IScene, IMessage];
    test.each<TestTuple>([
        [
            "Unused message type",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
            new Message("unused")
        ],
        [
            "On start, no payload",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
            new Message(Scene.MESSAGE_ON_START)
        ],
        [
            "On start, not matching",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
            new Message<Scene>(Scene.MESSAGE_ON_START, new TestScene(new FakeMessageBus(), 100)),
        ],
        [
            "On start, success",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
            new Message<Scene>(Scene.MESSAGE_ON_START, new TestScene(new FakeMessageBus(), 0)),
        ],
    ])("%p", (description: string, expected: Error | undefined, scene: IScene, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => { scene.OnMessage(message) }).toThrow(expected);
        } else {
            expect(scene.OnMessage(message)).toEqual(expected)
        }
    });
});

describe("Scene - AddEntity", () => {
    type TestTuple = [string, Error | undefined, IScene, IEntity];
    test.each<TestTuple>([
        [
            "Push entity with no existing entities",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
            new FakeEntity(0)
        ],
        [
            "Push entity with 3 existing entities",
            undefined,
            new TestScene(new FakeMessageBus(), 0, [new FakeEntity(0), new FakeEntity(1), new FakeEntity(2)]),
            new FakeEntity(5)
        ],
    ])("%p", (description: string, expected: Error | undefined, scene: IScene, entity: IEntity) => {
        if (expected instanceof Error) {
            expect(() => { scene.AddEntity(entity) }).toThrow(expected);
        } else {
            expect(scene.AddEntity(entity)).toEqual(expected)
        }
    });
});

describe("Scene - Destroy", () => {
    type TestTuple = [string, Error | undefined, IScene];
    test.each<TestTuple>([
        [
            "Fail to publish message",
            new Error("fail to publish"),
            new TestScene(new FakeMessageBus([
                new Reactor("Publish", () => { throw("fail to publish"); })
            ]), 0),
        ],
        [
            "Single entity, fail to destroy",
            new Error("fail to destroy"),
            new TestScene(new FakeMessageBus(), 0, [ new FakeEntity(0, undefined, [
                new Reactor("Destroy", () => { throw("fail to destroy"); })
            ])]),
        ],
        [
            "5 entities, success",
            undefined,
            new TestScene(new FakeMessageBus(), 0, [ 
                new FakeEntity(0),
                new FakeEntity(1),
                new FakeEntity(2),
                new FakeEntity(3),
                new FakeEntity(4),
            ]),
        ],
    ])("%p", (description: string, expected: Error | undefined, scene: IScene) => {
        if (expected instanceof Error) {
            expect(() => { scene.Destroy() }).toThrow(expected);
        } else {
            expect(scene.Destroy()).toEqual(expected)
        }
    });
});

describe("Scene - Start", () => {
    type TestTuple = [string, Error | undefined, IScene];
    test.each<TestTuple>([
        [
            "Fail to publish message",
            new Error("fail to publish"),
            new TestScene(new FakeMessageBus([
                new Reactor("Publish", () => { throw("fail to publish"); })
            ]), 0),
        ],
        [
            "Success",
            undefined,
            new TestScene(new FakeMessageBus(), 0),
        ],
    ])("%p", (description: string, expected: Error | undefined, scene: IScene) => {
        if (expected instanceof Error) {
            expect(() => { scene.Start() }).toThrow(expected);
        } else {
            expect(scene.Start()).toEqual(expected)
        }
    });
});