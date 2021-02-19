# Class: Vector

Vector is the 2 dimensional representation of a vector, with two values (x,y).
This is a mutable data structure, operations on Vector objects will affect the original object.

## Hierarchy

* [*Pooled*](pooled.md)

  ↳ **Vector**

## Implements

* [*IPoolable*](../interfaces/ipoolable.md)

## Table of contents

### Constructors

- [constructor](vector.md#constructor)

### Properties

- [data](vector.md#data)
- [debug](vector.md#debug)
- [objectInPool](vector.md#objectinpool)
- [pools](vector.md#pools)

### Accessors

- [x](vector.md#x)
- [y](vector.md#y)

### Methods

- [Add](vector.md#add)
- [Apply3D](vector.md#apply3d)
- [Apply4D](vector.md#apply4d)
- [Copy](vector.md#copy)
- [Dot](vector.md#dot)
- [Equals](vector.md#equals)
- [Free](vector.md#free)
- [Invert](vector.md#invert)
- [Magnitude](vector.md#magnitude)
- [Multiply](vector.md#multiply)
- [Normalize](vector.md#normalize)
- [Recycle](vector.md#recycle)
- [Rotate](vector.md#rotate)
- [RotateDeg](vector.md#rotatedeg)
- [Scale](vector.md#scale)
- [Sub](vector.md#sub)
- [Free](vector.md#free)
- [Init](vector.md#init)
- [New](vector.md#new)
- [free](vector.md#free)
- [init](vector.md#init)
- [new](vector.md#new)

## Constructors

### constructor

\+ **new Vector**(`x`: *number*, `y`: *number*): [*Vector*](vector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*Vector*](vector.md)

Inherited from: [Pooled](pooled.md)

## Properties

### data

• **data**: *Float32Array*

___

### debug

• **debug**: *string*= ""

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

## Accessors

### x

• get **x**(): *number*

**Returns:** *number*

• set **x**(`value`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |

**Returns:** *void*

___

### y

• get **y**(): *number*

**Returns:** *number*

• set **y**(`value`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |

**Returns:** *void*

## Methods

### Add

▸ **Add**(`vector`: [*Vector*](vector.md)): [*Vector*](vector.md)

Add adds two vectors together, result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vector` | [*Vector*](vector.md) | The vector to add to this one   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the addition

___

### Apply3D

▸ **Apply3D**(`matrix`: [*Matrix3D*](matrix3d.md)): [*Vector*](vector.md)

Apply3D applies a 3x3 matrix to this vector, result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`matrix` | [*Matrix3D*](matrix3d.md) | Matrix to apply to this vector   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, Vector that has the matrix applied to it

___

### Apply4D

▸ **Apply4D**(`matrix`: [*Matrix4D*](matrix4d.md)): [*Vector*](vector.md)

Apply4D applies a 4x4 matrix to this vector, result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`matrix` | [*Matrix4D*](matrix4d.md) | Matrix to apply to this vector   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, Vector that has the matrix applied to it

___

### Copy

▸ **Copy**(): [*Vector*](vector.md)

Copy produces a copy of this vector and its values, rather than pointing to the same vector.

**Returns:** [*Vector*](vector.md)

The copy of this vector

___

### Dot

▸ **Dot**(`vector`: [*Vector*](vector.md)): *number*

Dot calculates the dot product of two vectors.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vector` | [*Vector*](vector.md) | The vector to dot with this vector   |

**Returns:** *number*

The result of the dot product

___

### Equals

▸ **Equals**(`other`: [*Vector*](vector.md)): *boolean*

Equals determines if another

#### Parameters:

Name | Type |
:------ | :------ |
`other` | [*Vector*](vector.md) |

**Returns:** *boolean*

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IPoolable](../interfaces/ipoolable.md)

___

### Invert

▸ **Invert**(): [*Vector*](vector.md)

Invert flips the values of this vector, `x -> -x` and `y -> -y`, result saved to the original Vector and
returned.

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the inverting

___

### Magnitude

▸ **Magnitude**(): *number*

Calculates magnitude of this vector.

**Returns:** *number*

The magnitude

___

### Multiply

▸ **Multiply**(`vector`: [*Vector*](vector.md)): [*Vector*](vector.md)

Multiply multiplies two vectors together, result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vector` | [*Vector*](vector.md) | The matrix to multiply this one by   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the multiplication

___

### Normalize

▸ **Normalize**(): [*Vector*](vector.md)

Returns a normalized version of this vector, result saved to the original Vector and returned.

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the normalized vector

___

### Recycle

▸ **Recycle**(`x`: *number*, `y`: *number*): [*Vector*](vector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*Vector*](vector.md)

___

### Rotate

▸ **Rotate**(`center`: [*Vector*](vector.md), `angle`: *number*): [*Vector*](vector.md)

Rotate applies a rotation around a point to the vector in radians, result saved to the original Vector and
returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`center` | [*Vector*](vector.md) | The point to rotate around   |
`angle` | *number* | The angle in radians to rotate by   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the rotation

___

### RotateDeg

▸ **RotateDeg**(`center`: [*Vector*](vector.md), `angle`: *number*): [*Vector*](vector.md)

RotateDeg applies a rotation around a point to the vector in degrees, result saved to the original Vector and
returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`center` | [*Vector*](vector.md) | The point to rotate around   |
`angle` | *number* | The angle in degrees to rotate by   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the rotation

___

### Scale

▸ **Scale**(`scalar`: *number*): [*Vector*](vector.md)

Scale multiplies this vector by a scalar value (non-vector), result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`scalar` | *number* | The scalar value to multiply this vector by   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result of the scaling

___

### Sub

▸ **Sub**(`vector`: [*Vector*](vector.md)): [*Vector*](vector.md)

Sub takes one vector from another, result saved to the original Vector and returned.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`vector` | [*Vector*](vector.md) | The vector to subtract from this one   |

**Returns:** [*Vector*](vector.md)

This vector to allow chaining, the result result of the subtraction

___

### Free

▸ `Static`**Free**(`obj`: [*Vector*](vector.md)): *void*

Free the provided vector.

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | [*Vector*](vector.md) |

**Returns:** *void*

___

### Init

▸ `Static`**Init**(`size`: *number*): *void*

Initialize the Vector pool to the size provided.

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *void*

___

### New

▸ `Static`**New**(`x`: *number*, `y`: *number*): [*Vector*](vector.md)

Create a new Vector, using pooling if available.

#### Parameters:

Name | Type |
:------ | :------ |
`x` | *number* |
`y` | *number* |

**Returns:** [*Vector*](vector.md)

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
