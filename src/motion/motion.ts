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

import Component from "../component/component";
import Vector from "../geometry/vector";

class Motion extends Component {
    static readonly KEY = "motion";
    public velocity: Vector;
    public acceleration: Vector;
    public angularVelocity: number;
    public angularAcceleration: number;

    constructor(velocity = new Vector(0,0), acceleration = new Vector(0,0), angularVelocity = 0, angularAcceleration = 0) {
        super(Motion.KEY);
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.angularVelocity = angularVelocity;
        this.angularAcceleration = angularAcceleration;
    }
}

export default Motion;