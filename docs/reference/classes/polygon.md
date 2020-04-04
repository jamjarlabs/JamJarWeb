
# Class: Polygon

Polygon is the representation of a 2D Polygon shape.
Can be used in collision detection and rendering.

## Hierarchy

* **Polygon**

## Implements

* [IShape](../interfaces/ishape.md)

## Index

### Constructors

* [constructor](polygon.md#constructor)

### Properties

* [points](polygon.md#points)

### Methods

* [FarthestPointInDirection](polygon.md#farthestpointindirection)
* [GetArray](polygon.md#getarray)
* [GetFloat32Array](polygon.md#getfloat32array)
* [PointInside](polygon.md#pointinside)
* [Transform](polygon.md#transform)
* [RectangleByDimensions](polygon.md#static-rectanglebydimensions)
* [RectangleByPoints](polygon.md#static-rectanglebypoints)

## Constructors

###  constructor

\+ **new Polygon**(`points`: [Vector](vector.md)[]): *[Polygon](polygon.md)*

**Parameters:**

Name | Type |
------ | ------ |
`points` | [Vector](vector.md)[] |

**Returns:** *[Polygon](polygon.md)*

## Properties

###  points

• **points**: *[Vector](vector.md)[]*

## Methods

###  FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [Vector](vector.md)): *[Vector](vector.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`direction` | [Vector](vector.md) |

**Returns:** *[Vector](vector.md)*

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

▸ **Transform**(`transform`: [Transform](transform.md)): *[Polygon](polygon.md)*

*Implementation of [IShape](../interfaces/ishape.md)*

**Parameters:**

Name | Type |
------ | ------ |
`transform` | [Transform](transform.md) |

**Returns:** *[Polygon](polygon.md)*

___

### `Static` RectangleByDimensions

▸ **RectangleByDimensions**(`width`: number, `height`: number, `origin`: [Vector](vector.md)): *[Polygon](polygon.md)*

RectangleByDimensions returns a new polygon in a rectangle shape with the
width and height provided, optionally around an origin point.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`width` | number | - | Width of the rectangle |
`height` | number | - | Height of the rectangle |
`origin` | [Vector](vector.md) | new Vector(0,0) | Center point of the rectangle  |

**Returns:** *[Polygon](polygon.md)*

___

### `Static` RectangleByPoints

▸ **RectangleByPoints**(`bottomLeft`: [Vector](vector.md), `topRight`: [Vector](vector.md)): *[Polygon](polygon.md)*

RectangleByPoints returns a new polygon in a rectangle shape between the
two provided points.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bottomLeft` | [Vector](vector.md) | Bottom left of the rectangle |
`topRight` | [Vector](vector.md) | Top right of the rectangle  |

**Returns:** *[Polygon](polygon.md)*
