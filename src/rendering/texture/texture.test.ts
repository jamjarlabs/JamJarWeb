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

import Polygon from "../../shape/polygon";
import Texture from "./texture";
import Vector from "../../geometry/vector";

describe("Texture - GenerateSpritesheetIndex", () => {
    type TestTuple = [string, Polygon[], number, number];
    test.each<TestTuple>([
        ["1 x 1 sprite sheet", [Polygon.QuadByPoints(new Vector(0, 0), new Vector(1, 1))], 1, 1],
        [
            "2 x 2 sprite sheet",
            [
                Polygon.QuadByPoints(new Vector(0, 0.5), new Vector(0.5, 1)),
                Polygon.QuadByPoints(new Vector(0.5, 0.5), new Vector(1, 1)),
                Polygon.QuadByPoints(new Vector(0, 0), new Vector(0.5, 0.5)),
                Polygon.QuadByPoints(new Vector(0.5, 0), new Vector(1, 0.5)),
            ],
            2,
            2,
        ],
        [
            "3 x 2 sprite sheet",
            [
                Polygon.QuadByPoints(new Vector(0, 0.5), new Vector(0.5, 1)),
                Polygon.QuadByPoints(new Vector(0.5, 0.5), new Vector(1, 1)),
                Polygon.QuadByPoints(new Vector(0, 0), new Vector(0.5, 0.5)),
                Polygon.QuadByPoints(new Vector(0.5, 0), new Vector(1, 0.5)),
            ],
            2,
            2,
        ],
    ])("%p", (description: string, expected: Polygon[], rowCount: number, columnCount: number) => {
        expect(Texture.GenerateSpritesheetIndex(rowCount, columnCount)).toEqual(expected);
    });
});
