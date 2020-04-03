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
    public family: string;
    public weight: string;
    public buffer: number;
    public radius: number;
    public cutoff: number;
    public size: number;
    public color: Color;
    public zOrder: number;
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