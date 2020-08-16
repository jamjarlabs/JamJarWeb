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
        const collisions: CollisionInfo[] = [];
        // Iterate over collision pairs
        for (let i = 0; i < shapes.length; i++) {
            for (let j = i + 1; j < shapes.length; j++) {
                const a = shapes[i];
                const b = shapes[j];
                // Detect collision
                const collision = this.aabb(a,b);
                if (collision !== undefined) {
                    collisions.push(collision);
                }
            }
        }
        return collisions;
    }

    private aabb(a: IShape, b: IShape): CollisionInfo | undefined {
        const aTopLeft = a.FarthestPointInDirection(new Vector(-1, 1));
        const aBottomRight = a.FarthestPointInDirection(new Vector(1, -1));
        const bTopLeft = b.FarthestPointInDirection(new Vector(-1, 1));
        const bBottomRight = b.FarthestPointInDirection(new Vector(1, -1));
        if (aTopLeft.x < bBottomRight.x &&
            aBottomRight.x > bTopLeft.x &&
            aBottomRight.y < bTopLeft.y &&
            aTopLeft.y > bBottomRight.y) {
            return new CollisionInfo(a, b);
        }
        return;
    }
}

export default AABBAlgorithm;
