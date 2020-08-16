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
import AABB from "./aabb";
import Transform from "../standard/transform/transform";

describe("AABB - FarthestPointInDirection", () => {
    type TestTuple = [string, Vector, AABB, Vector];
    test.each<TestTuple>([
        [
            "Square - up - top left point",
            new Vector(-1.5,1.5),
            new AABB(new Vector(3,3)),
            new Vector(0, 1)
        ],
        [
            "Square - down - bottom left point",
            new Vector(-1.5,-1.5),
            new AABB(new Vector(3,3)),
            new Vector(0, -1)
        ],
        [
            "Square - left - top left point",
            new Vector(-1.5,1.5),
            new AABB(new Vector(3,3)),
            new Vector(-1, 0)
        ],
        [
            "Square - right - top right point",
            new Vector(1.5,1.5),
            new AABB(new Vector(3,3)),
            new Vector(1, 0)
        ],
    ])("%p", (description: string, expected: Vector, aabb: AABB, direction: Vector) => {
        const result = aabb.FarthestPointInDirection(direction);
        expect(result.x).toBeCloseTo(expected.x, 5);
        expect(result.y).toBeCloseTo(expected.y, 5);
    });
});


describe("AABB - Transform", () => {
    type TestTuple = [string, AABB, AABB, Transform];
    test.each<TestTuple>([
        [
            "Square, move up by 2",
            new AABB(new Vector(2,2), new Vector(0, 2)),
            new AABB(new Vector(2,2)),
            new Transform(new Vector(0, 2))
        ],
        [
            "Rectangle around point, move up by 5, left 8",
            new AABB(new Vector(2,6), new Vector(-5, 11)),
            new AABB(new Vector(2,6), new Vector(3,6)),
            new Transform(new Vector(-8, 5))
        ],
        [
            "Rectangle around point, move up by 5, left 8, scale by 2 width and 4 height, ignore rotation",
            new AABB(new Vector(4,12), new Vector(-5, 11)),
            new AABB(new Vector(2,3), new Vector(3,6)),
            new Transform(new Vector(-8, 5), new Vector(2, 4), 3)
        ],
    ])("%p", (description: string, expected: AABB, aabb: AABB, transform: Transform) => {
        expect(aabb.Transform(transform)).toEqual(expected);
    });
});

describe("AABB - PointInside", () => {
    type TestTuple = [string, boolean, AABB, Vector];
    test.each<TestTuple>([
        [
            "Square around origin, point inside",
            true,
            new AABB(new Vector(1, 1)),
            new Vector(0.2,0.2)
        ],
        [
            "Square around origin, point left",
            false,
            new AABB(new Vector(2, 2)),
            new Vector(-3,0)
        ],
        [
            "Square around origin, point right",
            false,
            new AABB(new Vector(2, 2)),
            new Vector(3,0)
        ],
        [
            "Rectangle around origin, point outside",
            false,
            new AABB(new Vector(2, 3)),
            new Vector(5,3)
        ],
        [
            "Rectangle around arbitrary point, point within",
            true,
            new AABB(new Vector(2, 3), new Vector(5,3)),
            new Vector(5,4)
        ],
        [
            "Rectangle around arbitrary point, point outside",
            false,
            new AABB(new Vector(2, 3), new Vector(5,3)),
            new Vector(2,1)
        ],

    ])("%p", (description: string, expected: boolean, aabb: AABB, point: Vector) => {
        expect(aabb.PointInside(point)).toEqual(expected);
    });
});


describe("AABB - Center", () => {
    type TestTuple = [string, Vector, AABB];
    test.each<TestTuple>([
        [
            "Rectangle around origin",
            new Vector(0,0),
            new AABB(new Vector(2, 6), new Vector(0,0))
        ],
        [
            "Rectangle around point",
            new Vector(5,-3),
            new AABB(new Vector(2, 3), new Vector(5,-3))
        ],
    ])("%p", (description: string, expected: Vector, aabb: AABB) => {
        expect(aabb.Center()).toEqual(expected);
    });
});
