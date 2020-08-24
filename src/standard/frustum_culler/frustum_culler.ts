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

import IFrustumCuller from "./ifrustum_culler";
import IShape from "../../shape/ishape";
import ICollisionAlgorithm from "../collision/algorithm/icollision_algorithm";
import AABBAlgorithm from "../collision/algorithm/aabb_algorithm";

/**
 * FrustumCuller is used to cull shapes that are outside of another shape (not
 * colliding) - used in rendering to avoid unneccesary rendering.
 */
class FrustumCuller implements IFrustumCuller {

    private narrowAlgorithm: ICollisionAlgorithm;

    constructor(narrowAlgorithm: ICollisionAlgorithm = new AABBAlgorithm()) {
        this.narrowAlgorithm = narrowAlgorithm;
    }

    /**
     * Cull determines if a shape is within a frustum (defined by another
     * shape). Returns false if the shape is within the frustum and it should
     * not be culled, returns true if the shape is outside of the frustum and
     * should be culled.
     * @param frustumPlaneShape Shape of the frustum (view/camera)
     * @param shape Shape to check if it is within the frustum
     */
    public Cull(frustumPlaneShape: IShape, shape: IShape): boolean {
        const narrow = this.narrowAlgorithm.CalculateCollisions([frustumPlaneShape, shape]);
        if (narrow.length === 0) {
            return true;
        }
        return false;
    }
}

export default FrustumCuller;
