# Class: Polygon

Polygon is the representation of a 2D Polygon shape.
Can be used in collision detection and rendering.

## Implements

* [*IShape*](../interfaces/ishape.md)

## Table of contents

### Constructors

- [constructor](polygon.md#constructor)

### Properties

- [points](polygon.md#points)

### Methods

- [Apply4D](polygon.md#apply4d)
- [Center](polygon.md#center)
- [Copy](polygon.md#copy)
- [FarthestPointInDirection](polygon.md#farthestpointindirection)
- [Free](polygon.md#free)
- [GetFloat32Array](polygon.md#getfloat32array)
- [PointInside](polygon.md#pointinside)
- [Transform](polygon.md#transform)
- [EllipseEstimation](polygon.md#ellipseestimation)
- [QuadByDimensions](polygon.md#quadbydimensions)
- [QuadByPoints](polygon.md#quadbypoints)
- [RectangleByDimensions](polygon.md#rectanglebydimensions)
- [RectangleByPoints](polygon.md#rectanglebypoints)

## Constructors

### constructor

\+ **new Polygon**(`points`: *Float32Array* \| [*Vector*](vector.md)[], `wrap?`: *boolean*): [*Polygon*](polygon.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`points` | *Float32Array* \| [*Vector*](vector.md)[] | - |
`wrap` | *boolean* | false |

**Returns:** [*Polygon*](polygon.md)

## Properties

### points

• **points**: *Float32Array*

## Methods

### Apply4D

▸ **Apply4D**(`matrix`: [*Matrix4D*](matrix4d.md)): [*Polygon*](polygon.md)

#### Parameters:

Name | Type |
:------ | :------ |
`matrix` | [*Matrix4D*](matrix4d.md) |

**Returns:** [*Polygon*](polygon.md)

___

### Center

▸ **Center**(): [*Vector*](vector.md)

Center calculates/retrieves the center of a shape.

**Returns:** [*Vector*](vector.md)

The center point of the shape

Implementation of: [IShape](../interfaces/ishape.md)

___

### Copy

▸ **Copy**(): [*Polygon*](polygon.md)

Make a value copy of the Polygon.

**Returns:** [*Polygon*](polygon.md)

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

The farthest point in the direction provided

Implementation of: [IShape](../interfaces/ishape.md)

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IShape](../interfaces/ishape.md)

___

### GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the polygon to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the polygon

___

### PointInside

▸ **PointInside**(`point`: [*Vector*](vector.md)): *boolean*

PointInside determines if a point provided is within the shape or not.

#### Parameters:

Name | Type |
:------ | :------ |
`point` | [*Vector*](vector.md) |

**Returns:** *boolean*

If the point is inside the shape, true = inside, false = outside

Implementation of: [IShape](../interfaces/ishape.md)

___

### Transform

▸ **Transform**(`transform`: [*Transform*](transform.md)): [*Polygon*](polygon.md)

Transform takes a transform and applies it to shape.

#### Parameters:

Name | Type |
:------ | :------ |
`transform` | [*Transform*](transform.md) |

**Returns:** [*Polygon*](polygon.md)

The transformed shape

Implementation of: [IShape](../interfaces/ishape.md)

___

### EllipseEstimation

▸ `Static`**EllipseEstimation**(`numOfPoints`: *number*, `dimensions`: [*Vector*](vector.md), `centerX?`: *number*, `centerY?`: *number*, `wrap?`: *boolean*): [*Polygon*](polygon.md)

EllipseEstimation provides a new polygon that estimates the shape of an ellipse.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`numOfPoints` | *number* | - | Number of points the estimation should have   |
`dimensions` | [*Vector*](vector.md) | - | Ellipse dimensions   |
`centerX` | *number* | 0 | - |
`centerY` | *number* | 0 | - |
`wrap` | *boolean* | false | If the polygon should wrap on itself (first point == last point)    |

**Returns:** [*Polygon*](polygon.md)

___

### QuadByDimensions

▸ `Static`**QuadByDimensions**(`width`: *number*, `height`: *number*, `originX?`: *number*, `originY?`: *number*): [*Polygon*](polygon.md)

QuadByDimensions returns a new polygon in a quad shape with the width and
height provided, optionally around an origin point

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`width` | *number* | - | Width of the quad   |
`height` | *number* | - | Height of the quad   |
`originX` | *number* | 0 | - |
`originY` | *number* | 0 | - |

**Returns:** [*Polygon*](polygon.md)

___

### QuadByPoints

▸ `Static`**QuadByPoints**(`bottomLeft`: [*Vector*](vector.md), `topRight`: [*Vector*](vector.md)): [*Polygon*](polygon.md)

QuadByPoints returns a new polygon in a quad shape between the two
provided points.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`bottomLeft` | [*Vector*](vector.md) | Bottom left of the quad   |
`topRight` | [*Vector*](vector.md) | Top right of the quad    |

**Returns:** [*Polygon*](polygon.md)

___

### RectangleByDimensions

▸ `Static`**RectangleByDimensions**(`width`: *number*, `height`: *number*, `originX?`: *number*, `originY?`: *number*, `wrap?`: *boolean*): [*Polygon*](polygon.md)

RectangleByDimensions returns a new polygon in a rectangle shape with the
width and height provided, optionally around an origin point.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`width` | *number* | - | Width of the rectangle   |
`height` | *number* | - | Height of the rectangle   |
`originX` | *number* | 0 | - |
`originY` | *number* | 0 | - |
`wrap` | *boolean* | false | - |

**Returns:** [*Polygon*](polygon.md)

___

### RectangleByPoints

▸ `Static`**RectangleByPoints**(`bottomLeft`: [*Vector*](vector.md), `topRight`: [*Vector*](vector.md), `wrap?`: *boolean*): [*Polygon*](polygon.md)

RectangleByPoints returns a new polygon in a rectangle shape between the
two provided points.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`bottomLeft` | [*Vector*](vector.md) | - | Bottom left of the rectangle   |
`topRight` | [*Vector*](vector.md) | - | Top right of the rectangle    |
`wrap` | *boolean* | false | - |

**Returns:** [*Polygon*](polygon.md)
