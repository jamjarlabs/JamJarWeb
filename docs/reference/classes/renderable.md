
# Class: Renderable

## Hierarchy

* **Renderable**

## Index

### Constructors

* [constructor](renderable.md#constructor)

### Properties

* [camera](renderable.md#optional-camera)
* [color](renderable.md#color)
* [modelMatrix](renderable.md#modelmatrix)
* [texture](renderable.md#optional-texture)
* [verticies](renderable.md#verticies)
* [zOrder](renderable.md#zorder)

## Constructors

###  constructor

\+ **new Renderable**(`zOrder`: number, `verticies`: Float32Array, `modelMatrix`: Float32Array, `color`: [Color](color.md), `camera?`: [IEntity](../interfaces/ientity.md), `texture?`: [Texture](texture.md)): *[Renderable](renderable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`zOrder` | number |
`verticies` | Float32Array |
`modelMatrix` | Float32Array |
`color` | [Color](color.md) |
`camera?` | [IEntity](../interfaces/ientity.md) |
`texture?` | [Texture](texture.md) |

**Returns:** *[Renderable](renderable.md)*

## Properties

### `Optional` camera

• **camera**? : *[IEntity](../interfaces/ientity.md)*

___

###  color

• **color**: *[Color](color.md)*

___

###  modelMatrix

• **modelMatrix**: *Float32Array*

___

### `Optional` texture

• **texture**? : *[Texture](texture.md)*

___

###  verticies

• **verticies**: *Float32Array*

___

###  zOrder

• **zOrder**: *number*
