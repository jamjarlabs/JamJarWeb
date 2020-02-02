
# Class: Sprite

## Hierarchy

* [Component](_component_component_.component.md)

  ↳ **Sprite**

## Index

### Constructors

* [constructor](_standard_sprite_sprite_.sprite.md#constructor)

### Properties

* [bounds](_standard_sprite_sprite_.sprite.md#bounds)
* [color](_standard_sprite_sprite_.sprite.md#color)
* [key](_standard_sprite_sprite_.sprite.md#key)
* [KEY](_standard_sprite_sprite_.sprite.md#static-key)
* [MESSAGE_ADD](_standard_sprite_sprite_.sprite.md#static-message_add)
* [MESSAGE_REMOVE](_standard_sprite_sprite_.sprite.md#static-message_remove)

## Constructors

###  constructor

\+ **new Sprite**(`color`: [Color](_rendering_color_.color.md), `bounds`: [Polygon](_standard_shape_polygon_.polygon.md)): *[Sprite](_standard_sprite_sprite_.sprite.md)*

*Overrides [Component](_component_component_.component.md).[constructor](_component_component_.component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`color` | [Color](_rendering_color_.color.md) | - |
`bounds` | [Polygon](_standard_shape_polygon_.polygon.md) | Polygon.Rectangle(1,1) |

**Returns:** *[Sprite](_standard_sprite_sprite_.sprite.md)*

## Properties

###  bounds

• **bounds**: *[Polygon](_standard_shape_polygon_.polygon.md)*

___

###  color

• **color**: *[Color](_rendering_color_.color.md)*

___

###  key

• **key**: *string*

*Inherited from [Component](_component_component_.component.md).[key](_component_component_.component.md#key)*

___

### `Static` KEY

▪ **KEY**: *"sprite"* = "sprite"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_ADD](_component_component_.component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)*
