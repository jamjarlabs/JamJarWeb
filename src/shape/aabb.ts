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
 * AABB is an Axis-Aligned Bounding-Box, this is a rectangle that has no
 * rotation; it is aligned with the X and Y axis.
 * The AABB is defined by a centre and width and height dimensions, it can
 * be used for faster collision detection as it is a more simple shape,
 * requiring less calculations than a fully defined polygon.
 */
class AABB implements IShape {
    public center: Vector;
    public size: Vector;

    constructor(size: Vector, center: Vector = Vector.New(0,0)) {
        this.center = center;
        this.size = size;
    }

    public Center(): Vector {
        return this.center.Copy();
    }

    public Transform(transform: Transform): IShape {
        return new AABB(
            this.size.Copy().Multiply(transform.scale),
            this.center.Copy().Add(transform.position),
        );
    }

    public FarthestPointInDirection(direction: Vector): Vector {
        const left = this.center.x - this.size.x / 2;
        const right = this.center.x + this.size.x / 2;
        const top = this.center.y + this.size.y / 2;
        const bottom = this.center.y - this.size.y / 2;

        const points = [
            Vector.New(left, top),
            Vector.New(right, top),
            Vector.New(left, bottom),
            Vector.New(right, bottom)
        ];

        let farthestDistance = points[0].Dot(direction);
        let farthestPoint = points[0];

        for (let i = 1; i < points.length; i++) {
            const distanceInDirection = points[i].Dot(direction);
            if (distanceInDirection > farthestDistance) {
                farthestPoint = points[i];
                farthestDistance = distanceInDirection;
            }
        }

        return farthestPoint;
    }

    public PointInside(point: Vector): boolean {
        const left = this.center.x - this.size.x / 2;
        const right = this.center.x + this.size.x / 2;
        const top = this.center.y + this.size.y / 2;
        const bottom = this.center.y - this.size.y / 2;
        return point.x < right && point.x > left && point.y < top && point.y > bottom;
    }

    public Free(): void {
        this.center.Free();
        this.size.Free();
    }
}

export default AABB;
