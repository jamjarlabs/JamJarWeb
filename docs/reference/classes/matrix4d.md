
# Class: Matrix4D

Matrix4D is the representation of a 4x4 matrix.
Used for transformations and applying transforms to shapes/objects.
Used mainly in the rendering pipeline, as GLSL works best with 4x4 matrices.
Inspired by the glMatrix library:
https://github.com/toji/gl-matrix

## Hierarchy

* [Pooled](pooled.md)

  ↳ **Matrix4D**

## Implements

* [IPoolable](../interfaces/ipoolable.md)

## Index

### Constructors

* [constructor](matrix4d.md#constructor)

### Properties

* [data](matrix4d.md#data)
* [objectInPool](matrix4d.md#objectinpool)
* [POOL_KEY](matrix4d.md#static-private-pool_key)
* [Z_AXIS](matrix4d.md#static-private-z_axis)
* [pools](matrix4d.md#static-protected-pools)
* [vec3Tmp](matrix4d.md#static-private-vec3tmp)

### Methods

* [Blank](matrix4d.md#blank)
* [Free](matrix4d.md#free)
* [GetFloat32Array](matrix4d.md#getfloat32array)
* [Ortho](matrix4d.md#ortho)
* [Recycle](matrix4d.md#recycle)
* [Rotate](matrix4d.md#rotate)
* [RotateDeg](matrix4d.md#rotatedeg)
* [Scale](matrix4d.md#scale)
* [Set](matrix4d.md#set)
* [Translate](matrix4d.md#translate)
* [Free](matrix4d.md#static-free)
* [INIT_MATRIX4D](matrix4d.md#static-private-init_matrix4d)
* [Init](matrix4d.md#static-init)
* [New](matrix4d.md#static-new)
* [free](matrix4d.md#static-protected-free)
* [init](matrix4d.md#static-protected-init)
* [new](matrix4d.md#static-protected-new)

## Constructors

###  constructor

\+ **new Matrix4D**(): *[Matrix4D](matrix4d.md)*

**Returns:** *[Matrix4D](matrix4d.md)*

## Properties

###  data

• **data**: *Float32Array*

___

###  objectInPool

• **objectInPool**: *boolean* = false

*Implementation of [IPoolable](../interfaces/ipoolable.md).[objectInPool](../interfaces/ipoolable.md#objectinpool)*

*Inherited from [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)*

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### `Static` `Private` POOL_KEY

▪ **POOL_KEY**: *string* = "jamjar_matrix4d"

Value of the Matrix4D object pool.

___

### `Static` `Private` Z_AXIS

▪ **Z_AXIS**: *Float32Array* = new Float32Array([0, 0, 1])

___

### `Static` `Protected` pools

▪ **pools**: *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›* = new Map()

*Inherited from [Pooled](pooled.md).[pools](pooled.md#static-protected-pools)*

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

___

### `Static` `Private` vec3Tmp

▪ **vec3Tmp**: *Float32Array‹›* = new Float32Array(3)

## Methods

###  Blank

▸ **Blank**(): *[Matrix4D](matrix4d.md)*

**Returns:** *[Matrix4D](matrix4d.md)*

___

###  Free

▸ **Free**(): *void*

*Implementation of [IPoolable](../interfaces/ipoolable.md)*

**Returns:** *void*

___

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

###  Recycle

▸ **Recycle**(): *[IPoolable](../interfaces/ipoolable.md)*

**Returns:** *[IPoolable](../interfaces/ipoolable.md)*

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

___

### `Static` Free

▸ **Free**(`obj`: [Matrix4D](matrix4d.md)): *void*

Free the provided Matrix4D.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Matrix4D](matrix4d.md) |

**Returns:** *void*

___

### `Static` `Private` INIT_MATRIX4D

▸ **INIT_MATRIX4D**(): *[Matrix4D](matrix4d.md)‹›*

**Returns:** *[Matrix4D](matrix4d.md)‹›*

___

### `Static` Init

▸ **Init**(`size`: number): *void*

Initialize the Matrix4D pool to the size provided.

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

### `Static` New

▸ **New**(): *[Matrix4D](matrix4d.md)*

Create a new Matrix4D, using pooling if available.

**Returns:** *[Matrix4D](matrix4d.md)*

___

### `Static` `Protected` free

▸ **free**(`poolKey`: string, `obj`: [IPoolable](../interfaces/ipoolable.md)): *void*

*Inherited from [Pooled](pooled.md).[free](pooled.md#static-protected-free)*

free is used to mark a provided object as free in the pool provided. This method can be called multiple times
with the same object, it will only add one entry to the pool.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`poolKey` | string | The key of the pool to add the object to. |
`obj` | [IPoolable](../interfaces/ipoolable.md) | The object to add to the pool.  |

**Returns:** *void*

___

### `Static` `Protected` init

▸ **init**(`poolKey`: string, `emptyGenerator`: function, `size`: number): *void*

*Inherited from [Pooled](pooled.md).[init](pooled.md#static-protected-init)*

init is used to initialize an object pool to a certain size. This method takes a key of the pool to initialize,
an 'empty generator' which is a function that should return an empty/blank instance of the object being pooled
which can be overwritten at a later point, and the maximum size of the pool (which it will be initialized to
at the start using the empty generator).

**Parameters:**

▪ **poolKey**: *string*

▪ **emptyGenerator**: *function*

▸ (): *[IPoolable](../interfaces/ipoolable.md)*

▪ **size**: *number*

**Returns:** *void*

___

### `Static` `Protected` new

▸ **new**<**T**>(`poolKey`: string, `type`: object, ...`args`: any): *T*

*Inherited from [Pooled](pooled.md).[new](pooled.md#static-protected-new)*

new is used to request a new object from the pool specified, if the pool is unavailable or empty it will use
the type to provision a new object through a constructor.
This is a generic method, it includes a cast to the generic type provided - this cast can fail if the objects
returned from the pool are not the type expected.

**Type parameters:**

▪ **T**: *[IPoolable](../interfaces/ipoolable.md)*

**Parameters:**

▪ **poolKey**: *string*

The key of the pool to retrieve from.

▪ **type**: *object*

The fallback constructor to use if the pool is not initialized/empty.

Name | Type |
------ | ------ |
`constructor` |  |

▪... **args**: *any*

The args to use when creating/recycling the object.

**Returns:** *T*
