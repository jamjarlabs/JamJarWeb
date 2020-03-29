
# Class: Renderable

Renderable represents something that can be rendered.
Contains information for rendering.

## Hierarchy

* **Renderable**

## Index

### Constructors

* [constructor](renderable.md#constructor)

### Properties

* [camera](renderable.md#optional-camera)
* [material](renderable.md#material)
* [modelMatrix](renderable.md#modelmatrix)
* [verticies](renderable.md#verticies)
* [zOrder](renderable.md#zorder)

## Constructors

###  constructor

\+ **new Renderable**(`zOrder`: number, `verticies`: Float32Array, `modelMatrix`: Float32Array, `material`: [Material](material.md), `camera?`: [IEntity](../interfaces/ientity.md)): *[Renderable](renderable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`verticies` | Float32Array |
`modelMatrix` | Float32Array |
`material` | [Material](material.md) |
`camera?` | [IEntity](../interfaces/ientity.md) |

**Returns:** *[Renderable](renderable.md)*

## Properties

### `Optional` camera

• **camera**? : *[IEntity](../interfaces/ientity.md)*

Any camera to associate with the renderable, will only render on
the camera supplied.

___

###  material

• **material**: *[Material](material.md)*

The material of the object to render, containing render information
about texture and shaders.

___

###  modelMatrix

• **modelMatrix**: *Float32Array*

The model matrix (position, scale, rotation) of the object to render,
represented as Float32Array for performance.

___

###  verticies

• **verticies**: *Float32Array*

The vertices of the object to render,
represented as Float32Array for performance.

___

###  zOrder

• **zOrder**: *number*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.
