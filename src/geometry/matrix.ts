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

import Vector from "./vector";

type MatrixValues = [
    [number, number, number],
    [number, number, number],
    [number, number, number]
]

class Matrix {

    public static readonly Identity: Matrix = new Matrix([
        [1,0,0],
        [0,1,0],
        [0,0,1],
    ]);

    public values: MatrixValues

    constructor(values?: MatrixValues) {
        if (values) {
            this.values = values;
        }
        else {
            this.values = [
                [1,0,0],
                [0,1,0],
                [0,0,1],
            ];
        }
    }

    public Translate(translation: Vector): void {
        this.values[2][0] = translation.x * this.values[0][0] + translation.y * this.values[1][0] + this.values[2][0];
        this.values[2][1] = translation.x * this.values[0][1] + translation.y * this.values[1][1] + this.values[2][1];
        this.values[2][2] = translation.x * this.values[0][2] + translation.y * this.values[1][2] + this.values[2][2];
    }

    public Scale(scale: Vector): void {
        this.values[0][0] = scale.x * this.values[0][0];
        this.values[0][1] = scale.x * this.values[0][1];
        this.values[0][2] = scale.x * this.values[0][2];
        this.values[1][0] = scale.x * this.values[1][0];
        this.values[1][1] = scale.x * this.values[1][1];
        this.values[1][2] = scale.y * this.values[1][2];
    }

    public Rotate(angle: number): void {
        angle = -angle;
        const a00 = this.values[0][0], a01 = this.values[0][1], a02 = this.values[0][2],
        a10 = this.values[1][0], a11 = this.values[1][1], a12 = this.values[1][2];

        const c = Math.cos(angle);
        const s = Math.sin(angle);

        this.values[0][0] = c * a00 + s * a10;
        this.values[0][1] = c * a01 + s * a11;
        this.values[0][2] = c * a02 + s * a12;
        this.values[1][0] = c * a10 - s * a00;
        this.values[1][1] = c * a11 - s * a01;
        this.values[1][2] = c * a12 - s * a02;
    }

    public RotateDeg(angle: number): void {
        this.Rotate(angle * (Math.PI/180));
    }
}

export default Matrix;