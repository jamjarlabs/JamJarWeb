
# Interface: IPoolable

IPoolable defines the required properties of an object that is able to be pooled using an object pool.

## Hierarchy

* [IFreeable](ifreeable.md)

  ↳ **IPoolable**

  ↳ [IRenderable](irenderable.md)

## Implemented by

* [Vector](../classes/vector.md)

## Index

### Properties

* [objectInPool](ipoolable.md#objectinpool)

### Methods

* [Free](ipoolable.md#free)
* [Recycle](ipoolable.md#recycle)

## Properties

###  objectInPool

• **objectInPool**: *boolean*

objectInPool is used to mark if the instance of the object is currently pooled.

## Methods

###  Free

▸ **Free**(): *void*

*Inherited from [IFreeable](ifreeable.md).[Free](ifreeable.md#free)*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

___

###  Recycle

▸ **Recycle**(...`args`: any): *[IPoolable](ipoolable.md)*

Recycle is used to reuse an existing object instance, using the arguments provided - similar to a constructor,
but must be repeatable.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...args` | any | The arguments to use when recycling the object instance  |

**Returns:** *[IPoolable](ipoolable.md)*
