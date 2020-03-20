
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
* [image](imageasset.md#image)
* [name](imageasset.md#name)
* [success](imageasset.md#success)

## Constructors

###  constructor

\+ **new ImageAsset**(`name`: string, `image`: HTMLImageElement, `success`: boolean, `error?`: Error): *[ImageAsset](imageasset.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`image` | HTMLImageElement |
`success` | boolean |
`error?` | Error |

**Returns:** *[ImageAsset](imageasset.md)*

## Properties

### `Optional` error

• **error**? : *Error*

An optional field, contains any error from loading the image, if there is
none it will be undefined.

___

###  image

• **image**: *HTMLImageElement*

The actual image.

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
