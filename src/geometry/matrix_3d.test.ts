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

describe("Matrix3D - Translate", () => {
    type TestTuple = [
        string,
        Matrix3D,
        Matrix3D,
        Vector
    ];
    test.each<TestTuple>([
        [
            "Translate up 3",
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 3, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            new Vector(0, 3)
        ],
        [
            "Translate up 5 and right 3",
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [3, 5, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            new Vector(3, 5)
        ],
    ])("%p", (description: string, expectedState: Matrix3D, matrix: Matrix3D, translation: Vector) => {
        matrix.Translate(translation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix3D - Scale", () => {
    type TestTuple = [
        string,
        Matrix3D,
        Matrix3D,
        Vector
    ];
    test.each<TestTuple>([
        [
            "Scale y by 3",
            new Matrix3D([
                [1, 0, 0],
                [0, 3, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            new Vector(1, 3)
        ],
        [
            "Scale y by 5 and x by 3",
            new Matrix3D([
                [3, 0, 0],
                [0, 5, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            new Vector(3, 5)
        ],
    ])("%p", (description: string, expectedState: Matrix3D, matrix: Matrix3D, scale: Vector) => {
        matrix.Scale(scale);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix3D - Rotate", () => {
    type TestTuple = [
        string,
        Matrix3D,
        Matrix3D,
        number
    ];
    test.each<TestTuple>([
        [
            "Rotate by 45 degrees",
            new Matrix3D([
                [0.7071067811865476, -0.7071067811865475, 0],
                [0.7071067811865475, 0.7071067811865476, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            Math.PI / 4
        ],
        [
            "Rotate by 180 degrees",
            new Matrix3D([
                [-1, -1.2246467991473532e-16, -0],
                [1.2246467991473532e-16, -1, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            Math.PI
        ],
    ])("%p", (description: string, expectedState: Matrix3D, matrix: Matrix3D, rotation: number) => {
        matrix.Rotate(rotation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix3D - RotateDeg", () => {
    type TestTuple = [
        string,
        Matrix3D,
        Matrix3D,
        number
    ];
    test.each<TestTuple>([
        [
            "Rotate by 45 degrees",
            new Matrix3D([
                [0.7071067811865476, -0.7071067811865475, 0],
                [0.7071067811865475, 0.7071067811865476, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            45
        ],
        [
            "Rotate by 180 degrees",
            new Matrix3D([
                [-1, -1.2246467991473532e-16, -0],
                [1.2246467991473532e-16, -1, 0],
                [0, 0, 1],
            ]),
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
            180
        ],
    ])("%p", (description: string, expectedState: Matrix3D, matrix: Matrix3D, rotation: number) => {
        matrix.RotateDeg(rotation);
        expect(matrix).toEqual(expectedState);
    });
});

describe("Matrix3D - GetFloat32Array", () => {
    type TestTuple = [
        string,
        Float32Array,
        Matrix3D
    ];
    test.each<TestTuple>([
        [
            "Success",
            new Float32Array([1, 2, 3, 0, 1, 0, 5, 6, 7]),
            new Matrix3D([
                [1, 2, 3],
                [0, 1, 0],
                [5, 6, 7],
            ]),
        ],
    ])("%p", (description: string, expected: Float32Array, matrix: Matrix3D) => {
        expect(matrix.GetFloat32Array()).toEqual(expected);
    });
});


describe("Matrix3D - Identity", () => {
    type TestTuple = [
        string,
        Matrix3D
    ];
    test.each<TestTuple>([
        [
            "Success",
            new Matrix3D([
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ]),
        ],
    ])("%p", (description: string, expected: Matrix3D) => {
        expect(Matrix3D.Identity()).toEqual(expected);
    });
});
