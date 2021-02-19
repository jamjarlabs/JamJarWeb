# Class: Text

Text is a component for specifying text to render, alongside options for
rendering it such as font, alignment, color and shaders.

## Hierarchy

* [*Component*](component.md)

  ↳ **Text**

## Table of contents

### Constructors

- [constructor](text.md#constructor)

### Properties

- [align](text.md#align)
- [color](text.md#color)
- [font](text.md#font)
- [key](text.md#key)
- [offset](text.md#offset)
- [shaders](text.md#shaders)
- [spacing](text.md#spacing)
- [value](text.md#value)
- [zOrder](text.md#zorder)
- [KEY](text.md#key)
- [MESSAGE\_ADD](text.md#message_add)
- [MESSAGE\_REMOVE](text.md#message_remove)

### Methods

- [Free](text.md#free)

## Constructors

### constructor

\+ **new Text**(`zOrder`: *number*, `value`: *string*, `font`: *string*, `align?`: [*TextAlignment*](../enums/textalignment.md), `spacing?`: *number*, `offset?`: [*Vector*](vector.md), `color?`: [*Color*](color.md), `shaders?`: *string*[]): [*Text*](text.md)

#### Parameters:

Name | Type |
:------ | :------ |
`zOrder` | *number* |
`value` | *string* |
`font` | *string* |
`align` | [*TextAlignment*](../enums/textalignment.md) |
`spacing` | *number* |
`offset` | [*Vector*](vector.md) |
`color` | [*Color*](color.md) |
`shaders` | *string*[] |

**Returns:** [*Text*](text.md)

Inherited from: [Component](component.md)

## Properties

### align

• **align**: [*TextAlignment*](../enums/textalignment.md)

Text Alignment, changes the meaning of the transform position.

___

### color

• **color**: [*Color*](color.md)

Text color.

___

### font

• **font**: *string*

Font to use when rendering, must already be loaded with a FontAsset.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### offset

• **offset**: [*Vector*](vector.md)

The offset from the text origin to place the text, allows adding text
above or below an entity.

___

### shaders

• **shaders**: *string*[]

List of shaders to apply.

___

### spacing

• **spacing**: *number*

Spacing between each character, represented as a percentage of the
character's width, taken from transform.scale.x.

___

### value

• **value**: *string*

String to render.

___

### zOrder

• **zOrder**: *number*

Order which the text should appear, if it should appear infront/behind other
objects, the higher the value the more precedence it is given and will
appear in front of objects with a lower value.

___

### KEY

▪ `Readonly` `Static` **KEY**: *text*= "text"

Key of the text component.

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

Inherited from: [Component](component.md).[MESSAGE_ADD](component.md#message_add)

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

Inherited from: [Component](component.md).[MESSAGE_REMOVE](component.md#message_remove)

## Methods

### Free

▸ **Free**(): *void*

**Returns:** *void*

Overrides: [Component](component.md)
