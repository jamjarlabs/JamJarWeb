# Class: Renderable<T\>

Renderable represents something that can be rendered.
Contains information for rendering.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Pooled*](pooled.md)

  ↳ **Renderable**

## Implements

* [*IRenderable*](../interfaces/irenderable.md)

## Table of contents

### Constructors

- [constructor](renderable.md#constructor)

### Properties

- [camera](renderable.md#camera)
- [drawMode](renderable.md#drawmode)
- [material](renderable.md#material)
- [modelMatrix](renderable.md#modelmatrix)
- [objectInPool](renderable.md#objectinpool)
- [payload](renderable.md#payload)
- [vertices](renderable.md#vertices)
- [zOrder](renderable.md#zorder)
- [pools](renderable.md#pools)

### Methods

- [Free](renderable.md#free)
- [Recycle](renderable.md#recycle)
- [Free](renderable.md#free)
- [Init](renderable.md#init)
- [New](renderable.md#new)
- [free](renderable.md#free)
- [init](renderable.md#init)
- [new](renderable.md#new)

## Constructors

### constructor

\+ **new Renderable**<T\>(`zOrder`: *number*, `vertices`: [*Polygon*](polygon.md), `modelMatrix`: [*Matrix4D*](matrix4d.md), `material`: [*Material*](material.md), `drawMode`: [*DrawMode*](../enums/drawmode.md), `camera`: [*IEntity*](../interfaces/ientity.md), `payload?`: T): [*Renderable*](renderable.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`zOrder` | *number* |
`vertices` | [*Polygon*](polygon.md) |
`modelMatrix` | [*Matrix4D*](matrix4d.md) |
`material` | [*Material*](material.md) |
`drawMode` | [*DrawMode*](../enums/drawmode.md) |
`camera` | [*IEntity*](../interfaces/ientity.md) |
`payload?` | T |

**Returns:** [*Renderable*](renderable.md)<T\>

Inherited from: [Pooled](pooled.md)

## Properties

### camera

• **camera**: [*IEntity*](../interfaces/ientity.md)

The camera to draw the renderable to.

Implementation of: [IRenderable](../interfaces/irenderable.md).[camera](../interfaces/irenderable.md#camera)

___

### drawMode

• **drawMode**: [*DrawMode*](../enums/drawmode.md)

The draw mode of the renderable, specifying how it will be rendered.

Implementation of: [IRenderable](../interfaces/irenderable.md).[drawMode](../interfaces/irenderable.md#drawmode)

___

### material

• **material**: [*Material*](material.md)

The material of the object to render, containing render information
about texture and shaders.

Implementation of: [IRenderable](../interfaces/irenderable.md).[material](../interfaces/irenderable.md#material)

___

### modelMatrix

• **modelMatrix**: [*Matrix4D*](matrix4d.md)

The model matrix (position, scale, rotation) of the object to render.

Implementation of: [IRenderable](../interfaces/irenderable.md).[modelMatrix](../interfaces/irenderable.md#modelmatrix)

___

### objectInPool

• **objectInPool**: *boolean*= false

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

Implementation of: [IRenderable](../interfaces/irenderable.md).[objectInPool](../interfaces/irenderable.md#objectinpool)

Inherited from: [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)

___

### payload

• `Optional` **payload**: *undefined* \| T

An optional payload of additional data.

___

### vertices

• **vertices**: [*Polygon*](polygon.md)

The vertices of the object to render.

Implementation of: [IRenderable](../interfaces/irenderable.md).[vertices](../interfaces/irenderable.md#vertices)

___

### zOrder

• **zOrder**: *number*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.

Implementation of: [IRenderable](../interfaces/irenderable.md).[zOrder](../interfaces/irenderable.md#zorder)

___

### pools

▪ `Protected` `Static` **pools**: *Map*<string, [*number*, [*IPoolable*](../interfaces/ipoolable.md)[]]\>

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

Inherited from: [Pooled](pooled.md).[pools](pooled.md#pools)

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IRenderable](../interfaces/irenderable.md)

___

### Recycle

▸ **Recycle**(`zOrder`: *number*, `vertices`: [*Polygon*](polygon.md), `modelMatrix`: [*Matrix4D*](matrix4d.md), `material`: [*Material*](material.md), `drawMode`: [*DrawMode*](../enums/drawmode.md), `camera`: [*IEntity*](../interfaces/ientity.md), `payload`: T): [*Renderable*](renderable.md)<T\>

#### Parameters:

Name | Type |
:------ | :------ |
`zOrder` | *number* |
`vertices` | [*Polygon*](polygon.md) |
`modelMatrix` | [*Matrix4D*](matrix4d.md) |
`material` | [*Material*](material.md) |
`drawMode` | [*DrawMode*](../enums/drawmode.md) |
`camera` | [*IEntity*](../interfaces/ientity.md) |
`payload` | T |

**Returns:** [*Renderable*](renderable.md)<T\>

___

### Free

▸ `Static`**Free**<T\>(`obj`: [*Renderable*](renderable.md)<T\>): *void*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | [*Renderable*](renderable.md)<T\> |

**Returns:** *void*

___

### Init

▸ `Static`**Init**(`size`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *void*

___

### New

▸ `Static`**New**<T\>(`zOrder`: *number*, `vertices`: [*Polygon*](polygon.md), `modelMatrix`: [*Matrix4D*](matrix4d.md), `material`: [*Material*](material.md), `drawMode`: [*DrawMode*](../enums/drawmode.md), `camera`: [*IEntity*](../interfaces/ientity.md), `payload?`: T): [*Renderable*](renderable.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`zOrder` | *number* |
`vertices` | [*Polygon*](polygon.md) |
`modelMatrix` | [*Matrix4D*](matrix4d.md) |
`material` | [*Material*](material.md) |
`drawMode` | [*DrawMode*](../enums/drawmode.md) |
`camera` | [*IEntity*](../interfaces/ientity.md) |
`payload?` | T |

**Returns:** [*Renderable*](renderable.md)<T\>

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
