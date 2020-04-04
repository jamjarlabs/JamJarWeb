
# Class: Text

Text is a component for specifying text to render, alongside options for
rendering it such as font, alignment, color and shaders.

## Hierarchy

* [Component](component.md)

  ↳ **Text**

## Index

### Constructors

* [constructor](text.md#constructor)

### Properties

* [align](text.md#align)
* [color](text.md#color)
* [font](text.md#font)
* [key](text.md#key)
* [offset](text.md#offset)
* [shaders](text.md#shaders)
* [spacing](text.md#spacing)
* [value](text.md#value)
* [zOrder](text.md#zorder)
* [DEFAULT_SPACING](text.md#static-private-default_spacing)
* [KEY](text.md#static-key)
* [MESSAGE_ADD](text.md#static-message_add)
* [MESSAGE_REMOVE](text.md#static-message_remove)

## Constructors

###  constructor

\+ **new Text**(`zOrder`: number, `value`: string, `font`: string, `align`: [TextAlignment](../enums/textalignment.md), `spacing`: number, `offset`: [Vector](vector.md), `color`: [Color](color.md), `shaders`: string[]): *[Text](text.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`zOrder` | number | - |
`value` | string | - |
`font` | string | - |
`align` | [TextAlignment](../enums/textalignment.md) | TextAlignment.Left |
`spacing` | number | Text.DEFAULT_SPACING |
`offset` | [Vector](vector.md) | new Vector(0,0) |
`color` | [Color](color.md) | new Color(0, 0, 0, 1) |
`shaders` | string[] | [
            ShaderAsset.DEFAULT_VERTEX_SHADER_NAME,
            ShaderAsset.DEFAULT_TEXT_FRAGMENT_SHADER_NAME
        ] |

**Returns:** *[Text](text.md)*

## Properties

###  align

• **align**: *[TextAlignment](../enums/textalignment.md)*

Text Alignment, changes the meaning of the transform position.

___

###  color

• **color**: *[Color](color.md)*

Text color.

___

###  font

• **font**: *string*

Font to use when rendering, must already be loaded with a FontAsset.

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  offset

• **offset**: *[Vector](vector.md)*

The offset from the text origin to place the text, allows adding text
above or below an entity.

___

###  shaders

• **shaders**: *string[]*

List of shaders to apply.

___

###  spacing

• **spacing**: *number*

Spacing between each character, represented as a percentage of the
character's width, taken from transform.scale.x.

___

###  value

• **value**: *string*

String to render.

___

###  zOrder

• **zOrder**: *number*

Order which the text should appear, if it should appear infront/behind other
objects, the higher the value the more precedence it is given and will
appear in front of objects with a lower value.

___

### `Static` `Private` DEFAULT_SPACING

▪ **DEFAULT_SPACING**: *0.3* = 0.3

Default spacing between characters in text.

___

### `Static` KEY

▪ **KEY**: *"text"* = "text"

Key of the text component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
