
# Class: Material

Material represents how something is displayed and rendered, specifying
shaders, textures and colors.

## Hierarchy

* **Material**

## Index

### Constructors

* [constructor](material.md#constructor)

### Properties

* [color](material.md#color)
* [shaders](material.md#shaders)
* [texture](material.md#optional-texture)
* [NO_TEXTURE_COLOR](material.md#static-private-no_texture_color)

## Constructors

###  constructor

\+ **new Material**(`options`: [IMaterialOptions](../interfaces/imaterialoptions.md)): *[Material](material.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [IMaterialOptions](../interfaces/imaterialoptions.md) | {} |

**Returns:** *[Material](material.md)*

## Properties

###  color

• **color**: *[Color](color.md)*

The color to apply, if there is a texture the texture output is mixed
this color, if there is no texture the color is used directly.

___

###  shaders

• **shaders**: *string[]*

List of shaders to apply.

___

### `Optional` texture

• **texture**? : *[Texture](texture.md)*

The texture to apply.

___

### `Static` `Private` NO_TEXTURE_COLOR

▪ **NO_TEXTURE_COLOR**: *[Color](color.md)‹›* = new Color(0.54, 0, 0.54, 1)
