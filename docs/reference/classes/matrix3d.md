
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
* [Translate](matrix3d.md#translate)
* [Identity](matrix3d.md#static-identity)

## Constructors

###  constructor

\+ **new Matrix3D**(`values`: [Matrix3DValues](../README.md#matrix3dvalues)): *[Matrix3D](matrix3d.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`values` | [Matrix3DValues](../README.md#matrix3dvalues) | [
        [1,0,0],
        [0,1,0],
        [0,0,1],
    ] |

**Returns:** *[Matrix3D](matrix3d.md)*

## Properties

###  values

• **values**: *[Matrix3DValues](../README.md#matrix3dvalues)*

## Methods

###  GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the matrix

___

###  Rotate

▸ **Rotate**(`angle`: number): *void*

Rotate applies a radians rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in radians to rotate the matrix by  |

**Returns:** *void*

___

###  RotateDeg

▸ **RotateDeg**(`angle`: number): *void*

RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`angle` | number | The angle in degrees to rotate the matrix by  |

**Returns:** *void*

___

###  Scale

▸ **Scale**(`scale`: [Vector](vector.md)): *void*

Scale applies a scaling vector to the matrix.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scale` | [Vector](vector.md) | The vector scaling to apply to the matrix  |

**Returns:** *void*

___

###  Translate

▸ **Translate**(`translation`: [Vector](vector.md)): *void*

Translate applies a vector translation to the matrix.
This is an in-place transformation.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`translation` | [Vector](vector.md) | The vector transformation to apply to the matrix  |

**Returns:** *void*

___

### `Static` Identity

▸ **Identity**(): *[Matrix3D](matrix3d.md)*

Identity creates a new Matrix3D with an identity matrix configuration.

**Returns:** *[Matrix3D](matrix3d.md)*

Identity matrix
