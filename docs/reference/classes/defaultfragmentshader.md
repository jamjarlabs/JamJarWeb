
# Class: DefaultFragmentShader

## Hierarchy

* [GLSLShader](glslshader.md)

  ↳ **DefaultFragmentShader**

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](defaultfragmentshader.md#constructor)

### Properties

* [perRenderable](defaultfragmentshader.md#optional-perrenderable)
* [perShader](defaultfragmentshader.md#optional-pershader)
* [perTexture](defaultfragmentshader.md#optional-pertexture)
* [source](defaultfragmentshader.md#source)
* [type](defaultfragmentshader.md#type)
* [FRAGMENT_TYPE](defaultfragmentshader.md#static-fragment_type)
* [SOURCE](defaultfragmentshader.md#static-private-source)
* [VERTEX_TYPE](defaultfragmentshader.md#static-vertex_type)

### Methods

* [PER_TEXTURE](defaultfragmentshader.md#static-private-per_texture)

## Constructors

###  constructor

\+ **new DefaultFragmentShader**(): *[DefaultFragmentShader](defaultfragmentshader.md)*

*Overrides [GLSLShader](glslshader.md).[constructor](glslshader.md#constructor)*

**Returns:** *[DefaultFragmentShader](defaultfragmentshader.md)*

## Properties

### `Optional` perRenderable

• **perRenderable**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perRenderable](glslshader.md#optional-perrenderable)*

___

### `Optional` perShader

• **perShader**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perShader](glslshader.md#optional-pershader)*

___

### `Optional` perTexture

• **perTexture**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perTexture](glslshader.md#optional-pertexture)*

___

###  source

• **source**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[source](../interfaces/ishader.md#source)*

*Inherited from [GLSLShader](glslshader.md).[source](glslshader.md#source)*

___

###  type

• **type**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[type](../interfaces/ishader.md#type)*

*Inherited from [GLSLShader](glslshader.md).[type](glslshader.md#type)*

___

### `Static` FRAGMENT_TYPE

▪ **FRAGMENT_TYPE**: *"fragment"* = "fragment"

*Inherited from [GLSLShader](glslshader.md).[FRAGMENT_TYPE](glslshader.md#static-fragment_type)*

___

### `Static` `Private` SOURCE

▪ **SOURCE**: *"#version 300 es
        precision mediump float;

        uniform sampler2D uTexture;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            outColor = texture(uTexture, vTextureCoordinate);
        }
    "* = `#version 300 es
        precision mediump float;

        uniform sampler2D uTexture;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            outColor = texture(uTexture, vTextureCoordinate);
        }
    `

___

### `Static` VERTEX_TYPE

▪ **VERTEX_TYPE**: *"vertex"* = "vertex"

*Inherited from [GLSLShader](glslshader.md).[VERTEX_TYPE](glslshader.md#static-vertex_type)*

## Methods

### `Static` `Private` PER_TEXTURE

▸ **PER_TEXTURE**(`context`: [GLSLContext](glslcontext.md), `texture`: WebGLTexture): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |
`texture` | WebGLTexture |

**Returns:** *void*
