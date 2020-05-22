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

/**
 * NeverCollideAlgorithm provides an algorithm that never detects a collision
 * between two shapes, used in testing or as a placeholder algorithm
 */
class NeverCollideAlgorithm implements ICollisionAlgorithm {
    CalculateCollision(a: IShape, b: IShape): CollisionInfo | undefined {
        return undefined;
    }
}

export default NeverCollideAlgorithm;