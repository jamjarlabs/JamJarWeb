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

import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Game from "../../game";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Polygon from "../shape/polygon";
import Component from "../../component/component";
import System from "../../system/system";
import IEntity from "../../entity/ientity";
import UISystem from "./ui_system";
import Sprite from "../sprite/sprite";
import UI from "./ui";
import Camera from "../camera/camera";
import Reactor from "../../fake/reactor";
import Material from "../../rendering/material";
import Texture from "../../rendering/texture";

describe("UISystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, UISystem, UISystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown mesage type",
            undefined,
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new UISystem(new FakeMessageBus()),
            new Message("unknown")
        ],
        [
            "Pre render no payload",
            undefined,
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<number>(Game.MESSAGE_PRE_RENDER)
        ],
        [
            "Correctly register new entity (camera), none existing",
            undefined,
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                0
            ),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Camera()
            ]])
        ],
        [
            "Correctly register new entity (ui element), none existing",
            undefined,
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(0)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                ]),
                0
            ),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new UI(new FakeEntity(0)),
                new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
            ]])
        ],
        [
            "Correctly register new entity (ui element), three existing",
            undefined,
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                ]),
                0
            ),
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [
                new Transform(),
                new UI(new FakeEntity(2)),
                new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
            ]])
        ],
        [
            "Correctly reject new entity (ui element), missing transform",
            undefined,
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2)),
                new UI(new FakeEntity(1))
            ]])
        ],
        [
            "Correctly reject new entity (ui element), missing sprite",
            undefined,
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new UI(new FakeEntity(1)),
                new Transform()
            ]])
        ],
        [
            "Correctly reject new entity (ui element), missing ui",
            undefined,
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new UISystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2)),
            ]])
        ],
        [
            "Pre render, render 2, skip 1 no camera",
            undefined,
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new UI(new FakeEntity(4)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new UI(new FakeEntity(4)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, render 2, skip 1 invalid camera",
            undefined,
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new UI(new FakeEntity(1)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new UISystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new UI(new FakeEntity(1)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, fail to publish",
            new Error("fail to publish"),
            new UISystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                0
            ),
            new UISystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Sprite(new Material(new Texture("test")), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: UISystem, uiSystem: UISystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                uiSystem.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(uiSystem.OnMessage(message)).toEqual(expected);
        }
        expect(uiSystem).toEqual(expectedState);
    });
});