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

import Color from "./color";

describe("Color - GetTuple", () => {
    type TestTuple = [string, [number, number, number, number], Color];
    test.each<TestTuple>([
        [
            "Get RGBA (1,0,1,0)",
            [1,0,1,0],
            new Color(1,0,1,0)
        ],
        [
            "Get RGBA (1,0,1,1) (no alpha provided)",
            [1,0,1,1],
            new Color(1,0,1)
        ],
        [
            "Get RGBA (0.2,0.5,0.32,0.243)",
            [0.2,0.5,0.32,0.243],
            new Color(0.2,0.5,0.32,0.243)
        ],
    ])("%p", (description: string, expected: [number, number, number, number], color: Color) => {
        expect(color.GetTuple()).toEqual(expected);
    });
});

describe("Color - Mix", () => {
    type TestTuple = [string, Color, Color, Color];
    test.each<TestTuple>([
        [
            "Mix red and blue",
            new Color(0.5,0,0.5,0),
            new Color(1,0,0,0),
            new Color(0,0,1,0)
        ],
        [
            "Mix red and green",
            new Color(0.5,0.5,0,0),
            new Color(1,0,0,0),
            new Color(0,1,0,0)
        ],
    ])("%p", (description: string, expected: Color, color: Color, other: Color) => {
        expect(color.Mix(other)).toEqual(expected);
    });
});