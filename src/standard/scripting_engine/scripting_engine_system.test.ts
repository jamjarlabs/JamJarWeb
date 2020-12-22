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

import ScriptingEngineSystem from "./scripting_engine_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import ScriptAsset from "../../scripting/script_asset";
import ScriptTriggerRequest from "../script_trigger/script_trigger_request";
import FakeEntity from "../../fake/entity";
import SystemEntity from "../../system/system_entity";
import ScriptingReference from "./scripting_reference";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Transform from "../transform/transform";
import StatefulSystem from "../../system/stateful_system";

describe("ScriptingEngineSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, ScriptingEngineSystem, ScriptingEngineSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message type",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message("unknown"),
        ],
        [
            "Finish load script - no payload",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message(ScriptAsset.MESSAGE_FINISH_LOAD),
        ],
        [
            "Finish load script - failed script load",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<ScriptAsset>(
                ScriptAsset.MESSAGE_FINISH_LOAD,
                new ScriptAsset("test", "console.log('test');", new Error("fail to load script"))
            ),
        ],
        [
            "Finish load script - success",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "console.log('test');")]]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<ScriptAsset>(ScriptAsset.MESSAGE_FINISH_LOAD, new ScriptAsset("test", "console.log('test');")),
        ],
        [
            "Trigger script - no payload",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message(ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT),
        ],
        [
            "Trigger script - script doesn't exist",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<ScriptTriggerRequest<void>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest("test", "test")
            ),
        ],
        [
            "Trigger script - doesn't have an entity, no error thrown",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "console.log('test');")]]),
                undefined,
                new ScriptingReference(
                    () => undefined,
                    () => undefined,
                    () => [],
                    () => [],
                    () => undefined
                ),
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "console.log('test');")]]),
                undefined,
                new ScriptingReference(
                    () => undefined,
                    () => undefined,
                    () => [],
                    () => [],
                    () => undefined
                ),
                undefined,
                0
            ),
            new Message<ScriptTriggerRequest<void>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest("test", "test")
            ),
        ],
        [
            "Trigger script - has entity, no error thrown",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "console.log('test');")]]),
                new SystemEntity(new FakeEntity(0), []),
                undefined,
                new Map([[0, new SystemEntity(new FakeEntity(0), [])]]),
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "console.log('test');")]]),
                undefined,
                undefined,
                new Map([[0, new SystemEntity(new FakeEntity(0), [])]]),
                0
            ),
            new Message<ScriptTriggerRequest<void>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest("test", "test", new FakeEntity(0))
            ),
        ],
        [
            "Trigger script - throw error",
            new Error("error!"),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "throw('error!');")]]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                new Map([["test", new ScriptAsset("test", "throw('error!');")]]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<ScriptTriggerRequest<void>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest("test", "test", new FakeEntity(0))
            ),
        ],
        [
            "Trigger script - call references",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test_calls",
                undefined,
                new Map([
                    [
                        "test",
                        new ScriptAsset(
                            "test",
                            `
                    const gameRef = window.JamJarRefs.get("test_calls");
                    console.log(gameRef.GetScriptEntity());
                    console.log(gameRef.GetEntityByID(0));
                    console.log(gameRef.GetEntitiesByTag("test"));
                    console.log(gameRef.GetEntitiesByLayer("test"));
                    gameRef.SendMessage({ type: "test"});
                    `
                        ),
                    ],
                ]),
                new SystemEntity(new FakeEntity(0, ["test"], ["test"]), []),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0, ["test"], ["test"]), [])],
                    [1, new SystemEntity(new FakeEntity(1, ["test"], ["test"]), [])],
                    [2, new SystemEntity(new FakeEntity(2, ["test"], ["test"]), [])],
                ]),
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test_calls",
                undefined,
                new Map([
                    [
                        "test",
                        new ScriptAsset(
                            "test",
                            `
                    const gameRef = window.JamJarRefs.get("test_calls");
                    console.log(gameRef.GetScriptEntity());
                    console.log(gameRef.GetEntityByID(0));
                    console.log(gameRef.GetEntitiesByTag("test"));
                    console.log(gameRef.GetEntitiesByLayer("test"));
                    gameRef.SendMessage({ type: "test"});
                    `
                        ),
                    ],
                ]),
                new SystemEntity(new FakeEntity(0, ["test"], ["test"]), []),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0, ["test"], ["test"]), [])],
                    [1, new SystemEntity(new FakeEntity(1, ["test"], ["test"]), [])],
                    [2, new SystemEntity(new FakeEntity(2, ["test"], ["test"]), [])],
                ]),
                0
            ),
            new Message<ScriptTriggerRequest<void>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest("test", "test", new FakeEntity(0))
            ),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: ScriptingEngineSystem,
            system: ScriptingEngineSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            // Workaround for comparing anonymous functions
            expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
        }
    );
});

describe("ScriptingEngineSystem - Register", () => {
    type TestTuple = [string, Error | undefined, ScriptingEngineSystem, ScriptingEngineSystem, IMessage];
    test.each<TestTuple>([
        [
            "Accept, no components",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([[0, new SystemEntity(new FakeEntity(0), [])]]),
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(StatefulSystem.MESSAGE_REGISTER, [new FakeEntity(0), []]),
        ],
        [
            "Accept, transform",
            undefined,
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([[0, new SystemEntity(new FakeEntity(0), [new Transform()])]]),
                0
            ),
            new ScriptingEngineSystem(
                new FakeMessageBus(),
                "test",
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(StatefulSystem.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new Transform()],
            ]),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: ScriptingEngineSystem,
            system: ScriptingEngineSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            // Workaround for comparing anonymous functions
            expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
        }
    );
});
