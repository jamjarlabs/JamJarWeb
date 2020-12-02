/*
Copyright 2020 JamJar Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* eslint-disable */
import Fake from "./fake";

/**
 * FakeWebGL2RenderingContext provides stubs for using a WebGL2RenderingContext
 * in tests, allows overriding behaviour with the use of reactors.
 */
class FakeWebGL2RenderingContext extends Fake implements WebGL2RenderingContext {
    beginQuery(target: number, query: WebGLQuery): void {
        return;
    }
    beginTransformFeedback(primitiveMode: number): void {
        return;
    }
    bindBufferBase(target: number, index: number, buffer: WebGLBuffer | null): void {
        return;
    }
    bindBufferRange(target: number, index: number, buffer: WebGLBuffer | null, offset: number, size: number): void {
        return;
    }
    bindSampler(unit: number, sampler: WebGLSampler | null): void {
        return;
    }
    bindTransformFeedback(target: number, tf: WebGLTransformFeedback | null): void {
        return;
    }
    bindVertexArray(array: WebGLVertexArrayObject | null): void {
        return;
    }
    blitFramebuffer(
        srcX0: number,
        srcY0: number,
        srcX1: number,
        srcY1: number,
        dstX0: number,
        dstY0: number,
        dstX1: number,
        dstY1: number,
        mask: number,
        filter: number
    ): void {
        return;
    }
    clearBufferfi(buffer: number, drawbuffer: number, depth: number, stencil: number): void {
        return;
    }
    clearBufferfv(buffer: number, drawbuffer: number, values: Float32List, srcOffset?: number | undefined): void {
        return;
    }
    clearBufferiv(buffer: number, drawbuffer: number, values: Int32List, srcOffset?: number | undefined): void {
        return;
    }
    clearBufferuiv(buffer: number, drawbuffer: number, values: Uint32List, srcOffset?: number | undefined): void {
        return;
    }
    clientWaitSync(sync: WebGLSync, flags: number, timeout: number): number {
        return 0;
    }
    compressedTexImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        imageSize: number,
        offset: number
    ): void;
    compressedTexImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        srcData: ArrayBufferView,
        srcOffset?: number | undefined,
        srcLengthOverride?: number | undefined
    ): void;
    compressedTexImage3D(
        target: any,
        level: any,
        internalformat: any,
        width: any,
        height: any,
        depth: any,
        border: any,
        srcData: any,
        srcOffset?: any,
        srcLengthOverride?: any
    ) {
        return;
    }
    compressedTexSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        width: number,
        height: number,
        depth: number,
        format: number,
        imageSize: number,
        offset: number
    ): void;
    compressedTexSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        width: number,
        height: number,
        depth: number,
        format: number,
        srcData: ArrayBufferView,
        srcOffset?: number | undefined,
        srcLengthOverride?: number | undefined
    ): void;
    compressedTexSubImage3D(
        target: any,
        level: any,
        xoffset: any,
        yoffset: any,
        zoffset: any,
        width: any,
        height: any,
        depth: any,
        format: any,
        srcData: any,
        srcOffset?: any,
        srcLengthOverride?: any
    ) {
        return;
    }
    copyBufferSubData(
        readTarget: number,
        writeTarget: number,
        readOffset: number,
        writeOffset: number,
        size: number
    ): void {
        return;
    }
    copyTexSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): void {
        return;
    }
    createQuery(): WebGLQuery | null {
        return null;
    }
    createSampler(): WebGLSampler | null {
        return null;
    }
    createTransformFeedback(): WebGLTransformFeedback | null {
        return null;
    }
    createVertexArray(): WebGLVertexArrayObject | null {
        return null;
    }
    deleteQuery(query: WebGLQuery | null): void {
        return;
    }
    deleteSampler(sampler: WebGLSampler | null): void {
        return;
    }
    deleteSync(sync: WebGLSync | null): void {
        return;
    }
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void {
        return;
    }
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void {
        return;
    }
    drawArraysInstanced(mode: number, first: number, count: number, instanceCount: number): void {
        return;
    }
    drawBuffers(buffers: number[]): void {
        return;
    }
    drawElementsInstanced(mode: number, count: number, type: number, offset: number, instanceCount: number): void {
        return;
    }
    drawRangeElements(mode: number, start: number, end: number, count: number, type: number, offset: number): void {
        return;
    }
    endQuery(target: number): void {
        return;
    }
    endTransformFeedback(): void {
        return;
    }
    fenceSync(condition: number, flags: number): WebGLSync | null {
        return null;
    }
    framebufferTextureLayer(
        target: number,
        attachment: number,
        texture: WebGLTexture | null,
        level: number,
        layer: number
    ): void {
        return;
    }
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: number): string | null {
        return null;
    }
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: number, pname: number) {
        return;
    }
    getActiveUniforms(program: WebGLProgram, uniformIndices: number[], pname: number) {
        return;
    }
    getBufferSubData(
        target: number,
        srcByteOffset: number,
        dstBuffer: ArrayBufferView,
        dstOffset?: number | undefined,
        length?: number | undefined
    ): void {
        return;
    }
    getFragDataLocation(program: WebGLProgram, name: string): number {
        return 0;
    }
    getIndexedParameter(target: number, index: number) {
        return;
    }
    getInternalformatParameter(target: number, internalformat: number, pname: number) {
        return;
    }
    getQuery(target: number, pname: number): WebGLQuery | null {
        return null;
    }
    getQueryParameter(query: WebGLQuery, pname: number) {
        return;
    }
    getSamplerParameter(sampler: WebGLSampler, pname: number) {
        return;
    }
    getSyncParameter(sync: WebGLSync, pname: number) {
        return;
    }
    getTransformFeedbackVarying(program: WebGLProgram, index: number): WebGLActiveInfo | null {
        return null;
    }
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): number {
        return 0;
    }
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): number[] | null {
        return null;
    }
    invalidateFramebuffer(target: number, attachments: number[]): void {
        return;
    }
    invalidateSubFramebuffer(
        target: number,
        attachments: number[],
        x: number,
        y: number,
        width: number,
        height: number
    ): void {
        return;
    }
    isQuery(query: WebGLQuery | null): boolean {
        return false;
    }
    isSampler(sampler: WebGLSampler | null): boolean {
        return false;
    }
    isSync(sync: WebGLSync | null): boolean {
        return false;
    }
    isTransformFeedback(tf: WebGLTransformFeedback | null): boolean {
        return false;
    }
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): boolean {
        return false;
    }
    pauseTransformFeedback(): void {
        return;
    }
    readBuffer(src: number): void {
        return;
    }
    renderbufferStorageMultisample(
        target: number,
        samples: number,
        internalformat: number,
        width: number,
        height: number
    ): void {
        return;
    }
    resumeTransformFeedback(): void {
        return;
    }
    samplerParameterf(sampler: WebGLSampler, pname: number, param: number): void {
        return;
    }
    samplerParameteri(sampler: WebGLSampler, pname: number, param: number): void {
        return;
    }
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        pboOffset: number
    ): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        srcData: ArrayBufferView | null
    ): void;
    texImage3D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number,
        border: number,
        format: number,
        type: number,
        srcData: ArrayBufferView,
        srcOffset: number
    ): void;
    texImage3D(
        target: any,
        level: any,
        internalformat: any,
        width: any,
        height: any,
        depth: any,
        border: any,
        format: any,
        type: any,
        srcData: any,
        srcOffset?: any
    ) {
        return;
    }
    texStorage2D(target: number, levels: number, internalformat: number, width: number, height: number): void {
        return;
    }
    texStorage3D(
        target: number,
        levels: number,
        internalformat: number,
        width: number,
        height: number,
        depth: number
    ): void {
        return;
    }
    texSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        width: number,
        height: number,
        depth: number,
        format: number,
        type: number,
        pboOffset: number
    ): void;
    texSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        width: number,
        height: number,
        depth: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texSubImage3D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        zoffset: number,
        width: number,
        height: number,
        depth: number,
        format: number,
        type: number,
        srcData: ArrayBufferView | null,
        srcOffset?: number | undefined
    ): void;
    texSubImage3D(
        target: any,
        level: any,
        xoffset: any,
        yoffset: any,
        zoffset: any,
        width: any,
        height: any,
        depth: any,
        format: any,
        type: any,
        srcData: any,
        srcOffset?: any
    ) {
        return;
    }
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: number): void {
        return;
    }
    uniform1ui(location: WebGLUniformLocation | null, v0: number): void {
        return;
    }
    uniform1uiv(
        location: WebGLUniformLocation | null,
        data: Uint32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform2ui(location: WebGLUniformLocation | null, v0: number, v1: number): void {
        return;
    }
    uniform2uiv(
        location: WebGLUniformLocation | null,
        data: Uint32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform3ui(location: WebGLUniformLocation | null, v0: number, v1: number, v2: number): void {
        return;
    }
    uniform3uiv(
        location: WebGLUniformLocation | null,
        data: Uint32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform4ui(location: WebGLUniformLocation | null, v0: number, v1: number, v2: number, v3: number): void {
        return;
    }
    uniform4uiv(
        location: WebGLUniformLocation | null,
        data: Uint32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: number, uniformBlockBinding: number): void {
        return;
    }
    uniformMatrix2x3fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix2x4fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix3x2fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix3x4fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix4x2fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix4x3fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    vertexAttribDivisor(index: number, divisor: number): void {
        return;
    }
    vertexAttribI4i(index: number, x: number, y: number, z: number, w: number): void {
        return;
    }
    vertexAttribI4iv(index: number, values: Int32List): void {
        return;
    }
    vertexAttribI4ui(index: number, x: number, y: number, z: number, w: number): void {
        return;
    }
    vertexAttribI4uiv(index: number, values: Uint32List): void {
        return;
    }
    vertexAttribIPointer(index: number, size: number, type: number, stride: number, offset: number): void {
        return;
    }
    waitSync(sync: WebGLSync, flags: number, timeout: number): void {
        return;
    }
    ACTIVE_UNIFORM_BLOCKS!: number;
    ALREADY_SIGNALED!: number;
    ANY_SAMPLES_PASSED!: number;
    ANY_SAMPLES_PASSED_CONSERVATIVE!: number;
    COLOR!: number;
    COLOR_ATTACHMENT1!: number;
    COLOR_ATTACHMENT10!: number;
    COLOR_ATTACHMENT11!: number;
    COLOR_ATTACHMENT12!: number;
    COLOR_ATTACHMENT13!: number;
    COLOR_ATTACHMENT14!: number;
    COLOR_ATTACHMENT15!: number;
    COLOR_ATTACHMENT2!: number;
    COLOR_ATTACHMENT3!: number;
    COLOR_ATTACHMENT4!: number;
    COLOR_ATTACHMENT5!: number;
    COLOR_ATTACHMENT6!: number;
    COLOR_ATTACHMENT7!: number;
    COLOR_ATTACHMENT8!: number;
    COLOR_ATTACHMENT9!: number;
    COMPARE_REF_TO_TEXTURE!: number;
    CONDITION_SATISFIED!: number;
    COPY_READ_BUFFER!: number;
    COPY_READ_BUFFER_BINDING!: number;
    COPY_WRITE_BUFFER!: number;
    COPY_WRITE_BUFFER_BINDING!: number;
    CURRENT_QUERY!: number;
    DEPTH!: number;
    DEPTH24_STENCIL8!: number;
    DEPTH32F_STENCIL8!: number;
    DEPTH_COMPONENT24!: number;
    DEPTH_COMPONENT32F!: number;
    DRAW_BUFFER0!: number;
    DRAW_BUFFER1!: number;
    DRAW_BUFFER10!: number;
    DRAW_BUFFER11!: number;
    DRAW_BUFFER12!: number;
    DRAW_BUFFER13!: number;
    DRAW_BUFFER14!: number;
    DRAW_BUFFER15!: number;
    DRAW_BUFFER2!: number;
    DRAW_BUFFER3!: number;
    DRAW_BUFFER4!: number;
    DRAW_BUFFER5!: number;
    DRAW_BUFFER6!: number;
    DRAW_BUFFER7!: number;
    DRAW_BUFFER8!: number;
    DRAW_BUFFER9!: number;
    DRAW_FRAMEBUFFER!: number;
    DRAW_FRAMEBUFFER_BINDING!: number;
    DYNAMIC_COPY!: number;
    DYNAMIC_READ!: number;
    FLOAT_32_UNSIGNED_INT_24_8_REV!: number;
    FLOAT_MAT2x3!: number;
    FLOAT_MAT2x4!: number;
    FLOAT_MAT3x2!: number;
    FLOAT_MAT3x4!: number;
    FLOAT_MAT4x2!: number;
    FLOAT_MAT4x3!: number;
    FRAGMENT_SHADER_DERIVATIVE_HINT!: number;
    FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_BLUE_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING!: number;
    FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE!: number;
    FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_GREEN_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_RED_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE!: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER!: number;
    FRAMEBUFFER_DEFAULT!: number;
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE!: number;
    HALF_FLOAT!: number;
    INTERLEAVED_ATTRIBS!: number;
    INT_2_10_10_10_REV!: number;
    INT_SAMPLER_2D!: number;
    INT_SAMPLER_2D_ARRAY!: number;
    INT_SAMPLER_3D!: number;
    INT_SAMPLER_CUBE!: number;
    INVALID_INDEX!: number;
    MAX!: number;
    MAX_3D_TEXTURE_SIZE!: number;
    MAX_ARRAY_TEXTURE_LAYERS!: number;
    MAX_CLIENT_WAIT_TIMEOUT_WEBGL!: number;
    MAX_COLOR_ATTACHMENTS!: number;
    MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS!: number;
    MAX_COMBINED_UNIFORM_BLOCKS!: number;
    MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS!: number;
    MAX_DRAW_BUFFERS!: number;
    MAX_ELEMENTS_INDICES!: number;
    MAX_ELEMENTS_VERTICES!: number;
    MAX_ELEMENT_INDEX!: number;
    MAX_FRAGMENT_INPUT_COMPONENTS!: number;
    MAX_FRAGMENT_UNIFORM_BLOCKS!: number;
    MAX_FRAGMENT_UNIFORM_COMPONENTS!: number;
    MAX_PROGRAM_TEXEL_OFFSET!: number;
    MAX_SAMPLES!: number;
    MAX_SERVER_WAIT_TIMEOUT!: number;
    MAX_TEXTURE_LOD_BIAS!: number;
    MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS!: number;
    MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS!: number;
    MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS!: number;
    MAX_UNIFORM_BLOCK_SIZE!: number;
    MAX_UNIFORM_BUFFER_BINDINGS!: number;
    MAX_VARYING_COMPONENTS!: number;
    MAX_VERTEX_OUTPUT_COMPONENTS!: number;
    MAX_VERTEX_UNIFORM_BLOCKS!: number;
    MAX_VERTEX_UNIFORM_COMPONENTS!: number;
    MIN!: number;
    MIN_PROGRAM_TEXEL_OFFSET!: number;
    OBJECT_TYPE!: number;
    PACK_ROW_LENGTH!: number;
    PACK_SKIP_PIXELS!: number;
    PACK_SKIP_ROWS!: number;
    PIXEL_PACK_BUFFER!: number;
    PIXEL_PACK_BUFFER_BINDING!: number;
    PIXEL_UNPACK_BUFFER!: number;
    PIXEL_UNPACK_BUFFER_BINDING!: number;
    QUERY_RESULT!: number;
    QUERY_RESULT_AVAILABLE!: number;
    R11F_G11F_B10F!: number;
    R16F!: number;
    R16I!: number;
    R16UI!: number;
    R32F!: number;
    R32I!: number;
    R32UI!: number;
    R8!: number;
    R8I!: number;
    R8UI!: number;
    R8_SNORM!: number;
    RASTERIZER_DISCARD!: number;
    READ_BUFFER!: number;
    READ_FRAMEBUFFER!: number;
    READ_FRAMEBUFFER_BINDING!: number;
    RED!: number;
    RED_INTEGER!: number;
    RENDERBUFFER_SAMPLES!: number;
    RG!: number;
    RG16F!: number;
    RG16I!: number;
    RG16UI!: number;
    RG32F!: number;
    RG32I!: number;
    RG32UI!: number;
    RG8!: number;
    RG8I!: number;
    RG8UI!: number;
    RG8_SNORM!: number;
    RGB10_A2!: number;
    RGB10_A2UI!: number;
    RGB16F!: number;
    RGB16I!: number;
    RGB16UI!: number;
    RGB32F!: number;
    RGB32I!: number;
    RGB32UI!: number;
    RGB8!: number;
    RGB8I!: number;
    RGB8UI!: number;
    RGB8_SNORM!: number;
    RGB9_E5!: number;
    RGBA16F!: number;
    RGBA16I!: number;
    RGBA16UI!: number;
    RGBA32F!: number;
    RGBA32I!: number;
    RGBA32UI!: number;
    RGBA8!: number;
    RGBA8I!: number;
    RGBA8UI!: number;
    RGBA8_SNORM!: number;
    RGBA_INTEGER!: number;
    RGB_INTEGER!: number;
    RG_INTEGER!: number;
    SAMPLER_2D_ARRAY!: number;
    SAMPLER_2D_ARRAY_SHADOW!: number;
    SAMPLER_2D_SHADOW!: number;
    SAMPLER_3D!: number;
    SAMPLER_BINDING!: number;
    SAMPLER_CUBE_SHADOW!: number;
    SEPARATE_ATTRIBS!: number;
    SIGNALED!: number;
    SIGNED_NORMALIZED!: number;
    SRGB!: number;
    SRGB8!: number;
    SRGB8_ALPHA8!: number;
    STATIC_COPY!: number;
    STATIC_READ!: number;
    STENCIL!: number;
    STREAM_COPY!: number;
    STREAM_READ!: number;
    SYNC_CONDITION!: number;
    SYNC_FENCE!: number;
    SYNC_FLAGS!: number;
    SYNC_FLUSH_COMMANDS_BIT!: number;
    SYNC_GPU_COMMANDS_COMPLETE!: number;
    SYNC_STATUS!: number;
    TEXTURE_2D_ARRAY!: number;
    TEXTURE_3D!: number;
    TEXTURE_BASE_LEVEL!: number;
    TEXTURE_BINDING_2D_ARRAY!: number;
    TEXTURE_BINDING_3D!: number;
    TEXTURE_COMPARE_FUNC!: number;
    TEXTURE_COMPARE_MODE!: number;
    TEXTURE_IMMUTABLE_FORMAT!: number;
    TEXTURE_IMMUTABLE_LEVELS!: number;
    TEXTURE_MAX_LEVEL!: number;
    TEXTURE_MAX_LOD!: number;
    TEXTURE_MIN_LOD!: number;
    TEXTURE_WRAP_R!: number;
    TIMEOUT_EXPIRED!: number;
    TIMEOUT_IGNORED!: number;
    TRANSFORM_FEEDBACK!: number;
    TRANSFORM_FEEDBACK_ACTIVE!: number;
    TRANSFORM_FEEDBACK_BINDING!: number;
    TRANSFORM_FEEDBACK_BUFFER!: number;
    TRANSFORM_FEEDBACK_BUFFER_BINDING!: number;
    TRANSFORM_FEEDBACK_BUFFER_MODE!: number;
    TRANSFORM_FEEDBACK_BUFFER_SIZE!: number;
    TRANSFORM_FEEDBACK_BUFFER_START!: number;
    TRANSFORM_FEEDBACK_PAUSED!: number;
    TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN!: number;
    TRANSFORM_FEEDBACK_VARYINGS!: number;
    UNIFORM_ARRAY_STRIDE!: number;
    UNIFORM_BLOCK_ACTIVE_UNIFORMS!: number;
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES!: number;
    UNIFORM_BLOCK_BINDING!: number;
    UNIFORM_BLOCK_DATA_SIZE!: number;
    UNIFORM_BLOCK_INDEX!: number;
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER!: number;
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER!: number;
    UNIFORM_BUFFER!: number;
    UNIFORM_BUFFER_BINDING!: number;
    UNIFORM_BUFFER_OFFSET_ALIGNMENT!: number;
    UNIFORM_BUFFER_SIZE!: number;
    UNIFORM_BUFFER_START!: number;
    UNIFORM_IS_ROW_MAJOR!: number;
    UNIFORM_MATRIX_STRIDE!: number;
    UNIFORM_OFFSET!: number;
    UNIFORM_SIZE!: number;
    UNIFORM_TYPE!: number;
    UNPACK_IMAGE_HEIGHT!: number;
    UNPACK_ROW_LENGTH!: number;
    UNPACK_SKIP_IMAGES!: number;
    UNPACK_SKIP_PIXELS!: number;
    UNPACK_SKIP_ROWS!: number;
    UNSIGNALED!: number;
    UNSIGNED_INT_10F_11F_11F_REV!: number;
    UNSIGNED_INT_24_8!: number;
    UNSIGNED_INT_2_10_10_10_REV!: number;
    UNSIGNED_INT_5_9_9_9_REV!: number;
    UNSIGNED_INT_SAMPLER_2D!: number;
    UNSIGNED_INT_SAMPLER_2D_ARRAY!: number;
    UNSIGNED_INT_SAMPLER_3D!: number;
    UNSIGNED_INT_SAMPLER_CUBE!: number;
    UNSIGNED_INT_VEC2!: number;
    UNSIGNED_INT_VEC3!: number;
    UNSIGNED_INT_VEC4!: number;
    UNSIGNED_NORMALIZED!: number;
    VERTEX_ARRAY_BINDING!: number;
    VERTEX_ATTRIB_ARRAY_DIVISOR!: number;
    VERTEX_ATTRIB_ARRAY_INTEGER!: number;
    WAIT_FAILED!: number;
    bufferData(target: number, size: number, usage: number): void;
    bufferData(target: number, srcData: ArrayBufferView | ArrayBuffer | null, usage: number): void;
    bufferData(
        target: number,
        srcData: ArrayBufferView,
        usage: number,
        srcOffset: number,
        length?: number | undefined
    ): void;
    bufferData(target: any, srcData: any, usage: any, srcOffset?: any, length?: any) {
        return;
    }
    bufferSubData(target: number, dstByteOffset: number, srcData: BufferSource): void;
    bufferSubData(
        target: number,
        dstByteOffset: number,
        srcData: ArrayBufferView,
        srcOffset: number,
        length?: number | undefined
    ): void;
    bufferSubData(target: any, dstByteOffset: any, srcData: any, srcOffset?: any, length?: any) {
        return;
    }
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        imageSize: number,
        offset: number
    ): void;
    compressedTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        srcData: ArrayBufferView,
        srcOffset?: number | undefined,
        srcLengthOverride?: number | undefined
    ): void;
    compressedTexImage2D(
        target: any,
        level: any,
        internalformat: any,
        width: any,
        height: any,
        border: any,
        srcData: any,
        srcOffset?: any,
        srcLengthOverride?: any
    ) {
        return;
    }
    compressedTexSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        imageSize: number,
        offset: number
    ): void;
    compressedTexSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        srcData: ArrayBufferView,
        srcOffset?: number | undefined,
        srcLengthOverride?: number | undefined
    ): void;
    compressedTexSubImage2D(
        target: any,
        level: any,
        xoffset: any,
        yoffset: any,
        width: any,
        height: any,
        format: any,
        srcData: any,
        srcOffset?: any,
        srcLengthOverride?: any
    ) {
        return;
    }
    readPixels(
        x: number,
        y: number,
        width: number,
        height: number,
        format: number,
        type: number,
        dstData: ArrayBufferView | null
    ): void;
    readPixels(x: number, y: number, width: number, height: number, format: number, type: number, offset: number): void;
    readPixels(
        x: number,
        y: number,
        width: number,
        height: number,
        format: number,
        type: number,
        dstData: ArrayBufferView,
        dstOffset: number
    ): void;
    readPixels(x: any, y: any, width: any, height: any, format: any, type: any, dstData: any, dstOffset?: any) {
        return;
    }
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null
    ): void;
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        pboOffset: number
    ): void;
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texImage2D(
        target: number,
        level: number,
        internalformat: number,
        width: number,
        height: number,
        border: number,
        format: number,
        type: number,
        srcData: ArrayBufferView,
        srcOffset: number
    ): void;
    texImage2D(
        target: any,
        level: any,
        internalformat: any,
        width: any,
        height: any,
        border: any,
        format?: any,
        type?: any,
        srcData?: any,
        srcOffset?: any
    ) {
        return;
    }
    texSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        type: number,
        pixels: ArrayBufferView | null
    ): void;
    texSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        type: number,
        pboOffset: number
    ): void;
    texSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        type: number,
        source: TexImageSource
    ): void;
    texSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        width: number,
        height: number,
        format: number,
        type: number,
        srcData: ArrayBufferView,
        srcOffset: number
    ): void;
    texSubImage2D(
        target: any,
        level: any,
        xoffset: any,
        yoffset: any,
        width: any,
        height: any,
        format: any,
        type?: any,
        srcData?: any,
        srcOffset?: any
    ) {
        return;
    }
    uniform1fv(
        location: WebGLUniformLocation | null,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform1iv(
        location: WebGLUniformLocation | null,
        data: Int32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform2fv(
        location: WebGLUniformLocation | null,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform2iv(
        location: WebGLUniformLocation | null,
        data: Int32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform3fv(
        location: WebGLUniformLocation | null,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform3iv(
        location: WebGLUniformLocation | null,
        data: Int32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform4fv(
        location: WebGLUniformLocation | null,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniform4iv(
        location: WebGLUniformLocation | null,
        data: Int32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix2fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix3fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    uniformMatrix4fv(
        location: WebGLUniformLocation | null,
        transpose: boolean,
        data: Float32List,
        srcOffset?: number | undefined,
        srcLength?: number | undefined
    ): void {
        return;
    }
    canvas!: HTMLCanvasElement | OffscreenCanvas;
    drawingBufferHeight!: number;
    drawingBufferWidth!: number;
    activeTexture(texture: number): void {
        return;
    }
    attachShader(program: WebGLProgram, shader: WebGLShader): void {
        return;
    }
    bindAttribLocation(program: WebGLProgram, index: number, name: string): void {
        return;
    }
    bindBuffer(target: number, buffer: WebGLBuffer | null): void {
        return;
    }
    bindFramebuffer(target: number, framebuffer: WebGLFramebuffer | null): void {
        return;
    }
    bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer | null): void {
        return;
    }
    bindTexture(target: number, texture: WebGLTexture | null): void {
        return;
    }
    blendColor(red: number, green: number, blue: number, alpha: number): void {
        return;
    }
    blendEquation(mode: number): void {
        return;
    }
    blendEquationSeparate(modeRGB: number, modeAlpha: number): void {
        return;
    }
    blendFunc(sfactor: number, dfactor: number): void {
        return;
    }
    blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void {
        return;
    }
    checkFramebufferStatus(target: number): number {
        return 0;
    }
    clear(mask: number): void {
        return;
    }
    clearColor(red: number, green: number, blue: number, alpha: number): void {
        return;
    }
    clearDepth(depth: number): void {
        return;
    }
    clearStencil(s: number): void {
        return;
    }
    colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void {
        return;
    }
    compileShader(shader: WebGLShader): void {
        return;
    }
    copyTexImage2D(
        target: number,
        level: number,
        internalformat: number,
        x: number,
        y: number,
        width: number,
        height: number,
        border: number
    ): void {
        return;
    }
    copyTexSubImage2D(
        target: number,
        level: number,
        xoffset: number,
        yoffset: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): void {
        return;
    }
    createBuffer(): WebGLBuffer | null {
        return null;
    }
    createFramebuffer(): WebGLFramebuffer | null {
        return null;
    }
    createProgram(): WebGLProgram | null {
        return null;
    }
    createRenderbuffer(): WebGLRenderbuffer | null {
        return null;
    }
    createShader(type: number): WebGLShader | null {
        return null;
    }
    createTexture(): WebGLTexture | null {
        return null;
    }
    cullFace(mode: number): void {
        return;
    }
    deleteBuffer(buffer: WebGLBuffer | null): void {
        return;
    }
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void {
        return;
    }
    deleteProgram(program: WebGLProgram | null): void {
        return;
    }
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void {
        return;
    }
    deleteShader(shader: WebGLShader | null): void {
        return;
    }
    deleteTexture(texture: WebGLTexture | null): void {
        return;
    }
    depthFunc(func: number): void {
        return;
    }
    depthMask(flag: boolean): void {
        return;
    }
    depthRange(zNear: number, zFar: number): void {
        return;
    }
    detachShader(program: WebGLProgram, shader: WebGLShader): void {
        return;
    }
    disable(cap: number): void {
        return;
    }
    disableVertexAttribArray(index: number): void {
        return;
    }
    drawArrays(mode: number, first: number, count: number): void {
        return;
    }
    drawElements(mode: number, count: number, type: number, offset: number): void {
        return;
    }
    enable(cap: number): void {
        return;
    }
    enableVertexAttribArray(index: number): void {
        return;
    }
    finish(): void {
        return;
    }
    flush(): void {
        return;
    }
    framebufferRenderbuffer(
        target: number,
        attachment: number,
        renderbuffertarget: number,
        renderbuffer: WebGLRenderbuffer | null
    ): void {
        return;
    }
    framebufferTexture2D(
        target: number,
        attachment: number,
        textarget: number,
        texture: WebGLTexture | null,
        level: number
    ): void {
        return;
    }
    frontFace(mode: number): void {
        return;
    }
    generateMipmap(target: number): void {
        return;
    }
    getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo | null {
        return null;
    }
    getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo | null {
        return null;
    }
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null {
        return null;
    }
    getAttribLocation(program: WebGLProgram, name: string): number {
        return 0;
    }
    getBufferParameter(target: number, pname: number) {
        return;
    }
    getContextAttributes(): WebGLContextAttributes | null {
        return null;
    }
    getError(): number {
        return 0;
    }
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null;
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null;
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null;
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null;
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null;
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null;
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null;
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null;
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null;
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null;
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null;
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null;
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null;
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null;
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null;
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null;
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null;
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null;
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null;
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null;
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null;
    getExtension(extensionName: string): any;
    getExtension(extensionName: any) {
        return null;
    }
    getFramebufferAttachmentParameter(target: number, attachment: number, pname: number) {
        return;
    }
    getParameter(pname: number) {
        return;
    }
    getProgramInfoLog(program: WebGLProgram): string | null {
        return null;
    }
    getProgramParameter(program: WebGLProgram, pname: number) {
        return;
    }
    getRenderbufferParameter(target: number, pname: number) {
        return;
    }
    getShaderInfoLog(shader: WebGLShader): string | null {
        return null;
    }
    getShaderParameter(shader: WebGLShader, pname: number) {
        return;
    }
    getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat | null {
        return null;
    }
    getShaderSource(shader: WebGLShader): string | null {
        return null;
    }
    getSupportedExtensions(): string[] | null {
        return null;
    }
    getTexParameter(target: number, pname: number) {
        return;
    }
    getUniform(program: WebGLProgram, location: WebGLUniformLocation) {
        return;
    }
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null {
        return null;
    }
    getVertexAttrib(index: number, pname: number) {
        return;
    }
    getVertexAttribOffset(index: number, pname: number): number {
        return 0;
    }
    hint(target: number, mode: number): void {
        return;
    }
    isBuffer(buffer: WebGLBuffer | null): boolean {
        return false;
    }
    isContextLost(): boolean {
        return false;
    }
    isEnabled(cap: number): boolean {
        return false;
    }
    isFramebuffer(framebuffer: WebGLFramebuffer | null): boolean {
        return false;
    }
    isProgram(program: WebGLProgram | null): boolean {
        return false;
    }
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): boolean {
        return false;
    }
    isShader(shader: WebGLShader | null): boolean {
        return false;
    }
    isTexture(texture: WebGLTexture | null): boolean {
        return false;
    }
    lineWidth(width: number): void {
        return;
    }
    linkProgram(program: WebGLProgram): void {
        return;
    }
    pixelStorei(pname: number, param: number | boolean): void {
        return;
    }
    polygonOffset(factor: number, units: number): void {
        return;
    }
    renderbufferStorage(target: number, internalformat: number, width: number, height: number): void {
        return;
    }
    sampleCoverage(value: number, invert: boolean): void {
        return;
    }
    scissor(x: number, y: number, width: number, height: number): void {
        return;
    }
    shaderSource(shader: WebGLShader, source: string): void {
        return;
    }
    stencilFunc(func: number, ref: number, mask: number): void {
        return;
    }
    stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void {
        return;
    }
    stencilMask(mask: number): void {
        return;
    }
    stencilMaskSeparate(face: number, mask: number): void {
        return;
    }
    stencilOp(fail: number, zfail: number, zpass: number): void {
        return;
    }
    stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void {
        return;
    }
    texParameterf(target: number, pname: number, param: number): void {
        return;
    }
    texParameteri(target: number, pname: number, param: number): void {
        return;
    }
    uniform1f(location: WebGLUniformLocation | null, x: number): void {
        return;
    }
    uniform1i(location: WebGLUniformLocation | null, x: number): void {
        return;
    }
    uniform2f(location: WebGLUniformLocation | null, x: number, y: number): void {
        return;
    }
    uniform2i(location: WebGLUniformLocation | null, x: number, y: number): void {
        return;
    }
    uniform3f(location: WebGLUniformLocation | null, x: number, y: number, z: number): void {
        return;
    }
    uniform3i(location: WebGLUniformLocation | null, x: number, y: number, z: number): void {
        return;
    }
    uniform4f(location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number): void {
        return;
    }
    uniform4i(location: WebGLUniformLocation | null, x: number, y: number, z: number, w: number): void {
        return;
    }
    useProgram(program: WebGLProgram | null): void {
        return;
    }
    validateProgram(program: WebGLProgram): void {
        return;
    }
    vertexAttrib1f(index: number, x: number): void {
        return;
    }
    vertexAttrib1fv(index: number, values: Float32List): void {
        return;
    }
    vertexAttrib2f(index: number, x: number, y: number): void {
        return;
    }
    vertexAttrib2fv(index: number, values: Float32List): void {
        return;
    }
    vertexAttrib3f(index: number, x: number, y: number, z: number): void {
        return;
    }
    vertexAttrib3fv(index: number, values: Float32List): void {
        return;
    }
    vertexAttrib4f(index: number, x: number, y: number, z: number, w: number): void {
        return;
    }
    vertexAttrib4fv(index: number, values: Float32List): void {
        return;
    }
    vertexAttribPointer(
        index: number,
        size: number,
        type: number,
        normalized: boolean,
        stride: number,
        offset: number
    ): void {
        return;
    }
    viewport(x: number, y: number, width: number, height: number): void {
        return;
    }
    ACTIVE_ATTRIBUTES!: number;
    ACTIVE_TEXTURE!: number;
    ACTIVE_UNIFORMS!: number;
    ALIASED_LINE_WIDTH_RANGE!: number;
    ALIASED_POINT_SIZE_RANGE!: number;
    ALPHA!: number;
    ALPHA_BITS!: number;
    ALWAYS!: number;
    ARRAY_BUFFER!: number;
    ARRAY_BUFFER_BINDING!: number;
    ATTACHED_SHADERS!: number;
    BACK!: number;
    BLEND!: number;
    BLEND_COLOR!: number;
    BLEND_DST_ALPHA!: number;
    BLEND_DST_RGB!: number;
    BLEND_EQUATION!: number;
    BLEND_EQUATION_ALPHA!: number;
    BLEND_EQUATION_RGB!: number;
    BLEND_SRC_ALPHA!: number;
    BLEND_SRC_RGB!: number;
    BLUE_BITS!: number;
    BOOL!: number;
    BOOL_VEC2!: number;
    BOOL_VEC3!: number;
    BOOL_VEC4!: number;
    BROWSER_DEFAULT_WEBGL!: number;
    BUFFER_SIZE!: number;
    BUFFER_USAGE!: number;
    BYTE!: number;
    CCW!: number;
    CLAMP_TO_EDGE!: number;
    COLOR_ATTACHMENT0!: number;
    COLOR_BUFFER_BIT!: number;
    COLOR_CLEAR_VALUE!: number;
    COLOR_WRITEMASK!: number;
    COMPILE_STATUS!: number;
    COMPRESSED_TEXTURE_FORMATS!: number;
    CONSTANT_ALPHA!: number;
    CONSTANT_COLOR!: number;
    CONTEXT_LOST_WEBGL!: number;
    CULL_FACE!: number;
    CULL_FACE_MODE!: number;
    CURRENT_PROGRAM!: number;
    CURRENT_VERTEX_ATTRIB!: number;
    CW!: number;
    DECR!: number;
    DECR_WRAP!: number;
    DELETE_STATUS!: number;
    DEPTH_ATTACHMENT!: number;
    DEPTH_BITS!: number;
    DEPTH_BUFFER_BIT!: number;
    DEPTH_CLEAR_VALUE!: number;
    DEPTH_COMPONENT!: number;
    DEPTH_COMPONENT16!: number;
    DEPTH_FUNC!: number;
    DEPTH_RANGE!: number;
    DEPTH_STENCIL!: number;
    DEPTH_STENCIL_ATTACHMENT!: number;
    DEPTH_TEST!: number;
    DEPTH_WRITEMASK!: number;
    DITHER!: number;
    DONT_CARE!: number;
    DST_ALPHA!: number;
    DST_COLOR!: number;
    DYNAMIC_DRAW!: number;
    ELEMENT_ARRAY_BUFFER!: number;
    ELEMENT_ARRAY_BUFFER_BINDING!: number;
    EQUAL!: number;
    FASTEST!: number;
    FLOAT!: number;
    FLOAT_MAT2!: number;
    FLOAT_MAT3!: number;
    FLOAT_MAT4!: number;
    FLOAT_VEC2!: number;
    FLOAT_VEC3!: number;
    FLOAT_VEC4!: number;
    FRAGMENT_SHADER!: number;
    FRAMEBUFFER!: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME!: number;
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE!: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE!: number;
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL!: number;
    FRAMEBUFFER_BINDING!: number;
    FRAMEBUFFER_COMPLETE!: number;
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT!: number;
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS!: number;
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT!: number;
    FRAMEBUFFER_UNSUPPORTED!: number;
    FRONT!: number;
    FRONT_AND_BACK!: number;
    FRONT_FACE!: number;
    FUNC_ADD!: number;
    FUNC_REVERSE_SUBTRACT!: number;
    FUNC_SUBTRACT!: number;
    GENERATE_MIPMAP_HINT!: number;
    GEQUAL!: number;
    GREATER!: number;
    GREEN_BITS!: number;
    HIGH_FLOAT!: number;
    HIGH_INT!: number;
    IMPLEMENTATION_COLOR_READ_FORMAT!: number;
    IMPLEMENTATION_COLOR_READ_TYPE!: number;
    INCR!: number;
    INCR_WRAP!: number;
    INT!: number;
    INT_VEC2!: number;
    INT_VEC3!: number;
    INT_VEC4!: number;
    INVALID_ENUM!: number;
    INVALID_FRAMEBUFFER_OPERATION!: number;
    INVALID_OPERATION!: number;
    INVALID_VALUE!: number;
    INVERT!: number;
    KEEP!: number;
    LEQUAL!: number;
    LESS!: number;
    LINEAR!: number;
    LINEAR_MIPMAP_LINEAR!: number;
    LINEAR_MIPMAP_NEAREST!: number;
    LINES!: number;
    LINE_LOOP!: number;
    LINE_STRIP!: number;
    LINE_WIDTH!: number;
    LINK_STATUS!: number;
    LOW_FLOAT!: number;
    LOW_INT!: number;
    LUMINANCE!: number;
    LUMINANCE_ALPHA!: number;
    MAX_COMBINED_TEXTURE_IMAGE_UNITS!: number;
    MAX_CUBE_MAP_TEXTURE_SIZE!: number;
    MAX_FRAGMENT_UNIFORM_VECTORS!: number;
    MAX_RENDERBUFFER_SIZE!: number;
    MAX_TEXTURE_IMAGE_UNITS!: number;
    MAX_TEXTURE_SIZE!: number;
    MAX_VARYING_VECTORS!: number;
    MAX_VERTEX_ATTRIBS!: number;
    MAX_VERTEX_TEXTURE_IMAGE_UNITS!: number;
    MAX_VERTEX_UNIFORM_VECTORS!: number;
    MAX_VIEWPORT_DIMS!: number;
    MEDIUM_FLOAT!: number;
    MEDIUM_INT!: number;
    MIRRORED_REPEAT!: number;
    NEAREST!: number;
    NEAREST_MIPMAP_LINEAR!: number;
    NEAREST_MIPMAP_NEAREST!: number;
    NEVER!: number;
    NICEST!: number;
    NONE!: number;
    NOTEQUAL!: number;
    NO_ERROR!: number;
    ONE!: number;
    ONE_MINUS_CONSTANT_ALPHA!: number;
    ONE_MINUS_CONSTANT_COLOR!: number;
    ONE_MINUS_DST_ALPHA!: number;
    ONE_MINUS_DST_COLOR!: number;
    ONE_MINUS_SRC_ALPHA!: number;
    ONE_MINUS_SRC_COLOR!: number;
    OUT_OF_MEMORY!: number;
    PACK_ALIGNMENT!: number;
    POINTS!: number;
    POLYGON_OFFSET_FACTOR!: number;
    POLYGON_OFFSET_FILL!: number;
    POLYGON_OFFSET_UNITS!: number;
    RED_BITS!: number;
    RENDERBUFFER!: number;
    RENDERBUFFER_ALPHA_SIZE!: number;
    RENDERBUFFER_BINDING!: number;
    RENDERBUFFER_BLUE_SIZE!: number;
    RENDERBUFFER_DEPTH_SIZE!: number;
    RENDERBUFFER_GREEN_SIZE!: number;
    RENDERBUFFER_HEIGHT!: number;
    RENDERBUFFER_INTERNAL_FORMAT!: number;
    RENDERBUFFER_RED_SIZE!: number;
    RENDERBUFFER_STENCIL_SIZE!: number;
    RENDERBUFFER_WIDTH!: number;
    RENDERER!: number;
    REPEAT!: number;
    REPLACE!: number;
    RGB!: number;
    RGB565!: number;
    RGB5_A1!: number;
    RGBA!: number;
    RGBA4!: number;
    SAMPLER_2D!: number;
    SAMPLER_CUBE!: number;
    SAMPLES!: number;
    SAMPLE_ALPHA_TO_COVERAGE!: number;
    SAMPLE_BUFFERS!: number;
    SAMPLE_COVERAGE!: number;
    SAMPLE_COVERAGE_INVERT!: number;
    SAMPLE_COVERAGE_VALUE!: number;
    SCISSOR_BOX!: number;
    SCISSOR_TEST!: number;
    SHADER_TYPE!: number;
    SHADING_LANGUAGE_VERSION!: number;
    SHORT!: number;
    SRC_ALPHA!: number;
    SRC_ALPHA_SATURATE!: number;
    SRC_COLOR!: number;
    STATIC_DRAW!: number;
    STENCIL_ATTACHMENT!: number;
    STENCIL_BACK_FAIL!: number;
    STENCIL_BACK_FUNC!: number;
    STENCIL_BACK_PASS_DEPTH_FAIL!: number;
    STENCIL_BACK_PASS_DEPTH_PASS!: number;
    STENCIL_BACK_REF!: number;
    STENCIL_BACK_VALUE_MASK!: number;
    STENCIL_BACK_WRITEMASK!: number;
    STENCIL_BITS!: number;
    STENCIL_BUFFER_BIT!: number;
    STENCIL_CLEAR_VALUE!: number;
    STENCIL_FAIL!: number;
    STENCIL_FUNC!: number;
    STENCIL_INDEX8!: number;
    STENCIL_PASS_DEPTH_FAIL!: number;
    STENCIL_PASS_DEPTH_PASS!: number;
    STENCIL_REF!: number;
    STENCIL_TEST!: number;
    STENCIL_VALUE_MASK!: number;
    STENCIL_WRITEMASK!: number;
    STREAM_DRAW!: number;
    SUBPIXEL_BITS!: number;
    TEXTURE!: number;
    TEXTURE0!: number;
    TEXTURE1!: number;
    TEXTURE10!: number;
    TEXTURE11!: number;
    TEXTURE12!: number;
    TEXTURE13!: number;
    TEXTURE14!: number;
    TEXTURE15!: number;
    TEXTURE16!: number;
    TEXTURE17!: number;
    TEXTURE18!: number;
    TEXTURE19!: number;
    TEXTURE2!: number;
    TEXTURE20!: number;
    TEXTURE21!: number;
    TEXTURE22!: number;
    TEXTURE23!: number;
    TEXTURE24!: number;
    TEXTURE25!: number;
    TEXTURE26!: number;
    TEXTURE27!: number;
    TEXTURE28!: number;
    TEXTURE29!: number;
    TEXTURE3!: number;
    TEXTURE30!: number;
    TEXTURE31!: number;
    TEXTURE4!: number;
    TEXTURE5!: number;
    TEXTURE6!: number;
    TEXTURE7!: number;
    TEXTURE8!: number;
    TEXTURE9!: number;
    TEXTURE_2D!: number;
    TEXTURE_BINDING_2D!: number;
    TEXTURE_BINDING_CUBE_MAP!: number;
    TEXTURE_CUBE_MAP!: number;
    TEXTURE_CUBE_MAP_NEGATIVE_X!: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Y!: number;
    TEXTURE_CUBE_MAP_NEGATIVE_Z!: number;
    TEXTURE_CUBE_MAP_POSITIVE_X!: number;
    TEXTURE_CUBE_MAP_POSITIVE_Y!: number;
    TEXTURE_CUBE_MAP_POSITIVE_Z!: number;
    TEXTURE_MAG_FILTER!: number;
    TEXTURE_MIN_FILTER!: number;
    TEXTURE_WRAP_S!: number;
    TEXTURE_WRAP_T!: number;
    TRIANGLES!: number;
    TRIANGLE_FAN!: number;
    TRIANGLE_STRIP!: number;
    UNPACK_ALIGNMENT!: number;
    UNPACK_COLORSPACE_CONVERSION_WEBGL!: number;
    UNPACK_FLIP_Y_WEBGL!: number;
    UNPACK_PREMULTIPLY_ALPHA_WEBGL!: number;
    UNSIGNED_BYTE!: number;
    UNSIGNED_INT!: number;
    UNSIGNED_SHORT!: number;
    UNSIGNED_SHORT_4_4_4_4!: number;
    UNSIGNED_SHORT_5_5_5_1!: number;
    UNSIGNED_SHORT_5_6_5!: number;
    VALIDATE_STATUS!: number;
    VENDOR!: number;
    VERSION!: number;
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING!: number;
    VERTEX_ATTRIB_ARRAY_ENABLED!: number;
    VERTEX_ATTRIB_ARRAY_NORMALIZED!: number;
    VERTEX_ATTRIB_ARRAY_POINTER!: number;
    VERTEX_ATTRIB_ARRAY_SIZE!: number;
    VERTEX_ATTRIB_ARRAY_STRIDE!: number;
    VERTEX_ATTRIB_ARRAY_TYPE!: number;
    VERTEX_SHADER!: number;
    VIEWPORT!: number;
    ZERO!: number;
}

export default FakeWebGL2RenderingContext;
