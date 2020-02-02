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

import Component from "./component";
import ComponentManager from "./component_manager";
import IEntity from "../entity/ientity";
import FakeEntity from "../fake/entity";
import FakeComponent from "../fake/component";

describe("ComponentManager - Get", () => {
    type TestTuple = [
        string,
        Component | undefined,
        ComponentManager,
        IEntity
    ];
    test.each<TestTuple>([
        [
            "No components",
            undefined,
            new ComponentManager("test"),
            new FakeEntity(0)
        ],
        [
            "3 components, not found",
            undefined,
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(3)
        ],
        [
            "3 components, found",
            new FakeComponent("test"),
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(0)
        ],
    ])("%p", (description: string, expected: Component | undefined, componentManager: ComponentManager, entity: IEntity) => {
        expect(componentManager.Get(entity)).toEqual(expected)
    });
});


describe("ComponentManager - Add", () => {
    type TestTuple = [
        string,
        ComponentManager,
        ComponentManager,
        IEntity,
        Component
    ];
    test.each<TestTuple>([
        [
            "No components",
            new ComponentManager("test", {
                0: new FakeComponent("test")
            }),
            new ComponentManager("test"),
            new FakeEntity(0),
            new FakeComponent("test")
        ],
        [
            "3 components, add new",
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
                3: new FakeComponent("test"),
            }),
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(3),
            new FakeComponent("test")
        ],
        [
            "3 components, update existing",
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new ComponentManager("test", {
                0: new FakeComponent("REPLACE_ME"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(0),
            new FakeComponent("test")
        ],
    ])("%p", (description: string, expectedState: ComponentManager, componentManager: ComponentManager, entity: IEntity, component: Component) => {
        componentManager.Add(entity, component);
        expect(componentManager).toEqual(expectedState)
    });
});



describe("ComponentManager - Remove", () => {
    type TestTuple = [
        string,
        ComponentManager,
        ComponentManager,
        IEntity,
    ];
    test.each<TestTuple>([
        [
            "No components",
            new ComponentManager("test"),
            new ComponentManager("test", {
                0: new FakeComponent("test")
            }),
            new FakeEntity(0),
        ],
        [
            "3 components, not found",
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(3),
        ],
        [
            "3 components, found",
            new ComponentManager("test", {
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new ComponentManager("test", {
                0: new FakeComponent("test"),
                1: new FakeComponent("test"),
                2: new FakeComponent("test"),
            }),
            new FakeEntity(0),
        ],
    ])("%p", (description: string, expectedState: ComponentManager, componentManager: ComponentManager, entity: IEntity) => {
        componentManager.Remove(entity);
        expect(componentManager).toEqual(expectedState)
    });
});