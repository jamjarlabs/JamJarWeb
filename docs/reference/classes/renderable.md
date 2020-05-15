
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
* [drawMode](renderable.md#drawmode)
* [material](renderable.md#material)
* [modelMatrix](renderable.md#modelmatrix)
* [payload](renderable.md#optional-payload)
* [vertices](renderable.md#vertices)
* [zOrder](renderable.md#zorder)

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
