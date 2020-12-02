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

import Matrix4D from "../../geometry/matrix_4d";
import Camera from "./camera";
import Color from "../../rendering/color";
import Vector from "../../geometry/vector";

describe("Camera - GetProjectionMatrix", () => {
    type TestTuple = [string, Matrix4D, Camera];
    test.each<TestTuple>([
        [
            "Test orthographic, default camera",
            new Matrix4D().Set([
                [0.0125, 0, 0, 0],
                [0, 0.022222222222222223, 0, 0],
                [0, 0, -0.02, 0],
                [-0, -0, -1, 1],
            ]),
            new Camera(),
        ],
        [
            "Test orthographic projection, modified camera",
            new Matrix4D().Set([
                [2, 0, 0, 0],
                [0, 2, 0, 0],
                [0, 0, -0.02, 0],
                [-0, -0, -1, 1],
            ]),
            new Camera(new Color(1, 0, 0), new Vector(0, 0), new Vector(1, 1), new Vector(1, 1)),
        ],
    ])("%p", (description: string, expected: Matrix4D, camera: Camera) => {
        expect(camera.GetProjectionMatrix()).toEqual(expected);
    });
});
