
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
* [material](irenderable.md#material)
* [modelMatrix](irenderable.md#modelmatrix)
* [verticies](irenderable.md#verticies)
* [zOrder](irenderable.md#zorder)

## Properties

### `Optional` camera

• **camera**? : *[IEntity](ientity.md)*

Any camera to associate with the renderable, will only render on
the camera supplied.

___

###  material

• **material**: *[Material](../classes/material.md)*

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
