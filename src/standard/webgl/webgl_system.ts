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
import Matrix4D from "../../geometry/matrix_4d";
import IMessageBus from "../../message/imessage_bus";
import Game from "../../game";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Renderable from "../../rendering/renderable";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import ImageSystem from "../image/image_system";
import ImageAsset from "../image/image_asset";

/**
 * WebGLSystem handles rendering to an HTML5 canvas using WebGL.
 * Takes in renderables created by pre rendering steps and
 * renders them onto a canvas.
 */
class WebGLSystem extends System {

    public static readonly MESSAGE_LOAD_RENDERABLES = "load_renderables";

    private static readonly VERTEX_SHADER = `#version 300 es
        in vec2 aVertexPosition;
        in vec2 aTexturePosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        out vec2 vTextureCoordinate;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
            vTextureCoordinate = aTexturePosition;
        }
    `;
    private static readonly FRAGMENT_SHADER = `#version 300 es
        precision mediump float;

        uniform bool uTexturePresent;
        uniform vec4 uColor;
        uniform sampler2D uTexture;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            vec4 texturedColor;
            if (uTexturePresent) {
                texturedColor = texture(uTexture, vTextureCoordinate);
            }
            else {
                texturedColor = uColor;
            }
            outColor = texturedColor;
        }
    `;

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null;
    private renderables: Renderable[];
    private placeholderTexture: WebGLTexture;
    private textures: Record<string, WebGLTexture>;

    constructor(messageBus: IMessageBus, 
        gl: WebGL2RenderingContext, 
        scene?: IScene, 
        renderables: Renderable[] = [],
        entities?: Map<number, SystemEntity>, 
        subscriberID?: number) {
        super(messageBus, scene, WebGLSystem.EVALUATOR, entities, subscriberID );
        this.gl = gl;
        this.renderables = renderables;
        this.messageBus.Subscribe(this, [Game.MESSAGE_RENDER, WebGLSystem.MESSAGE_LOAD_RENDERABLES, ImageSystem.MESSAGE_FINISH_LOAD]);
        const vertexShader = this.createShader(gl.VERTEX_SHADER, WebGLSystem.VERTEX_SHADER);
		const fragmentShader = this.createShader(gl.FRAGMENT_SHADER, WebGLSystem.FRAGMENT_SHADER);
        this.program = this.createProgram(vertexShader, fragmentShader);
        const placeholderTexture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, placeholderTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0,0,255,255]));
        if (placeholderTexture === null) {
            throw("Failed to create placeholder texture");
        }
        this.placeholderTexture = placeholderTexture;
        this.textures = {};
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
            case ImageSystem.MESSAGE_FINISH_LOAD: {
                const loadMessage = message as Message<ImageAsset>;
                if (loadMessage.payload == undefined) {
                    return;
                }
                if (!loadMessage.payload.success) {
                    return;
                }
                const gl = this.gl;
                const level = 0;
                const internalFormat = gl.RGBA;
                const srcFormat = gl.RGBA;
                const srcType = gl.UNSIGNED_BYTE;
                const glTexture = gl.createTexture();
        
                gl.bindTexture(gl.TEXTURE_2D, glTexture);
                gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, loadMessage.payload.image);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.generateMipmap(gl.TEXTURE_2D);
                if (glTexture === null) {
                    throw("Failed to create texture");
                }
                this.textures[loadMessage.payload.name] = glTexture;
            }
        }
    }

    private createShader(type: number, source: string): WebGLShader {
        const gl = this.gl;
        const shader = gl.createShader(type);
        if (!shader) {
            throw ("Error creating shader");
        }
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			throw ("Error compiling shader");
		}
		return shader;
	}

	private createProgram(vertex: WebGLShader, fragment: WebGLShader): WebGLProgram {
        const gl = this.gl;
        const program = gl.createProgram();
        if (!program) {
            throw("Error creating program");
        }
		gl.attachShader(program, vertex);
		gl.attachShader(program, fragment);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			console.error(gl.getProgramInfoLog(program));
			gl.deleteProgram(program);
			throw ("Error linking program");
		}
		return program;
	}

    private render(alpha: number): void {
        const gl = this.gl;

        const program = this.program;
        if (!program) {
            throw("Undefined program");
        }

        const canvasWidth = gl.canvas.width;
        const canvasHeight = gl.canvas.height;
        
        for(const cameraEntity of this.entities.values()) {
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

            const viewMatrix = new Matrix4D();
            viewMatrix.Translate(transform.position.Invert());

            const projectionMatrix = camera.GetProjectionMatrix();

            gl.useProgram(program);

			// Supply camera matrices to GPU
            const viewLocation = gl.getUniformLocation(program, "uViewMatrix");
            const modelLocation = gl.getUniformLocation(program, "uModelMatrix");
            const projectionLocation = gl.getUniformLocation(program, "uProjectionMatrix");
            const texturePresentLocation = gl.getUniformLocation(program, "uTexturePresent");
            const textureLocation = gl.getUniformLocation(program, "uTexture");


			gl.uniformMatrix4fv(
				viewLocation,
				false,
                viewMatrix.GetFloat32Array());
                
            gl.uniformMatrix4fv(
                projectionLocation,
                false,
                projectionMatrix.GetFloat32Array());

			// Get color uniform location for GPU
            const colorLocation = gl.getUniformLocation(program, "uColor");

            // Sort renderables by z order
            const sortedRenderables = this.renderables.sort((a: Renderable, b: Renderable) => a.zOrder - b.zOrder)
            
            for (const renderable of sortedRenderables) {
                if (renderable.camera !== undefined && renderable.camera.id !== cameraEntity.entity.id) {
                    continue;
                }
                const vao = gl.createVertexArray();
                const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
                const texturePositionLocation = gl.getAttribLocation(program, "aTexturePosition");
                const positionBuffer = gl.createBuffer();
                const textureBuffer = gl.createBuffer();
                let texturePresent = false;
                let texturePoints = renderable.verticies;
                let texture = this.placeholderTexture;
                if (renderable.texture !== undefined) {
                    texturePresent = true;
                    texturePoints = renderable.texture.points;
                    texture = this.textures[renderable.texture.image];
                    if (texture === undefined) {
                        texture = this.placeholderTexture;
                    }
                }

                gl.uniform1i(texturePresentLocation, Number(texturePresent));
				gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, texture);
				gl.uniform1i(textureLocation, 0);
        
                // bind vao
                gl.bindVertexArray(vao);
                // Enable attribute
                gl.enableVertexAttribArray(positionLocation);
                // bind buffer
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        
                // send buffer data
                gl.bufferData(gl.ARRAY_BUFFER, renderable.verticies, gl.DYNAMIC_DRAW);

                gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);

                gl.bufferData(gl.ARRAY_BUFFER, texturePoints, gl.DYNAMIC_DRAW);

                gl.enableVertexAttribArray(texturePositionLocation);

                gl.vertexAttribPointer(texturePositionLocation, 2, gl.FLOAT, false, 0, 0);

                gl.uniformMatrix4fv(
                    modelLocation,
                    false,
                    renderable.modelMatrix
                );

                gl.uniform4f(colorLocation, ...renderable.color.GetTuple());
                gl.drawArrays(gl.TRIANGLE_FAN, 0, renderable.verticies.length / 2);
            }
        }
        this.renderables = [];
    }
}

export default WebGLSystem;