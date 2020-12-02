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
import Color from "../color";

/**
 * IMaterialOptions represents optional properties for a material, will
 * generally be used with defaults that are overridden.
 */
interface IMaterialOptions {
    /**
     * List of shaders to apply.
     */
    shaders?: string[];
    /**
     * The texture to apply.
     */
    texture?: Texture;
    /**
     * The color to apply, either to a texture if there is one, or just the
     * direct color if there is no texture.
     */
    color?: Color;
}

export default IMaterialOptions;
