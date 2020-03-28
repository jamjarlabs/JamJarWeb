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

class ShaderAsset {
    public static readonly MESSAGE_REQUEST_LOAD = "request_shader_load";
    public static readonly MESSAGE_FINISH_LOAD = "finish_shader_load";

    public static readonly DEFAULT_VERTEX_SHADER_NAME = "default_vertex";
    public static readonly DEFAULT_FRAGMENT_SHADER_NAME = "default_fragment";

    public name: string;
    public shader: IShader;
    
    constructor(name: string, shader: IShader) {
        this.name = name;
        this.shader = shader;
    }
}

export default ShaderAsset;