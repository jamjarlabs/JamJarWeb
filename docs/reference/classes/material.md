
# Class: Material

Material represents the combination of a texture and a list of shaders to apply
to a render object, for example to be used as part of a sprite.

## Hierarchy

* **Material**

## Index

### Constructors

* [constructor](material.md#constructor)

### Properties

* [shaders](material.md#shaders)
* [texture](material.md#texture)

## Constructors

###  constructor

\+ **new Material**(`texture`: [Texture](texture.md), `shaders`: string[]): *[Material](material.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`texture` | [Texture](texture.md) | - |
`shaders` | string[] | [
        ShaderAsset.DEFAULT_VERTEX_SHADER_NAME, 
        ShaderAsset.DEFAULT_FRAGMENT_SHADER_NAME
    ] |

**Returns:** *[Material](material.md)*

## Properties

###  shaders

• **shaders**: *string[]*

List of shaders to apply.

___

###  texture

• **texture**: *[Texture](texture.md)*

The texture to apply
