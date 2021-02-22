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

/**
 * CanvasResize provides utility functions for calculating resolutions and aspect ratios.
 */
module CanvasResize {
    /**
     * GetLargestResolutionForAspect calculates the largest resolution for an aspect ratio that will fit inside the
     * minimum and maximum resolutions.
     * @param ratio The aspect ratio to target.
     * @param maxWidth The maximum allowed width of the resolultion.
     * @param maxHeight The maximum allowed height of the resolution.
     */
    export function GetLargestResolutionForAspect(
        ratio: number,
        maxWidth: number,
        maxHeight: number
    ): [number, number] {
        const xWidth = maxWidth;
        const xHeight = maxWidth * (1 / ratio);

        const yWidth = maxHeight * ratio;
        const yHeight = maxHeight;

        if (xWidth > yWidth) {
            if (xHeight < maxHeight) {
                return [xWidth, Math.floor(xHeight)];
            }

            if (yWidth < maxWidth) {
                return [Math.floor(yWidth), yHeight];
            }
        }
        return [xWidth, Math.floor(xHeight)];
    }

    /**
     * GetClosestAspectRatioToResolution determines which aspect ratio is closest to the screen width and height. Allows
     * a list of aspect ratios to be provided, if none provided will use a default list of common aspect ratios.
     * @param screenWidth The width of the screen.
     * @param screenHeight The height of the screen.
     * @param ratios An optional list of ratios to pick from, if not provided will use a default list.
     */
    export function GetClosestAspectRatioToResolution(
        screenWidth: number,
        screenHeight: number,
        ratios: [number, number][] = [
            [21, 9],
            [16, 10],
            [16, 9],
            [4, 3],
            [1, 1],
            [9, 16],
        ]
    ): [number, number] {
        return ratios[0];
    }
}

export default CanvasResize;
