
# Class: Polygon

Polygon is the representation of a 2D Polygon shape.
Can be used in collision detection and rendering.

## Hierarchy

* **Polygon**

## Implements

* [IShape](../interfaces/_standard_shape_ishape_.ishape.md)

## Index

### Constructors

* [constructor](_standard_shape_polygon_.polygon.md#constructor)

### Properties

* [points](_standard_shape_polygon_.polygon.md#points)

### Methods

* [FarthestPointInDirection](_standard_shape_polygon_.polygon.md#farthestpointindirection)
* [GetArray](_standard_shape_polygon_.polygon.md#getarray)
* [GetFloat32Array](_standard_shape_polygon_.polygon.md#getfloat32array)
* [Transform](_standard_shape_polygon_.polygon.md#transform)
* [Rectangle](_standard_shape_polygon_.polygon.md#static-rectangle)

## Constructors

###  constructor

\+ **new Polygon**(`points`: [Vector](_geometry_vector_.vector.md)[]): *[Polygon](_standard_shape_polygon_.polygon.md)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Vector](_geometry_vector_.vector.md)[] |

**Returns:** *[Polygon](_standard_shape_polygon_.polygon.md)*

## Properties

###  points

• **points**: *[Vector](_geometry_vector_.vector.md)[]*

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

###  GetArray

▸ **GetArray**(): *number[]*

GetArray returns the points of this polygon in an array form, of `[x1,y1,x2,y2...xn,yn]`.

**Returns:** *number[]*

The array of points in the polygon

___

###  GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the polygon to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the polygon

___

###  Transform

▸ **Transform**(`transform`: [Transform](_standard_transform_transform_.transform.md)): *[Polygon](_standard_shape_polygon_.polygon.md)*

*Implementation of [IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](_standard_transform_transform_.transform.md) |

**Returns:** *[Polygon](_standard_shape_polygon_.polygon.md)*

___

### `Static` Rectangle

▸ **Rectangle**(`width`: number, `height`: number): *[Polygon](_standard_shape_polygon_.polygon.md)*

Rectangle returns a new polygon in a rectangle shape.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`width` | number | Width of the rectangle |
`height` | number | Height of the rectangle  |

**Returns:** *[Polygon](_standard_shape_polygon_.polygon.md)*
