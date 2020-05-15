
# Class: GLSLShader

A GLSLShader is a shader used with WebGL, holds GLSL source code, shader
type and hooks for injecting shader variables such as uniforms, attributes
etc.

## Hierarchy

* **GLSLShader**

  ↳ [DefaultPrimitiveFragmentShader](defaultprimitivefragmentshader.md)

  ↳ [DefaultPrimitiveVertexShader](defaultprimitivevertexshader.md)

  ↳ [DefaultTextFragmentShader](defaulttextfragmentshader.md)

  ↳ [DefaultTextureFragmentShader](defaulttexturefragmentshader.md)

  ↳ [DefaultTextureVertexShader](defaulttexturevertexshader.md)

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

Hook for injecting variables for the GLSL shader at the
per renderable stage of the rendering process, runs once
per renderable used, should inject variables for renderable
specific variables.

___

### `Optional` perShader

• **perShader**? : *undefined | function*

Hook for injecting variables for the GLSL shader at the
per shader stage of the rendering process, runs once
per program (grouping of shaders) used, should inject
variables for shader specific, but not texture or renderable
specific variables.

___

### `Optional` perTexture

• **perTexture**? : *undefined | function*

Hook for injecting variables for the GLSL shader at the
per texture stage of the rendering process, runs once
per texture used, should inject variables for texture specific,
but not renderable specific variables.

___

###  source

• **source**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[source](../interfaces/ishader.md#source)*

GLSL source code.

___

###  type

• **type**: *string*

*Implementation of [IShader](../interfaces/ishader.md).[type](../interfaces/ishader.md#type)*

Shader type, vertex or fragment.
