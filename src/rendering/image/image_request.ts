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

import ITextureOptions from "../texture/itexture_options";
import TextureFiltering from "../texture/texture_filtering";
import TextureWrapping from "../texture/texture_wrapping";

/**
 * ImageRequest specifies all information required to load and prepare an image.
 * This includes the source of the image, if the image should be fetched from a
 * source (e.g. from a URL), and options for how the texture the image is
 * rendered to should be generated.
 */
class ImageRequest {
    /**
     * Message to request an image asset to be loaded.
     */
    public static readonly MESSAGE_REQUEST_LOAD = "request_image_load";
    
    /**
     * Name of the image asset, how it is referred to throughout the system, 
     * should be unique.
     */
    public name: string;
    /**
     * Source of the image, where the image exists (URL, filepath etc.).
     */
    public source: string;
    /**
     * Texture minification filter.
     */
    public minFilter: TextureFiltering;
    /**
     * Texture magnification filter.
     */
    public magFilter: TextureFiltering;
    /**
     * Texture wrapping along x axis.
     */
    public xWrap: TextureWrapping;
    /**
     * Texture wrapping along y axis.
     */
    public yWrap: TextureWrapping;
    /**
     * Texture option for generating mipmaps or not.
     * True = generate mipmaps, false = don't generate mipmaps.
     */
    public generateMipmaps: boolean;

    constructor(name: string, source: string, textureOptions: ITextureOptions = {}) {
        this.name = name;
        this.source = source;

        // Optional texture options with defaults overridden by parameter
        const optionalTextureOptions = {
            minFilter: TextureFiltering.BILINEAR,
            magFilter: TextureFiltering.BILINEAR,
            xWrap: TextureWrapping.CLAMP_TO_EDGE,
            yWrap: TextureWrapping.CLAMP_TO_EDGE,
            generateMipmaps: true,
            ...textureOptions
        };
        this.minFilter = optionalTextureOptions.minFilter;
        this.magFilter = optionalTextureOptions.magFilter;
        this.xWrap = optionalTextureOptions.xWrap;
        this.yWrap = optionalTextureOptions.yWrap;
        this.generateMipmaps = optionalTextureOptions.generateMipmaps;
    }
}

export default ImageRequest;