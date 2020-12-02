
# Class: AABB

AABB is an Axis-Aligned Bounding-Box, this is a rectangle that has no
rotation; it is aligned with the X and Y axis.
The AABB is defined by a centre and width and height dimensions, it can
be used for faster collision detection as it is a more simple shape,
requiring less calculations than a fully defined polygon.

## Hierarchy

* **AABB**

## Implements

* [IShape](../interfaces/ishape.md)

## Index

### Constructors

* [constructor](aabb.md#constructor)

### Properties

* [center](aabb.md#center)
* [size](aabb.md#size)

### Methods

* [Center](aabb.md#center)
* [Copy](aabb.md#copy)
* [FarthestPointInDirection](aabb.md#farthestpointindirection)
* [Free](aabb.md#free)
* [PointInside](aabb.md#pointinside)
* [Transform](aabb.md#transform)

## Constructors

###  constructor

\+ **new AABB**(`size`: [Vector](vector.md), `center`: [Vector](vector.md)): *[AABB](aabb.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`size` | [Vector](vector.md) | - |
`center` | [Vector](vector.md) | Vector.New(0, 0) |

**Returns:** *[AABB](aabb.md)*

## Properties

###  center

• **center**: *[Vector](vector.md)*

___

###  size

• **size**: *[Vector](vector.md)*

## Methods

###  Center

▸ **Center**(): *[Vector](vector.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Returns:** *[Vector](vector.md)*

___

###  Copy

▸ **Copy**(): *[AABB](aabb.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Returns:** *[AABB](aabb.md)*

___

###  FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [Vector](vector.md)): *[Vector](vector.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [Vector](vector.md) |

**Returns:** *[Vector](vector.md)*

___

###  Free

▸ **Free**(): *void*

*Implementation of [IShape](../interfaces/ishape.md)*

**Returns:** *void*

___

###  PointInside

▸ **PointInside**(`point`: [Vector](vector.md)): *boolean*

*Implementation of [IShape](../interfaces/ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`point` | [Vector](vector.md) |

**Returns:** *boolean*

___

###  Transform

▸ **Transform**(`transform`: [Transform](transform.md)): *[IShape](../interfaces/ishape.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](transform.md) |

**Returns:** *[IShape](../interfaces/ishape.md)*
