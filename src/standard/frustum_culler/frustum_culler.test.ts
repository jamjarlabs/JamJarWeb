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

import IShape from "../../shape/ishape";
import FrustumCuller from "./frustum_culler";
import Polygon from "../../shape/polygon";
import AllCollideAlgorithm from "../collision/algorithm/all_collide_algorithm";
import NoneCollideAlgorithm from "../collision/algorithm/none_collide_algorithm";

describe("FrustumCuller - Cull", () => {
    type TestTuple = [string, boolean, IShape, IShape, FrustumCuller];
    test.each<TestTuple>([
        [
            "Narrow algorithm within frustum - don't cull",
            false,
            Polygon.RectangleByDimensions(1, 1),
            Polygon.RectangleByDimensions(1, 1),
            new FrustumCuller(new AllCollideAlgorithm()),
        ],
        [
            "Narrow algorithm outside frustum - cull",
            true,
            Polygon.RectangleByDimensions(1, 1),
            Polygon.RectangleByDimensions(1, 1),
            new FrustumCuller(new NoneCollideAlgorithm()),
        ],
    ])(
        "%p",
        (description: string, expected: boolean, frustumPlaneShape: IShape, shape: IShape, culler: FrustumCuller) => {
            expect(culler.Cull(frustumPlaneShape, shape)).toEqual(expected);
        }
    );
});
