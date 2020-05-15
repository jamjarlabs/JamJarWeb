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

import Texture from "../texture/texture";
import ShaderAsset from "../shader/shader_asset";
import Color from "../color";
import IMaterialOptions from "./imaterial_options";

/**
 * Material represents how something is displayed and rendered, specifying
 * shaders, textures and colors.
 */
class Material {
    /**
     * List of shaders to apply.
     */
    public shaders: string[];
    /**
     * The texture to apply
     */
    public texture?: Texture;
    public color: Color;

    constructor(options: IMaterialOptions = {}) {
        // Default shaders if a texture is present
        let defaultShaders = [
            ShaderAsset.DEFAULT_TEXTURE_VERTEX_SHADER_NAME, 
            ShaderAsset.DEFAULT_TEXTURE_FRAGMENT_SHADER_NAME
        ];
        if (options.texture === undefined) {
            // Default shaders for no texture
            defaultShaders = [
                ShaderAsset.DEFAULT_PRIMITIVE_VERTEX_SHADER_NAME, 
                ShaderAsset.DEFAULT_PRIMITIVE_FRAGMENT_SHADER_NAME
            ];
        }
        const matOptions = {
            color: new Color(1,1,1,1),
            shaders: defaultShaders,
            ...options
        };
        this.shaders = matOptions.shaders;
        this.texture = matOptions.texture;
        this.color = matOptions.color;
    }
}

export default Material;