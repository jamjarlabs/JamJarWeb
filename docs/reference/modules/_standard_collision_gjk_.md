
# External module: "standard/collision/gjk"

## Index

### Classes

* [GJKSimplex](../classes/_standard_collision_gjk_.gjksimplex.md)

### Functions

* [Calculate](_standard_collision_gjk_.md#calculate)
* [support](_standard_collision_gjk_.md#support)

## Functions

###  Calculate

▸ **Calculate**(`a`: [SystemEntity](../classes/_system_system_entity_.systementity.md), `b`: [SystemEntity](../classes/_system_system_entity_.systementity.md)): *[Collision](../classes/_standard_collision_collision_.collision.md) | undefined*

Calculate determines if a collision/intersection exists between two entities

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [SystemEntity](../classes/_system_system_entity_.systementity.md) | First entity |
`b` | [SystemEntity](../classes/_system_system_entity_.systementity.md) | Second entity |

**Returns:** *[Collision](../classes/_standard_collision_collision_.collision.md) | undefined*

A collision if it has been detected; if not undefined

___

###  support

▸ **support**(`a`: [IShape](../interfaces/_standard_shape_ishape_.ishape.md), `b`: [IShape](../interfaces/_standard_shape_ishape_.ishape.md), `direction`: [Vector](../classes/_geometry_vector_.vector.md)): *[Vector](../classes/_geometry_vector_.vector.md)*

support calculates a support point in a direction for two shapes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IShape](../interfaces/_standard_shape_ishape_.ishape.md) | First shape |
`b` | [IShape](../interfaces/_standard_shape_ishape_.ishape.md) | Second shape |
`direction` | [Vector](../classes/_geometry_vector_.vector.md) | The direction to calculate the support point in |

**Returns:** *[Vector](../classes/_geometry_vector_.vector.md)*

The support point; returns undefined if invalid shapes provided
