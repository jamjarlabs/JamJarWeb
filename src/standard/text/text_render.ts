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

import Color from "../../rendering/color";
import TextAlignment from "./text_alignment";

/**
 * TextRender is all of the information required to a character, 
 * alongside additional information that could be useful for
 * the rendering process/shaders.
 */
class TextRender {
    /**
     * CSS Font Family.
     */
    public family: string;
    /**
     * CSS Font Weight.
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
    /**
     * Color of the text.
     */
    public color: Color;
    /**
     * Order which the text should appear, if it should appear infront/behind other 
     * objects, the higher the value the more precedence it is given and will
     * appear in front of objects with a lower value.
     */
    public zOrder: number;
    /**
     * Text Alignment.
     */
    public align: TextAlignment;

    constructor(family: string,
        weight: string,
        buffer: number,
        radius: number,
        cutoff: number,
        size: number,
        color: Color,
        zOrder: number,
        align: TextAlignment) {
        this.family = family;
        this.weight = weight;
        this.buffer = buffer;
        this.radius = radius;
        this.cutoff = cutoff;
        this.size = size;
        this.color = color;
        this.zOrder = zOrder;
        this.align = align;
    }
}

export default TextRender;