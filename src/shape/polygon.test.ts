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

import Vector from "../geometry/vector";
import Polygon from "./polygon";
import Transform from "../standard/transform/transform";
import Matrix4D from "../geometry/matrix_4d";

describe("Polygon - FarthestPointInDirection", () => {
    type TestTuple = [string, Vector, Polygon, Vector];
    test.each<TestTuple>([
        [
            "No points",
            new Vector(0, 0),
            new Polygon([]),
            new Vector(1, 0)
        ],
        [
            "Triangle, most upwards point",
            new Vector(0, 1),
            new Polygon([
                new Vector(-1, -1),
                new Vector(1, -1),
                new Vector(0, 1)
            ]),
            new Vector(0, 1)
        ],
        [
            "Triangle, most right point",
            new Vector(1, -1),
            new Polygon([
                new Vector(-1, -1),
                new Vector(1, -1),
                new Vector(0, 1)
            ]),
            new Vector(1, 0)
        ],
        [
            "Triangle, most left point",
            new Vector(-1, -1),
            new Polygon([
                new Vector(-1, -1),
                new Vector(1, -1),
                new Vector(0, 1)
            ]),
            new Vector(-1, 0)
        ],
    ])("%p", (description: string, expected: Vector, polygon: Polygon, direction: Vector) => {
        expect(polygon.FarthestPointInDirection(direction)).toEqual(expected);
    });
});

describe("Polygon - Transform", () => {
    type TestTuple = [string, Polygon, Polygon, Transform];
    test.each<TestTuple>([
        [
            "No points",
            new Polygon([]),
            new Polygon([]),
            new Transform(
                new Vector(0, 2),
                new Vector(3,3),
                Math.PI
            )
        ],
        [
            "Square, move up by 2",
            new Polygon([
                new Vector(1, 3),
                new Vector(1, 1),
                new Vector(-1, 1),
                new Vector(-1, 3),
            ]),
            new Polygon([
                new Vector(1, 1),
                new Vector(1, -1),
                new Vector(-1, -1),
                new Vector(-1, 1),
            ]),
            new Transform(
                new Vector(0, 2),
                new Vector(1,1),
                0
            )
        ],
    ])("%p", (description: string, expected: Polygon, polygon: Polygon, transform: Transform) => {
        expect(polygon.Transform(transform)).toEqual(expected);
    });
});

describe("Polygon - PointInside", () => {
    type TestTuple = [string, boolean, Polygon, Vector];
    test.each<TestTuple>([
        [
            "No points",
            false,
            new Polygon([]),
            new Vector(0,0)
        ],
        [
            "Rectangle around origin, point above",
            false,
            Polygon.RectangleByDimensions(2,2),
            new Vector(0,3)
        ],
        [
            "Rectangle around origin, point below",
            false,
            Polygon.RectangleByDimensions(2,2),
            new Vector(0,-3)
        ],
        [
            "Rectangle around origin, point left",
            false,
            Polygon.RectangleByDimensions(2,2),
            new Vector(-3,0)
        ],
        [
            "Rectangle around origin, point right",
            false,
            Polygon.RectangleByDimensions(2,2),
            new Vector(3,0)
        ],
        [
            "Rectangle around origin, point within",
            true,
            Polygon.RectangleByDimensions(2,2),
            new Vector(0,0)
        ],
        [
            "Rectangle around origin, point outside",
            false,
            Polygon.RectangleByDimensions(2,2),
            new Vector(5,3)
        ],
        [
            "Rectangle around arbitrary point, point within",
            true,
            Polygon.RectangleByDimensions(2,2).Transform(new Transform(new Vector(5,3))),
            new Vector(5,4)
        ],
        [
            "Rectangle around arbitrary point, point outside",
            false,
            Polygon.RectangleByDimensions(2,2).Transform(new Transform(new Vector(5,3))),
            new Vector(2,1)
        ],
    ])("%p", (description: string, expected: boolean, polygon: Polygon, point: Vector) => {
        expect(polygon.PointInside(point)).toEqual(expected);
    });
});

describe("Polygon - GetFloat32Array", () => {
    type TestTuple = [string, Float32Array, Polygon];
    test.each<TestTuple>([
        [
            "No points",
            new Float32Array([]),
            new Polygon([])
        ],
        [
            "Triangle",
            new Float32Array([-1, -1, 1, -1, 0, 1]),
            new Polygon([
                new Vector(-1, -1),
                new Vector(1, -1),
                new Vector(0, 1)
            ]),
        ],
    ])("%p", (description: string, expected: Float32Array, polygon: Polygon) => {
        expect(polygon.GetFloat32Array()).toEqual(expected);
    });
});

describe("Polygon - Center", () => {
    type TestTuple = [string, Vector, Polygon];
    test.each<TestTuple>([
        [
            "No points",
            new Vector(NaN,NaN),
            new Polygon([])
        ],
        [
            "Square around origin",
            new Vector(0,0),
            Polygon.RectangleByDimensions(1, 1, new Vector(0,0))
        ],
        [
            "Rectangle around origin",
            new Vector(0,0),
            Polygon.RectangleByDimensions(10, 1, new Vector(0,0))
        ],
        [
            "Rectangle around point",
            new Vector(10,5),
            Polygon.RectangleByDimensions(10, 3, new Vector(10,5))
        ],
    ])("%p", (description: string, expected: Vector, polygon: Polygon) => {
        expect(polygon.Center()).toEqual(expected);
    });
});

describe("Polygon - Apply4D", () => {
    type TestTuple = [string, Polygon, Polygon, Matrix4D];
    test.each<TestTuple>([
        [
            "No points",
            new Polygon([]),
            new Polygon([]),
            new Matrix4D()
        ],
        [
            "Square, move up 3, scale 2",
            Polygon.RectangleByDimensions(2, 2, new Vector(0,3)),
            Polygon.RectangleByDimensions(1, 1, new Vector(0,0)),
            ((): Matrix4D => {
                const mat = new Matrix4D();
                mat.Translate(new Vector(0,3));
                mat.Scale(new Vector(2,2));
                return mat;
            })()
        ],
    ])("%p", (description: string, expected: Polygon, polygon: Polygon, matrix: Matrix4D) => {
        expect(polygon.Apply4D(matrix)).toEqual(expected);
    });
});

describe("Polygon - RectangleByDimensions", () => {
    type TestTuple = [string, Polygon, number, number];
    test.each<TestTuple>([
        [
            "0*0 rectangle",
            new Polygon([
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
            ]),
            0,
            0
        ],
        [
            "2*2 square",
            new Polygon([
                new Vector(-1,1),
                new Vector(1,1),
                new Vector(1,-1),
                new Vector(-1,-1),
            ]),
            2,
            2
        ],
        [
            "3*2 rectangle",
            new Polygon([
                new Vector(-1.5,1),
                new Vector(1.5,1),
                new Vector(1.5,-1),
                new Vector(-1.5,-1),
            ]),
            3,
            2
        ],
    ])("%p", (description: string, expected: Polygon, width: number, height: number) => {
        expect(Polygon.RectangleByDimensions(width, height)).toEqual(expected);
    });
});

describe("Polygon - RectangleByPoints", () => {
    type TestTuple = [string, Polygon, Vector, Vector];
    test.each<TestTuple>([
        [
            "0,0 to 1,1 rectangle",
            new Polygon([
                new Vector(0,0),
                new Vector(1,0),
                new Vector(1,1),
                new Vector(0,1),
            ]),
            new Vector(0,0),
            new Vector(1,1)
        ],
        [
            "0,0 to 5,5 rectangle",
            new Polygon([
                new Vector(0,0),
                new Vector(5,0),
                new Vector(5,5),
                new Vector(0,5),
            ]),
            new Vector(0,0),
            new Vector(5,5)
        ],
        [
            "2,3 to 10,9 rectangle",
            new Polygon([
                new Vector(2,3),
                new Vector(10,3),
                new Vector(10,9),
                new Vector(2,9),
            ]),
            new Vector(2,3),
            new Vector(10,9)
        ],
        [
            "0,0 to 0,0 rectangle",
            new Polygon([
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
            ]),
            new Vector(0,0),
            new Vector(0,0)
        ],
    ])("%p", (description: string, expected: Polygon, bottomLeft: Vector, topRight: Vector) => {
        expect(Polygon.RectangleByPoints(bottomLeft, topRight)).toEqual(expected);
    });
});

describe("Polygon - QuadByDimensions", () => {
    type TestTuple = [string, Polygon, number, number, Vector | undefined];
    test.each<TestTuple>([
        [
            "0*0",
            new Polygon([
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
            ]),
            0,
            0,
            undefined
        ],
        [
            "2*2",
            new Polygon([
                new Vector(1, -1),  // bottom right
                new Vector(-1, -1), // bottom left
                new Vector(-1, 1),  // top left

                new Vector(-1, 1),  // top left
                new Vector(1, 1),   // top right
                new Vector(1, -1),  // bottom right
            ]),
            2,
            2,
            undefined
        ],
        [
            "3*2",
            new Polygon([
                new Vector(1.5, -1),  // bottom right
                new Vector(-1.5, -1), // bottom left
                new Vector(-1.5, 1),  // top left

                new Vector(-1.5, 1),  // top left
                new Vector(1.5, 1),   // top right
                new Vector(1.5, -1),  // bottom right
            ]),
            3,
            2,
            undefined
        ],
        [
            "2*2 around (4,4)",
            new Polygon([
                new Vector(5, 3), // bottom right
                new Vector(3, 3), // bottom left
                new Vector(3, 5), // top left

                new Vector(3, 5), // top left
                new Vector(5, 5), // top right
                new Vector(5, 3), // bottom right
            ]),
            2,
            2,
            new Vector(4,4)
        ],
    ])("%p", (description: string, expected: Polygon, width: number, height: number, origin: Vector | undefined) => {
        expect(Polygon.QuadByDimensions(width, height, origin)).toEqual(expected);
    });
});

describe("Polygon - QuadByPoints", () => {
    type TestTuple = [string, Polygon, Vector, Vector];
    test.each<TestTuple>([
        [
            "0,0 to 1,1",
            new Polygon([
                new Vector(1, 0), // bottom right
                new Vector(0, 0), // bottom left
                new Vector(0, 1), // top left

                new Vector(0, 1), // top left
                new Vector(1, 1), // top right
                new Vector(1, 0), // bottom right
            ]),
            new Vector(0,0),
            new Vector(1,1)
        ],
        [
            "0,0 to 5,5",
            new Polygon([
                new Vector(5, 0), // bottom right
                new Vector(0, 0), // bottom left
                new Vector(0, 5), // top left

                new Vector(0, 5), // top left
                new Vector(5, 5), // top right
                new Vector(5, 0), // bottom right
            ]),
            new Vector(0,0),
            new Vector(5,5)
        ],
        [
            "2,3 to 10,9",
            new Polygon([
                new Vector(10, 3), // bottom right
                new Vector(2, 3), // bottom left
                new Vector(2, 9), // top left

                new Vector(2, 9), // top left
                new Vector(10, 9), // top right
                new Vector(10, 3), // bottom right
            ]),
            new Vector(2,3),
            new Vector(10,9)
        ],
        [
            "0,0 to 0,0",
            new Polygon([
                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),

                new Vector(0,0),
                new Vector(0,0),
                new Vector(0,0),
            ]),
            new Vector(0,0),
            new Vector(0,0)
        ],
    ])("%p", (description: string, expected: Polygon, bottomLeft: Vector, topRight: Vector) => {
        expect(Polygon.QuadByPoints(bottomLeft, topRight)).toEqual(expected);
    });
});
