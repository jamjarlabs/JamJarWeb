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
import FakeComponent from "../fake/component";
import FakeEntity from "../fake/entity";
import FakeMessageBus from "../fake/message_bus";
import IMessage from "../message/imessage";
import Message from "../message/message";
import StatefulSystem from "./stateful_system";

class TestSystem extends StatefulSystem {
    protected register(entity: IEntity, components: Component[]): void {
        return;
    }
    protected remove(entity: IEntity): void {
        return;
    }
}

describe("StatefulSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, StatefulSystem, IMessage];
    test.each<TestTuple>([
        [
            "Register no payload",
            undefined,
            new TestSystem(new FakeMessageBus()),
            new Message(StatefulSystem.MESSAGE_REGISTER),
        ],
        [
            "Register, success",
            undefined,
            new TestSystem(new FakeMessageBus()),
            new Message<[IEntity, Component[]]>(StatefulSystem.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new FakeComponent("test")],
            ]),
        ],
        [
            "Deregister, no payload",
            undefined,
            new TestSystem(new FakeMessageBus()),
            new Message(StatefulSystem.MESSAGE_DEREGISTER),
        ],
        [
            "Deregister, success",
            undefined,
            new TestSystem(new FakeMessageBus()),
            new Message<IEntity>(StatefulSystem.MESSAGE_DEREGISTER, new FakeEntity(3)),
        ],
    ])("%p", (description: string, expected: Error | undefined, system: StatefulSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
    });
});
