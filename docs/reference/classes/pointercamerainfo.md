
# Class: PointerCameraInfo

PointerCameraInfo pointer information relevant to a camera.

## Hierarchy

* **PointerCameraInfo**

## Implements

* [IFreeable](../interfaces/ifreeable.md)

## Index

### Constructors

* [constructor](pointercamerainfo.md#constructor)

### Properties

* [camera](pointercamerainfo.md#camera)
* [cameraPosition](pointercamerainfo.md#cameraposition)
* [withinBounds](pointercamerainfo.md#withinbounds)
* [worldPosition](pointercamerainfo.md#worldposition)

### Methods

* [Free](pointercamerainfo.md#free)

## Constructors

###  constructor

\+ **new PointerCameraInfo**(`camera`: [IEntity](../interfaces/ientity.md), `cameraPosition`: [Vector](vector.md), `worldPosition`: [Vector](vector.md), `withinBounds`: boolean): *[PointerCameraInfo](pointercamerainfo.md)*

**Parameters:**

Name | Type |
------ | ------ |
`camera` | [IEntity](../interfaces/ientity.md) |
`cameraPosition` | [Vector](vector.md) |
`worldPosition` | [Vector](vector.md) |
`withinBounds` | boolean |

**Returns:** *[PointerCameraInfo](pointercamerainfo.md)*

## Properties

###  camera

• **camera**: *[IEntity](../interfaces/ientity.md)*

Entity of the camera.

___

###  cameraPosition

• **cameraPosition**: *[Vector](vector.md)*

Position of the pointer relative to the camera's viewport, from bottom left (-1, -1) to top right (1, 1).

___

###  withinBounds

• **withinBounds**: *boolean*

If the pointer is within the camera viewport.

___

###  worldPosition

• **worldPosition**: *[Vector](vector.md)*

Position in the world of the pointer using this camera.

## Methods

###  Free

▸ **Free**(): *void*

*Implementation of [IFreeable](../interfaces/ifreeable.md)*

**Returns:** *void*
