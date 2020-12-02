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
import IFreeable from "../../pooling/ifreeable";

/**
 * Material represents how something is displayed and rendered, specifying
 * shaders, textures and colors.
 */
class Material implements IFreeable {
    private static readonly NO_TEXTURE_COLOR = new Color(0.54, 0, 0.54, 1);
    /**
     * List of shaders to apply.
     */
    public shaders: string[];
    /**
     * The texture to apply.
     */
    public texture?: Texture;
    /**
     * The color to apply, if there is a texture the texture output is mixed
     * this color, if there is no texture the color is used directly.
     */
    public color: Color;

    constructor(options: IMaterialOptions = {}) {
        // Default shaders if a texture is present
        let defaultShaders = [
            ShaderAsset.DEFAULT_TEXTURE_VERTEX_SHADER_NAME,
            ShaderAsset.DEFAULT_TEXTURE_FRAGMENT_SHADER_NAME,
        ];
        let defaultColor = new Color(1, 1, 1, 1);
        if (options.texture === undefined) {
            // Default shaders for no texture
            defaultShaders = [
                ShaderAsset.DEFAULT_PRIMITIVE_VERTEX_SHADER_NAME,
                ShaderAsset.DEFAULT_PRIMITIVE_FRAGMENT_SHADER_NAME,
            ];
            defaultColor = Material.NO_TEXTURE_COLOR;
        }
        const matOptions = {
            color: defaultColor,
            shaders: defaultShaders,
            ...options,
        };
        this.shaders = matOptions.shaders;
        this.texture = matOptions.texture;
        this.color = matOptions.color;
    }

    /**
     * Makes a value copy of the material.
     */
    public Copy(): Material {
        const shaders: string[] = [];
        for (const shader of this.shaders) {
            shaders.push(shader);
        }
        let texture: Texture | undefined = undefined;
        if (this.texture !== undefined) {
            texture = this.texture.Copy();
        }
        let color: Color | undefined = undefined;
        if (this.color !== undefined) {
            color = this.color.Copy();
        }
        return new Material({
            shaders: shaders,
            texture: texture,
            color: color,
        });
    }

    public Free(): void {
        if (this.texture !== undefined) {
            this.texture.Free();
        }
    }
}

export default Material;
