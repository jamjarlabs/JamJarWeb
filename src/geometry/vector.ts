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

import Matrix3D from "./matrix_3d";
import Matrix4D from "./matrix_4d";

/**
 * Vector is the 2 dimensional representation of a vector, with two values (x,y).
 */
class Vector {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * Apply3D applies a 3x3 matrix to the vector and returns the result.
     * @param {Matrix3D} matrix Matrix to apply to the vector
     * @returns {Vector} Vector that has the matrix applied to it
     */
    public Apply3D(matrix: Matrix3D): Vector {
        return new Vector(
            matrix.values[0][0] * this.x + matrix.values[1][0] * this.y + matrix.values[2][0],
            matrix.values[0][1] * this.x + matrix.values[1][1] * this.y + matrix.values[2][1]
        );
    }

    /**
     * Apply4D applies a 4x4 matrix to the vector and returns the result.
     * @param {Matrix4D} matrix Matrix to apply to the vector
     * @returns {Vector} Vector that has the matrix applied to it
     */
    public Apply4D(matrix: Matrix4D): Vector {
        return new Vector(
            matrix.values[0][0] * this.x + matrix.values[1][0] * this.y + matrix.values[3][0],
            matrix.values[0][1] * this.x + matrix.values[1][1] * this.y + matrix.values[3][1]
        );
    }

    /**
     * Multiply multiplies two vectors together
     * @param {Vector} vector The matrix to multiply this one by
     * @returns {Vector} The result of the multiplication
     */
    public Multiply(vector: Vector): Vector {
        return new Vector(
            this.x * vector.x,
            this.y * vector.y
        )
    }

    /**
     * Add adds two vectors together
     * @param {Vector} vector The vector to add to this one
     * @returns {Vector} The result of the addition
     */
    public Add(vector: Vector): Vector {
        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        );
    }

    /**
     * Sub takes one vector from another
     * @param  {Vector} vector The vector to subtract from this one
     * @returns {Vector} The result of the subtraction
     */
    public Sub(vector: Vector): Vector {
        return new Vector(
            this.x - vector.x,
            this.y - vector.y
        );
    }

    /**
     * Scale multiplies this vector by a scalar value (non-vector).
     * @param {Vector} scalar The scalar value to multiply the vector by
     * @returns {Vector} The result of the scaling
     */
    public Scale(scalar: number): Vector {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        );
    }

    /**
     * Dot calculates the dot product of two vectors.
     * @param {Vector} vector The vector to dot with this vector
     * @returns {number} The result of the dot product
     */
    public Dot(vector: Vector): number {
        return this.x * vector.x + this.y * vector.y;
    }

    /**
     * Rotate applies a rotation around a point to the vector in radians.
     * @param {Vector} center The point to rotate around
     * @param {number} angle The angle in radians to rotate by
     * @returns {Vector} The result of the rotation
     */
    public Rotate(center: Vector, angle: number): Vector {
		const x = this.x - center.x;
		const y = this.y - center.y;
		return new Vector(
			(x * Math.cos(angle) - y * Math.sin(angle)) + center.x,
			(y * Math.sin(angle) + y * Math.cos(angle)) + center.y
		);
    }
    
    /**
     * RotateDeg applies a rotation around a point to the vector in degrees.
     * @param {Vector} center The point to rotate around
     * @param {number} angle The angle in degrees to rotate by
     * @returns {Vector} The result of the rotation
     */
    public RotateDeg(center: Vector, angle: number): Vector {
        return this.Rotate(center, angle * (Math.PI/180));
    }

    /**
     * Invert flips the values of the vector, `x -> -x` and `y -> -y`.
     * @returns {Vector} The result of the inverting
     */
    public Invert(): Vector {
        return new Vector(
            -this.x,
            -this.y
        );
    }

    /**
     * Calculates magnitude of this vector.
     * @returns {number} The magnitude
     */
    public Magnitude(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}

    /**
     * Returns a normalized version of the vector.
     * @returns {Vector} The normalized vector
     */
    public Normalize(): Vector {
        let magnitude = this.Magnitude();
		if (magnitude > 0) {
			magnitude = 1 / magnitude;
		}
		return this.Scale(magnitude);
    }

    /**
     * Copy produces a copy of the vector and its values, rather than pointing to
     * the same vector.
     * @returns {Vector} The copy of the vector
     */
    public Copy(): Vector {
        return new Vector(
            this.x,
            this.y
        );
    }
}

export default Vector;