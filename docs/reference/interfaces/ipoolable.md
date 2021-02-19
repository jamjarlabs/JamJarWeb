# Interface: IPoolable

IPoolable defines the required properties of an object that is able to be pooled using an object pool.

## Hierarchy

* [*IFreeable*](ifreeable.md)

  ↳ **IPoolable**

  ↳↳ [*IRenderable*](irenderable.md)

## Implemented by

* [*Matrix3D*](../classes/matrix3d.md)
* [*Matrix4D*](../classes/matrix4d.md)
* [*Message*](../classes/message.md)
* [*Vector*](../classes/vector.md)

## Table of contents

### Properties

- [objectInPool](ipoolable.md#objectinpool)

### Methods

- [Free](ipoolable.md#free)
- [Recycle](ipoolable.md#recycle)

## Properties

### objectInPool

• **objectInPool**: *boolean*

objectInPool is used to mark if the instance of the object is currently pooled.

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Inherited from: [IFreeable](ifreeable.md)

___

### Recycle

▸ **Recycle**(...`args`: *any*): [*IPoolable*](ipoolable.md)

Recycle is used to reuse an existing object instance, using the arguments provided - similar to a constructor,
but must be repeatable.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`...args` | *any* | The arguments to use when recycling the object instance    |

**Returns:** [*IPoolable*](ipoolable.md)
