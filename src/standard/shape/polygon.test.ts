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
import Polygon from "./polygon";
import Transform from "../transform/transform";

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
        expect(polygon.FarthestPointInDirection(direction)).toEqual(expected)
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
        expect(polygon.Transform(transform)).toEqual(expected)
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
            Polygon.Rectangle(2,2),
            new Vector(0,3)
        ],
        [
            "Rectangle around origin, point below",
            false,
            Polygon.Rectangle(2,2),
            new Vector(0,-3)
        ],
        [
            "Rectangle around origin, point left",
            false,
            Polygon.Rectangle(2,2),
            new Vector(-3,0)
        ],
        [
            "Rectangle around origin, point right",
            false,
            Polygon.Rectangle(2,2),
            new Vector(3,0)
        ],
        [
            "Rectangle around origin, point within",
            true,
            Polygon.Rectangle(2,2),
            new Vector(0,0)
        ],
        [
            "Rectangle around origin, point outside",
            false,
            Polygon.Rectangle(2,2),
            new Vector(5,3)
        ],
        [
            "Rectangle around arbitrary point, point within",
            true,
            Polygon.Rectangle(2,2).Transform(new Transform(new Vector(5,3))),
            new Vector(5,4)
        ],
        [
            "Rectangle around arbitrary point, point outside",
            false,
            Polygon.Rectangle(2,2).Transform(new Transform(new Vector(5,3))),
            new Vector(2,1)
        ],
    ])("%p", (description: string, expected: boolean, polygon: Polygon, point: Vector) => {
        expect(polygon.PointInside(point)).toEqual(expected)
    });
});

describe("Polygon - GetArray", () => {
    type TestTuple = [string, number[], Polygon];
    test.each<TestTuple>([
        [
            "No points",
            [],
            new Polygon([])
        ],
        [
            "Triangle",
            [-1, -1, 1, -1, 0, 1],
            new Polygon([
                new Vector(-1, -1),
                new Vector(1, -1),
                new Vector(0, 1)
            ]),
        ],
    ])("%p", (description: string, expected: number[], polygon: Polygon) => {
        expect(polygon.GetArray()).toEqual(expected)
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
        expect(polygon.GetFloat32Array()).toEqual(expected)
    });
});

describe("Polygon - Rectangle", () => {
    type TestTuple = [string, Polygon, number, number];
    test.each<TestTuple>([
        [
            "0*0 rectangle",
            new Polygon([
                new Vector(-0,0),
                new Vector(0,0),
                new Vector(0,-0),
                new Vector(-0,-0),
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
        expect(Polygon.Rectangle(width, height)).toEqual(expected)
    });
});