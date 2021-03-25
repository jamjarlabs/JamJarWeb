# Class: Transform

Transform is a component for storing positional information.
The transform holds position, scale and angle values.
Frequently used in rendering, collisions and physics.

## Hierarchy

* [*Component*](component.md)

  ↳ **Transform**

## Table of contents

### Constructors

- [constructor](transform.md#constructor)

### Properties

- [angle](transform.md#angle)
- [key](transform.md#key)
- [position](transform.md#position)
- [previous](transform.md#previous)
- [scale](transform.md#scale)
- [KEY](transform.md#key)
- [MESSAGE\_ADD](transform.md#message_add)
- [MESSAGE\_REMOVE](transform.md#message_remove)

### Methods

- [Free](transform.md#free)
- [InterpolatedMatrix4D](transform.md#interpolatedmatrix4d)
- [Matrix3D](transform.md#matrix3d)
- [Matrix4D](transform.md#matrix4d)

## Constructors

### constructor

\+ **new Transform**(`position?`: [*Vector*](vector.md), `scale?`: [*Vector*](vector.md), `angle?`: *number*): [*Transform*](transform.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`position` | [*Vector*](vector.md) | - |
`scale` | [*Vector*](vector.md) | - |
`angle` | *number* | 0 |

**Returns:** [*Transform*](transform.md)

Inherited from: [Component](component.md)

## Properties

### angle

• **angle**: *number*

Current transform angle in radians.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### position

• **position**: [*Vector*](vector.md)

Current transform position.

___

### previous

• **previous**: [*Vector*](vector.md)

Previous position of the transform, used in interpolation.

___

### scale

• **scale**: [*Vector*](vector.md)

Current transform scale.

___

### KEY

▪ `Readonly` `Static` **KEY**: *transform*= "transform"

Key of the transform component.

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

### InterpolatedMatrix4D

▸ **InterpolatedMatrix4D**(`alpha`: *number*): [*Matrix4D*](matrix4d.md)

InterpolatedMatrix4D returns a 4x4 matrix representation of the transform that has
applied its interpolation calculation between the previous frame's position and the
current transform position.
The interpolation is based on the alpha value provided, which is time since last
game tick.
Used in rendering and ensuring smooth motion between frames.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`alpha` | *number* | time since last game tick   |

**Returns:** [*Matrix4D*](matrix4d.md)

Matrix of the interpolated transform.

___

### Matrix3D

▸ **Matrix3D**(): [*Matrix3D*](matrix3d.md)

Matrix3D returns a 3x3 matrix representation of the transform.

**Returns:** [*Matrix3D*](matrix3d.md)

Matrix of transforms

___

### Matrix4D

▸ **Matrix4D**(): [*Matrix4D*](matrix4d.md)

Matrix4D returns a 4x4 matrix representation of the transform.

**Returns:** [*Matrix4D*](matrix4d.md)

Matrix of transforms
