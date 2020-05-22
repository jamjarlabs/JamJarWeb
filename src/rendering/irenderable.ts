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

import IEntity from "../entity/ientity";
import Material from "./material/material";
import Matrix4D from "../geometry/matrix_4d";
import Polygon from "../shape/polygon";
import DrawMode from "./draw_mode";

/**
 * Renderable represents something that can be rendered.
 * Contains information for rendering.
 */
interface IRenderable {
    /**
     * The Z-Order of the object, the order at which the object will appear
     * infront or behind other objects. A higher Z-Order means in front, a
     * lower Z-Order means behind.
     */
    zOrder: number;
    /**
     * The vertices of the object to render.
     */
    vertices: Polygon;
    /**
     * The model matrix (position, scale, rotation) of the object to render.
     */
    modelMatrix: Matrix4D;
    /**
     * The material of the object to render, containing render information
     * about texture and shaders.
     */
    material: Material;
    /**
     * The draw mode of the renderable, specifying how it will be rendered.
     */
    drawMode: DrawMode;
    /**
     * Any camera to associate with the renderable, will only render on
     * the camera supplied.
     */
    camera?: IEntity;
}

export default IRenderable;