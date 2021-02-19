# Class: AABB

AABB is an Axis-Aligned Bounding-Box, this is a rectangle that has no
rotation; it is aligned with the X and Y axis.
The AABB is defined by a centre and width and height dimensions, it can
be used for faster collision detection as it is a more simple shape,
requiring less calculations than a fully defined polygon.

## Implements

* [*IShape*](../interfaces/ishape.md)

## Table of contents

### Constructors

- [constructor](aabb.md#constructor)

### Properties

- [center](aabb.md#center)
- [size](aabb.md#size)

### Methods

- [Center](aabb.md#center)
- [Copy](aabb.md#copy)
- [FarthestPointInDirection](aabb.md#farthestpointindirection)
- [Free](aabb.md#free)
- [PointInside](aabb.md#pointinside)
- [Transform](aabb.md#transform)

## Constructors

### constructor

\+ **new AABB**(`size`: [*Vector*](vector.md), `center?`: [*Vector*](vector.md)): [*AABB*](aabb.md)

#### Parameters:

Name | Type |
:------ | :------ |
`size` | [*Vector*](vector.md) |
`center` | [*Vector*](vector.md) |

**Returns:** [*AABB*](aabb.md)

## Properties

### center

• **center**: [*Vector*](vector.md)

___

### size

• **size**: [*Vector*](vector.md)

## Methods

### Center

▸ **Center**(): [*Vector*](vector.md)

Center calculates/retrieves the center of a shape.

**Returns:** [*Vector*](vector.md)

Implementation of: [IShape](../interfaces/ishape.md)

___

### Copy

▸ **Copy**(): [*AABB*](aabb.md)

Creates a copy of the shape and its values, rather than pointing to the same Shape.

**Returns:** [*AABB*](aabb.md)

Implementation of: [IShape](../interfaces/ishape.md)

___

### FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [*Vector*](vector.md)): [*Vector*](vector.md)

FarthestPointInDirection returns the point that is farthest in the direction provided.
Used in the GJK algorithm for collision detection.

#### Parameters:

Name | Type |
:------ | :------ |
`direction` | [*Vector*](vector.md) |

**Returns:** [*Vector*](vector.md)

Implementation of: [IShape](../interfaces/ishape.md)

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IShape](../interfaces/ishape.md)

___

### PointInside

▸ **PointInside**(`point`: [*Vector*](vector.md)): *boolean*

PointInside determines if a point provided is within the shape or not.

#### Parameters:

Name | Type |
:------ | :------ |
`point` | [*Vector*](vector.md) |

**Returns:** *boolean*

Implementation of: [IShape](../interfaces/ishape.md)

___

### Transform

▸ **Transform**(`transform`: [*Transform*](transform.md)): [*IShape*](../interfaces/ishape.md)

Transform takes a transform and applies it to shape.

#### Parameters:

Name | Type |
:------ | :------ |
`transform` | [*Transform*](transform.md) |

**Returns:** [*IShape*](../interfaces/ishape.md)

Implementation of: [IShape](../interfaces/ishape.md)
