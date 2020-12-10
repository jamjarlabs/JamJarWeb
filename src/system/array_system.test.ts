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

import Component from "../component/component";
import IEntity from "../entity/ientity";
import FakeEntity from "../fake/entity";
import FakeMessageBus from "../fake/message_bus";
import FakeScene from "../fake/scene";
import ArraySystem from "./array_system";
import SystemEntity from "./system_entity";

class TestSystem extends ArraySystem {
    public SimulateRegister(entity: IEntity, components: Component[]): void {
        this.register(entity, components);
    }

    public SimulateRemove(entity: IEntity): void {
        this.remove(entity);
    }
}

describe("ArraySystem - register", () => {
    type TestTuple = [string, Error | undefined, TestSystem, TestSystem, IEntity, Component[]];
    test.each<TestTuple>([
        [
            "No evaluator, no change",
            undefined,
            new TestSystem(new FakeMessageBus(), new FakeScene(0), undefined, [], 0),
            new TestSystem(new FakeMessageBus(), new FakeScene(0), undefined, [], 0),
            new FakeEntity(0),
            [],
        ],
        [
            "Entity already tracked, no longer should be tracked",
            undefined,
            new TestSystem(new FakeMessageBus(), new FakeScene(0), () => false, [], 0),
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                () => false,
                [new SystemEntity(new FakeEntity(0), [])],
                0
            ),
            new FakeEntity(0),
            [],
        ],
        [
            "Entity already tracked, continue tracking",
            undefined,
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                () => true,
                [new SystemEntity(new FakeEntity(0), [])],
                0
            ),
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                () => true,
                [new SystemEntity(new FakeEntity(0), [])],
                0
            ),
            new FakeEntity(0),
            [],
        ],
        [
            "Entity not tracked, begin tracking",
            undefined,
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                () => true,
                [new SystemEntity(new FakeEntity(0), [])],
                0
            ),
            new TestSystem(new FakeMessageBus(), new FakeScene(0), () => true, [], 0),
            new FakeEntity(0),
            [],
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            system: TestSystem,
            expectedState: TestSystem,
            entity: IEntity,
            components: Component[]
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.SimulateRegister(entity, components);
                }).toThrow(expected);
            } else {
                expect(system.SimulateRegister(entity, components)).toEqual(expected);
            }
        }
    );
});

describe("ArraySystem - remove", () => {
    type TestTuple = [string, Error | undefined, TestSystem, TestSystem, IEntity];
    test.each<TestTuple>([
        [
            "No matching entity, unchanged",
            undefined,
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                undefined,
                [new SystemEntity(new FakeEntity(1), []), new SystemEntity(new FakeEntity(2), [])],
                0
            ),
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                undefined,
                [new SystemEntity(new FakeEntity(1), []), new SystemEntity(new FakeEntity(2), [])],
                0
            ),
            new FakeEntity(0),
        ],
        [
            "Matching entity, remove",
            undefined,
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                undefined,
                [new SystemEntity(new FakeEntity(1), []), new SystemEntity(new FakeEntity(2), [])],
                0
            ),
            new TestSystem(
                new FakeMessageBus(),
                new FakeScene(0),
                undefined,
                [
                    new SystemEntity(new FakeEntity(0), []),
                    new SystemEntity(new FakeEntity(1), []),
                    new SystemEntity(new FakeEntity(2), []),
                ],
                0
            ),
            new FakeEntity(0),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            system: TestSystem,
            expectedState: TestSystem,
            entity: IEntity
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.SimulateRemove(entity);
                }).toThrow(expected);
            } else {
                expect(system.SimulateRemove(entity)).toEqual(expected);
            }
        }
    );
});
