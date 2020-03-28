
# Class: Renderable

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

___

###  material

• **material**: *[Material](material.md)*

___

###  modelMatrix

• **modelMatrix**: *Float32Array*

___

###  verticies

• **verticies**: *Float32Array*

___

###  zOrder

• **zOrder**: *number*
