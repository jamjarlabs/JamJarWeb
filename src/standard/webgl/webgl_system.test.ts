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
import ImageAsset from "../../rendering/image_asset";
import ShaderAsset from "../../rendering/shader_asset";
import IShader from "../../rendering/ishader";
import GLSLShader from "../glsl/glsl_shader";


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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset("test", new Image(), false))
        ],
        [
            "Finish image asset load, fail to create texture",
            new Error("Failed to create texture for image asset 'test'"),
            new WebGLSystem(
                new FakeMessageBus(),
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return null; };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return null; };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset("test", new Image(), true))
        ],
        [
            "Finish image asset load, success, replace existing",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return new WebGLTexture(); };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return new WebGLTexture(); };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                0,
            ),
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset("test", new Image(), true))
        ],
        [
            "Finish image asset load, success, replace existing",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return new WebGLTexture(); };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createTexture = function(): WebGLShader | null { return new WebGLTexture(); };
                    context.bindTexture = function(): void {return;};
                    context.texImage2D = function(): void {return;};
                    context.texParameteri = function(): void {return;};
                    context.generateMipmap = function(): void {return;};
                    return context;
                })(),
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
            new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset("test", new Image(), true))
        ],
        [
            "Finish shader load, no payload",
            undefined,
            new WebGLSystem(
                new FakeMessageBus(),
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return null; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return null; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string | null { return null; };
                    context.getShaderInfoLog = function(): string | null { return "test error"; };
                    context.deleteShader = function(): void {return;};
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string | null { return null; };
                    context.getShaderInfoLog = function(): string | null { return "test error"; };
                    context.deleteShader = function(): void {return;};
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
                ((): WebGL2RenderingContext => {
                    const context = new WebGL2RenderingContext();
                    context.createShader = function(): WebGLShader | null { return new WebGLShader(); };
                    context.shaderSource = function(): void {return;};
                    context.compileShader = function(): void {return;};
                    context.getShaderParameter = function(): string { return "test"; };
                    return context;
                })(),
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
        // Workaround for comparing anonymous functions of mocked WebGL2RenderingContext
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
    });
});