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

import IEntity from "../../entity/ientity";
import CollisionInfo from "./collision_info";

/**
 * Collision represents a collision between two entities, and all information
 * about the collision.
 */
class Collision {
    public a: IEntity;
    public b: IEntity;
    public info: CollisionInfo;

    constructor(a: IEntity, b: IEntity, info: CollisionInfo) {
        this.a = a;
        this.b = b;
        this.info = info;
    }
}

export default Collision;
