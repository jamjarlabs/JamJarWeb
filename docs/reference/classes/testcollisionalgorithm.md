
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

* [CalculateCollisions](testcollisionalgorithm.md#calculatecollisions)

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

###  CalculateCollisions

▸ **CalculateCollisions**(`shapes`: [IShape](../interfaces/ishape.md)[]): *[CollisionInfo](collisioninfo.md)[]*

*Implementation of [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

**Parameters:**

Name | Type |
------ | ------ |
`shapes` | [IShape](../interfaces/ishape.md)[] |

**Returns:** *[CollisionInfo](collisioninfo.md)[]*
