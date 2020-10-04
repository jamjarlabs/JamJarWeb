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
import IRenderable from "./irenderable";
import Matrix4D from "../geometry/matrix_4d";
import Polygon from "../shape/polygon";
import DrawMode from "./draw_mode";
import Pooled from "../pooling/pooled";

/**
 * Renderable represents something that can be rendered.
 * Contains information for rendering.
 */
class Renderable<T> extends Pooled implements IRenderable {

    public static New<T>(zOrder: number, vertices: Polygon, modelMatrix: Matrix4D, material: Material, drawMode: DrawMode,
        payload?: T, camera?: IEntity): Renderable<T> {
        return this.new<Renderable<T>>(Renderable.POOL_KEY, Renderable, zOrder, vertices, modelMatrix, material,
            drawMode, payload, camera);
    }

    public static Free<T>(obj: Renderable<T>): void {
        this.free(Renderable.POOL_KEY, obj);
    }

    public static Init(size: number): void {
        this.init(Renderable.POOL_KEY, () => {
            return new Renderable(0, new Polygon([]), new Matrix4D(), new Material(), DrawMode.POINTS);
        }, size);
    }

    private static POOL_KEY = "jamjar_renderable";

    /**
     * The Z-Order of the object, the order at which the object will appear
     * infront or behind other objects. A higher Z-Order means in front, a
     * lower Z-Order means behind.
     */
    public zOrder: number;
    /**
     * The vertices of the object to render.
     */
    public vertices: Polygon;
    /**
     * The model matrix (position, scale, rotation) of the object to render.
     */
    public modelMatrix: Matrix4D;
    /**
     * The material of the object to render, containing render information
     * about texture and shaders.
     */
    public material: Material;
    /**
     * The draw mode of the renderable, specifying how it will be rendered.
     */
    public drawMode: DrawMode;
    /**
     * An optional payload of additional data.
     */
    public payload?: T;
    /**
     * Any camera to associate with the renderable, will only render on
     * the camera supplied.
     */
    public camera?: IEntity;

    constructor(zOrder: number, vertices: Polygon, modelMatrix: Matrix4D, material: Material, drawMode: DrawMode, payload?: T, camera?: IEntity) {
        super();
        this.zOrder = zOrder;
        this.vertices = vertices;
        this.modelMatrix = modelMatrix;
        this.material = material;
        this.drawMode = drawMode;
        this.payload = payload;
        this.camera = camera;
    }

    public Recycle(zOrder: number, vertices: Polygon, modelMatrix: Matrix4D, material: Material, drawMode: DrawMode,
        payload?: T, camera?: IEntity): Renderable<T> {
        this.zOrder = zOrder;
        this.vertices = vertices;
        this.modelMatrix = modelMatrix;
        this.material = material;
        this.drawMode = drawMode;
        this.payload = payload;
        this.camera = camera;
        return this;
    }

    public Free(): void {
        this.vertices.Free();
        this.material.Free();
        Renderable.Free<T>(this);
    }
}

export default Renderable;
