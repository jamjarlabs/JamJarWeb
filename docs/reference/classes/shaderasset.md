
# Class: ShaderAsset

## Hierarchy

* **ShaderAsset**

## Index

### Constructors

* [constructor](shaderasset.md#constructor)

### Properties

* [name](shaderasset.md#name)
* [shader](shaderasset.md#shader)
* [DEFAULT_FRAGMENT_SHADER_NAME](shaderasset.md#static-default_fragment_shader_name)
* [DEFAULT_VERTEX_SHADER_NAME](shaderasset.md#static-default_vertex_shader_name)
* [MESSAGE_FINISH_LOAD](shaderasset.md#static-message_finish_load)
* [MESSAGE_REQUEST_LOAD](shaderasset.md#static-message_request_load)

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

___

###  shader

• **shader**: *[IShader](../interfaces/ishader.md)*

___

### `Static` DEFAULT_FRAGMENT_SHADER_NAME

▪ **DEFAULT_FRAGMENT_SHADER_NAME**: *"default_fragment"* = "default_fragment"

___

### `Static` DEFAULT_VERTEX_SHADER_NAME

▪ **DEFAULT_VERTEX_SHADER_NAME**: *"default_vertex"* = "default_vertex"

___

### `Static` MESSAGE_FINISH_LOAD

▪ **MESSAGE_FINISH_LOAD**: *"finish_shader_load"* = "finish_shader_load"

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_shader_load"* = "request_shader_load"
