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

import System from "../../system/system";
import Transform from "../transform/transform";
import IMessage from "../../message/imessage";
import Camera from "../camera/camera";
import Message from "../../message/message";
import Vector from "../../geometry/vector";
import IMessageBus from "../../message/imessage_bus";
import Game from "../../game";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Renderable from "../../rendering/renderable";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import ImageAsset from "../../rendering/image_asset";
import ShaderAsset from "../../rendering/shader_asset";
import Shader from "../glsl/glsl_shader";
import GLSLShader from "../glsl/glsl_shader";
import GLSLContext from "../glsl/glsl_context";
import DefaultVertexShader from "./default_vertex_shader";
import DefaultFragmentShader from "./default_fragment_shader";

/**
 * WebGLSystem handles rendering to an HTML5 canvas using WebGL.
 * Takes in renderables created by pre rendering steps and
 * renders them onto a canvas.
 */
class WebGLSystem extends System {

    public static readonly MESSAGE_LOAD_RENDERABLES = "load_renderables";

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private gl: WebGL2RenderingContext;
    private renderables: Renderable[];
    private textures: Map<string, WebGLTexture>;
    private shaders: Map<string, [WebGLShader, GLSLShader]>;
    private programs: Map<string, WebGLProgram>;

    constructor(messageBus: IMessageBus,
        gl: WebGL2RenderingContext,
        scene?: IScene,
        renderables: Renderable[] = [],
        defaultShaderAssets: ShaderAsset[] = [
            new ShaderAsset(ShaderAsset.DEFAULT_FRAGMENT_SHADER_NAME, new DefaultFragmentShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_VERTEX_SHADER_NAME, new DefaultVertexShader()) 
        ],
        shaders: Map<string, [WebGLShader, Shader]> = new Map(),
        textures: Map<string, WebGLTexture> = new Map(),
        programs: Map<string, WebGLProgram> = new Map(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, WebGLSystem.EVALUATOR, entities, subscriberID);

        this.gl = gl;
        this.renderables = renderables;
        this.textures = textures;
        this.shaders = shaders;
        this.programs = programs;

        // Subscribe to messages
        this.messageBus.Subscribe(this, [
            Game.MESSAGE_RENDER, 
            WebGLSystem.MESSAGE_LOAD_RENDERABLES, 
            ImageAsset.MESSAGE_FINISH_LOAD,
            ShaderAsset.MESSAGE_REQUEST_LOAD
        ]);

        // Load default shaders
        for (const asset of defaultShaderAssets) {
            this.loadShader(asset);
        }
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload == undefined) {
                    return;
                }
                this.render(renderMessage.payload);
                break;
            }
            case WebGLSystem.MESSAGE_LOAD_RENDERABLES: {
                const renderMessage = message as Message<Renderable[]>;
                if (renderMessage.payload == undefined) {
                    return;
                }
                this.renderables.push(...renderMessage.payload);
                break;
            }
            case ImageAsset.MESSAGE_FINISH_LOAD: {
                const loadMessage = message as Message<ImageAsset>;
                const asset = loadMessage.payload;
                if (asset === undefined) {
                    return;
                }
                this.loadTexture(asset);
                break;
            }
            case ShaderAsset.MESSAGE_REQUEST_LOAD: {
                const loadMessage = message as Message<ShaderAsset>;
                const asset = loadMessage.payload;
                if (asset === undefined) {
                    return;
                }
                this.loadShader(asset);
                break;
            }
        }
    }

    private loadShader(asset: ShaderAsset): void {
        if (!(asset.shader instanceof GLSLShader)) {
            return;
        }

        const gl = this.gl;
        let type: number;
        switch (asset.shader.type) {
            case GLSLShader.VERTEX_TYPE: {
                type = gl.VERTEX_SHADER;
                break;
            }
            case GLSLShader.FRAGMENT_TYPE: {
                type = gl.FRAGMENT_SHADER;
                break;
            }
            default: {
                return;
            }
        }

        const shader = gl.createShader(type);
        if (shader === null) {
            throw (`Error creating shader ${asset.name}`);
        }
        gl.shaderSource(shader, asset.shader.source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            throw (`Error compiling shader ${asset.name}`);
        }
        this.shaders.set(asset.name, [shader, asset.shader]);
        this.messageBus.Publish(new Message(ShaderAsset.MESSAGE_FINISH_LOAD));
    }

    private loadTexture(asset: ImageAsset): void {
        if (!asset.success) {
            return;
        }
        const gl = this.gl;
        const level = 0;
        const internalFormat = gl.RGBA;
        const srcFormat = gl.RGBA;
        const srcType = gl.UNSIGNED_BYTE;
        const glTexture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, asset.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.generateMipmap(gl.TEXTURE_2D);
        if (glTexture === null) {
            throw ("Failed to create texture");
        }
        this.textures.set(asset.name, glTexture);
    }

    private render(alpha: number): void {
        const gl = this.gl;

        const canvasWidth = gl.canvas.width;
        const canvasHeight = gl.canvas.height;

        for (const cameraEntity of this.entities.values()) {
            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const transform = cameraEntity.Get(Transform.KEY) as Transform;

            // realWidth and realHeight are the width and height of the viewport
            // relative to the canvas with and height, rather than the normalised
            // scale of viewportScale
            const realWidth = canvasWidth * camera.viewportScale.x;
            const realHeight = canvasHeight * camera.viewportScale.y;

            // realPosition is the center position of the camera viewport in relation to 
            // the canvas converted from the -1 to +1 coordinates of the viewportPosition
            // combined with the real width and height to make sure it is in the center
            // of the viewport.
            const realPosition = new Vector(
                (canvasWidth / 2 + (camera.viewportPosition.x / 2) * canvasWidth) - realWidth / 2,
                (canvasHeight / 2 + (camera.viewportPosition.y / 2) * canvasHeight) - realHeight / 2
            );

            // Define the viewport position of the camera
            gl.viewport(
                realPosition.x,
                realPosition.y,
                realWidth,
                realHeight
            );

            // Define scissor around camera viewport, ensures that nothing is rendered outside
            // of the viewport defined for this camera
            gl.scissor(
                realPosition.x,
                realPosition.y,
                realWidth,
                realHeight
            );

            gl.enable(gl.SCISSOR_TEST);

            // Clear the screen
            gl.clearDepth(1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

            // Set the background color
            gl.clearColor(
                camera.backgroundColor.red,
                camera.backgroundColor.green,
                camera.backgroundColor.blue,
                camera.backgroundColor.alpha
            );

            // Enable depth testing (objects can appear behind/infront of eachother)
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);

            // Enable alpha blending
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

            // Group by z order
            const zOrderGroups: Renderable[][] = [];
            for (const renderable of this.renderables) {
                if (zOrderGroups[renderable.zOrder] === undefined) {
                    zOrderGroups[renderable.zOrder] = [renderable];
                } else {
                    zOrderGroups[renderable.zOrder].push(renderable);
                }
            }
            for (const zOrderGroup of zOrderGroups) {
                // Group by program
                const programGroups: Map<string, Renderable[]> = new Map();
                for (const renderable of zOrderGroup) {
                    let key = "";
                    for (const shaderName of renderable.material.shaders) {
                        key = `${key}_${shaderName}`;
                    }
                    const programRenderables = programGroups.get(key);
                    if (programRenderables === undefined) {
                        programGroups.set(key, [renderable]);
                    } else {
                        programRenderables.push(renderable);
                        programGroups.set(key, programRenderables);
                    }
                }

                for (const programGroup of programGroups.values()) {
                    const programCanary = programGroup[0];
                    const shaders = [];
                    let programKey = "";
                    let loaded = true;

                    for (const shaderName of programCanary.material.shaders) {
                        const shader = this.shaders.get(shaderName);
                        if (shader === undefined) {
                            // Shader not loaded
                            loaded = false;
                            break;
                        }
                        shaders.push(shader);
                        programKey = `${programKey}_${shaderName}`;
                    }

                    if (!loaded) {
                        // Shader not loaded skip renderables for
                        // this program
                        continue;
                    }

                    // Set program variables
                    let program = this.programs.get(programKey);
                    // Program not created yet
                    if (program === undefined) {
                        const loadProgram = gl.createProgram();
                        if (loadProgram === null) {
                            throw (`Error creating program '${programKey}'`);
                        }
                        for (const shader of shaders) {
                            gl.attachShader(loadProgram, shader[0]);
                        }
                        gl.linkProgram(loadProgram);
                        if (!gl.getProgramParameter(loadProgram, gl.LINK_STATUS)) {
                            console.error(gl.getProgramInfoLog(loadProgram));
                            gl.deleteProgram(loadProgram);
                            throw (`Error linking program '${programKey}'`);
                        }
                        this.programs.set(programKey, loadProgram);
                        program = loadProgram;
                    }

                    gl.useProgram(program);
                    // Per shader
                    const glslContext = new GLSLContext(gl, program, camera, transform);
                    for (const shader of shaders) {
                        if (shader[1].perShader !== undefined) {
                            shader[1].perShader(glslContext);
                        }
                    }

                    // Group by texture
                    const textureGroups: Map<string, Renderable[]> = new Map();
                    for (const renderable of programGroup) {
                        const textureName = `texture_${renderable.material.texture.image}`;
                        const textureRenderables = textureGroups.get(textureName);
                        if (textureRenderables === undefined) {
                            textureGroups.set(textureName, [renderable]);
                        } else {
                            textureRenderables.push(renderable);
                            textureGroups.set(textureName, textureRenderables);
                        }
                    }

                    for (const textureGroup of textureGroups.values()) {
                        const textureCanary = textureGroup[0];
                        const texture = this.textures.get(textureCanary.material.texture.image);
                        if (texture === undefined) {
                            // Texture not loaded, skip rendering for this texture
                            continue;
                        }

                        for (const shader of shaders) {
                            if (shader[1].perTexture !== undefined) {
                                shader[1].perTexture(glslContext, texture);
                            }
                        }

                        for (const renderable of textureGroup) {
                            if (renderable.camera !== undefined && renderable.camera.id !== cameraEntity.entity.id) {
                                continue;
                            }

                            for (const shader of shaders) {
                                if (shader[1].perRenderable !== undefined) {
                                    shader[1].perRenderable(glslContext, texture, renderable);
                                }
                            }

                            gl.drawArrays(gl.TRIANGLE_FAN, 0, renderable.verticies.length / 2);
                        }
                    }
                }

            }
        }
        this.renderables = [];
    }
}

export default WebGLSystem;