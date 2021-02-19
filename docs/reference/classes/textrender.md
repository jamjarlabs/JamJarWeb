# Class: TextRender

TextRender is all of the information required to a character,
alongside additional information that could be useful for
the rendering process/shaders.

## Table of contents

### Constructors

- [constructor](textrender.md#constructor)

### Properties

- [align](textrender.md#align)
- [buffer](textrender.md#buffer)
- [color](textrender.md#color)
- [cutoff](textrender.md#cutoff)
- [family](textrender.md#family)
- [radius](textrender.md#radius)
- [size](textrender.md#size)
- [weight](textrender.md#weight)
- [zOrder](textrender.md#zorder)

## Constructors

### constructor

\+ **new TextRender**(`family`: *string*, `weight`: *string*, `buffer`: *number*, `radius`: *number*, `cutoff`: *number*, `size`: *number*, `color`: [*Color*](color.md), `zOrder`: *number*, `align`: [*TextAlignment*](../enums/textalignment.md)): [*TextRender*](textrender.md)

#### Parameters:

Name | Type |
:------ | :------ |
`family` | *string* |
`weight` | *string* |
`buffer` | *number* |
`radius` | *number* |
`cutoff` | *number* |
`size` | *number* |
`color` | [*Color*](color.md) |
`zOrder` | *number* |
`align` | [*TextAlignment*](../enums/textalignment.md) |

**Returns:** [*TextRender*](textrender.md)

## Properties

### align

• **align**: [*TextAlignment*](../enums/textalignment.md)

Text Alignment.

___

### buffer

• **buffer**: *number*

Whitespace buffer around a glyph in the atlas in pixels.

___

### color

• **color**: [*Color*](color.md)

Color of the text.

___

### cutoff

• **cutoff**: *number*

How much of the radius (relative) is used for the
inside part the glyph.

___

### family

• **family**: *string*

CSS Font Family.

___

### radius

• **radius**: *number*

How many pixels around the glyph shape in the atlas
to use for encoding distance.

___

### size

• **size**: *number*

CSS font size in pixels.

___

### weight

• **weight**: *string*

CSS Font Weight.

___

### zOrder

• **zOrder**: *number*

Order which the text should appear, if it should appear infront/behind other
objects, the higher the value the more precedence it is given and will
appear in front of objects with a lower value.
