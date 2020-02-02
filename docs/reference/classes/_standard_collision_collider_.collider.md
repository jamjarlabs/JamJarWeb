
# Class: Collider

Collider is a component that defines a shape for detecting collisions
with other Colliders.

## Hierarchy

* [Component](_component_component_.component.md)

  ↳ **Collider**

## Index

### Constructors

* [constructor](_standard_collision_collider_.collider.md#constructor)

### Properties

* [key](_standard_collision_collider_.collider.md#key)
* [shape](_standard_collision_collider_.collider.md#shape)
* [KEY](_standard_collision_collider_.collider.md#static-key)
* [MESSAGE_ADD](_standard_collision_collider_.collider.md#static-message_add)
* [MESSAGE_REMOVE](_standard_collision_collider_.collider.md#static-message_remove)

## Constructors

###  constructor

\+ **new Collider**(`shape`: [IShape](../interfaces/_standard_shape_ishape_.ishape.md)): *[Collider](_standard_collision_collider_.collider.md)*

*Overrides [Component](_component_component_.component.md).[constructor](_component_component_.component.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [IShape](../interfaces/_standard_shape_ishape_.ishape.md) |

**Returns:** *[Collider](_standard_collision_collider_.collider.md)*

## Properties

###  key

• **key**: *string*

*Inherited from [Component](_component_component_.component.md).[key](_component_component_.component.md#key)*

___

###  shape

• **shape**: *[IShape](../interfaces/_standard_shape_ishape_.ishape.md)*

___

### `Static` KEY

▪ **KEY**: *"collider"* = "collider"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_ADD](_component_component_.component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)*
