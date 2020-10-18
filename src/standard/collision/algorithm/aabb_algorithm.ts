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

import ICollisionAlgorithm from "./icollision_algorithm";
import CollisionInfo from "../collision_info";
import IShape from "../../../shape/ishape";
import Vector from "../../../geometry/vector";

/**
 * AABBAlgorithm is used to provide collision detection using Axis-Aligned
 * Bounding-Boxes (AABB), it provides a simplified collision detection method.
 * This algorithm sacrifices some collision accuracy for performance.
 */
class AABBAlgorithm implements ICollisionAlgorithm {
    public CalculateCollisions(shapes: IShape[]): CollisionInfo[] {

        const horizontalOverlap: [IShape, IShape][] = [];

        const leftDir = Vector.New(-1, 0);
        const rightDir = Vector.New(1, 0);

        for (let i = 0; i < shapes.length; i++) {
            const a = shapes[i];
            const aLeft = a.FarthestPointInDirection(leftDir);
            const aRight = a.FarthestPointInDirection(rightDir);
            for (let j = i + 1; j < shapes.length; j++) {
                const b = shapes[j];
                const bLeft = b.FarthestPointInDirection(leftDir);
                const bRight = b.FarthestPointInDirection(rightDir);
                if (aLeft.x < bRight.x &&
                    aRight.x > bLeft.x) {
                    horizontalOverlap.push([a, b]);
                }
            }
        }

        leftDir.Free();
        rightDir.Free();

        const collisions: CollisionInfo[] = [];

        const upDir = Vector.New(0, 1);
        const downDir = Vector.New(0, -1);

        for (let i = 0; i < horizontalOverlap.length; i++) {
            const a = horizontalOverlap[i][0];
            const b = horizontalOverlap[i][1];
            const aUp = a.FarthestPointInDirection(upDir);
            const aDown = a.FarthestPointInDirection(downDir);
            const bUp = b.FarthestPointInDirection(upDir);
            const bDown = b.FarthestPointInDirection(downDir);
            if (aDown.y < bUp.y &&
                aUp.y > bDown.y) {
                collisions.push(new CollisionInfo(a, b));
            }
        }

        upDir.Free();
        downDir.Free();

        return collisions;
    }
}

export default AABBAlgorithm;
