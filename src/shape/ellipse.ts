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

import IShape from "./ishape";
import Vector from "../geometry/vector";
import Transform from "../standard/transform/transform";

/**
 * Ellipse is the representation of a 2D Ellipse shape. Can be used for collision detection.
 */
class Ellipse implements IShape {
    public center: Vector;
    public dimensions: Vector;
    public orientation: number;

    constructor(dimensions: Vector, orientation = 0, center: Vector = new Vector(0, 0)) {
        this.center = center;
        this.dimensions = dimensions;
        this.orientation = orientation;
    }

    public Center(): Vector {
        return this.center;
    }

    public Transform(transform: Transform): IShape {
        const matrix = transform.Matrix3D();
        return new Ellipse(
            this.dimensions.Multiply(transform.scale),
            this.orientation + transform.angle,
            this.center.Apply3D(matrix)
        );
    }

    public PointInside(point: Vector): boolean {
        return Math.pow(point.x - this.center.x, 2) / Math.pow(this.dimensions.x, 2) +
            Math.pow(point.y - this.center.y, 2) / Math.pow(this.dimensions.y, 2) <= 1;
    }

    public FarthestPointInDirection(direction: Vector): Vector {
        const angle = Math.atan2(direction.y, direction.x);
        const angledDimensions = this.dimensions.Rotate(new Vector(0, 0), this.orientation);
        return new Vector(
            this.center.x + (angledDimensions.x * Math.cos(angle)),
            this.center.y + (angledDimensions.y * Math.sin(angle))
        );
    }

    /**
     * Circle returns a new Ellipse in the shape of a circle.
     * @param {number} radius Radius of the circle
     * @param {Vector} center Centre of the circle
     */
    public static Circle(radius: number, center: Vector = new Vector(0, 0)): Ellipse {
        return new Ellipse(new Vector(radius, radius), 0, center);
    }

}

export default Ellipse;