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
import WebGLSystem from "./webgl_system";
import System from "../../system/system";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import FakeEntity from "../../fake/entity";
import Camera from "../camera/camera";
import Transform from "../transform/transform";
import SystemEntity from "../../system/system_entity";
import ImageAsset from "../../rendering/image/image_asset";
import ShaderAsset from "../../rendering/shader/shader_asset";
import IShader from "../../rendering/shader/ishader";
import GLSLShader from "../glsl/glsl_shader";
import FakeWebGL2RenderingContext from "../../fake/webgl2_rendering_context";
import Reactor from "../../fake/reactor";
import Game from "../../game";
import Renderable from "../../rendering/renderable";
import Polygon from "../../shape/polygon";
import Matrix4D from "../../geometry/matrix_4d";
import Material from "../../rendering/material/material";
import Texture from "../../rendering/texture/texture";
import Vector from "../../geometry/vector";
import TextureFiltering from "../../rendering/texture/texture_filtering";
import TextureWrapping from "../../rendering/texture/texture_wrapping";
import DrawMode from "../../rendering/draw_mode";

class TestShader implements IShader {
    public source: string;
    public type: string;

    constructor(source: string, type: string) {
        this.source = source;
        this.type = type;
    }
}

describe("WebGLSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, WebGLSystem, WebGLSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message("unknown")
        ],
        [
            "Register, fail, no transform",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<[IEntity, Component[]]>(
                System.MESSAGE_REGISTER,
                [
                    new FakeEntity(0),
                    [new Camera()]
                ]
            )
        ],
        [
            "Register, fail, no camera",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<[IEntity, Component[]]>(
                System.MESSAGE_REGISTER,
                [
                    new FakeEntity(0),
                    [new Transform()]
                ]
            )
        ],
        [
            "Register, success",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([[
                    0,
                    new SystemEntity(
                        new FakeEntity(0),
                        [new Camera(), new Transform()]
                    )
                ]]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<[IEntity, Component[]]>(
                System.MESSAGE_REGISTER,
                [
                    new FakeEntity(0),
                    [new Camera(), new Transform()]
                ]
            )
        ],
        [
            "Finish image asset load, no payload",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message(ImageAsset.MESSAGE_FINISH_LOAD)
        ],
        [
            "Finish image asset load, asset load not success",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                false,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, unsupported x wrap",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                5,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, unsupported y wrap",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                100,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, unsupported mag filter",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                23,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, unsupported min filter",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.NEAREST,
                88,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, fail to create texture",
            new Error("Failed to create texture for image asset 'test'"),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, success, new asset",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, success, new asset, generate mipmap",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                true,
                false
            ))
        ],
        [
            "Finish image asset load, success, replace existing",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new Image(),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, success, image data",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new ImageData(5, 10),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                false,
                false
            ))
        ],
        [
            "Finish image asset load, success, image data, generate mipmap",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", new WebGLTexture()]
                ]),
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createTexture", (): WebGLTexture => {
                        return new WebGLTexture();
                    })
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
                "test",
                new ImageData(5, 10),
                true,
                TextureWrapping.CLAMP_TO_EDGE,
                TextureWrapping.MIRRORED_REPEAT,
                TextureFiltering.TRILINEAR,
                TextureFiltering.NEAREST,
                true,
                false
            ))
        ],
        [
            "Finish shader load, no payload",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message(ShaderAsset.MESSAGE_REQUEST_LOAD)
        ],
        [
            "Finish shader load, non GLSL shader",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test", new TestShader("test", "test")))
        ],
        [
            "Finish shader load, unknown shader type",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test", new GLSLShader("unknown", "test")))
        ],
        [
            "Finish shader load, fail to create shader",
            new Error("Error creating shader for asset 'test'"),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test", new GLSLShader(ShaderAsset.VERTEX_TYPE, "test")))
        ],
        [
            "Finish shader load, fail to compile shader",
            new Error("Error compiling shader for asset 'test', error: test error"),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderInfoLog", (): string => "test error"),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderInfoLog", (): string => "test error"),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test", new GLSLShader(ShaderAsset.VERTEX_TYPE, "test")))
        ],
        [
            "Finish shader load, success, replace existing",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "test")]]
                ]),
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "test")]]
                ]),
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test", new GLSLShader(ShaderAsset.VERTEX_TYPE, "test")))
        ],
        [
            "Finish shader load, success, vertex, new",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test vertex", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "test vertex")]]
                ]),
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test vertex", new GLSLShader(ShaderAsset.VERTEX_TYPE, "test vertex")))
        ],
        [
            "Finish shader load, success, fragment, new",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                new Map([
                    ["test vertex", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "test vertex")]]
                ]),
                undefined,
                undefined,
                undefined,
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("createShader", (): WebGLTexture => new WebGLTexture()),
                    new Reactor("getShaderParameter", (): string => "test"),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset("test vertex", new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "test vertex")))
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: WebGLSystem, system: WebGLSystem, message: IMessage) => {
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

describe("WebGLSystem - Render", () => {
    let drawCount = 0;
    type TestTuple = [string, Error | undefined, number, WebGLSystem, WebGLSystem, IMessage];
    test.each<TestTuple>([
        [
            "Render, no alpha payload",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>(),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>(),
                0,
            ),
            new Message(Game.MESSAGE_RENDER)
        ],
        [
            "Render, no cameras",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>(),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>(),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, no renderables",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, no loaded shaders",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                new Map(),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                undefined,
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, fail to create program",
            new Error("Error creating program '_test_vert_test_frag'"),
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram | null => null),
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram | null => null),
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, fail to link program",
            new Error("Error linking program '_test_vert_test_frag', error: null"),
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): boolean => false)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): boolean => false)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, no loaded textures",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map(),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { throw ("expected no draw call"); }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                undefined,
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, 1 renderables",
            undefined,
            1,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map(),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, 3 renderables, 2 cameras, render only to one camera",
            undefined,
            3,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map(),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "", () => { return; }, () => { return; }, () => { return; })]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "", () => { return; }, () => { return; }, () => { return; })]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(new Vector(1, 1)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(new Vector(2, 2)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1, 0, 0),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP,
                        undefined
                    ),
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1, 1, 0),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP,
                        undefined
                    ),
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1, 2, 0),
                        new Matrix4D(),
                        new Material({
                            shaders: ["test_vert", "test_frag"]
                        }),
                        DrawMode.TRIANGLE_STRIP,
                        undefined
                    ),
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "", () => { return; }, () => { return; }, () => { return; })]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "", () => { return; }, () => { return; }, () => { return; })]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(new Vector(1, 1)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(new Vector(2, 2)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, unsupported draw mode",
            undefined,
            0,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map(),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map([[0, [
                    new Renderable(0,
                        Polygon.RectangleByDimensions(1, 1),
                        new Matrix4D(),
                        new Material({
                            texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                            shaders: ["test_vert", "test_frag"]
                        }),
                        23
                    )
                ]]]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "")]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "")]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Camera()
                    ])]
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
        [
            "Render, 5 renderables, 1 camera, disjointed z order",
            undefined,
            5,
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map(),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "", () => { return; }, () => { return; }, () => { return; })]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "", () => { return; }, () => { return; }, () => { return; })]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(new Vector(1, 1)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])],
                ]),
                0,
            ),
            new WebGLSystem(
                new FakeMessageBus(),
                new FakeWebGL2RenderingContext([
                    new Reactor("drawArrays", (): void => { drawCount++; }),
                    new Reactor("canvas", (): HTMLCanvasElement => {
                        const canvas = new HTMLCanvasElement();
                        canvas.width = 10;
                        canvas.height = 10;
                        return canvas;
                    }),
                    new Reactor("createProgram", (): WebGLProgram => new WebGLProgram()),
                    new Reactor("getProgramParameter", (): number => 1)
                ]),
                undefined,
                new Map([
                    [0,
                        [
                            new Renderable(0,
                                Polygon.RectangleByDimensions(1, 1, 0, 0),
                                new Matrix4D(),
                                new Material({
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                    shaders: ["test_vert", "test_frag"]
                                }),
                                DrawMode.TRIANGLE_STRIP
                            ),
                            new Renderable(1,
                                Polygon.RectangleByDimensions(1, 1, 1, 0),
                                new Matrix4D(),
                                new Material({
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                    shaders: ["test_vert", "test_frag"]
                                }),
                                DrawMode.TRIANGLE_STRIP
                            ),
                            new Renderable(0,
                                Polygon.RectangleByDimensions(1, 1, 2, 0),
                                new Matrix4D(),
                                new Material({
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                    shaders: ["test_vert", "test_frag"]
                                }),
                                DrawMode.TRIANGLE_STRIP
                            ),
                            new Renderable(3,
                                Polygon.RectangleByDimensions(1, 1, 3, 0),
                                new Matrix4D(),
                                new Material({
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                    shaders: ["test_vert", "test_frag"]
                                }),
                                DrawMode.TRIANGLE_STRIP
                            ),
                            new Renderable(5,
                                Polygon.RectangleByDimensions(1, 1, 4, 0),
                                new Matrix4D(),
                                new Material({
                                    texture: new Texture("test", Polygon.RectangleByDimensions(1, 1)),
                                    shaders: ["test_vert", "test_frag"]
                                }),
                                DrawMode.TRIANGLE_STRIP
                            )
                        ]
                    ]
                ]),
                undefined,
                new Map<string, [WebGLShader, GLSLShader]>([
                    ["test_vert", [new WebGLShader(), new GLSLShader(ShaderAsset.VERTEX_TYPE, "", () => { return; }, () => { return; }, () => { return; })]],
                    ["test_frag", [new WebGLShader(), new GLSLShader(ShaderAsset.FRAGMENT_TYPE, "", () => { return; }, () => { return; }, () => { return; })]]
                ]),
                new Map<string, WebGLTexture>([
                    ["test", new WebGLTexture()]
                ]),
                new Map<string, WebGLProgram>([
                    ["_test_vert_test_frag", new WebGLProgram()]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(new Vector(1, 1)),
                        new Camera(undefined, undefined, undefined, new Vector(1, 1))
                    ])],
                ]),
                0,
            ),
            new Message<number>(Game.MESSAGE_RENDER, 1.0)
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedDrawCount: number, expectedState: WebGLSystem, system: WebGLSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        // Workaround for comparing objects with anonymous functions
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
        expect(drawCount).toEqual(expectedDrawCount);
        drawCount = 0;
    });
});
