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
import Ellipse from "./ellipse";
import Transform from "../standard/transform/transform";

describe("Ellipse - FarthestPointInDirection", () => {
    type TestTuple = [string, Vector, Ellipse, Vector];
    test.each<TestTuple>([
        [
            "Circle, most upwards point",
            new Vector(0, 1),
            new Ellipse(new Vector(1, 1), 0, new Vector(0, 0)),
            new Vector(0, 1)
        ],
        [
            "Circle, top right point",
            new Vector(0.7071067811865476, 0.7071067811865475),
            new Ellipse(new Vector(1, 1), 0, new Vector(0, 0)),
            new Vector(1, 1)
        ],
        [
            "Oval, right point",
            new Vector(4, 0),
            new Ellipse(new Vector(4, 2), 0, new Vector(0, 0)),
            new Vector(1, 0)
        ],
        [
            "Oval, rotated 45 degrees, right point",
            new Vector(1.4142135623730954, 0),
            new Ellipse(new Vector(4, 2), Math.PI / 4, new Vector(0, 0)),
            new Vector(1, 0)
        ],
    ])("%p", (description: string, expected: Vector, ellipse: Ellipse, direction: Vector) => {
        const result = ellipse.FarthestPointInDirection(direction);
        expect(result.x).toBeCloseTo(expected.x, 5);
        expect(result.y).toBeCloseTo(expected.y, 5);
    });
});

describe("Ellipse - Transform", () => {
    type TestTuple = [string, Ellipse, Ellipse, Transform];
    test.each<TestTuple>([
        [
            "Scale circle by 5",
            new Ellipse(new Vector(10, 10), 0, new Vector(0, 0)),
            new Ellipse(new Vector(2, 2), 0, new Vector(0, 0)),
            new Transform(new Vector(0, 0), new Vector(5, 5))
        ],
        [
            "Translate circle up 3, left 2",
            new Ellipse(new Vector(2, 2), 0, new Vector(3, -2)),
            new Ellipse(new Vector(2, 2), 0, new Vector(0, 0)),
            new Transform(new Vector(3, -2), new Vector(1, 1))
        ],
        [
            "Rotate oval by 45 degrees",
            new Ellipse(new Vector(2, 4), Math.PI / 4, new Vector(0, 0)),
            new Ellipse(new Vector(2, 4), 0, new Vector(0, 0)),
            new Transform(new Vector(0, 0), new Vector(1, 1), Math.PI / 4)
        ],
        [
            "Scale, Translate and Rotate oval by (2,3), (-3,10), and 45 degrees",
            new Ellipse(new Vector(4, 12), Math.PI / 4, new Vector(8.31370849898476, 7.171572875253811)),
            new Ellipse(new Vector(2, 4), 0, new Vector(5, 2)),
            new Transform(new Vector(-3, 10), new Vector(2, 3), Math.PI / 4)
        ],
    ])("%p", (description: string, expected: Ellipse, ellipse: Ellipse, transform: Transform) => {
        expect(ellipse.Transform(transform)).toEqual(expected);
    });
});

describe("Ellipse - PointInside", () => {
    type TestTuple = [string, boolean, Ellipse, Vector];
    test.each<TestTuple>([
        [
            "Circle around origin, point inside",
            true,
            new Ellipse(new Vector(1, 1), 0, new Vector(0, 0)),
            new Vector(0.2,0.2)
        ],
        [
            "Circle around origin, point outside",
            false,
            new Ellipse(new Vector(1, 1), 0, new Vector(0, 0)),
            new Vector(1.2,0.2)
        ],
        [
            "Circle around arbitrary point, point inside",
            true,
            new Ellipse(new Vector(1, 1), 0, new Vector(3, 2)),
            new Vector(2.9,2.3)
        ],
        [
            "Circle around arbitrary point, point outside",
            false,
            new Ellipse(new Vector(1, 1), 0, new Vector(5, 2)),
            new Vector(3,5)
        ],
    ])("%p", (description: string, expected: boolean, ellipse: Ellipse, point: Vector) => {
        expect(ellipse.PointInside(point)).toEqual(expected);
    });
});


describe("Polygon - Circle", () => {
    type TestTuple = [string, Ellipse, Ellipse];
    test.each<TestTuple>([
        [
            "2r circle around origin",
            new Ellipse(new Vector(2, 2), 0, new Vector(0, 0)),
            Ellipse.Circle(2, new Vector(0, 0))
        ],
    ])("%p", (description: string, expected: Ellipse, ellipse: Ellipse) => {
        expect(ellipse).toEqual(expected);
    });
});
