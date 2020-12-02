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

import Component from "../../component/component";
import Vector from "../../geometry/vector";
import Material from "../../rendering/material/material";
import AABB from "../../shape/aabb";

/**
 * Sprite is a component for storing information around a sprite
 * and how it should be drawn. Contains information around the
 * colour to use if no texture is provided and the z order for
 * deciding which order to draw the sprite in.
 * Can contain texture information such as bounds and a texture.
 */
class Sprite extends Component {
    /**
     * Key of the sprite component.
     */
    public static readonly KEY = "sprite";
    /**
     * Order which the sprite should appear, if it should appear infront/behind other
     * objects, the higher the value the more precedence it is given and will
     * appear in front of objects with a lower value.
     */
    public zOrder: number;
    /**
     * Material to apply when rendering the Sprite.
     */
    public material: Material;

    public transformedShape: AABB;

    constructor(material: Material, zOrder = 0) {
        super(Sprite.KEY);
        this.material = material;
        this.zOrder = zOrder;
        this.transformedShape = new AABB(Vector.New(1, 1));
    }

    public Free(): void {
        this.material.Free();
    }
}

export default Sprite;
