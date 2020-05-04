
# Class: Ellipse

Ellipse is the representation of a 2D Ellipse shape. Can be used for collision detection.

## Hierarchy

* **Ellipse**

## Implements

* [IShape](../interfaces/ishape.md)

## Index

### Constructors

* [constructor](ellipse.md#constructor)

### Properties

* [center](ellipse.md#center)
* [dimensions](ellipse.md#dimensions)
* [orientation](ellipse.md#orientation)

### Methods

* [Center](ellipse.md#center)
* [FarthestPointInDirection](ellipse.md#farthestpointindirection)
* [PointInside](ellipse.md#pointinside)
* [Transform](ellipse.md#transform)
* [Circle](ellipse.md#static-circle)

## Constructors

###  constructor

\+ **new Ellipse**(`dimensions`: [Vector](vector.md), `orientation`: number, `center`: [Vector](vector.md)): *[Ellipse](ellipse.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dimensions` | [Vector](vector.md) | - |
`orientation` | number | 0 |
`center` | [Vector](vector.md) | new Vector(0, 0) |

**Returns:** *[Ellipse](ellipse.md)*

## Properties

###  center

• **center**: *[Vector](vector.md)*

___

###  dimensions

• **dimensions**: *[Vector](vector.md)*

___

###  orientation

• **orientation**: *number*

## Methods

###  Center

▸ **Center**(): *[Vector](vector.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Returns:** *[Vector](vector.md)*

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

___

### `Static` Circle

▸ **Circle**(`radius`: number, `center`: [Vector](vector.md)): *[Ellipse](ellipse.md)*

Circle returns a new Ellipse in the shape of a circle.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`radius` | number | - | Radius of the circle |
`center` | [Vector](vector.md) | new Vector(0, 0) | Centre of the circle  |

**Returns:** *[Ellipse](ellipse.md)*
