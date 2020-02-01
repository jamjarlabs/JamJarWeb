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
import Matrix3D from "./matrix_3d";
import Matrix4D from "./matrix_4d";

describe("Vector - Multiply", () => {
    type TestTuple = [string, Vector, number, number, Vector];
    test.each<TestTuple>([
            [
                "(10,10) * (10,10)", 
                new Vector(100, 100),
                10,
                10,
                new Vector(10,10)
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, other: Vector) => {
            const vec = new Vector(x, y);
            expect(vec.Multiply(other)).toEqual(expected)
        });
});

describe("Vector - Add", () => {
    type TestTuple = [string, Vector, number, number, Vector];
    test.each<TestTuple>([
            [
                "(10,10) + (10,10)", 
                new Vector(20, 20),
                10,
                10,
                new Vector(10,10)
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, other: Vector) => {
            const vec = new Vector(x, y);
            expect(vec.Add(other)).toEqual(expected)
        });
});

describe("Vector - Sub", () => {
    type TestTuple = [string, Vector, number, number, Vector];
    test.each<TestTuple>([
            [
                "(10,10) - (10,10)", 
                new Vector(0, 0),
                10,
                10,
                new Vector(10,10)
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, other: Vector) => {
            const vec = new Vector(x, y);
            expect(vec.Sub(other)).toEqual(expected)
        });
});


describe("Vector - Scale", () => {
    type TestTuple = [string, Vector, number, number, number];
    test.each<TestTuple>([
            [
                "(10,10) * 10", 
                new Vector(100, 100),
                10,
                10,
                10
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, scalar: number) => {
            const vec = new Vector(x, y);
            expect(vec.Scale(scalar)).toEqual(expected)
        });
});


describe("Vector - Dot", () => {
    type TestTuple = [string, number, number, number, Vector];
    test.each<TestTuple>([
            [
                "(10,10) . (10, 10)", 
                200,
                10,
                10,
                new Vector(10, 10)
            ],
        ])("%p", (description: string, expected: number, x: number, y: number, other: Vector) => {
            const vec = new Vector(x, y);
            expect(vec.Dot(other)).toEqual(expected)
        });
});


describe("Vector - Rotate", () => {
    type TestTuple = [string, Vector, number, number, Vector, number];
    test.each<TestTuple>([
            [
                "Rotate 90 degrees", 
                new Vector(-10, 10),
                10,
                10,
                new Vector(0, 0),
                Math.PI/2
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, center: Vector, angle: number) => {
            const vec = new Vector(x, y);
            expect(vec.Rotate(center, angle)).toEqual(expected)
        });
});

describe("Vector - RotateDeg", () => {
    type TestTuple = [string, Vector, number, number, Vector, number];
    test.each<TestTuple>([
            [
                "Rotate 90 degrees", 
                new Vector(-10, 10),
                10,
                10,
                new Vector(0, 0),
                90
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, center: Vector, angle: number) => {
            const vec = new Vector(x, y);
            expect(vec.RotateDeg(center, angle)).toEqual(expected)
        });
});

describe("Vector - Invert", () => {
    type TestTuple = [string, Vector, number, number];
    test.each<TestTuple>([
            [
                "Invert", 
                new Vector(-10, -10),
                10,
                10,
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number) => {
            const vec = new Vector(x, y);
            expect(vec.Invert()).toEqual(expected)
        });
});

describe("Vector - Copy", () => {
    type TestTuple = [string, Vector, number, number];
    test.each<TestTuple>([
            [
                "Copy", 
                new Vector(10, 10),
                10,
                10,
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number) => {
            const vec = new Vector(x, y);
            expect(vec.Copy()).toEqual(expected)
        });
});

describe("Vector - Apply3D", () => {
    type TestTuple = [string, Vector, number, number, Matrix3D];
    test.each<TestTuple>([
            [
                "Scale by 3, move up 1, rotate 180", 
                new Vector(30.000000000000004, -26.999999999999996),
                10,
                10,
                ((): Matrix3D => {
                    const mat = new Matrix3D();
                    mat.Scale(new Vector(3,3));
                    mat.Translate(new Vector(0, 1));
                    mat.RotateDeg(90);
                    return mat;
                })()
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, matrix: Matrix3D) => {
            const vec = new Vector(x, y);
            expect(vec.Apply3D(matrix)).toEqual(expected)
        });
});


describe("Vector - Apply4D", () => {
    type TestTuple = [string, Vector, number, number, Matrix4D];
    test.each<TestTuple>([
            [
                "Scale by 3, move up 1, rotate 180", 
                new Vector(30.000000000000004, -26.999999999999996),
                10,
                10,
                ((): Matrix4D => {
                    const mat = new Matrix4D();
                    mat.Scale(new Vector(3,3));
                    mat.Translate(new Vector(0, 1));
                    mat.RotateDeg(90);
                    return mat;
                })()
            ],
        ])("%p", (description: string, expected: Vector, x: number, y: number, matrix: Matrix4D) => {
            const vec = new Vector(x, y);
            expect(vec.Apply4D(matrix)).toEqual(expected)
        });
});