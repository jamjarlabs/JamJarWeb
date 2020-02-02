
# Class: Sprite

## Hierarchy

* [Component](component.md)

  ↳ **Sprite**

## Index

### Constructors

* [constructor](sprite.md#constructor)

### Properties

* [bounds](sprite.md#bounds)
* [color](sprite.md#color)
* [key](sprite.md#key)
* [KEY](sprite.md#static-key)
* [MESSAGE_ADD](sprite.md#static-message_add)
* [MESSAGE_REMOVE](sprite.md#static-message_remove)

## Constructors

###  constructor

\+ **new Sprite**(`color`: [Color](color.md), `bounds`: [Polygon](polygon.md)): *[Sprite](sprite.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`color` | [Color](color.md) | - |
`bounds` | [Polygon](polygon.md) | Polygon.Rectangle(1,1) |

**Returns:** *[Sprite](sprite.md)*

## Properties

###  bounds

• **bounds**: *[Polygon](polygon.md)*

___

###  color

• **color**: *[Color](color.md)*

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

### `Static` KEY

▪ **KEY**: *"sprite"* = "sprite"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
