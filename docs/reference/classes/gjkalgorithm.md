# Class: GJKAlgorithm

GJKAlgorithm is the implementation of the Gilbert–Johnson–Keerthi distance
algorithm for collision detection.

## Implements

* [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md)

## Table of contents

### Constructors

- [constructor](gjkalgorithm.md#constructor)

### Methods

- [CalculateCollisions](gjkalgorithm.md#calculatecollisions)

## Constructors

### constructor

\+ **new GJKAlgorithm**(): [*GJKAlgorithm*](gjkalgorithm.md)

**Returns:** [*GJKAlgorithm*](gjkalgorithm.md)

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
