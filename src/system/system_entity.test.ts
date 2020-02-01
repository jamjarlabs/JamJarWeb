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

import SystemEntity from "./system_entity";
import Component from "../component/component";
import FakeComponent from "../fake/component";
import IEntity from "../entity/ientity";
import FakeEntity from "../fake/entity";
import Reactor from "../fake/reactor";

describe("SystemEntity - Get", () => {
    type TestTuple = [string, Component | undefined, IEntity, Component[], string];
    test.each<TestTuple>([
        [
            "No components, return undefined",
            undefined,
            new FakeEntity(0),
            [],
            "test"
        ],
        [
            "3 components, not found, return undefined",
            undefined,
            new FakeEntity(0),
            [new FakeComponent("test1"), new FakeComponent("test2"), new FakeComponent("test3")],
            "test"
        ],
        [
            "3 components, found, return component",
            new FakeComponent("test1"),
            new FakeEntity(0),
            [new FakeComponent("test1"), new FakeComponent("test2"), new FakeComponent("test3")],
            "test1"
        ],
    ])("%p", (description: string, expected: Component | undefined, entity: IEntity, components: Component[], key: string) => {
        const systemEntity = new SystemEntity(entity, components)
        expect(systemEntity.Get(key)).toEqual(expected)
    });
});

describe("SystemEntity - Add", () => {
    type TestTuple = [string, Error | undefined, IEntity, Component[], Component];
    test.each<TestTuple>([
        [
            "Fail to add component",
            new Error("fail to add component"),
            new FakeEntity(0, undefined, [new Reactor("Add", (args) => {
                throw ("fail to add component")
            })]),
            [],
            new FakeComponent("test")
        ],
        [
            "Success",
            undefined,
            new FakeEntity(0),
            [],
            new FakeComponent("test")
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: IEntity, components: Component[], component: Component) => {
        const systemEntity = new SystemEntity(entity, components)
        if (expected instanceof Error) {
            expect(() => {
                systemEntity.Add(component)
            }).toThrow(expected);
        } else {
            expect(systemEntity.Add(component)).toEqual(expected)
        }
    });
});

describe("SystemEntity - Remove", () => {
    type TestTuple = [string, Error | undefined, IEntity, Component[], string];
    test.each<TestTuple>([
        [
            "Fail to remove component",
            new Error("fail to remove component"),
            new FakeEntity(0, undefined, [new Reactor("Remove", (args) => {
                throw ("fail to remove component")
            })]),
            [],
            "test"
        ],
        [
            "Success",
            undefined,
            new FakeEntity(0),
            [new FakeComponent("test1"), new FakeComponent("test2"), new FakeComponent("test3")],
            "test"
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: IEntity, components: Component[], key: string) => {
        const systemEntity = new SystemEntity(entity, components)
        if (expected instanceof Error) {
            expect(() => {
                systemEntity.Remove(key)
            }).toThrow(expected);
        } else {
            expect(systemEntity.Remove(key)).toEqual(expected)
        }
    });
});

describe("SystemEntity - Destroy", () => {
    type TestTuple = [string, Error | undefined, IEntity, Component[]];
    test.each<TestTuple>([
        [
            "Fail to destroy entity",
            new Error("fail to destroy entity"),
            new FakeEntity(0, undefined, [new Reactor("Destroy", (args) => {
                throw ("fail to destroy entity")
            })]),
            []
        ],
        [
            "Success",
            undefined,
            new FakeEntity(0),
            [new FakeComponent("test1"), new FakeComponent("test2"), new FakeComponent("test3")]
        ],
    ])("%p", (description: string, expected: Error | undefined, entity: IEntity, components: Component[]) => {
        const systemEntity = new SystemEntity(entity, components)
        if (expected instanceof Error) {
            expect(() => {
                systemEntity.Destroy()
            }).toThrow(expected);
        } else {
            expect(systemEntity.Destroy()).toEqual(expected)
        }
    });
});