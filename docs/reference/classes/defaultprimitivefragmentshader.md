
# Class: DefaultPrimitiveFragmentShader

## Hierarchy

* [GLSLShader](glslshader.md)

  ↳ **DefaultPrimitiveFragmentShader**

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](defaultprimitivefragmentshader.md#constructor)

### Properties

* [perRenderable](defaultprimitivefragmentshader.md#optional-perrenderable)
* [perShader](defaultprimitivefragmentshader.md#optional-pershader)
* [perTexture](defaultprimitivefragmentshader.md#optional-pertexture)
* [source](defaultprimitivefragmentshader.md#source)
* [type](defaultprimitivefragmentshader.md#type)
* [SOURCE](defaultprimitivefragmentshader.md#static-private-source)

### Methods

* [PER_RENDERABLE](defaultprimitivefragmentshader.md#static-private-per_renderable)

## Constructors

###  constructor

\+ **new DefaultPrimitiveFragmentShader**(): *[DefaultPrimitiveFragmentShader](defaultprimitivefragmentshader.md)*

*Overrides [GLSLShader](glslshader.md).[constructor](glslshader.md#constructor)*

**Returns:** *[DefaultPrimitiveFragmentShader](defaultprimitivefragmentshader.md)*

## Properties

### `Optional` perRenderable

• **perRenderable**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perRenderable](glslshader.md#optional-perrenderable)*

Hook for injecting variables for the GLSL shader at the
per renderable stage of the rendering process, runs once
per renderable used, should inject variables for renderable
specific variables.

___

### `Optional` perShader

• **perShader**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perShader](glslshader.md#optional-pershader)*

Hook for injecting variables for the GLSL shader at the
per shader stage of the rendering process, runs once
per program (grouping of shaders) used, should inject
variables for shader specific, but not texture or renderable
specific variables.

___

### `Optional` perTexture

• **perTexture**? : *undefined | function*

*Inherited from [GLSLShader](glslshader.md).[perTexture](glslshader.md#optional-pertexture)*

Hook for injecting variables for the GLSL shader at the
per texture stage of the rendering process, runs once
per texture used, should inject variables for texture specific,
but not renderable specific variables.

___

###  source

• **source**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[source](../interfaces/ishader.md#source)*

*Inherited from [GLSLShader](glslshader.md).[source](glslshader.md#source)*

GLSL source code.

___

###  type

• **type**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[type](../interfaces/ishader.md#type)*

*Inherited from [GLSLShader](glslshader.md).[type](glslshader.md#type)*

Shader type, vertex or fragment.

___

### `Static` `Private` SOURCE

▪ **SOURCE**: *"#version 300 es
        precision mediump float;

        uniform vec4 uColor;
        out vec4 outColor;

        void main() {
            outColor = uColor;
        }
    "* = `#version 300 es
        precision mediump float;

        uniform vec4 uColor;
        out vec4 outColor;

        void main() {
            outColor = uColor;
        }
    `

## Methods

### `Static` `Private` PER_RENDERABLE

▸ **PER_RENDERABLE**(`context`: [GLSLContext](glslcontext.md), `renderable`: [IRenderable](../interfaces/irenderable.md), `texture?`: WebGLTexture): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |
`renderable` | [IRenderable](../interfaces/irenderable.md) |
`texture?` | WebGLTexture |

**Returns:** *void*
