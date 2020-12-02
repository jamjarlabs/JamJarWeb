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
import Polygon from "../../shape/polygon";
import Material from "../../rendering/material/material";
import DrawMode from "../../rendering/draw_mode";

/**
 * Primitive allows for a more direct level of control over how an object is
 * rendered, allowing drawing points, lines and polygons; with specifications
 * over the draw mode. The shape is passed to the render system as is, without
 * modification.
 */
class Primitive extends Component {
    /**
     * Key of the primitive component.
     */
    public static readonly KEY = "primitive";

    /**
     * Order which the primitive should appear, if it should appear
     * infront/behind other objects, the higher the value the more precedence it
     * is given and will appear in front of objects with a lower value.
     */
    public zOrder: number;
    /**
     * List of points to pass to the render system, the shape that will be
     * rendered.
     */
    public points: Polygon;
    /**
     * Material to apply when rendering the primitive.
     */
    public material: Material;
    /**
     * Draw mode of the primitive, allows direct control over how the primitive
     * is rendered.
     */
    public drawMode: DrawMode;

    constructor(
        material: Material,
        zOrder: number,
        points: Polygon = Polygon.RectangleByDimensions(1, 1),
        drawMode: DrawMode = DrawMode.LINE_STRIP
    ) {
        super(Primitive.KEY);
        this.material = material;
        this.zOrder = zOrder;
        this.points = points;
        this.drawMode = drawMode;
    }

    public Free(): void {
        this.points.Free();
    }
}

export default Primitive;
