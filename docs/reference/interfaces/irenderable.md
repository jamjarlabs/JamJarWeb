
# Interface: IRenderable

Renderable represents something that can be rendered.
Contains information for rendering.

## Hierarchy

* **IRenderable**

## Implemented by

* [Renderable](../classes/renderable.md)

## Index

### Properties

* [camera](irenderable.md#optional-camera)
* [drawMode](irenderable.md#drawmode)
* [material](irenderable.md#material)
* [modelMatrix](irenderable.md#modelmatrix)
* [vertices](irenderable.md#vertices)
* [zOrder](irenderable.md#zorder)

## Properties

### `Optional` camera

• **camera**? : *[IEntity](ientity.md)*

Any camera to associate with the renderable, will only render on
the camera supplied.

___

###  drawMode

• **drawMode**: *[DrawMode](../enums/drawmode.md)*

The draw mode of the renderable, specifying how it will be rendered.

___

###  material

• **material**: *[Material](../classes/material.md)*

The material of the object to render, containing render information
about texture and shaders.

___

###  modelMatrix

• **modelMatrix**: *[Matrix4D](../classes/matrix4d.md)*

The model matrix (position, scale, rotation) of the object to render.

___

###  vertices

• **vertices**: *[Polygon](../classes/polygon.md)*

The vertices of the object to render.

___

###  zOrder

• **zOrder**: *number*

The Z-Order of the object, the order at which the object will appear
infront or behind other objects. A higher Z-Order means in front, a
lower Z-Order means behind.
