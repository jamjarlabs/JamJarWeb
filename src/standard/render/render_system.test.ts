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

import RenderSystem from "./render_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Renderable from "../../rendering/renderable";
import Material from "../../rendering/material/material";
import Texture from "../../rendering/texture/texture";
import IRenderable from "../../rendering/irenderable";
import Polygon from "../../shape/polygon";
import Matrix4D from "../../geometry/matrix_4d";
import DrawMode from "../../rendering/draw_mode";
import FakeEntity from "../../fake/entity";

/**
 * TextRenderSystem is the implementation of the abstract RenderSystem, used
 * only for testing
 */
class TestRenderSystem extends RenderSystem {}

describe("WebGLSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, RenderSystem, RenderSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message("unknown"),
        ],
        [
            "Load renderables, no payload",
            undefined,
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message(RenderSystem.MESSAGE_LOAD_RENDERABLES),
        ],
        [
            "Load renderables, 3 existing, add 2",
            undefined,
            new TestRenderSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                [
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test2", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test3", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test4", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test5", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                ],
                undefined,
                0
            ),
            new TestRenderSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                [
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test2", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test3", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                ],
                undefined,
                0
            ),
            new Message<IRenderable[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, [
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test4", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test5", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
            ]),
        ],
        [
            "Load renderables, none existing, add 3",
            undefined,
            new TestRenderSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                [
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test2", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test3", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                ],
                undefined,
                0
            ),
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<IRenderable[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, [
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test2", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test3", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
            ]),
        ],
        [
            "Load renderables, none existing, add 3",
            undefined,
            new TestRenderSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                [
                    new Renderable(
                        0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                        DrawMode.TRIANGLE_STRIP,
                        new FakeEntity(0)
                    ),
                ],
                undefined,
                0
            ),
            new TestRenderSystem(new FakeMessageBus(), undefined, undefined, undefined, undefined, 0),
            new Message<IRenderable[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, [
                new Renderable(
                    0,
                    Polygon.RectangleByDimensions(1, 1),
                    new Matrix4D(),
                    new Material({ texture: new Texture("test1", Polygon.RectangleByDimensions(1, 1)) }),
                    DrawMode.TRIANGLE_STRIP,
                    new FakeEntity(0)
                ),
            ]),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: RenderSystem,
            system: RenderSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            expect(system).toEqual(expectedState);
        }
    );
});
