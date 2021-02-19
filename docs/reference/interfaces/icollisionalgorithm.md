# Interface: ICollisionAlgorithm

ICollisionAlgorithm represents a collision detection algorithm.

## Implemented by

* [*AABBAlgorithm*](../classes/aabbalgorithm.md)
* [*AllCollideAlgorithm*](../classes/allcollidealgorithm.md)
* [*GJKAlgorithm*](../classes/gjkalgorithm.md)
* [*NoneCollideAlgorithm*](../classes/nonecollidealgorithm.md)

## Table of contents

### Methods

- [CalculateCollisions](icollisionalgorithm.md#calculatecollisions)

## Methods

### CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [*IShape*](ishape.md)[]): [*CollisionInfo*](../classes/collisioninfo.md)[]

CalculateCollisions calculates all collisions between the shapes
provided, returning a list of CollisionInfos, each representing a
Collision.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`shapes` | [*IShape*](ishape.md)[] | The shapes to check for collisions    |

**Returns:** [*CollisionInfo*](../classes/collisioninfo.md)[]
