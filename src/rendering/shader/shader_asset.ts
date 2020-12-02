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

import IShader from "./ishader";

/**
 * ShaderAsset is used to load in new shaders, takes a generic shader
 * and a shader name.
 * Render Systems listen out for shader loading requests and will
 * load the requested shaders if valid.
 */
class ShaderAsset {
    /**
     * Message to request loading a shader.
     */
    public static readonly MESSAGE_REQUEST_LOAD = "request_shader_load";
    /**
     * Message for finishing loading a shader.
     */
    public static readonly MESSAGE_FINISH_LOAD = "finish_shader_load";

    /**
     * Default vertex shader name, render systems will generally load this
     * by default, and it will therefore be always available.
     */
    public static readonly DEFAULT_TEXTURE_VERTEX_SHADER_NAME = "default_texture_vertex";
    /**
     * Default fragment shader name, render systems will generally load this
     * by default, and it will therefore be always available.
     */
    public static readonly DEFAULT_TEXTURE_FRAGMENT_SHADER_NAME = "default_texture_fragment";

    public static readonly DEFAULT_PRIMITIVE_VERTEX_SHADER_NAME = "default_primitive_vertex";

    public static readonly DEFAULT_PRIMITIVE_FRAGMENT_SHADER_NAME = "default_primitive_fragment";
    /**
     * Default text fragment shader name, render systems will generally load this
     * by default, and it will therefore be always available. Default fragment shader
     * for text.
     */
    public static readonly DEFAULT_TEXT_FRAGMENT_SHADER_NAME = "default_text_fragment";

    /**
     * Vertex shader type.
     */
    public static readonly VERTEX_TYPE = "vertex";
    /**
     * Fragment shader type.
     */
    public static readonly FRAGMENT_TYPE = "fragment";

    /**
     * Name of the shader.
     */
    public name: string;
    /**
     * Generic shader.
     */
    public shader: IShader;

    constructor(name: string, shader: IShader) {
        this.name = name;
        this.shader = shader;
    }
}

export default ShaderAsset;
