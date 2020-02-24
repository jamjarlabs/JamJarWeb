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

import Color from "./color";
import Texture from "./texture";

class Renderable {
    public verticies: Float32Array;
    public modelMatrix: Float32Array;
    public color: Color;
    public texture?: Texture;

    constructor(verticies: Float32Array, modelMatrix: Float32Array, color: Color, texture?: Texture) {
        this.verticies = verticies;
        this.modelMatrix = modelMatrix;
        this.color = color;
        this.texture = texture;
    }
}

export default Renderable;