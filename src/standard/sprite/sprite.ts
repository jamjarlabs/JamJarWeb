/*
Copyright 2019 JamJar Authors

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

class Sprite extends Component {
    public static readonly KEY = "sprite";
    public bounds: Polygon;
    public color: Color;
    public texture?: Texture;

    constructor(color: Color, { bounds, texture }:
        { bounds: Polygon; texture: Texture | undefined } =
        { bounds: Polygon.Rectangle(1, 1), texture: undefined }) {
        super(Sprite.KEY);
        this.color = color;
        this.bounds = bounds;
        this.texture = texture;
    }
}

export default Sprite;