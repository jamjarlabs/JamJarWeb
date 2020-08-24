
# Class: Matrix3D

Matrix3D is the representation of a 3x3 matrix.
Used for transformations and applying transforms to shapes/objects.
Used mainly in collision detection.
Inspired by the glMatrix library:
https://github.com/toji/gl-matrix

## Hierarchy

* **Matrix3D**

## Index

### Constructors

* [constructor](matrix3d.md#constructor)

### Properties

* [values](matrix3d.md#values)

### Methods

* [GetFloat32Array](matrix3d.md#getfloat32array)
* [Rotate](matrix3d.md#rotate)
* [RotateDeg](matrix3d.md#rotatedeg)
* [Scale](matrix3d.md#scale)
* [Set](matrix3d.md#set)
* [Translate](matrix3d.md#translate)

## Constructors

###  constructor

\+ **new Matrix3D**(): *[Matrix3D](matrix3d.md)*

**Returns:** *[Matrix3D](matrix3d.md)*

## Properties

###  values

• **values**: *Float32Array*

## Methods

###  GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the matrix

___

###  Rotate

▸ **Rotate**(`angle`: number): *[Matrix3D](matrix3d.md)*

Rotate applies a radians rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in radians to rotate the matrix by  |

**Returns:** *[Matrix3D](matrix3d.md)*

___

###  RotateDeg

▸ **RotateDeg**(`angle`: number): *[Matrix3D](matrix3d.md)*

RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in degrees to rotate the matrix by  |

**Returns:** *[Matrix3D](matrix3d.md)*

___

###  Scale

▸ **Scale**(`scale`: [Vector](vector.md)): *[Matrix3D](matrix3d.md)*

Scale applies a scaling vector to the matrix.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scale` | [Vector](vector.md) | The vector scaling to apply to the matrix  |

**Returns:** *[Matrix3D](matrix3d.md)*

___

###  Set

▸ **Set**(`values`: [Matrix3DValues](../README.md#matrix3dvalues)): *[Matrix3D](matrix3d.md)*

**Parameters:**

Name | Type |
------ | ------ |
`values` | [Matrix3DValues](../README.md#matrix3dvalues) |

**Returns:** *[Matrix3D](matrix3d.md)*

___

###  Translate

▸ **Translate**(`translation`: [Vector](vector.md)): *[Matrix3D](matrix3d.md)*

Translate applies a vector translation to the matrix.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`translation` | [Vector](vector.md) | The vector transformation to apply to the matrix  |

**Returns:** *[Matrix3D](matrix3d.md)*
