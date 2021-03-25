# Class: ImageAsset

ImageAsset represents a graphical image asset that has been loaded/
attempted to be loaded.
Stores meta info around the image, such as a name, the success
of the image being loaded, and any errors from loading it.
Also stores the image itself.

## Table of contents

### Constructors

- [constructor](imageasset.md#constructor)

### Properties

- [error](imageasset.md#error)
- [generateMipmaps](imageasset.md#generatemipmaps)
- [image](imageasset.md#image)
- [magFilter](imageasset.md#magfilter)
- [minFilter](imageasset.md#minfilter)
- [mirror](imageasset.md#mirror)
- [name](imageasset.md#name)
- [success](imageasset.md#success)
- [xWrap](imageasset.md#xwrap)
- [yWrap](imageasset.md#ywrap)
- [MESSAGE\_FINISH\_LOAD](imageasset.md#message_finish_load)

## Constructors

### constructor

\+ **new ImageAsset**(`name`: *string*, `image`: HTMLImageElement \| ImageData, `success`: *boolean*, `xWrap`: [*TextureWrapping*](../enums/texturewrapping.md), `yWrap`: [*TextureWrapping*](../enums/texturewrapping.md), `magFilter`: [*TextureFiltering*](../enums/texturefiltering.md), `minFilter`: [*TextureFiltering*](../enums/texturefiltering.md), `generateMipmaps`: *boolean*, `mirror`: *boolean*, `error?`: Error): [*ImageAsset*](imageasset.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`image` | HTMLImageElement \| ImageData |
`success` | *boolean* |
`xWrap` | [*TextureWrapping*](../enums/texturewrapping.md) |
`yWrap` | [*TextureWrapping*](../enums/texturewrapping.md) |
`magFilter` | [*TextureFiltering*](../enums/texturefiltering.md) |
`minFilter` | [*TextureFiltering*](../enums/texturefiltering.md) |
`generateMipmaps` | *boolean* |
`mirror` | *boolean* |
`error?` | Error |

**Returns:** [*ImageAsset*](imageasset.md)

## Properties

### error

• `Optional` **error**: *undefined* \| Error

An optional field, contains any error from loading the image, if there is
none it will be undefined.

___

### generateMipmaps

• **generateMipmaps**: *boolean*

Texture option for generating mipmaps or not.
True = generate mipmaps, false = don't generate mipmaps.

___

### image

• **image**: HTMLImageElement \| ImageData

The actual image.

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

### success

• **success**: *boolean*

A boolean indicating the success of loading the image, true = successful
load, false = failed loading.

___

### xWrap

• **xWrap**: [*TextureWrapping*](../enums/texturewrapping.md)

Texture wrapping along x axis.

___

### yWrap

• **yWrap**: [*TextureWrapping*](../enums/texturewrapping.md)

Texture wrapping along y axis.

___

### MESSAGE\_FINISH\_LOAD

▪ `Readonly` `Static` **MESSAGE\_FINISH\_LOAD**: *finish_image_load*= "finish\_image\_load"

Message when an image asset is finished loading.
