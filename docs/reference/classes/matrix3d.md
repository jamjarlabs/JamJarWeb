# Class: Matrix3D

Matrix3D is the representation of a 3x3 matrix.
Used for transformations and applying transforms to shapes/objects.
Used mainly in collision detection.
Inspired by the glMatrix library:
https://github.com/toji/gl-matrix

## Hierarchy

* [*Pooled*](pooled.md)

  ↳ **Matrix3D**

## Implements

* [*IPoolable*](../interfaces/ipoolable.md)

## Table of contents

### Constructors

- [constructor](matrix3d.md#constructor)

### Properties

- [data](matrix3d.md#data)
- [objectInPool](matrix3d.md#objectinpool)
- [pools](matrix3d.md#pools)

### Methods

- [Blank](matrix3d.md#blank)
- [Free](matrix3d.md#free)
- [GetFloat32Array](matrix3d.md#getfloat32array)
- [Recycle](matrix3d.md#recycle)
- [Rotate](matrix3d.md#rotate)
- [RotateDeg](matrix3d.md#rotatedeg)
- [Scale](matrix3d.md#scale)
- [Set](matrix3d.md#set)
- [Translate](matrix3d.md#translate)
- [Free](matrix3d.md#free)
- [Init](matrix3d.md#init)
- [New](matrix3d.md#new)
- [free](matrix3d.md#free)
- [init](matrix3d.md#init)
- [new](matrix3d.md#new)

## Constructors

### constructor

\+ **new Matrix3D**(): [*Matrix3D*](matrix3d.md)

**Returns:** [*Matrix3D*](matrix3d.md)

Inherited from: [Pooled](pooled.md)

## Properties

### data

• **data**: *Float32Array*

___

### objectInPool

• **objectInPool**: *boolean*= false

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

Implementation of: [IPoolable](../interfaces/ipoolable.md).[objectInPool](../interfaces/ipoolable.md#objectinpool)

Inherited from: [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)

___

### pools

▪ `Protected` `Static` **pools**: *Map*<string, [*number*, [*IPoolable*](../interfaces/ipoolable.md)[]]\>

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

Inherited from: [Pooled](pooled.md).[pools](pooled.md#pools)

## Methods

### Blank

▸ **Blank**(): [*Matrix3D*](matrix3d.md)

**Returns:** [*Matrix3D*](matrix3d.md)

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IPoolable](../interfaces/ipoolable.md)

___

### GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

GetFloat32Array converts the matrix to a WebGL/glMatrix compatible Float32Array

**Returns:** *Float32Array*

The array representation of the matrix

___

### Recycle

▸ **Recycle**(): [*IPoolable*](../interfaces/ipoolable.md)

**Returns:** [*IPoolable*](../interfaces/ipoolable.md)

___

### Rotate

▸ **Rotate**(`angle`: *number*): [*Matrix3D*](matrix3d.md)

Rotate applies a radians rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`angle` | *number* | The angle in radians to rotate the matrix by    |

**Returns:** [*Matrix3D*](matrix3d.md)

___

### RotateDeg

▸ **RotateDeg**(`angle`: *number*): [*Matrix3D*](matrix3d.md)

RotateDeg applies a degrees rotation along the z axis to the matrix (clockwise).
This is an in-place transformation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`angle` | *number* | The angle in degrees to rotate the matrix by    |

**Returns:** [*Matrix3D*](matrix3d.md)

___

### Scale

▸ **Scale**(`scale`: [*Vector*](vector.md)): [*Matrix3D*](matrix3d.md)

Scale applies a scaling vector to the matrix.
This is an in-place transformation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scale` | [*Vector*](vector.md) | The vector scaling to apply to the matrix    |

**Returns:** [*Matrix3D*](matrix3d.md)

___

### Set

▸ **Set**(`values`: Matrix3DValues): [*Matrix3D*](matrix3d.md)

#### Parameters:

Name | Type |
:------ | :------ |
`values` | Matrix3DValues |

**Returns:** [*Matrix3D*](matrix3d.md)

___

### Translate

▸ **Translate**(`translation`: [*Vector*](vector.md)): [*Matrix3D*](matrix3d.md)

Translate applies a vector translation to the matrix.
This is an in-place transformation.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`translation` | [*Vector*](vector.md) | The vector transformation to apply to the matrix    |

**Returns:** [*Matrix3D*](matrix3d.md)

___

### Free

▸ `Static`**Free**(`obj`: [*Matrix3D*](matrix3d.md)): *void*

Free the provided Matrix4D.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | [*Matrix3D*](matrix3d.md) |

**Returns:** *void*

___

### Init

▸ `Static`**Init**(`size`: *number*): *void*

Initialize the Matrix4D pool to the size provided.

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *void*

___

### New

▸ `Static`**New**(): [*Matrix3D*](matrix3d.md)

Create a new Matrix4D, using pooling if available.

**Returns:** [*Matrix3D*](matrix3d.md)

___

### free

▸ `Protected` `Static`**free**(`poolKey`: *string*, `obj`: [*IPoolable*](../interfaces/ipoolable.md)): *void*

free is used to mark a provided object as free in the pool provided. This method can be called multiple times
with the same object, it will only add one entry to the pool.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`poolKey` | *string* | The key of the pool to add the object to.   |
`obj` | [*IPoolable*](../interfaces/ipoolable.md) | The object to add to the pool.    |

**Returns:** *void*

Inherited from: [Pooled](pooled.md)

___

### init

▸ `Protected` `Static`**init**(`poolKey`: *string*, `emptyGenerator`: () => [*IPoolable*](../interfaces/ipoolable.md), `size`: *number*): *void*

init is used to initialize an object pool to a certain size. This method takes a key of the pool to initialize,
an 'empty generator' which is a function that should return an empty/blank instance of the object being pooled
which can be overwritten at a later point, and the maximum size of the pool (which it will be initialized to
at the start using the empty generator).

#### Parameters:

Name | Type |
:------ | :------ |
`poolKey` | *string* |
`emptyGenerator` | () => [*IPoolable*](../interfaces/ipoolable.md) |
`size` | *number* |

**Returns:** *void*

Inherited from: [Pooled](pooled.md)

___

### new

▸ `Protected` `Static`**new**<T\>(`poolKey`: *string*, `type`: (...`args`: *any*) => T, ...`args`: *any*): T

new is used to request a new object from the pool specified, if the pool is unavailable or empty it will use
the type to provision a new object through a constructor.
This is a generic method, it includes a cast to the generic type provided - this cast can fail if the objects
returned from the pool are not the type expected.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*IPoolable*](../interfaces/ipoolable.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`poolKey` | *string* | The key of the pool to retrieve from.   |
`type` | (...`args`: *any*) => T | The fallback constructor to use if the pool is not initialized/empty.   |
`...args` | *any* | The args to use when creating/recycling the object.    |

**Returns:** T

Inherited from: [Pooled](pooled.md)
