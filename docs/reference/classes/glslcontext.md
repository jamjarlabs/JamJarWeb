
# Class: GLSLContext

GLSLContext contains all common information for a GLSLShader to use when supplying
variables to the GPU, such as uniforms, and attributes.

## Hierarchy

* **GLSLContext**

## Index

### Constructors

* [constructor](glslcontext.md#constructor)

### Properties

* [camera](glslcontext.md#camera)
* [gl](glslcontext.md#gl)
* [program](glslcontext.md#program)
* [transform](glslcontext.md#transform)

## Constructors

###  constructor

\+ **new GLSLContext**(`gl`: WebGL2RenderingContext, `program`: WebGLProgram, `camera`: [Camera](camera.md), `transform`: [Transform](transform.md)): *[GLSLContext](glslcontext.md)*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | WebGL2RenderingContext |
`program` | WebGLProgram |
`camera` | [Camera](camera.md) |
`transform` | [Transform](transform.md) |

**Returns:** *[GLSLContext](glslcontext.md)*

## Properties

###  camera

• **camera**: *[Camera](camera.md)*

The camera component of the camera entity being rendered to.

___

###  gl

• **gl**: *WebGL2RenderingContext*

WebGL rendering context.

___

###  program

• **program**: *WebGLProgram*

WebGL program being used that this shader is part of.

___

###  transform

• **transform**: *[Transform](transform.md)*

The transform component of the camera entity being rendered to.
