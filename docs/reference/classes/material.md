# Class: Material

Material represents how something is displayed and rendered, specifying
shaders, textures and colors.

## Implements

* [*IFreeable*](../interfaces/ifreeable.md)

## Table of contents

### Constructors

- [constructor](material.md#constructor)

### Properties

- [color](material.md#color)
- [shaders](material.md#shaders)
- [texture](material.md#texture)

### Methods

- [Copy](material.md#copy)
- [Free](material.md#free)

## Constructors

### constructor

\+ **new Material**(`options?`: [*IMaterialOptions*](../interfaces/imaterialoptions.md)): [*Material*](material.md)

#### Parameters:

Name | Type |
:------ | :------ |
`options` | [*IMaterialOptions*](../interfaces/imaterialoptions.md) |

**Returns:** [*Material*](material.md)

## Properties

### color

• **color**: [*Color*](color.md)

The color to apply, if there is a texture the texture output is mixed
this color, if there is no texture the color is used directly.

___

### shaders

• **shaders**: *string*[]

List of shaders to apply.

___

### texture

• `Optional` **texture**: *undefined* \| [*Texture*](texture.md)

The texture to apply.

## Methods

### Copy

▸ **Copy**(): [*Material*](material.md)

Makes a value copy of the material.

**Returns:** [*Material*](material.md)

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IFreeable](../interfaces/ifreeable.md)
