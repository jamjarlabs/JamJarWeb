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

import PointerSystem from "./pointer_system";
import IMessage from "../../message/imessage";
import System from "../../system/system";
import Message from "../../message/message";
import FakeMessageBus from "../../fake/message_bus";
import Reactor from "../../fake/reactor";
import Pointer from "./pointer";
import Vector from "../../geometry/vector";
import PointerCameraInfo from "./pointer_camera_info";
import FakeEntity from "../../fake/entity";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Camera from "../camera/camera";
import Transform from "../transform/transform";
import SystemEntity from "../../system/system_entity";
import Color from "../../rendering/color";

describe("PointerSystem - OnMessage -> Update", () => {
    type TestTuple = [string, Error | undefined, PointerSystem, PointerSystem, IMessage];
    test.each<TestTuple>([
        [
            "No queued pointer events",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "One queued event, fail to publish",
            new Error("fail to publish"),
            new PointerSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [
                    ["test", new Pointer(new window.PointerEvent("pointermove"), new Vector(0, 0), [
                        new PointerCameraInfo(new FakeEntity(0), new Vector(3, 2), new Vector(2, 2), true)
                    ])]
                ],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [
                    ["test", new Pointer(new window.PointerEvent("pointermove"), new Vector(0, 0), [
                        new PointerCameraInfo(new FakeEntity(0), new Vector(3, 2), new Vector(2, 2), true)
                    ])]
                ],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Three queued events, success, clear queue",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [
                    ["test1", new Pointer(new window.PointerEvent("pointermove"), new Vector(0, 0), [
                        new PointerCameraInfo(new FakeEntity(0), new Vector(3, 2), new Vector(2, 2), true)
                    ])],
                    ["test2", new Pointer(new window.PointerEvent("pointerdown"), new Vector(5, 4), [])],
                    ["test3", new Pointer(new window.PointerEvent("pointerup"), new Vector(3, 2), [])]
                ],
                subscriberID: 0
            }),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Correctly register new entity, none existing",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])]
                ]),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Camera(), new Transform()]])
        ],
        [
            "Correctly register new entity, three existing",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])],
                    [1, new SystemEntity(new FakeEntity(1), [new Camera(), new Transform()])],
                    [2, new SystemEntity(new FakeEntity(2), [new Camera(), new Transform()])],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])]
                ]),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])],
                    [1, new SystemEntity(new FakeEntity(1), [new Camera(), new Transform()])],
                    [2, new SystemEntity(new FakeEntity(2), [new Camera(), new Transform()])]
                ]),
                pointers: [],
                subscriberID: 0
            }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [new Camera(), new Transform()]])
        ],
        [
            "Correctly reject new entity, missing transform",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Camera()]])
        ],
        [
            "Correctly reject new entity, missing camera",
            undefined,
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new PointerSystem(new FakeMessageBus(), window.document.createElement("canvas"), {
                scene: undefined,
                entities: new Map(),
                pointers: [],
                subscriberID: 0
            }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: PointerSystem, system: PointerSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
        window.close();
    });
});


/**
 * TestKeyboardSystem is an extension of the PointerSystem that exposes the pointer event functions,
 * allows testing them without having to use JS event listeners
 */
class TestPointerSystem extends PointerSystem {
    public SimulatePointerEvent(event: PointerEvent): void {
        this.pointerEvent(event);
    }
}

describe("PointerSystem - pointer input", () => {
    type TestTuple = [string, PointerSystem, TestPointerSystem, PointerEvent];
    test.each<TestTuple>([
        [
            "Pointer move, no cameras",
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [
                        ["pointermove", new Pointer(new window.PointerEvent("pointermove", { clientX: 3, clientY: 2 }), new Vector(0.3, 0.8), [])]
                    ],
                    entities: new Map()
                }),
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [],
                    entities: new Map()
                }),
            new window.PointerEvent("pointermove", { clientX: 3, clientY: 2 })
        ],
        [
            "Pointer move, two cameras",
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [
                        ["pointermove", new Pointer(new window.PointerEvent("pointermove", { clientX: 3, clientY: 2 }), new Vector(0.3, 0.8), [
                            new PointerCameraInfo(new FakeEntity(0), new Vector(0.3,0.8), new Vector(3,8), false),
                            new PointerCameraInfo(new FakeEntity(1), new Vector(0.3,0.8), new Vector(30,80), false)
                        ])]
                    ],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                        ])]
                    ])
                }),
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                        ])]
                    ])
                }),
            new window.PointerEvent("pointermove", { clientX: 3, clientY: 2 })
        ],
        [
            "Pointer up, one camera",
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [
                        ["pointerup", new Pointer(new window.PointerEvent("pointerup", { clientX: 0, clientY: 0 }), new Vector(0, 1), [
                            new PointerCameraInfo(new FakeEntity(0), new Vector(0,0.2), new Vector(0,2), true),
                        ])]
                    ],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(5, 5), new Vector(10, 10))
                        ])]
                    ])
                }),
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(5, 5), new Vector(10, 10))
                        ])]
                    ])
                }),
            new window.PointerEvent("pointerup", { clientX: 0, clientY: 0 })
        ],
        [
            "Pointer down, one camera",
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [
                        ["pointerdown", new Pointer(new window.PointerEvent("pointerdown", { clientX: 0, clientY: 0 }), new Vector(0, 1), [
                            new PointerCameraInfo(new FakeEntity(0), new Vector(0,0.2), new Vector(0,2), true),
                        ])]
                    ],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(5, 5), new Vector(10, 10))
                        ])]
                    ])
                }),
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = window.document.createElement("canvas")
                element.getBoundingClientRect = (): DOMRect => {
                    return new window.DOMRect(0, 0, 10, 10);
                }
                return element;
            })(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    pointers: [],
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(5, 5), new Vector(10, 10))
                        ])]
                    ])
                }),
            new window.PointerEvent("pointerdown", { clientX: 0, clientY: 0 })
        ],
    ])("%p", (description: string, expectedState: PointerSystem, system: TestPointerSystem, event: PointerEvent) => {
        system.SimulatePointerEvent(event)
        expect(system).toEqual(expectedState);
    });
});