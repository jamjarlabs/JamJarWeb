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

import { mat4 } from "gl-matrix";
import IPoolable from "../pooling/ipoolable";
import Pooled from "../pooling/pooled";
import Vector from "./vector";

/**
 * Matrix4DValues is shorthand for the 4x4 tuple of the matrix values
 */
type Matrix4DValues = [
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number],
    [number, number, number, number]
];

/**
 * Matrix4D is the representation of a 4x4 matrix.
 * Used for transformations and applying transforms to shapes/objects.
 * Used mainly in the rendering pipeline, as GLSL works best with 4x4 matrices.
 * Inspired by the glMatrix library:
 * https://github.com/toji/gl-matrix
 */
class Matrix4D extends Pooled implements IPoolable {
    /**
     * Value of the Matrix4D object pool.
     */
    private static POOL_KEY = "jamjar_matrix4d";

    private static INIT_MATRIX4D = () => {
        return new Matrix4D();
    };

    /**
     * Create a new Matrix4D, using pooling if available.
     */
    public static New(): Matrix4D {
        return this.new<Matrix4D>(Matrix4D.POOL_KEY, Matrix4D);
    }

    /**
     * Free the provided Matrix4D.
     */
    public static Free(obj: Matrix4D): void {
        this.free(Matrix4D.POOL_KEY, obj);
    }

    /**
     * Initialize the Matrix4D pool to the size provided.
     */
    public static Init(size: number): void {
        this.init(Matrix4D.POOL_KEY, Matrix4D.INIT_MATRIX4D, size);
    }

    private static readonly Z_AXIS: Float32Array = new Float32Array([0, 0, 1]);
    private static vec3Tmp = new Float32Array(3);
    public data: Float32Array;

    constructor() {
        super();
        this.data = new Float32Array(16);
        this.Blank();
    }

    public Set(values: Matrix4DValues): Matrix4D {
        this.data[0] = values[0][0];
        this.data[1] = values[0][1];
        this.data[2] = values[0][2];
        this.data[3] = values[0][3];

        this.data[4] = values[1][0];
        this.data[5] = values[1][1];
        this.data[6] = values[1][2];
        this.data[7] = values[1][3];

        this.data[8] = values[2][0];
        this.data[9] = values[2][1];
        this.data[10] = values[2][2];
        this.data[11] = values[2][3];

        this.data[12] = values[3][0];
        this.data[13] = values[3][1];
        this.data[14] = values[3][2];
        this.data[15] = values[3][3];
        return this;
    }

    /**
     * Translate applies a vector translation to the matrix. The Z part of the vector is assumed to be 0.
     * This is an in-place transformation.
     * @param {Vector} translation The vector transformation to apply to the matrix
     */
    public Translate(translation: Vector): Matrix4D {
        Matrix4D.vec3Tmp[0] = translation.x;
        Matrix4D.vec3Tmp[1] = translation.y;
        Matrix4D.vec3Tmp[2] = 0;
        mat4.translate(this.data, this.data, Matrix4D.vec3Tmp);
        return this;
    }

    /**
     * Scale applies a scaling vector to the matrix. The Z part of the vector is assumed to be 0.
     * This is an in-place transformation.
     * @param {Vector} scale The vector scaling to apply to the matrix
     */
    public Scale(scale: Vector): Matrix4D {
        Matrix4D.vec3Tmp[0] = scale.x;
        Matrix4D.vec3Tmp[1] = scale.y;
        Matrix4D.vec3Tmp[2] = 0;
        mat4.scale(this.data, this.data, Matrix4D.vec3Tmp);
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
        mat4.rotate(this.data, this.data, angle, Matrix4D.Z_AXIS);
        return this;
    }

    /**
     * RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
     * This is an in-place transformation.
     * @param {number} angle The angle in degrees to rotate the matrix by
     */
    public RotateDeg(angle: number): Matrix4D {
        return this.Rotate(angle * (Math.PI / 180));
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
            throw "Invalid parameters for Orthograhic projection, will result in division by zero.";
        }

        mat4.ortho(this.data, left, right, bottom, top, near, far);

        return this;
    }

    /**
     * GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array
     * @returns {Float32Array} The array representation of the matrix
     */
    public GetFloat32Array(): Float32Array {
        return this.data;
    }

    public Blank(): Matrix4D {
        this.data[0] = 1;
        this.data[1] = 0;
        this.data[2] = 0;
        this.data[3] = 0;

        this.data[4] = 0;
        this.data[5] = 1;
        this.data[6] = 0;
        this.data[7] = 0;

        this.data[8] = 0;
        this.data[9] = 0;
        this.data[10] = 1;
        this.data[11] = 0;

        this.data[12] = 0;
        this.data[13] = 0;
        this.data[14] = 0;
        this.data[15] = 1;
        return this;
    }

    public Recycle(): IPoolable {
        this.Blank();
        return this;
    }

    public Free(): void {
        Matrix4D.Free(this);
    }
}

export default Matrix4D;
