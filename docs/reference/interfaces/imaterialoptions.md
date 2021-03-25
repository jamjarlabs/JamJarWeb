# Interface: IMaterialOptions

IMaterialOptions represents optional properties for a material, will
generally be used with defaults that are overridden.

## Table of contents

### Properties

- [color](imaterialoptions.md#color)
- [shaders](imaterialoptions.md#shaders)
- [texture](imaterialoptions.md#texture)

## Properties

### color

• `Optional` **color**: *undefined* \| [*Color*](../classes/color.md)

The color to apply, either to a texture if there is one, or just the
direct color if there is no texture.

___

### shaders

• `Optional` **shaders**: *undefined* \| *string*[]

List of shaders to apply.

___

### texture

• `Optional` **texture**: *undefined* \| [*Texture*](../classes/texture.md)

The texture to apply.
