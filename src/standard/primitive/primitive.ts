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
import Polygon from "../shape/polygon";
import Material from "../../rendering/material/material";
import DrawMode from "../../rendering/draw_mode";

class Primitive extends Component {

    public static readonly KEY = "primitive";

    public zOrder: number;

    public shape: Polygon;

    public material: Material;

    public drawMode: DrawMode;

    constructor(material: Material,
        zOrder: number,
        shape: Polygon = Polygon.RectangleByDimensions(1, 1),
        drawMode: DrawMode = DrawMode.LINE_STRIP) {
        super(Primitive.KEY);
        this.material = material;
        this.zOrder = zOrder;
        this.shape = shape;
        this.drawMode = drawMode;
    }
}

export default Primitive;