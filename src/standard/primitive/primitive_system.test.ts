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
import Polygon from "../../shape/polygon";
import Reactor from "../../fake/reactor";
import Component from "../../component/component";
import System from "../../system/system";
import IEntity from "../../entity/ientity";
import Material from "../../rendering/material/material";
import Texture from "../../rendering/texture/texture";
import UI from "../ui/ui";
import Camera from "../camera/camera";
import PrimitiveSystem from "./primitive_system";
import Primitive from "./primitive";

describe("PrimitiveSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, PrimitiveSystem, PrimitiveSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message type",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus()),
            new Message("unknown")
        ],
        [
            "Pre render no payload",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<number>(Game.MESSAGE_PRE_RENDER)
        ],
        [
            "Pre render fail to publish",
            new Error("fail to publish"),
            new PrimitiveSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render render 3 primitives",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, UI, render 2, skip 1 no camera",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new UI(new FakeEntity(4)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new UI(new FakeEntity(4)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, UI, render 2, skip 1 invalid camera",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new UI(new FakeEntity(1)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new UI(new FakeEntity(2)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new UI(new FakeEntity(1)),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Correctly register non-ui primitive new entity, none existing",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
            ]])
        ],
        [
            "Correctly register ui primitive new entity, none existing",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2)),
                        new UI(new FakeEntity(0))
                    ])],
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2)),
                new UI(new FakeEntity(0))
            ]])
        ],
        [
            "Correctly register camera new entity, none existing",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Camera()
            ]])
        ],
        [
            "Correctly register new non-ui primitive entity, three existing",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                ]),
                0
            ),
            new PrimitiveSystem(new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
                    ])]
                ]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [
                new Transform(),
                new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
            ]])
        ],
        [
            "Correctly reject non-ui primitive new entity, missing transform",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Primitive(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1,1)) }), 0, Polygon.RectangleByDimensions(2, 2))
            ]])
        ],
        [
            "Correctly reject non-ui primitive new entity, missing primitive",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]])
        ],
        [
            "Correctly reject camera new entity, missing transform",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Camera()
            ]])
        ],
        [
            "Correctly reject camera new entity, missing camera",
            undefined,
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new PrimitiveSystem(new FakeMessageBus(), undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: PrimitiveSystem, PrimitiveSystem: PrimitiveSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                PrimitiveSystem.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(PrimitiveSystem.OnMessage(message)).toEqual(expected);
        }
        expect(PrimitiveSystem).toEqual(expectedState);
    });
});