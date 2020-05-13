
# Class: FontRequest

## Hierarchy

* **FontRequest**

## Index

### Constructors

* [constructor](fontrequest.md#constructor)

### Properties

* [buffer](fontrequest.md#buffer)
* [characters](fontrequest.md#characters)
* [cutoff](fontrequest.md#cutoff)
* [family](fontrequest.md#family)
* [generateMipmaps](fontrequest.md#generatemipmaps)
* [magFilter](fontrequest.md#magfilter)
* [minFilter](fontrequest.md#minfilter)
* [name](fontrequest.md#name)
* [radius](fontrequest.md#radius)
* [size](fontrequest.md#size)
* [weight](fontrequest.md#weight)
* [xWrap](fontrequest.md#xwrap)
* [yWrap](fontrequest.md#ywrap)
* [MESSAGE_REQUEST_LOAD](fontrequest.md#static-message_request_load)

## Constructors

###  constructor

\+ **new FontRequest**(`name`: string, `family`: string, `weight`: string, `size`: number, `fontOptions`: [IFontOptions](../interfaces/ifontoptions.md), `textureOptions`: [ITextureOptions](../interfaces/itextureoptions.md)): *[FontRequest](fontrequest.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`family` | string | - |
`weight` | string | - |
`size` | number | - |
`fontOptions` | [IFontOptions](../interfaces/ifontoptions.md) | {} |
`textureOptions` | [ITextureOptions](../interfaces/itextureoptions.md) | {} |

**Returns:** *[FontRequest](fontrequest.md)*

## Properties

###  buffer

• **buffer**: *number*

Whitespace buffer around a glyph in the atlas in pixels.

___

###  characters

• **characters**: *string*

Characters to pre-render for the font, should be
all characters that will be displayed with the font.

___

###  cutoff

• **cutoff**: *number*

How much of the radius (relative) is used for the
inside part the glyph.

___

###  family

• **family**: *string*

CSS font family, for example "Roboto".

___

###  generateMipmaps

• **generateMipmaps**: *boolean*

___

###  magFilter

• **magFilter**: *[TextureFiltering](../enums/texturefiltering.md)*

___

###  minFilter

• **minFilter**: *[TextureFiltering](../enums/texturefiltering.md)*

___

###  name

• **name**: *string*

Unique name to identify the font and settings combination.

___

###  radius

• **radius**: *number*

How many pixels around the glyph shape in the atlas
to use for encoding distance.

___

###  size

• **size**: *number*

CSS font size in pixels.

___

###  weight

• **weight**: *string*

CSS font weight.

___

###  xWrap

• **xWrap**: *[TextureWrapping](../enums/texturewrapping.md)*

___

###  yWrap

• **yWrap**: *[TextureWrapping](../enums/texturewrapping.md)*

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_font_load"* = "request_font_load"

Message to request a font asset to be loaded.
