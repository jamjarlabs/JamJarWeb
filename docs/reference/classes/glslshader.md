# Class: GLSLShader

A GLSLShader is a shader used with WebGL, holds GLSL source code, shader
type and hooks for injecting shader variables such as uniforms, attributes
etc.

## Hierarchy

* **GLSLShader**

  ↳ [*DefaultPrimitiveFragmentShader*](defaultprimitivefragmentshader.md)

  ↳ [*DefaultPrimitiveVertexShader*](defaultprimitivevertexshader.md)

  ↳ [*DefaultTextFragmentShader*](defaulttextfragmentshader.md)

  ↳ [*DefaultTextureFragmentShader*](defaulttexturefragmentshader.md)

  ↳ [*DefaultTextureVertexShader*](defaulttexturevertexshader.md)

## Implements

* [*IShader*](../interfaces/ishader.md)

## Table of contents

### Constructors

- [constructor](glslshader.md#constructor)

### Properties

- [perRenderable](glslshader.md#perrenderable)
- [perShader](glslshader.md#pershader)
- [perTexture](glslshader.md#pertexture)
- [source](glslshader.md#source)
- [type](glslshader.md#type)

## Constructors

### constructor

\+ **new GLSLShader**(`type`: *string*, `source`: *string*, `perShader?`: (`context`: [*GLSLContext*](glslcontext.md)) => *void*, `perTexture?`: (`context`: [*GLSLContext*](glslcontext.md), `texture`: WebGLTexture) => *void*, `perRenderable?`: (`context`: [*GLSLContext*](glslcontext.md), `renderable`: [*IRenderable*](../interfaces/irenderable.md), `texture?`: WebGLTexture) => *void*): [*GLSLShader*](glslshader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`source` | *string* |
`perShader?` | (`context`: [*GLSLContext*](glslcontext.md)) => *void* |
`perTexture?` | (`context`: [*GLSLContext*](glslcontext.md), `texture`: WebGLTexture) => *void* |
`perRenderable?` | (`context`: [*GLSLContext*](glslcontext.md), `renderable`: [*IRenderable*](../interfaces/irenderable.md), `texture?`: WebGLTexture) => *void* |

**Returns:** [*GLSLShader*](glslshader.md)

## Properties

### perRenderable

• `Optional` **perRenderable**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md), `renderable`: [*IRenderable*](../interfaces/irenderable.md), `texture?`: WebGLTexture) => *void*

Hook for injecting variables for the GLSL shader at the
per renderable stage of the rendering process, runs once
per renderable used, should inject variables for renderable
specific variables.

___

### perShader

• `Optional` **perShader**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md)) => *void*

Hook for injecting variables for the GLSL shader at the
per shader stage of the rendering process, runs once
per program (grouping of shaders) used, should inject
variables for shader specific, but not texture or renderable
specific variables.

___

### perTexture

• `Optional` **perTexture**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md), `texture`: WebGLTexture) => *void*

Hook for injecting variables for the GLSL shader at the
per texture stage of the rendering process, runs once
per texture used, should inject variables for texture specific,
but not renderable specific variables.

___

### source

• **source**: *string*

GLSL source code.

Implementation of: [IShader](../interfaces/ishader.md).[source](../interfaces/ishader.md#source)

___

### type

• **type**: *string*

Shader type, vertex or fragment.

Implementation of: [IShader](../interfaces/ishader.md).[type](../interfaces/ishader.md#type)
