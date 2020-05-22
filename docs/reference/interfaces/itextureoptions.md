
# Interface: ITextureOptions

ITextureOptions represents optional properties for a texture being rendered,
will generally be used with defaults that are overridden.

## Hierarchy

* **ITextureOptions**

## Index

### Properties

* [generateMipmaps](itextureoptions.md#optional-generatemipmaps)
* [magFilter](itextureoptions.md#optional-magfilter)
* [minFilter](itextureoptions.md#optional-minfilter)
* [mirror](itextureoptions.md#optional-mirror)
* [xWrap](itextureoptions.md#optional-xwrap)
* [yWrap](itextureoptions.md#optional-ywrap)

## Properties

### `Optional` generateMipmaps

• **generateMipmaps**? : *undefined | false | true*

Flag for generating mipmaps or not, true = generate, false = don't generate

___

### `Optional` magFilter

• **magFilter**? : *[TextureFiltering](../enums/texturefiltering.md)*

Magnification filter.

___

### `Optional` minFilter

• **minFilter**? : *[TextureFiltering](../enums/texturefiltering.md)*

Minification filter.

___

### `Optional` mirror

• **mirror**? : *undefined | false | true*

Flag for determining if the texture should be mirrored or not (flip
horizontal and vertical), true = mirror, false = don't mirror.

___

### `Optional` xWrap

• **xWrap**? : *[TextureWrapping](../enums/texturewrapping.md)*

Wrapping along the x-axis

___

### `Optional` yWrap

• **yWrap**? : *[TextureWrapping](../enums/texturewrapping.md)*

Wrapping along the y-axis
