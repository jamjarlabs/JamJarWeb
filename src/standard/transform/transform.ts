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
import Matrix3D from "../../geometry/matrix_3d";
import Matrix4D from "../../geometry/matrix_4d";

/**
 * Transform is a component for storing positional information.
 * The transform holds position, scale and angle values.
 * Frequently used in rendering, collisions and physics.
 */
class Transform extends Component {
    /**
     * Key of the transform component.
     */
    public static readonly KEY = "transform";
    /**
     * Previous position of the transform, used in interpolation.
     */
    public previous: Vector;
    /**
     * Current transform position.
     */
    public position: Vector;
    /**
     * Current transform scale.
     */
    public scale: Vector;
    /**
     * Current transform angle in radians.
     */
    public angle: number;

    constructor(position = new Vector(0,0), scale = new Vector(1,1), angle = 0) {
        super(Transform.KEY);
        this.previous = position;
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }

    /**
     * Matrix3D returns a 3x3 matrix representation of the transform.
     * @returns {Matrix3D} Matrix of transforms
     */
    public Matrix3D(): Matrix3D {
        const matrix = new Matrix3D();
        matrix.Translate(this.position);
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        return matrix;
    }

    /**
     * Matrix4D returns a 4x4 matrix representation of the transform.
     * @returns {Matrix4D} Matrix of transforms
     */
    public Matrix4D(): Matrix4D {
        const matrix = new Matrix4D();
        matrix.Translate(this.position);
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        return matrix;
    }

    /**
     * InterpolatedMatrix4D returns a 4x4 matrix representation of the transform that has
     * applied its interpolation calculation between the previous frame's position and the
     * current transform position.
     * The interpolation is based on the alpha value provided, which is time since last
     * game tick.
     * Used in rendering and ensuring smooth motion between frames.
     * @param alpha time since last game tick
     * @returns {Matrix4D} Matrix of the interpolated transform.
     */
    public InterpolatedMatrix4D(alpha: number): Matrix4D {
        const matrix = new Matrix4D();
        matrix.Translate(new Vector(
			this.previous.x * alpha + this.position.x * (1 - alpha),
			this.previous.y * alpha + this.position.y * (1 - alpha)
		));
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        return matrix;
    }
}

export default Transform;