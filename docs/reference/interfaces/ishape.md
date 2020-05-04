
# Interface: IShape

IShape is the interface for a shape, defining all methods that need implemented in order
for the shape to be used with collision detection.

## Hierarchy

* **IShape**

## Implemented by

* [Ellipse](../classes/ellipse.md)
* [Polygon](../classes/polygon.md)

## Index

### Methods

* [Center](ishape.md#center)
* [FarthestPointInDirection](ishape.md#farthestpointindirection)
* [PointInside](ishape.md#pointinside)
* [Transform](ishape.md#transform)

## Methods

###  Center

▸ **Center**(): *[Vector](../classes/vector.md)*

Center calculates/retrieves the center of a shape.

**Returns:** *[Vector](../classes/vector.md)*

The center point of the shape

___

###  FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [Vector](../classes/vector.md)): *[Vector](../classes/vector.md)*

FarthestPointInDirection returns the point that is farthest in the direction provided.
Used in the GJK algorithm for collision detection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`direction` | [Vector](../classes/vector.md) | The direction to get the point in |

**Returns:** *[Vector](../classes/vector.md)*

The farthest point in the direction provided

___

###  PointInside

▸ **PointInside**(`point`: [Vector](../classes/vector.md)): *boolean*

PointInside determines if a point provided is within the shape or not.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [Vector](../classes/vector.md) | The point to check if it is inside the shape |

**Returns:** *boolean*

If the point is inside the shape, true = inside, false = outside

___

###  Transform

▸ **Transform**(`transform`: [Transform](../classes/transform.md)): *[IShape](ishape.md)*

Transform takes a transform and applies it to shape.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`transform` | [Transform](../classes/transform.md) | The transform to apply to the shape |

**Returns:** *[IShape](ishape.md)*

The transformed shape
