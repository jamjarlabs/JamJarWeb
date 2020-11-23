
# Class: Vector

Vector is the 2 dimensional representation of a vector, with two values (x,y).
This is a mutable data structure, operations on Vector objects will affect the original object.

## Hierarchy

* [Pooled](pooled.md)

  ↳ **Vector**

## Implements

* [IPoolable](../interfaces/ipoolable.md)

## Index

### Constructors

* [constructor](vector.md#constructor)

### Properties

* [data](vector.md#private-data)
* [objectInPool](vector.md#objectinpool)
* [POOL_KEY](vector.md#static-private-pool_key)
* [pools](vector.md#static-protected-pools)

### Accessors

* [x](vector.md#x)
* [y](vector.md#y)

### Methods

* [Add](vector.md#add)
* [Apply3D](vector.md#apply3d)
* [Apply4D](vector.md#apply4d)
* [Copy](vector.md#copy)
* [Dot](vector.md#dot)
* [Equals](vector.md#equals)
* [Free](vector.md#free)
* [Invert](vector.md#invert)
* [Magnitude](vector.md#magnitude)
* [Multiply](vector.md#multiply)
* [Normalize](vector.md#normalize)
* [Recycle](vector.md#recycle)
* [Rotate](vector.md#rotate)
* [RotateDeg](vector.md#rotatedeg)
* [Scale](vector.md#scale)
* [Sub](vector.md#sub)
* [Free](vector.md#static-free)
* [Init](vector.md#static-init)
* [New](vector.md#static-new)
* [free](vector.md#static-protected-free)
* [init](vector.md#static-protected-init)
* [new](vector.md#static-protected-new)

## Constructors

###  constructor

\+ **new Vector**(`x`: number, `y`: number): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vector](vector.md)*

## Properties

### `Private` data

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

▪ **POOL_KEY**: *string* = "jamjar_vector"

Value of the Vector object pool.

___

### `Static` `Protected` pools

▪ **pools**: *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›* = new Map()

*Inherited from [Pooled](pooled.md).[pools](pooled.md#static-protected-pools)*

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

## Accessors

###  x

• **get x**(): *number*

**Returns:** *number*

• **set x**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  y

• **get y**(): *number*

**Returns:** *number*

• **set y**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

## Methods

###  Add

▸ **Add**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Add adds two vectors together, result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to add to this one |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the addition

___

###  Apply3D

▸ **Apply3D**(`matrix`: [Matrix3D](matrix3d.md)): *[Vector](vector.md)*

Apply3D applies a 3x3 matrix to this vector, result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix3D](matrix3d.md) | Matrix to apply to this vector |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, Vector that has the matrix applied to it

___

###  Apply4D

▸ **Apply4D**(`matrix`: [Matrix4D](matrix4d.md)): *[Vector](vector.md)*

Apply4D applies a 4x4 matrix to this vector, result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix4D](matrix4d.md) | Matrix to apply to this vector |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, Vector that has the matrix applied to it

___

###  Copy

▸ **Copy**(): *[Vector](vector.md)*

Copy produces a copy of this vector and its values, rather than pointing to the same vector.

**Returns:** *[Vector](vector.md)*

The copy of this vector

___

###  Dot

▸ **Dot**(`vector`: [Vector](vector.md)): *number*

Dot calculates the dot product of two vectors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to dot with this vector |

**Returns:** *number*

The result of the dot product

___

###  Equals

▸ **Equals**(`other`: [Vector](vector.md)): *boolean*

Equals determines if another

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`other` | [Vector](vector.md) |   |

**Returns:** *boolean*

___

###  Free

▸ **Free**(): *void*

*Implementation of [IPoolable](../interfaces/ipoolable.md)*

**Returns:** *void*

___

###  Invert

▸ **Invert**(): *[Vector](vector.md)*

Invert flips the values of this vector, `x -> -x` and `y -> -y`, result saved to the original Vector and
returned.

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the inverting

___

###  Magnitude

▸ **Magnitude**(): *number*

Calculates magnitude of this vector.

**Returns:** *number*

The magnitude

___

###  Multiply

▸ **Multiply**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Multiply multiplies two vectors together, result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The matrix to multiply this one by |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the multiplication

___

###  Normalize

▸ **Normalize**(): *[Vector](vector.md)*

Returns a normalized version of this vector, result saved to the original Vector and returned.

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the normalized vector

___

###  Recycle

▸ **Recycle**(`args`: [number, number]): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`args` | [number, number] |

**Returns:** *[Vector](vector.md)*

___

###  Rotate

▸ **Rotate**(`center`: [Vector](vector.md), `angle`: number): *[Vector](vector.md)*

Rotate applies a rotation around a point to the vector in radians, result saved to the original Vector and
returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](vector.md) | The point to rotate around |
`angle` | number | The angle in radians to rotate by |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the rotation

___

###  RotateDeg

▸ **RotateDeg**(`center`: [Vector](vector.md), `angle`: number): *[Vector](vector.md)*

RotateDeg applies a rotation around a point to the vector in degrees, result saved to the original Vector and
returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](vector.md) | The point to rotate around |
`angle` | number | The angle in degrees to rotate by |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the rotation

___

###  Scale

▸ **Scale**(`scalar`: number): *[Vector](vector.md)*

Scale multiplies this vector by a scalar value (non-vector), result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scalar` | number | The scalar value to multiply this vector by |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result of the scaling

___

###  Sub

▸ **Sub**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Sub takes one vector from another, result saved to the original Vector and returned.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to subtract from this one |

**Returns:** *[Vector](vector.md)*

This vector to allow chaining, the result result of the subtraction

___

### `Static` Free

▸ **Free**(`obj`: [Vector](vector.md)): *void*

Free the provided vector.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Vector](vector.md) |

**Returns:** *void*

___

### `Static` Init

▸ **Init**(`size`: number): *void*

Initialize the Vector pool to the size provided.

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

### `Static` New

▸ **New**(`x`: number, `y`: number): *[Vector](vector.md)*

Create a Vector.New, using pooling if available.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vector](vector.md)*

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

▸ **new**<**T**>(`poolKey`: string, `type`: object, `args`: any[]): *T*

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

▪ **args**: *any[]*

The args to use when creating/recycling the object.

**Returns:** *T*
