# Class: AllCollideAlgorithm

AllCollideAlgorithm provides an algorithm that always detects all collisions
between all shapes, used in testing or as a placeholder algorithm

## Implements

* [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md)

## Table of contents

### Constructors

- [constructor](allcollidealgorithm.md#constructor)

### Methods

- [CalculateCollisions](allcollidealgorithm.md#calculatecollisions)

## Constructors

### constructor

\+ **new AllCollideAlgorithm**(): [*AllCollideAlgorithm*](allcollidealgorithm.md)

**Returns:** [*AllCollideAlgorithm*](allcollidealgorithm.md)

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
