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
import Vector from "../../geometry/vector";

/**
 * Texture is the mapping from an image that has been loaded, deciding
 * how the texture should be drawn and represented.
 */
class Texture {
    /**
     * Name of the image the texture refers to.
     */
    public image: string;
    /**
     * Mapping in points on the image.
     */
    public points: Polygon;

    constructor(image: string, points: Polygon = Polygon.QuadByPoints(new Vector(0,0), new Vector(1,1))) {
        this.image = image;
        this.points = points;
    }

    /**
     * Make a value copy of the texture.
     */
    public Copy(): Texture {
        return new Texture(
            this.image,
            this.points.Copy()
        );
    }

    /**
     * GenerateSpritesheetIndex generates an indexed array of shapes to access
     * each sprite in a sprite sheet. The sprite sheet must have all sprites the
     * same width, and height - empty sprite positions work.
     * The indexed sprite sheet operates from left to right, bottom to top.
     * For example, the following shows the indexes of each position in the
     * sprite sheet:
     * 
     * |---------|
     * | 0  1  2 |
     * | 3  4  5 |
     * | 6  7  8 |
     * |---------|
     * 
     * @param {number} rowCount - number of rows in the sprite sheet (vertically).
     * @param {number} columnCount - number of columns in the sprite sheet (horizontally).
     * @returns {Polygon[]} - An indexed array of shapes to access each sprite.
     */
    public static GenerateSpritesheetIndex(rowCount: number, columnCount: number): Polygon[] {
        const spriteSheetIndex: Polygon[] = [];

        // Determine width and height of each sprite relative to the width and
        // height of the spritesheet
        const spriteWidth = 1 / columnCount;
        const spriteHeight = 1 / rowCount;

        for (let i = rowCount - 1; i >= 0; i--) {
            for (let j = 0; j < columnCount; j++) {
                // Push each quad for sprite texture into the indexed sprite
                // sheet
                const xStart = j * spriteWidth;
                const yStart = i * spriteHeight;
                spriteSheetIndex.push(Polygon.QuadByPoints(
                    new Vector(xStart, yStart),
                    new Vector(xStart + spriteWidth, yStart + spriteHeight)
                ));
            }
        }
        return spriteSheetIndex;
    }
}

export default Texture;