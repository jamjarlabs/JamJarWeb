# Interface: IFreeable

IFreeable defines the contract for an object that either is poolable or contains poolable elements, allowing the
object to be freed/it's constituent parts freed back to object pools.

## Hierarchy

* **IFreeable**

  ↳ [*IMessage*](imessage.md)

  ↳ [*IShape*](ishape.md)

  ↳ [*IPoolable*](ipoolable.md)

## Implemented by

* [*Component*](../classes/component.md)
* [*Material*](../classes/material.md)
* [*Pointer*](../classes/pointer.md)
* [*PointerCameraInfo*](../classes/pointercamerainfo.md)
* [*Texture*](../classes/texture.md)

## Table of contents

### Methods

- [Free](ifreeable.md#free)

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*
