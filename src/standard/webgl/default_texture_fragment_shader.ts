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
import ShaderAsset from "../../rendering/shader/shader_asset";
import IRenderable from "../../rendering/irenderable";

/**
 * DefaultFragmentShader is the shader loaded for handling the
 * "default_fragment" shader choice, used as the default shader
 * and expected to be loaded.
 */
class DefaultTextureFragmentShader extends GLSLShader {
    private static readonly SOURCE = `#version 300 es
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec4 uColor;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            outColor = texture(uTexture, vTextureCoordinate);
            outColor = outColor * uColor;
        }
    `;

    private static readonly PER_TEXTURE = (context: GLSLContext, texture: WebGLTexture): void => {
        const gl = context.gl;
        const program = context.program;
        const textureLocation = gl.getUniformLocation(program, "uTexture");
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(textureLocation, 0);
    };

    private static readonly PER_RENDERABLE = (
        context: GLSLContext,
        renderable: IRenderable,
        texture?: WebGLTexture
    ): void => {
        const gl = context.gl;
        const program = context.program;
        // Add in color information
        const colorLocation = gl.getUniformLocation(program, "uColor");
        gl.uniform4f(colorLocation, ...renderable.material.color.GetTuple());
    };

    constructor() {
        super(
            ShaderAsset.FRAGMENT_TYPE,
            DefaultTextureFragmentShader.SOURCE,
            undefined,
            DefaultTextureFragmentShader.PER_TEXTURE,
            DefaultTextureFragmentShader.PER_RENDERABLE
        );
    }
}

export default DefaultTextureFragmentShader;
