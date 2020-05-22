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

    constructor(image: string, points: Polygon) {
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
}

export default Texture;