# Interface: IRenderable

Renderable represents something that can be rendered.
Contains information for rendering.

## Hierarchy

* [*IPoolable*](ipoolable.md)

  ↳ **IRenderable**

## Implemented by

* [*Renderable*](../classes/renderable.md)

## Table of contents

### Properties

- [camera](irenderable.md#camera)
- [drawMode](irenderable.md#drawmode)
- [material](irenderable.md#material)
- [modelMatrix](irenderable.md#modelmatrix)
- [objectInPool](irenderable.md#objectinpool)
- [vertices](irenderable.md#vertices)
- [zOrder](irenderable.md#zorder)

### Methods

- [Free](irenderable.md#free)
- [Recycle](irenderable.md#recycle)

## Properties

### camera

• **camera**: [*IEntity*](ientity.md)

The camera to draw the renderable to.

___

### drawMode

• **drawMode**: [*DrawMode*](../enums/drawmode.md)

The draw mode of the renderable, specifying how it will be rendered.

___

### material

• **material**: [*Material*](../classes/material.md)

The material of the object to render, containing render information
about texture and shaders.

___

### modelMatrix

• **modelMatrix**: [*Matrix4D*](../classes/matrix4d.md)

The model matrix (position, scale, rotation) of the object to render.

___

### objectInPool

• **objectInPool**: *boolean*

objectInPool is used to mark if the instance of the object is currently pooled.

Inherited from: [IPoolable](ipoolable.md).[objectInPool](ipoolable.md#objectinpool)

___

### vertices

• **vertices**: [*Polygon*](../classes/polygon.md)

The vertices of the object to render.

___

### zOrder

• **zOrder**: *number*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Inherited from: [IPoolable](ipoolable.md)

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

Inherited from: [IPoolable](ipoolable.md)
