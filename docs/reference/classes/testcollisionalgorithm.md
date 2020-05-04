
# Class: TestCollisionAlgorithm

## Hierarchy

* **TestCollisionAlgorithm**

## Implements

* [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)
* [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)

## Index

### Constructors

* [constructor](testcollisionalgorithm.md#constructor)

### Properties

* [centerPairs](testcollisionalgorithm.md#private-centerpairs)

### Methods

* [CalculateCollision](testcollisionalgorithm.md#calculatecollision)

## Constructors

###  constructor

\+ **new TestCollisionAlgorithm**(`centerPairs`: [[Vector](vector.md), [Vector](vector.md)][]): *[TestCollisionAlgorithm](testcollisionalgorithm.md)*

**Parameters:**

Name | Type |
------ | ------ |
`centerPairs` | [[Vector](vector.md), [Vector](vector.md)][] |

**Returns:** *[TestCollisionAlgorithm](testcollisionalgorithm.md)*

## Properties

### `Private` centerPairs

• **centerPairs**: *[[Vector](vector.md), [Vector](vector.md)][]*

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
