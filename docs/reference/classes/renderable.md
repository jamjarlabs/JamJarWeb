
# Class: Renderable <**T**>

Renderable represents something that can be rendered.
Contains information for rendering.

## Type parameters

▪ **T**

## Hierarchy

* [Pooled](pooled.md)

  ↳ **Renderable**

## Implements

* [IRenderable](../interfaces/irenderable.md)

## Index

### Constructors

* [constructor](renderable.md#constructor)

### Properties

* [camera](renderable.md#optional-camera)
* [drawMode](renderable.md#drawmode)
* [material](renderable.md#material)
* [modelMatrix](renderable.md#modelmatrix)
* [objectInPool](renderable.md#objectinpool)
* [payload](renderable.md#optional-payload)
* [vertices](renderable.md#vertices)
* [zOrder](renderable.md#zorder)
* [POOL_KEY](renderable.md#static-private-pool_key)
* [pools](renderable.md#static-protected-pools)

### Methods

* [Free](renderable.md#free)
* [Recycle](renderable.md#recycle)
* [Free](renderable.md#static-free)
* [Init](renderable.md#static-init)
* [New](renderable.md#static-new)
* [free](renderable.md#static-protected-free)
* [init](renderable.md#static-protected-init)
* [new](renderable.md#static-protected-new)

## Constructors

###  constructor

\+ **new Renderable**(`zOrder`: number, `vertices`: [Polygon](polygon.md), `modelMatrix`: [Matrix4D](matrix4d.md), `material`: [Material](material.md), `drawMode`: [DrawMode](../enums/drawmode.md), `payload?`: T, `camera?`: [IEntity](../interfaces/ientity.md)): *[Renderable](renderable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`vertices` | [Polygon](polygon.md) |
`modelMatrix` | [Matrix4D](matrix4d.md) |
`material` | [Material](material.md) |
`drawMode` | [DrawMode](../enums/drawmode.md) |
`payload?` | T |
`camera?` | [IEntity](../interfaces/ientity.md) |

**Returns:** *[Renderable](renderable.md)*

## Properties

### `Optional` camera

• **camera**? : *[IEntity](../interfaces/ientity.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[camera](../interfaces/irenderable.md#optional-camera)*

Any camera to associate with the renderable, will only render on
the camera supplied.

___

###  drawMode

• **drawMode**: *[DrawMode](../enums/drawmode.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[drawMode](../interfaces/irenderable.md#drawmode)*

The draw mode of the renderable, specifying how it will be rendered.

___

###  material

• **material**: *[Material](material.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[material](../interfaces/irenderable.md#material)*

The material of the object to render, containing render information
about texture and shaders.

___

###  modelMatrix

• **modelMatrix**: *[Matrix4D](matrix4d.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[modelMatrix](../interfaces/irenderable.md#modelmatrix)*

The model matrix (position, scale, rotation) of the object to render.

___

###  objectInPool

• **objectInPool**: *boolean* = false

*Implementation of [IRenderable](../interfaces/irenderable.md).[objectInPool](../interfaces/irenderable.md#objectinpool)*

*Inherited from [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)*

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### `Optional` payload

• **payload**? : *T*

An optional payload of additional data.

___

###  vertices

• **vertices**: *[Polygon](polygon.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[vertices](../interfaces/irenderable.md#vertices)*

The vertices of the object to render.

___

###  zOrder

• **zOrder**: *number*

*Implementation of [IRenderable](../interfaces/irenderable.md).[zOrder](../interfaces/irenderable.md#zorder)*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.

___

### `Static` `Private` POOL_KEY

▪ **POOL_KEY**: *string* = "jamjar_renderable"

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

*Implementation of [IRenderable](../interfaces/irenderable.md)*

**Returns:** *void*

___

###  Recycle

▸ **Recycle**(`zOrder`: number, `vertices`: [Polygon](polygon.md), `modelMatrix`: [Matrix4D](matrix4d.md), `material`: [Material](material.md), `drawMode`: [DrawMode](../enums/drawmode.md), `payload?`: T, `camera?`: [IEntity](../interfaces/ientity.md)): *[Renderable](renderable.md)‹T›*

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`vertices` | [Polygon](polygon.md) |
`modelMatrix` | [Matrix4D](matrix4d.md) |
`material` | [Material](material.md) |
`drawMode` | [DrawMode](../enums/drawmode.md) |
`payload?` | T |
`camera?` | [IEntity](../interfaces/ientity.md) |

**Returns:** *[Renderable](renderable.md)‹T›*

___

### `Static` Free

▸ **Free**<**T**>(`obj`: [Renderable](renderable.md)‹T›): *void*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Renderable](renderable.md)‹T› |

**Returns:** *void*

___

### `Static` Init

▸ **Init**(`size`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

### `Static` New

▸ **New**<**T**>(`zOrder`: number, `vertices`: [Polygon](polygon.md), `modelMatrix`: [Matrix4D](matrix4d.md), `material`: [Material](material.md), `drawMode`: [DrawMode](../enums/drawmode.md), `payload?`: T, `camera?`: [IEntity](../interfaces/ientity.md)): *[Renderable](renderable.md)‹T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`vertices` | [Polygon](polygon.md) |
`modelMatrix` | [Matrix4D](matrix4d.md) |
`material` | [Material](material.md) |
`drawMode` | [DrawMode](../enums/drawmode.md) |
`payload?` | T |
`camera?` | [IEntity](../interfaces/ientity.md) |

**Returns:** *[Renderable](renderable.md)‹T›*

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
