
# Class: Camera

Camera is a component that represents a game camera.
Holds camera information such as viewport info, aspect info and the background color.
In-game camera position should be managed in the transform.

## Hierarchy

* [Component](_component_component_.component.md)

  ↳ **Camera**

## Index

### Constructors

* [constructor](_standard_camera_camera_.camera.md#constructor)

### Properties

* [backgroundColor](_standard_camera_camera_.camera.md#backgroundcolor)
* [key](_standard_camera_camera_.camera.md#key)
* [viewportPosition](_standard_camera_camera_.camera.md#viewportposition)
* [viewportScale](_standard_camera_camera_.camera.md#viewportscale)
* [virtualScale](_standard_camera_camera_.camera.md#virtualscale)
* [KEY](_standard_camera_camera_.camera.md#static-key)
* [MESSAGE_ADD](_standard_camera_camera_.camera.md#static-message_add)
* [MESSAGE_REMOVE](_standard_camera_camera_.camera.md#static-message_remove)

### Methods

* [GetProjectionMatrix](_standard_camera_camera_.camera.md#getprojectionmatrix)

## Constructors

###  constructor

\+ **new Camera**(`backgroundColor`: [Color](_rendering_color_.color.md), `viewportPosition`: [Vector](_geometry_vector_.vector.md), `viewportScale`: [Vector](_geometry_vector_.vector.md), `virtualScale`: [Vector](_geometry_vector_.vector.md)): *[Camera](_standard_camera_camera_.camera.md)*

*Overrides [Component](_component_component_.component.md).[constructor](_component_component_.component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`backgroundColor` | [Color](_rendering_color_.color.md) | new Color(0,0,0,1) |
`viewportPosition` | [Vector](_geometry_vector_.vector.md) | new Vector(0,0) |
`viewportScale` | [Vector](_geometry_vector_.vector.md) | new Vector(1,1) |
`virtualScale` | [Vector](_geometry_vector_.vector.md) | new Vector(160,90) |

**Returns:** *[Camera](_standard_camera_camera_.camera.md)*

## Properties

###  backgroundColor

• **backgroundColor**: *[Color](_rendering_color_.color.md)*

___

###  key

• **key**: *string*

*Inherited from [Component](_component_component_.component.md).[key](_component_component_.component.md#key)*

___

###  viewportPosition

• **viewportPosition**: *[Vector](_geometry_vector_.vector.md)*

___

###  viewportScale

• **viewportScale**: *[Vector](_geometry_vector_.vector.md)*

___

###  virtualScale

• **virtualScale**: *[Vector](_geometry_vector_.vector.md)*

___

### `Static` KEY

▪ **KEY**: *"camera"* = "camera"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_ADD](_component_component_.component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)*

## Methods

###  GetProjectionMatrix

▸ **GetProjectionMatrix**(): *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

GetProjectionMatrix builds and returns an orthographic projection for use
in rendering, based on the virtual scale defined in the camera.

**Returns:** *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

The projection matrix
