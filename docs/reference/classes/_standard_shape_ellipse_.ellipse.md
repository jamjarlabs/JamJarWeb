
# Class: Ellipse

Ellipse is the representation of a 2D Ellipse shape. Can be used for collision detection.

## Hierarchy

* **Ellipse**

## Implements

* [IShape](../interfaces/_standard_shape_ishape_.ishape.md)

## Index

### Constructors

* [constructor](_standard_shape_ellipse_.ellipse.md#constructor)

### Properties

* [center](_standard_shape_ellipse_.ellipse.md#center)
* [dimensions](_standard_shape_ellipse_.ellipse.md#dimensions)
* [orientation](_standard_shape_ellipse_.ellipse.md#orientation)

### Methods

* [FarthestPointInDirection](_standard_shape_ellipse_.ellipse.md#farthestpointindirection)
* [Transform](_standard_shape_ellipse_.ellipse.md#transform)
* [Circle](_standard_shape_ellipse_.ellipse.md#static-circle)

## Constructors

###  constructor

\+ **new Ellipse**(`dimensions`: [Vector](_geometry_vector_.vector.md), `orientation`: number, `center`: [Vector](_geometry_vector_.vector.md)): *[Ellipse](_standard_shape_ellipse_.ellipse.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`dimensions` | [Vector](_geometry_vector_.vector.md) | - |
`orientation` | number | 0 |
`center` | [Vector](_geometry_vector_.vector.md) | new Vector(0,0) |

**Returns:** *[Ellipse](_standard_shape_ellipse_.ellipse.md)*

## Properties

###  center

• **center**: *[Vector](_geometry_vector_.vector.md)*

___

###  dimensions

• **dimensions**: *[Vector](_geometry_vector_.vector.md)*

___

###  orientation

• **orientation**: *number*

## Methods

###  FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [Vector](_geometry_vector_.vector.md)): *[Vector](_geometry_vector_.vector.md)*

*Implementation of [IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [Vector](_geometry_vector_.vector.md) |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

___

###  Transform

▸ **Transform**(`transform`: [Transform](_standard_transform_transform_.transform.md)): *[IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

*Implementation of [IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](_standard_transform_transform_.transform.md) |

**Returns:** *[IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

___

### `Static` Circle

▸ **Circle**(`radius`: number, `center`: [Vector](_geometry_vector_.vector.md)): *[Ellipse](_standard_shape_ellipse_.ellipse.md)*

Circle returns a new Ellipse in the shape of a circle.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`radius` | number | - | Radius of the circle |
`center` | [Vector](_geometry_vector_.vector.md) | new Vector(0,0) | Centre of the circle  |

**Returns:** *[Ellipse](_standard_shape_ellipse_.ellipse.md)*
