
# Class: GJKAlgorithm

GJKAlgorithm is the implementation of the Gilbert–Johnson–Keerthi distance
algorithm for collision detection.

## Hierarchy

* **GJKAlgorithm**

## Implements

* [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)

## Index

### Methods

* [CalculateCollisions](gjkalgorithm.md#calculatecollisions)
* [calculateDirection](gjkalgorithm.md#private-calculatedirection)
* [gjk](gjkalgorithm.md#private-gjk)
* [support](gjkalgorithm.md#private-support)

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

### `Private` calculateDirection

▸ **calculateDirection**(`points`: [Vector](vector.md)[]): *[Vector](vector.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Vector](vector.md)[] |

**Returns:** *[Vector](vector.md) | undefined*

___

### `Private` gjk

▸ **gjk**(`a`: [IShape](../interfaces/ishape.md), `b`: [IShape](../interfaces/ishape.md)): *[CollisionInfo](collisioninfo.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`a` | [IShape](../interfaces/ishape.md) |
`b` | [IShape](../interfaces/ishape.md) |

**Returns:** *[CollisionInfo](collisioninfo.md) | undefined*

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
