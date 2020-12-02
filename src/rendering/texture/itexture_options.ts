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

import TextureWrapping from "./texture_wrapping";
import TextureFiltering from "./texture_filtering";

/**
 * ITextureOptions represents optional properties for a texture being rendered,
 * will generally be used with defaults that are overridden.
 */
interface ITextureOptions {
    /**
     * Wrapping along the x-axis
     */
    xWrap?: TextureWrapping;
    /**
     * Wrapping along the y-axis
     */
    yWrap?: TextureWrapping;
    /**
     * Magnification filter.
     */
    magFilter?: TextureFiltering;
    /**
     * Minification filter.
     */
    minFilter?: TextureFiltering;
    /**
     * Flag for generating mipmaps or not, true = generate, false = don't generate
     */
    generateMipmaps?: boolean;
    /**
     * Flag for determining if the texture should be mirrored or not (flip
     * horizontal and vertical), true = mirror, false = don't mirror.
     */
    mirror?: boolean;
}

export default ITextureOptions;
