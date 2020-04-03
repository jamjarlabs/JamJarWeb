
# Class: FontAsset

FontAsset is the full representation of a font that can be loaded,
used to request that a font should be loaded with the settings
provided. Once a font has been loaded by using a font asset, the
font will be available for use in rendering.
Generally a text pre-rendering system will take a message with the
font asset and use it to generate a bitmap texture atlas for the
font.

## Hierarchy

* **FontAsset**

## Index

### Constructors

* [constructor](fontasset.md#constructor)

### Properties

* [buffer](fontasset.md#buffer)
* [characters](fontasset.md#characters)
* [cutoff](fontasset.md#cutoff)
* [family](fontasset.md#family)
* [name](fontasset.md#name)
* [radius](fontasset.md#radius)
* [size](fontasset.md#size)
* [weight](fontasset.md#weight)
* [ASCII](fontasset.md#static-ascii)
* [DEFAULT_BUFFER](fontasset.md#static-private-default_buffer)
* [DEFAULT_CUTOFF](fontasset.md#static-private-default_cutoff)
* [DEFAULT_RADIUS](fontasset.md#static-private-default_radius)
* [MESSAGE_FINISH_LOAD](fontasset.md#static-message_finish_load)
* [MESSAGE_REQUEST_LOAD](fontasset.md#static-message_request_load)

## Constructors

###  constructor

\+ **new FontAsset**(`name`: string, `family`: string, `weight`: string, `size`: number, `buffer`: number, `radius`: number, `cutoff`: number, `characters`: string): *[FontAsset](fontasset.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`family` | string | - |
`weight` | string | - |
`size` | number | - |
`buffer` | number | FontAsset.DEFAULT_BUFFER |
`radius` | number | FontAsset.DEFAULT_RADIUS |
`cutoff` | number | FontAsset.DEFAULT_CUTOFF |
`characters` | string | FontAsset.ASCII |

**Returns:** *[FontAsset](fontasset.md)*

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

### `Static` ASCII

▪ **ASCII**: *" !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~"* = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`

ASCII characters string

___

### `Static` `Private` DEFAULT_BUFFER

▪ **DEFAULT_BUFFER**: *3* = 3

Default buffer

___

### `Static` `Private` DEFAULT_CUTOFF

▪ **DEFAULT_CUTOFF**: *0.25* = 0.25

Default cutoff

___

### `Static` `Private` DEFAULT_RADIUS

▪ **DEFAULT_RADIUS**: *8* = 8

Default radius

___

### `Static` MESSAGE_FINISH_LOAD

▪ **MESSAGE_FINISH_LOAD**: *"finish_font_load"* = "finish_font_load"

Message when a font asset is finished loading.

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_font_load"* = "request_font_load"

Message to request a font asset to be loaded.
