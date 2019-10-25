/*
Copyright 2019 JamJar Authors

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

import Vector from "./vector";
import IShape from "./ishape";
import Transform from "../transform/transform";

class Polygon implements IShape {
    public points: Vector[];

    constructor(points: Vector[]) {
        this.points = points;
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

    public Transform(transform: Transform): Polygon {
        const matrix = transform.Matrix3D();
        const transformedPoints = [];
        for (const point of this.points) {
            transformedPoints.push(point.Apply3D(matrix));
        }
        return new Polygon(transformedPoints);
    }

    public GetArray(): number[] {
        const arr = [];
        for(const point of this.points) {
            arr.push(point.x);
            arr.push(point.y);
        }
        return arr;
    }

    public GetFloat32Array(): Float32Array {
        return new Float32Array(this.GetArray());
    }

    public static Rectangle(width: number, height: number): Polygon {
		const halfWidth = width/2;
		const halfHeight = height/2;
		return new Polygon([
			new Vector(-halfWidth, halfHeight),
			new Vector(halfWidth, halfHeight),
			new Vector(halfWidth, -halfHeight),
			new Vector(-halfWidth, -halfHeight),
		]);
    }
}

export default Polygon;