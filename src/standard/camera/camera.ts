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

import Component from "../../component/component";
import Vector from "../../geometry/vector";
import Color from "../../rendering/color";
import Matrix4D from "../../geometry/matrix_4d";

/**
 * Camera is a component that represents a game camera.
 * Holds camera information such as viewport info, aspect info and the background color.
 * In-game camera position should be managed in the transform.
 */
class Camera extends Component {
    public static readonly KEY = "camera";
    /**
     * Background colour for the camera when rendering.
     */
    public backgroundColor: Color;
    /**
     * Position of the camera's viewport on the screen, with from
     * bottom left (-1, -1) to top right (1, 1) with (0, 0) as the center.
     */
    public viewportPosition: Vector;
    /**
     * Scale of the camera's viewport, relative to the canvas/rendering surface.
     * A viewport scale of (1, 1) would take up the entire canvas, while a scale
     * of (0.5, 0.5) would only take up half of the screen (width and height).
     */
    public viewportScale: Vector;
    /**
     * The scale of the camera in terms of world space.
     * A virtual scale of (160, 90) would render 160 world space units wide and
     * 90 world space units tall, centered on the camera's transform position.
     */
    public virtualScale: Vector;

    constructor(
        backgroundColor: Color = new Color(0, 0, 0, 1),
        viewportPosition: Vector = Vector.New(0, 0),
        viewportScale: Vector = Vector.New(1, 1),
        virtualScale: Vector = Vector.New(160, 90)
    ) {
        super(Camera.KEY);
        this.backgroundColor = backgroundColor;
        this.viewportPosition = viewportPosition;
        this.viewportScale = viewportScale;
        this.virtualScale = virtualScale;
    }

    /**
     * GetProjectionMatrix builds and returns an orthographic projection for use
     * in rendering, based on the virtual scale defined in the camera.
     * @returns {Matrix4D} The projection matrix
     */
    GetProjectionMatrix(): Matrix4D {
        const halfWidth = this.virtualScale.x / 2;
        const halfHeight = this.virtualScale.y / 2;
        return new Matrix4D().Ortho(-halfWidth, halfWidth, -halfHeight, halfHeight, 0, 100);
    }

    public Free(): void {
        this.viewportPosition.Free();
        this.viewportScale.Free();
        this.virtualScale.Free();
    }
}

export default Camera;
