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

    constructor(points: Vector[], wrap = false) {
        this.points = points;
        if (wrap && points.length > 0) {
            this.points.push(points[0].Copy());
        }
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
            appliedPoints.push(point.Copy().Apply4D(matrix));
        }
        return new Polygon(appliedPoints);
    }

    public FarthestPointInDirection(direction: Vector): Vector {
        let farthestDistance = -Infinity;
        // If there are no points, just return point 0,0
        let farthestPoint: Vector = Vector.New(0, 0);
        for (const point of this.points) {
            const distanceInDirection = point.Dot(direction);
            if (distanceInDirection > farthestDistance) {
                farthestPoint = point;
                farthestDistance = distanceInDirection;
            }
        }
        return farthestPoint.Copy();
    }

    public Center(): Vector {
        let xSum = 0;
        let ySum = 0;
        for (const point of this.points) {
            xSum += point.x;
            ySum += point.y;
        }
        return Vector.New(
            xSum / this.points.length,
            ySum / this.points.length
        );
    }


    public Transform(transform: Transform): Polygon {
        const matrix = transform.Matrix3D();
        const transformedPoints = [];
        for (const point of this.points) {
            transformedPoints.push(point.Copy().Apply3D(matrix));
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
                if (cornerA.x + (point.y - cornerA.y) / (cornerB.y - cornerA.y) * (cornerB.x - cornerA.x) < point.x) {
                    inPolygon = !inPolygon;
                }
            }
            j = i;
        }
        return inPolygon;
    }

    public Free(): void {
        for (const point of this.points) {
            point.Free();
        }
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
    public static RectangleByDimensions(width: number, height: number, originX = 0, originY = 0, wrap = false): Polygon {
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        return new Polygon([
            Vector.New(originX - halfWidth, originY + halfHeight), // top left
            Vector.New(originX + halfWidth, originY + halfHeight), // top right
            Vector.New(originX + halfWidth, originY - halfHeight), // bottom right
            Vector.New(originX - halfWidth, originY - halfHeight), // bottom left
        ], wrap);
    }

    /**
     * RectangleByPoints returns a new polygon in a rectangle shape between the
     * two provided points.
     * @param {Vector} bottomLeft Bottom left of the rectangle
     * @param {Vector} topRight Top right of the rectangle
     */
    public static RectangleByPoints(bottomLeft: Vector, topRight: Vector, wrap = false): Polygon {
        const bottomRight = bottomLeft.Copy();
        bottomRight.x += topRight.x - bottomLeft.x;
        const topLeft = topRight.Copy();
        topLeft.x -= topRight.x - bottomLeft.x;
        return new Polygon([
            bottomLeft.Copy(),
            bottomRight,
            topRight.Copy(),
            topLeft
        ], wrap);
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

        const bottomRight = Vector.New(originX + halfWidth, originY - halfHeight);
        const bottomLeft = Vector.New(originX - halfWidth, originY - halfHeight);
        const topLeft = Vector.New(originX - halfWidth, originY + halfHeight);
        const topRight = Vector.New(originX + halfWidth, originY + halfHeight);

        return new Polygon([
            bottomRight,
            bottomLeft,
            topLeft,

            topLeft.Copy(),
            topRight,
            bottomRight.Copy(),
        ]);
    }

    /**
     * QuadByPoints returns a new polygon in a quad shape between the two
     * provided points.
     * @param {Vector} bottomLeft Bottom left of the quad
     * @param {Vector} topRight Top right of the quad
     */
    public static QuadByPoints(bottomLeft: Vector, topRight: Vector): Polygon {
        const bottomRight = bottomLeft.Copy();
        bottomRight.x += topRight.x - bottomLeft.x;
        const topLeft = topRight.Copy();
        topLeft.x -= topRight.x - bottomLeft.x;
        return new Polygon([
            bottomRight,
            bottomLeft.Copy(),
            topLeft,
            topLeft.Copy(),
            topRight.Copy(),
            bottomRight.Copy()
        ]);
    }

    /**
     * EllipseEstimation provides a new polygon that estimates the shape of an ellipse.
     * @param numOfPoints Number of points the estimation should have
     * @param dimensions Ellipse dimensions
     * @param center Ellipse center
     * @param wrap If the polygon should wrap on itself (first point == last point)
     */
    public static EllipseEstimation(numOfPoints: number, dimensions: Vector, centerX = 0, centerY = 0,
        wrap = false): Polygon {
        const points: Vector[] = [];
        for (let i = 0; i < numOfPoints; i++) {
            const done = i / numOfPoints;
            const angle = done * 2 * Math.PI;
            points.push(Vector.New(
                dimensions.x * Math.cos(angle) + centerX,
                dimensions.y * Math.sin(angle) + centerY,
            ));
        }
        return new Polygon(points, wrap);
    }
}

export default Polygon;
