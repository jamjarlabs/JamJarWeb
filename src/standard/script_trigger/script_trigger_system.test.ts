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

import ScriptTriggerSystem from "./script_trigger_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import System from "../../system/system";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Script from "./script";
import ScriptTrigger from "./script_trigger";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Transform from "../transform/transform";

describe("ScriptTriggerSystem - Update", () => {
    type TestTuple = [string, Error | undefined, ScriptTriggerSystem, ScriptTriggerSystem, IMessage];
    test.each<TestTuple>([
        [
            "No entities",
            undefined,
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "5 Scripts, 3 Update",
            undefined,
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [ 0, new SystemEntity(new FakeEntity(0), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 1, new SystemEntity(new FakeEntity(1), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 2, new SystemEntity(new FakeEntity(2), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 3, new SystemEntity(new FakeEntity(3), [
                        new Script("test", -1)
                    ])],
                    [ 4, new SystemEntity(new FakeEntity(4), [
                        new Script("test", -1)
                    ])],
                ]),
                0
            ),
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [ 0, new SystemEntity(new FakeEntity(0), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 1, new SystemEntity(new FakeEntity(1), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 2, new SystemEntity(new FakeEntity(2), [
                        new Script("test", ScriptTrigger.UPDATE)
                    ])],
                    [ 3, new SystemEntity(new FakeEntity(3), [
                        new Script("test", -1)
                    ])],
                    [ 4, new SystemEntity(new FakeEntity(4), [
                        new Script("test", -1)
                    ])],
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: ScriptTriggerSystem, system: ScriptTriggerSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});

describe("ScriptTriggerSystem - Register", () => {
    type TestTuple = [string, Error | undefined, ScriptTriggerSystem, ScriptTriggerSystem, IMessage];
    test.each<TestTuple>([
        [
            "Reject, no components",
            undefined,
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                ]
            ])
        ],
        [
            "Reject, missing Script",
            undefined,
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Transform()
                ]
            ])
        ],
        [
            "Accept",
            undefined,
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Script("test", ScriptTrigger.UPDATE)
                    ])]
                ]),
                0
            ),
            new ScriptTriggerSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Transform(),
                    new Script("test", ScriptTrigger.UPDATE)
                ]
            ])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: ScriptTriggerSystem, system: ScriptTriggerSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});
