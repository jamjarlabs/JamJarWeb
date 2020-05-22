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

import IShape from "../../../shape/ishape";
import GJKAlgorithm from "./gjk_algorithm";
import CollisionInfo from "../collision_info";
import Polygon from "../../../shape/polygon";
import Vector from "../../../geometry/vector";
import Ellipse from "../../../shape/ellipse";

describe("GJKAlgorithm - CalculateCollision", () => {
    type TestTuple = [string, CollisionInfo | undefined, IShape, IShape, GJKAlgorithm];
    test.each<TestTuple>([
        [
            "Squares, no collision",
            undefined,
            Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
            Polygon.RectangleByDimensions(1, 1, new Vector(3, 3)),
            new GJKAlgorithm()
        ],
        [
            "Squares, collision",
            new CollisionInfo(
                Polygon.RectangleByDimensions(3, 3, new Vector(0, 0)),
                Polygon.RectangleByDimensions(3, 3, new Vector(1, 1))
            ),
            Polygon.RectangleByDimensions(3, 3, new Vector(0, 0)),
            Polygon.RectangleByDimensions(3, 3, new Vector(1, 1)),
            new GJKAlgorithm()
        ],
        [
            "Squares, edge no collision",
            undefined,
            Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
            Polygon.RectangleByDimensions(1, 1, new Vector(1, 1)),
            new GJKAlgorithm()
        ],
        [
            "Squares, edge collision",
            new CollisionInfo(
                Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
                Polygon.RectangleByDimensions(1, 1, new Vector(0.999, 0.999))
            ),
            Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
            Polygon.RectangleByDimensions(1, 1, new Vector(0.999, 0.999)),
            new GJKAlgorithm()
        ],
        [
            "Ellipse and rectangle, no collision",
            undefined,
            Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
            Ellipse.Circle(2, new Vector(5, 5)),
            new GJKAlgorithm()
        ],
        [
            "Ellipse and rectangle, collision",
            new CollisionInfo(
                Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
                Ellipse.Circle(2, new Vector(-1, 0)),
            ),
            Polygon.RectangleByDimensions(1, 1, new Vector(0, 0)),
            Ellipse.Circle(2, new Vector(-1, 0)),
            new GJKAlgorithm()
        ],
    ])("%p", (description: string, expected: CollisionInfo | undefined, a: IShape, b: IShape, algorithm: GJKAlgorithm) => {
        expect(algorithm.CalculateCollision(a, b)).toEqual(expected);
    });
});