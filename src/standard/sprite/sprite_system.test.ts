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

import SpriteSystem from "./sprite_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Game from "../../game";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Sprite from "./sprite";
import Polygon from "../../shape/polygon";
import Reactor from "../../fake/reactor";
import Component from "../../component/component";
import System from "../../system/system";
import IEntity from "../../entity/ientity";
import Material from "../../rendering/material/material";
import Texture from "../../rendering/texture/texture";
import UI from "../ui/ui";
import Camera from "../camera/camera";
import FrustumCuller from "../frustum_culler/frustum_culler";
import AllCollideAlgorithm from "../collision/algorithm/all_collide_algorithm";
import NoneCollideAlgorithm from "../collision/algorithm/none_collide_algorithm";
import Renderable from "../../rendering/renderable";
import Matrix4D from "../../geometry/matrix_4d";
import Vector from "../../geometry/vector";
import Color from "../../rendering/color";
import DrawMode from "../../rendering/draw_mode";

describe("SpriteSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, SpriteSystem, SpriteSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message type",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus()),
            new Message("unknown"),
        ],
        [
            "Pre render no payload",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<number>(Game.MESSAGE_PRE_RENDER),
        ],
        [
            "Pre render fail to publish",
            new Error("fail to publish"),
            new SpriteSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => {
                        throw "fail to publish";
                    }),
                ]),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => {
                        throw "fail to publish";
                    }),
                ]),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, skip 3 sprites, no camera",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, skip 3 sprites, cull",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([[3, []]]),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map(),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, render 3 sprites, one camera",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        3,
                        [
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D().Scale(new Vector(1, 1)),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D().Scale(new Vector(1, 1)),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D().Scale(new Vector(1, 1)),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                        ],
                    ],
                ]),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map(),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Camera(), new Transform()])],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, UI, render 2, skip 1, no camera",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        2,
                        [
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D()
                                    .Translate(new Vector(0, 0))
                                    .Rotate(0)
                                    .Scale(new Vector(1, 1).Multiply(new Vector(160, 90))),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D()
                                    .Translate(new Vector(0, 0))
                                    .Rotate(0)
                                    .Scale(new Vector(1, 1).Multiply(new Vector(160, 90))),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                        ],
                    ],
                ]),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Camera()])],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new UI(new FakeEntity(4)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Camera()])],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new UI(new FakeEntity(4)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, UI, skip 3, one camera, culled",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map([[3, []]]),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Transform(), new Camera()])],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new NoneCollideAlgorithm()),
                new Map(),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new UI(new FakeEntity(3)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [3, new SystemEntity(new FakeEntity(3), [new Transform(), new Camera()])],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Pre render, UI, render 2, skip 1 invalid camera",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map([
                    [
                        2,
                        [
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D()
                                    .Translate(new Vector(0, 0))
                                    .Rotate(0)
                                    .Scale(new Vector(1, 1).Multiply(new Vector(160, 90))),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                            new Renderable(
                                0,
                                Polygon.QuadByDimensions(1, 1, 0, 0),
                                new Matrix4D()
                                    .Translate(new Vector(0, 0))
                                    .Rotate(0)
                                    .Scale(new Vector(1, 1).Multiply(new Vector(160, 90))),
                                new Material({
                                    color: new Color(1, 1, 1, 1),
                                    shaders: ["default_texture_vertex", "default_texture_fragment"],
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                }),
                                DrawMode.TRIANGLES
                            ),
                        ],
                    ],
                ]),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Camera()])],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new UI(new FakeEntity(1)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                new Map(),
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new UI(new FakeEntity(2)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Camera()])],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new UI(new FakeEntity(1)),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0),
        ],
        [
            "Correctly register non-ui sprite new entity, none existing",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [
                    new Transform(),
                    new Sprite(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }), 0),
                ],
            ]),
        ],
        [
            "Correctly register ui sprite new entity, none existing",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                            new UI(new FakeEntity(0)),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [
                    new Transform(),
                    new Sprite(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }), 0),
                    new UI(new FakeEntity(0)),
                ],
            ]),
        ],
        [
            "Correctly register camera new entity, none existing",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([[0, new SystemEntity(new FakeEntity(0), [new Transform(), new Camera()])]]),
                0
            ),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new Transform(), new Camera()],
            ]),
        ],
        [
            "Correctly register new non-ui sprite entity, three existing",
            undefined,
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new SpriteSystem(
                new FakeMessageBus(),
                undefined,
                new FrustumCuller(new AllCollideAlgorithm()),
                undefined,
                new Map([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(
                                new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }),
                                0
                            ),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(3),
                [
                    new Transform(),
                    new Sprite(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }), 0),
                ],
            ]),
        ],
        [
            "Correctly reject non-ui sprite new entity, missing transform",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new Sprite(new Material({ texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)) }), 0)],
            ]),
        ],
        [
            "Correctly reject non-ui sprite new entity, missing sprite",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]]),
        ],
        [
            "Correctly reject camera new entity, missing transform",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Camera()]]),
        ],
        [
            "Correctly reject camera new entity, missing camera",
            undefined,
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new SpriteSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]]),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: SpriteSystem,
            spriteSystem: SpriteSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    spriteSystem.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(spriteSystem.OnMessage(message)).toEqual(expected);
            }
            expect(spriteSystem).toEqual(expectedState);
        }
    );
});
