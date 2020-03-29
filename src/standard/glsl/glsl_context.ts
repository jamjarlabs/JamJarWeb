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

import Camera from "../camera/camera";
import Transform from "../transform/transform";

/**
 * GLSLContext contains all common information for a GLSLShader to use when supplying
 * variables to the GPU, such as uniforms, and attributes.
 */
class GLSLContext {
    /**
     * WebGL rendering context.
     */
    public gl: WebGL2RenderingContext;
    /**
     * WebGL program being used that this shader is part of.
     */
    public program: WebGLProgram;
    /**
     * The camera component of the camera entity being rendered to.
     */
    public camera: Camera;
    /**
     * The transform component of the camera entity being rendered to.
     */
    public transform: Transform;

    constructor(gl: WebGL2RenderingContext, program: WebGLProgram, camera: Camera, transform: Transform) {
        this.gl = gl;
        this.program = program;
        this.camera = camera;
        this.transform = transform;
    }
}

export default GLSLContext;