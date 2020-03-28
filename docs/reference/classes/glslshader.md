
# Class: GLSLShader

## Hierarchy

* **GLSLShader**

  ↳ [DefaultVertexShader](defaultvertexshader.md)

  ↳ [DefaultFragmentShader](defaultfragmentshader.md)

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](glslshader.md#constructor)

### Properties

* [perRenderable](glslshader.md#optional-perrenderable)
* [perShader](glslshader.md#optional-pershader)
* [perTexture](glslshader.md#optional-pertexture)
* [source](glslshader.md#source)
* [type](glslshader.md#type)
* [FRAGMENT_TYPE](glslshader.md#static-fragment_type)
* [VERTEX_TYPE](glslshader.md#static-vertex_type)

## Constructors

###  constructor

\+ **new GLSLShader**(`type`: string, `source`: string, `perShader?`: undefined | function, `perTexture?`: undefined | function, `perRenderable?`: undefined | function): *[GLSLShader](glslshader.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`source` | string |
`perShader?` | undefined &#124; function |
`perTexture?` | undefined &#124; function |
`perRenderable?` | undefined &#124; function |

**Returns:** *[GLSLShader](glslshader.md)*

## Properties

### `Optional` perRenderable

• **perRenderable**? : *undefined | function*

___

### `Optional` perShader

• **perShader**? : *undefined | function*

___

### `Optional` perTexture

• **perTexture**? : *undefined | function*

___

###  source

• **source**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[source](../interfaces/ishader.md#source)*

___

###  type

• **type**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[type](../interfaces/ishader.md#type)*

___

### `Static` FRAGMENT_TYPE

▪ **FRAGMENT_TYPE**: *"fragment"* = "fragment"

___

### `Static` VERTEX_TYPE

▪ **VERTEX_TYPE**: *"vertex"* = "vertex"
