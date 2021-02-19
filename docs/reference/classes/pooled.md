# Class: Pooled

Pooled is the base class for any object that needs to implement object pooling.
This base class keeps track of all object pools through static global memory, providing generic methods for
requesting objects from the pools, freeing memory up for the pools to use, and initializing the pools to a certain
size.
The pooled class also provides a required objectInPool variable to allow instances to be marked as available in the
pool, used to avoid duplicating objects in the same pool (multiple free calls on the same object).

## Hierarchy

* **Pooled**

  ↳ [*Matrix3D*](matrix3d.md)

  ↳ [*Matrix4D*](matrix4d.md)

  ↳ [*Vector*](vector.md)

  ↳ [*Message*](message.md)

  ↳ [*Renderable*](renderable.md)

## Table of contents

### Constructors

- [constructor](pooled.md#constructor)

### Properties

- [objectInPool](pooled.md#objectinpool)
- [pools](pooled.md#pools)

### Methods

- [free](pooled.md#free)
- [init](pooled.md#init)
- [new](pooled.md#new)

## Constructors

### constructor

\+ **new Pooled**(): [*Pooled*](pooled.md)

**Returns:** [*Pooled*](pooled.md)

## Properties

### objectInPool

• **objectInPool**: *boolean*= false

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### pools

▪ `Protected` `Static` **pools**: *Map*<string, [*number*, [*IPoolable*](../interfaces/ipoolable.md)[]]\>

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

## Methods

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
