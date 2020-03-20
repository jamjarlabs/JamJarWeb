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

import Vector from "../../geometry/vector";
import PointerCameraInfo from "./pointer_camera_info";

/**
 * Pointer describes a pointer event with additional information around cameras and position within
 * the element the game is running in.
 */
class Pointer {
    /**
     * Standard PointerEvent dispatched from JS.
     */
    public event: PointerEvent;
    /**
     * Position within the game HTML element, from bottom left (-1, -1) to top right (1, 1).
     */
    public elementPosition: Vector;
    /**
     * Relevant camera information around the pointer event.
     */
    public cameraInfos: PointerCameraInfo[];

    constructor(event: PointerEvent, elementPosition: Vector, cameraInfos: PointerCameraInfo[]) {
        this.event = event;
        this.elementPosition = elementPosition;
        this.cameraInfos = cameraInfos;
    }
}

export default Pointer;