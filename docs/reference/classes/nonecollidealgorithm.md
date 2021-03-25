# Class: NoneCollideAlgorithm

NoneCollideAlgorithm provides an algorithm that never detects a collision
between shapes, used in testing or as a placeholder algorithm

## Implements

* [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md)

## Table of contents

### Constructors

- [constructor](nonecollidealgorithm.md#constructor)

### Methods

- [CalculateCollisions](nonecollidealgorithm.md#calculatecollisions)

## Constructors

### constructor

\+ **new NoneCollideAlgorithm**(): [*NoneCollideAlgorithm*](nonecollidealgorithm.md)

**Returns:** [*NoneCollideAlgorithm*](nonecollidealgorithm.md)

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
