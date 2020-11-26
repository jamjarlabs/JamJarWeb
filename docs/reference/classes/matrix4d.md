
# Class: Matrix4D

Matrix4D is the representation of a 4x4 matrix.
Used for transformations and applying transforms to shapes/objects.
Used mainly in the rendering pipeline, as GLSL works best with 4x4 matrices.
Inspired by the glMatrix library:
https://github.com/toji/gl-matrix

## Hierarchy

* **Matrix4D**

## Index

### Constructors

* [constructor](matrix4d.md#constructor)

### Properties

* [data](matrix4d.md#data)
* [Z_AXIS](matrix4d.md#static-private-z_axis)

### Methods

* [GetFloat32Array](matrix4d.md#getfloat32array)
* [Ortho](matrix4d.md#ortho)
* [Rotate](matrix4d.md#rotate)
* [RotateDeg](matrix4d.md#rotatedeg)
* [Scale](matrix4d.md#scale)
* [Set](matrix4d.md#set)
* [Translate](matrix4d.md#translate)

## Constructors

###  constructor

\+ **new Matrix4D**(): *[Matrix4D](matrix4d.md)*

**Returns:** *[Matrix4D](matrix4d.md)*

## Properties

###  data

• **data**: *Float32Array*

___

### `Static` `Private` Z_AXIS

▪ **Z_AXIS**: *Float32Array* = new Float32Array([0,0,1])

## Methods

###  GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the matrix

___

###  Ortho

▸ **Ortho**(`left`: number, `right`: number, `bottom`: number, `top`: number, `near`: number, `far`: number): *[Matrix4D](matrix4d.md)*

Sets the matrix to be an orthogonal projection matrix.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`left` | number | Left bound |
`right` | number | Right bound |
`bottom` | number | Bottom bound |
`top` | number | Top bound |
`near` | number | Near bound |
`far` | number | Far bound  |

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  Rotate

▸ **Rotate**(`angle`: number): *[Matrix4D](matrix4d.md)*

Rotate applies a radians rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in radians to rotate the matrix by  |

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  RotateDeg

▸ **RotateDeg**(`angle`: number): *[Matrix4D](matrix4d.md)*

RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in degrees to rotate the matrix by  |

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  Scale

▸ **Scale**(`scale`: [Vector](vector.md)): *[Matrix4D](matrix4d.md)*

Scale applies a scaling vector to the matrix. The Z part of the vector is assumed to be 0.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scale` | [Vector](vector.md) | The vector scaling to apply to the matrix  |

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  Set

▸ **Set**(`values`: [Matrix4DValues](../README.md#matrix4dvalues)): *[Matrix4D](matrix4d.md)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [Matrix4DValues](../README.md#matrix4dvalues) |

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  Translate

▸ **Translate**(`translation`: [Vector](vector.md)): *[Matrix4D](matrix4d.md)*

Translate applies a vector translation to the matrix. The Z part of the vector is assumed to be 0.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`translation` | [Vector](vector.md) | The vector transformation to apply to the matrix  |

**Returns:** *[Matrix4D](matrix4d.md)*
