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

import Matrix4D from "./matrix_4d";
import Vector from "./vector";

describe("Matrix4D - Translate", () => {
    type TestTuple = [
        string,
        Matrix4D,
        Matrix4D,
        Vector
    ];
    test.each<TestTuple>([
        [
            "Translate up 3",
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 3, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Vector(0, 3)
        ],
        [
            "Translate up 5 and right 3",
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [3, 5, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Vector(3, 5)
        ],
    ])("%p", (description: string, expectedState: Matrix4D, matrix: Matrix4D, translation: Vector) => {
        matrix.Translate(translation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix4D - Scale", () => {
    type TestTuple = [
        string,
        Matrix4D,
        Matrix4D,
        Vector
    ];
    test.each<TestTuple>([
        [
            "Scale y by 3",
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 3, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Vector(1, 3)
        ],
        [
            "Scale y by 5 and x by 3",
            new Matrix4D().Set([
                [3, 0, 0, 0],
                [0, 5, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Vector(3, 5)
        ],
    ])("%p", (description: string, expectedState: Matrix4D, matrix: Matrix4D, scale: Vector) => {
        matrix.Scale(scale);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix4D - Rotate", () => {
    type TestTuple = [
        string,
        Matrix4D,
        Matrix4D,
        number
    ];
    test.each<TestTuple>([
        [
            "Rotate by 45 degrees",
            new Matrix4D().Set([
                [0.7071067811865476, -0.7071067811865475, 0, 0],
                [0.7071067811865475, 0.7071067811865476, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            Math.PI / 4
        ],
        [
            "Rotate by 180 degrees",
            new Matrix4D().Set([
                [-1, -1.2246467991473532e-16, 0, 0],
                [1.2246467991473532e-16, -1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            Math.PI
        ],
    ])("%p", (description: string, expectedState: Matrix4D, matrix: Matrix4D, rotation: number) => {
        matrix.Rotate(rotation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix4D - RotateDeg", () => {
    type TestTuple = [
        string,
        Matrix4D,
        Matrix4D,
        number
    ];
    test.each<TestTuple>([
        [
            "Rotate by 45 degrees",
            new Matrix4D().Set([
                [0.7071067811865476, -0.7071067811865475, 0, 0],
                [0.7071067811865475, 0.7071067811865476, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            45
        ],
        [
            "Rotate by 180 degrees",
            new Matrix4D().Set([
                [-1, -1.2246467991473532e-16, 0, 0],
                [1.2246467991473532e-16, -1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            180
        ],
    ])("%p", (description: string, expectedState: Matrix4D, matrix: Matrix4D, rotation: number) => {
        matrix.RotateDeg(rotation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix4D - Ortho", () => {
    type TestTuple = [
        string,
        Error | Matrix4D,
        Matrix4D,
        number,
        number,
        number,
        number,
        number,
        number,
    ];
    test.each<TestTuple>([
        [
            "left -5, right -5, bottom -5, top -5, near -5, far -5",
            new Error("Invalid parameters for Orthograhic projection, will result in division by zero."),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            -5,
            -5,
            -5,
            -5,
            -5,
            -5
        ],
        [
            "left -5, right 5, bottom -5, top 5, near -5, far 5",
            new Matrix4D().Set([
                [0.2, 0, 0, 0],
                [0, 0.2, 0, 0],
                [0, 0, -0.2, 0],
                [-0, -0, -0, 1],
            ]),
            new Matrix4D().Set([
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
            ]),
            -5,
            5,
            -5,
            5,
            -5,
            5
        ],
    ])("%p", (
        description: string,
        expected: Error | Matrix4D,
        matrix: Matrix4D,
        left: number,
        right: number,
        bottom: number,
        top: number,
        near: number,
        far: number) => {
        if (expected instanceof Error) {
            expect(() => { matrix.Ortho(left, right, bottom, top, near, far); }).toThrow(expected);
        } else {
            expect(matrix.Ortho(left, right, bottom, top, near, far)).toEqual(expected);
        }
    });
});

describe("Matrix4D - GetFloat32Array", () => {
    type TestTuple = [
        string,
        Float32Array,
        Matrix4D
    ];
    test.each<TestTuple>([
        [
            "Success",
            new Float32Array([1, 2, 3, 4, 0, 1, 0, 0, 5, 6, 7, 8, 0, 0, 0, 1]),
            new Matrix4D().Set([
                [1, 2, 3, 4],
                [0, 1, 0, 0],
                [5, 6, 7, 8],
                [0, 0, 0, 1],
            ]),
        ],
    ])("%p", (description: string, expected: Float32Array, matrix: Matrix4D) => {
        expect(matrix.GetFloat32Array()).toEqual(expected);
    });
});
