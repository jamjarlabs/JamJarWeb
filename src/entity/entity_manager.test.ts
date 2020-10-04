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

import FakeMessageBus from "../fake/message_bus";
import EntityManager from "./entity_manager";
import IMessage from "../message/imessage";
import Message from "../message/message";
import Entity from "./entity";
import Reactor from "../fake/reactor";
import IEntity from "./ientity";
import FakeEntity from "../fake/entity";
import ComponentManager from "../component/component_manager";
import FakeComponent from "../fake/component";
import Component from "../component/component";

describe("EntityManager - OnMessage", () => {
    type TestTuple = [
        string,
        Error | undefined,
        EntityManager | undefined,
        EntityManager,
        IMessage
    ];
    test.each<TestTuple>([
        [
            "Unknown message type",
            undefined,
            new EntityManager(new FakeMessageBus(), [], 0),
            new EntityManager(new FakeMessageBus()),
            new Message("unknown")
        ],
        [
            "Destroy no payload",
            undefined,
            new EntityManager(new FakeMessageBus(), [], 0),
            new EntityManager(new FakeMessageBus(), [], 0),
            new Message(Entity.MESSAGE_DESTROY)
        ],
        [
            "Destroy publish fail",
            new Error("fail to publish"),
            undefined,
            new EntityManager(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), [], 0),
            new Message<IEntity>(Entity.MESSAGE_DESTROY, new FakeEntity(0))
        ],
        [
            "Destroy success, remove from three component managers",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map([[1, new FakeComponent("test1")]])),
                new ComponentManager("test2", new Map()),
                new ComponentManager("test3", new Map())
            ], 0),
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map([[0, new FakeComponent("test1")], [1, new FakeComponent("test1")]])),
                new ComponentManager("test2", new Map([[0, new FakeComponent("test2")]])),
                new ComponentManager("test3", new Map([[0, new FakeComponent("test3")]]))
            ], 0),
            new Message<IEntity>(Entity.MESSAGE_DESTROY, new FakeEntity(0))
        ],
        [
            "Add no payload",
            undefined,
            new EntityManager(new FakeMessageBus(), [], 0),
            new EntityManager(new FakeMessageBus(), [], 0),
            new Message(Component.MESSAGE_ADD)
        ],
        [
            "Add, fail to publish",
            new Error("fail to publish"),
            undefined,
            new EntityManager(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), [], 0),
            new Message<[IEntity, Component]>(Component.MESSAGE_ADD, [new FakeEntity(0), new FakeComponent("test")])
        ],
        [
            "Add, success new component manager",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test", new Map([[0, new FakeComponent("test")]]))
            ], 0),
            new EntityManager(new FakeMessageBus(), [], 0),
            new Message<[IEntity, Component]>(Component.MESSAGE_ADD, [new FakeEntity(0), new FakeComponent("test")])
        ],
        [
            "Add, success existing component manager",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test", new Map([[0, new FakeComponent("test")],[1, new FakeComponent("test")],[2, new FakeComponent("test") ]]))
            ], 0),
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test", new Map([[1, new FakeComponent("test")],[2, new FakeComponent("test") ]]))
            ], 0),
            new Message<[IEntity, Component]>(Component.MESSAGE_ADD, [new FakeEntity(0), new FakeComponent("test")])
        ],
        [
            "Remove no payload",
            undefined,
            new EntityManager(new FakeMessageBus(), [], 0),
            new EntityManager(new FakeMessageBus(), [], 0),
            new Message(Component.MESSAGE_REMOVE)
        ],
        [
            "Remove, fail to publish",
            new Error("fail to publish"),
            undefined,
            new EntityManager(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), [
                new ComponentManager("test")
            ], 0),
            new Message<[IEntity, string]>(Component.MESSAGE_REMOVE, [new FakeEntity(0), "test"])
        ],
        [
            "Remove, no matching component manager",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1")
            ], 0),
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1")
            ], 0),
            new Message<[IEntity, string]>(Component.MESSAGE_REMOVE, [new FakeEntity(0), "test2"])
        ],
        [
            "Remove, found matching",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map()),
                new ComponentManager("test2", new Map([[0, new FakeComponent("test2")]])),
                new ComponentManager("test3", new Map([[0, new FakeComponent("test3")]]))
            ], 0),
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map([[0, new FakeComponent("test1")]])),
                new ComponentManager("test2", new Map([[0, new FakeComponent("test2")]])),
                new ComponentManager("test3", new Map([[0, new FakeComponent("test3")]]))
            ], 0),
            new Message<[IEntity, string]>(Component.MESSAGE_REMOVE, [new FakeEntity(0), "test1"])
        ],
        [
            "Remove, found matching",
            undefined,
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map()),
                new ComponentManager("test2", new Map([[0, new FakeComponent("test2")]])),
                new ComponentManager("test3", new Map([[0, new FakeComponent("test3")]]))
            ], 0),
            new EntityManager(new FakeMessageBus(), [
                new ComponentManager("test1", new Map([[0, new FakeComponent("test1")]])),
                new ComponentManager("test2", new Map([[0, new FakeComponent("test2")]])),
                new ComponentManager("test3", new Map([[0, new FakeComponent("test3")]]))
            ], 0),
            new Message<[IEntity, string]>(Component.MESSAGE_REMOVE, [new FakeEntity(0), "test1"])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: EntityManager | undefined, entityManager: EntityManager, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => { entityManager.OnMessage(message); }).toThrow(expected);
        } else {
            expect(entityManager.OnMessage(message)).toEqual(expected);
        }
        if (expectedState instanceof EntityManager) {
            expect(entityManager).toEqual(expectedState);
        }
    });
});
