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
import IFontOptions from "./ifont_options";

/**
 * FontRequest specifies all information required to prepare and render a font.
 * Once a font request has been processed the font will be available to be drawn
 * with if the processing is successful.
 */
class FontRequest {
    /**
     * Message to request a font asset to be loaded.
     */
    public static readonly MESSAGE_REQUEST_LOAD = "request_font_load";

    /**
     * Unique name to identify the font and settings combination.
     */
    public name: string;
    /**
     * CSS font family, for example "Roboto".
     */
    public family: string;
    /**
     * CSS font weight.
     */
    public weight: string;
    /**
     * CSS font size in pixels.
     */
    public size: number;
    /**
     * Characters to pre-render for the font, should be
     * all characters that will be displayed with the font.
     */
    public characters: string;
    /**
     * Whitespace buffer around a glyph in the atlas in pixels.
     */
    public buffer: number;
    /**
     * How many pixels around the glyph shape in the atlas
     * to use for encoding distance.
     */
    public radius: number;
    /**
     * How much of the radius (relative) is used for the
     * inside part the glyph.
     */
    public cutoff: number;
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

    constructor(
        name: string,
        family: string,
        weight: string,
        size: number,
        fontOptions: IFontOptions = {},
        textureOptions: ITextureOptions = {}
    ) {
        // Required properties
        this.name = name;
        this.family = family;
        this.weight = weight;
        this.size = size;

        // Optional properties with defaults that are overridden by parameter
        const optionalFontOptions = {
            characters: ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`,
            buffer: 3,
            radius: 8,
            cutoff: 0.25,
            ...fontOptions,
        };
        this.characters = optionalFontOptions.characters;
        this.buffer = optionalFontOptions.buffer;
        this.radius = optionalFontOptions.radius;
        this.cutoff = optionalFontOptions.cutoff;

        // Optional texture options with defaults overridden by parameter
        const optionalTextureOptions = {
            minFilter: TextureFiltering.BILINEAR,
            magFilter: TextureFiltering.BILINEAR,
            xWrap: TextureWrapping.CLAMP_TO_EDGE,
            yWrap: TextureWrapping.CLAMP_TO_EDGE,
            generateMipmaps: true,
            ...textureOptions,
        };
        this.minFilter = optionalTextureOptions.minFilter;
        this.magFilter = optionalTextureOptions.magFilter;
        this.xWrap = optionalTextureOptions.xWrap;
        this.yWrap = optionalTextureOptions.yWrap;
        this.generateMipmaps = optionalTextureOptions.generateMipmaps;
    }
}

export default FontRequest;
