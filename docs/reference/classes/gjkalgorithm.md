
# Class: GJKAlgorithm

GJKAlgorithm is the implementation of the Gilbert–Johnson–Keerthi distance
algorithm for collision detection.

## Hierarchy

* **GJKAlgorithm**

## Implements

* [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)

## Index

### Methods

* [CalculateCollision](gjkalgorithm.md#calculatecollision)
* [calculateDirection](gjkalgorithm.md#private-calculatedirection)
* [support](gjkalgorithm.md#private-support)

## Methods

###  CalculateCollision

▸ **CalculateCollision**(`a`: [IShape](../interfaces/ishape.md), `b`: [IShape](../interfaces/ishape.md)): *[CollisionInfo](collisioninfo.md) | undefined*

*Implementation of [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IShape](../interfaces/ishape.md) |
`b` | [IShape](../interfaces/ishape.md) |

**Returns:** *[CollisionInfo](collisioninfo.md) | undefined*

___

### `Private` calculateDirection

▸ **calculateDirection**(`points`: [Vector](vector.md)[]): *[Vector](vector.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Vector](vector.md)[] |

**Returns:** *[Vector](vector.md) | undefined*

___

### `Private` support

▸ **support**(`a`: [IShape](../interfaces/ishape.md), `b`: [IShape](../interfaces/ishape.md), `direction`: [Vector](vector.md)): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IShape](../interfaces/ishape.md) |
`b` | [IShape](../interfaces/ishape.md) |
`direction` | [Vector](vector.md) |

**Returns:** *[Vector](vector.md)*
