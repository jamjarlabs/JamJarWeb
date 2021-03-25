# Class: ImageRequest

ImageRequest specifies all information required to load and prepare an image.
This includes the source of the image, if the image should be fetched from a
source (e.g. from a URL), and options for how the texture the image is
rendered to should be generated.

## Table of contents

### Constructors

- [constructor](imagerequest.md#constructor)

### Properties

- [generateMipmaps](imagerequest.md#generatemipmaps)
- [magFilter](imagerequest.md#magfilter)
- [minFilter](imagerequest.md#minfilter)
- [mirror](imagerequest.md#mirror)
- [name](imagerequest.md#name)
- [source](imagerequest.md#source)
- [xWrap](imagerequest.md#xwrap)
- [yWrap](imagerequest.md#ywrap)
- [MESSAGE\_REQUEST\_LOAD](imagerequest.md#message_request_load)

## Constructors

### constructor

\+ **new ImageRequest**(`name`: *string*, `source`: *string*, `textureOptions?`: [*ITextureOptions*](../interfaces/itextureoptions.md)): [*ImageRequest*](imagerequest.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`source` | *string* |
`textureOptions` | [*ITextureOptions*](../interfaces/itextureoptions.md) |

**Returns:** [*ImageRequest*](imagerequest.md)

## Properties

### generateMipmaps

• **generateMipmaps**: *boolean*

Texture option for generating mipmaps or not.
True = generate mipmaps, false = don't generate mipmaps.

___

### magFilter

• **magFilter**: [*TextureFiltering*](../enums/texturefiltering.md)

Texture magnification filter.

___

### minFilter

• **minFilter**: [*TextureFiltering*](../enums/texturefiltering.md)

Texture minification filter.

___

### mirror

• **mirror**: *boolean*

Option for mirroring the texture when loading it (vertical and horizontal
flip). True = mirror, false = don't mirror.

___

### name

• **name**: *string*

Name of the image asset, how it is referred to throughout the system,
should be unique.

___

### source

• **source**: *string*

Source of the image, where the image exists (URL, filepath etc.).

___

### xWrap

• **xWrap**: [*TextureWrapping*](../enums/texturewrapping.md)

Texture wrapping along x axis.

___

### yWrap

• **yWrap**: [*TextureWrapping*](../enums/texturewrapping.md)

Texture wrapping along y axis.

___

### MESSAGE\_REQUEST\_LOAD

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_LOAD**: *request_image_load*= "request\_image\_load"

Message to request an image asset to be loaded.
