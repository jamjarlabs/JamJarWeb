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

import Vector from "./vector";

/**
 * Matrix3DValues is shorthand for the 3x3 tuple of the matrix values
 */
type Matrix3DValues = [
    [number, number, number],
    [number, number, number],
    [number, number, number]
]

/**
 * Matrix3D is the representation of a 3x3 matrix.
 * Used for transformations and applying transforms to shapes/objects.
 * Used mainly in collision detection.
 * Inspired by the glMatrix library:
 * https://github.com/toji/gl-matrix
 */
class Matrix3D {

    public values: Float32Array;

    constructor() {
        this.values = new Float32Array(9);
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;

        this.values[3] = 0;
        this.values[4] = 1;
        this.values[5] = 0;

        this.values[6] = 0;
        this.values[7] = 0;
        this.values[8] = 1;
    }

    public Set(values: Matrix3DValues): Matrix3D {
        this.values[0] = values[0][0];
        this.values[1] = values[0][1];
        this.values[2] = values[0][2];

        this.values[3] = values[1][0];
        this.values[4] = values[1][1];
        this.values[5] = values[1][2];

        this.values[6] = values[2][0];
        this.values[7] = values[2][1];
        this.values[8] = values[2][2];
        return this;
    }

    /**
     * Translate applies a vector translation to the matrix.
     * This is an in-place transformation.
     * @param {Vector} translation The vector transformation to apply to the matrix
     */
    public Translate(translation: Vector): Matrix3D {
        this.values[6] = translation.x * this.values[0] + translation.y * this.values[3] + this.values[6];
        this.values[7] = translation.x * this.values[1] + translation.y * this.values[4] + this.values[7];
        this.values[8] = translation.x * this.values[2] + translation.y * this.values[5] + this.values[8];
        return this;
    }

    /**
     * Scale applies a scaling vector to the matrix.
     * This is an in-place transformation.
     * @param {Vector} scale The vector scaling to apply to the matrix
     */
    public Scale(scale: Vector): Matrix3D {
        this.values[0] = scale.x * this.values[0];
        this.values[1] = scale.x * this.values[1];
        this.values[2] = scale.x * this.values[2];
        this.values[3] = scale.y * this.values[3];
        this.values[4] = scale.y * this.values[4];
        this.values[5] = scale.y * this.values[5];
        return this;
    }

    /**
     * Rotate applies a radians rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in radians to rotate the matrix by
     */
    public Rotate(angle: number): Matrix3D {
        // Clockwise rotation
        angle = -angle;
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a02 = this.values[2];
        const a10 = this.values[3];
        const a11 = this.values[4];
        const a12 = this.values[5];

        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.values[0] = c * a00 + s * a10;
        this.values[1] = c * a01 + s * a11;
        this.values[2] = c * a02 + s * a12;
        this.values[3] = c * a10 - s * a00;
        this.values[4] = c * a11 - s * a01;
        this.values[5] = c * a12 - s * a02;
        return this;
    }

    /**
     * RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in degrees to rotate the matrix by
     */
    public RotateDeg(angle: number): Matrix3D {
        return this.Rotate(angle * (Math.PI/180));
    }

    /**
     * GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the matrix
     */
    public GetFloat32Array(): Float32Array {
        return this.values;
    }
}

export default Matrix3D;
