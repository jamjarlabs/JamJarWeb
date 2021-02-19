# Class: DefaultTextureFragmentShader

DefaultFragmentShader is the shader loaded for handling the
"default_fragment" shader choice, used as the default shader
and expected to be loaded.

## Hierarchy

* [*GLSLShader*](glslshader.md)

  ↳ **DefaultTextureFragmentShader**

## Table of contents

### Constructors

- [constructor](defaulttexturefragmentshader.md#constructor)

### Properties

- [perRenderable](defaulttexturefragmentshader.md#perrenderable)
- [perShader](defaulttexturefragmentshader.md#pershader)
- [perTexture](defaulttexturefragmentshader.md#pertexture)
- [source](defaulttexturefragmentshader.md#source)
- [type](defaulttexturefragmentshader.md#type)

## Constructors

### constructor

\+ **new DefaultTextureFragmentShader**(): [*DefaultTextureFragmentShader*](defaulttexturefragmentshader.md)

**Returns:** [*DefaultTextureFragmentShader*](defaulttexturefragmentshader.md)

Inherited from: [GLSLShader](glslshader.md)

## Properties

### perRenderable

• `Optional` **perRenderable**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md), `renderable`: [*IRenderable*](../interfaces/irenderable.md), `texture?`: WebGLTexture) => *void*

Hook for injecting variables for the GLSL shader at the
per renderable stage of the rendering process, runs once
per renderable used, should inject variables for renderable
specific variables.

Inherited from: [GLSLShader](glslshader.md).[perRenderable](glslshader.md#perrenderable)

___

### perShader

• `Optional` **perShader**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md)) => *void*

Hook for injecting variables for the GLSL shader at the
per shader stage of the rendering process, runs once
per program (grouping of shaders) used, should inject
variables for shader specific, but not texture or renderable
specific variables.

Inherited from: [GLSLShader](glslshader.md).[perShader](glslshader.md#pershader)

___

### perTexture

• `Optional` **perTexture**: *undefined* \| (`context`: [*GLSLContext*](glslcontext.md), `texture`: WebGLTexture) => *void*

Hook for injecting variables for the GLSL shader at the
per texture stage of the rendering process, runs once
per texture used, should inject variables for texture specific,
but not renderable specific variables.

Inherited from: [GLSLShader](glslshader.md).[perTexture](glslshader.md#pertexture)

___

### source

• **source**: *string*

GLSL source code.

Inherited from: [GLSLShader](glslshader.md).[source](glslshader.md#source)

___

### type

• **type**: *string*

Shader type, vertex or fragment.

Inherited from: [GLSLShader](glslshader.md).[type](glslshader.md#type)
