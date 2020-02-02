
# Class: GJKSimplex

GJKSimplex is a simplex that contains a maximum of three points, used to build up
around an origin and to determine if a collision has occurred. Uses its points to
determine the direction that should be searched next for the best chance at building
up a simplex around the origin.

## Hierarchy

* **GJKSimplex**

## Index

### Constructors

* [constructor](gjksimplex.md#constructor)

### Properties

* [points](gjksimplex.md#private-points)

### Methods

* [Add](gjksimplex.md#add)
* [CalculateDirection](gjksimplex.md#calculatedirection)

## Constructors

###  constructor

\+ **new GJKSimplex**(): *[GJKSimplex](gjksimplex.md)*

**Returns:** *[GJKSimplex](gjksimplex.md)*

## Properties

### `Private` points

• **points**: *[Vector](vector.md)[]*

## Methods

###  Add

▸ **Add**(`point`: [Vector](vector.md)): *void*

Adds a point to the simplex

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`point` | [Vector](vector.md) |   |

**Returns:** *void*

___

###  CalculateDirection

▸ **CalculateDirection**(): *[Vector](vector.md) | undefined*

CalculateDirection does two things; checks if the current simplex contains the
origin, and if not provides a direction to search in to find a new point to
add to the simplex to try and build around the origin.

**Returns:** *[Vector](vector.md) | undefined*
