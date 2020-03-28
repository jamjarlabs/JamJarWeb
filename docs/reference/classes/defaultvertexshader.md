
# Class: DefaultVertexShader

## Hierarchy

* [GLSLShader](glslshader.md)

  ↳ **DefaultVertexShader**

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](defaultvertexshader.md#constructor)

### Properties

* [perRenderable](defaultvertexshader.md#optional-perrenderable)
* [perShader](defaultvertexshader.md#optional-pershader)
* [perTexture](defaultvertexshader.md#optional-pertexture)
* [source](defaultvertexshader.md#source)
* [type](defaultvertexshader.md#type)
* [FRAGMENT_TYPE](defaultvertexshader.md#static-fragment_type)
* [SOURCE](defaultvertexshader.md#static-private-source)
* [VERTEX_TYPE](defaultvertexshader.md#static-vertex_type)

### Methods

* [PER_RENDERABLE](defaultvertexshader.md#static-private-per_renderable)
* [PER_SHADER](defaultvertexshader.md#static-private-per_shader)

## Constructors

###  constructor

\+ **new DefaultVertexShader**(): *[DefaultVertexShader](defaultvertexshader.md)*

*Overrides [GLSLShader](glslshader.md).[constructor](glslshader.md#constructor)*

**Returns:** *[DefaultVertexShader](defaultvertexshader.md)*

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
        in vec2 aVertexPosition;
        in vec2 aTexturePosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        out vec2 vTextureCoordinate;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
            vTextureCoordinate = aTexturePosition;
        }
    "* = `#version 300 es
        in vec2 aVertexPosition;
        in vec2 aTexturePosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        out vec2 vTextureCoordinate;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
            vTextureCoordinate = aTexturePosition;
        }
    `

___

### `Static` VERTEX_TYPE

▪ **VERTEX_TYPE**: *"vertex"* = "vertex"

*Inherited from [GLSLShader](glslshader.md).[VERTEX_TYPE](glslshader.md#static-vertex_type)*

## Methods

### `Static` `Private` PER_RENDERABLE

▸ **PER_RENDERABLE**(`context`: [GLSLContext](glslcontext.md), `texture`: WebGLTexture, `renderable`: [Renderable](renderable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |
`texture` | WebGLTexture |
`renderable` | [Renderable](renderable.md) |

**Returns:** *void*

___

### `Static` `Private` PER_SHADER

▸ **PER_SHADER**(`context`: [GLSLContext](glslcontext.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |

**Returns:** *void*
