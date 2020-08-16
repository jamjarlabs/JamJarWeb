
# Class: AABBAlgorithm

AABBAlgorithm is used to provide collision detection using Axis-Aligned
Bounding-Boxes (AABB), it provides a simplified collision detection method.
This algorithm sacrifices some collision accuracy for performance.

## Hierarchy

* **AABBAlgorithm**

## Implements

* [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)

## Index

### Methods

* [CalculateCollisions](aabbalgorithm.md#calculatecollisions)
* [aabb](aabbalgorithm.md#private-aabb)

## Methods

###  CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [IShape](../interfaces/ishape.md)[]): *[CollisionInfo](collisioninfo.md)[]*

*Implementation of [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

**Parameters:**

Name | Type |
------ | ------ |
`shapes` | [IShape](../interfaces/ishape.md)[] |

**Returns:** *[CollisionInfo](collisioninfo.md)[]*

___

### `Private` aabb

▸ **aabb**(`a`: [IShape](../interfaces/ishape.md), `b`: [IShape](../interfaces/ishape.md)): *[CollisionInfo](collisioninfo.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IShape](../interfaces/ishape.md) |
`b` | [IShape](../interfaces/ishape.md) |

**Returns:** *[CollisionInfo](collisioninfo.md) | undefined*
