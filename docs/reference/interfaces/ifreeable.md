
# Interface: IFreeable

IFreeable defines the contract for an object that either is poolable or contains poolable elements, allowing the
object to be freed/it's constituent parts freed back to object pools.

## Hierarchy

* **IFreeable**

  ↳ [IPoolable](ipoolable.md)

  ↳ [IShape](ishape.md)

## Implemented by

* [AudioSource](../classes/audiosource.md)
* [Camera](../classes/camera.md)
* [Collider](../classes/collider.md)
* [Component](../classes/component.md)
* [FakeComponent](../classes/fakecomponent.md)
* [Material](../classes/material.md)
* [Motion](../classes/motion.md)
* [Primitive](../classes/primitive.md)
* [Script](../classes/script.md)
* [Sprite](../classes/sprite.md)
* [SpriteAnimator](../classes/spriteanimator.md)
* [Text](../classes/text.md)
* [Texture](../classes/texture.md)
* [Transform](../classes/transform.md)
* [UI](../classes/ui.md)

## Index

### Methods

* [Free](ifreeable.md#free)

## Methods

###  Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*
