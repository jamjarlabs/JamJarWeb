
# Class: Renderable <**T**>

Renderable represents something that can be rendered.
Contains information for rendering.

## Type parameters

▪ **T**

## Hierarchy

* **Renderable**

## Implements

* [IRenderable](../interfaces/irenderable.md)

## Index

### Constructors

* [constructor](renderable.md#constructor)

### Properties

* [camera](renderable.md#optional-camera)
* [material](renderable.md#material)
* [modelMatrix](renderable.md#modelmatrix)
* [payload](renderable.md#optional-payload)
* [verticies](renderable.md#verticies)
* [zOrder](renderable.md#zorder)

## Constructors

###  constructor

\+ **new Renderable**(`zOrder`: number, `verticies`: Float32Array, `modelMatrix`: Float32Array, `material`: [Material](material.md), `payload?`: T, `camera?`: [IEntity](../interfaces/ientity.md)): *[Renderable](renderable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`verticies` | Float32Array |
`modelMatrix` | Float32Array |
`material` | [Material](material.md) |
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

###  material

• **material**: *[Material](material.md)*

*Implementation of [IRenderable](../interfaces/irenderable.md).[material](../interfaces/irenderable.md#material)*

The material of the object to render, containing render information
about texture and shaders.

___

###  modelMatrix

• **modelMatrix**: *Float32Array*

*Implementation of [IRenderable](../interfaces/irenderable.md).[modelMatrix](../interfaces/irenderable.md#modelmatrix)*

The model matrix (position, scale, rotation) of the object to render,
represented as Float32Array for performance.

___

### `Optional` payload

• **payload**? : *T*

An optional payload of additional data.

___

###  verticies

• **verticies**: *Float32Array*

*Implementation of [IRenderable](../interfaces/irenderable.md).[verticies](../interfaces/irenderable.md#verticies)*

The vertices of the object to render,
represented as Float32Array for performance.

___

###  zOrder

• **zOrder**: *number*

*Implementation of [IRenderable](../interfaces/irenderable.md).[zOrder](../interfaces/irenderable.md#zorder)*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.
