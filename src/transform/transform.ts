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
import Matrix from "../geometry/matrix";

class Transform extends Component {
    public static readonly KEY = "transform";
    public position: Vector;
    public scale: Vector;
    public angle: number;

    constructor(position = new Vector(0,0), scale = new Vector(1,1), angle = 0) {
        super(Transform.KEY);
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }

    public Matrix(): Matrix {
        const matrix = new Matrix();
        matrix.Scale(this.scale);
        matrix.Rotate(this.angle);
        matrix.Translate(this.position);
        return matrix;
    }
}

export default Transform;