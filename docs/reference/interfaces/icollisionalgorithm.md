
# Interface: ICollisionAlgorithm

ICollisionAlgorithm represents a collision detection algorithm.

## Hierarchy

* **ICollisionAlgorithm**

## Implemented by

* [AlwaysCollideAlgorithm](../classes/alwayscollidealgorithm.md)
* [GJKAlgorithm](../classes/gjkalgorithm.md)
* [NeverCollideAlgorithm](../classes/nevercollidealgorithm.md)
* [TestCollisionAlgorithm](../classes/testcollisionalgorithm.md)
* [TestCollisionAlgorithm](../classes/testcollisionalgorithm.md)

## Index

### Methods

* [CalculateCollision](icollisionalgorithm.md#calculatecollision)

## Methods

###  CalculateCollision

▸ **CalculateCollision**(`a`: [IShape](ishape.md), `b`: [IShape](ishape.md)): *[CollisionInfo](../classes/collisioninfo.md) | undefined*

CalculateCollision calculates if there is a collision between two shapes,
if there is a collision a CollisionInfo will be returned, if there is no
collision undefined will be returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IShape](ishape.md) | First shape to use in the collision check |
`b` | [IShape](ishape.md) | Second shape to use in the collision check  |

**Returns:** *[CollisionInfo](../classes/collisioninfo.md) | undefined*
