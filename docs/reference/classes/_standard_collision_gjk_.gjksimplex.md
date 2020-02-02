
# Class: GJKSimplex

GJKSimplex is a simplex that contains a maximum of three points, used to build up
around an origin and to determine if a collision has occurred. Uses its points to
determine the direction that should be searched next for the best chance at building
up a simplex around the origin.

## Hierarchy

* **GJKSimplex**

## Index

### Constructors

* [constructor](_standard_collision_gjk_.gjksimplex.md#constructor)

### Properties

* [points](_standard_collision_gjk_.gjksimplex.md#private-points)

### Methods

* [Add](_standard_collision_gjk_.gjksimplex.md#add)
* [CalculateDirection](_standard_collision_gjk_.gjksimplex.md#calculatedirection)

## Constructors

###  constructor

\+ **new GJKSimplex**(): *[GJKSimplex](_standard_collision_gjk_.gjksimplex.md)*

**Returns:** *[GJKSimplex](_standard_collision_gjk_.gjksimplex.md)*

## Properties

### `Private` points

• **points**: *[Vector](_geometry_vector_.vector.md)[]*

## Methods

###  Add

▸ **Add**(`point`: [Vector](_geometry_vector_.vector.md)): *void*

Adds a point to the simplex

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [Vector](_geometry_vector_.vector.md) |   |

**Returns:** *void*

___

###  CalculateDirection

▸ **CalculateDirection**(): *[Vector](_geometry_vector_.vector.md) | undefined*

CalculateDirection does two things; checks if the current simplex contains the
origin, and if not provides a direction to search in to find a new point to
add to the simplex to try and build around the origin.

**Returns:** *[Vector](_geometry_vector_.vector.md) | undefined*
