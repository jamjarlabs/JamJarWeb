
# Interface: ICollisionAlgorithm

ICollisionAlgorithm represents a collision detection algorithm.

## Hierarchy

* **ICollisionAlgorithm**

## Implemented by

* [AllCollideAlgorithm](../classes/allcollidealgorithm.md)
* [GJKAlgorithm](../classes/gjkalgorithm.md)
* [NoneCollideAlgorithm](../classes/nonecollidealgorithm.md)
* [TestCollisionAlgorithm](../classes/testcollisionalgorithm.md)
* [TestCollisionAlgorithm](../classes/testcollisionalgorithm.md)

## Index

### Methods

* [CalculateCollisions](icollisionalgorithm.md#calculatecollisions)

## Methods

###  CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [IShape](ishape.md)[]): *[CollisionInfo](../classes/collisioninfo.md)[]*

CalculateCollisions calculates all collisions between the shapes
provided, returning a list of CollisionInfos, each representing a
Collision.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`shapes` | [IShape](ishape.md)[] | The shapes to check for collisions  |

**Returns:** *[CollisionInfo](../classes/collisioninfo.md)[]*
