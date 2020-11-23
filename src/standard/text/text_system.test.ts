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
import TextSystem from "./text_system";
import FontAsset from "../../rendering/font/font_asset";
import Reactor from "../../fake/reactor";
import { ISDFGenerator } from "tiny-sdf";
import Fake from "../../fake/fake";
import FontMapping from "./font_mapping";
import Game from "../../game";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Text from "./text";
import Renderable from "../../rendering/renderable";
import TextRender from "./text_render";
import TextAlignment from "./text_alignment";
import UI from "../ui/ui";
import Camera from "../camera/camera";
import System from "../../system/system";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import FontRequest from "../../rendering/font/font_request";
import AllCollideAlgorithm from "../collision/algorithm/all_collide_algorithm";
import FrustumCuller from "../frustum_culler/frustum_culler";
import NoneCollideAlgorithm from "../collision/algorithm/none_collide_algorithm";

/**
 * FakeSDFGenerator is used to stub SDFGenerators.
 */
class FakeSDFGenerator extends Fake implements ISDFGenerator {
    draw(char: string): ImageData {
        return new ImageData(1,1);
    }
}

describe("TextSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, TextSystem, TextSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message type",
            undefined,
            new TextSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, undefined, 0),
            new TextSystem(new FakeMessageBus()),
            new Message("unknown")
        ],
        [
            "Load font no payload",
            undefined,
            new TextSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, undefined, 0),
            new TextSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, undefined, 0),
            new Message<number>(FontRequest.MESSAGE_REQUEST_LOAD)
        ],
        [
            "Load font, SDF factory error",
            new Error("sdf factory error"),
            new TextSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, () => { throw("sdf factory error");}, 0),
            new TextSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, () => { throw("sdf factory error");}, 0),
            new Message<FontRequest>(FontRequest.MESSAGE_REQUEST_LOAD,
                new FontRequest(
                    "test",
                    "test",
                    "test",
                    15
                )
            )
        ],
        [
            "Load font, 5 characters, 3*3 atlas, publish fail",
            new Error("publish fail"),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => { throw("publish fail");})
                ]),
                undefined,
                undefined,
                undefined,
                new Map<string, FontMapping>([
                    ["test", new FontMapping(
                        3,
                        new FontAsset(
                            "test",
                            new FontRequest(
                                "test",
                                "test",
                                "test",
                                15,
                                {
                                    characters: "abcde"
                                }
                            )
                        ),
                        new Map<string, number>([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ])
                    )]
                ]),
                () => new FakeSDFGenerator(),
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => { throw("publish fail");})
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                () => new FakeSDFGenerator(),
                0
            ),
            new Message<FontRequest>(FontRequest.MESSAGE_REQUEST_LOAD,
                new FontRequest(
                    "test",
                    "test",
                    "test",
                    15,
                    {
                        characters: "abcde"
                    }
                )
            )
        ],
        [
            "Load font, 5 characters, 3*3 atlas, success",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                undefined,
                new Map<string, FontMapping>([
                    ["test", new FontMapping(
                        3,
                        new FontAsset(
                            "test",
                            new FontRequest(
                                "test",
                                "test",
                                "test",
                                15,
                                {
                                    characters: "abcde"
                                }
                            )
                        ),
                        new Map<string, number>([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ])
                    )]
                ]),
                () => new FakeSDFGenerator(),
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                undefined,
                undefined,
                () => new FakeSDFGenerator(),
                0
            ),
            new Message<FontRequest>(FontRequest.MESSAGE_REQUEST_LOAD,
                new FontRequest(
                    "test",
                    "test",
                    "test",
                    15,
                    {
                        characters: "abcde"
                    }
                )
            )
        ],
        [
            "Pre render, no payload",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER)
        ],
        [
            "Pre render, no camera entities",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])]
                ]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])]
                ]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, no text entities",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                undefined,
                undefined,
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, no font mapping",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, no character mapping",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["p", 0]
                    ]))]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["p", 0]
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, fail to publish",
            new Error("fail to publish"),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => { throw("fail to publish"); })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => { throw("fail to publish"); })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, 2 no mapping",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(3);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, invalid alignment",
            new Error("Invalid text alignment: 3"),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", 3)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", 3)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, left align, not UI, cull characters",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(0);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, left align, not UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, center align, not UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Center)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Center)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, right align, not UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Right)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Right)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, 5 characters, UI, no camera entity",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test"),
                        new UI(new FakeEntity(1))
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(0);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test"),
                        new UI(new FakeEntity(1))
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, left align, UI, cull",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])],
                ]),
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(0);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])]
                ]),
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, left align, UI, targeting different camera",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(0);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(2))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, left align, UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Left),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, center align, UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Center),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Center),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render, one camera, 5 characters, center align, UI",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Right),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        "test",
                        new FontMapping(10,
                        new FontAsset("test", new FontRequest("test", "test", "test", 3)),
                        new Map([
                            ["a", 0],
                            ["b", 1],
                            ["c", 2],
                            ["d", 3],
                            ["e", 4],
                        ]))
                    ]
                ]),
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: Message<Map<number, Renderable<TextRender>[]>>) => {
                        expect(message.payload?.size).toEqual(1);
                        expect(message.payload?.get(1)?.length).toEqual(5);
                    })
                ]),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "abcde", "test", TextAlignment.Right),
                        new UI(new FakeEntity(1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Camera(),
                        new Transform()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    ["test", new FontMapping(10, new FontAsset("test", new FontRequest("test", "test", "test", 3)), new Map([
                        ["a", 0],
                        ["b", 1],
                        ["c", 2],
                        ["d", 3],
                        ["e", 4],
                    ]))]
                ]),
                undefined,
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Correctly register new text entity, none existing",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Text(0, "test", "test")
            ]])
        ],
        [
            "Correctly register new text entity, 3 existing",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test1", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Text(0, "test2", "test")
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new Text(0, "test", "test")
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test1", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Text(0, "test2", "test")
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [
                new Transform(),
                new Text(0, "test", "test")
            ]])
        ],
        [
            "Correctly register new camera entity, none existing",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Camera()
            ]])
        ],
        [
            "Correctly register new camera entity, 3 existing",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test1", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Text(0, "test2", "test")
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                new Map([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Text(0, "test1", "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Text(0, "test2", "test")
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Camera()
                    ])],
                ]),
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [
                new Transform(),
                new Camera()
            ]])
        ],
        [
            "Correctly reject text entity, no transform",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Text(0, "test", "test")
            ]])
        ],
        [
            "Correctly reject text entity, no text",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform()
            ]])
        ],
        [
            "Correctly reject camera entity, no transform",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Camera()
            ]])
        ],
        [
            "Correctly reject camera entity, no camera",
            undefined,
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new TextSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                undefined,
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform()
            ]])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TextSystem, system: TextSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        // Workaround for comparing anonymous functions
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
    });
});
