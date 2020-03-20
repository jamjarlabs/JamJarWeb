
# Class: Pointer

Pointer describes a pointer event with additional information around cameras and position within
the element the game is running in.

## Hierarchy

* **Pointer**

## Index

### Constructors

* [constructor](pointer.md#constructor)

### Properties

* [cameraInfos](pointer.md#camerainfos)
* [elementPosition](pointer.md#elementposition)
* [event](pointer.md#event)

## Constructors

###  constructor

\+ **new Pointer**(`event`: PointerEvent, `elementPosition`: [Vector](vector.md), `cameraInfos`: [PointerCameraInfo](pointercamerainfo.md)[]): *[Pointer](pointer.md)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |
`elementPosition` | [Vector](vector.md) |
`cameraInfos` | [PointerCameraInfo](pointercamerainfo.md)[] |

**Returns:** *[Pointer](pointer.md)*

## Properties

###  cameraInfos

• **cameraInfos**: *[PointerCameraInfo](pointercamerainfo.md)[]*

Relevant camera information around the pointer event.

___

###  elementPosition

• **elementPosition**: *[Vector](vector.md)*

Position within the game HTML element, from bottom left (-1, -1) to top right (1, 1).

___

###  event

• **event**: *PointerEvent*

Standard PointerEvent dispatched from JS.
