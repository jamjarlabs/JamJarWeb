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
import FakeEntity from "../../fake/entity";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Camera from "../camera/camera";
import Transform from "../transform/transform";
import SystemEntity from "../../system/system_entity";
import FullscreenSystem from "../fullscreen/fullscreen_system";
import Reactor from "../../fake/reactor";
import Pointer from "./pointer";
import Vector from "../../geometry/vector";
import Color from "../../rendering/color";
import PointerCameraInfo from "./pointer_camera_info";

describe("PointerSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, PointerSystem, PointerSystem, IMessage];
    test.each<TestTuple>([
        [
            "Register - Correctly register new entity, none existing",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])]
                ]),
                0
            ),
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Camera(), new Transform()]])
        ],
        [
            "Register - Correctly register new entity, three existing",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])],
                    [1, new SystemEntity(new FakeEntity(1), [new Camera(), new Transform()])],
                    [2, new SystemEntity(new FakeEntity(2), [new Camera(), new Transform()])],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])]
                ]),
                0
            ),
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [new Camera(), new Transform()])],
                    [1, new SystemEntity(new FakeEntity(1), [new Camera(), new Transform()])],
                    [2, new SystemEntity(new FakeEntity(2), [new Camera(), new Transform()])],
                ]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [new Camera(), new Transform()]])
        ],
        [
            "Register - Correctly reject new entity, missing transform",
            undefined,
            new PointerSystem(new FakeMessageBus(), document.createElement("canvas"), undefined, undefined, 0),
            new PointerSystem(new FakeMessageBus(), document.createElement("canvas"), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Camera()]])
        ],
        [
            "Register - Correctly reject new entity, missing camera",
            undefined,
            new PointerSystem(new FakeMessageBus(), document.createElement("canvas"), undefined, undefined, 0),
            new PointerSystem(new FakeMessageBus(), document.createElement("canvas"), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]])
        ],
        [
            "Enter Fullscreen - Mark as fullscreen",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                true
            ),
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                false
            ),
            new Message<[IEntity, Component[]]>(FullscreenSystem.MESSAGE_ENTER_FULLSCREEN, [new FakeEntity(0), [new Transform()]])
        ],
        [
            "Exit Fullscreen - Mark as not fullscreen and clear locked pointer position",
            undefined,
            new PointerSystem(new FakeMessageBus(), document.createElement("canvas"), undefined, undefined, 0),
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                true
            ),
            new Message<[IEntity, Component[]]>(FullscreenSystem.MESSAGE_EXIT_FULLSCREEN, [new FakeEntity(0), [new Transform()]])
        ],
        [
            "Update, no wheel message",
            undefined,
            new PointerSystem(new FakeMessageBus([
                new Reactor("Publish", () => { throw("unexpected wheel event publish"); })
            ]),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined
            ),
             new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, wheel message",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined
            ),
            new PointerSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                new WheelEvent("test")
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, move message, not fullscreen, no cameras",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                undefined,
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointermove", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        []
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                undefined,
                0,
                false,
                undefined,
                undefined,
                new PointerEvent("pointermove", { clientX: 3, clientY: 2 })
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, move message, not fullscreen, one camera",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointermove", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(3, 8),
                                false
                            )
                        ]
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                new PointerEvent("pointermove", { clientX: 3, clientY: 2 })
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer message, not fullscreen, no cameras",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                undefined,
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        []
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                undefined,
                0,
                false,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2 })
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer message (pointerdown), not fullscreen, two cameras",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(3, 8),
                                false
                            ),
                            new PointerCameraInfo(
                                new FakeEntity(1),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(30.000001907348633, 80),
                                false
                            )
                        ]
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2 })
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer message (pointerdown), not fullscreen, two cameras",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerdown", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(3, 8),
                                false
                            ),
                            new PointerCameraInfo(
                                new FakeEntity(1),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(30.000001907348633, 80),
                                false
                            )
                        ]
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(100, 100))
                    ])]
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerdown", { clientX: 3, clientY: 2 })
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer event, fullscreen, no locked pointer position set, one camera",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                true,
                new Vector(3, 2),
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(3, 8),
                                false
                            )
                        ]
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                true,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2 })
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer event, fullscreen, locked pointer position set, one camera",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                true,
                new Vector(12, 5),
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 3, clientY: 2, movementX: 10, movementY: 3 }),
                        new Vector(2.4000000953674316, 1),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(2.4000000953674316, 1),
                                new Vector(12, 5),
                                false
                            )
                        ]
                    )
                ]
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])]
                ]),
                0,
                true,
                new Vector(2, 2),
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2, movementX: 10, movementY: 3 })
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Update, pointer message, not fullscreen, one camera, 3 stored pointer events, clear 2 previously published",
            undefined,
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 3, clientY: 2 }),
                        new Vector(0.6000000238418579, 1.600000023841858),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(0.6000000238418579, 1.600000023841858),
                                new Vector(3, 8),
                                false
                            )
                        ]
                    ),
                    new Pointer(
                        new PointerEvent("pointerdown", { clientX: 6, clientY: 4 }),
                        new Vector(1.2000000476837158, 1.2000000476837158),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(1.2000000476837158, 1.2000000476837158),
                                new Vector(6, 6),
                                false
                            )
                        ]
                    ),
                    new Pointer(
                        new PointerEvent("pointerup", { clientX: 15, clientY: 3 }),
                        new Vector(3, 1.399999976158142),
                        [
                            new PointerCameraInfo(
                                new FakeEntity(0),
                                new Vector(3, 1.399999976158142),
                                new Vector(15, 7),
                                false
                            )
                        ]
                    )
                ],
            ),
            new PointerSystem(new FakeMessageBus(),
                ((): HTMLElement => {
                    const element = document.createElement("canvas");
                    element.getBoundingClientRect = (): DOMRect => {
                        return new DOMRect(0, 0, 10, 10);
                    };
                    return element;
                })(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(10, 10))
                    ])],
                ]),
                0,
                false,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2 }),
                    new PointerEvent("pointerdown", { clientX: 6, clientY: 4 }),
                    new PointerEvent("pointerup", { clientX: 15, clientY: 3 })
                ],
                [
                    new Pointer(new PointerEvent("pointermove"), new Vector(0,0), []),
                    new Pointer(new PointerEvent("pointerdown"), new Vector(3,2), []),
                ]
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
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
 * TestPointerSystem is an extension of the PointerSystem that exposes the pointer event functions,
 * allows testing them without having to use JS event listeners
 */
class TestPointerSystem extends PointerSystem {
    public SimulatePointerEvent(event: PointerEvent): void {
        this.pointerEvent(event);
    }

    public SimulateWheelEvent(event: WheelEvent): void {
        this.wheelEvent(event);
    }

    public SimulateMoveEvent(event: PointerEvent): void {
        this.moveEvent(event);
    }
}

describe("PointerSystem - pointer event", () => {
    type TestTuple = [string, Error | undefined, PointerSystem, TestPointerSystem, PointerEvent];
    test.each<TestTuple>([
        [
            "Pointer up, add to events to be published",
            undefined,
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined,
                undefined,
                [
                    new PointerEvent("pointerup", { clientX: 3, clientY: 2 })
                ],
                undefined
            ),
            new TestPointerSystem(new FakeMessageBus([new Reactor("Publish", (message: Message<Pointer>) => {
                throw("publish fail");
            })]), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined,
                undefined,
                [],
                undefined
            ),
            new PointerEvent("pointerup", { clientX: 3, clientY: 2 })
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: PointerSystem, system: TestPointerSystem,
        event: PointerEvent) => {
        if (expected instanceof Error) {
            expect(() => { system.SimulatePointerEvent(event); }).toThrow(expected);
        } else {
            system.SimulatePointerEvent(event);
        }
        expect(system).toEqual(expectedState);
    });
});

describe("PointerSystem - pointer move", () => {
    type TestTuple = [string, Error | undefined, PointerSystem, TestPointerSystem, PointerEvent];
    test.each<TestTuple>([
        [
            "Pointer move, add to events to be published",
            undefined,
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined,
                new PointerEvent("pointermove", { clientX: 3, clientY: 2 })
            ),
            new TestPointerSystem(new FakeMessageBus([new Reactor("Publish", (message: Message<Pointer>) => {
                throw("publish fail");
            })]), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined,
                undefined,
            ),
            new PointerEvent("pointermove", { clientX: 3, clientY: 2 })
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: PointerSystem, system: TestPointerSystem, event: PointerEvent) => {
        if (expected instanceof Error) {
            expect(() => { system.SimulatePointerEvent(event); }).toThrow(expected);
        } else {
            system.SimulateMoveEvent(event);
        }
        expect(system).toEqual(expectedState);
    });
});


describe("PointerSystem - pointer input", () => {
    type TestTuple = [string, Error | undefined, PointerSystem, TestPointerSystem, WheelEvent];
    test.each<TestTuple>([
        [
            "Wheel event triggered",
            undefined,
            new TestPointerSystem(new FakeMessageBus(), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                new WheelEvent("test"),
            ),
            new TestPointerSystem(new FakeMessageBus([new Reactor("Publish", (message: Message<Pointer>) => {
                throw("publish fail");
            })]), ((): HTMLElement => {
                const element = document.createElement("canvas");
                element.getBoundingClientRect = (): DOMRect => {
                    return new DOMRect(0, 0, 10, 10);
                };
                return element;
            })(),
                undefined,
                undefined,
                0,
                undefined,
                undefined,
                undefined,
            ),
            new WheelEvent("test")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: PointerSystem, system: TestPointerSystem,
        event: WheelEvent) => {
        if (expected instanceof Error) {
            expect(() => { system.SimulateWheelEvent(event); }).toThrow(expected);
        } else {
            system.SimulateWheelEvent(event);
        }
        expect(system).toEqual(expectedState);
    });
});
