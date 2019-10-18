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
import Matrix from "./matrix";


class Vector {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public Apply(matrix: Matrix): Vector {
        return new Vector(
            matrix.values[0][0] * this.x + matrix.values[1][0] * this.y + matrix.values[2][0],
            matrix.values[0][1] * this.x + matrix.values[1][1] * this.y + matrix.values[2][1]
        );
    }

    public Add(vector: Vector): Vector {
        return new Vector(
            this.x + vector.x,
            this.y + vector.y
        );
    }

    public Sub(vector: Vector): Vector {
        return new Vector(
            this.x - vector.x,
            this.y - vector.y
        );
    }

    public Scale(scalar: number): Vector {
        return new Vector(
            this.x * scalar,
            this.y * scalar
        );
    }

    public Dot(vector: Vector): number {
        return this.x * vector.x + this.y * vector.y;
    }

    public Invert(): Vector {
        return new Vector(
            -this.x,
            -this.y
        );
    }
}

export default Vector;