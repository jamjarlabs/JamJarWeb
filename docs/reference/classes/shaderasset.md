
# Class: ShaderAsset

ShaderAsset is used to load in new shaders, takes a generic shader
and a shader name.
Render Systems listen out for shader loading requests and will
load the requested shaders if valid.

## Hierarchy

* **ShaderAsset**

## Index

### Constructors

* [constructor](shaderasset.md#constructor)

### Properties

* [name](shaderasset.md#name)
* [shader](shaderasset.md#shader)
* [DEFAULT_FRAGMENT_SHADER_NAME](shaderasset.md#static-default_fragment_shader_name)
* [DEFAULT_TEXT_FRAGMENT_SHADER_NAME](shaderasset.md#static-default_text_fragment_shader_name)
* [DEFAULT_VERTEX_SHADER_NAME](shaderasset.md#static-default_vertex_shader_name)
* [FRAGMENT_TYPE](shaderasset.md#static-fragment_type)
* [MESSAGE_FINISH_LOAD](shaderasset.md#static-message_finish_load)
* [MESSAGE_REQUEST_LOAD](shaderasset.md#static-message_request_load)
* [VERTEX_TYPE](shaderasset.md#static-vertex_type)

## Constructors

###  constructor

\+ **new ShaderAsset**(`name`: string, `shader`: [IShader](../interfaces/ishader.md)): *[ShaderAsset](shaderasset.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`shader` | [IShader](../interfaces/ishader.md) |

**Returns:** *[ShaderAsset](shaderasset.md)*

## Properties

###  name

• **name**: *string*

Name of the shader.

___

###  shader

• **shader**: *[IShader](../interfaces/ishader.md)*

Generic shader.

___

### `Static` DEFAULT_FRAGMENT_SHADER_NAME

▪ **DEFAULT_FRAGMENT_SHADER_NAME**: *"default_fragment"* = "default_fragment"

Default fragment shader name, render systems will generally load this
by default, and it will therefore be always available.

___

### `Static` DEFAULT_TEXT_FRAGMENT_SHADER_NAME

▪ **DEFAULT_TEXT_FRAGMENT_SHADER_NAME**: *"default_text_fragment"* = "default_text_fragment"

Default text fragment shader name, render systems will generally load this
by default, and it will therefore be always available. Default fragment shader
for text.

___

### `Static` DEFAULT_VERTEX_SHADER_NAME

▪ **DEFAULT_VERTEX_SHADER_NAME**: *"default_vertex"* = "default_vertex"

Default vertex shader name, render systems will generally load this
by default, and it will therefore be always available.

___

### `Static` FRAGMENT_TYPE

▪ **FRAGMENT_TYPE**: *"fragment"* = "fragment"

Fragment shader type.

___

### `Static` MESSAGE_FINISH_LOAD

▪ **MESSAGE_FINISH_LOAD**: *"finish_shader_load"* = "finish_shader_load"

Message for finishing loading a shader.

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_shader_load"* = "request_shader_load"

Message to request loading a shader.

___

### `Static` VERTEX_TYPE

▪ **VERTEX_TYPE**: *"vertex"* = "vertex"

Vertex shader type.
