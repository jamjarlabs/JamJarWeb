/*
Copyright 2019 JamJar Authors

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

import System from "../system/system";
import MessageBus from "../message/message_bus";
import Entity from "../entity/entity";
import Component from "../component/component";
import Transform from "../transform/transform";
import Sprite from "./sprite";
import Scene from "../scene/scene";
import IMessage from "../message/imessage";
import SystemEntity from "../system/system_entity";
import Camera from "../camera/camera";
import Message from "../message/message";

class SpriteSystem extends System {

    public static readonly MESSAGE_RENDER_SPRITES = "sprite_system_render_sprites"

    private static readonly VERTEX_SHADER = `#version 300 es
        in vec2 aVertexPosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
        }
    `;
    private static readonly FRAGMENT_SHADER = `#version 300 es
        precision mediump float;

        uniform vec4 uColor;

        out vec4 outColor;

        void main() {
            outColor = uColor;
        }
    `;

    private static readonly EVALUATOR = (entity: Entity, components: Component[]): boolean => {
        return [Transform.KEY, Sprite.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private gl: WebGL2RenderingContext;
    private program: WebGLProgram | null;

    constructor(messageBus: MessageBus, gl: WebGL2RenderingContext, scene?: Scene) {
        super(messageBus, { evaluator: SpriteSystem.EVALUATOR, scene: scene });
        this.gl = gl;
        this.messageBus.Subscribe(this, SpriteSystem.MESSAGE_RENDER_SPRITES);
        const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, SpriteSystem.VERTEX_SHADER);
		const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, SpriteSystem.FRAGMENT_SHADER);
		this.program = this.createProgram(gl, vertexShader, fragmentShader);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case SpriteSystem.MESSAGE_RENDER_SPRITES: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload == undefined) {
                    return;
                }
                this.renderSprites(this.gl, this.entities, renderMessage.payload);
                break;
            }
        }
    }

    createShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
		const shader = gl.createShader(type)!;
		gl.shaderSource(shader, source);
		gl.compileShader(shader);
		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			console.error(gl.getShaderInfoLog(shader));
			gl.deleteShader(shader);
			throw ("Error compiling shader");
		}
		return shader;
	}

	createProgram(gl: WebGL2RenderingContext, vertex: WebGLShader, fragment: WebGLShader): WebGLProgram {
        const program = gl.createProgram()!;
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

    private renderSprites(gl: WebGL2RenderingContext, entities: SystemEntity[], alpha: number): void {
		const sprites = entities.filter((entity) => {
			return !entity.Get(Camera.KEY);
		});
		const cameras = entities.filter((entity) => {
			return entity.Get(Camera.KEY);
        });

        const program = this.program;
        if (!program) {
            throw("Undefined program");
        }
        
        for(const cameraEntity of cameras) {
            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const transform = cameraEntity.Get(Transform.KEY) as Transform;

            const viewMatrix = camera.GetViewMatrix(transform.position);
            const projectionMatrix = camera.GetProjectionMatrix();

            gl.useProgram(program);

			// Supply camera matrices to GPU
            let viewLocation = gl.getUniformLocation(program, "uViewMatrix");
            let modelLocation = gl.getUniformLocation(program, "uModelMatrix");
            let projectionLocation = gl.getUniformLocation(program, "uProjectionMatrix");


			gl.uniformMatrix4fv(
				viewLocation,
				false,
                viewMatrix.GetFloat32Array());
                
            gl.uniformMatrix4fv(
                projectionLocation,
                false,
                projectionMatrix.GetFloat32Array());

			// Get color uniform location for GPU
            let colorLocation = gl.getUniformLocation(program, "uColor");
            
            for (const entity of sprites) {
                const sprite = entity.Get(Sprite.KEY) as Sprite;
                const transform = entity.Get(Transform.KEY) as Transform;

                let vao = gl.createVertexArray();

                let position = gl.getAttribLocation(program, "aVertexPosition");
                let positionBuffer = gl.createBuffer();
        
                // bind vao
                gl.bindVertexArray(vao);
                // Enable attribute
                gl.enableVertexAttribArray(position);
                // bind buffer
                gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        
                // send buffer data
                gl.bufferData(gl.ARRAY_BUFFER, sprite.bounds.GetFloat32Array(), gl.DYNAMIC_DRAW);

                const modelMatrix = transform.InterpolatedMatrix4D(alpha);

                gl.uniformMatrix4fv(
                    modelLocation,
                    false,
                    modelMatrix.GetFloat32Array()
                );

                gl.uniform4f(colorLocation, ...sprite.color.GetTuple());
                gl.drawArrays(gl.TRIANGLE_FAN, 0, sprite.bounds.points.length);
            }
        }
    }
}

export default SpriteSystem;