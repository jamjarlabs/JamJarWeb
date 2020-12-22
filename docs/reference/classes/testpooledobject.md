
# Class: TestPooledObject

## Hierarchy

* [Pooled](pooled.md)

  ↳ **TestPooledObject**

## Index

### Constructors

* [constructor](testpooledobject.md#constructor)

### Properties

* [id](testpooledobject.md#id)
* [objectInPool](testpooledobject.md#objectinpool)
* [CURRENT_ID](testpooledobject.md#static-current_id)
* [POOL_KEY](testpooledobject.md#static-pool_key)
* [pools](testpooledobject.md#static-protected-pools)

### Methods

* [Free](testpooledobject.md#free)
* [Recycle](testpooledobject.md#recycle)
* [GetPools](testpooledobject.md#static-getpools)
* [SetPools](testpooledobject.md#static-setpools)
* [SimulateFree](testpooledobject.md#static-simulatefree)
* [SimulateInit](testpooledobject.md#static-simulateinit)
* [SimulateNew](testpooledobject.md#static-simulatenew)
* [free](testpooledobject.md#static-protected-free)
* [init](testpooledobject.md#static-protected-init)
* [new](testpooledobject.md#static-protected-new)

## Constructors

###  constructor

\+ **new TestPooledObject**(`id?`: undefined | number, `inPool`: boolean): *[TestPooledObject](testpooledobject.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id?` | undefined &#124; number | - |
`inPool` | boolean | false |

**Returns:** *[TestPooledObject](testpooledobject.md)*

## Properties

###  id

• **id**: *number*

___

###  objectInPool

• **objectInPool**: *boolean* = false

*Inherited from [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)*

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### `Static` CURRENT_ID

▪ **CURRENT_ID**: *number* = 0

___

### `Static` POOL_KEY

▪ **POOL_KEY**: *"test_pooled_object_pool"* = "test_pooled_object_pool"

___

### `Static` `Protected` pools

▪ **pools**: *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›* = new Map()

*Inherited from [Pooled](pooled.md).[pools](pooled.md#static-protected-pools)*

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

## Methods

###  Free

▸ **Free**(): *void*

**Returns:** *void*

___

###  Recycle

▸ **Recycle**(): *[TestPooledObject](testpooledobject.md)*

**Returns:** *[TestPooledObject](testpooledobject.md)*

___

### `Static` GetPools

▸ **GetPools**(): *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›*

**Returns:** *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›*

___

### `Static` SetPools

▸ **SetPools**(`pools`: Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›): *void*

**Parameters:**

Name | Type |
------ | ------ |
`pools` | Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]› |

**Returns:** *void*

___

### `Static` SimulateFree

▸ **SimulateFree**(`obj`: [TestPooledObject](testpooledobject.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [TestPooledObject](testpooledobject.md) |

**Returns:** *void*

___

### `Static` SimulateInit

▸ **SimulateInit**(`size`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

### `Static` SimulateNew

▸ **SimulateNew**(): *[TestPooledObject](testpooledobject.md)*

**Returns:** *[TestPooledObject](testpooledobject.md)*

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
