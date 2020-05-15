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

import IShader from "../../rendering/shader/ishader";
import GLSLContext from "./glsl_context";
import IRenderable from "../../rendering/irenderable";

/**
 * A GLSLShader is a shader used with WebGL, holds GLSL source code, shader
 * type and hooks for injecting shader variables such as uniforms, attributes
 * etc.
 */
class GLSLShader implements IShader {
    /**
     * GLSL source code.
     */
    public source: string;
    /**
     * Shader type, vertex or fragment.
     */
    public type: string;
    /**
     * Hook for injecting variables for the GLSL shader at the
     * per shader stage of the rendering process, runs once
     * per program (grouping of shaders) used, should inject
     * variables for shader specific, but not texture or renderable
     * specific variables.
     */
    public perShader?: (context: GLSLContext) => void;
    /**
     * Hook for injecting variables for the GLSL shader at the
     * per texture stage of the rendering process, runs once
     * per texture used, should inject variables for texture specific, 
     * but not renderable specific variables.
     */
    public perTexture?: (context: GLSLContext, texture: WebGLTexture) => void;
    /**
     * Hook for injecting variables for the GLSL shader at the
     * per renderable stage of the rendering process, runs once
     * per renderable used, should inject variables for renderable
     * specific variables.
     */
    public perRenderable?: (context: GLSLContext, renderable: IRenderable, texture?: WebGLTexture, ) => void;
    
    constructor(type: string, 
        source: string, 
        perShader?: (context: GLSLContext) => void, 
        perTexture?: (context: GLSLContext, texture: WebGLTexture) => void, 
        perRenderable?: (context: GLSLContext, renderable: IRenderable, texture?: WebGLTexture) => void) {
        this.type = type;
        this.source = source;
        this.perShader = perShader;
        this.perTexture = perTexture;
        this.perRenderable = perRenderable;
    }
}

export default GLSLShader;