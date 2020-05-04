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

import Transform from "../transform/transform";
import IMessage from "../../message/imessage";
import Camera from "../camera/camera";
import Message from "../../message/message";
import Vector from "../../geometry/vector";
import IMessageBus from "../../message/imessage_bus";
import Game from "../../game";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import ImageAsset from "../../rendering/image_asset";
import ShaderAsset from "../../rendering/shader_asset";
import GLSLShader from "../glsl/glsl_shader";
import GLSLContext from "../glsl/glsl_context";
import DefaultVertexShader from "./default_vertex_shader";
import DefaultFragmentShader from "./default_fragment_shader";
import RenderSystem from "../render/render_system";
import DefaultTextFragmentShader from "./default_text_fragment_shader";
import IRenderable from "../../rendering/irenderable";
import IFrustumCuller from "../frustum_culler/ifrustum_culler";
import FrustumCuller from "../frustum_culler/frustum_culler";
import Polygon from "../shape/polygon";

/**
 * WebGLSystem handles rendering to an HTML5 canvas using WebGL.
 * Takes in renderables created by pre rendering steps and
 * renders them onto a canvas.
 */
class WebGLSystem extends RenderSystem {

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private gl: WebGL2RenderingContext;
    private textures: Map<string, WebGLTexture>;
    private shaders: Map<string, [WebGLShader, GLSLShader]>;
    private programs: Map<string, WebGLProgram>;
    private frustumCuller: IFrustumCuller;

    constructor(messageBus: IMessageBus,
        gl: WebGL2RenderingContext,
        scene?: IScene,
        renderables: IRenderable[] = [],
        defaultShaderAssets: ShaderAsset[] = [
            new ShaderAsset(ShaderAsset.DEFAULT_FRAGMENT_SHADER_NAME, new DefaultFragmentShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_VERTEX_SHADER_NAME, new DefaultVertexShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_TEXT_FRAGMENT_SHADER_NAME, new DefaultTextFragmentShader())
        ],
        shaders: Map<string, [WebGLShader, GLSLShader]> = new Map(),
        textures: Map<string, WebGLTexture> = new Map(),
        programs: Map<string, WebGLProgram> = new Map(),
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, WebGLSystem.EVALUATOR, renderables, entities, subscriberID);

        this.gl = gl;
        this.textures = textures;
        this.shaders = shaders;
        this.programs = programs;
        this.frustumCuller = frustumCuller;

        // Subscribe to messages
        this.messageBus.Subscribe(this, [
            Game.MESSAGE_RENDER, 
            RenderSystem.MESSAGE_LOAD_RENDERABLES, 
            ImageAsset.MESSAGE_FINISH_LOAD,
            ShaderAsset.MESSAGE_REQUEST_LOAD
        ]);

        // Load default shaders
        for (const asset of defaultShaderAssets) {
            this.messageBus.Publish(new Message<ShaderAsset>(
                ShaderAsset.MESSAGE_REQUEST_LOAD, 
                asset
            ));
        }
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload === undefined) {
                    return;
                }
                this.render(renderMessage.payload);
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
            case ShaderAsset.VERTEX_TYPE: {
                type = gl.VERTEX_SHADER;
                break;
            }
            case ShaderAsset.FRAGMENT_TYPE: {
                type = gl.FRAGMENT_SHADER;
                break;
            }
            default: {
                return;
            }
        }

        const shader = gl.createShader(type);
        if (shader === null) {
            throw (`Error creating shader for asset '${asset.name}'`);
        }
        gl.shaderSource(shader, asset.shader.source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const err = gl.getShaderInfoLog(shader);
            gl.deleteShader(shader);
            throw (`Error compiling shader for asset '${asset.name}', error: ${err}`);
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
        const border = 0;
        const glTexture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, glTexture);
        if (asset.image instanceof(HTMLImageElement)) {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, asset.image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.generateMipmap(gl.TEXTURE_2D);
        } else {
            gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, asset.image.width, asset.image.height, border, srcFormat, srcType, asset.image);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        if (glTexture === null) {
            throw (`Failed to create texture for image asset '${asset.name}'`);
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

            const cameraViewShape = Polygon.RectangleByDimensions(camera.virtualScale.x, camera.virtualScale.y).Transform(transform);

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
            const zOrderGroups: IRenderable[][] = [];
            for (const renderable of this.renderables) {
                if (zOrderGroups[renderable.zOrder] === undefined) {
                    zOrderGroups[renderable.zOrder] = [renderable];
                } else {
                    zOrderGroups[renderable.zOrder].push(renderable);
                }
            }
            for (const zOrderGroup of zOrderGroups) {
                // Group by program
                const programGroups: Map<string, IRenderable[]> = new Map();
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
                            const linkErr = gl.getProgramInfoLog(loadProgram);
                            gl.deleteProgram(loadProgram);
                            throw (`Error linking program '${programKey}', error: ${linkErr}`);
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
                    const textureGroups: Map<string, IRenderable[]> = new Map();
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

                            // Frustum culling
                            if (this.frustumCuller.Cull(cameraViewShape, renderable.vertices.Apply4D(renderable.modelMatrix))) {
                                // Not in camera view, skip rendering
                                continue;
                            }

                            for (const shader of shaders) {
                                if (shader[1].perRenderable !== undefined) {
                                    shader[1].perRenderable(glslContext, texture, renderable);
                                }
                            }

                            gl.drawArrays(gl.TRIANGLE_FAN, 0, renderable.vertices.GetFloat32Array().length / 2);
                        }
                    }
                }

            }
        }
        this.renderables = [];
    }
}

export default WebGLSystem;