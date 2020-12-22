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

import Component from "../../component/component";
import IEntity from "../../entity/ientity";
import IShape from "../../shape/ishape";

/**
 * Collider is a component that defines a shape for detecting collisions
 * with other Colliders.
 */
class Collider extends Component {
    public static readonly KEY = "collider";
    public shape: IShape;
    public enterScript?: string;
    public exitScript?: string;
    public currentlyCollidingWith: IEntity[];

    constructor(shape: IShape, enterScript?: string, exitScript?: string, currentlyCollidingWith: IEntity[] = []) {
        super(Collider.KEY);
        this.shape = shape;
        this.enterScript = enterScript;
        this.exitScript = exitScript;
        this.currentlyCollidingWith = currentlyCollidingWith;
    }

    public Free(): void {
        this.currentlyCollidingWith.length = 0;
        this.shape.Free();
    }
}

export default Collider;
