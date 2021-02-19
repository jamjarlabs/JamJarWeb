# Interface: IFontOptions

IFontOptions represents optional properties for a font being loaded, will be
generally used with defaults that are overridden.

## Table of contents

### Properties

- [buffer](ifontoptions.md#buffer)
- [characters](ifontoptions.md#characters)
- [cutoff](ifontoptions.md#cutoff)
- [radius](ifontoptions.md#radius)

## Properties

### buffer

• `Optional` **buffer**: *undefined* \| *number*

Whitespace buffer around a glyph in the atlas in pixels.

___

### characters

• `Optional` **characters**: *undefined* \| *string*

Characters to pre-render for the font, should be
all characters that will be displayed with the font.

___

### cutoff

• `Optional` **cutoff**: *undefined* \| *number*

How much of the radius (relative) is used for the
inside part the glyph.

___

### radius

• `Optional` **radius**: *undefined* \| *number*

How many pixels around the glyph shape in the atlas
to use for encoding distance.
