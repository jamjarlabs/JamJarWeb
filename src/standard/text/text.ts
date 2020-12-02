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

import Component from "../../component/component";
import ShaderAsset from "../../rendering/shader/shader_asset";
import TextAlignment from "./text_alignment";
import Color from "../../rendering/color";
import Vector from "../../geometry/vector";

/**
 * Text is a component for specifying text to render, alongside options for
 * rendering it such as font, alignment, color and shaders.
 */
class Text extends Component {
    /**
     * Key of the text component.
     */
    public static readonly KEY = "text";
    /**
     * Default spacing between characters in text.
     */
    private static readonly DEFAULT_SPACING = 0.3;
    /**
     * Order which the text should appear, if it should appear infront/behind other
     * objects, the higher the value the more precedence it is given and will
     * appear in front of objects with a lower value.
     */
    public zOrder: number;
    /**
     * String to render.
     */
    public value: string;
    /**
     * Font to use when rendering, must already be loaded with a FontAsset.
     */
    public font: string;
    /**
     * Text Alignment, changes the meaning of the transform position.
     */
    public align: TextAlignment;
    /**
     * Spacing between each character, represented as a percentage of the
     * character's width, taken from transform.scale.x.
     */
    public spacing: number;
    /**
     * The offset from the text origin to place the text, allows adding text
     * above or below an entity.
     */
    public offset: Vector;
    /**
     * Text color.
     */
    public color: Color;
    /**
     * List of shaders to apply.
     */
    public shaders: string[];

    constructor(
        zOrder: number,
        value: string,
        font: string,
        align: TextAlignment = TextAlignment.Left,
        spacing: number = Text.DEFAULT_SPACING,
        offset: Vector = Vector.New(0, 0),
        color: Color = new Color(0, 0, 0, 1),
        shaders: string[] = [
            ShaderAsset.DEFAULT_TEXTURE_VERTEX_SHADER_NAME,
            ShaderAsset.DEFAULT_TEXT_FRAGMENT_SHADER_NAME,
        ]
    ) {
        super(Text.KEY);
        this.zOrder = zOrder;
        this.value = value;
        this.font = font;
        this.spacing = spacing;
        this.align = align;
        this.offset = offset;
        this.color = color;
        this.shaders = shaders;
    }

    public Free(): void {
        this.offset.Free();
    }
}

export default Text;
