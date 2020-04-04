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

import GLSLShader from "../glsl/glsl_shader";
import GLSLContext from "../glsl/glsl_context";
import Matrix4D from "../../geometry/matrix_4d";
import ShaderAsset from "../../rendering/shader_asset";
import IRenderable from "../../rendering/irenderable";

/**
 * DefaultVertexShader is the shader loaded for handling the
 * "default_vertex" shader choice, used as the default shader
 * and expected to be loaded.
 */
class DefaultVertexShader extends GLSLShader {
    private static readonly SOURCE = `#version 300 es
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

    private static readonly PER_SHADER = (context: GLSLContext): void => {
        const gl = context.gl;
        const camera = context.camera;
        const transform = context.transform;
        const program = context.program;

        const viewMatrix = new Matrix4D();

        viewMatrix.Translate(transform.position.Invert());

        const projectionMatrix = camera.GetProjectionMatrix();

        // Supply camera matrices to GPU
        const viewLocation = gl.getUniformLocation(program, "uViewMatrix");
        const projectionLocation = gl.getUniformLocation(program, "uProjectionMatrix");


        gl.uniformMatrix4fv(
            viewLocation,
            false,
            viewMatrix.GetFloat32Array());

        gl.uniformMatrix4fv(
            projectionLocation,
            false,
            projectionMatrix.GetFloat32Array());
    };

    private static readonly PER_RENDERABLE = (context: GLSLContext, texture: WebGLTexture, renderable: IRenderable): void => {
        const gl = context.gl;
        const program = context.program;

        const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
        const texturePositionLocation = gl.getAttribLocation(program, "aTexturePosition");
        const modelLocation = gl.getUniformLocation(program, "uModelMatrix");

        // Per renderable
        const vao = gl.createVertexArray();
        const positionBuffer = gl.createBuffer();
        const textureBuffer = gl.createBuffer();

        let texturePoints = renderable.material.texture.points;
        if (texturePoints === undefined) {
            texturePoints = renderable.vertices.GetFloat32Array();
        }

        // bind vao
        gl.bindVertexArray(vao);
        // Enable attribute
        gl.enableVertexAttribArray(positionLocation);
        // bind buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        // send buffer data
        gl.bufferData(gl.ARRAY_BUFFER, renderable.vertices.GetFloat32Array(), gl.DYNAMIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);

        gl.bufferData(gl.ARRAY_BUFFER, texturePoints, gl.DYNAMIC_DRAW);

        gl.enableVertexAttribArray(texturePositionLocation);

        gl.vertexAttribPointer(texturePositionLocation, 2, gl.FLOAT, false, 0, 0);

        gl.uniformMatrix4fv(
            modelLocation,
            false,
            renderable.modelMatrix.GetFloat32Array()
        );
    };

    constructor() {
        super(
            ShaderAsset.VERTEX_TYPE, 
            DefaultVertexShader.SOURCE, 
            DefaultVertexShader.PER_SHADER,
            undefined,
            DefaultVertexShader.PER_RENDERABLE
        );
    }
}

export default DefaultVertexShader;