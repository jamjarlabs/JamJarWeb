# Class: Ellipse

Ellipse is the representation of a 2D Ellipse shape. Can be used for collision detection.

## Implements

* [*IShape*](../interfaces/ishape.md)

## Table of contents

### Constructors

- [constructor](ellipse.md#constructor)

### Properties

- [center](ellipse.md#center)
- [dimensions](ellipse.md#dimensions)
- [orientation](ellipse.md#orientation)

### Methods

- [Center](ellipse.md#center)
- [Copy](ellipse.md#copy)
- [FarthestPointInDirection](ellipse.md#farthestpointindirection)
- [Free](ellipse.md#free)
- [PointInside](ellipse.md#pointinside)
- [Transform](ellipse.md#transform)
- [Circle](ellipse.md#circle)

## Constructors

### constructor

\+ **new Ellipse**(`dimensions`: [*Vector*](vector.md), `orientation?`: *number*, `center?`: [*Vector*](vector.md)): [*Ellipse*](ellipse.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`dimensions` | [*Vector*](vector.md) | - |
`orientation` | *number* | 0 |
`center` | [*Vector*](vector.md) | - |

**Returns:** [*Ellipse*](ellipse.md)

## Properties

### center

• **center**: [*Vector*](vector.md)

___

### dimensions

• **dimensions**: [*Vector*](vector.md)

___

### orientation

• **orientation**: *number*

## Methods

### Center

▸ **Center**(): [*Vector*](vector.md)

Center calculates/retrieves the center of a shape.

**Returns:** [*Vector*](vector.md)

Implementation of: [IShape](../interfaces/ishape.md)

___

### Copy

▸ **Copy**(): [*Ellipse*](ellipse.md)

Creates a copy of the shape and its values, rather than pointing to the same Shape.

**Returns:** [*Ellipse*](ellipse.md)

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

___

### Circle

▸ `Static`**Circle**(`radius`: *number*, `centerX?`: *number*, `centerY?`: *number*): [*Ellipse*](ellipse.md)

Circle returns a new Ellipse in the shape of a circle.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`radius` | *number* | - | Radius of the circle   |
`centerX` | *number* | 0 | - |
`centerY` | *number* | 0 | - |

**Returns:** [*Ellipse*](ellipse.md)
