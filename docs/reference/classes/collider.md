
# Class: Collider

Collider is a component that defines a shape for detecting collisions
with other Colliders.

## Hierarchy

* [Component](component.md)

  ↳ **Collider**

## Index

### Constructors

* [constructor](collider.md#constructor)

### Properties

* [enterScript](collider.md#optional-enterscript)
* [exitScript](collider.md#optional-exitscript)
* [key](collider.md#key)
* [shape](collider.md#shape)
* [KEY](collider.md#static-key)
* [MESSAGE_ADD](collider.md#static-message_add)
* [MESSAGE_REMOVE](collider.md#static-message_remove)

## Constructors

###  constructor

\+ **new Collider**(`shape`: [IShape](../interfaces/ishape.md), `enterScript?`: undefined | string, `exitScript?`: undefined | string): *[Collider](collider.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`shape` | [IShape](../interfaces/ishape.md) |
`enterScript?` | undefined &#124; string |
`exitScript?` | undefined &#124; string |

**Returns:** *[Collider](collider.md)*

## Properties

### `Optional` enterScript

• **enterScript**? : *undefined | string*

___

### `Optional` exitScript

• **exitScript**? : *undefined | string*

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  shape

• **shape**: *[IShape](../interfaces/ishape.md)*

___

### `Static` KEY

▪ **KEY**: *"collider"* = "collider"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
