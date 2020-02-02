
# Class: Transform

Transform is a component for storing positional information.
The transform holds position, scale and angle values.
Frequently used in rendering, collisions and physics.

## Hierarchy

* [Component](_component_component_.component.md)

  ↳ **Transform**

## Index

### Constructors

* [constructor](_standard_transform_transform_.transform.md#constructor)

### Properties

* [angle](_standard_transform_transform_.transform.md#angle)
* [key](_standard_transform_transform_.transform.md#key)
* [position](_standard_transform_transform_.transform.md#position)
* [previous](_standard_transform_transform_.transform.md#previous)
* [scale](_standard_transform_transform_.transform.md#scale)
* [KEY](_standard_transform_transform_.transform.md#static-key)
* [MESSAGE_ADD](_standard_transform_transform_.transform.md#static-message_add)
* [MESSAGE_REMOVE](_standard_transform_transform_.transform.md#static-message_remove)

### Methods

* [InterpolatedMatrix4D](_standard_transform_transform_.transform.md#interpolatedmatrix4d)
* [Matrix3D](_standard_transform_transform_.transform.md#matrix3d)
* [Matrix4D](_standard_transform_transform_.transform.md#matrix4d)

## Constructors

###  constructor

\+ **new Transform**(`position`: [Vector](_geometry_vector_.vector.md)‹›, `scale`: [Vector](_geometry_vector_.vector.md)‹›, `angle`: number): *[Transform](_standard_transform_transform_.transform.md)*

*Overrides [Component](_component_component_.component.md).[constructor](_component_component_.component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`position` | [Vector](_geometry_vector_.vector.md)‹› | new Vector(0,0) |
`scale` | [Vector](_geometry_vector_.vector.md)‹› | new Vector(1,1) |
`angle` | number | 0 |

**Returns:** *[Transform](_standard_transform_transform_.transform.md)*

## Properties

###  angle

• **angle**: *number*

___

###  key

• **key**: *string*

*Inherited from [Component](_component_component_.component.md).[key](_component_component_.component.md#key)*

___

###  position

• **position**: *[Vector](_geometry_vector_.vector.md)*

___

###  previous

• **previous**: *[Vector](_geometry_vector_.vector.md)*

___

###  scale

• **scale**: *[Vector](_geometry_vector_.vector.md)*

___

### `Static` KEY

▪ **KEY**: *"transform"* = "transform"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_ADD](_component_component_.component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)*

## Methods

###  InterpolatedMatrix4D

▸ **InterpolatedMatrix4D**(`alpha`: number): *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

InterpolatedMatrix4D returns a 4x4 matrix representation of the transform that has
applied its interpolation calculation between the previous frame's position and the
current transform position.
The interpolation is based on the alpha value provided, which is time since last
game tick.
Used in rendering and ensuring smooth motion between frames.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`alpha` | number | time since last game tick |

**Returns:** *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

Matrix of the interpolated transform.

___

###  Matrix3D

▸ **Matrix3D**(): *[Matrix3D](_geometry_matrix_3d_.matrix3d.md)*

Matrix3D returns a 3x3 matrix representation of the transform.

**Returns:** *[Matrix3D](_geometry_matrix_3d_.matrix3d.md)*

Matrix of transforms

___

###  Matrix4D

▸ **Matrix4D**(): *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

Matrix4D returns a 4x4 matrix representation of the transform.

**Returns:** *[Matrix4D](_geometry_matrix_4d_.matrix4d.md)*

Matrix of transforms
