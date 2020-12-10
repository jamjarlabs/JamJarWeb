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
import FakeEntity from "../fake/entity";

/**
 * Renderable represents something that can be rendered.
 * Contains information for rendering.
 */
class Renderable<T> extends Pooled implements IRenderable {
    private static readonly INIT_RENDERABLE = () => {
        return new Renderable(0, new Polygon([]), new Matrix4D(), new Material(), DrawMode.POINTS, new FakeEntity(0));
    };

    public static New<T>(
        zOrder: number,
        vertices: Polygon,
        modelMatrix: Matrix4D,
        material: Material,
        drawMode: DrawMode,
        camera: IEntity,
        payload?: T
    ): Renderable<T> {
        return this.new<Renderable<T>>(
            Renderable.POOL_KEY,
            Renderable,
            zOrder,
            vertices,
            modelMatrix,
            material,
            drawMode,
            camera,
            payload
        );
    }

    public static Free<T>(obj: Renderable<T>): void {
        this.free(Renderable.POOL_KEY, obj);
    }

    public static Init(size: number): void {
        this.init(Renderable.POOL_KEY, Renderable.INIT_RENDERABLE, size);
    }

    private static POOL_KEY = "jamjar_renderable";

    public zOrder: number;
    public vertices: Polygon;
    public modelMatrix: Matrix4D;
    public material: Material;
    public drawMode: DrawMode;
    public camera: IEntity;

    /**
     * An optional payload of additional data.
     */
    public payload?: T;

    constructor(
        zOrder: number,
        vertices: Polygon,
        modelMatrix: Matrix4D,
        material: Material,
        drawMode: DrawMode,
        camera: IEntity,
        payload?: T
    ) {
        super();
        this.zOrder = zOrder;
        this.vertices = vertices;
        this.modelMatrix = modelMatrix;
        this.material = material;
        this.drawMode = drawMode;
        this.camera = camera;
        this.payload = payload;
    }

    public Recycle(
        zOrder: number,
        vertices: Polygon,
        modelMatrix: Matrix4D,
        material: Material,
        drawMode: DrawMode,
        camera: IEntity,
        payload: T
    ): Renderable<T> {
        this.zOrder = zOrder;
        this.vertices = vertices;
        this.modelMatrix = modelMatrix;
        this.material = material;
        this.drawMode = drawMode;
        this.camera = camera;
        this.payload = payload;
        return this;
    }

    public Free(): void {
        Renderable.Free<T>(this);
    }
}

export default Renderable;
