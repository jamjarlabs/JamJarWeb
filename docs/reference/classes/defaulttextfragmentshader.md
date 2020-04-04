
# Class: DefaultTextFragmentShader

DefaultTextFragmentShader is the shader loaded for handling the
"default_text_fragment" shader choice, used as defaults in
rendering text. Allows specifying text color to override the
default texture.

## Hierarchy

* [GLSLShader](glslshader.md)

  ↳ **DefaultTextFragmentShader**

## Implements

* [IShader](../interfaces/ishader.md)

## Index

### Constructors

* [constructor](defaulttextfragmentshader.md#constructor)

### Properties

* [perRenderable](defaulttextfragmentshader.md#optional-perrenderable)
* [perShader](defaulttextfragmentshader.md#optional-pershader)
* [perTexture](defaulttextfragmentshader.md#optional-pertexture)
* [source](defaulttextfragmentshader.md#source)
* [type](defaulttextfragmentshader.md#type)
* [SOURCE](defaulttextfragmentshader.md#static-private-source)

### Methods

* [PER_RENDERABLE](defaulttextfragmentshader.md#static-private-per_renderable)
* [PER_TEXTURE](defaulttextfragmentshader.md#static-private-per_texture)

## Constructors

###  constructor

\+ **new DefaultTextFragmentShader**(): *[DefaultTextFragmentShader](defaulttextfragmentshader.md)*

*Overrides [GLSLShader](glslshader.md).[constructor](glslshader.md#constructor)*

**Returns:** *[DefaultTextFragmentShader](defaulttextfragmentshader.md)*

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

        uniform sampler2D uTexture;
        uniform vec4 uColor;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            float alpha = texture(uTexture, vTextureCoordinate).r;
            outColor = vec4(uColor.rgb, alpha * uColor.a);
        }
    "* = `#version 300 es
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec4 uColor;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            float alpha = texture(uTexture, vTextureCoordinate).r;
            outColor = vec4(uColor.rgb, alpha * uColor.a);
        }
    `

## Methods

### `Static` `Private` PER_RENDERABLE

▸ **PER_RENDERABLE**(`context`: [GLSLContext](glslcontext.md), `texture`: WebGLTexture, `renderable`: [IRenderable](../interfaces/irenderable.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |
`texture` | WebGLTexture |
`renderable` | [IRenderable](../interfaces/irenderable.md) |

**Returns:** *void*

___

### `Static` `Private` PER_TEXTURE

▸ **PER_TEXTURE**(`context`: [GLSLContext](glslcontext.md), `texture`: WebGLTexture): *void*

**Parameters:**

Name | Type |
------ | ------ |
`context` | [GLSLContext](glslcontext.md) |
`texture` | WebGLTexture |

**Returns:** *void*
