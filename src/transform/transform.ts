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
import Matrix3D from "../geometry/matrix_3d";
import Matrix4D from "../geometry/matrix_4d";

class Transform extends Component {
    public static readonly KEY = "transform";
    public previous: Vector;
    public position: Vector;
    public scale: Vector;
    public angle: number;

    constructor(position = new Vector(0,0), scale = new Vector(1,1), angle = 0) {
        super(Transform.KEY);
        this.previous = position;
        this.position = position;
        this.scale = scale;
        this.angle = angle;
    }

    public Matrix3D(): Matrix3D {
        const matrix = new Matrix3D();
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        matrix.Translate(this.position);
        return matrix;
    }

    public Matrix4D(): Matrix4D {
        const matrix = new Matrix4D();
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        matrix.Translate(this.position);
        return matrix;
    }

    public InterpolatedMatrix4D(alpha: number): Matrix4D {
        const matrix = new Matrix4D();
        matrix.Rotate(this.angle);
        matrix.Scale(this.scale);
        matrix.Translate(new Vector(
			this.previous.x * alpha + this.position.x * (1 - alpha),
			this.previous.y * alpha + this.position.y * (1 - alpha)
		));
        return matrix;
    }
}

export default Transform;