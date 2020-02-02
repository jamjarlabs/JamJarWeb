
# Class: Camera

Camera is a component that represents a game camera.
Holds camera information such as viewport info, aspect info and the background color.
In-game camera position should be managed in the transform.

## Hierarchy

* [Component](component.md)

  ↳ **Camera**

## Index

### Constructors

* [constructor](camera.md#constructor)

### Properties

* [backgroundColor](camera.md#backgroundcolor)
* [key](camera.md#key)
* [viewportPosition](camera.md#viewportposition)
* [viewportScale](camera.md#viewportscale)
* [virtualScale](camera.md#virtualscale)
* [KEY](camera.md#static-key)
* [MESSAGE_ADD](camera.md#static-message_add)
* [MESSAGE_REMOVE](camera.md#static-message_remove)

### Methods

* [GetProjectionMatrix](camera.md#getprojectionmatrix)

## Constructors

###  constructor

\+ **new Camera**(`backgroundColor`: [Color](color.md), `viewportPosition`: [Vector](vector.md), `viewportScale`: [Vector](vector.md), `virtualScale`: [Vector](vector.md)): *[Camera](camera.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`backgroundColor` | [Color](color.md) | new Color(0,0,0,1) |
`viewportPosition` | [Vector](vector.md) | new Vector(0,0) |
`viewportScale` | [Vector](vector.md) | new Vector(1,1) |
`virtualScale` | [Vector](vector.md) | new Vector(160,90) |

**Returns:** *[Camera](camera.md)*

## Properties

###  backgroundColor

• **backgroundColor**: *[Color](color.md)*

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  viewportPosition

• **viewportPosition**: *[Vector](vector.md)*

___

###  viewportScale

• **viewportScale**: *[Vector](vector.md)*

___

###  virtualScale

• **virtualScale**: *[Vector](vector.md)*

___

### `Static` KEY

▪ **KEY**: *"camera"* = "camera"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*

## Methods

###  GetProjectionMatrix

▸ **GetProjectionMatrix**(): *[Matrix4D](matrix4d.md)*

GetProjectionMatrix builds and returns an orthographic projection for use
in rendering, based on the virtual scale defined in the camera.

**Returns:** *[Matrix4D](matrix4d.md)*

The projection matrix
