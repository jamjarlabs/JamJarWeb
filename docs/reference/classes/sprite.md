
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
* [texture](sprite.md#optional-texture)
* [KEY](sprite.md#static-key)
* [MESSAGE_ADD](sprite.md#static-message_add)
* [MESSAGE_REMOVE](sprite.md#static-message_remove)

## Constructors

###  constructor

\+ **new Sprite**(`color`: [Color](color.md), `__namedParameters`: object): *[Sprite](sprite.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

▪ **color**: *[Color](color.md)*

▪`Default value`  **__namedParameters**: *object*= { bounds: Polygon.Rectangle(1, 1), texture: undefined }

Name | Type |
------ | ------ |
`bounds` | [Polygon](polygon.md)‹› |
`texture` | undefined &#124; [Texture](texture.md)‹› |

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

### `Optional` texture

• **texture**? : *[Texture](texture.md)*

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
