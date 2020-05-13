
# Class: ImageAsset

ImageAsset represents a graphical image asset that has been loaded/
attempted to be loaded.
Stores meta info around the image, such as a name, the success
of the image being loaded, and any errors from loading it.
Also stores the image itself.

## Hierarchy

* **ImageAsset**

## Index

### Constructors

* [constructor](imageasset.md#constructor)

### Properties

* [error](imageasset.md#optional-error)
* [generateMipmaps](imageasset.md#generatemipmaps)
* [image](imageasset.md#image)
* [magFilter](imageasset.md#magfilter)
* [minFilter](imageasset.md#minfilter)
* [name](imageasset.md#name)
* [success](imageasset.md#success)
* [xWrap](imageasset.md#xwrap)
* [yWrap](imageasset.md#ywrap)
* [MESSAGE_FINISH_LOAD](imageasset.md#static-message_finish_load)

## Constructors

###  constructor

\+ **new ImageAsset**(`name`: string, `image`: HTMLImageElement | ImageData, `success`: boolean, `xWrap`: [TextureWrapping](../enums/texturewrapping.md), `yWrap`: [TextureWrapping](../enums/texturewrapping.md), `magFilter`: [TextureFiltering](../enums/texturefiltering.md), `minFilter`: [TextureFiltering](../enums/texturefiltering.md), `generateMipmaps`: boolean, `error?`: Error): *[ImageAsset](imageasset.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`image` | HTMLImageElement &#124; ImageData |
`success` | boolean |
`xWrap` | [TextureWrapping](../enums/texturewrapping.md) |
`yWrap` | [TextureWrapping](../enums/texturewrapping.md) |
`magFilter` | [TextureFiltering](../enums/texturefiltering.md) |
`minFilter` | [TextureFiltering](../enums/texturefiltering.md) |
`generateMipmaps` | boolean |
`error?` | Error |

**Returns:** *[ImageAsset](imageasset.md)*

## Properties

### `Optional` error

• **error**? : *Error*

An optional field, contains any error from loading the image, if there is
none it will be undefined.

___

###  generateMipmaps

• **generateMipmaps**: *boolean*

___

###  image

• **image**: *HTMLImageElement | ImageData*

The actual image.

___

###  magFilter

• **magFilter**: *[TextureFiltering](../enums/texturefiltering.md)*

___

###  minFilter

• **minFilter**: *[TextureFiltering](../enums/texturefiltering.md)*

___

###  name

• **name**: *string*

Name of the image asset, how it is referred to throughout the system,
should be unique.

___

###  success

• **success**: *boolean*

A boolean indicating the success of loading the image, true = successful
load, false = failed loading.

___

###  xWrap

• **xWrap**: *[TextureWrapping](../enums/texturewrapping.md)*

___

###  yWrap

• **yWrap**: *[TextureWrapping](../enums/texturewrapping.md)*

___

### `Static` MESSAGE_FINISH_LOAD

▪ **MESSAGE_FINISH_LOAD**: *"finish_image_load"* = "finish_image_load"

Message when an image asset is finished loading.
