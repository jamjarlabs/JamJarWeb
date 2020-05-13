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

/**
 * IShader is the interface representing a general shader. 
 * This is designed to allow the possiblity of switching out the
 * render technology, e.g. GLSL, HLSL etc.
 */
interface IShader {
    /**
     * Source code of the shader, can be in any language.
     */
    source: string;
    /**
     * Type of the shader, for example fragment or vertex shader.
     */
    type: string;
}

export default IShader;