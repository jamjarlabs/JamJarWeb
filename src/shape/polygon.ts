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

import Vector from "../geometry/vector";
import IShape from "./ishape";
import Transform from "../standard/transform/transform";
import Matrix4D from "../geometry/matrix_4d";

/**
 * Polygon is the representation of a 2D Polygon shape.
 * Can be used in collision detection and rendering.
 */
class Polygon implements IShape {
    public points: Vector[];

    constructor(points: Vector[]) {
        this.points = points;
    }

    /**
     * Make a value copy of the Polygon.
     */
    public Copy(): Polygon {
        const points: Vector[] = [];
        for (const point of this.points) {
            points.push(point.Copy());
        }
        return new Polygon(
            points,
        );
    }

    public Apply4D(matrix: Matrix4D): Polygon {
        const appliedPoints: Vector[] = [];
        for (const point of this.points) {
            appliedPoints.push(point.Apply4D(matrix));
        }
        return new Polygon(appliedPoints);
    }

    public FarthestPointInDirection(direction: Vector): Vector {
        let farthestDistance = -Infinity;
        // If there are no points, just return point 0,0
        let farthestPoint: Vector = new Vector(0,0);
        for (const point of this.points) {
            const distanceInDirection = point.Dot(direction);
            if (distanceInDirection > farthestDistance) {
                farthestPoint = point;
                farthestDistance = distanceInDirection;
            }
        }
        return farthestPoint;
    }

    public Center(): Vector {
        let xSum = 0;
        let ySum = 0;
        for (const point of this.points) {
            xSum += point.x;
            ySum += point.y;
        }
        return new Vector(
            xSum / this.points.length,
            ySum / this.points.length
        );
    }


    public Transform(transform: Transform): Polygon {
        const matrix = transform.Matrix3D();
        const transformedPoints = [];
        for (const point of this.points) {
            transformedPoints.push(point.Apply3D(matrix));
        }
        return new Polygon(transformedPoints);
    }

    public PointInside(point: Vector): boolean {
        /**
         * Raycasting algorithm
         * https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
         * Based on description here:
         * http://alienryderflex.com/polygon/
         */
        let j = this.points.length - 1;
        let inPolygon = false;
        for (let i = 0; i < this.points.length; i++) {
            const cornerA = this.points[i];
            const cornerB = this.points[j];
            if ((cornerA.y < point.y && cornerB.y >= point.y ||
                cornerB.y < point.y && cornerA.y >= point.y) &&
                (cornerA.x <= point.x || cornerB.x <= point.x)) {
                if (cornerA.x + (point.y - cornerA.y)/(cornerB.y-cornerA.y)*(cornerB.x-cornerA.x) < point.x) {
                    inPolygon = !inPolygon;
                }
            }
            j=i;
        }
        return inPolygon;
    }

    /**
     * GetFloat32Array converts the polygon to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the polygon
     */
    public GetFloat32Array(): Float32Array {
        const arr = new Float32Array(this.points.length * 2);
        for (let i = 0; i < this.points.length; i++) {
            arr[i * 2] = this.points[i].x;
            arr[i * 2 + 1] = this.points[i].y;
        }
        return arr;
    }

    /**
     * RectangleByDimensions returns a new polygon in a rectangle shape with the
     * width and height provided, optionally around an origin point.
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {origin} origin Center point of the rectangle
     */
    public static RectangleByDimensions(width: number, height: number, origin: Vector = new Vector(0,0)): Polygon {
        const halfWidth = width/2;
        const halfHeight = height/2;
        return new Polygon([
            new Vector(origin.x - halfWidth, origin.y + halfHeight), // top left
            new Vector(origin.x + halfWidth, origin.y + halfHeight), // top right
            new Vector(origin.x + halfWidth, origin.y - halfHeight), // bottom right
            new Vector(origin.x - halfWidth, origin.y - halfHeight), // bottom left
        ]);
    }

    /**
     * RectangleByPoints returns a new polygon in a rectangle shape between the
     * two provided points.
     * @param {Vector} bottomLeft Bottom left of the rectangle
     * @param {Vector} topRight Top right of the rectangle
     */
    public static RectangleByPoints(bottomLeft: Vector, topRight: Vector): Polygon {
        return new Polygon([
            bottomLeft,
            bottomLeft.Add(new Vector(topRight.x - bottomLeft.x, 0)), // bottom right
            topRight,
            topRight.Sub(new Vector(topRight.x - bottomLeft.x, 0)), // top left
        ]);
    }

    /**
     * QuadByDimensions returns a new polygon in a quad shape with the width and
     * height provided, optionally around an origin point
     * @param {number} width Width of the quad
     * @param {number} height Height of the quad
     * @param {Vector} origin Center point of the quad
     */
    public static QuadByDimensions(width: number, height: number, origin: Vector = new Vector(0,0)): Polygon {
        const halfWidth = width/2;
        const halfHeight = height/2;
        return new Polygon([
            new Vector(origin.x + halfWidth, origin.y - halfHeight), // bottom right
            new Vector(origin.x - halfWidth, origin.y - halfHeight), // bottom left
            new Vector(origin.x - halfWidth, origin.y + halfHeight), // top left

            new Vector(origin.x - halfWidth, origin.y + halfHeight), // top left
            new Vector(origin.x + halfWidth, origin.y + halfHeight), // top right
            new Vector(origin.x + halfWidth, origin.y - halfHeight), // bottom right
        ]);
    }

    /**
     * QuadByPoints returns a new polygon in a quad shape between the two
     * provided points.
     * @param {Vector} bottomLeft Bottom left of the quad
     * @param {Vector} topRight Top right of the quad
     */
    public static QuadByPoints(bottomLeft: Vector, topRight: Vector): Polygon {
        return new Polygon([
            bottomLeft.Add(new Vector(topRight.x - bottomLeft.x, 0)), // bottom right
            bottomLeft,
            topRight.Sub(new Vector(topRight.x - bottomLeft.x, 0)), // top left
            topRight.Sub(new Vector(topRight.x - bottomLeft.x, 0)), // top left
            topRight,
            bottomLeft.Add(new Vector(topRight.x - bottomLeft.x, 0)), // bottom right
        ]);
    }
}

export default Polygon;
