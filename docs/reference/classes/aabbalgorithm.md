
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

## Methods

###  CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [IShape](../interfaces/ishape.md)[]): *[CollisionInfo](collisioninfo.md)[]*

*Implementation of [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

**Parameters:**

Name | Type |
------ | ------ |
`shapes` | [IShape](../interfaces/ishape.md)[] |

**Returns:** *[CollisionInfo](collisioninfo.md)[]*
