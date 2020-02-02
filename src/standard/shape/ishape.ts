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

import Vector from "../../geometry/vector";
import Transform from "../transform/transform";

/**
 * IShape is the interface for a shape, defining all methods that need implemented in order
 * for the shape to be used with collision detection.
 */
interface IShape {
    /**
     * Transform takes a transform and applies it to shape.
     * @param {Transform} transform The transform to apply to the shape
     * @returns {IShape} The transformed shape
     */
    Transform(transform: Transform): IShape;
    /**
     * FarthestPointInDirection returns the point that is farthest in the direction provided.
     * Used in the GJK algorithm for collision detection.
     * @param {Vector} direction The direction to get the point in
     * @returns {Vector} The farthest point in the direction provided
     */
    FarthestPointInDirection(direction: Vector): Vector;
}

export default IShape;