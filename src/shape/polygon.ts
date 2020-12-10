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

import { vec2 } from "gl-matrix";
import Vector from "../geometry/vector";
import IShape from "./ishape";
import Transform from "../standard/transform/transform";
import Matrix4D from "../geometry/matrix_4d";

/**
 * Polygon is the representation of a 2D Polygon shape.
 * Can be used in collision detection and rendering.
 */
class Polygon implements IShape {
    public points: Float32Array;

    constructor(points: Vector[] | Float32Array, wrap = false) {
        if (points instanceof Float32Array) {
            this.points = points;
        } else {
            if (wrap) {
                this.points = new Float32Array(points.length * 2 + 2);
            } else {
                this.points = new Float32Array(points.length * 2);
            }
            for (let i = 0; i < points.length; i++) {
                this.points[i * 2] = points[i].x;
                this.points[i * 2 + 1] = points[i].y;
                if (i !== points.length - 1) {
                    points[i].Free();
                }
            }
            if (points.length > 0) {
                if (wrap) {
                    this.points[points.length * 2] = points[0].x;
                    this.points[points.length * 2 + 1] = points[0].y;
                }
                points[points.length - 1].Free();
            }
        }
    }

    /**
     * Make a value copy of the Polygon.
     */
    public Copy(): Polygon {
        return new Polygon(this.points.slice());
    }

    public Apply4D(matrix: Matrix4D): Polygon {
        const points = this.points.subarray();
        for (let i = 0; i < this.points.length; i += 2) {
            const position = points.subarray(i, i + 2);
            vec2.transformMat4(position, position, matrix.data);
        }
        return new Polygon(points);
    }

    public FarthestPointInDirection(direction: Vector): Vector {
        let farthestDistance = -Infinity;
        // If there are no points, just return point 0,0
        const farthestPoint = Vector.New(0, 0);
        for (let i = 0; i < this.points.length; i += 2) {
            const x = this.points[i];
            const y = this.points[i + 1];
            const distanceInDirection = x * direction.x + y * direction.y;
            if (distanceInDirection > farthestDistance) {
                farthestPoint.x = x;
                farthestPoint.y = y;
                farthestDistance = distanceInDirection;
            }
        }
        return farthestPoint;
    }

    public Center(): Vector {
        let xSum = 0;
        let ySum = 0;
        for (let i = 0; i < this.points.length; i += 2) {
            xSum += this.points[i];
            ySum += this.points[i + 1];
        }
        return Vector.New(xSum / (this.points.length / 2), ySum / (this.points.length / 2));
    }

    public Transform(transform: Transform): Polygon {
        const matrix = transform.Matrix3D();
        for (let i = 0; i < this.points.length; i += 2) {
            const position = this.points.subarray(i, i + 2);
            vec2.transformMat3(position, position, matrix.data);
        }
        matrix.Free();
        return this;
    }

    public PointInside(point: Vector): boolean {
        /**
         * Raycasting algorithm
         * https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
         * Based on description here:
         * http://alienryderflex.com/polygon/
         */
        let j = this.points.length - 2;
        let inPolygon = false;
        for (let i = 0; i < this.points.length; i += 2) {
            const cornerAX = this.points[i];
            const cornerAY = this.points[i + 1];
            const cornerBX = this.points[j];
            const cornerBY = this.points[j + 1];
            if (
                ((cornerAY < point.y && cornerBY >= point.y) || (cornerBY < point.y && cornerAY >= point.y)) &&
                (cornerAX <= point.x || cornerBX <= point.x)
            ) {
                if (cornerAX + ((point.y - cornerAY) / (cornerBY - cornerAY)) * (cornerBX - cornerAX) < point.x) {
                    inPolygon = !inPolygon;
                }
            }
            j = i;
        }
        return inPolygon;
    }

    public Free(): void {
        // Nothing to return to the pool
    }

    /**
     * GetFloat32Array converts the polygon to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the polygon
     */
    public GetFloat32Array(): Float32Array {
        return this.points;
    }

    /**
     * RectangleByDimensions returns a new polygon in a rectangle shape with the
     * width and height provided, optionally around an origin point.
     * @param {number} width Width of the rectangle
     * @param {number} height Height of the rectangle
     * @param {origin} origin Center point of the rectangle
     */
    public static RectangleByDimensions(
        width: number,
        height: number,
        originX = 0,
        originY = 0,
        wrap = false
    ): Polygon {
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        let typedArraySize = 8;
        if (wrap) {
            typedArraySize += 2;
        }

        const points = new Float32Array(typedArraySize);

        // Top left
        points[0] = originX - halfWidth;
        points[1] = originY + halfHeight;

        // Top right
        points[2] = originX + halfWidth;
        points[3] = originY + halfHeight;

        // Bottom right
        points[4] = originX + halfWidth;
        points[5] = originY - halfHeight;

        // Bottom left
        points[6] = originX - halfWidth;
        points[7] = originY - halfHeight;

        if (wrap) {
            points[typedArraySize - 2] = points[0];
            points[typedArraySize - 1] = points[1];
        }

        return new Polygon(points);
    }

    /**
     * RectangleByPoints returns a new polygon in a rectangle shape between the
     * two provided points.
     * @param {Vector} bottomLeft Bottom left of the rectangle
     * @param {Vector} topRight Top right of the rectangle
     */
    public static RectangleByPoints(bottomLeft: Vector, topRight: Vector, wrap = false): Polygon {
        const width = topRight.x - bottomLeft.x;
        const height = topRight.y - bottomLeft.y;
        const originX = (topRight.x + bottomLeft.x) / 2;
        const originY = (topRight.y + bottomLeft.y) / 2;

        return Polygon.RectangleByDimensions(width, height, originX, originY, wrap);
    }

    /**
     * QuadByDimensions returns a new polygon in a quad shape with the width and
     * height provided, optionally around an origin point
     * @param {number} width Width of the quad
     * @param {number} height Height of the quad
     * @param {Vector} origin Center point of the quad
     */
    public static QuadByDimensions(width: number, height: number, originX = 0, originY = 0): Polygon {
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const points = new Float32Array(12);

        // Bottom right
        points[0] = originX + halfWidth;
        points[1] = originY - halfHeight;

        // Bottom left
        points[2] = originX - halfWidth;
        points[3] = originY - halfHeight;

        // Top left
        points[4] = originX - halfWidth;
        points[5] = originY + halfHeight;

        // Top left
        points[6] = originX - halfWidth;
        points[7] = originY + halfHeight;

        // Top right
        points[8] = originX + halfWidth;
        points[9] = originY + halfHeight;

        // Bottom right
        points[10] = originX + halfWidth;
        points[11] = originY - halfHeight;

        return new Polygon(points);
    }

    /**
     * QuadByPoints returns a new polygon in a quad shape between the two
     * provided points.
     * @param {Vector} bottomLeft Bottom left of the quad
     * @param {Vector} topRight Top right of the quad
     */
    public static QuadByPoints(bottomLeft: Vector, topRight: Vector): Polygon {
        const width = topRight.x - bottomLeft.x;
        const height = topRight.y - bottomLeft.y;
        const originX = (topRight.x + bottomLeft.x) / 2;
        const originY = (topRight.y + bottomLeft.y) / 2;

        return Polygon.QuadByDimensions(width, height, originX, originY);
    }

    /**
     * EllipseEstimation provides a new polygon that estimates the shape of an ellipse.
     * @param numOfPoints Number of points the estimation should have
     * @param dimensions Ellipse dimensions
     * @param center Ellipse center
     * @param wrap If the polygon should wrap on itself (first point == last point)
     */
    public static EllipseEstimation(
        numOfPoints: number,
        dimensions: Vector,
        centerX = 0,
        centerY = 0,
        wrap = false
    ): Polygon {
        let typedArraySize = numOfPoints * 2;
        if (wrap && numOfPoints > 0) {
            typedArraySize += 2;
        }

        const points: Float32Array = new Float32Array(typedArraySize);
        for (let i = 0; i < numOfPoints; i++) {
            const done = i / numOfPoints;
            const angle = done * 2 * Math.PI;
            points[i * 2] = dimensions.x * Math.cos(angle) + centerX;
            points[i * 2 + 1] = dimensions.y * Math.sin(angle) + centerY;
        }

        if (wrap && numOfPoints > 0) {
            points[typedArraySize - 2] = points[0];
            points[typedArraySize - 1] = points[1];
        }

        return new Polygon(points);
    }
}

export default Polygon;
