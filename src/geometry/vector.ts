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

import IPoolable from "../pooling/ipoolable";
import Pooled from "../pooling/pooled";
import Matrix3D from "./matrix_3d";
import Matrix4D from "./matrix_4d";

/**
 * Vector is the 2 dimensional representation of a vector, with two values (x,y).
 * This is a mutable data structure, operations on Vector objects will affect the original object.
 */
class Vector extends Pooled implements IPoolable {

    /**
     * Value of the Vector object pool.
     */
    private static POOL_KEY = "jamjar_vector";

    /**
     * Create a Vector.New, using pooling if available.
     */
    public static New(x: number, y: number): Vector {
        return this.new<Vector>(Vector.POOL_KEY, Vector, [x, y]);
    }

    /**
     * Free the provided vector.
     */
    public static Free(obj: Vector): void {
        this.free(Vector.POOL_KEY, obj);
    }

    /**
     * Initialize the Vector pool to the size provided.
     */
    public static Init(size: number): void {
        this.init(Vector.POOL_KEY, () => {
            return Vector.New(0, 0);
        }, size);
    }

    private data: Float32Array;

    constructor(x: number, y: number) {
        super();
        this.data = new Float32Array(2);
        this.data[0] = x;
        this.data[1] = y;
    }

    get x(): number {
        return this.data[0];
    }

    set x(value: number) {
        this.data[0] = value;
    }

    get y(): number {
        return this.data[1];
    }

    set y(value: number) {
        this.data[1] = value;
    }

    /**
     * Equals determines if another
     * @param other
     */
    public Equals(other: Vector): boolean {
        return this.x === other.x && this.y === other.y;
    }

    /**
     * Apply3D applies a 3x3 matrix to this vector, result saved to the original Vector and returned.
     * @param {Matrix3D} matrix Matrix to apply to this vector
     * @returns {Vector} This vector to allow chaining, Vector that has the matrix applied to it
     */
    public Apply3D(matrix: Matrix3D): Vector {
        const x = this.x;
        const y = this.y;
        this.x = matrix.values[0] * x + matrix.values[3] * y + matrix.values[6];
        this.y = matrix.values[1] * x + matrix.values[4] * y + matrix.values[7];
        return this;
    }

    /**
     * Apply4D applies a 4x4 matrix to this vector, result saved to the original Vector and returned.
     * @param {Matrix4D} matrix Matrix to apply to this vector
     * @returns {Vector} This vector to allow chaining, Vector that has the matrix applied to it
     */
    public Apply4D(matrix: Matrix4D): Vector {
        const x = this.x;
        const y = this.y;
        this.x = matrix.values[0] * x + matrix.values[4] * y + matrix.values[12];
        this.y = matrix.values[1] * x + matrix.values[5] * y + matrix.values[13];
        return this;
    }

    /**
     * Multiply multiplies two vectors together, result saved to the original Vector and returned.
     * @param {Vector} vector The matrix to multiply this one by
     * @returns {Vector} This vector to allow chaining, the result of the multiplication
     */
    public Multiply(vector: Vector): Vector {
        this.x = this.x * vector.x;
        this.y = this.y * vector.y;
        return this;
    }

    /**
     * Add adds two vectors together, result saved to the original Vector and returned.
     * @param {Vector} vector The vector to add to this one
     * @returns {Vector} This vector to allow chaining, the result of the addition
     */
    public Add(vector: Vector): Vector {
        this.x = this.x + vector.x;
        this.y = this.y + vector.y;
        return this;
    }

    /**
     * Sub takes one vector from another, result saved to the original Vector and returned.
     * @param  {Vector} vector The vector to subtract from this one
     * @returns {Vector} This vector to allow chaining, the result result of the subtraction
     */
    public Sub(vector: Vector): Vector {
        this.x = this.x - vector.x;
        this.y = this.y - vector.y;
        return this;
    }

    /**
     * Scale multiplies this vector by a scalar value (non-vector), result saved to the original Vector and returned.
     * @param {Vector} scalar The scalar value to multiply this vector by
     * @returns {Vector} This vector to allow chaining, the result of the scaling
     */
    public Scale(scalar: number): Vector {
        this.x = this.x * scalar;
        this.y = this.y * scalar;
        return this;
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
     * Rotate applies a rotation around a point to the vector in radians, result saved to the original Vector and
     * returned.
     * @param {Vector} center The point to rotate around
     * @param {number} angle The angle in radians to rotate by
     * @returns {Vector} This vector to allow chaining, the result of the rotation
     */
    public Rotate(center: Vector, angle: number): Vector {
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        const x = this.x - center.x;
        const y = this.y - center.y;

        this.x = (x * c - y * s) + center.x;
        this.y = (x * s + y * c) + center.y;

        return this;
    }

    /**
     * RotateDeg applies a rotation around a point to the vector in degrees, result saved to the original Vector and
     * returned.
     * @param {Vector} center The point to rotate around
     * @param {number} angle The angle in degrees to rotate by
     * @returns {Vector} This vector to allow chaining, the result of the rotation
     */
    public RotateDeg(center: Vector, angle: number): Vector {
        return this.Rotate(center, angle * (Math.PI / 180));
    }

    /**
     * Invert flips the values of this vector, `x -> -x` and `y -> -y`, result saved to the original Vector and
     * returned.
     * @returns {Vector} This vector to allow chaining, the result of the inverting
     */
    public Invert(): Vector {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    /**
     * Calculates magnitude of this vector.
     * @returns {number} The magnitude
     */
    public Magnitude(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    /**
     * Returns a normalized version of this vector, result saved to the original Vector and returned.
     * @returns {Vector} This vector to allow chaining, the normalized vector
     */
    public Normalize(): Vector {
        let magnitude = this.Magnitude();
        if (magnitude > 0) {
            magnitude = 1 / magnitude;
        }
        return this.Scale(magnitude);
    }

    /**
     * Copy produces a copy of this vector and its values, rather than pointing to the same vector.
     * @returns {Vector} The copy of this vector
     */
    public Copy(): Vector {
        return Vector.New(
            this.x,
            this.y
        );
    }

    public Recycle(args: [number, number]): Vector {
        this.x = args[0];
        this.y = args[1];
        return this;
    }

    public Free(): void {
        Vector.Free(this);
    }
}

export default Vector;
