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
import Color from "../../rendering/color";
import Polygon from "../shape/polygon";
import Texture from "../../rendering/texture";

/**
 * Sprite is a component for storing information around a sprite
 * and how it should be drawn. Contains information around the
 * colour to use if no texture is provided and the z order for
 * deciding which order to draw the sprite in.
 * Can contain texture information such as bounds and a texture.
 */
class Sprite extends Component {
    /**
     * Key of the sprite component.
     */
    public static readonly KEY = "sprite";
    /**
     * Order which the sprite should appear, if it should appear infront/behind other 
     * objects, the higher the value the more precedence it is given and will
     * appear in front of objects with a lower value.
     */
    public zOrder: number;
    /**
     * The shape of the sprite to draw, represented by a Polygon.
     */
    public bounds: Polygon;
    /**
     * The colour of the sprite to use if there is no texture present.
     */
    public color: Color;
    /**
     * Optional texture (image) to use for the sprite.
     */
    public texture?: Texture;

    constructor(color: Color,
        zOrder: number,
        bounds: Polygon = Polygon.Rectangle(1, 1),
        texture?: Texture) {
        super(Sprite.KEY);
        this.color = color;
        this.zOrder = zOrder;
        this.bounds = bounds;
        this.texture = texture;
    }
}

export default Sprite;