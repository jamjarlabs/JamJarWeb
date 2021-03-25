# Class: Camera

Camera is a component that represents a game camera.
Holds camera information such as viewport info, aspect info and the background color.
In-game camera position should be managed in the transform.

## Hierarchy

* [*Component*](component.md)

  ↳ **Camera**

## Table of contents

### Constructors

- [constructor](camera.md#constructor)

### Properties

- [backgroundColor](camera.md#backgroundcolor)
- [key](camera.md#key)
- [viewportPosition](camera.md#viewportposition)
- [viewportScale](camera.md#viewportscale)
- [virtualScale](camera.md#virtualscale)
- [KEY](camera.md#key)
- [MESSAGE\_ADD](camera.md#message_add)
- [MESSAGE\_REMOVE](camera.md#message_remove)

### Methods

- [Free](camera.md#free)
- [GetProjectionMatrix](camera.md#getprojectionmatrix)

## Constructors

### constructor

\+ **new Camera**(`backgroundColor?`: [*Color*](color.md), `viewportPosition?`: [*Vector*](vector.md), `viewportScale?`: [*Vector*](vector.md), `virtualScale?`: [*Vector*](vector.md)): [*Camera*](camera.md)

#### Parameters:

Name | Type |
:------ | :------ |
`backgroundColor` | [*Color*](color.md) |
`viewportPosition` | [*Vector*](vector.md) |
`viewportScale` | [*Vector*](vector.md) |
`virtualScale` | [*Vector*](vector.md) |

**Returns:** [*Camera*](camera.md)

Inherited from: [Component](component.md)

## Properties

### backgroundColor

• **backgroundColor**: [*Color*](color.md)

Background colour for the camera when rendering.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### viewportPosition

• **viewportPosition**: [*Vector*](vector.md)

Position of the camera's viewport on the screen, with from
bottom left (-1, -1) to top right (1, 1) with (0, 0) as the center.

___

### viewportScale

• **viewportScale**: [*Vector*](vector.md)

Scale of the camera's viewport, relative to the canvas/rendering surface.
A viewport scale of (1, 1) would take up the entire canvas, while a scale
of (0.5, 0.5) would only take up half of the screen (width and height).

___

### virtualScale

• **virtualScale**: [*Vector*](vector.md)

The scale of the camera in terms of world space.
A virtual scale of (160, 90) would render 160 world space units wide and
90 world space units tall, centered on the camera's transform position.

___

### KEY

▪ `Readonly` `Static` **KEY**: *camera*= "camera"

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

Inherited from: [Component](component.md).[MESSAGE_ADD](component.md#message_add)

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

Inherited from: [Component](component.md).[MESSAGE_REMOVE](component.md#message_remove)

## Methods

### Free

▸ **Free**(): *void*

**Returns:** *void*

Overrides: [Component](component.md)

___

### GetProjectionMatrix

▸ **GetProjectionMatrix**(): [*Matrix4D*](matrix4d.md)

GetProjectionMatrix builds and returns an orthographic projection for use
in rendering, based on the virtual scale defined in the camera.

**Returns:** [*Matrix4D*](matrix4d.md)

The projection matrix
