/*
Copyright 2019 JamJar Authors

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
 * Color represents an RGBA color.
 * Values from 0 to 1.
 */
class Color {
    public data: Float32Array;

    constructor(red: number, green: number, blue: number, alpha = 1) {
        this.data = new Float32Array(4);
        this.data[0] = red;
        this.data[1] = green;
        this.data[2] = blue;
        this.data[3] = alpha;
    }

    get red(): number {
        return this.data[0];
    }

    set red(value: number) {
        this.data[0] = value;
    }

    get green(): number {
        return this.data[1];
    }

    set green(value: number) {
        this.data[1] = value;
    }

    get blue(): number {
        return this.data[2];
    }

    set blue(value: number) {
        this.data[2] = value;
    }

    get alpha(): number {
        return this.data[3];
    }

    set alpha(value: number) {
        this.data[3] = value;
    }

    /**
     * Make a value copy of the color.
     */
    public Copy(): Color {
        return new Color(this.red, this.green, this.blue, this.alpha);
    }

    public GetFloat32Array(): Float32Array {
        return this.data;
    }

    /**
     * Mixes two colors together.
     * @param {Color} color The color to mix with this one
     * @returns {Color} The mixed color
     */
    public Mix(color: Color): Color {
        return new Color(
            (color.red + this.red) / 2,
            (color.green + this.green) / 2,
            (color.blue + this.blue) / 2,
            (color.alpha + this.alpha) / 2
        );
    }
}

export default Color;
