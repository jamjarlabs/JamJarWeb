
# Class: Sprite

Sprite is a component for storing information around a sprite
and how it should be drawn. Contains information around the
colour to use if no texture is provided and the z order for
deciding which order to draw the sprite in.
Can contain texture information such as bounds and a texture.

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
* [zOrder](sprite.md#zorder)
* [KEY](sprite.md#static-key)
* [MESSAGE_ADD](sprite.md#static-message_add)
* [MESSAGE_REMOVE](sprite.md#static-message_remove)

## Constructors

###  constructor

\+ **new Sprite**(`color`: [Color](color.md), `zOrder`: number, `bounds`: [Polygon](polygon.md), `texture?`: [Texture](texture.md)): *[Sprite](sprite.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`color` | [Color](color.md) | - |
`zOrder` | number | - |
`bounds` | [Polygon](polygon.md) | Polygon.Rectangle(1, 1) |
`texture?` | [Texture](texture.md) | - |

**Returns:** *[Sprite](sprite.md)*

## Properties

###  bounds

• **bounds**: *[Polygon](polygon.md)*

The shape of the sprite to draw, represented by a Polygon.

___

###  color

• **color**: *[Color](color.md)*

The colour of the sprite to use if there is no texture present.

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

### `Optional` texture

• **texture**? : *[Texture](texture.md)*

Optional texture (image) to use for the sprite.

___

###  zOrder

• **zOrder**: *number*

Order which the sprite should appear, if it should appear infront/behind other
objects, the higher the value the more precedence it is given and will
appear in front of objects with a lower value.

___

### `Static` KEY

▪ **KEY**: *"sprite"* = "sprite"

Key of the sprite component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
