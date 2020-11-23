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

import IEntity from "../../entity/ientity";
import Vector from "../../geometry/vector";
import IFreeable from "../../pooling/ifreeable";

/**
 * PointerCameraInfo pointer information relevant to a camera.
 */
class PointerCameraInfo implements IFreeable {
    /**
     * Entity of the camera.
     */
    public camera: IEntity;
    /**
     * Position of the pointer relative to the camera's viewport, from bottom left (-1, -1) to top right (1, 1).
     */
    public cameraPosition: Vector;
    /**
     * Position in the world of the pointer using this camera.
     */
    public worldPosition: Vector;
    /**
     * If the pointer is within the camera viewport.
     */
    public withinBounds: boolean;

    constructor(camera: IEntity, cameraPosition: Vector, worldPosition: Vector, withinBounds: boolean) {
        this.camera = camera;
        this.cameraPosition = cameraPosition;
        this.worldPosition = worldPosition;
        this.withinBounds = withinBounds;
    }

    public Free(): void {
        this.cameraPosition.Free();
        this.worldPosition.Free();
    }
}

export default PointerCameraInfo;
