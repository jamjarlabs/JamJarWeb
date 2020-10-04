
# Class: Pooled

Pooled is the base class for any object that needs to implement object pooling.
This base class keeps track of all object pools through static global memory, providing generic methods for
requesting objects from the pools, freeing memory up for the pools to use, and initializing the pools to a certain
size.
The pooled class also provides a required objectInPool variable to allow instances to be marked as available in the
pool, used to avoid duplicating objects in the same pool (multiple free calls on the same object).

## Hierarchy

* **Pooled**

  ↳ [Vector](vector.md)

  ↳ [Renderable](renderable.md)

  ↳ [TestPooledObject](testpooledobject.md)

## Index

### Properties

* [objectInPool](pooled.md#objectinpool)
* [pools](pooled.md#static-protected-pools)

### Methods

* [free](pooled.md#static-protected-free)
* [init](pooled.md#static-protected-init)
* [new](pooled.md#static-protected-new)

## Properties

###  objectInPool

• **objectInPool**: *boolean* = false

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### `Static` `Protected` pools

▪ **pools**: *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›* = new Map()

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

## Methods

### `Static` `Protected` free

▸ **free**(`poolKey`: string, `obj`: [IPoolable](../interfaces/ipoolable.md)): *void*

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
