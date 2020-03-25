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

import Entity from "./entity";
import Component from "../component/component";
import FakeMessageBus from "../fake/message_bus";
import Reactor from "../fake/reactor";
import FakeComponent from "../fake/component";

describe("Entity - Add", () => {
    type TestTuple = [
        string,
        Error | undefined,
        Entity,
        Component
    ];
    test.each<TestTuple>([
        [
            "Fail to publish",
            new Error("fail to publish"),
            new Entity(new FakeMessageBus([new Reactor("Publish", () => { throw("fail to publish"); })]), 0),
            new FakeComponent("test")
        ],
        [
            "Success",
            undefined,
            new Entity(new FakeMessageBus()),
            new FakeComponent("test")
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: Entity, component: Component) => {
        if (expected instanceof Error) {
            expect(() => { entity.Add(component); }).toThrow(expected);
        } else {
            expect(entity.Add(component)).toEqual(expected);
        }
    });
});

describe("Entity - Remove", () => {
    type TestTuple = [
        string,
        Error | undefined,
        Entity,
        string
    ];
    test.each<TestTuple>([
        [
            "Fail to publish",
            new Error("fail to publish"),
            new Entity(new FakeMessageBus([new Reactor("Publish", () => { throw("fail to publish"); })]), 0),
            "test"
        ],
        [
            "Success",
            undefined,
            new Entity(new FakeMessageBus()),
            "test"
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: Entity, key: string) => {
        if (expected instanceof Error) {
            expect(() => { entity.Remove(key); }).toThrow(expected);
        } else {
            expect(entity.Remove(key)).toEqual(expected);
        }
    });
});

describe("Entity - Destroy", () => {
    type TestTuple = [
        string,
        Error | undefined,
        Entity
    ];
    test.each<TestTuple>([
        [
            "Fail to publish",
            new Error("fail to publish"),
            new Entity(new FakeMessageBus([new Reactor("Publish", () => { throw("fail to publish"); })]), 0)
        ],
        [
            "Success",
            undefined,
            new Entity(new FakeMessageBus())
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: Entity) => {
        if (expected instanceof Error) {
            expect(() => { entity.Destroy(); }).toThrow(expected);
        } else {
            expect(entity.Destroy()).toEqual(expected);
        }
    });
});