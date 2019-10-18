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

import SystemEntity from "../system/system_entity";
import IShape from "../geometry/ishape";
import Vector from "../geometry/vector";
import Collision from "../collision/collision";
import Transform from "../transform/transform";
import Collider from "../collision/collider";

const ORIGIN = new Vector(0,0);

class GJKSimplex {
    private points: Vector[];
    constructor() {
        this.points = [];
    }

    Add(point: Vector): void {
        this.points.push(point);
    }

    CalculateDirection(origin: Vector): Vector | undefined {
        const a = this.points[this.points.length - 1];
        const ao = a.Invert();
        if (this.points.length == 3) {
            const b = this.points[1];
            const c = this.points[0];

            const ab = b.Sub(a);
            const ac = c.Sub(a);

            // Handedness of these calculations may not be correct
            let abPerp = new Vector(-ab.y, ab.x);
            let acPerp = new Vector(ac.y, -ac.x);

            if (abPerp.Dot(ao) > 0) {
                this.points.splice(0, 1);
                return abPerp;
            }
            if (acPerp.Dot(ao) > 0) {
                this.points.splice(1, 1);
                return acPerp;
            }
            return undefined;

        }
        const b = this.points[0];
        const ab = b.Sub(a);

        let abPerp = new Vector(ab.y, -ab.x);
        return abPerp;
    }
}

function support(a: IShape, b: IShape, direction: Vector): Vector | undefined {
    const aFar = a.FarthestPointInDirection(direction);
    if (!aFar) {
        return;
    }
    const bFar = b.FarthestPointInDirection(direction.Invert());
    if (!bFar) {
        return;
    }
    return aFar.Sub(bFar);
}

function Calculate(a: SystemEntity, b: SystemEntity): Collision | undefined {
    const aTransform = a.Get(Transform.KEY) as Transform;
    const bTransform = b.Get(Transform.KEY) as Transform;

    const aCollider = a.Get(Collider.KEY) as Collider;
    const bCollider = b.Get(Collider.KEY) as Collider;

    const aShape = aCollider.shape.Transform(aTransform);
    const bShape = bCollider.shape.Transform(bTransform);

    const simplex = new GJKSimplex();

    let direction: Vector | undefined = new Vector(0,1);

    const initSupportPoint = support(aShape, bShape, direction);
    if (!initSupportPoint) {
        return;
    }
    simplex.Add(initSupportPoint);
    direction = direction.Invert();

    while(direction) {
        // Will always be non null as there will always be points in the simplex 
        // at this position
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        const supportPoint = support(aShape, bShape, direction!)!;
        if (supportPoint.Dot(direction!) <= 0) {
            // no intersection
            return;
        }
        simplex.Add(supportPoint);

        direction = simplex.CalculateDirection(ORIGIN);
    }
    // No direction calculated, intersection detected
    return new Collision(a.entity, b.entity);
}

export default { Calculate: Calculate };