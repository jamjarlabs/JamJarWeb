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

import Vector from "../../geometry/vector";
import Matrix3D from "../../geometry/matrix_3d";
import Transform from "./transform";
import Matrix4D from "../../geometry/matrix_4d";

describe("Transform - Matrix3D", () => {
    type TestTuple = [string, Matrix3D, Vector, Vector, number];
    test.each<TestTuple>([
            [
                "Unchanged", 
                new Matrix3D([
                    [1,0,0],
                    [0,1,0],
                    [0,0,1]
                ]),
                new Vector(0, 0),
                new Vector(1, 1),
                0,
            ],
            [
                "Up 3, 180 degrees rotated, scale by 2", 
                new Matrix3D([
                    [-2,-2.4492935982947064e-16,-0],
                    [2.4492935982947064e-16,-2,0],
                    [0,3,1]
                ]),
                new Vector(0, 3),
                new Vector(2, 2),
                Math.PI,
            ]
        ])("%p", (description: string, expected: Matrix3D, position: Vector, scale: Vector, angle: number) => {
            const transform = new Transform(position, scale, angle);
            expect(transform.Matrix3D()).toEqual(expected);
        });
});

describe("Transform - Matrix4D", () => {
    type TestTuple = [string, Matrix4D, Vector, Vector, number];
    test.each<TestTuple>([
            [
                "Unchanged", 
                new Matrix4D([
                    [1,0,0,0],
                    [0,1,0,0],
                    [0,0,0,0],
                    [0,0,0,1]
                ]),
                new Vector(0, 0),
                new Vector(1, 1),
                0,
            ],
            [
                "Up 3, 180 degrees rotated, scale by 2", 
                new Matrix4D([
                    [-2,-2.4492935982947064e-16,0,0],
                    [2.4492935982947064e-16,-2,0,0],
                    [0,0,0,0],
                    [0,3,0,1]
                ]),
                new Vector(0, 3),
                new Vector(2, 2),
                Math.PI,
            ]
        ])("%p", (description: string, expected: Matrix4D, position: Vector, scale: Vector, angle: number) => {
            const transform = new Transform(position, scale, angle);
            expect(transform.Matrix4D()).toEqual(expected);
        });
});

describe("Transform - InterpolatedMatrix4D", () => {
    type TestTuple = [string, Matrix4D, Vector, Vector, number, Vector, number];
    test.each<TestTuple>([
            [
                "Unchanged", 
                new Matrix4D([
                    [1,0,0,0],
                    [0,1,0,0],
                    [0,0,0,0],
                    [0,0,0,1]
                ]),
                new Vector(0, 0),
                new Vector(1, 1),
                0,
                new Vector(0, 0),
                0.5,
            ],
            [
                "Up 3, 180 degrees rotated, scale by 2", 
                new Matrix4D([
                    [-2,-2.4492935982947064e-16,0,0],
                    [2.4492935982947064e-16,-2,0,0],
                    [0,0,0,0],
                    [0,1.5,0,1]
                ]),
                new Vector(0, 3),
                new Vector(2, 2),
                Math.PI,
                new Vector(0, 0),
                0.5,
            ]
        ])("%p", (description: string, expected: Matrix4D, position: Vector, scale: Vector, angle: number, previous: Vector, alpha: number) => {
            const transform = new Transform(position, scale, angle);
            transform.previous = previous;
            expect(transform.InterpolatedMatrix4D(alpha)).toEqual(expected);
        });
});