
# Interface: IFontOptions

IFontOptions represents optional properties for a font being loaded, will be
generally used with defaults that are overridden.

## Hierarchy

* **IFontOptions**

## Index

### Properties

* [buffer](ifontoptions.md#optional-buffer)
* [characters](ifontoptions.md#optional-characters)
* [cutoff](ifontoptions.md#optional-cutoff)
* [radius](ifontoptions.md#optional-radius)

## Properties

### `Optional` buffer

• **buffer**? : *undefined | number*

Whitespace buffer around a glyph in the atlas in pixels.

___

### `Optional` characters

• **characters**? : *undefined | string*

Characters to pre-render for the font, should be
all characters that will be displayed with the font.

___

### `Optional` cutoff

• **cutoff**? : *undefined | number*

How much of the radius (relative) is used for the
inside part the glyph.

___

### `Optional` radius

• **radius**? : *undefined | number*

How many pixels around the glyph shape in the atlas
to use for encoding distance.
