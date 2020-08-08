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
     * CalculateCollisions calculates all collisions between the shapes
     * provided, returning a list of CollisionInfos, each representing a
     * Collision.
     * @param shapes The shapes to check for collisions
     */
    CalculateCollisions(shapes: IShape[]): CollisionInfo[];
}

export default ICollisionAlgorithm;
