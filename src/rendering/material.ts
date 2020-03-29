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

import Texture from "./texture";
import ShaderAsset from "./shader_asset";

/**
 * Material represents the combination of a texture and a list of shaders to apply
 * to a render object, for example to be used as part of a sprite.
 */
class Material {
    /**
     * List of shaders to apply.
     */
    public shaders: string[];
    /**
     * The texture to apply
     */
    public texture: Texture;

    constructor(texture: Texture, shaders: string[] = [
        ShaderAsset.DEFAULT_VERTEX_SHADER_NAME, 
        ShaderAsset.DEFAULT_FRAGMENT_SHADER_NAME
    ]) {
        this.shaders = shaders;
        this.texture = texture;
    }
}

export default Material;