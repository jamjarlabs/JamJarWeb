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

import { mat3 } from "gl-matrix";
import Vector from "./vector";

/**
 * Matrix3DValues is shorthand for the 3x3 tuple of the matrix values
 */
type Matrix3DValues = [[number, number, number], [number, number, number], [number, number, number]];

/**
 * Matrix3D is the representation of a 3x3 matrix.
 * Used for transformations and applying transforms to shapes/objects.
 * Used mainly in collision detection.
 * Inspired by the glMatrix library:
 * https://github.com/toji/gl-matrix
 */
class Matrix3D {
    public data: Float32Array;

    constructor() {
        this.data = new Float32Array(9);
        this.data[0] = 1;
        this.data[1] = 0;
        this.data[2] = 0;

        this.data[3] = 0;
        this.data[4] = 1;
        this.data[5] = 0;

        this.data[6] = 0;
        this.data[7] = 0;
        this.data[8] = 1;
    }

    public Set(values: Matrix3DValues): Matrix3D {
        this.data[0] = values[0][0];
        this.data[1] = values[0][1];
        this.data[2] = values[0][2];

        this.data[3] = values[1][0];
        this.data[4] = values[1][1];
        this.data[5] = values[1][2];

        this.data[6] = values[2][0];
        this.data[7] = values[2][1];
        this.data[8] = values[2][2];
        return this;
    }

    /**
     * Translate applies a vector translation to the matrix.
     * This is an in-place transformation.
     * @param {Vector} translation The vector transformation to apply to the matrix
     */
    public Translate(translation: Vector): Matrix3D {
        mat3.translate(this.data, this.data, translation.data);
        return this;
    }

    /**
     * Scale applies a scaling vector to the matrix.
     * This is an in-place transformation.
     * @param {Vector} scale The vector scaling to apply to the matrix
     */
    public Scale(scale: Vector): Matrix3D {
        mat3.scale(this.data, this.data, scale.data);
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
        mat3.rotate(this.data, this.data, angle);
        return this;
    }

    /**
     * RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in degrees to rotate the matrix by
     */
    public RotateDeg(angle: number): Matrix3D {
        return this.Rotate(angle * (Math.PI / 180));
    }

    /**
     * GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the matrix
     */
    public GetFloat32Array(): Float32Array {
        return this.data;
    }
}

export default Matrix3D;
