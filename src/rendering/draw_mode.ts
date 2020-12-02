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
 * DrawMode represents available draw modes for rendering, changes how render
 * systems interpret how to render renderables.
 */
enum DrawMode {
    /**
     * Each vertex is interpreted as a point.
     */
    POINTS = 0,
    /**
     * Every pair of vertices are treated as a line, pairs are not continous,
     * e.g. in ABCD A-B are a pair and connected, C-D are a pair and connected,
     * B C are NOT a pair and connected.
     */
    LINES = 1,
    /**
     * The vertices make up a singular line that moves from point to point
     * continously, e.g. in ABCD A-B are connected, B-C are connected, C-D are
     * connected.
     */
    LINE_STRIP = 2,
    /**
     * Every 3 vertices make up a triangle, triangles are not continous, e.g in
     * ABCDEF A-B-C make up a triangle, D-E-F make up a triangle, A-B-C and
     * D-E-F are not connected.
     */
    TRIANGLES = 3,
    /**
     * Every group of 3 adjacent vertices forms a triangle, with the face
     * direction of the strip determined by the winding of the first triangle.
     * Each successive triangle will have its effective face order reversed.
     */
    TRIANGLE_STRIP = 4,
}

export default DrawMode;
