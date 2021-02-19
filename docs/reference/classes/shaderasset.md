# Class: ShaderAsset

ShaderAsset is used to load in new shaders, takes a generic shader
and a shader name.
Render Systems listen out for shader loading requests and will
load the requested shaders if valid.

## Table of contents

### Constructors

- [constructor](shaderasset.md#constructor)

### Properties

- [name](shaderasset.md#name)
- [shader](shaderasset.md#shader)
- [DEFAULT\_PRIMITIVE\_FRAGMENT\_SHADER\_NAME](shaderasset.md#default_primitive_fragment_shader_name)
- [DEFAULT\_PRIMITIVE\_VERTEX\_SHADER\_NAME](shaderasset.md#default_primitive_vertex_shader_name)
- [DEFAULT\_TEXTURE\_FRAGMENT\_SHADER\_NAME](shaderasset.md#default_texture_fragment_shader_name)
- [DEFAULT\_TEXTURE\_VERTEX\_SHADER\_NAME](shaderasset.md#default_texture_vertex_shader_name)
- [DEFAULT\_TEXT\_FRAGMENT\_SHADER\_NAME](shaderasset.md#default_text_fragment_shader_name)
- [FRAGMENT\_TYPE](shaderasset.md#fragment_type)
- [MESSAGE\_FINISH\_LOAD](shaderasset.md#message_finish_load)
- [MESSAGE\_REQUEST\_LOAD](shaderasset.md#message_request_load)
- [VERTEX\_TYPE](shaderasset.md#vertex_type)

## Constructors

### constructor

\+ **new ShaderAsset**(`name`: *string*, `shader`: [*IShader*](../interfaces/ishader.md)): [*ShaderAsset*](shaderasset.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`shader` | [*IShader*](../interfaces/ishader.md) |

**Returns:** [*ShaderAsset*](shaderasset.md)

## Properties

### name

• **name**: *string*

Name of the shader.

___

### shader

• **shader**: [*IShader*](../interfaces/ishader.md)

Generic shader.

___

### DEFAULT\_PRIMITIVE\_FRAGMENT\_SHADER\_NAME

▪ `Readonly` `Static` **DEFAULT\_PRIMITIVE\_FRAGMENT\_SHADER\_NAME**: *default_primitive_fragment*= "default\_primitive\_fragment"

___

### DEFAULT\_PRIMITIVE\_VERTEX\_SHADER\_NAME

▪ `Readonly` `Static` **DEFAULT\_PRIMITIVE\_VERTEX\_SHADER\_NAME**: *default_primitive_vertex*= "default\_primitive\_vertex"

___

### DEFAULT\_TEXTURE\_FRAGMENT\_SHADER\_NAME

▪ `Readonly` `Static` **DEFAULT\_TEXTURE\_FRAGMENT\_SHADER\_NAME**: *default_texture_fragment*= "default\_texture\_fragment"

Default fragment shader name, render systems will generally load this
by default, and it will therefore be always available.

___

### DEFAULT\_TEXTURE\_VERTEX\_SHADER\_NAME

▪ `Readonly` `Static` **DEFAULT\_TEXTURE\_VERTEX\_SHADER\_NAME**: *default_texture_vertex*= "default\_texture\_vertex"

Default vertex shader name, render systems will generally load this
by default, and it will therefore be always available.

___

### DEFAULT\_TEXT\_FRAGMENT\_SHADER\_NAME

▪ `Readonly` `Static` **DEFAULT\_TEXT\_FRAGMENT\_SHADER\_NAME**: *default_text_fragment*= "default\_text\_fragment"

Default text fragment shader name, render systems will generally load this
by default, and it will therefore be always available. Default fragment shader
for text.

___

### FRAGMENT\_TYPE

▪ `Readonly` `Static` **FRAGMENT\_TYPE**: *fragment*= "fragment"

Fragment shader type.

___

### MESSAGE\_FINISH\_LOAD

▪ `Readonly` `Static` **MESSAGE\_FINISH\_LOAD**: *finish_shader_load*= "finish\_shader\_load"

Message for finishing loading a shader.

___

### MESSAGE\_REQUEST\_LOAD

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_LOAD**: *request_shader_load*= "request\_shader\_load"

Message to request loading a shader.

___

### VERTEX\_TYPE

▪ `Readonly` `Static` **VERTEX\_TYPE**: *vertex*= "vertex"

Vertex shader type.
