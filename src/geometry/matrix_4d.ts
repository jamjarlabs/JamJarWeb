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

import Vector from "./vector";

/**
 * Matrix4DValues is shorthand for the 4x4 tuple of the matrix values
 */
type Matrix4DValues = [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
]

/**
 * Matrix4D is the representation of a 4x4 matrix.
 * Used for transformations and applying transforms to shapes/objects.
 * Used mainly in the rendering pipeline, as GLSL works best with 4x4 matrices.
 * Inspired by the glMatrix library:
 * https://github.com/toji/gl-matrix
 */
class Matrix4D {
    public values: Float32Array

    constructor() {
        this.values = new Float32Array(16);
        this.values[0] = 1;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;

        this.values[4] = 0;
        this.values[5] = 1;
        this.values[6] = 0;
        this.values[7] = 0;

        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 1;
        this.values[11] = 0;

        this.values[12] = 0;
        this.values[13] = 0;
        this.values[14] = 0;
        this.values[15] = 1;

    }

    public Set(values: Matrix4DValues): Matrix4D {
        this.values[0] = values[0][0];
        this.values[1] = values[0][1];
        this.values[2] = values[0][2];
        this.values[3] = values[0][3];

        this.values[4] = values[1][0];
        this.values[5] = values[1][1];
        this.values[6] = values[1][2];
        this.values[7] = values[1][3];

        this.values[8] = values[2][0];
        this.values[9] = values[2][1];
        this.values[10] = values[2][2];
        this.values[11] = values[2][3];

        this.values[12] = values[3][0];
        this.values[13] = values[3][1];
        this.values[14] = values[3][2];
        this.values[15] = values[3][3];
        return this;
    }

    /**
     * Translate applies a vector translation to the matrix. The Z part of the vector is assumed to be 0.
     * This is an in-place transformation.
     * @param {Vector} translation The vector transformation to apply to the matrix
     */
    public Translate(translation: Vector): Matrix4D {
        this.values[12] = this.values[0] * translation.x + this.values[4] * translation.y + this.values[12];
        this.values[13] = this.values[1] * translation.x + this.values[5] * translation.y + this.values[13];
        this.values[14] = this.values[2] * translation.x + this.values[6] * translation.y + this.values[14];
        this.values[15] = this.values[3] * translation.x + this.values[7] * translation.y + this.values[15];
        return this;
    }

    /**
     * Scale applies a scaling vector to the matrix. The Z part of the vector is assumed to be 0.
     * This is an in-place transformation.
     * @param {Vector} scale The vector scaling to apply to the matrix
     */
    public Scale(scale: Vector): Matrix4D {
        this.values[0] = this.values[0] * scale.x;
        this.values[1] = this.values[1] * scale.x;
        this.values[2] = this.values[2] * scale.x;
        this.values[3] = this.values[3] * scale.x;

        this.values[4] = this.values[4] * scale.y;
        this.values[5] = this.values[5] * scale.y;
        this.values[6] = this.values[6] * scale.y;
        this.values[7] = this.values[7] * scale.y;

        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 0;
        this.values[11] = 0;
        return this;
    }

    /**
     * Rotate applies a radians rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in radians to rotate the matrix by
     */
    public Rotate(angle: number): Matrix4D {
        // Clockwise rotation
        angle = -angle;
        const a00 = this.values[0];
        const a01 = this.values[1];
        const a10 = this.values[4];
        const a11 = this.values[5];

        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.values[0] = c * a00 + s * a10;
        this.values[1] = c * a01 + s * a11;
        this.values[4] = c * a10 - s * a00;
        this.values[5] = c * a11 - s * a01;
        return this;
    }

    /**
     * RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in degrees to rotate the matrix by
     */
    public RotateDeg(angle: number): Matrix4D {
        return this.Rotate(angle * (Math.PI/180));
    }

    /**
     * Sets the matrix to be an orthogonal projection matrix.
     * This is an in-place transformation.
     * @param {number} left Left bound
     * @param {number} right Right bound
     * @param {number} bottom Bottom bound
     * @param {number} top Top bound
     * @param {number} near Near bound
     * @param {number} far Far bound
     */
    public Ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): Matrix4D {
        if (left === right || bottom === top || near === far) {
            throw("Invalid parameters for Orthograhic projection, will result in division by zero.");
        }

        const lr = 1 / (left - right);
        const bt = 1 / (bottom - top);
        const nf = 1 / (near - far);

        this.values[0] = -2 * lr;
        this.values[1] = 0;
        this.values[2] = 0;
        this.values[3] = 0;

        this.values[4] = 0;
        this.values[5] = -2 * bt;
        this.values[6] = 0;
        this.values[7] = 0;

        this.values[8] = 0;
        this.values[9] = 0;
        this.values[10] = 2 * nf;
        this.values[11] = 0;

        this.values[12] = (left + right) * lr;
        this.values[13] = (top + bottom) * bt;
        this.values[14] = (far + near) * nf;
        this.values[15] = 1;

        return this;
    }

    /**
     * GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the matrix
     */
    public GetFloat32Array(): Float32Array {
        return this.values;
    }
}

export default Matrix4D;
