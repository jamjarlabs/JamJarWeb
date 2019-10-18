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

/**
 * GJKSimplex is a simplex that contains a maximum of three points, used to build up
 * around an origin and to determine if a collision has occurred. Uses its points to
 * determine the direction that should be searched next for the best chance at building
 * up a simplex around the origin.
 */
class GJKSimplex {
    private points: Vector[];
    constructor() {
        this.points = [];
    }

    /**
     * Adds a point to the simplex
     * @param point 
     */
    Add(point: Vector): void {
        this.points.push(point);
    }

    /**
     * CalculateDirection does two things; checks if the current simplex contains the
     * origin, and if not provides a direction to search in to find a new point to
     * add to the simplex to try and build around the origin.
     */
    CalculateDirection(): Vector | undefined {
        // Get a, the last point added to the simplex
        const a = this.points[this.points.length - 1];
        // Since a was just added, we know that the inverse of a points 
        // towards the origin
        const ao = a.Invert();
        // If the simplex is a triangle
        if (this.points.length == 3) {
            // B is the penultimate in the simplex
            // C is the oldest point in the simplex
            const b = this.points[1];
            const c = this.points[0];

            // Determine a->b and a->c lines
            const ab = b.Sub(a);
            const ac = c.Sub(a);

            // Determine perpendicular of the a->b line
            let abPerp = new Vector(ab.y, -ab.x);

            // Check the handedness of the perpendicular, it should
            // face AWAY from the simplex
            if (abPerp.Dot(c) >= 0) {
                abPerp = abPerp.Invert();
            }

            // If the origin lies outside of the simplex. remove the
            // point and determine a new direction in the direction
            // of the perpendicular; aiming to try to encapsulate
            // the origin that lies outside
            if (abPerp.Dot(ao) > 0) {
                this.points.splice(0, 1);
                return abPerp;
            }

            // Determine perpendicular of the a->c line
            let acPerp = new Vector(ac.y, -ac.x);

            // Check the handedness of the perpendicular, it should
            // face AWAY from the simplex
            if (acPerp.Dot(b) >= 0) {
                acPerp = acPerp.Invert();
            }


            // If the origin lies outside of the simplex. remove the
            // point and determine a new direction in the direction
            // of the perpendicular; aiming to try to encapsulate
            // the origin that lies outside
            if (acPerp.Dot(ao) > 0) {
                this.points.splice(1, 1);
                return acPerp;
            }
            return undefined;
        }
        // Otherwise the simplex is just a line
        // B is the penultimate point in the simplex,
        // in this case the other end of the line
        const b = this.points[0];
        // Determine a -> b line
        const ab = b.Sub(a);

        // Get the perpendicular of the a->b line
        let abPerp = new Vector(ab.y, -ab.x);

        // Check the handedness of the perpendicular, it should
        // face TOWARDS the origin
        if (abPerp.Dot(ao) <= 0) {
            abPerp = abPerp.Invert();
        }
        return abPerp;
    }
}

/**
 * support calculates a support point in a direction for two shapes
 * @param a First shape
 * @param b Second shape
 * @param direction The direction to calculate the support point in
 * @returns {Vector|undefined} The support point; returns undefined if invalid shapes provided
 */
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

/**
 * Calculate determines if a collision/intersection exists between two entities
 * @param {SystemEntity} a First entity
 * @param {SystemEntity} b Second entity
 * @returns {Collision|undefined} A collision if it has been detected; if not undefined
 */
function Calculate(a: SystemEntity, b: SystemEntity): Collision | undefined {
    // Get entity components relevant to collisions
    const aTransform = a.Get(Transform.KEY) as Transform;
    const bTransform = b.Get(Transform.KEY) as Transform;

    const aCollider = a.Get(Collider.KEY) as Collider;
    const bCollider = b.Get(Collider.KEY) as Collider;

    // Get the entity shapes that have been transformed by their Transform components
    const aShape = aCollider.shape.Transform(aTransform);
    const bShape = bCollider.shape.Transform(bTransform);

    // Build a new Simplex for determining if a collision has occurred
    const simplex = new GJKSimplex();

    // Choose the starting direction as from A center to B center
    let direction: Vector | undefined = bTransform.position.Sub(aTransform.position);

    // Get the first support point and add it to the simplex
    const initSupportPoint = support(aShape, bShape, direction);
    if (!initSupportPoint) {
        return;
    }
    simplex.Add(initSupportPoint);

    // Flip the direction for the next support point
    direction = direction.Invert();

    // Keep iterating until the direction is undefined, this will occur when
    // 'CalculateDirection' doesn't return a direction, indicating that an 
    // intersection has been detected
    while(direction) {
        // Will always be non null as there will always be points in the simplex 
        // at this position
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
        const supportPoint = support(aShape, bShape, direction!)!;

        // If the support point did not reach as far as the origin,
        // the simplex must not contain the origin and therefore there is no
        // intersection
        if (supportPoint.Dot(direction!) <= 0) {
            // No intersection
            return;
        }

        // Add the simplex and determine a new direction
        simplex.Add(supportPoint);
        direction = simplex.CalculateDirection();
    }
    // No direction calculated, intersection detected
    return new Collision(a.entity, b.entity);
}

export default { Calculate: Calculate };