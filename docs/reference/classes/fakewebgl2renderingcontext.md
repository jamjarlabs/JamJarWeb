# Class: FakeWebGL2RenderingContext

FakeWebGL2RenderingContext provides stubs for using a WebGL2RenderingContext
in tests, allows overriding behaviour with the use of reactors.

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeWebGL2RenderingContext**

## Implements

* *WebGL2RenderingContext*

## Table of contents

### Constructors

- [constructor](fakewebgl2renderingcontext.md#constructor)

### Properties

- [ACTIVE\_ATTRIBUTES](fakewebgl2renderingcontext.md#active_attributes)
- [ACTIVE\_TEXTURE](fakewebgl2renderingcontext.md#active_texture)
- [ACTIVE\_UNIFORMS](fakewebgl2renderingcontext.md#active_uniforms)
- [ACTIVE\_UNIFORM\_BLOCKS](fakewebgl2renderingcontext.md#active_uniform_blocks)
- [ALIASED\_LINE\_WIDTH\_RANGE](fakewebgl2renderingcontext.md#aliased_line_width_range)
- [ALIASED\_POINT\_SIZE\_RANGE](fakewebgl2renderingcontext.md#aliased_point_size_range)
- [ALPHA](fakewebgl2renderingcontext.md#alpha)
- [ALPHA\_BITS](fakewebgl2renderingcontext.md#alpha_bits)
- [ALREADY\_SIGNALED](fakewebgl2renderingcontext.md#already_signaled)
- [ALWAYS](fakewebgl2renderingcontext.md#always)
- [ANY\_SAMPLES\_PASSED](fakewebgl2renderingcontext.md#any_samples_passed)
- [ANY\_SAMPLES\_PASSED\_CONSERVATIVE](fakewebgl2renderingcontext.md#any_samples_passed_conservative)
- [ARRAY\_BUFFER](fakewebgl2renderingcontext.md#array_buffer)
- [ARRAY\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#array_buffer_binding)
- [ATTACHED\_SHADERS](fakewebgl2renderingcontext.md#attached_shaders)
- [BACK](fakewebgl2renderingcontext.md#back)
- [BLEND](fakewebgl2renderingcontext.md#blend)
- [BLEND\_COLOR](fakewebgl2renderingcontext.md#blend_color)
- [BLEND\_DST\_ALPHA](fakewebgl2renderingcontext.md#blend_dst_alpha)
- [BLEND\_DST\_RGB](fakewebgl2renderingcontext.md#blend_dst_rgb)
- [BLEND\_EQUATION](fakewebgl2renderingcontext.md#blend_equation)
- [BLEND\_EQUATION\_ALPHA](fakewebgl2renderingcontext.md#blend_equation_alpha)
- [BLEND\_EQUATION\_RGB](fakewebgl2renderingcontext.md#blend_equation_rgb)
- [BLEND\_SRC\_ALPHA](fakewebgl2renderingcontext.md#blend_src_alpha)
- [BLEND\_SRC\_RGB](fakewebgl2renderingcontext.md#blend_src_rgb)
- [BLUE\_BITS](fakewebgl2renderingcontext.md#blue_bits)
- [BOOL](fakewebgl2renderingcontext.md#bool)
- [BOOL\_VEC2](fakewebgl2renderingcontext.md#bool_vec2)
- [BOOL\_VEC3](fakewebgl2renderingcontext.md#bool_vec3)
- [BOOL\_VEC4](fakewebgl2renderingcontext.md#bool_vec4)
- [BROWSER\_DEFAULT\_WEBGL](fakewebgl2renderingcontext.md#browser_default_webgl)
- [BUFFER\_SIZE](fakewebgl2renderingcontext.md#buffer_size)
- [BUFFER\_USAGE](fakewebgl2renderingcontext.md#buffer_usage)
- [BYTE](fakewebgl2renderingcontext.md#byte)
- [CCW](fakewebgl2renderingcontext.md#ccw)
- [CLAMP\_TO\_EDGE](fakewebgl2renderingcontext.md#clamp_to_edge)
- [COLOR](fakewebgl2renderingcontext.md#color)
- [COLOR\_ATTACHMENT0](fakewebgl2renderingcontext.md#color_attachment0)
- [COLOR\_ATTACHMENT1](fakewebgl2renderingcontext.md#color_attachment1)
- [COLOR\_ATTACHMENT10](fakewebgl2renderingcontext.md#color_attachment10)
- [COLOR\_ATTACHMENT11](fakewebgl2renderingcontext.md#color_attachment11)
- [COLOR\_ATTACHMENT12](fakewebgl2renderingcontext.md#color_attachment12)
- [COLOR\_ATTACHMENT13](fakewebgl2renderingcontext.md#color_attachment13)
- [COLOR\_ATTACHMENT14](fakewebgl2renderingcontext.md#color_attachment14)
- [COLOR\_ATTACHMENT15](fakewebgl2renderingcontext.md#color_attachment15)
- [COLOR\_ATTACHMENT2](fakewebgl2renderingcontext.md#color_attachment2)
- [COLOR\_ATTACHMENT3](fakewebgl2renderingcontext.md#color_attachment3)
- [COLOR\_ATTACHMENT4](fakewebgl2renderingcontext.md#color_attachment4)
- [COLOR\_ATTACHMENT5](fakewebgl2renderingcontext.md#color_attachment5)
- [COLOR\_ATTACHMENT6](fakewebgl2renderingcontext.md#color_attachment6)
- [COLOR\_ATTACHMENT7](fakewebgl2renderingcontext.md#color_attachment7)
- [COLOR\_ATTACHMENT8](fakewebgl2renderingcontext.md#color_attachment8)
- [COLOR\_ATTACHMENT9](fakewebgl2renderingcontext.md#color_attachment9)
- [COLOR\_BUFFER\_BIT](fakewebgl2renderingcontext.md#color_buffer_bit)
- [COLOR\_CLEAR\_VALUE](fakewebgl2renderingcontext.md#color_clear_value)
- [COLOR\_WRITEMASK](fakewebgl2renderingcontext.md#color_writemask)
- [COMPARE\_REF\_TO\_TEXTURE](fakewebgl2renderingcontext.md#compare_ref_to_texture)
- [COMPILE\_STATUS](fakewebgl2renderingcontext.md#compile_status)
- [COMPRESSED\_TEXTURE\_FORMATS](fakewebgl2renderingcontext.md#compressed_texture_formats)
- [CONDITION\_SATISFIED](fakewebgl2renderingcontext.md#condition_satisfied)
- [CONSTANT\_ALPHA](fakewebgl2renderingcontext.md#constant_alpha)
- [CONSTANT\_COLOR](fakewebgl2renderingcontext.md#constant_color)
- [CONTEXT\_LOST\_WEBGL](fakewebgl2renderingcontext.md#context_lost_webgl)
- [COPY\_READ\_BUFFER](fakewebgl2renderingcontext.md#copy_read_buffer)
- [COPY\_READ\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#copy_read_buffer_binding)
- [COPY\_WRITE\_BUFFER](fakewebgl2renderingcontext.md#copy_write_buffer)
- [COPY\_WRITE\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#copy_write_buffer_binding)
- [CULL\_FACE](fakewebgl2renderingcontext.md#cull_face)
- [CULL\_FACE\_MODE](fakewebgl2renderingcontext.md#cull_face_mode)
- [CURRENT\_PROGRAM](fakewebgl2renderingcontext.md#current_program)
- [CURRENT\_QUERY](fakewebgl2renderingcontext.md#current_query)
- [CURRENT\_VERTEX\_ATTRIB](fakewebgl2renderingcontext.md#current_vertex_attrib)
- [CW](fakewebgl2renderingcontext.md#cw)
- [DECR](fakewebgl2renderingcontext.md#decr)
- [DECR\_WRAP](fakewebgl2renderingcontext.md#decr_wrap)
- [DELETE\_STATUS](fakewebgl2renderingcontext.md#delete_status)
- [DEPTH](fakewebgl2renderingcontext.md#depth)
- [DEPTH24\_STENCIL8](fakewebgl2renderingcontext.md#depth24_stencil8)
- [DEPTH32F\_STENCIL8](fakewebgl2renderingcontext.md#depth32f_stencil8)
- [DEPTH\_ATTACHMENT](fakewebgl2renderingcontext.md#depth_attachment)
- [DEPTH\_BITS](fakewebgl2renderingcontext.md#depth_bits)
- [DEPTH\_BUFFER\_BIT](fakewebgl2renderingcontext.md#depth_buffer_bit)
- [DEPTH\_CLEAR\_VALUE](fakewebgl2renderingcontext.md#depth_clear_value)
- [DEPTH\_COMPONENT](fakewebgl2renderingcontext.md#depth_component)
- [DEPTH\_COMPONENT16](fakewebgl2renderingcontext.md#depth_component16)
- [DEPTH\_COMPONENT24](fakewebgl2renderingcontext.md#depth_component24)
- [DEPTH\_COMPONENT32F](fakewebgl2renderingcontext.md#depth_component32f)
- [DEPTH\_FUNC](fakewebgl2renderingcontext.md#depth_func)
- [DEPTH\_RANGE](fakewebgl2renderingcontext.md#depth_range)
- [DEPTH\_STENCIL](fakewebgl2renderingcontext.md#depth_stencil)
- [DEPTH\_STENCIL\_ATTACHMENT](fakewebgl2renderingcontext.md#depth_stencil_attachment)
- [DEPTH\_TEST](fakewebgl2renderingcontext.md#depth_test)
- [DEPTH\_WRITEMASK](fakewebgl2renderingcontext.md#depth_writemask)
- [DITHER](fakewebgl2renderingcontext.md#dither)
- [DONT\_CARE](fakewebgl2renderingcontext.md#dont_care)
- [DRAW\_BUFFER0](fakewebgl2renderingcontext.md#draw_buffer0)
- [DRAW\_BUFFER1](fakewebgl2renderingcontext.md#draw_buffer1)
- [DRAW\_BUFFER10](fakewebgl2renderingcontext.md#draw_buffer10)
- [DRAW\_BUFFER11](fakewebgl2renderingcontext.md#draw_buffer11)
- [DRAW\_BUFFER12](fakewebgl2renderingcontext.md#draw_buffer12)
- [DRAW\_BUFFER13](fakewebgl2renderingcontext.md#draw_buffer13)
- [DRAW\_BUFFER14](fakewebgl2renderingcontext.md#draw_buffer14)
- [DRAW\_BUFFER15](fakewebgl2renderingcontext.md#draw_buffer15)
- [DRAW\_BUFFER2](fakewebgl2renderingcontext.md#draw_buffer2)
- [DRAW\_BUFFER3](fakewebgl2renderingcontext.md#draw_buffer3)
- [DRAW\_BUFFER4](fakewebgl2renderingcontext.md#draw_buffer4)
- [DRAW\_BUFFER5](fakewebgl2renderingcontext.md#draw_buffer5)
- [DRAW\_BUFFER6](fakewebgl2renderingcontext.md#draw_buffer6)
- [DRAW\_BUFFER7](fakewebgl2renderingcontext.md#draw_buffer7)
- [DRAW\_BUFFER8](fakewebgl2renderingcontext.md#draw_buffer8)
- [DRAW\_BUFFER9](fakewebgl2renderingcontext.md#draw_buffer9)
- [DRAW\_FRAMEBUFFER](fakewebgl2renderingcontext.md#draw_framebuffer)
- [DRAW\_FRAMEBUFFER\_BINDING](fakewebgl2renderingcontext.md#draw_framebuffer_binding)
- [DST\_ALPHA](fakewebgl2renderingcontext.md#dst_alpha)
- [DST\_COLOR](fakewebgl2renderingcontext.md#dst_color)
- [DYNAMIC\_COPY](fakewebgl2renderingcontext.md#dynamic_copy)
- [DYNAMIC\_DRAW](fakewebgl2renderingcontext.md#dynamic_draw)
- [DYNAMIC\_READ](fakewebgl2renderingcontext.md#dynamic_read)
- [ELEMENT\_ARRAY\_BUFFER](fakewebgl2renderingcontext.md#element_array_buffer)
- [ELEMENT\_ARRAY\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#element_array_buffer_binding)
- [EQUAL](fakewebgl2renderingcontext.md#equal)
- [FASTEST](fakewebgl2renderingcontext.md#fastest)
- [FLOAT](fakewebgl2renderingcontext.md#float)
- [FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV](fakewebgl2renderingcontext.md#float_32_unsigned_int_24_8_rev)
- [FLOAT\_MAT2](fakewebgl2renderingcontext.md#float_mat2)
- [FLOAT\_MAT2x3](fakewebgl2renderingcontext.md#float_mat2x3)
- [FLOAT\_MAT2x4](fakewebgl2renderingcontext.md#float_mat2x4)
- [FLOAT\_MAT3](fakewebgl2renderingcontext.md#float_mat3)
- [FLOAT\_MAT3x2](fakewebgl2renderingcontext.md#float_mat3x2)
- [FLOAT\_MAT3x4](fakewebgl2renderingcontext.md#float_mat3x4)
- [FLOAT\_MAT4](fakewebgl2renderingcontext.md#float_mat4)
- [FLOAT\_MAT4x2](fakewebgl2renderingcontext.md#float_mat4x2)
- [FLOAT\_MAT4x3](fakewebgl2renderingcontext.md#float_mat4x3)
- [FLOAT\_VEC2](fakewebgl2renderingcontext.md#float_vec2)
- [FLOAT\_VEC3](fakewebgl2renderingcontext.md#float_vec3)
- [FLOAT\_VEC4](fakewebgl2renderingcontext.md#float_vec4)
- [FRAGMENT\_SHADER](fakewebgl2renderingcontext.md#fragment_shader)
- [FRAGMENT\_SHADER\_DERIVATIVE\_HINT](fakewebgl2renderingcontext.md#fragment_shader_derivative_hint)
- [FRAMEBUFFER](fakewebgl2renderingcontext.md#framebuffer)
- [FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_alpha_size)
- [FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_blue_size)
- [FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING](fakewebgl2renderingcontext.md#framebuffer_attachment_color_encoding)
- [FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE](fakewebgl2renderingcontext.md#framebuffer_attachment_component_type)
- [FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_depth_size)
- [FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_green_size)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME](fakewebgl2renderingcontext.md#framebuffer_attachment_object_name)
- [FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE](fakewebgl2renderingcontext.md#framebuffer_attachment_object_type)
- [FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_red_size)
- [FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE](fakewebgl2renderingcontext.md#framebuffer_attachment_stencil_size)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE](fakewebgl2renderingcontext.md#framebuffer_attachment_texture_cube_map_face)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER](fakewebgl2renderingcontext.md#framebuffer_attachment_texture_layer)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL](fakewebgl2renderingcontext.md#framebuffer_attachment_texture_level)
- [FRAMEBUFFER\_BINDING](fakewebgl2renderingcontext.md#framebuffer_binding)
- [FRAMEBUFFER\_COMPLETE](fakewebgl2renderingcontext.md#framebuffer_complete)
- [FRAMEBUFFER\_DEFAULT](fakewebgl2renderingcontext.md#framebuffer_default)
- [FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT](fakewebgl2renderingcontext.md#framebuffer_incomplete_attachment)
- [FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS](fakewebgl2renderingcontext.md#framebuffer_incomplete_dimensions)
- [FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT](fakewebgl2renderingcontext.md#framebuffer_incomplete_missing_attachment)
- [FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE](fakewebgl2renderingcontext.md#framebuffer_incomplete_multisample)
- [FRAMEBUFFER\_UNSUPPORTED](fakewebgl2renderingcontext.md#framebuffer_unsupported)
- [FRONT](fakewebgl2renderingcontext.md#front)
- [FRONT\_AND\_BACK](fakewebgl2renderingcontext.md#front_and_back)
- [FRONT\_FACE](fakewebgl2renderingcontext.md#front_face)
- [FUNC\_ADD](fakewebgl2renderingcontext.md#func_add)
- [FUNC\_REVERSE\_SUBTRACT](fakewebgl2renderingcontext.md#func_reverse_subtract)
- [FUNC\_SUBTRACT](fakewebgl2renderingcontext.md#func_subtract)
- [GENERATE\_MIPMAP\_HINT](fakewebgl2renderingcontext.md#generate_mipmap_hint)
- [GEQUAL](fakewebgl2renderingcontext.md#gequal)
- [GREATER](fakewebgl2renderingcontext.md#greater)
- [GREEN\_BITS](fakewebgl2renderingcontext.md#green_bits)
- [HALF\_FLOAT](fakewebgl2renderingcontext.md#half_float)
- [HIGH\_FLOAT](fakewebgl2renderingcontext.md#high_float)
- [HIGH\_INT](fakewebgl2renderingcontext.md#high_int)
- [IMPLEMENTATION\_COLOR\_READ\_FORMAT](fakewebgl2renderingcontext.md#implementation_color_read_format)
- [IMPLEMENTATION\_COLOR\_READ\_TYPE](fakewebgl2renderingcontext.md#implementation_color_read_type)
- [INCR](fakewebgl2renderingcontext.md#incr)
- [INCR\_WRAP](fakewebgl2renderingcontext.md#incr_wrap)
- [INT](fakewebgl2renderingcontext.md#int)
- [INTERLEAVED\_ATTRIBS](fakewebgl2renderingcontext.md#interleaved_attribs)
- [INT\_2\_10\_10\_10\_REV](fakewebgl2renderingcontext.md#int_2_10_10_10_rev)
- [INT\_SAMPLER\_2D](fakewebgl2renderingcontext.md#int_sampler_2d)
- [INT\_SAMPLER\_2D\_ARRAY](fakewebgl2renderingcontext.md#int_sampler_2d_array)
- [INT\_SAMPLER\_3D](fakewebgl2renderingcontext.md#int_sampler_3d)
- [INT\_SAMPLER\_CUBE](fakewebgl2renderingcontext.md#int_sampler_cube)
- [INT\_VEC2](fakewebgl2renderingcontext.md#int_vec2)
- [INT\_VEC3](fakewebgl2renderingcontext.md#int_vec3)
- [INT\_VEC4](fakewebgl2renderingcontext.md#int_vec4)
- [INVALID\_ENUM](fakewebgl2renderingcontext.md#invalid_enum)
- [INVALID\_FRAMEBUFFER\_OPERATION](fakewebgl2renderingcontext.md#invalid_framebuffer_operation)
- [INVALID\_INDEX](fakewebgl2renderingcontext.md#invalid_index)
- [INVALID\_OPERATION](fakewebgl2renderingcontext.md#invalid_operation)
- [INVALID\_VALUE](fakewebgl2renderingcontext.md#invalid_value)
- [INVERT](fakewebgl2renderingcontext.md#invert)
- [KEEP](fakewebgl2renderingcontext.md#keep)
- [LEQUAL](fakewebgl2renderingcontext.md#lequal)
- [LESS](fakewebgl2renderingcontext.md#less)
- [LINEAR](fakewebgl2renderingcontext.md#linear)
- [LINEAR\_MIPMAP\_LINEAR](fakewebgl2renderingcontext.md#linear_mipmap_linear)
- [LINEAR\_MIPMAP\_NEAREST](fakewebgl2renderingcontext.md#linear_mipmap_nearest)
- [LINES](fakewebgl2renderingcontext.md#lines)
- [LINE\_LOOP](fakewebgl2renderingcontext.md#line_loop)
- [LINE\_STRIP](fakewebgl2renderingcontext.md#line_strip)
- [LINE\_WIDTH](fakewebgl2renderingcontext.md#line_width)
- [LINK\_STATUS](fakewebgl2renderingcontext.md#link_status)
- [LOW\_FLOAT](fakewebgl2renderingcontext.md#low_float)
- [LOW\_INT](fakewebgl2renderingcontext.md#low_int)
- [LUMINANCE](fakewebgl2renderingcontext.md#luminance)
- [LUMINANCE\_ALPHA](fakewebgl2renderingcontext.md#luminance_alpha)
- [MAX](fakewebgl2renderingcontext.md#max)
- [MAX\_3D\_TEXTURE\_SIZE](fakewebgl2renderingcontext.md#max_3d_texture_size)
- [MAX\_ARRAY\_TEXTURE\_LAYERS](fakewebgl2renderingcontext.md#max_array_texture_layers)
- [MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL](fakewebgl2renderingcontext.md#max_client_wait_timeout_webgl)
- [MAX\_COLOR\_ATTACHMENTS](fakewebgl2renderingcontext.md#max_color_attachments)
- [MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS](fakewebgl2renderingcontext.md#max_combined_fragment_uniform_components)
- [MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS](fakewebgl2renderingcontext.md#max_combined_texture_image_units)
- [MAX\_COMBINED\_UNIFORM\_BLOCKS](fakewebgl2renderingcontext.md#max_combined_uniform_blocks)
- [MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS](fakewebgl2renderingcontext.md#max_combined_vertex_uniform_components)
- [MAX\_CUBE\_MAP\_TEXTURE\_SIZE](fakewebgl2renderingcontext.md#max_cube_map_texture_size)
- [MAX\_DRAW\_BUFFERS](fakewebgl2renderingcontext.md#max_draw_buffers)
- [MAX\_ELEMENTS\_INDICES](fakewebgl2renderingcontext.md#max_elements_indices)
- [MAX\_ELEMENTS\_VERTICES](fakewebgl2renderingcontext.md#max_elements_vertices)
- [MAX\_ELEMENT\_INDEX](fakewebgl2renderingcontext.md#max_element_index)
- [MAX\_FRAGMENT\_INPUT\_COMPONENTS](fakewebgl2renderingcontext.md#max_fragment_input_components)
- [MAX\_FRAGMENT\_UNIFORM\_BLOCKS](fakewebgl2renderingcontext.md#max_fragment_uniform_blocks)
- [MAX\_FRAGMENT\_UNIFORM\_COMPONENTS](fakewebgl2renderingcontext.md#max_fragment_uniform_components)
- [MAX\_FRAGMENT\_UNIFORM\_VECTORS](fakewebgl2renderingcontext.md#max_fragment_uniform_vectors)
- [MAX\_PROGRAM\_TEXEL\_OFFSET](fakewebgl2renderingcontext.md#max_program_texel_offset)
- [MAX\_RENDERBUFFER\_SIZE](fakewebgl2renderingcontext.md#max_renderbuffer_size)
- [MAX\_SAMPLES](fakewebgl2renderingcontext.md#max_samples)
- [MAX\_SERVER\_WAIT\_TIMEOUT](fakewebgl2renderingcontext.md#max_server_wait_timeout)
- [MAX\_TEXTURE\_IMAGE\_UNITS](fakewebgl2renderingcontext.md#max_texture_image_units)
- [MAX\_TEXTURE\_LOD\_BIAS](fakewebgl2renderingcontext.md#max_texture_lod_bias)
- [MAX\_TEXTURE\_SIZE](fakewebgl2renderingcontext.md#max_texture_size)
- [MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS](fakewebgl2renderingcontext.md#max_transform_feedback_interleaved_components)
- [MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS](fakewebgl2renderingcontext.md#max_transform_feedback_separate_attribs)
- [MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS](fakewebgl2renderingcontext.md#max_transform_feedback_separate_components)
- [MAX\_UNIFORM\_BLOCK\_SIZE](fakewebgl2renderingcontext.md#max_uniform_block_size)
- [MAX\_UNIFORM\_BUFFER\_BINDINGS](fakewebgl2renderingcontext.md#max_uniform_buffer_bindings)
- [MAX\_VARYING\_COMPONENTS](fakewebgl2renderingcontext.md#max_varying_components)
- [MAX\_VARYING\_VECTORS](fakewebgl2renderingcontext.md#max_varying_vectors)
- [MAX\_VERTEX\_ATTRIBS](fakewebgl2renderingcontext.md#max_vertex_attribs)
- [MAX\_VERTEX\_OUTPUT\_COMPONENTS](fakewebgl2renderingcontext.md#max_vertex_output_components)
- [MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS](fakewebgl2renderingcontext.md#max_vertex_texture_image_units)
- [MAX\_VERTEX\_UNIFORM\_BLOCKS](fakewebgl2renderingcontext.md#max_vertex_uniform_blocks)
- [MAX\_VERTEX\_UNIFORM\_COMPONENTS](fakewebgl2renderingcontext.md#max_vertex_uniform_components)
- [MAX\_VERTEX\_UNIFORM\_VECTORS](fakewebgl2renderingcontext.md#max_vertex_uniform_vectors)
- [MAX\_VIEWPORT\_DIMS](fakewebgl2renderingcontext.md#max_viewport_dims)
- [MEDIUM\_FLOAT](fakewebgl2renderingcontext.md#medium_float)
- [MEDIUM\_INT](fakewebgl2renderingcontext.md#medium_int)
- [MIN](fakewebgl2renderingcontext.md#min)
- [MIN\_PROGRAM\_TEXEL\_OFFSET](fakewebgl2renderingcontext.md#min_program_texel_offset)
- [MIRRORED\_REPEAT](fakewebgl2renderingcontext.md#mirrored_repeat)
- [NEAREST](fakewebgl2renderingcontext.md#nearest)
- [NEAREST\_MIPMAP\_LINEAR](fakewebgl2renderingcontext.md#nearest_mipmap_linear)
- [NEAREST\_MIPMAP\_NEAREST](fakewebgl2renderingcontext.md#nearest_mipmap_nearest)
- [NEVER](fakewebgl2renderingcontext.md#never)
- [NICEST](fakewebgl2renderingcontext.md#nicest)
- [NONE](fakewebgl2renderingcontext.md#none)
- [NOTEQUAL](fakewebgl2renderingcontext.md#notequal)
- [NO\_ERROR](fakewebgl2renderingcontext.md#no_error)
- [OBJECT\_TYPE](fakewebgl2renderingcontext.md#object_type)
- [ONE](fakewebgl2renderingcontext.md#one)
- [ONE\_MINUS\_CONSTANT\_ALPHA](fakewebgl2renderingcontext.md#one_minus_constant_alpha)
- [ONE\_MINUS\_CONSTANT\_COLOR](fakewebgl2renderingcontext.md#one_minus_constant_color)
- [ONE\_MINUS\_DST\_ALPHA](fakewebgl2renderingcontext.md#one_minus_dst_alpha)
- [ONE\_MINUS\_DST\_COLOR](fakewebgl2renderingcontext.md#one_minus_dst_color)
- [ONE\_MINUS\_SRC\_ALPHA](fakewebgl2renderingcontext.md#one_minus_src_alpha)
- [ONE\_MINUS\_SRC\_COLOR](fakewebgl2renderingcontext.md#one_minus_src_color)
- [OUT\_OF\_MEMORY](fakewebgl2renderingcontext.md#out_of_memory)
- [PACK\_ALIGNMENT](fakewebgl2renderingcontext.md#pack_alignment)
- [PACK\_ROW\_LENGTH](fakewebgl2renderingcontext.md#pack_row_length)
- [PACK\_SKIP\_PIXELS](fakewebgl2renderingcontext.md#pack_skip_pixels)
- [PACK\_SKIP\_ROWS](fakewebgl2renderingcontext.md#pack_skip_rows)
- [PIXEL\_PACK\_BUFFER](fakewebgl2renderingcontext.md#pixel_pack_buffer)
- [PIXEL\_PACK\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#pixel_pack_buffer_binding)
- [PIXEL\_UNPACK\_BUFFER](fakewebgl2renderingcontext.md#pixel_unpack_buffer)
- [PIXEL\_UNPACK\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#pixel_unpack_buffer_binding)
- [POINTS](fakewebgl2renderingcontext.md#points)
- [POLYGON\_OFFSET\_FACTOR](fakewebgl2renderingcontext.md#polygon_offset_factor)
- [POLYGON\_OFFSET\_FILL](fakewebgl2renderingcontext.md#polygon_offset_fill)
- [POLYGON\_OFFSET\_UNITS](fakewebgl2renderingcontext.md#polygon_offset_units)
- [QUERY\_RESULT](fakewebgl2renderingcontext.md#query_result)
- [QUERY\_RESULT\_AVAILABLE](fakewebgl2renderingcontext.md#query_result_available)
- [R11F\_G11F\_B10F](fakewebgl2renderingcontext.md#r11f_g11f_b10f)
- [R16F](fakewebgl2renderingcontext.md#r16f)
- [R16I](fakewebgl2renderingcontext.md#r16i)
- [R16UI](fakewebgl2renderingcontext.md#r16ui)
- [R32F](fakewebgl2renderingcontext.md#r32f)
- [R32I](fakewebgl2renderingcontext.md#r32i)
- [R32UI](fakewebgl2renderingcontext.md#r32ui)
- [R8](fakewebgl2renderingcontext.md#r8)
- [R8I](fakewebgl2renderingcontext.md#r8i)
- [R8UI](fakewebgl2renderingcontext.md#r8ui)
- [R8\_SNORM](fakewebgl2renderingcontext.md#r8_snorm)
- [RASTERIZER\_DISCARD](fakewebgl2renderingcontext.md#rasterizer_discard)
- [READ\_BUFFER](fakewebgl2renderingcontext.md#read_buffer)
- [READ\_FRAMEBUFFER](fakewebgl2renderingcontext.md#read_framebuffer)
- [READ\_FRAMEBUFFER\_BINDING](fakewebgl2renderingcontext.md#read_framebuffer_binding)
- [RED](fakewebgl2renderingcontext.md#red)
- [RED\_BITS](fakewebgl2renderingcontext.md#red_bits)
- [RED\_INTEGER](fakewebgl2renderingcontext.md#red_integer)
- [RENDERBUFFER](fakewebgl2renderingcontext.md#renderbuffer)
- [RENDERBUFFER\_ALPHA\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_alpha_size)
- [RENDERBUFFER\_BINDING](fakewebgl2renderingcontext.md#renderbuffer_binding)
- [RENDERBUFFER\_BLUE\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_blue_size)
- [RENDERBUFFER\_DEPTH\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_depth_size)
- [RENDERBUFFER\_GREEN\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_green_size)
- [RENDERBUFFER\_HEIGHT](fakewebgl2renderingcontext.md#renderbuffer_height)
- [RENDERBUFFER\_INTERNAL\_FORMAT](fakewebgl2renderingcontext.md#renderbuffer_internal_format)
- [RENDERBUFFER\_RED\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_red_size)
- [RENDERBUFFER\_SAMPLES](fakewebgl2renderingcontext.md#renderbuffer_samples)
- [RENDERBUFFER\_STENCIL\_SIZE](fakewebgl2renderingcontext.md#renderbuffer_stencil_size)
- [RENDERBUFFER\_WIDTH](fakewebgl2renderingcontext.md#renderbuffer_width)
- [RENDERER](fakewebgl2renderingcontext.md#renderer)
- [REPEAT](fakewebgl2renderingcontext.md#repeat)
- [REPLACE](fakewebgl2renderingcontext.md#replace)
- [RG](fakewebgl2renderingcontext.md#rg)
- [RG16F](fakewebgl2renderingcontext.md#rg16f)
- [RG16I](fakewebgl2renderingcontext.md#rg16i)
- [RG16UI](fakewebgl2renderingcontext.md#rg16ui)
- [RG32F](fakewebgl2renderingcontext.md#rg32f)
- [RG32I](fakewebgl2renderingcontext.md#rg32i)
- [RG32UI](fakewebgl2renderingcontext.md#rg32ui)
- [RG8](fakewebgl2renderingcontext.md#rg8)
- [RG8I](fakewebgl2renderingcontext.md#rg8i)
- [RG8UI](fakewebgl2renderingcontext.md#rg8ui)
- [RG8\_SNORM](fakewebgl2renderingcontext.md#rg8_snorm)
- [RGB](fakewebgl2renderingcontext.md#rgb)
- [RGB10\_A2](fakewebgl2renderingcontext.md#rgb10_a2)
- [RGB10\_A2UI](fakewebgl2renderingcontext.md#rgb10_a2ui)
- [RGB16F](fakewebgl2renderingcontext.md#rgb16f)
- [RGB16I](fakewebgl2renderingcontext.md#rgb16i)
- [RGB16UI](fakewebgl2renderingcontext.md#rgb16ui)
- [RGB32F](fakewebgl2renderingcontext.md#rgb32f)
- [RGB32I](fakewebgl2renderingcontext.md#rgb32i)
- [RGB32UI](fakewebgl2renderingcontext.md#rgb32ui)
- [RGB565](fakewebgl2renderingcontext.md#rgb565)
- [RGB5\_A1](fakewebgl2renderingcontext.md#rgb5_a1)
- [RGB8](fakewebgl2renderingcontext.md#rgb8)
- [RGB8I](fakewebgl2renderingcontext.md#rgb8i)
- [RGB8UI](fakewebgl2renderingcontext.md#rgb8ui)
- [RGB8\_SNORM](fakewebgl2renderingcontext.md#rgb8_snorm)
- [RGB9\_E5](fakewebgl2renderingcontext.md#rgb9_e5)
- [RGBA](fakewebgl2renderingcontext.md#rgba)
- [RGBA16F](fakewebgl2renderingcontext.md#rgba16f)
- [RGBA16I](fakewebgl2renderingcontext.md#rgba16i)
- [RGBA16UI](fakewebgl2renderingcontext.md#rgba16ui)
- [RGBA32F](fakewebgl2renderingcontext.md#rgba32f)
- [RGBA32I](fakewebgl2renderingcontext.md#rgba32i)
- [RGBA32UI](fakewebgl2renderingcontext.md#rgba32ui)
- [RGBA4](fakewebgl2renderingcontext.md#rgba4)
- [RGBA8](fakewebgl2renderingcontext.md#rgba8)
- [RGBA8I](fakewebgl2renderingcontext.md#rgba8i)
- [RGBA8UI](fakewebgl2renderingcontext.md#rgba8ui)
- [RGBA8\_SNORM](fakewebgl2renderingcontext.md#rgba8_snorm)
- [RGBA\_INTEGER](fakewebgl2renderingcontext.md#rgba_integer)
- [RGB\_INTEGER](fakewebgl2renderingcontext.md#rgb_integer)
- [RG\_INTEGER](fakewebgl2renderingcontext.md#rg_integer)
- [SAMPLER\_2D](fakewebgl2renderingcontext.md#sampler_2d)
- [SAMPLER\_2D\_ARRAY](fakewebgl2renderingcontext.md#sampler_2d_array)
- [SAMPLER\_2D\_ARRAY\_SHADOW](fakewebgl2renderingcontext.md#sampler_2d_array_shadow)
- [SAMPLER\_2D\_SHADOW](fakewebgl2renderingcontext.md#sampler_2d_shadow)
- [SAMPLER\_3D](fakewebgl2renderingcontext.md#sampler_3d)
- [SAMPLER\_BINDING](fakewebgl2renderingcontext.md#sampler_binding)
- [SAMPLER\_CUBE](fakewebgl2renderingcontext.md#sampler_cube)
- [SAMPLER\_CUBE\_SHADOW](fakewebgl2renderingcontext.md#sampler_cube_shadow)
- [SAMPLES](fakewebgl2renderingcontext.md#samples)
- [SAMPLE\_ALPHA\_TO\_COVERAGE](fakewebgl2renderingcontext.md#sample_alpha_to_coverage)
- [SAMPLE\_BUFFERS](fakewebgl2renderingcontext.md#sample_buffers)
- [SAMPLE\_COVERAGE](fakewebgl2renderingcontext.md#sample_coverage)
- [SAMPLE\_COVERAGE\_INVERT](fakewebgl2renderingcontext.md#sample_coverage_invert)
- [SAMPLE\_COVERAGE\_VALUE](fakewebgl2renderingcontext.md#sample_coverage_value)
- [SCISSOR\_BOX](fakewebgl2renderingcontext.md#scissor_box)
- [SCISSOR\_TEST](fakewebgl2renderingcontext.md#scissor_test)
- [SEPARATE\_ATTRIBS](fakewebgl2renderingcontext.md#separate_attribs)
- [SHADER\_TYPE](fakewebgl2renderingcontext.md#shader_type)
- [SHADING\_LANGUAGE\_VERSION](fakewebgl2renderingcontext.md#shading_language_version)
- [SHORT](fakewebgl2renderingcontext.md#short)
- [SIGNALED](fakewebgl2renderingcontext.md#signaled)
- [SIGNED\_NORMALIZED](fakewebgl2renderingcontext.md#signed_normalized)
- [SRC\_ALPHA](fakewebgl2renderingcontext.md#src_alpha)
- [SRC\_ALPHA\_SATURATE](fakewebgl2renderingcontext.md#src_alpha_saturate)
- [SRC\_COLOR](fakewebgl2renderingcontext.md#src_color)
- [SRGB](fakewebgl2renderingcontext.md#srgb)
- [SRGB8](fakewebgl2renderingcontext.md#srgb8)
- [SRGB8\_ALPHA8](fakewebgl2renderingcontext.md#srgb8_alpha8)
- [STATIC\_COPY](fakewebgl2renderingcontext.md#static_copy)
- [STATIC\_DRAW](fakewebgl2renderingcontext.md#static_draw)
- [STATIC\_READ](fakewebgl2renderingcontext.md#static_read)
- [STENCIL](fakewebgl2renderingcontext.md#stencil)
- [STENCIL\_ATTACHMENT](fakewebgl2renderingcontext.md#stencil_attachment)
- [STENCIL\_BACK\_FAIL](fakewebgl2renderingcontext.md#stencil_back_fail)
- [STENCIL\_BACK\_FUNC](fakewebgl2renderingcontext.md#stencil_back_func)
- [STENCIL\_BACK\_PASS\_DEPTH\_FAIL](fakewebgl2renderingcontext.md#stencil_back_pass_depth_fail)
- [STENCIL\_BACK\_PASS\_DEPTH\_PASS](fakewebgl2renderingcontext.md#stencil_back_pass_depth_pass)
- [STENCIL\_BACK\_REF](fakewebgl2renderingcontext.md#stencil_back_ref)
- [STENCIL\_BACK\_VALUE\_MASK](fakewebgl2renderingcontext.md#stencil_back_value_mask)
- [STENCIL\_BACK\_WRITEMASK](fakewebgl2renderingcontext.md#stencil_back_writemask)
- [STENCIL\_BITS](fakewebgl2renderingcontext.md#stencil_bits)
- [STENCIL\_BUFFER\_BIT](fakewebgl2renderingcontext.md#stencil_buffer_bit)
- [STENCIL\_CLEAR\_VALUE](fakewebgl2renderingcontext.md#stencil_clear_value)
- [STENCIL\_FAIL](fakewebgl2renderingcontext.md#stencil_fail)
- [STENCIL\_FUNC](fakewebgl2renderingcontext.md#stencil_func)
- [STENCIL\_INDEX8](fakewebgl2renderingcontext.md#stencil_index8)
- [STENCIL\_PASS\_DEPTH\_FAIL](fakewebgl2renderingcontext.md#stencil_pass_depth_fail)
- [STENCIL\_PASS\_DEPTH\_PASS](fakewebgl2renderingcontext.md#stencil_pass_depth_pass)
- [STENCIL\_REF](fakewebgl2renderingcontext.md#stencil_ref)
- [STENCIL\_TEST](fakewebgl2renderingcontext.md#stencil_test)
- [STENCIL\_VALUE\_MASK](fakewebgl2renderingcontext.md#stencil_value_mask)
- [STENCIL\_WRITEMASK](fakewebgl2renderingcontext.md#stencil_writemask)
- [STREAM\_COPY](fakewebgl2renderingcontext.md#stream_copy)
- [STREAM\_DRAW](fakewebgl2renderingcontext.md#stream_draw)
- [STREAM\_READ](fakewebgl2renderingcontext.md#stream_read)
- [SUBPIXEL\_BITS](fakewebgl2renderingcontext.md#subpixel_bits)
- [SYNC\_CONDITION](fakewebgl2renderingcontext.md#sync_condition)
- [SYNC\_FENCE](fakewebgl2renderingcontext.md#sync_fence)
- [SYNC\_FLAGS](fakewebgl2renderingcontext.md#sync_flags)
- [SYNC\_FLUSH\_COMMANDS\_BIT](fakewebgl2renderingcontext.md#sync_flush_commands_bit)
- [SYNC\_GPU\_COMMANDS\_COMPLETE](fakewebgl2renderingcontext.md#sync_gpu_commands_complete)
- [SYNC\_STATUS](fakewebgl2renderingcontext.md#sync_status)
- [TEXTURE](fakewebgl2renderingcontext.md#texture)
- [TEXTURE0](fakewebgl2renderingcontext.md#texture0)
- [TEXTURE1](fakewebgl2renderingcontext.md#texture1)
- [TEXTURE10](fakewebgl2renderingcontext.md#texture10)
- [TEXTURE11](fakewebgl2renderingcontext.md#texture11)
- [TEXTURE12](fakewebgl2renderingcontext.md#texture12)
- [TEXTURE13](fakewebgl2renderingcontext.md#texture13)
- [TEXTURE14](fakewebgl2renderingcontext.md#texture14)
- [TEXTURE15](fakewebgl2renderingcontext.md#texture15)
- [TEXTURE16](fakewebgl2renderingcontext.md#texture16)
- [TEXTURE17](fakewebgl2renderingcontext.md#texture17)
- [TEXTURE18](fakewebgl2renderingcontext.md#texture18)
- [TEXTURE19](fakewebgl2renderingcontext.md#texture19)
- [TEXTURE2](fakewebgl2renderingcontext.md#texture2)
- [TEXTURE20](fakewebgl2renderingcontext.md#texture20)
- [TEXTURE21](fakewebgl2renderingcontext.md#texture21)
- [TEXTURE22](fakewebgl2renderingcontext.md#texture22)
- [TEXTURE23](fakewebgl2renderingcontext.md#texture23)
- [TEXTURE24](fakewebgl2renderingcontext.md#texture24)
- [TEXTURE25](fakewebgl2renderingcontext.md#texture25)
- [TEXTURE26](fakewebgl2renderingcontext.md#texture26)
- [TEXTURE27](fakewebgl2renderingcontext.md#texture27)
- [TEXTURE28](fakewebgl2renderingcontext.md#texture28)
- [TEXTURE29](fakewebgl2renderingcontext.md#texture29)
- [TEXTURE3](fakewebgl2renderingcontext.md#texture3)
- [TEXTURE30](fakewebgl2renderingcontext.md#texture30)
- [TEXTURE31](fakewebgl2renderingcontext.md#texture31)
- [TEXTURE4](fakewebgl2renderingcontext.md#texture4)
- [TEXTURE5](fakewebgl2renderingcontext.md#texture5)
- [TEXTURE6](fakewebgl2renderingcontext.md#texture6)
- [TEXTURE7](fakewebgl2renderingcontext.md#texture7)
- [TEXTURE8](fakewebgl2renderingcontext.md#texture8)
- [TEXTURE9](fakewebgl2renderingcontext.md#texture9)
- [TEXTURE\_2D](fakewebgl2renderingcontext.md#texture_2d)
- [TEXTURE\_2D\_ARRAY](fakewebgl2renderingcontext.md#texture_2d_array)
- [TEXTURE\_3D](fakewebgl2renderingcontext.md#texture_3d)
- [TEXTURE\_BASE\_LEVEL](fakewebgl2renderingcontext.md#texture_base_level)
- [TEXTURE\_BINDING\_2D](fakewebgl2renderingcontext.md#texture_binding_2d)
- [TEXTURE\_BINDING\_2D\_ARRAY](fakewebgl2renderingcontext.md#texture_binding_2d_array)
- [TEXTURE\_BINDING\_3D](fakewebgl2renderingcontext.md#texture_binding_3d)
- [TEXTURE\_BINDING\_CUBE\_MAP](fakewebgl2renderingcontext.md#texture_binding_cube_map)
- [TEXTURE\_COMPARE\_FUNC](fakewebgl2renderingcontext.md#texture_compare_func)
- [TEXTURE\_COMPARE\_MODE](fakewebgl2renderingcontext.md#texture_compare_mode)
- [TEXTURE\_CUBE\_MAP](fakewebgl2renderingcontext.md#texture_cube_map)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_X](fakewebgl2renderingcontext.md#texture_cube_map_negative_x)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y](fakewebgl2renderingcontext.md#texture_cube_map_negative_y)
- [TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z](fakewebgl2renderingcontext.md#texture_cube_map_negative_z)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_X](fakewebgl2renderingcontext.md#texture_cube_map_positive_x)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Y](fakewebgl2renderingcontext.md#texture_cube_map_positive_y)
- [TEXTURE\_CUBE\_MAP\_POSITIVE\_Z](fakewebgl2renderingcontext.md#texture_cube_map_positive_z)
- [TEXTURE\_IMMUTABLE\_FORMAT](fakewebgl2renderingcontext.md#texture_immutable_format)
- [TEXTURE\_IMMUTABLE\_LEVELS](fakewebgl2renderingcontext.md#texture_immutable_levels)
- [TEXTURE\_MAG\_FILTER](fakewebgl2renderingcontext.md#texture_mag_filter)
- [TEXTURE\_MAX\_LEVEL](fakewebgl2renderingcontext.md#texture_max_level)
- [TEXTURE\_MAX\_LOD](fakewebgl2renderingcontext.md#texture_max_lod)
- [TEXTURE\_MIN\_FILTER](fakewebgl2renderingcontext.md#texture_min_filter)
- [TEXTURE\_MIN\_LOD](fakewebgl2renderingcontext.md#texture_min_lod)
- [TEXTURE\_WRAP\_R](fakewebgl2renderingcontext.md#texture_wrap_r)
- [TEXTURE\_WRAP\_S](fakewebgl2renderingcontext.md#texture_wrap_s)
- [TEXTURE\_WRAP\_T](fakewebgl2renderingcontext.md#texture_wrap_t)
- [TIMEOUT\_EXPIRED](fakewebgl2renderingcontext.md#timeout_expired)
- [TIMEOUT\_IGNORED](fakewebgl2renderingcontext.md#timeout_ignored)
- [TRANSFORM\_FEEDBACK](fakewebgl2renderingcontext.md#transform_feedback)
- [TRANSFORM\_FEEDBACK\_ACTIVE](fakewebgl2renderingcontext.md#transform_feedback_active)
- [TRANSFORM\_FEEDBACK\_BINDING](fakewebgl2renderingcontext.md#transform_feedback_binding)
- [TRANSFORM\_FEEDBACK\_BUFFER](fakewebgl2renderingcontext.md#transform_feedback_buffer)
- [TRANSFORM\_FEEDBACK\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#transform_feedback_buffer_binding)
- [TRANSFORM\_FEEDBACK\_BUFFER\_MODE](fakewebgl2renderingcontext.md#transform_feedback_buffer_mode)
- [TRANSFORM\_FEEDBACK\_BUFFER\_SIZE](fakewebgl2renderingcontext.md#transform_feedback_buffer_size)
- [TRANSFORM\_FEEDBACK\_BUFFER\_START](fakewebgl2renderingcontext.md#transform_feedback_buffer_start)
- [TRANSFORM\_FEEDBACK\_PAUSED](fakewebgl2renderingcontext.md#transform_feedback_paused)
- [TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN](fakewebgl2renderingcontext.md#transform_feedback_primitives_written)
- [TRANSFORM\_FEEDBACK\_VARYINGS](fakewebgl2renderingcontext.md#transform_feedback_varyings)
- [TRIANGLES](fakewebgl2renderingcontext.md#triangles)
- [TRIANGLE\_FAN](fakewebgl2renderingcontext.md#triangle_fan)
- [TRIANGLE\_STRIP](fakewebgl2renderingcontext.md#triangle_strip)
- [UNIFORM\_ARRAY\_STRIDE](fakewebgl2renderingcontext.md#uniform_array_stride)
- [UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS](fakewebgl2renderingcontext.md#uniform_block_active_uniforms)
- [UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES](fakewebgl2renderingcontext.md#uniform_block_active_uniform_indices)
- [UNIFORM\_BLOCK\_BINDING](fakewebgl2renderingcontext.md#uniform_block_binding)
- [UNIFORM\_BLOCK\_DATA\_SIZE](fakewebgl2renderingcontext.md#uniform_block_data_size)
- [UNIFORM\_BLOCK\_INDEX](fakewebgl2renderingcontext.md#uniform_block_index)
- [UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER](fakewebgl2renderingcontext.md#uniform_block_referenced_by_fragment_shader)
- [UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER](fakewebgl2renderingcontext.md#uniform_block_referenced_by_vertex_shader)
- [UNIFORM\_BUFFER](fakewebgl2renderingcontext.md#uniform_buffer)
- [UNIFORM\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#uniform_buffer_binding)
- [UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT](fakewebgl2renderingcontext.md#uniform_buffer_offset_alignment)
- [UNIFORM\_BUFFER\_SIZE](fakewebgl2renderingcontext.md#uniform_buffer_size)
- [UNIFORM\_BUFFER\_START](fakewebgl2renderingcontext.md#uniform_buffer_start)
- [UNIFORM\_IS\_ROW\_MAJOR](fakewebgl2renderingcontext.md#uniform_is_row_major)
- [UNIFORM\_MATRIX\_STRIDE](fakewebgl2renderingcontext.md#uniform_matrix_stride)
- [UNIFORM\_OFFSET](fakewebgl2renderingcontext.md#uniform_offset)
- [UNIFORM\_SIZE](fakewebgl2renderingcontext.md#uniform_size)
- [UNIFORM\_TYPE](fakewebgl2renderingcontext.md#uniform_type)
- [UNPACK\_ALIGNMENT](fakewebgl2renderingcontext.md#unpack_alignment)
- [UNPACK\_COLORSPACE\_CONVERSION\_WEBGL](fakewebgl2renderingcontext.md#unpack_colorspace_conversion_webgl)
- [UNPACK\_FLIP\_Y\_WEBGL](fakewebgl2renderingcontext.md#unpack_flip_y_webgl)
- [UNPACK\_IMAGE\_HEIGHT](fakewebgl2renderingcontext.md#unpack_image_height)
- [UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL](fakewebgl2renderingcontext.md#unpack_premultiply_alpha_webgl)
- [UNPACK\_ROW\_LENGTH](fakewebgl2renderingcontext.md#unpack_row_length)
- [UNPACK\_SKIP\_IMAGES](fakewebgl2renderingcontext.md#unpack_skip_images)
- [UNPACK\_SKIP\_PIXELS](fakewebgl2renderingcontext.md#unpack_skip_pixels)
- [UNPACK\_SKIP\_ROWS](fakewebgl2renderingcontext.md#unpack_skip_rows)
- [UNSIGNALED](fakewebgl2renderingcontext.md#unsignaled)
- [UNSIGNED\_BYTE](fakewebgl2renderingcontext.md#unsigned_byte)
- [UNSIGNED\_INT](fakewebgl2renderingcontext.md#unsigned_int)
- [UNSIGNED\_INT\_10F\_11F\_11F\_REV](fakewebgl2renderingcontext.md#unsigned_int_10f_11f_11f_rev)
- [UNSIGNED\_INT\_24\_8](fakewebgl2renderingcontext.md#unsigned_int_24_8)
- [UNSIGNED\_INT\_2\_10\_10\_10\_REV](fakewebgl2renderingcontext.md#unsigned_int_2_10_10_10_rev)
- [UNSIGNED\_INT\_5\_9\_9\_9\_REV](fakewebgl2renderingcontext.md#unsigned_int_5_9_9_9_rev)
- [UNSIGNED\_INT\_SAMPLER\_2D](fakewebgl2renderingcontext.md#unsigned_int_sampler_2d)
- [UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY](fakewebgl2renderingcontext.md#unsigned_int_sampler_2d_array)
- [UNSIGNED\_INT\_SAMPLER\_3D](fakewebgl2renderingcontext.md#unsigned_int_sampler_3d)
- [UNSIGNED\_INT\_SAMPLER\_CUBE](fakewebgl2renderingcontext.md#unsigned_int_sampler_cube)
- [UNSIGNED\_INT\_VEC2](fakewebgl2renderingcontext.md#unsigned_int_vec2)
- [UNSIGNED\_INT\_VEC3](fakewebgl2renderingcontext.md#unsigned_int_vec3)
- [UNSIGNED\_INT\_VEC4](fakewebgl2renderingcontext.md#unsigned_int_vec4)
- [UNSIGNED\_NORMALIZED](fakewebgl2renderingcontext.md#unsigned_normalized)
- [UNSIGNED\_SHORT](fakewebgl2renderingcontext.md#unsigned_short)
- [UNSIGNED\_SHORT\_4\_4\_4\_4](fakewebgl2renderingcontext.md#unsigned_short_4_4_4_4)
- [UNSIGNED\_SHORT\_5\_5\_5\_1](fakewebgl2renderingcontext.md#unsigned_short_5_5_5_1)
- [UNSIGNED\_SHORT\_5\_6\_5](fakewebgl2renderingcontext.md#unsigned_short_5_6_5)
- [VALIDATE\_STATUS](fakewebgl2renderingcontext.md#validate_status)
- [VENDOR](fakewebgl2renderingcontext.md#vendor)
- [VERSION](fakewebgl2renderingcontext.md#version)
- [VERTEX\_ARRAY\_BINDING](fakewebgl2renderingcontext.md#vertex_array_binding)
- [VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING](fakewebgl2renderingcontext.md#vertex_attrib_array_buffer_binding)
- [VERTEX\_ATTRIB\_ARRAY\_DIVISOR](fakewebgl2renderingcontext.md#vertex_attrib_array_divisor)
- [VERTEX\_ATTRIB\_ARRAY\_ENABLED](fakewebgl2renderingcontext.md#vertex_attrib_array_enabled)
- [VERTEX\_ATTRIB\_ARRAY\_INTEGER](fakewebgl2renderingcontext.md#vertex_attrib_array_integer)
- [VERTEX\_ATTRIB\_ARRAY\_NORMALIZED](fakewebgl2renderingcontext.md#vertex_attrib_array_normalized)
- [VERTEX\_ATTRIB\_ARRAY\_POINTER](fakewebgl2renderingcontext.md#vertex_attrib_array_pointer)
- [VERTEX\_ATTRIB\_ARRAY\_SIZE](fakewebgl2renderingcontext.md#vertex_attrib_array_size)
- [VERTEX\_ATTRIB\_ARRAY\_STRIDE](fakewebgl2renderingcontext.md#vertex_attrib_array_stride)
- [VERTEX\_ATTRIB\_ARRAY\_TYPE](fakewebgl2renderingcontext.md#vertex_attrib_array_type)
- [VERTEX\_SHADER](fakewebgl2renderingcontext.md#vertex_shader)
- [VIEWPORT](fakewebgl2renderingcontext.md#viewport)
- [WAIT\_FAILED](fakewebgl2renderingcontext.md#wait_failed)
- [ZERO](fakewebgl2renderingcontext.md#zero)
- [canvas](fakewebgl2renderingcontext.md#canvas)
- [drawingBufferHeight](fakewebgl2renderingcontext.md#drawingbufferheight)
- [drawingBufferWidth](fakewebgl2renderingcontext.md#drawingbufferwidth)

### Methods

- [activeTexture](fakewebgl2renderingcontext.md#activetexture)
- [attachShader](fakewebgl2renderingcontext.md#attachshader)
- [beginQuery](fakewebgl2renderingcontext.md#beginquery)
- [beginTransformFeedback](fakewebgl2renderingcontext.md#begintransformfeedback)
- [bindAttribLocation](fakewebgl2renderingcontext.md#bindattriblocation)
- [bindBuffer](fakewebgl2renderingcontext.md#bindbuffer)
- [bindBufferBase](fakewebgl2renderingcontext.md#bindbufferbase)
- [bindBufferRange](fakewebgl2renderingcontext.md#bindbufferrange)
- [bindFramebuffer](fakewebgl2renderingcontext.md#bindframebuffer)
- [bindRenderbuffer](fakewebgl2renderingcontext.md#bindrenderbuffer)
- [bindSampler](fakewebgl2renderingcontext.md#bindsampler)
- [bindTexture](fakewebgl2renderingcontext.md#bindtexture)
- [bindTransformFeedback](fakewebgl2renderingcontext.md#bindtransformfeedback)
- [bindVertexArray](fakewebgl2renderingcontext.md#bindvertexarray)
- [blendColor](fakewebgl2renderingcontext.md#blendcolor)
- [blendEquation](fakewebgl2renderingcontext.md#blendequation)
- [blendEquationSeparate](fakewebgl2renderingcontext.md#blendequationseparate)
- [blendFunc](fakewebgl2renderingcontext.md#blendfunc)
- [blendFuncSeparate](fakewebgl2renderingcontext.md#blendfuncseparate)
- [blitFramebuffer](fakewebgl2renderingcontext.md#blitframebuffer)
- [bufferData](fakewebgl2renderingcontext.md#bufferdata)
- [bufferSubData](fakewebgl2renderingcontext.md#buffersubdata)
- [checkFramebufferStatus](fakewebgl2renderingcontext.md#checkframebufferstatus)
- [clear](fakewebgl2renderingcontext.md#clear)
- [clearBufferfi](fakewebgl2renderingcontext.md#clearbufferfi)
- [clearBufferfv](fakewebgl2renderingcontext.md#clearbufferfv)
- [clearBufferiv](fakewebgl2renderingcontext.md#clearbufferiv)
- [clearBufferuiv](fakewebgl2renderingcontext.md#clearbufferuiv)
- [clearColor](fakewebgl2renderingcontext.md#clearcolor)
- [clearDepth](fakewebgl2renderingcontext.md#cleardepth)
- [clearStencil](fakewebgl2renderingcontext.md#clearstencil)
- [clientWaitSync](fakewebgl2renderingcontext.md#clientwaitsync)
- [colorMask](fakewebgl2renderingcontext.md#colormask)
- [compileShader](fakewebgl2renderingcontext.md#compileshader)
- [compressedTexImage2D](fakewebgl2renderingcontext.md#compressedteximage2d)
- [compressedTexImage3D](fakewebgl2renderingcontext.md#compressedteximage3d)
- [compressedTexSubImage2D](fakewebgl2renderingcontext.md#compressedtexsubimage2d)
- [compressedTexSubImage3D](fakewebgl2renderingcontext.md#compressedtexsubimage3d)
- [copyBufferSubData](fakewebgl2renderingcontext.md#copybuffersubdata)
- [copyTexImage2D](fakewebgl2renderingcontext.md#copyteximage2d)
- [copyTexSubImage2D](fakewebgl2renderingcontext.md#copytexsubimage2d)
- [copyTexSubImage3D](fakewebgl2renderingcontext.md#copytexsubimage3d)
- [createBuffer](fakewebgl2renderingcontext.md#createbuffer)
- [createFramebuffer](fakewebgl2renderingcontext.md#createframebuffer)
- [createProgram](fakewebgl2renderingcontext.md#createprogram)
- [createQuery](fakewebgl2renderingcontext.md#createquery)
- [createRenderbuffer](fakewebgl2renderingcontext.md#createrenderbuffer)
- [createSampler](fakewebgl2renderingcontext.md#createsampler)
- [createShader](fakewebgl2renderingcontext.md#createshader)
- [createTexture](fakewebgl2renderingcontext.md#createtexture)
- [createTransformFeedback](fakewebgl2renderingcontext.md#createtransformfeedback)
- [createVertexArray](fakewebgl2renderingcontext.md#createvertexarray)
- [cullFace](fakewebgl2renderingcontext.md#cullface)
- [deleteBuffer](fakewebgl2renderingcontext.md#deletebuffer)
- [deleteFramebuffer](fakewebgl2renderingcontext.md#deleteframebuffer)
- [deleteProgram](fakewebgl2renderingcontext.md#deleteprogram)
- [deleteQuery](fakewebgl2renderingcontext.md#deletequery)
- [deleteRenderbuffer](fakewebgl2renderingcontext.md#deleterenderbuffer)
- [deleteSampler](fakewebgl2renderingcontext.md#deletesampler)
- [deleteShader](fakewebgl2renderingcontext.md#deleteshader)
- [deleteSync](fakewebgl2renderingcontext.md#deletesync)
- [deleteTexture](fakewebgl2renderingcontext.md#deletetexture)
- [deleteTransformFeedback](fakewebgl2renderingcontext.md#deletetransformfeedback)
- [deleteVertexArray](fakewebgl2renderingcontext.md#deletevertexarray)
- [depthFunc](fakewebgl2renderingcontext.md#depthfunc)
- [depthMask](fakewebgl2renderingcontext.md#depthmask)
- [depthRange](fakewebgl2renderingcontext.md#depthrange)
- [detachShader](fakewebgl2renderingcontext.md#detachshader)
- [disable](fakewebgl2renderingcontext.md#disable)
- [disableVertexAttribArray](fakewebgl2renderingcontext.md#disablevertexattribarray)
- [drawArrays](fakewebgl2renderingcontext.md#drawarrays)
- [drawArraysInstanced](fakewebgl2renderingcontext.md#drawarraysinstanced)
- [drawBuffers](fakewebgl2renderingcontext.md#drawbuffers)
- [drawElements](fakewebgl2renderingcontext.md#drawelements)
- [drawElementsInstanced](fakewebgl2renderingcontext.md#drawelementsinstanced)
- [drawRangeElements](fakewebgl2renderingcontext.md#drawrangeelements)
- [enable](fakewebgl2renderingcontext.md#enable)
- [enableVertexAttribArray](fakewebgl2renderingcontext.md#enablevertexattribarray)
- [endQuery](fakewebgl2renderingcontext.md#endquery)
- [endTransformFeedback](fakewebgl2renderingcontext.md#endtransformfeedback)
- [fenceSync](fakewebgl2renderingcontext.md#fencesync)
- [finish](fakewebgl2renderingcontext.md#finish)
- [flush](fakewebgl2renderingcontext.md#flush)
- [framebufferRenderbuffer](fakewebgl2renderingcontext.md#framebufferrenderbuffer)
- [framebufferTexture2D](fakewebgl2renderingcontext.md#framebuffertexture2d)
- [framebufferTextureLayer](fakewebgl2renderingcontext.md#framebuffertexturelayer)
- [frontFace](fakewebgl2renderingcontext.md#frontface)
- [generateMipmap](fakewebgl2renderingcontext.md#generatemipmap)
- [getActiveAttrib](fakewebgl2renderingcontext.md#getactiveattrib)
- [getActiveUniform](fakewebgl2renderingcontext.md#getactiveuniform)
- [getActiveUniformBlockName](fakewebgl2renderingcontext.md#getactiveuniformblockname)
- [getActiveUniformBlockParameter](fakewebgl2renderingcontext.md#getactiveuniformblockparameter)
- [getActiveUniforms](fakewebgl2renderingcontext.md#getactiveuniforms)
- [getAttachedShaders](fakewebgl2renderingcontext.md#getattachedshaders)
- [getAttribLocation](fakewebgl2renderingcontext.md#getattriblocation)
- [getBufferParameter](fakewebgl2renderingcontext.md#getbufferparameter)
- [getBufferSubData](fakewebgl2renderingcontext.md#getbuffersubdata)
- [getContextAttributes](fakewebgl2renderingcontext.md#getcontextattributes)
- [getError](fakewebgl2renderingcontext.md#geterror)
- [getExtension](fakewebgl2renderingcontext.md#getextension)
- [getFragDataLocation](fakewebgl2renderingcontext.md#getfragdatalocation)
- [getFramebufferAttachmentParameter](fakewebgl2renderingcontext.md#getframebufferattachmentparameter)
- [getIndexedParameter](fakewebgl2renderingcontext.md#getindexedparameter)
- [getInternalformatParameter](fakewebgl2renderingcontext.md#getinternalformatparameter)
- [getParameter](fakewebgl2renderingcontext.md#getparameter)
- [getProgramInfoLog](fakewebgl2renderingcontext.md#getprograminfolog)
- [getProgramParameter](fakewebgl2renderingcontext.md#getprogramparameter)
- [getQuery](fakewebgl2renderingcontext.md#getquery)
- [getQueryParameter](fakewebgl2renderingcontext.md#getqueryparameter)
- [getRenderbufferParameter](fakewebgl2renderingcontext.md#getrenderbufferparameter)
- [getSamplerParameter](fakewebgl2renderingcontext.md#getsamplerparameter)
- [getShaderInfoLog](fakewebgl2renderingcontext.md#getshaderinfolog)
- [getShaderParameter](fakewebgl2renderingcontext.md#getshaderparameter)
- [getShaderPrecisionFormat](fakewebgl2renderingcontext.md#getshaderprecisionformat)
- [getShaderSource](fakewebgl2renderingcontext.md#getshadersource)
- [getSupportedExtensions](fakewebgl2renderingcontext.md#getsupportedextensions)
- [getSyncParameter](fakewebgl2renderingcontext.md#getsyncparameter)
- [getTexParameter](fakewebgl2renderingcontext.md#gettexparameter)
- [getTransformFeedbackVarying](fakewebgl2renderingcontext.md#gettransformfeedbackvarying)
- [getUniform](fakewebgl2renderingcontext.md#getuniform)
- [getUniformBlockIndex](fakewebgl2renderingcontext.md#getuniformblockindex)
- [getUniformIndices](fakewebgl2renderingcontext.md#getuniformindices)
- [getUniformLocation](fakewebgl2renderingcontext.md#getuniformlocation)
- [getVertexAttrib](fakewebgl2renderingcontext.md#getvertexattrib)
- [getVertexAttribOffset](fakewebgl2renderingcontext.md#getvertexattriboffset)
- [hint](fakewebgl2renderingcontext.md#hint)
- [invalidateFramebuffer](fakewebgl2renderingcontext.md#invalidateframebuffer)
- [invalidateSubFramebuffer](fakewebgl2renderingcontext.md#invalidatesubframebuffer)
- [isBuffer](fakewebgl2renderingcontext.md#isbuffer)
- [isContextLost](fakewebgl2renderingcontext.md#iscontextlost)
- [isEnabled](fakewebgl2renderingcontext.md#isenabled)
- [isFramebuffer](fakewebgl2renderingcontext.md#isframebuffer)
- [isProgram](fakewebgl2renderingcontext.md#isprogram)
- [isQuery](fakewebgl2renderingcontext.md#isquery)
- [isRenderbuffer](fakewebgl2renderingcontext.md#isrenderbuffer)
- [isSampler](fakewebgl2renderingcontext.md#issampler)
- [isShader](fakewebgl2renderingcontext.md#isshader)
- [isSync](fakewebgl2renderingcontext.md#issync)
- [isTexture](fakewebgl2renderingcontext.md#istexture)
- [isTransformFeedback](fakewebgl2renderingcontext.md#istransformfeedback)
- [isVertexArray](fakewebgl2renderingcontext.md#isvertexarray)
- [lineWidth](fakewebgl2renderingcontext.md#linewidth)
- [linkProgram](fakewebgl2renderingcontext.md#linkprogram)
- [pauseTransformFeedback](fakewebgl2renderingcontext.md#pausetransformfeedback)
- [pixelStorei](fakewebgl2renderingcontext.md#pixelstorei)
- [polygonOffset](fakewebgl2renderingcontext.md#polygonoffset)
- [readBuffer](fakewebgl2renderingcontext.md#readbuffer)
- [readPixels](fakewebgl2renderingcontext.md#readpixels)
- [renderbufferStorage](fakewebgl2renderingcontext.md#renderbufferstorage)
- [renderbufferStorageMultisample](fakewebgl2renderingcontext.md#renderbufferstoragemultisample)
- [resumeTransformFeedback](fakewebgl2renderingcontext.md#resumetransformfeedback)
- [sampleCoverage](fakewebgl2renderingcontext.md#samplecoverage)
- [samplerParameterf](fakewebgl2renderingcontext.md#samplerparameterf)
- [samplerParameteri](fakewebgl2renderingcontext.md#samplerparameteri)
- [scissor](fakewebgl2renderingcontext.md#scissor)
- [shaderSource](fakewebgl2renderingcontext.md#shadersource)
- [stencilFunc](fakewebgl2renderingcontext.md#stencilfunc)
- [stencilFuncSeparate](fakewebgl2renderingcontext.md#stencilfuncseparate)
- [stencilMask](fakewebgl2renderingcontext.md#stencilmask)
- [stencilMaskSeparate](fakewebgl2renderingcontext.md#stencilmaskseparate)
- [stencilOp](fakewebgl2renderingcontext.md#stencilop)
- [stencilOpSeparate](fakewebgl2renderingcontext.md#stencilopseparate)
- [texImage2D](fakewebgl2renderingcontext.md#teximage2d)
- [texImage3D](fakewebgl2renderingcontext.md#teximage3d)
- [texParameterf](fakewebgl2renderingcontext.md#texparameterf)
- [texParameteri](fakewebgl2renderingcontext.md#texparameteri)
- [texStorage2D](fakewebgl2renderingcontext.md#texstorage2d)
- [texStorage3D](fakewebgl2renderingcontext.md#texstorage3d)
- [texSubImage2D](fakewebgl2renderingcontext.md#texsubimage2d)
- [texSubImage3D](fakewebgl2renderingcontext.md#texsubimage3d)
- [transformFeedbackVaryings](fakewebgl2renderingcontext.md#transformfeedbackvaryings)
- [uniform1f](fakewebgl2renderingcontext.md#uniform1f)
- [uniform1fv](fakewebgl2renderingcontext.md#uniform1fv)
- [uniform1i](fakewebgl2renderingcontext.md#uniform1i)
- [uniform1iv](fakewebgl2renderingcontext.md#uniform1iv)
- [uniform1ui](fakewebgl2renderingcontext.md#uniform1ui)
- [uniform1uiv](fakewebgl2renderingcontext.md#uniform1uiv)
- [uniform2f](fakewebgl2renderingcontext.md#uniform2f)
- [uniform2fv](fakewebgl2renderingcontext.md#uniform2fv)
- [uniform2i](fakewebgl2renderingcontext.md#uniform2i)
- [uniform2iv](fakewebgl2renderingcontext.md#uniform2iv)
- [uniform2ui](fakewebgl2renderingcontext.md#uniform2ui)
- [uniform2uiv](fakewebgl2renderingcontext.md#uniform2uiv)
- [uniform3f](fakewebgl2renderingcontext.md#uniform3f)
- [uniform3fv](fakewebgl2renderingcontext.md#uniform3fv)
- [uniform3i](fakewebgl2renderingcontext.md#uniform3i)
- [uniform3iv](fakewebgl2renderingcontext.md#uniform3iv)
- [uniform3ui](fakewebgl2renderingcontext.md#uniform3ui)
- [uniform3uiv](fakewebgl2renderingcontext.md#uniform3uiv)
- [uniform4f](fakewebgl2renderingcontext.md#uniform4f)
- [uniform4fv](fakewebgl2renderingcontext.md#uniform4fv)
- [uniform4i](fakewebgl2renderingcontext.md#uniform4i)
- [uniform4iv](fakewebgl2renderingcontext.md#uniform4iv)
- [uniform4ui](fakewebgl2renderingcontext.md#uniform4ui)
- [uniform4uiv](fakewebgl2renderingcontext.md#uniform4uiv)
- [uniformBlockBinding](fakewebgl2renderingcontext.md#uniformblockbinding)
- [uniformMatrix2fv](fakewebgl2renderingcontext.md#uniformmatrix2fv)
- [uniformMatrix2x3fv](fakewebgl2renderingcontext.md#uniformmatrix2x3fv)
- [uniformMatrix2x4fv](fakewebgl2renderingcontext.md#uniformmatrix2x4fv)
- [uniformMatrix3fv](fakewebgl2renderingcontext.md#uniformmatrix3fv)
- [uniformMatrix3x2fv](fakewebgl2renderingcontext.md#uniformmatrix3x2fv)
- [uniformMatrix3x4fv](fakewebgl2renderingcontext.md#uniformmatrix3x4fv)
- [uniformMatrix4fv](fakewebgl2renderingcontext.md#uniformmatrix4fv)
- [uniformMatrix4x2fv](fakewebgl2renderingcontext.md#uniformmatrix4x2fv)
- [uniformMatrix4x3fv](fakewebgl2renderingcontext.md#uniformmatrix4x3fv)
- [useProgram](fakewebgl2renderingcontext.md#useprogram)
- [validateProgram](fakewebgl2renderingcontext.md#validateprogram)
- [vertexAttrib1f](fakewebgl2renderingcontext.md#vertexattrib1f)
- [vertexAttrib1fv](fakewebgl2renderingcontext.md#vertexattrib1fv)
- [vertexAttrib2f](fakewebgl2renderingcontext.md#vertexattrib2f)
- [vertexAttrib2fv](fakewebgl2renderingcontext.md#vertexattrib2fv)
- [vertexAttrib3f](fakewebgl2renderingcontext.md#vertexattrib3f)
- [vertexAttrib3fv](fakewebgl2renderingcontext.md#vertexattrib3fv)
- [vertexAttrib4f](fakewebgl2renderingcontext.md#vertexattrib4f)
- [vertexAttrib4fv](fakewebgl2renderingcontext.md#vertexattrib4fv)
- [vertexAttribDivisor](fakewebgl2renderingcontext.md#vertexattribdivisor)
- [vertexAttribI4i](fakewebgl2renderingcontext.md#vertexattribi4i)
- [vertexAttribI4iv](fakewebgl2renderingcontext.md#vertexattribi4iv)
- [vertexAttribI4ui](fakewebgl2renderingcontext.md#vertexattribi4ui)
- [vertexAttribI4uiv](fakewebgl2renderingcontext.md#vertexattribi4uiv)
- [vertexAttribIPointer](fakewebgl2renderingcontext.md#vertexattribipointer)
- [vertexAttribPointer](fakewebgl2renderingcontext.md#vertexattribpointer)
- [viewport](fakewebgl2renderingcontext.md#viewport)
- [waitSync](fakewebgl2renderingcontext.md#waitsync)

## Constructors

### constructor

\+ **new FakeWebGL2RenderingContext**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeWebGL2RenderingContext*](fakewebgl2renderingcontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeWebGL2RenderingContext*](fakewebgl2renderingcontext.md)

Inherited from: [Fake](fake.md)

## Properties

### ACTIVE\_ATTRIBUTES

• **ACTIVE\_ATTRIBUTES**: *number*

___

### ACTIVE\_TEXTURE

• **ACTIVE\_TEXTURE**: *number*

___

### ACTIVE\_UNIFORMS

• **ACTIVE\_UNIFORMS**: *number*

___

### ACTIVE\_UNIFORM\_BLOCKS

• **ACTIVE\_UNIFORM\_BLOCKS**: *number*

___

### ALIASED\_LINE\_WIDTH\_RANGE

• **ALIASED\_LINE\_WIDTH\_RANGE**: *number*

___

### ALIASED\_POINT\_SIZE\_RANGE

• **ALIASED\_POINT\_SIZE\_RANGE**: *number*

___

### ALPHA

• **ALPHA**: *number*

___

### ALPHA\_BITS

• **ALPHA\_BITS**: *number*

___

### ALREADY\_SIGNALED

• **ALREADY\_SIGNALED**: *number*

___

### ALWAYS

• **ALWAYS**: *number*

___

### ANY\_SAMPLES\_PASSED

• **ANY\_SAMPLES\_PASSED**: *number*

___

### ANY\_SAMPLES\_PASSED\_CONSERVATIVE

• **ANY\_SAMPLES\_PASSED\_CONSERVATIVE**: *number*

___

### ARRAY\_BUFFER

• **ARRAY\_BUFFER**: *number*

___

### ARRAY\_BUFFER\_BINDING

• **ARRAY\_BUFFER\_BINDING**: *number*

___

### ATTACHED\_SHADERS

• **ATTACHED\_SHADERS**: *number*

___

### BACK

• **BACK**: *number*

___

### BLEND

• **BLEND**: *number*

___

### BLEND\_COLOR

• **BLEND\_COLOR**: *number*

___

### BLEND\_DST\_ALPHA

• **BLEND\_DST\_ALPHA**: *number*

___

### BLEND\_DST\_RGB

• **BLEND\_DST\_RGB**: *number*

___

### BLEND\_EQUATION

• **BLEND\_EQUATION**: *number*

___

### BLEND\_EQUATION\_ALPHA

• **BLEND\_EQUATION\_ALPHA**: *number*

___

### BLEND\_EQUATION\_RGB

• **BLEND\_EQUATION\_RGB**: *number*

___

### BLEND\_SRC\_ALPHA

• **BLEND\_SRC\_ALPHA**: *number*

___

### BLEND\_SRC\_RGB

• **BLEND\_SRC\_RGB**: *number*

___

### BLUE\_BITS

• **BLUE\_BITS**: *number*

___

### BOOL

• **BOOL**: *number*

___

### BOOL\_VEC2

• **BOOL\_VEC2**: *number*

___

### BOOL\_VEC3

• **BOOL\_VEC3**: *number*

___

### BOOL\_VEC4

• **BOOL\_VEC4**: *number*

___

### BROWSER\_DEFAULT\_WEBGL

• **BROWSER\_DEFAULT\_WEBGL**: *number*

___

### BUFFER\_SIZE

• **BUFFER\_SIZE**: *number*

___

### BUFFER\_USAGE

• **BUFFER\_USAGE**: *number*

___

### BYTE

• **BYTE**: *number*

___

### CCW

• **CCW**: *number*

___

### CLAMP\_TO\_EDGE

• **CLAMP\_TO\_EDGE**: *number*

___

### COLOR

• **COLOR**: *number*

___

### COLOR\_ATTACHMENT0

• **COLOR\_ATTACHMENT0**: *number*

___

### COLOR\_ATTACHMENT1

• **COLOR\_ATTACHMENT1**: *number*

___

### COLOR\_ATTACHMENT10

• **COLOR\_ATTACHMENT10**: *number*

___

### COLOR\_ATTACHMENT11

• **COLOR\_ATTACHMENT11**: *number*

___

### COLOR\_ATTACHMENT12

• **COLOR\_ATTACHMENT12**: *number*

___

### COLOR\_ATTACHMENT13

• **COLOR\_ATTACHMENT13**: *number*

___

### COLOR\_ATTACHMENT14

• **COLOR\_ATTACHMENT14**: *number*

___

### COLOR\_ATTACHMENT15

• **COLOR\_ATTACHMENT15**: *number*

___

### COLOR\_ATTACHMENT2

• **COLOR\_ATTACHMENT2**: *number*

___

### COLOR\_ATTACHMENT3

• **COLOR\_ATTACHMENT3**: *number*

___

### COLOR\_ATTACHMENT4

• **COLOR\_ATTACHMENT4**: *number*

___

### COLOR\_ATTACHMENT5

• **COLOR\_ATTACHMENT5**: *number*

___

### COLOR\_ATTACHMENT6

• **COLOR\_ATTACHMENT6**: *number*

___

### COLOR\_ATTACHMENT7

• **COLOR\_ATTACHMENT7**: *number*

___

### COLOR\_ATTACHMENT8

• **COLOR\_ATTACHMENT8**: *number*

___

### COLOR\_ATTACHMENT9

• **COLOR\_ATTACHMENT9**: *number*

___

### COLOR\_BUFFER\_BIT

• **COLOR\_BUFFER\_BIT**: *number*

___

### COLOR\_CLEAR\_VALUE

• **COLOR\_CLEAR\_VALUE**: *number*

___

### COLOR\_WRITEMASK

• **COLOR\_WRITEMASK**: *number*

___

### COMPARE\_REF\_TO\_TEXTURE

• **COMPARE\_REF\_TO\_TEXTURE**: *number*

___

### COMPILE\_STATUS

• **COMPILE\_STATUS**: *number*

___

### COMPRESSED\_TEXTURE\_FORMATS

• **COMPRESSED\_TEXTURE\_FORMATS**: *number*

___

### CONDITION\_SATISFIED

• **CONDITION\_SATISFIED**: *number*

___

### CONSTANT\_ALPHA

• **CONSTANT\_ALPHA**: *number*

___

### CONSTANT\_COLOR

• **CONSTANT\_COLOR**: *number*

___

### CONTEXT\_LOST\_WEBGL

• **CONTEXT\_LOST\_WEBGL**: *number*

___

### COPY\_READ\_BUFFER

• **COPY\_READ\_BUFFER**: *number*

___

### COPY\_READ\_BUFFER\_BINDING

• **COPY\_READ\_BUFFER\_BINDING**: *number*

___

### COPY\_WRITE\_BUFFER

• **COPY\_WRITE\_BUFFER**: *number*

___

### COPY\_WRITE\_BUFFER\_BINDING

• **COPY\_WRITE\_BUFFER\_BINDING**: *number*

___

### CULL\_FACE

• **CULL\_FACE**: *number*

___

### CULL\_FACE\_MODE

• **CULL\_FACE\_MODE**: *number*

___

### CURRENT\_PROGRAM

• **CURRENT\_PROGRAM**: *number*

___

### CURRENT\_QUERY

• **CURRENT\_QUERY**: *number*

___

### CURRENT\_VERTEX\_ATTRIB

• **CURRENT\_VERTEX\_ATTRIB**: *number*

___

### CW

• **CW**: *number*

___

### DECR

• **DECR**: *number*

___

### DECR\_WRAP

• **DECR\_WRAP**: *number*

___

### DELETE\_STATUS

• **DELETE\_STATUS**: *number*

___

### DEPTH

• **DEPTH**: *number*

___

### DEPTH24\_STENCIL8

• **DEPTH24\_STENCIL8**: *number*

___

### DEPTH32F\_STENCIL8

• **DEPTH32F\_STENCIL8**: *number*

___

### DEPTH\_ATTACHMENT

• **DEPTH\_ATTACHMENT**: *number*

___

### DEPTH\_BITS

• **DEPTH\_BITS**: *number*

___

### DEPTH\_BUFFER\_BIT

• **DEPTH\_BUFFER\_BIT**: *number*

___

### DEPTH\_CLEAR\_VALUE

• **DEPTH\_CLEAR\_VALUE**: *number*

___

### DEPTH\_COMPONENT

• **DEPTH\_COMPONENT**: *number*

___

### DEPTH\_COMPONENT16

• **DEPTH\_COMPONENT16**: *number*

___

### DEPTH\_COMPONENT24

• **DEPTH\_COMPONENT24**: *number*

___

### DEPTH\_COMPONENT32F

• **DEPTH\_COMPONENT32F**: *number*

___

### DEPTH\_FUNC

• **DEPTH\_FUNC**: *number*

___

### DEPTH\_RANGE

• **DEPTH\_RANGE**: *number*

___

### DEPTH\_STENCIL

• **DEPTH\_STENCIL**: *number*

___

### DEPTH\_STENCIL\_ATTACHMENT

• **DEPTH\_STENCIL\_ATTACHMENT**: *number*

___

### DEPTH\_TEST

• **DEPTH\_TEST**: *number*

___

### DEPTH\_WRITEMASK

• **DEPTH\_WRITEMASK**: *number*

___

### DITHER

• **DITHER**: *number*

___

### DONT\_CARE

• **DONT\_CARE**: *number*

___

### DRAW\_BUFFER0

• **DRAW\_BUFFER0**: *number*

___

### DRAW\_BUFFER1

• **DRAW\_BUFFER1**: *number*

___

### DRAW\_BUFFER10

• **DRAW\_BUFFER10**: *number*

___

### DRAW\_BUFFER11

• **DRAW\_BUFFER11**: *number*

___

### DRAW\_BUFFER12

• **DRAW\_BUFFER12**: *number*

___

### DRAW\_BUFFER13

• **DRAW\_BUFFER13**: *number*

___

### DRAW\_BUFFER14

• **DRAW\_BUFFER14**: *number*

___

### DRAW\_BUFFER15

• **DRAW\_BUFFER15**: *number*

___

### DRAW\_BUFFER2

• **DRAW\_BUFFER2**: *number*

___

### DRAW\_BUFFER3

• **DRAW\_BUFFER3**: *number*

___

### DRAW\_BUFFER4

• **DRAW\_BUFFER4**: *number*

___

### DRAW\_BUFFER5

• **DRAW\_BUFFER5**: *number*

___

### DRAW\_BUFFER6

• **DRAW\_BUFFER6**: *number*

___

### DRAW\_BUFFER7

• **DRAW\_BUFFER7**: *number*

___

### DRAW\_BUFFER8

• **DRAW\_BUFFER8**: *number*

___

### DRAW\_BUFFER9

• **DRAW\_BUFFER9**: *number*

___

### DRAW\_FRAMEBUFFER

• **DRAW\_FRAMEBUFFER**: *number*

___

### DRAW\_FRAMEBUFFER\_BINDING

• **DRAW\_FRAMEBUFFER\_BINDING**: *number*

___

### DST\_ALPHA

• **DST\_ALPHA**: *number*

___

### DST\_COLOR

• **DST\_COLOR**: *number*

___

### DYNAMIC\_COPY

• **DYNAMIC\_COPY**: *number*

___

### DYNAMIC\_DRAW

• **DYNAMIC\_DRAW**: *number*

___

### DYNAMIC\_READ

• **DYNAMIC\_READ**: *number*

___

### ELEMENT\_ARRAY\_BUFFER

• **ELEMENT\_ARRAY\_BUFFER**: *number*

___

### ELEMENT\_ARRAY\_BUFFER\_BINDING

• **ELEMENT\_ARRAY\_BUFFER\_BINDING**: *number*

___

### EQUAL

• **EQUAL**: *number*

___

### FASTEST

• **FASTEST**: *number*

___

### FLOAT

• **FLOAT**: *number*

___

### FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV

• **FLOAT\_32\_UNSIGNED\_INT\_24\_8\_REV**: *number*

___

### FLOAT\_MAT2

• **FLOAT\_MAT2**: *number*

___

### FLOAT\_MAT2x3

• **FLOAT\_MAT2x3**: *number*

___

### FLOAT\_MAT2x4

• **FLOAT\_MAT2x4**: *number*

___

### FLOAT\_MAT3

• **FLOAT\_MAT3**: *number*

___

### FLOAT\_MAT3x2

• **FLOAT\_MAT3x2**: *number*

___

### FLOAT\_MAT3x4

• **FLOAT\_MAT3x4**: *number*

___

### FLOAT\_MAT4

• **FLOAT\_MAT4**: *number*

___

### FLOAT\_MAT4x2

• **FLOAT\_MAT4x2**: *number*

___

### FLOAT\_MAT4x3

• **FLOAT\_MAT4x3**: *number*

___

### FLOAT\_VEC2

• **FLOAT\_VEC2**: *number*

___

### FLOAT\_VEC3

• **FLOAT\_VEC3**: *number*

___

### FLOAT\_VEC4

• **FLOAT\_VEC4**: *number*

___

### FRAGMENT\_SHADER

• **FRAGMENT\_SHADER**: *number*

___

### FRAGMENT\_SHADER\_DERIVATIVE\_HINT

• **FRAGMENT\_SHADER\_DERIVATIVE\_HINT**: *number*

___

### FRAMEBUFFER

• **FRAMEBUFFER**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_ALPHA\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_BLUE\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING

• **FRAMEBUFFER\_ATTACHMENT\_COLOR\_ENCODING**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE

• **FRAMEBUFFER\_ATTACHMENT\_COMPONENT\_TYPE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_DEPTH\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_GREEN\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME

• **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_NAME**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE

• **FRAMEBUFFER\_ATTACHMENT\_OBJECT\_TYPE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_RED\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE

• **FRAMEBUFFER\_ATTACHMENT\_STENCIL\_SIZE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE

• **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_CUBE\_MAP\_FACE**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER

• **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LAYER**: *number*

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL

• **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_LEVEL**: *number*

___

### FRAMEBUFFER\_BINDING

• **FRAMEBUFFER\_BINDING**: *number*

___

### FRAMEBUFFER\_COMPLETE

• **FRAMEBUFFER\_COMPLETE**: *number*

___

### FRAMEBUFFER\_DEFAULT

• **FRAMEBUFFER\_DEFAULT**: *number*

___

### FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT

• **FRAMEBUFFER\_INCOMPLETE\_ATTACHMENT**: *number*

___

### FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS

• **FRAMEBUFFER\_INCOMPLETE\_DIMENSIONS**: *number*

___

### FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT

• **FRAMEBUFFER\_INCOMPLETE\_MISSING\_ATTACHMENT**: *number*

___

### FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE

• **FRAMEBUFFER\_INCOMPLETE\_MULTISAMPLE**: *number*

___

### FRAMEBUFFER\_UNSUPPORTED

• **FRAMEBUFFER\_UNSUPPORTED**: *number*

___

### FRONT

• **FRONT**: *number*

___

### FRONT\_AND\_BACK

• **FRONT\_AND\_BACK**: *number*

___

### FRONT\_FACE

• **FRONT\_FACE**: *number*

___

### FUNC\_ADD

• **FUNC\_ADD**: *number*

___

### FUNC\_REVERSE\_SUBTRACT

• **FUNC\_REVERSE\_SUBTRACT**: *number*

___

### FUNC\_SUBTRACT

• **FUNC\_SUBTRACT**: *number*

___

### GENERATE\_MIPMAP\_HINT

• **GENERATE\_MIPMAP\_HINT**: *number*

___

### GEQUAL

• **GEQUAL**: *number*

___

### GREATER

• **GREATER**: *number*

___

### GREEN\_BITS

• **GREEN\_BITS**: *number*

___

### HALF\_FLOAT

• **HALF\_FLOAT**: *number*

___

### HIGH\_FLOAT

• **HIGH\_FLOAT**: *number*

___

### HIGH\_INT

• **HIGH\_INT**: *number*

___

### IMPLEMENTATION\_COLOR\_READ\_FORMAT

• **IMPLEMENTATION\_COLOR\_READ\_FORMAT**: *number*

___

### IMPLEMENTATION\_COLOR\_READ\_TYPE

• **IMPLEMENTATION\_COLOR\_READ\_TYPE**: *number*

___

### INCR

• **INCR**: *number*

___

### INCR\_WRAP

• **INCR\_WRAP**: *number*

___

### INT

• **INT**: *number*

___

### INTERLEAVED\_ATTRIBS

• **INTERLEAVED\_ATTRIBS**: *number*

___

### INT\_2\_10\_10\_10\_REV

• **INT\_2\_10\_10\_10\_REV**: *number*

___

### INT\_SAMPLER\_2D

• **INT\_SAMPLER\_2D**: *number*

___

### INT\_SAMPLER\_2D\_ARRAY

• **INT\_SAMPLER\_2D\_ARRAY**: *number*

___

### INT\_SAMPLER\_3D

• **INT\_SAMPLER\_3D**: *number*

___

### INT\_SAMPLER\_CUBE

• **INT\_SAMPLER\_CUBE**: *number*

___

### INT\_VEC2

• **INT\_VEC2**: *number*

___

### INT\_VEC3

• **INT\_VEC3**: *number*

___

### INT\_VEC4

• **INT\_VEC4**: *number*

___

### INVALID\_ENUM

• **INVALID\_ENUM**: *number*

___

### INVALID\_FRAMEBUFFER\_OPERATION

• **INVALID\_FRAMEBUFFER\_OPERATION**: *number*

___

### INVALID\_INDEX

• **INVALID\_INDEX**: *number*

___

### INVALID\_OPERATION

• **INVALID\_OPERATION**: *number*

___

### INVALID\_VALUE

• **INVALID\_VALUE**: *number*

___

### INVERT

• **INVERT**: *number*

___

### KEEP

• **KEEP**: *number*

___

### LEQUAL

• **LEQUAL**: *number*

___

### LESS

• **LESS**: *number*

___

### LINEAR

• **LINEAR**: *number*

___

### LINEAR\_MIPMAP\_LINEAR

• **LINEAR\_MIPMAP\_LINEAR**: *number*

___

### LINEAR\_MIPMAP\_NEAREST

• **LINEAR\_MIPMAP\_NEAREST**: *number*

___

### LINES

• **LINES**: *number*

___

### LINE\_LOOP

• **LINE\_LOOP**: *number*

___

### LINE\_STRIP

• **LINE\_STRIP**: *number*

___

### LINE\_WIDTH

• **LINE\_WIDTH**: *number*

___

### LINK\_STATUS

• **LINK\_STATUS**: *number*

___

### LOW\_FLOAT

• **LOW\_FLOAT**: *number*

___

### LOW\_INT

• **LOW\_INT**: *number*

___

### LUMINANCE

• **LUMINANCE**: *number*

___

### LUMINANCE\_ALPHA

• **LUMINANCE\_ALPHA**: *number*

___

### MAX

• **MAX**: *number*

___

### MAX\_3D\_TEXTURE\_SIZE

• **MAX\_3D\_TEXTURE\_SIZE**: *number*

___

### MAX\_ARRAY\_TEXTURE\_LAYERS

• **MAX\_ARRAY\_TEXTURE\_LAYERS**: *number*

___

### MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL

• **MAX\_CLIENT\_WAIT\_TIMEOUT\_WEBGL**: *number*

___

### MAX\_COLOR\_ATTACHMENTS

• **MAX\_COLOR\_ATTACHMENTS**: *number*

___

### MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS

• **MAX\_COMBINED\_FRAGMENT\_UNIFORM\_COMPONENTS**: *number*

___

### MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS

• **MAX\_COMBINED\_TEXTURE\_IMAGE\_UNITS**: *number*

___

### MAX\_COMBINED\_UNIFORM\_BLOCKS

• **MAX\_COMBINED\_UNIFORM\_BLOCKS**: *number*

___

### MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS

• **MAX\_COMBINED\_VERTEX\_UNIFORM\_COMPONENTS**: *number*

___

### MAX\_CUBE\_MAP\_TEXTURE\_SIZE

• **MAX\_CUBE\_MAP\_TEXTURE\_SIZE**: *number*

___

### MAX\_DRAW\_BUFFERS

• **MAX\_DRAW\_BUFFERS**: *number*

___

### MAX\_ELEMENTS\_INDICES

• **MAX\_ELEMENTS\_INDICES**: *number*

___

### MAX\_ELEMENTS\_VERTICES

• **MAX\_ELEMENTS\_VERTICES**: *number*

___

### MAX\_ELEMENT\_INDEX

• **MAX\_ELEMENT\_INDEX**: *number*

___

### MAX\_FRAGMENT\_INPUT\_COMPONENTS

• **MAX\_FRAGMENT\_INPUT\_COMPONENTS**: *number*

___

### MAX\_FRAGMENT\_UNIFORM\_BLOCKS

• **MAX\_FRAGMENT\_UNIFORM\_BLOCKS**: *number*

___

### MAX\_FRAGMENT\_UNIFORM\_COMPONENTS

• **MAX\_FRAGMENT\_UNIFORM\_COMPONENTS**: *number*

___

### MAX\_FRAGMENT\_UNIFORM\_VECTORS

• **MAX\_FRAGMENT\_UNIFORM\_VECTORS**: *number*

___

### MAX\_PROGRAM\_TEXEL\_OFFSET

• **MAX\_PROGRAM\_TEXEL\_OFFSET**: *number*

___

### MAX\_RENDERBUFFER\_SIZE

• **MAX\_RENDERBUFFER\_SIZE**: *number*

___

### MAX\_SAMPLES

• **MAX\_SAMPLES**: *number*

___

### MAX\_SERVER\_WAIT\_TIMEOUT

• **MAX\_SERVER\_WAIT\_TIMEOUT**: *number*

___

### MAX\_TEXTURE\_IMAGE\_UNITS

• **MAX\_TEXTURE\_IMAGE\_UNITS**: *number*

___

### MAX\_TEXTURE\_LOD\_BIAS

• **MAX\_TEXTURE\_LOD\_BIAS**: *number*

___

### MAX\_TEXTURE\_SIZE

• **MAX\_TEXTURE\_SIZE**: *number*

___

### MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS

• **MAX\_TRANSFORM\_FEEDBACK\_INTERLEAVED\_COMPONENTS**: *number*

___

### MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS

• **MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_ATTRIBS**: *number*

___

### MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS

• **MAX\_TRANSFORM\_FEEDBACK\_SEPARATE\_COMPONENTS**: *number*

___

### MAX\_UNIFORM\_BLOCK\_SIZE

• **MAX\_UNIFORM\_BLOCK\_SIZE**: *number*

___

### MAX\_UNIFORM\_BUFFER\_BINDINGS

• **MAX\_UNIFORM\_BUFFER\_BINDINGS**: *number*

___

### MAX\_VARYING\_COMPONENTS

• **MAX\_VARYING\_COMPONENTS**: *number*

___

### MAX\_VARYING\_VECTORS

• **MAX\_VARYING\_VECTORS**: *number*

___

### MAX\_VERTEX\_ATTRIBS

• **MAX\_VERTEX\_ATTRIBS**: *number*

___

### MAX\_VERTEX\_OUTPUT\_COMPONENTS

• **MAX\_VERTEX\_OUTPUT\_COMPONENTS**: *number*

___

### MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS

• **MAX\_VERTEX\_TEXTURE\_IMAGE\_UNITS**: *number*

___

### MAX\_VERTEX\_UNIFORM\_BLOCKS

• **MAX\_VERTEX\_UNIFORM\_BLOCKS**: *number*

___

### MAX\_VERTEX\_UNIFORM\_COMPONENTS

• **MAX\_VERTEX\_UNIFORM\_COMPONENTS**: *number*

___

### MAX\_VERTEX\_UNIFORM\_VECTORS

• **MAX\_VERTEX\_UNIFORM\_VECTORS**: *number*

___

### MAX\_VIEWPORT\_DIMS

• **MAX\_VIEWPORT\_DIMS**: *number*

___

### MEDIUM\_FLOAT

• **MEDIUM\_FLOAT**: *number*

___

### MEDIUM\_INT

• **MEDIUM\_INT**: *number*

___

### MIN

• **MIN**: *number*

___

### MIN\_PROGRAM\_TEXEL\_OFFSET

• **MIN\_PROGRAM\_TEXEL\_OFFSET**: *number*

___

### MIRRORED\_REPEAT

• **MIRRORED\_REPEAT**: *number*

___

### NEAREST

• **NEAREST**: *number*

___

### NEAREST\_MIPMAP\_LINEAR

• **NEAREST\_MIPMAP\_LINEAR**: *number*

___

### NEAREST\_MIPMAP\_NEAREST

• **NEAREST\_MIPMAP\_NEAREST**: *number*

___

### NEVER

• **NEVER**: *number*

___

### NICEST

• **NICEST**: *number*

___

### NONE

• **NONE**: *number*

___

### NOTEQUAL

• **NOTEQUAL**: *number*

___

### NO\_ERROR

• **NO\_ERROR**: *number*

___

### OBJECT\_TYPE

• **OBJECT\_TYPE**: *number*

___

### ONE

• **ONE**: *number*

___

### ONE\_MINUS\_CONSTANT\_ALPHA

• **ONE\_MINUS\_CONSTANT\_ALPHA**: *number*

___

### ONE\_MINUS\_CONSTANT\_COLOR

• **ONE\_MINUS\_CONSTANT\_COLOR**: *number*

___

### ONE\_MINUS\_DST\_ALPHA

• **ONE\_MINUS\_DST\_ALPHA**: *number*

___

### ONE\_MINUS\_DST\_COLOR

• **ONE\_MINUS\_DST\_COLOR**: *number*

___

### ONE\_MINUS\_SRC\_ALPHA

• **ONE\_MINUS\_SRC\_ALPHA**: *number*

___

### ONE\_MINUS\_SRC\_COLOR

• **ONE\_MINUS\_SRC\_COLOR**: *number*

___

### OUT\_OF\_MEMORY

• **OUT\_OF\_MEMORY**: *number*

___

### PACK\_ALIGNMENT

• **PACK\_ALIGNMENT**: *number*

___

### PACK\_ROW\_LENGTH

• **PACK\_ROW\_LENGTH**: *number*

___

### PACK\_SKIP\_PIXELS

• **PACK\_SKIP\_PIXELS**: *number*

___

### PACK\_SKIP\_ROWS

• **PACK\_SKIP\_ROWS**: *number*

___

### PIXEL\_PACK\_BUFFER

• **PIXEL\_PACK\_BUFFER**: *number*

___

### PIXEL\_PACK\_BUFFER\_BINDING

• **PIXEL\_PACK\_BUFFER\_BINDING**: *number*

___

### PIXEL\_UNPACK\_BUFFER

• **PIXEL\_UNPACK\_BUFFER**: *number*

___

### PIXEL\_UNPACK\_BUFFER\_BINDING

• **PIXEL\_UNPACK\_BUFFER\_BINDING**: *number*

___

### POINTS

• **POINTS**: *number*

___

### POLYGON\_OFFSET\_FACTOR

• **POLYGON\_OFFSET\_FACTOR**: *number*

___

### POLYGON\_OFFSET\_FILL

• **POLYGON\_OFFSET\_FILL**: *number*

___

### POLYGON\_OFFSET\_UNITS

• **POLYGON\_OFFSET\_UNITS**: *number*

___

### QUERY\_RESULT

• **QUERY\_RESULT**: *number*

___

### QUERY\_RESULT\_AVAILABLE

• **QUERY\_RESULT\_AVAILABLE**: *number*

___

### R11F\_G11F\_B10F

• **R11F\_G11F\_B10F**: *number*

___

### R16F

• **R16F**: *number*

___

### R16I

• **R16I**: *number*

___

### R16UI

• **R16UI**: *number*

___

### R32F

• **R32F**: *number*

___

### R32I

• **R32I**: *number*

___

### R32UI

• **R32UI**: *number*

___

### R8

• **R8**: *number*

___

### R8I

• **R8I**: *number*

___

### R8UI

• **R8UI**: *number*

___

### R8\_SNORM

• **R8\_SNORM**: *number*

___

### RASTERIZER\_DISCARD

• **RASTERIZER\_DISCARD**: *number*

___

### READ\_BUFFER

• **READ\_BUFFER**: *number*

___

### READ\_FRAMEBUFFER

• **READ\_FRAMEBUFFER**: *number*

___

### READ\_FRAMEBUFFER\_BINDING

• **READ\_FRAMEBUFFER\_BINDING**: *number*

___

### RED

• **RED**: *number*

___

### RED\_BITS

• **RED\_BITS**: *number*

___

### RED\_INTEGER

• **RED\_INTEGER**: *number*

___

### RENDERBUFFER

• **RENDERBUFFER**: *number*

___

### RENDERBUFFER\_ALPHA\_SIZE

• **RENDERBUFFER\_ALPHA\_SIZE**: *number*

___

### RENDERBUFFER\_BINDING

• **RENDERBUFFER\_BINDING**: *number*

___

### RENDERBUFFER\_BLUE\_SIZE

• **RENDERBUFFER\_BLUE\_SIZE**: *number*

___

### RENDERBUFFER\_DEPTH\_SIZE

• **RENDERBUFFER\_DEPTH\_SIZE**: *number*

___

### RENDERBUFFER\_GREEN\_SIZE

• **RENDERBUFFER\_GREEN\_SIZE**: *number*

___

### RENDERBUFFER\_HEIGHT

• **RENDERBUFFER\_HEIGHT**: *number*

___

### RENDERBUFFER\_INTERNAL\_FORMAT

• **RENDERBUFFER\_INTERNAL\_FORMAT**: *number*

___

### RENDERBUFFER\_RED\_SIZE

• **RENDERBUFFER\_RED\_SIZE**: *number*

___

### RENDERBUFFER\_SAMPLES

• **RENDERBUFFER\_SAMPLES**: *number*

___

### RENDERBUFFER\_STENCIL\_SIZE

• **RENDERBUFFER\_STENCIL\_SIZE**: *number*

___

### RENDERBUFFER\_WIDTH

• **RENDERBUFFER\_WIDTH**: *number*

___

### RENDERER

• **RENDERER**: *number*

___

### REPEAT

• **REPEAT**: *number*

___

### REPLACE

• **REPLACE**: *number*

___

### RG

• **RG**: *number*

___

### RG16F

• **RG16F**: *number*

___

### RG16I

• **RG16I**: *number*

___

### RG16UI

• **RG16UI**: *number*

___

### RG32F

• **RG32F**: *number*

___

### RG32I

• **RG32I**: *number*

___

### RG32UI

• **RG32UI**: *number*

___

### RG8

• **RG8**: *number*

___

### RG8I

• **RG8I**: *number*

___

### RG8UI

• **RG8UI**: *number*

___

### RG8\_SNORM

• **RG8\_SNORM**: *number*

___

### RGB

• **RGB**: *number*

___

### RGB10\_A2

• **RGB10\_A2**: *number*

___

### RGB10\_A2UI

• **RGB10\_A2UI**: *number*

___

### RGB16F

• **RGB16F**: *number*

___

### RGB16I

• **RGB16I**: *number*

___

### RGB16UI

• **RGB16UI**: *number*

___

### RGB32F

• **RGB32F**: *number*

___

### RGB32I

• **RGB32I**: *number*

___

### RGB32UI

• **RGB32UI**: *number*

___

### RGB565

• **RGB565**: *number*

___

### RGB5\_A1

• **RGB5\_A1**: *number*

___

### RGB8

• **RGB8**: *number*

___

### RGB8I

• **RGB8I**: *number*

___

### RGB8UI

• **RGB8UI**: *number*

___

### RGB8\_SNORM

• **RGB8\_SNORM**: *number*

___

### RGB9\_E5

• **RGB9\_E5**: *number*

___

### RGBA

• **RGBA**: *number*

___

### RGBA16F

• **RGBA16F**: *number*

___

### RGBA16I

• **RGBA16I**: *number*

___

### RGBA16UI

• **RGBA16UI**: *number*

___

### RGBA32F

• **RGBA32F**: *number*

___

### RGBA32I

• **RGBA32I**: *number*

___

### RGBA32UI

• **RGBA32UI**: *number*

___

### RGBA4

• **RGBA4**: *number*

___

### RGBA8

• **RGBA8**: *number*

___

### RGBA8I

• **RGBA8I**: *number*

___

### RGBA8UI

• **RGBA8UI**: *number*

___

### RGBA8\_SNORM

• **RGBA8\_SNORM**: *number*

___

### RGBA\_INTEGER

• **RGBA\_INTEGER**: *number*

___

### RGB\_INTEGER

• **RGB\_INTEGER**: *number*

___

### RG\_INTEGER

• **RG\_INTEGER**: *number*

___

### SAMPLER\_2D

• **SAMPLER\_2D**: *number*

___

### SAMPLER\_2D\_ARRAY

• **SAMPLER\_2D\_ARRAY**: *number*

___

### SAMPLER\_2D\_ARRAY\_SHADOW

• **SAMPLER\_2D\_ARRAY\_SHADOW**: *number*

___

### SAMPLER\_2D\_SHADOW

• **SAMPLER\_2D\_SHADOW**: *number*

___

### SAMPLER\_3D

• **SAMPLER\_3D**: *number*

___

### SAMPLER\_BINDING

• **SAMPLER\_BINDING**: *number*

___

### SAMPLER\_CUBE

• **SAMPLER\_CUBE**: *number*

___

### SAMPLER\_CUBE\_SHADOW

• **SAMPLER\_CUBE\_SHADOW**: *number*

___

### SAMPLES

• **SAMPLES**: *number*

___

### SAMPLE\_ALPHA\_TO\_COVERAGE

• **SAMPLE\_ALPHA\_TO\_COVERAGE**: *number*

___

### SAMPLE\_BUFFERS

• **SAMPLE\_BUFFERS**: *number*

___

### SAMPLE\_COVERAGE

• **SAMPLE\_COVERAGE**: *number*

___

### SAMPLE\_COVERAGE\_INVERT

• **SAMPLE\_COVERAGE\_INVERT**: *number*

___

### SAMPLE\_COVERAGE\_VALUE

• **SAMPLE\_COVERAGE\_VALUE**: *number*

___

### SCISSOR\_BOX

• **SCISSOR\_BOX**: *number*

___

### SCISSOR\_TEST

• **SCISSOR\_TEST**: *number*

___

### SEPARATE\_ATTRIBS

• **SEPARATE\_ATTRIBS**: *number*

___

### SHADER\_TYPE

• **SHADER\_TYPE**: *number*

___

### SHADING\_LANGUAGE\_VERSION

• **SHADING\_LANGUAGE\_VERSION**: *number*

___

### SHORT

• **SHORT**: *number*

___

### SIGNALED

• **SIGNALED**: *number*

___

### SIGNED\_NORMALIZED

• **SIGNED\_NORMALIZED**: *number*

___

### SRC\_ALPHA

• **SRC\_ALPHA**: *number*

___

### SRC\_ALPHA\_SATURATE

• **SRC\_ALPHA\_SATURATE**: *number*

___

### SRC\_COLOR

• **SRC\_COLOR**: *number*

___

### SRGB

• **SRGB**: *number*

___

### SRGB8

• **SRGB8**: *number*

___

### SRGB8\_ALPHA8

• **SRGB8\_ALPHA8**: *number*

___

### STATIC\_COPY

• **STATIC\_COPY**: *number*

___

### STATIC\_DRAW

• **STATIC\_DRAW**: *number*

___

### STATIC\_READ

• **STATIC\_READ**: *number*

___

### STENCIL

• **STENCIL**: *number*

___

### STENCIL\_ATTACHMENT

• **STENCIL\_ATTACHMENT**: *number*

___

### STENCIL\_BACK\_FAIL

• **STENCIL\_BACK\_FAIL**: *number*

___

### STENCIL\_BACK\_FUNC

• **STENCIL\_BACK\_FUNC**: *number*

___

### STENCIL\_BACK\_PASS\_DEPTH\_FAIL

• **STENCIL\_BACK\_PASS\_DEPTH\_FAIL**: *number*

___

### STENCIL\_BACK\_PASS\_DEPTH\_PASS

• **STENCIL\_BACK\_PASS\_DEPTH\_PASS**: *number*

___

### STENCIL\_BACK\_REF

• **STENCIL\_BACK\_REF**: *number*

___

### STENCIL\_BACK\_VALUE\_MASK

• **STENCIL\_BACK\_VALUE\_MASK**: *number*

___

### STENCIL\_BACK\_WRITEMASK

• **STENCIL\_BACK\_WRITEMASK**: *number*

___

### STENCIL\_BITS

• **STENCIL\_BITS**: *number*

___

### STENCIL\_BUFFER\_BIT

• **STENCIL\_BUFFER\_BIT**: *number*

___

### STENCIL\_CLEAR\_VALUE

• **STENCIL\_CLEAR\_VALUE**: *number*

___

### STENCIL\_FAIL

• **STENCIL\_FAIL**: *number*

___

### STENCIL\_FUNC

• **STENCIL\_FUNC**: *number*

___

### STENCIL\_INDEX8

• **STENCIL\_INDEX8**: *number*

___

### STENCIL\_PASS\_DEPTH\_FAIL

• **STENCIL\_PASS\_DEPTH\_FAIL**: *number*

___

### STENCIL\_PASS\_DEPTH\_PASS

• **STENCIL\_PASS\_DEPTH\_PASS**: *number*

___

### STENCIL\_REF

• **STENCIL\_REF**: *number*

___

### STENCIL\_TEST

• **STENCIL\_TEST**: *number*

___

### STENCIL\_VALUE\_MASK

• **STENCIL\_VALUE\_MASK**: *number*

___

### STENCIL\_WRITEMASK

• **STENCIL\_WRITEMASK**: *number*

___

### STREAM\_COPY

• **STREAM\_COPY**: *number*

___

### STREAM\_DRAW

• **STREAM\_DRAW**: *number*

___

### STREAM\_READ

• **STREAM\_READ**: *number*

___

### SUBPIXEL\_BITS

• **SUBPIXEL\_BITS**: *number*

___

### SYNC\_CONDITION

• **SYNC\_CONDITION**: *number*

___

### SYNC\_FENCE

• **SYNC\_FENCE**: *number*

___

### SYNC\_FLAGS

• **SYNC\_FLAGS**: *number*

___

### SYNC\_FLUSH\_COMMANDS\_BIT

• **SYNC\_FLUSH\_COMMANDS\_BIT**: *number*

___

### SYNC\_GPU\_COMMANDS\_COMPLETE

• **SYNC\_GPU\_COMMANDS\_COMPLETE**: *number*

___

### SYNC\_STATUS

• **SYNC\_STATUS**: *number*

___

### TEXTURE

• **TEXTURE**: *number*

___

### TEXTURE0

• **TEXTURE0**: *number*

___

### TEXTURE1

• **TEXTURE1**: *number*

___

### TEXTURE10

• **TEXTURE10**: *number*

___

### TEXTURE11

• **TEXTURE11**: *number*

___

### TEXTURE12

• **TEXTURE12**: *number*

___

### TEXTURE13

• **TEXTURE13**: *number*

___

### TEXTURE14

• **TEXTURE14**: *number*

___

### TEXTURE15

• **TEXTURE15**: *number*

___

### TEXTURE16

• **TEXTURE16**: *number*

___

### TEXTURE17

• **TEXTURE17**: *number*

___

### TEXTURE18

• **TEXTURE18**: *number*

___

### TEXTURE19

• **TEXTURE19**: *number*

___

### TEXTURE2

• **TEXTURE2**: *number*

___

### TEXTURE20

• **TEXTURE20**: *number*

___

### TEXTURE21

• **TEXTURE21**: *number*

___

### TEXTURE22

• **TEXTURE22**: *number*

___

### TEXTURE23

• **TEXTURE23**: *number*

___

### TEXTURE24

• **TEXTURE24**: *number*

___

### TEXTURE25

• **TEXTURE25**: *number*

___

### TEXTURE26

• **TEXTURE26**: *number*

___

### TEXTURE27

• **TEXTURE27**: *number*

___

### TEXTURE28

• **TEXTURE28**: *number*

___

### TEXTURE29

• **TEXTURE29**: *number*

___

### TEXTURE3

• **TEXTURE3**: *number*

___

### TEXTURE30

• **TEXTURE30**: *number*

___

### TEXTURE31

• **TEXTURE31**: *number*

___

### TEXTURE4

• **TEXTURE4**: *number*

___

### TEXTURE5

• **TEXTURE5**: *number*

___

### TEXTURE6

• **TEXTURE6**: *number*

___

### TEXTURE7

• **TEXTURE7**: *number*

___

### TEXTURE8

• **TEXTURE8**: *number*

___

### TEXTURE9

• **TEXTURE9**: *number*

___

### TEXTURE\_2D

• **TEXTURE\_2D**: *number*

___

### TEXTURE\_2D\_ARRAY

• **TEXTURE\_2D\_ARRAY**: *number*

___

### TEXTURE\_3D

• **TEXTURE\_3D**: *number*

___

### TEXTURE\_BASE\_LEVEL

• **TEXTURE\_BASE\_LEVEL**: *number*

___

### TEXTURE\_BINDING\_2D

• **TEXTURE\_BINDING\_2D**: *number*

___

### TEXTURE\_BINDING\_2D\_ARRAY

• **TEXTURE\_BINDING\_2D\_ARRAY**: *number*

___

### TEXTURE\_BINDING\_3D

• **TEXTURE\_BINDING\_3D**: *number*

___

### TEXTURE\_BINDING\_CUBE\_MAP

• **TEXTURE\_BINDING\_CUBE\_MAP**: *number*

___

### TEXTURE\_COMPARE\_FUNC

• **TEXTURE\_COMPARE\_FUNC**: *number*

___

### TEXTURE\_COMPARE\_MODE

• **TEXTURE\_COMPARE\_MODE**: *number*

___

### TEXTURE\_CUBE\_MAP

• **TEXTURE\_CUBE\_MAP**: *number*

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_X

• **TEXTURE\_CUBE\_MAP\_NEGATIVE\_X**: *number*

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y

• **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Y**: *number*

___

### TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z

• **TEXTURE\_CUBE\_MAP\_NEGATIVE\_Z**: *number*

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_X

• **TEXTURE\_CUBE\_MAP\_POSITIVE\_X**: *number*

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Y

• **TEXTURE\_CUBE\_MAP\_POSITIVE\_Y**: *number*

___

### TEXTURE\_CUBE\_MAP\_POSITIVE\_Z

• **TEXTURE\_CUBE\_MAP\_POSITIVE\_Z**: *number*

___

### TEXTURE\_IMMUTABLE\_FORMAT

• **TEXTURE\_IMMUTABLE\_FORMAT**: *number*

___

### TEXTURE\_IMMUTABLE\_LEVELS

• **TEXTURE\_IMMUTABLE\_LEVELS**: *number*

___

### TEXTURE\_MAG\_FILTER

• **TEXTURE\_MAG\_FILTER**: *number*

___

### TEXTURE\_MAX\_LEVEL

• **TEXTURE\_MAX\_LEVEL**: *number*

___

### TEXTURE\_MAX\_LOD

• **TEXTURE\_MAX\_LOD**: *number*

___

### TEXTURE\_MIN\_FILTER

• **TEXTURE\_MIN\_FILTER**: *number*

___

### TEXTURE\_MIN\_LOD

• **TEXTURE\_MIN\_LOD**: *number*

___

### TEXTURE\_WRAP\_R

• **TEXTURE\_WRAP\_R**: *number*

___

### TEXTURE\_WRAP\_S

• **TEXTURE\_WRAP\_S**: *number*

___

### TEXTURE\_WRAP\_T

• **TEXTURE\_WRAP\_T**: *number*

___

### TIMEOUT\_EXPIRED

• **TIMEOUT\_EXPIRED**: *number*

___

### TIMEOUT\_IGNORED

• **TIMEOUT\_IGNORED**: *number*

___

### TRANSFORM\_FEEDBACK

• **TRANSFORM\_FEEDBACK**: *number*

___

### TRANSFORM\_FEEDBACK\_ACTIVE

• **TRANSFORM\_FEEDBACK\_ACTIVE**: *number*

___

### TRANSFORM\_FEEDBACK\_BINDING

• **TRANSFORM\_FEEDBACK\_BINDING**: *number*

___

### TRANSFORM\_FEEDBACK\_BUFFER

• **TRANSFORM\_FEEDBACK\_BUFFER**: *number*

___

### TRANSFORM\_FEEDBACK\_BUFFER\_BINDING

• **TRANSFORM\_FEEDBACK\_BUFFER\_BINDING**: *number*

___

### TRANSFORM\_FEEDBACK\_BUFFER\_MODE

• **TRANSFORM\_FEEDBACK\_BUFFER\_MODE**: *number*

___

### TRANSFORM\_FEEDBACK\_BUFFER\_SIZE

• **TRANSFORM\_FEEDBACK\_BUFFER\_SIZE**: *number*

___

### TRANSFORM\_FEEDBACK\_BUFFER\_START

• **TRANSFORM\_FEEDBACK\_BUFFER\_START**: *number*

___

### TRANSFORM\_FEEDBACK\_PAUSED

• **TRANSFORM\_FEEDBACK\_PAUSED**: *number*

___

### TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN

• **TRANSFORM\_FEEDBACK\_PRIMITIVES\_WRITTEN**: *number*

___

### TRANSFORM\_FEEDBACK\_VARYINGS

• **TRANSFORM\_FEEDBACK\_VARYINGS**: *number*

___

### TRIANGLES

• **TRIANGLES**: *number*

___

### TRIANGLE\_FAN

• **TRIANGLE\_FAN**: *number*

___

### TRIANGLE\_STRIP

• **TRIANGLE\_STRIP**: *number*

___

### UNIFORM\_ARRAY\_STRIDE

• **UNIFORM\_ARRAY\_STRIDE**: *number*

___

### UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS

• **UNIFORM\_BLOCK\_ACTIVE\_UNIFORMS**: *number*

___

### UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES

• **UNIFORM\_BLOCK\_ACTIVE\_UNIFORM\_INDICES**: *number*

___

### UNIFORM\_BLOCK\_BINDING

• **UNIFORM\_BLOCK\_BINDING**: *number*

___

### UNIFORM\_BLOCK\_DATA\_SIZE

• **UNIFORM\_BLOCK\_DATA\_SIZE**: *number*

___

### UNIFORM\_BLOCK\_INDEX

• **UNIFORM\_BLOCK\_INDEX**: *number*

___

### UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER

• **UNIFORM\_BLOCK\_REFERENCED\_BY\_FRAGMENT\_SHADER**: *number*

___

### UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER

• **UNIFORM\_BLOCK\_REFERENCED\_BY\_VERTEX\_SHADER**: *number*

___

### UNIFORM\_BUFFER

• **UNIFORM\_BUFFER**: *number*

___

### UNIFORM\_BUFFER\_BINDING

• **UNIFORM\_BUFFER\_BINDING**: *number*

___

### UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT

• **UNIFORM\_BUFFER\_OFFSET\_ALIGNMENT**: *number*

___

### UNIFORM\_BUFFER\_SIZE

• **UNIFORM\_BUFFER\_SIZE**: *number*

___

### UNIFORM\_BUFFER\_START

• **UNIFORM\_BUFFER\_START**: *number*

___

### UNIFORM\_IS\_ROW\_MAJOR

• **UNIFORM\_IS\_ROW\_MAJOR**: *number*

___

### UNIFORM\_MATRIX\_STRIDE

• **UNIFORM\_MATRIX\_STRIDE**: *number*

___

### UNIFORM\_OFFSET

• **UNIFORM\_OFFSET**: *number*

___

### UNIFORM\_SIZE

• **UNIFORM\_SIZE**: *number*

___

### UNIFORM\_TYPE

• **UNIFORM\_TYPE**: *number*

___

### UNPACK\_ALIGNMENT

• **UNPACK\_ALIGNMENT**: *number*

___

### UNPACK\_COLORSPACE\_CONVERSION\_WEBGL

• **UNPACK\_COLORSPACE\_CONVERSION\_WEBGL**: *number*

___

### UNPACK\_FLIP\_Y\_WEBGL

• **UNPACK\_FLIP\_Y\_WEBGL**: *number*

___

### UNPACK\_IMAGE\_HEIGHT

• **UNPACK\_IMAGE\_HEIGHT**: *number*

___

### UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL

• **UNPACK\_PREMULTIPLY\_ALPHA\_WEBGL**: *number*

___

### UNPACK\_ROW\_LENGTH

• **UNPACK\_ROW\_LENGTH**: *number*

___

### UNPACK\_SKIP\_IMAGES

• **UNPACK\_SKIP\_IMAGES**: *number*

___

### UNPACK\_SKIP\_PIXELS

• **UNPACK\_SKIP\_PIXELS**: *number*

___

### UNPACK\_SKIP\_ROWS

• **UNPACK\_SKIP\_ROWS**: *number*

___

### UNSIGNALED

• **UNSIGNALED**: *number*

___

### UNSIGNED\_BYTE

• **UNSIGNED\_BYTE**: *number*

___

### UNSIGNED\_INT

• **UNSIGNED\_INT**: *number*

___

### UNSIGNED\_INT\_10F\_11F\_11F\_REV

• **UNSIGNED\_INT\_10F\_11F\_11F\_REV**: *number*

___

### UNSIGNED\_INT\_24\_8

• **UNSIGNED\_INT\_24\_8**: *number*

___

### UNSIGNED\_INT\_2\_10\_10\_10\_REV

• **UNSIGNED\_INT\_2\_10\_10\_10\_REV**: *number*

___

### UNSIGNED\_INT\_5\_9\_9\_9\_REV

• **UNSIGNED\_INT\_5\_9\_9\_9\_REV**: *number*

___

### UNSIGNED\_INT\_SAMPLER\_2D

• **UNSIGNED\_INT\_SAMPLER\_2D**: *number*

___

### UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY

• **UNSIGNED\_INT\_SAMPLER\_2D\_ARRAY**: *number*

___

### UNSIGNED\_INT\_SAMPLER\_3D

• **UNSIGNED\_INT\_SAMPLER\_3D**: *number*

___

### UNSIGNED\_INT\_SAMPLER\_CUBE

• **UNSIGNED\_INT\_SAMPLER\_CUBE**: *number*

___

### UNSIGNED\_INT\_VEC2

• **UNSIGNED\_INT\_VEC2**: *number*

___

### UNSIGNED\_INT\_VEC3

• **UNSIGNED\_INT\_VEC3**: *number*

___

### UNSIGNED\_INT\_VEC4

• **UNSIGNED\_INT\_VEC4**: *number*

___

### UNSIGNED\_NORMALIZED

• **UNSIGNED\_NORMALIZED**: *number*

___

### UNSIGNED\_SHORT

• **UNSIGNED\_SHORT**: *number*

___

### UNSIGNED\_SHORT\_4\_4\_4\_4

• **UNSIGNED\_SHORT\_4\_4\_4\_4**: *number*

___

### UNSIGNED\_SHORT\_5\_5\_5\_1

• **UNSIGNED\_SHORT\_5\_5\_5\_1**: *number*

___

### UNSIGNED\_SHORT\_5\_6\_5

• **UNSIGNED\_SHORT\_5\_6\_5**: *number*

___

### VALIDATE\_STATUS

• **VALIDATE\_STATUS**: *number*

___

### VENDOR

• **VENDOR**: *number*

___

### VERSION

• **VERSION**: *number*

___

### VERTEX\_ARRAY\_BINDING

• **VERTEX\_ARRAY\_BINDING**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING

• **VERTEX\_ATTRIB\_ARRAY\_BUFFER\_BINDING**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR

• **VERTEX\_ATTRIB\_ARRAY\_DIVISOR**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_ENABLED

• **VERTEX\_ATTRIB\_ARRAY\_ENABLED**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_INTEGER

• **VERTEX\_ATTRIB\_ARRAY\_INTEGER**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_NORMALIZED

• **VERTEX\_ATTRIB\_ARRAY\_NORMALIZED**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_POINTER

• **VERTEX\_ATTRIB\_ARRAY\_POINTER**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_SIZE

• **VERTEX\_ATTRIB\_ARRAY\_SIZE**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_STRIDE

• **VERTEX\_ATTRIB\_ARRAY\_STRIDE**: *number*

___

### VERTEX\_ATTRIB\_ARRAY\_TYPE

• **VERTEX\_ATTRIB\_ARRAY\_TYPE**: *number*

___

### VERTEX\_SHADER

• **VERTEX\_SHADER**: *number*

___

### VIEWPORT

• **VIEWPORT**: *number*

___

### WAIT\_FAILED

• **WAIT\_FAILED**: *number*

___

### ZERO

• **ZERO**: *number*

___

### canvas

• **canvas**: HTMLCanvasElement \| OffscreenCanvas

___

### drawingBufferHeight

• **drawingBufferHeight**: *number*

___

### drawingBufferWidth

• **drawingBufferWidth**: *number*

## Methods

### activeTexture

▸ **activeTexture**(`texture`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`texture` | *number* |

**Returns:** *void*

___

### attachShader

▸ **attachShader**(`program`: WebGLProgram, `shader`: WebGLShader): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`shader` | WebGLShader |

**Returns:** *void*

___

### beginQuery

▸ **beginQuery**(`target`: *number*, `query`: WebGLQuery): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`query` | WebGLQuery |

**Returns:** *void*

___

### beginTransformFeedback

▸ **beginTransformFeedback**(`primitiveMode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`primitiveMode` | *number* |

**Returns:** *void*

___

### bindAttribLocation

▸ **bindAttribLocation**(`program`: WebGLProgram, `index`: *number*, `name`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`index` | *number* |
`name` | *string* |

**Returns:** *void*

___

### bindBuffer

▸ **bindBuffer**(`target`: *number*, `buffer`: *null* \| WebGLBuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`buffer` | *null* \| WebGLBuffer |

**Returns:** *void*

___

### bindBufferBase

▸ **bindBufferBase**(`target`: *number*, `index`: *number*, `buffer`: *null* \| WebGLBuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`index` | *number* |
`buffer` | *null* \| WebGLBuffer |

**Returns:** *void*

___

### bindBufferRange

▸ **bindBufferRange**(`target`: *number*, `index`: *number*, `buffer`: *null* \| WebGLBuffer, `offset`: *number*, `size`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`index` | *number* |
`buffer` | *null* \| WebGLBuffer |
`offset` | *number* |
`size` | *number* |

**Returns:** *void*

___

### bindFramebuffer

▸ **bindFramebuffer**(`target`: *number*, `framebuffer`: *null* \| WebGLFramebuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`framebuffer` | *null* \| WebGLFramebuffer |

**Returns:** *void*

___

### bindRenderbuffer

▸ **bindRenderbuffer**(`target`: *number*, `renderbuffer`: *null* \| WebGLRenderbuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`renderbuffer` | *null* \| WebGLRenderbuffer |

**Returns:** *void*

___

### bindSampler

▸ **bindSampler**(`unit`: *number*, `sampler`: *null* \| WebGLSampler): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`unit` | *number* |
`sampler` | *null* \| WebGLSampler |

**Returns:** *void*

___

### bindTexture

▸ **bindTexture**(`target`: *number*, `texture`: *null* \| WebGLTexture): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`texture` | *null* \| WebGLTexture |

**Returns:** *void*

___

### bindTransformFeedback

▸ **bindTransformFeedback**(`target`: *number*, `tf`: *null* \| WebGLTransformFeedback): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`tf` | *null* \| WebGLTransformFeedback |

**Returns:** *void*

___

### bindVertexArray

▸ **bindVertexArray**(`array`: *null* \| WebGLVertexArrayObject): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`array` | *null* \| WebGLVertexArrayObject |

**Returns:** *void*

___

### blendColor

▸ **blendColor**(`red`: *number*, `green`: *number*, `blue`: *number*, `alpha`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`red` | *number* |
`green` | *number* |
`blue` | *number* |
`alpha` | *number* |

**Returns:** *void*

___

### blendEquation

▸ **blendEquation**(`mode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |

**Returns:** *void*

___

### blendEquationSeparate

▸ **blendEquationSeparate**(`modeRGB`: *number*, `modeAlpha`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`modeRGB` | *number* |
`modeAlpha` | *number* |

**Returns:** *void*

___

### blendFunc

▸ **blendFunc**(`sfactor`: *number*, `dfactor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sfactor` | *number* |
`dfactor` | *number* |

**Returns:** *void*

___

### blendFuncSeparate

▸ **blendFuncSeparate**(`srcRGB`: *number*, `dstRGB`: *number*, `srcAlpha`: *number*, `dstAlpha`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`srcRGB` | *number* |
`dstRGB` | *number* |
`srcAlpha` | *number* |
`dstAlpha` | *number* |

**Returns:** *void*

___

### blitFramebuffer

▸ **blitFramebuffer**(`srcX0`: *number*, `srcY0`: *number*, `srcX1`: *number*, `srcY1`: *number*, `dstX0`: *number*, `dstY0`: *number*, `dstX1`: *number*, `dstY1`: *number*, `mask`: *number*, `filter`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`srcX0` | *number* |
`srcY0` | *number* |
`srcX1` | *number* |
`srcY1` | *number* |
`dstX0` | *number* |
`dstY0` | *number* |
`dstX1` | *number* |
`dstY1` | *number* |
`mask` | *number* |
`filter` | *number* |

**Returns:** *void*

___

### bufferData

▸ **bufferData**(`target`: *number*, `size`: *number*, `usage`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`size` | *number* |
`usage` | *number* |

**Returns:** *void*

▸ **bufferData**(`target`: *number*, `srcData`: *null* \| ArrayBuffer \| ArrayBufferView, `usage`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`srcData` | *null* \| ArrayBuffer \| ArrayBufferView |
`usage` | *number* |

**Returns:** *void*

▸ **bufferData**(`target`: *number*, `srcData`: ArrayBufferView, `usage`: *number*, `srcOffset`: *number*, `length?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`srcData` | ArrayBufferView |
`usage` | *number* |
`srcOffset` | *number* |
`length?` | *number* |

**Returns:** *void*

___

### bufferSubData

▸ **bufferSubData**(`target`: *number*, `dstByteOffset`: *number*, `srcData`: BufferSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`dstByteOffset` | *number* |
`srcData` | BufferSource |

**Returns:** *void*

▸ **bufferSubData**(`target`: *number*, `dstByteOffset`: *number*, `srcData`: ArrayBufferView, `srcOffset`: *number*, `length?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`dstByteOffset` | *number* |
`srcData` | ArrayBufferView |
`srcOffset` | *number* |
`length?` | *number* |

**Returns:** *void*

___

### checkFramebufferStatus

▸ **checkFramebufferStatus**(`target`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |

**Returns:** *number*

___

### clear

▸ **clear**(`mask`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mask` | *number* |

**Returns:** *void*

___

### clearBufferfi

▸ **clearBufferfi**(`buffer`: *number*, `drawbuffer`: *number*, `depth`: *number*, `stencil`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *number* |
`drawbuffer` | *number* |
`depth` | *number* |
`stencil` | *number* |

**Returns:** *void*

___

### clearBufferfv

▸ **clearBufferfv**(`buffer`: *number*, `drawbuffer`: *number*, `values`: Float32List, `srcOffset?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *number* |
`drawbuffer` | *number* |
`values` | Float32List |
`srcOffset?` | *number* |

**Returns:** *void*

___

### clearBufferiv

▸ **clearBufferiv**(`buffer`: *number*, `drawbuffer`: *number*, `values`: Int32List, `srcOffset?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *number* |
`drawbuffer` | *number* |
`values` | Int32List |
`srcOffset?` | *number* |

**Returns:** *void*

___

### clearBufferuiv

▸ **clearBufferuiv**(`buffer`: *number*, `drawbuffer`: *number*, `values`: Uint32List, `srcOffset?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *number* |
`drawbuffer` | *number* |
`values` | Uint32List |
`srcOffset?` | *number* |

**Returns:** *void*

___

### clearColor

▸ **clearColor**(`red`: *number*, `green`: *number*, `blue`: *number*, `alpha`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`red` | *number* |
`green` | *number* |
`blue` | *number* |
`alpha` | *number* |

**Returns:** *void*

___

### clearDepth

▸ **clearDepth**(`depth`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`depth` | *number* |

**Returns:** *void*

___

### clearStencil

▸ **clearStencil**(`s`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`s` | *number* |

**Returns:** *void*

___

### clientWaitSync

▸ **clientWaitSync**(`sync`: WebGLSync, `flags`: *number*, `timeout`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`sync` | WebGLSync |
`flags` | *number* |
`timeout` | *number* |

**Returns:** *number*

___

### colorMask

▸ **colorMask**(`red`: *boolean*, `green`: *boolean*, `blue`: *boolean*, `alpha`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`red` | *boolean* |
`green` | *boolean* |
`blue` | *boolean* |
`alpha` | *boolean* |

**Returns:** *void*

___

### compileShader

▸ **compileShader**(`shader`: WebGLShader): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | WebGLShader |

**Returns:** *void*

___

### compressedTexImage2D

▸ **compressedTexImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `imageSize`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`imageSize` | *number* |
`offset` | *number* |

**Returns:** *void*

▸ **compressedTexImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `srcData`: ArrayBufferView, `srcOffset?`: *number*, `srcLengthOverride?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`srcData` | ArrayBufferView |
`srcOffset?` | *number* |
`srcLengthOverride?` | *number* |

**Returns:** *void*

___

### compressedTexImage3D

▸ **compressedTexImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `imageSize`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`imageSize` | *number* |
`offset` | *number* |

**Returns:** *void*

▸ **compressedTexImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `srcData`: ArrayBufferView, `srcOffset?`: *number*, `srcLengthOverride?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`srcData` | ArrayBufferView |
`srcOffset?` | *number* |
`srcLengthOverride?` | *number* |

**Returns:** *void*

___

### compressedTexSubImage2D

▸ **compressedTexSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `imageSize`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`imageSize` | *number* |
`offset` | *number* |

**Returns:** *void*

▸ **compressedTexSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `srcData`: ArrayBufferView, `srcOffset?`: *number*, `srcLengthOverride?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`srcData` | ArrayBufferView |
`srcOffset?` | *number* |
`srcLengthOverride?` | *number* |

**Returns:** *void*

___

### compressedTexSubImage3D

▸ **compressedTexSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `format`: *number*, `imageSize`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`format` | *number* |
`imageSize` | *number* |
`offset` | *number* |

**Returns:** *void*

▸ **compressedTexSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `format`: *number*, `srcData`: ArrayBufferView, `srcOffset?`: *number*, `srcLengthOverride?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`format` | *number* |
`srcData` | ArrayBufferView |
`srcOffset?` | *number* |
`srcLengthOverride?` | *number* |

**Returns:** *void*

___

### copyBufferSubData

▸ **copyBufferSubData**(`readTarget`: *number*, `writeTarget`: *number*, `readOffset`: *number*, `writeOffset`: *number*, `size`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`readTarget` | *number* |
`writeTarget` | *number* |
`readOffset` | *number* |
`writeOffset` | *number* |
`size` | *number* |

**Returns:** *void*

___

### copyTexImage2D

▸ **copyTexImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*, `border`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |

**Returns:** *void*

___

### copyTexSubImage2D

▸ **copyTexSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### copyTexSubImage3D

▸ **copyTexSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### createBuffer

▸ **createBuffer**(): *null* \| WebGLBuffer

**Returns:** *null* \| WebGLBuffer

___

### createFramebuffer

▸ **createFramebuffer**(): *null* \| WebGLFramebuffer

**Returns:** *null* \| WebGLFramebuffer

___

### createProgram

▸ **createProgram**(): *null* \| WebGLProgram

**Returns:** *null* \| WebGLProgram

___

### createQuery

▸ **createQuery**(): *null* \| WebGLQuery

**Returns:** *null* \| WebGLQuery

___

### createRenderbuffer

▸ **createRenderbuffer**(): *null* \| WebGLRenderbuffer

**Returns:** *null* \| WebGLRenderbuffer

___

### createSampler

▸ **createSampler**(): *null* \| WebGLSampler

**Returns:** *null* \| WebGLSampler

___

### createShader

▸ **createShader**(`type`: *number*): *null* \| WebGLShader

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *number* |

**Returns:** *null* \| WebGLShader

___

### createTexture

▸ **createTexture**(): *null* \| WebGLTexture

**Returns:** *null* \| WebGLTexture

___

### createTransformFeedback

▸ **createTransformFeedback**(): *null* \| WebGLTransformFeedback

**Returns:** *null* \| WebGLTransformFeedback

___

### createVertexArray

▸ **createVertexArray**(): *null* \| WebGLVertexArrayObject

**Returns:** *null* \| WebGLVertexArrayObject

___

### cullFace

▸ **cullFace**(`mode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |

**Returns:** *void*

___

### deleteBuffer

▸ **deleteBuffer**(`buffer`: *null* \| WebGLBuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *null* \| WebGLBuffer |

**Returns:** *void*

___

### deleteFramebuffer

▸ **deleteFramebuffer**(`framebuffer`: *null* \| WebGLFramebuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`framebuffer` | *null* \| WebGLFramebuffer |

**Returns:** *void*

___

### deleteProgram

▸ **deleteProgram**(`program`: *null* \| WebGLProgram): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | *null* \| WebGLProgram |

**Returns:** *void*

___

### deleteQuery

▸ **deleteQuery**(`query`: *null* \| WebGLQuery): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`query` | *null* \| WebGLQuery |

**Returns:** *void*

___

### deleteRenderbuffer

▸ **deleteRenderbuffer**(`renderbuffer`: *null* \| WebGLRenderbuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`renderbuffer` | *null* \| WebGLRenderbuffer |

**Returns:** *void*

___

### deleteSampler

▸ **deleteSampler**(`sampler`: *null* \| WebGLSampler): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sampler` | *null* \| WebGLSampler |

**Returns:** *void*

___

### deleteShader

▸ **deleteShader**(`shader`: *null* \| WebGLShader): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | *null* \| WebGLShader |

**Returns:** *void*

___

### deleteSync

▸ **deleteSync**(`sync`: *null* \| WebGLSync): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sync` | *null* \| WebGLSync |

**Returns:** *void*

___

### deleteTexture

▸ **deleteTexture**(`texture`: *null* \| WebGLTexture): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`texture` | *null* \| WebGLTexture |

**Returns:** *void*

___

### deleteTransformFeedback

▸ **deleteTransformFeedback**(`tf`: *null* \| WebGLTransformFeedback): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`tf` | *null* \| WebGLTransformFeedback |

**Returns:** *void*

___

### deleteVertexArray

▸ **deleteVertexArray**(`vertexArray`: *null* \| WebGLVertexArrayObject): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`vertexArray` | *null* \| WebGLVertexArrayObject |

**Returns:** *void*

___

### depthFunc

▸ **depthFunc**(`func`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`func` | *number* |

**Returns:** *void*

___

### depthMask

▸ **depthMask**(`flag`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`flag` | *boolean* |

**Returns:** *void*

___

### depthRange

▸ **depthRange**(`zNear`: *number*, `zFar`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`zNear` | *number* |
`zFar` | *number* |

**Returns:** *void*

___

### detachShader

▸ **detachShader**(`program`: WebGLProgram, `shader`: WebGLShader): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`shader` | WebGLShader |

**Returns:** *void*

___

### disable

▸ **disable**(`cap`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cap` | *number* |

**Returns:** *void*

___

### disableVertexAttribArray

▸ **disableVertexAttribArray**(`index`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *void*

___

### drawArrays

▸ **drawArrays**(`mode`: *number*, `first`: *number*, `count`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |
`first` | *number* |
`count` | *number* |

**Returns:** *void*

___

### drawArraysInstanced

▸ **drawArraysInstanced**(`mode`: *number*, `first`: *number*, `count`: *number*, `instanceCount`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |
`first` | *number* |
`count` | *number* |
`instanceCount` | *number* |

**Returns:** *void*

___

### drawBuffers

▸ **drawBuffers**(`buffers`: *number*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`buffers` | *number*[] |

**Returns:** *void*

___

### drawElements

▸ **drawElements**(`mode`: *number*, `count`: *number*, `type`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |
`count` | *number* |
`type` | *number* |
`offset` | *number* |

**Returns:** *void*

___

### drawElementsInstanced

▸ **drawElementsInstanced**(`mode`: *number*, `count`: *number*, `type`: *number*, `offset`: *number*, `instanceCount`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |
`count` | *number* |
`type` | *number* |
`offset` | *number* |
`instanceCount` | *number* |

**Returns:** *void*

___

### drawRangeElements

▸ **drawRangeElements**(`mode`: *number*, `start`: *number*, `end`: *number*, `count`: *number*, `type`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |
`start` | *number* |
`end` | *number* |
`count` | *number* |
`type` | *number* |
`offset` | *number* |

**Returns:** *void*

___

### enable

▸ **enable**(`cap`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`cap` | *number* |

**Returns:** *void*

___

### enableVertexAttribArray

▸ **enableVertexAttribArray**(`index`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |

**Returns:** *void*

___

### endQuery

▸ **endQuery**(`target`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |

**Returns:** *void*

___

### endTransformFeedback

▸ **endTransformFeedback**(): *void*

**Returns:** *void*

___

### fenceSync

▸ **fenceSync**(`condition`: *number*, `flags`: *number*): *null* \| WebGLSync

#### Parameters:

Name | Type |
:------ | :------ |
`condition` | *number* |
`flags` | *number* |

**Returns:** *null* \| WebGLSync

___

### finish

▸ **finish**(): *void*

**Returns:** *void*

___

### flush

▸ **flush**(): *void*

**Returns:** *void*

___

### framebufferRenderbuffer

▸ **framebufferRenderbuffer**(`target`: *number*, `attachment`: *number*, `renderbuffertarget`: *number*, `renderbuffer`: *null* \| WebGLRenderbuffer): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachment` | *number* |
`renderbuffertarget` | *number* |
`renderbuffer` | *null* \| WebGLRenderbuffer |

**Returns:** *void*

___

### framebufferTexture2D

▸ **framebufferTexture2D**(`target`: *number*, `attachment`: *number*, `textarget`: *number*, `texture`: *null* \| WebGLTexture, `level`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachment` | *number* |
`textarget` | *number* |
`texture` | *null* \| WebGLTexture |
`level` | *number* |

**Returns:** *void*

___

### framebufferTextureLayer

▸ **framebufferTextureLayer**(`target`: *number*, `attachment`: *number*, `texture`: *null* \| WebGLTexture, `level`: *number*, `layer`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachment` | *number* |
`texture` | *null* \| WebGLTexture |
`level` | *number* |
`layer` | *number* |

**Returns:** *void*

___

### frontFace

▸ **frontFace**(`mode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mode` | *number* |

**Returns:** *void*

___

### generateMipmap

▸ **generateMipmap**(`target`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |

**Returns:** *void*

___

### getActiveAttrib

▸ **getActiveAttrib**(`program`: WebGLProgram, `index`: *number*): *null* \| WebGLActiveInfo

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`index` | *number* |

**Returns:** *null* \| WebGLActiveInfo

___

### getActiveUniform

▸ **getActiveUniform**(`program`: WebGLProgram, `index`: *number*): *null* \| WebGLActiveInfo

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`index` | *number* |

**Returns:** *null* \| WebGLActiveInfo

___

### getActiveUniformBlockName

▸ **getActiveUniformBlockName**(`program`: WebGLProgram, `uniformBlockIndex`: *number*): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformBlockIndex` | *number* |

**Returns:** *null* \| *string*

___

### getActiveUniformBlockParameter

▸ **getActiveUniformBlockParameter**(`program`: WebGLProgram, `uniformBlockIndex`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformBlockIndex` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getActiveUniforms

▸ **getActiveUniforms**(`program`: WebGLProgram, `uniformIndices`: *number*[], `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformIndices` | *number*[] |
`pname` | *number* |

**Returns:** *void*

___

### getAttachedShaders

▸ **getAttachedShaders**(`program`: WebGLProgram): *null* \| WebGLShader[]

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |

**Returns:** *null* \| WebGLShader[]

___

### getAttribLocation

▸ **getAttribLocation**(`program`: WebGLProgram, `name`: *string*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`name` | *string* |

**Returns:** *number*

___

### getBufferParameter

▸ **getBufferParameter**(`target`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getBufferSubData

▸ **getBufferSubData**(`target`: *number*, `srcByteOffset`: *number*, `dstBuffer`: ArrayBufferView, `dstOffset?`: *number*, `length?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`srcByteOffset` | *number* |
`dstBuffer` | ArrayBufferView |
`dstOffset?` | *number* |
`length?` | *number* |

**Returns:** *void*

___

### getContextAttributes

▸ **getContextAttributes**(): *null* \| WebGLContextAttributes

**Returns:** *null* \| WebGLContextAttributes

___

### getError

▸ **getError**(): *number*

**Returns:** *number*

___

### getExtension

▸ **getExtension**(`extensionName`: *EXT_blend_minmax*): *null* \| EXT\_blend\_minmax

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *EXT_blend_minmax* |

**Returns:** *null* \| EXT\_blend\_minmax

▸ **getExtension**(`extensionName`: *EXT_texture_filter_anisotropic*): *null* \| EXT\_texture\_filter\_anisotropic

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *EXT_texture_filter_anisotropic* |

**Returns:** *null* \| EXT\_texture\_filter\_anisotropic

▸ **getExtension**(`extensionName`: *EXT_frag_depth*): *null* \| EXT\_frag\_depth

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *EXT_frag_depth* |

**Returns:** *null* \| EXT\_frag\_depth

▸ **getExtension**(`extensionName`: *EXT_shader_texture_lod*): *null* \| EXT\_shader\_texture\_lod

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *EXT_shader_texture_lod* |

**Returns:** *null* \| EXT\_shader\_texture\_lod

▸ **getExtension**(`extensionName`: *EXT_sRGB*): *null* \| EXT\_sRGB

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *EXT_sRGB* |

**Returns:** *null* \| EXT\_sRGB

▸ **getExtension**(`extensionName`: *OES_vertex_array_object*): *null* \| OES\_vertex\_array\_object

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_vertex_array_object* |

**Returns:** *null* \| OES\_vertex\_array\_object

▸ **getExtension**(`extensionName`: *WEBGL_color_buffer_float*): *null* \| WEBGL\_color\_buffer\_float

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_color_buffer_float* |

**Returns:** *null* \| WEBGL\_color\_buffer\_float

▸ **getExtension**(`extensionName`: *WEBGL_compressed_texture_astc*): *null* \| WEBGL\_compressed\_texture\_astc

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_compressed_texture_astc* |

**Returns:** *null* \| WEBGL\_compressed\_texture\_astc

▸ **getExtension**(`extensionName`: *WEBGL_compressed_texture_s3tc_srgb*): *null* \| WEBGL\_compressed\_texture\_s3tc\_srgb

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_compressed_texture_s3tc_srgb* |

**Returns:** *null* \| WEBGL\_compressed\_texture\_s3tc\_srgb

▸ **getExtension**(`extensionName`: *WEBGL_debug_shaders*): *null* \| WEBGL\_debug\_shaders

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_debug_shaders* |

**Returns:** *null* \| WEBGL\_debug\_shaders

▸ **getExtension**(`extensionName`: *WEBGL_draw_buffers*): *null* \| WEBGL\_draw\_buffers

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_draw_buffers* |

**Returns:** *null* \| WEBGL\_draw\_buffers

▸ **getExtension**(`extensionName`: *WEBGL_lose_context*): *null* \| WEBGL\_lose\_context

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_lose_context* |

**Returns:** *null* \| WEBGL\_lose\_context

▸ **getExtension**(`extensionName`: *WEBGL_depth_texture*): *null* \| WEBGL\_depth\_texture

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_depth_texture* |

**Returns:** *null* \| WEBGL\_depth\_texture

▸ **getExtension**(`extensionName`: *WEBGL_debug_renderer_info*): *null* \| WEBGL\_debug\_renderer\_info

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_debug_renderer_info* |

**Returns:** *null* \| WEBGL\_debug\_renderer\_info

▸ **getExtension**(`extensionName`: *WEBGL_compressed_texture_s3tc*): *null* \| WEBGL\_compressed\_texture\_s3tc

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *WEBGL_compressed_texture_s3tc* |

**Returns:** *null* \| WEBGL\_compressed\_texture\_s3tc

▸ **getExtension**(`extensionName`: *OES_texture_half_float_linear*): *null* \| OES\_texture\_half\_float\_linear

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_texture_half_float_linear* |

**Returns:** *null* \| OES\_texture\_half\_float\_linear

▸ **getExtension**(`extensionName`: *OES_texture_half_float*): *null* \| OES\_texture\_half\_float

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_texture_half_float* |

**Returns:** *null* \| OES\_texture\_half\_float

▸ **getExtension**(`extensionName`: *OES_texture_float_linear*): *null* \| OES\_texture\_float\_linear

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_texture_float_linear* |

**Returns:** *null* \| OES\_texture\_float\_linear

▸ **getExtension**(`extensionName`: *OES_texture_float*): *null* \| OES\_texture\_float

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_texture_float* |

**Returns:** *null* \| OES\_texture\_float

▸ **getExtension**(`extensionName`: *OES_standard_derivatives*): *null* \| OES\_standard\_derivatives

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_standard_derivatives* |

**Returns:** *null* \| OES\_standard\_derivatives

▸ **getExtension**(`extensionName`: *OES_element_index_uint*): *null* \| OES\_element\_index\_uint

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *OES_element_index_uint* |

**Returns:** *null* \| OES\_element\_index\_uint

▸ **getExtension**(`extensionName`: *ANGLE_instanced_arrays*): *null* \| ANGLE\_instanced\_arrays

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *ANGLE_instanced_arrays* |

**Returns:** *null* \| ANGLE\_instanced\_arrays

▸ **getExtension**(`extensionName`: *string*): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`extensionName` | *string* |

**Returns:** *any*

___

### getFragDataLocation

▸ **getFragDataLocation**(`program`: WebGLProgram, `name`: *string*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`name` | *string* |

**Returns:** *number*

___

### getFramebufferAttachmentParameter

▸ **getFramebufferAttachmentParameter**(`target`: *number*, `attachment`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachment` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getIndexedParameter

▸ **getIndexedParameter**(`target`: *number*, `index`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`index` | *number* |

**Returns:** *void*

___

### getInternalformatParameter

▸ **getInternalformatParameter**(`target`: *number*, `internalformat`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`internalformat` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getParameter

▸ **getParameter**(`pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pname` | *number* |

**Returns:** *void*

___

### getProgramInfoLog

▸ **getProgramInfoLog**(`program`: WebGLProgram): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |

**Returns:** *null* \| *string*

___

### getProgramParameter

▸ **getProgramParameter**(`program`: WebGLProgram, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`pname` | *number* |

**Returns:** *void*

___

### getQuery

▸ **getQuery**(`target`: *number*, `pname`: *number*): *null* \| WebGLQuery

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |

**Returns:** *null* \| WebGLQuery

___

### getQueryParameter

▸ **getQueryParameter**(`query`: WebGLQuery, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`query` | WebGLQuery |
`pname` | *number* |

**Returns:** *void*

___

### getRenderbufferParameter

▸ **getRenderbufferParameter**(`target`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getSamplerParameter

▸ **getSamplerParameter**(`sampler`: WebGLSampler, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sampler` | WebGLSampler |
`pname` | *number* |

**Returns:** *void*

___

### getShaderInfoLog

▸ **getShaderInfoLog**(`shader`: WebGLShader): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | WebGLShader |

**Returns:** *null* \| *string*

___

### getShaderParameter

▸ **getShaderParameter**(`shader`: WebGLShader, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | WebGLShader |
`pname` | *number* |

**Returns:** *void*

___

### getShaderPrecisionFormat

▸ **getShaderPrecisionFormat**(`shadertype`: *number*, `precisiontype`: *number*): *null* \| WebGLShaderPrecisionFormat

#### Parameters:

Name | Type |
:------ | :------ |
`shadertype` | *number* |
`precisiontype` | *number* |

**Returns:** *null* \| WebGLShaderPrecisionFormat

___

### getShaderSource

▸ **getShaderSource**(`shader`: WebGLShader): *null* \| *string*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | WebGLShader |

**Returns:** *null* \| *string*

___

### getSupportedExtensions

▸ **getSupportedExtensions**(): *null* \| *string*[]

**Returns:** *null* \| *string*[]

___

### getSyncParameter

▸ **getSyncParameter**(`sync`: WebGLSync, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sync` | WebGLSync |
`pname` | *number* |

**Returns:** *void*

___

### getTexParameter

▸ **getTexParameter**(`target`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getTransformFeedbackVarying

▸ **getTransformFeedbackVarying**(`program`: WebGLProgram, `index`: *number*): *null* \| WebGLActiveInfo

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`index` | *number* |

**Returns:** *null* \| WebGLActiveInfo

___

### getUniform

▸ **getUniform**(`program`: WebGLProgram, `location`: WebGLUniformLocation): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`location` | WebGLUniformLocation |

**Returns:** *void*

___

### getUniformBlockIndex

▸ **getUniformBlockIndex**(`program`: WebGLProgram, `uniformBlockName`: *string*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformBlockName` | *string* |

**Returns:** *number*

___

### getUniformIndices

▸ **getUniformIndices**(`program`: WebGLProgram, `uniformNames`: *string*[]): *null* \| *number*[]

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformNames` | *string*[] |

**Returns:** *null* \| *number*[]

___

### getUniformLocation

▸ **getUniformLocation**(`program`: WebGLProgram, `name`: *string*): *null* \| WebGLUniformLocation

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`name` | *string* |

**Returns:** *null* \| WebGLUniformLocation

___

### getVertexAttrib

▸ **getVertexAttrib**(`index`: *number*, `pname`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`pname` | *number* |

**Returns:** *void*

___

### getVertexAttribOffset

▸ **getVertexAttribOffset**(`index`: *number*, `pname`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`pname` | *number* |

**Returns:** *number*

___

### hint

▸ **hint**(`target`: *number*, `mode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`mode` | *number* |

**Returns:** *void*

___

### invalidateFramebuffer

▸ **invalidateFramebuffer**(`target`: *number*, `attachments`: *number*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachments` | *number*[] |

**Returns:** *void*

___

### invalidateSubFramebuffer

▸ **invalidateSubFramebuffer**(`target`: *number*, `attachments`: *number*[], `x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`attachments` | *number*[] |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### isBuffer

▸ **isBuffer**(`buffer`: *null* \| WebGLBuffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`buffer` | *null* \| WebGLBuffer |

**Returns:** *boolean*

___

### isContextLost

▸ **isContextLost**(): *boolean*

**Returns:** *boolean*

___

### isEnabled

▸ **isEnabled**(`cap`: *number*): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`cap` | *number* |

**Returns:** *boolean*

___

### isFramebuffer

▸ **isFramebuffer**(`framebuffer`: *null* \| WebGLFramebuffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`framebuffer` | *null* \| WebGLFramebuffer |

**Returns:** *boolean*

___

### isProgram

▸ **isProgram**(`program`: *null* \| WebGLProgram): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | *null* \| WebGLProgram |

**Returns:** *boolean*

___

### isQuery

▸ **isQuery**(`query`: *null* \| WebGLQuery): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`query` | *null* \| WebGLQuery |

**Returns:** *boolean*

___

### isRenderbuffer

▸ **isRenderbuffer**(`renderbuffer`: *null* \| WebGLRenderbuffer): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`renderbuffer` | *null* \| WebGLRenderbuffer |

**Returns:** *boolean*

___

### isSampler

▸ **isSampler**(`sampler`: *null* \| WebGLSampler): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`sampler` | *null* \| WebGLSampler |

**Returns:** *boolean*

___

### isShader

▸ **isShader**(`shader`: *null* \| WebGLShader): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | *null* \| WebGLShader |

**Returns:** *boolean*

___

### isSync

▸ **isSync**(`sync`: *null* \| WebGLSync): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`sync` | *null* \| WebGLSync |

**Returns:** *boolean*

___

### isTexture

▸ **isTexture**(`texture`: *null* \| WebGLTexture): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`texture` | *null* \| WebGLTexture |

**Returns:** *boolean*

___

### isTransformFeedback

▸ **isTransformFeedback**(`tf`: *null* \| WebGLTransformFeedback): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`tf` | *null* \| WebGLTransformFeedback |

**Returns:** *boolean*

___

### isVertexArray

▸ **isVertexArray**(`vertexArray`: *null* \| WebGLVertexArrayObject): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`vertexArray` | *null* \| WebGLVertexArrayObject |

**Returns:** *boolean*

___

### lineWidth

▸ **lineWidth**(`width`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`width` | *number* |

**Returns:** *void*

___

### linkProgram

▸ **linkProgram**(`program`: WebGLProgram): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |

**Returns:** *void*

___

### pauseTransformFeedback

▸ **pauseTransformFeedback**(): *void*

**Returns:** *void*

___

### pixelStorei

▸ **pixelStorei**(`pname`: *number*, `param`: *number* \| *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`pname` | *number* |
`param` | *number* \| *boolean* |

**Returns:** *void*

___

### polygonOffset

▸ **polygonOffset**(`factor`: *number*, `units`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`factor` | *number* |
`units` | *number* |

**Returns:** *void*

___

### readBuffer

▸ **readBuffer**(`src`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`src` | *number* |

**Returns:** *void*

___

### readPixels

▸ **readPixels**(`x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `dstData`: *null* \| ArrayBufferView): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`dstData` | *null* \| ArrayBufferView |

**Returns:** *void*

▸ **readPixels**(`x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`offset` | *number* |

**Returns:** *void*

▸ **readPixels**(`x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `dstData`: ArrayBufferView, `dstOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`dstData` | ArrayBufferView |
`dstOffset` | *number* |

**Returns:** *void*

___

### renderbufferStorage

▸ **renderbufferStorage**(`target`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### renderbufferStorageMultisample

▸ **renderbufferStorageMultisample**(`target`: *number*, `samples`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`samples` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### resumeTransformFeedback

▸ **resumeTransformFeedback**(): *void*

**Returns:** *void*

___

### sampleCoverage

▸ **sampleCoverage**(`value`: *number*, `invert`: *boolean*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |
`invert` | *boolean* |

**Returns:** *void*

___

### samplerParameterf

▸ **samplerParameterf**(`sampler`: WebGLSampler, `pname`: *number*, `param`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sampler` | WebGLSampler |
`pname` | *number* |
`param` | *number* |

**Returns:** *void*

___

### samplerParameteri

▸ **samplerParameteri**(`sampler`: WebGLSampler, `pname`: *number*, `param`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sampler` | WebGLSampler |
`pname` | *number* |
`param` | *number* |

**Returns:** *void*

___

### scissor

▸ **scissor**(`x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### shaderSource

▸ **shaderSource**(`shader`: WebGLShader, `source`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`shader` | WebGLShader |
`source` | *string* |

**Returns:** *void*

___

### stencilFunc

▸ **stencilFunc**(`func`: *number*, `ref`: *number*, `mask`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`func` | *number* |
`ref` | *number* |
`mask` | *number* |

**Returns:** *void*

___

### stencilFuncSeparate

▸ **stencilFuncSeparate**(`face`: *number*, `func`: *number*, `ref`: *number*, `mask`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`face` | *number* |
`func` | *number* |
`ref` | *number* |
`mask` | *number* |

**Returns:** *void*

___

### stencilMask

▸ **stencilMask**(`mask`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`mask` | *number* |

**Returns:** *void*

___

### stencilMaskSeparate

▸ **stencilMaskSeparate**(`face`: *number*, `mask`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`face` | *number* |
`mask` | *number* |

**Returns:** *void*

___

### stencilOp

▸ **stencilOp**(`fail`: *number*, `zfail`: *number*, `zpass`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`fail` | *number* |
`zfail` | *number* |
`zpass` | *number* |

**Returns:** *void*

___

### stencilOpSeparate

▸ **stencilOpSeparate**(`face`: *number*, `fail`: *number*, `zfail`: *number*, `zpass`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`face` | *number* |
`fail` | *number* |
`zfail` | *number* |
`zpass` | *number* |

**Returns:** *void*

___

### texImage2D

▸ **texImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `pixels`: *null* \| ArrayBufferView): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`pixels` | *null* \| ArrayBufferView |

**Returns:** *void*

▸ **texImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `pboOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`pboOffset` | *number* |

**Returns:** *void*

▸ **texImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texImage2D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `srcData`: ArrayBufferView, `srcOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`srcData` | ArrayBufferView |
`srcOffset` | *number* |

**Returns:** *void*

___

### texImage3D

▸ **texImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `pboOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`pboOffset` | *number* |

**Returns:** *void*

▸ **texImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `srcData`: *null* \| ArrayBufferView): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`srcData` | *null* \| ArrayBufferView |

**Returns:** *void*

▸ **texImage3D**(`target`: *number*, `level`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `border`: *number*, `format`: *number*, `type`: *number*, `srcData`: ArrayBufferView, `srcOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`border` | *number* |
`format` | *number* |
`type` | *number* |
`srcData` | ArrayBufferView |
`srcOffset` | *number* |

**Returns:** *void*

___

### texParameterf

▸ **texParameterf**(`target`: *number*, `pname`: *number*, `param`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |
`param` | *number* |

**Returns:** *void*

___

### texParameteri

▸ **texParameteri**(`target`: *number*, `pname`: *number*, `param`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`pname` | *number* |
`param` | *number* |

**Returns:** *void*

___

### texStorage2D

▸ **texStorage2D**(`target`: *number*, `levels`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`levels` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### texStorage3D

▸ **texStorage3D**(`target`: *number*, `levels`: *number*, `internalformat`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`levels` | *number* |
`internalformat` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |

**Returns:** *void*

___

### texSubImage2D

▸ **texSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `pixels`: *null* \| ArrayBufferView): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`pixels` | *null* \| ArrayBufferView |

**Returns:** *void*

▸ **texSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `pboOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`pboOffset` | *number* |

**Returns:** *void*

▸ **texSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texSubImage2D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `width`: *number*, `height`: *number*, `format`: *number*, `type`: *number*, `srcData`: ArrayBufferView, `srcOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`width` | *number* |
`height` | *number* |
`format` | *number* |
`type` | *number* |
`srcData` | ArrayBufferView |
`srcOffset` | *number* |

**Returns:** *void*

___

### texSubImage3D

▸ **texSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `format`: *number*, `type`: *number*, `pboOffset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`format` | *number* |
`type` | *number* |
`pboOffset` | *number* |

**Returns:** *void*

▸ **texSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `format`: *number*, `type`: *number*, `source`: TexImageSource): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`format` | *number* |
`type` | *number* |
`source` | TexImageSource |

**Returns:** *void*

▸ **texSubImage3D**(`target`: *number*, `level`: *number*, `xoffset`: *number*, `yoffset`: *number*, `zoffset`: *number*, `width`: *number*, `height`: *number*, `depth`: *number*, `format`: *number*, `type`: *number*, `srcData`: *null* \| ArrayBufferView, `srcOffset?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | *number* |
`level` | *number* |
`xoffset` | *number* |
`yoffset` | *number* |
`zoffset` | *number* |
`width` | *number* |
`height` | *number* |
`depth` | *number* |
`format` | *number* |
`type` | *number* |
`srcData` | *null* \| ArrayBufferView |
`srcOffset?` | *number* |

**Returns:** *void*

___

### transformFeedbackVaryings

▸ **transformFeedbackVaryings**(`program`: WebGLProgram, `varyings`: *string*[], `bufferMode`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`varyings` | *string*[] |
`bufferMode` | *number* |

**Returns:** *void*

___

### uniform1f

▸ **uniform1f**(`location`: *null* \| WebGLUniformLocation, `x`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |

**Returns:** *void*

___

### uniform1fv

▸ **uniform1fv**(`location`: *null* \| WebGLUniformLocation, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform1i

▸ **uniform1i**(`location`: *null* \| WebGLUniformLocation, `x`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |

**Returns:** *void*

___

### uniform1iv

▸ **uniform1iv**(`location`: *null* \| WebGLUniformLocation, `data`: Int32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Int32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform1ui

▸ **uniform1ui**(`location`: *null* \| WebGLUniformLocation, `v0`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`v0` | *number* |

**Returns:** *void*

___

### uniform1uiv

▸ **uniform1uiv**(`location`: *null* \| WebGLUniformLocation, `data`: Uint32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Uint32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform2f

▸ **uniform2f**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |

**Returns:** *void*

___

### uniform2fv

▸ **uniform2fv**(`location`: *null* \| WebGLUniformLocation, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform2i

▸ **uniform2i**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |

**Returns:** *void*

___

### uniform2iv

▸ **uniform2iv**(`location`: *null* \| WebGLUniformLocation, `data`: Int32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Int32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform2ui

▸ **uniform2ui**(`location`: *null* \| WebGLUniformLocation, `v0`: *number*, `v1`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`v0` | *number* |
`v1` | *number* |

**Returns:** *void*

___

### uniform2uiv

▸ **uniform2uiv**(`location`: *null* \| WebGLUniformLocation, `data`: Uint32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Uint32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform3f

▸ **uniform3f**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*, `z`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |
`z` | *number* |

**Returns:** *void*

___

### uniform3fv

▸ **uniform3fv**(`location`: *null* \| WebGLUniformLocation, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform3i

▸ **uniform3i**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*, `z`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |
`z` | *number* |

**Returns:** *void*

___

### uniform3iv

▸ **uniform3iv**(`location`: *null* \| WebGLUniformLocation, `data`: Int32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Int32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform3ui

▸ **uniform3ui**(`location`: *null* \| WebGLUniformLocation, `v0`: *number*, `v1`: *number*, `v2`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`v0` | *number* |
`v1` | *number* |
`v2` | *number* |

**Returns:** *void*

___

### uniform3uiv

▸ **uniform3uiv**(`location`: *null* \| WebGLUniformLocation, `data`: Uint32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Uint32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform4f

▸ **uniform4f**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*, `z`: *number*, `w`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |
`z` | *number* |
`w` | *number* |

**Returns:** *void*

___

### uniform4fv

▸ **uniform4fv**(`location`: *null* \| WebGLUniformLocation, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform4i

▸ **uniform4i**(`location`: *null* \| WebGLUniformLocation, `x`: *number*, `y`: *number*, `z`: *number*, `w`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`x` | *number* |
`y` | *number* |
`z` | *number* |
`w` | *number* |

**Returns:** *void*

___

### uniform4iv

▸ **uniform4iv**(`location`: *null* \| WebGLUniformLocation, `data`: Int32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Int32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniform4ui

▸ **uniform4ui**(`location`: *null* \| WebGLUniformLocation, `v0`: *number*, `v1`: *number*, `v2`: *number*, `v3`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`v0` | *number* |
`v1` | *number* |
`v2` | *number* |
`v3` | *number* |

**Returns:** *void*

___

### uniform4uiv

▸ **uniform4uiv**(`location`: *null* \| WebGLUniformLocation, `data`: Uint32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`data` | Uint32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformBlockBinding

▸ **uniformBlockBinding**(`program`: WebGLProgram, `uniformBlockIndex`: *number*, `uniformBlockBinding`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |
`uniformBlockIndex` | *number* |
`uniformBlockBinding` | *number* |

**Returns:** *void*

___

### uniformMatrix2fv

▸ **uniformMatrix2fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix2x3fv

▸ **uniformMatrix2x3fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix2x4fv

▸ **uniformMatrix2x4fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix3fv

▸ **uniformMatrix3fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix3x2fv

▸ **uniformMatrix3x2fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix3x4fv

▸ **uniformMatrix3x4fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix4fv

▸ **uniformMatrix4fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix4x2fv

▸ **uniformMatrix4x2fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### uniformMatrix4x3fv

▸ **uniformMatrix4x3fv**(`location`: *null* \| WebGLUniformLocation, `transpose`: *boolean*, `data`: Float32List, `srcOffset?`: *number*, `srcLength?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`location` | *null* \| WebGLUniformLocation |
`transpose` | *boolean* |
`data` | Float32List |
`srcOffset?` | *number* |
`srcLength?` | *number* |

**Returns:** *void*

___

### useProgram

▸ **useProgram**(`program`: *null* \| WebGLProgram): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | *null* \| WebGLProgram |

**Returns:** *void*

___

### validateProgram

▸ **validateProgram**(`program`: WebGLProgram): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`program` | WebGLProgram |

**Returns:** *void*

___

### vertexAttrib1f

▸ **vertexAttrib1f**(`index`: *number*, `x`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |

**Returns:** *void*

___

### vertexAttrib1fv

▸ **vertexAttrib1fv**(`index`: *number*, `values`: Float32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Float32List |

**Returns:** *void*

___

### vertexAttrib2f

▸ **vertexAttrib2f**(`index`: *number*, `x`: *number*, `y`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |
`y` | *number* |

**Returns:** *void*

___

### vertexAttrib2fv

▸ **vertexAttrib2fv**(`index`: *number*, `values`: Float32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Float32List |

**Returns:** *void*

___

### vertexAttrib3f

▸ **vertexAttrib3f**(`index`: *number*, `x`: *number*, `y`: *number*, `z`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |
`y` | *number* |
`z` | *number* |

**Returns:** *void*

___

### vertexAttrib3fv

▸ **vertexAttrib3fv**(`index`: *number*, `values`: Float32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Float32List |

**Returns:** *void*

___

### vertexAttrib4f

▸ **vertexAttrib4f**(`index`: *number*, `x`: *number*, `y`: *number*, `z`: *number*, `w`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |
`y` | *number* |
`z` | *number* |
`w` | *number* |

**Returns:** *void*

___

### vertexAttrib4fv

▸ **vertexAttrib4fv**(`index`: *number*, `values`: Float32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Float32List |

**Returns:** *void*

___

### vertexAttribDivisor

▸ **vertexAttribDivisor**(`index`: *number*, `divisor`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`divisor` | *number* |

**Returns:** *void*

___

### vertexAttribI4i

▸ **vertexAttribI4i**(`index`: *number*, `x`: *number*, `y`: *number*, `z`: *number*, `w`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |
`y` | *number* |
`z` | *number* |
`w` | *number* |

**Returns:** *void*

___

### vertexAttribI4iv

▸ **vertexAttribI4iv**(`index`: *number*, `values`: Int32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Int32List |

**Returns:** *void*

___

### vertexAttribI4ui

▸ **vertexAttribI4ui**(`index`: *number*, `x`: *number*, `y`: *number*, `z`: *number*, `w`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`x` | *number* |
`y` | *number* |
`z` | *number* |
`w` | *number* |

**Returns:** *void*

___

### vertexAttribI4uiv

▸ **vertexAttribI4uiv**(`index`: *number*, `values`: Uint32List): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`values` | Uint32List |

**Returns:** *void*

___

### vertexAttribIPointer

▸ **vertexAttribIPointer**(`index`: *number*, `size`: *number*, `type`: *number*, `stride`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`size` | *number* |
`type` | *number* |
`stride` | *number* |
`offset` | *number* |

**Returns:** *void*

___

### vertexAttribPointer

▸ **vertexAttribPointer**(`index`: *number*, `size`: *number*, `type`: *number*, `normalized`: *boolean*, `stride`: *number*, `offset`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`index` | *number* |
`size` | *number* |
`type` | *number* |
`normalized` | *boolean* |
`stride` | *number* |
`offset` | *number* |

**Returns:** *void*

___

### viewport

▸ **viewport**(`x`: *number*, `y`: *number*, `width`: *number*, `height`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |
`width` | *number* |
`height` | *number* |

**Returns:** *void*

___

### waitSync

▸ **waitSync**(`sync`: WebGLSync, `flags`: *number*, `timeout`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`sync` | WebGLSync |
`flags` | *number* |
`timeout` | *number* |

**Returns:** *void*
