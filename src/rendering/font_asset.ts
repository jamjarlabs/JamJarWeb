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
 * FontAsset is the full representation of a font that can be loaded,
 * used to request that a font should be loaded with the settings 
 * provided. Once a font has been loaded by using a font asset, the
 * font will be available for use in rendering.
 * Generally a text pre-rendering system will take a message with the
 * font asset and use it to generate a bitmap texture atlas for the
 * font.
 */
class FontAsset {
    /**
     * ASCII characters string
     */
    public static readonly ASCII = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`;
    /**
     * Default buffer
     */
    private static readonly DEFAULT_BUFFER = 3;
    /**
     * Default radius
     */
    private static readonly DEFAULT_RADIUS = 8;
    /**
     * Default cutoff
     */
    private static readonly DEFAULT_CUTOFF = 0.25;
    /**
     * Message to request a font asset to be loaded.
     */
    public static readonly MESSAGE_REQUEST_LOAD = "request_font_load";
    /**
     * Message when a font asset is finished loading.
     */
    public static readonly MESSAGE_FINISH_LOAD = "finish_font_load";
    
    /**
     * Characters to pre-render for the font, should be
     * all characters that will be displayed with the font.
     */
    public characters: string;
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
     * CSS font size in pixels.
     */
    public size: number;

    constructor(name: string,
        family: string, 
        weight: string, 
        size: number, 
        buffer: number = FontAsset.DEFAULT_BUFFER, 
        radius: number = FontAsset.DEFAULT_RADIUS, 
        cutoff: number = FontAsset.DEFAULT_CUTOFF, 
        characters: string = FontAsset.ASCII
    ) {
        this.name = name;
        this.family = family;
        this.weight = weight;
        this.size = size;
        this.buffer = buffer;
        this.radius = radius;
        this.cutoff = cutoff;
        this.characters = characters;
    }
}

export default FontAsset;