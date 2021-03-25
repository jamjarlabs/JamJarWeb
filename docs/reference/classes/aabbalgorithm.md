# Class: AABBAlgorithm

AABBAlgorithm is used to provide collision detection using Axis-Aligned
Bounding-Boxes (AABB), it provides a simplified collision detection method.
This algorithm sacrifices some collision accuracy for performance.

## Implements

* [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md)

## Table of contents

### Constructors

- [constructor](aabbalgorithm.md#constructor)

### Methods

- [CalculateCollisions](aabbalgorithm.md#calculatecollisions)

## Constructors

### constructor

\+ **new AABBAlgorithm**(): [*AABBAlgorithm*](aabbalgorithm.md)

**Returns:** [*AABBAlgorithm*](aabbalgorithm.md)

## Methods

### CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [*IShape*](../interfaces/ishape.md)[]): [*CollisionInfo*](collisioninfo.md)[]

CalculateCollisions calculates all collisions between the shapes
provided, returning a list of CollisionInfos, each representing a
Collision.

#### Parameters:

Name | Type |
:------ | :------ |
`shapes` | [*IShape*](../interfaces/ishape.md)[] |

**Returns:** [*CollisionInfo*](collisioninfo.md)[]

Implementation of: [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)
