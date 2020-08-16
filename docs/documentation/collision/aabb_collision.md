# AABB Collision

AABB Collision is the use of Axis-Aligned Bounding Boxes to detect collisions.
This can be a good compromise collision algorithm, sacrificing some accuracy
to achieve much better performance than perfectly accurate algorithms.

## Set up an AABB algorithm

The AABB algorithm is easy to set up, it does not require any configuration and
will work with any shape provided to it; for the fastest results an [AABB]
should be used, but the AABB algorithm works well with any [IShape], such as
a fully defined [Polygon] or [Ellipse].

To use this algorithm, declare a new [AABBAlgorithm], for example:

```typescript
const collisionDetector = new AABBAlgorithm();
```

This algorithm can be used to swap out anywhere an [ICollisionAlgorithm] is
used, for example as part of [frustum culling](../../frustum-culling)

## Use with a Collision System

The [AABBAlgorithm] can be provided to a [CollisionSystem] to use instead of
the defaults, for example:

```typescript
new CollisionSystem(this.messageBus,
    undefined,
    undefined,
    new AABBAlgorithm()
);
```

This example replaces the narrow phase collision detection with the
[AABBAlgorithm].


[AABB]: ../../../reference/classes/aabb
[IShape]: ../../../reference/interfaces/ishape
[Polygon]: ../../../reference/classes/polygon
[Ellipse]: ../../../reference/classes/ellipse
[AABBAlgorithm]: ../../../reference/classes/aabbalgorithm
[CollisionSystem]: ../../../reference/classes/collisionsystem
