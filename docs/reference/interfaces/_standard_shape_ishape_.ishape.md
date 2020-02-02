
# Interface: IShape

IShape is the interface for a shape, defining all methods that need implemented in order
for the shape to be used with collision detection.

## Hierarchy

* **IShape**

## Implemented by

* [Ellipse](../classes/_standard_shape_ellipse_.ellipse.md)
* [Polygon](../classes/_standard_shape_polygon_.polygon.md)

## Index

### Methods

* [FarthestPointInDirection](_standard_shape_ishape_.ishape.md#farthestpointindirection)
* [Transform](_standard_shape_ishape_.ishape.md#transform)

## Methods

###  FarthestPointInDirection

▸ **FarthestPointInDirection**(`direction`: [Vector](../classes/_geometry_vector_.vector.md)): *[Vector](../classes/_geometry_vector_.vector.md)*

FarthestPointInDirection returns the point that is farthest in the direction provided.
Used in the GJK algorithm for collision detection.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`direction` | [Vector](../classes/_geometry_vector_.vector.md) | The direction to get the point in |

**Returns:** *[Vector](../classes/_geometry_vector_.vector.md)*

The farthest point in the direction provided

___

###  Transform

▸ **Transform**(`transform`: [Transform](../classes/_standard_transform_transform_.transform.md)): *[IShape](_standard_shape_ishape_.ishape.md)*

Transform takes a transform and applies it to shape.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`transform` | [Transform](../classes/_standard_transform_transform_.transform.md) | The transform to apply to the shape |

**Returns:** *[IShape](_standard_shape_ishape_.ishape.md)*

The transformed shape
