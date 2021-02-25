/*
Copyright 2021 JamJar Authors

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

import CanvasResize from "./canvas_resize";

describe("CanvasResize - GetLargestResolutionForAspect", () => {
    type TestTuple = [string, [number, number], number, number, number];
    test.each<TestTuple>([
        ["16/9 - 1920x1920 max - return 1920x1080", [1920, 1080], 16 / 9, 1920, 1920],
        ["16/9 - 1920x100 max - return 177x100", [177, 100], 16 / 9, 1920, 100],
        ["16/9 - 100x1920 max - return 100x56", [100, 56], 16 / 9, 100, 1920],
        ["4/3 - 1000x1000 max - return 1000x750", [1000, 750], 4 / 3, 1000, 1000],
        ["3/4 - 1000x1000 max - return 750x1000", [750, 1000], 3 / 4, 1000, 1000],
    ])("%p", (description: string, expected: [number, number], ratio: number, maxWidth: number, maxHeight: number) => {
        expect(CanvasResize.GetLargestResolutionForAspect(ratio, maxWidth, maxHeight)).toEqual(expected);
    });
});

describe("CanvasResize - GetClosestAspectRatioToResolution", () => {
    type TestTuple = [string, [number, number], number, number, [number, number][] | undefined];
    test.each<TestTuple>([
        ["1920x1080, choose from default list 16/9", [16, 9], 1920, 1080, undefined],
        [
            "1920x1080, choose from defined list 16/9",
            [16, 9],
            1920,
            1080,
            [
                [16, 9],
                [16, 10],
                [16, 8],
                [4, 3],
                [1, 1],
            ],
        ],
        [
            "50x50, no exact match, pick 2/1",
            [2, 1],
            50,
            50,
            [
                [5, 1],
                [4, 1],
                [3, 1],
                [2, 1],
            ],
        ],
    ])(
        "%p",
        (
            description: string,
            expected: [number, number],
            screenWidth: number,
            screenHeight: number,
            ratios: [number, number][] | undefined
        ) => {
            expect(CanvasResize.GetClosestAspectRatioToResolution(screenWidth, screenHeight, ratios)).toEqual(expected);
        }
    );
});
