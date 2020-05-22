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

import CollisionInfo from "../collision_info";
import IShape from "../../../shape/ishape";

/**
 * ICollisionAlgorithm represents a collision detection algorithm.
 */
interface ICollisionAlgorithm {
    /**
     * CalculateCollision calculates if there is a collision between two shapes,
     * if there is a collision a CollisionInfo will be returned, if there is no
     * collision undefined will be returned.
     * @param a First shape to use in the collision check
     * @param b Second shape to use in the collision check
     */
    CalculateCollision(a: IShape, b: IShape): CollisionInfo | undefined;
}

export default ICollisionAlgorithm;