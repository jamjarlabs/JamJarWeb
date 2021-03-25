# Interface: ITextureOptions

ITextureOptions represents optional properties for a texture being rendered,
will generally be used with defaults that are overridden.

## Table of contents

### Properties

- [generateMipmaps](itextureoptions.md#generatemipmaps)
- [magFilter](itextureoptions.md#magfilter)
- [minFilter](itextureoptions.md#minfilter)
- [mirror](itextureoptions.md#mirror)
- [xWrap](itextureoptions.md#xwrap)
- [yWrap](itextureoptions.md#ywrap)

## Properties

### generateMipmaps

• `Optional` **generateMipmaps**: *undefined* \| *boolean*

Flag for generating mipmaps or not, true = generate, false = don't generate

___

### magFilter

• `Optional` **magFilter**: *undefined* \| [*NEAREST*](../enums/texturefiltering.md#nearest) \| [*BILINEAR*](../enums/texturefiltering.md#bilinear) \| [*TRILINEAR*](../enums/texturefiltering.md#trilinear)

Magnification filter.

___

### minFilter

• `Optional` **minFilter**: *undefined* \| [*NEAREST*](../enums/texturefiltering.md#nearest) \| [*BILINEAR*](../enums/texturefiltering.md#bilinear) \| [*TRILINEAR*](../enums/texturefiltering.md#trilinear)

Minification filter.

___

### mirror

• `Optional` **mirror**: *undefined* \| *boolean*

Flag for determining if the texture should be mirrored or not (flip
horizontal and vertical), true = mirror, false = don't mirror.

___

### xWrap

• `Optional` **xWrap**: *undefined* \| [*REPEAT*](../enums/texturewrapping.md#repeat) \| [*MIRRORED\_REPEAT*](../enums/texturewrapping.md#mirrored_repeat) \| [*CLAMP\_TO\_EDGE*](../enums/texturewrapping.md#clamp_to_edge)

Wrapping along the x-axis

___

### yWrap

• `Optional` **yWrap**: *undefined* \| [*REPEAT*](../enums/texturewrapping.md#repeat) \| [*MIRRORED\_REPEAT*](../enums/texturewrapping.md#mirrored_repeat) \| [*CLAMP\_TO\_EDGE*](../enums/texturewrapping.md#clamp_to_edge)

Wrapping along the y-axis
