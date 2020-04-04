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
/**
 * TinySDF is a library for rendering fonts using canvas 2D and generating SDF
 * from browser fonts.
 * https://github.com/mapbox/tiny-sdf
 * LICENSE: BSD 2-Clause license
 * It does not have any types or bindings for typescript, so this module
 * augments it with those.
 */
declare module "tiny-sdf" {
    /**
     * TinySDF is a library for generating SDF image data from a font and characters.
     */
    export class TinySDF implements ISDFGenerator {
        constructor(fontSize?: number, buffer?: number, radius?: number, cutoff?: number, fontFamily?: string, fontWeight?: string)
        draw(char: string): ImageData
    }
    /**
     * An SDF generator, takes a character and produces image data.
     */
    export interface ISDFGenerator {
        draw(char: string): ImageData;
    }
    /**
     * SDFGeneratorFactory is a function that creates an SDF generator.
     */
    export type SDFGeneratorFactory = (fontSize?: number, buffer?: number, radius?: number, cutoff?: number, fontFamily?: string, fontWeight?: string) => ISDFGenerator;
}