
# Class: DefaultPrimitiveVertexShader

## Hierarchy

* [GLSLShader](glslshader.md)

  ↳ **DefaultPrimitiveVertexShader**

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](defaultprimitivevertexshader.md#constructor)

### Properties

* [perRenderable](defaultprimitivevertexshader.md#optional-perrenderable)
* [perShader](defaultprimitivevertexshader.md#optional-pershader)
* [perTexture](defaultprimitivevertexshader.md#optional-pertexture)
* [source](defaultprimitivevertexshader.md#source)
* [type](defaultprimitivevertexshader.md#type)
* [SOURCE](defaultprimitivevertexshader.md#static-private-source)

### Methods

* [PER_RENDERABLE](defaultprimitivevertexshader.md#static-private-per_renderable)
* [PER_SHADER](defaultprimitivevertexshader.md#static-private-per_shader)

## Constructors

###  constructor

\+ **new DefaultPrimitiveVertexShader**(): *[DefaultPrimitiveVertexShader](defaultprimitivevertexshader.md)*

*Overrides [GLSLShader](glslshader.md).[constructor](glslshader.md#constructor)*

**Returns:** *[DefaultPrimitiveVertexShader](defaultprimitivevertexshader.md)*

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
        in vec2 aVertexPosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
        }
    "* = `#version 300 es
        in vec2 aVertexPosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
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

___

### `Static` `Private` PER_SHADER

▸ **PER_SHADER**(`context`: [GLSLContext](glslcontext.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |

**Returns:** *void*
