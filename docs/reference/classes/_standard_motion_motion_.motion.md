
# Class: Motion

Motion is a component that represents an entity with motion values.
Holds info such as velocity, acceleration, angular velocity and angular acceleration.

## Hierarchy

* [Component](_component_component_.component.md)

  ↳ **Motion**

## Index

### Constructors

* [constructor](_standard_motion_motion_.motion.md#constructor)

### Properties

* [acceleration](_standard_motion_motion_.motion.md#acceleration)
* [angularAcceleration](_standard_motion_motion_.motion.md#angularacceleration)
* [angularVelocity](_standard_motion_motion_.motion.md#angularvelocity)
* [key](_standard_motion_motion_.motion.md#key)
* [velocity](_standard_motion_motion_.motion.md#velocity)
* [KEY](_standard_motion_motion_.motion.md#static-key)
* [MESSAGE_ADD](_standard_motion_motion_.motion.md#static-message_add)
* [MESSAGE_REMOVE](_standard_motion_motion_.motion.md#static-message_remove)

## Constructors

###  constructor

\+ **new Motion**(`velocity`: [Vector](_geometry_vector_.vector.md)‹›, `acceleration`: [Vector](_geometry_vector_.vector.md)‹›, `angularVelocity`: number, `angularAcceleration`: number): *[Motion](_standard_motion_motion_.motion.md)*

*Overrides [Component](_component_component_.component.md).[constructor](_component_component_.component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`velocity` | [Vector](_geometry_vector_.vector.md)‹› | new Vector(0,0) |
`acceleration` | [Vector](_geometry_vector_.vector.md)‹› | new Vector(0,0) |
`angularVelocity` | number | 0 |
`angularAcceleration` | number | 0 |

**Returns:** *[Motion](_standard_motion_motion_.motion.md)*

## Properties

###  acceleration

• **acceleration**: *[Vector](_geometry_vector_.vector.md)*

___

###  angularAcceleration

• **angularAcceleration**: *number*

___

###  angularVelocity

• **angularVelocity**: *number*

___

###  key

• **key**: *string*

*Inherited from [Component](_component_component_.component.md).[key](_component_component_.component.md#key)*

___

###  velocity

• **velocity**: *[Vector](_geometry_vector_.vector.md)*

___

### `Static` KEY

▪ **KEY**: *"motion"* = "motion"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_ADD](_component_component_.component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](_component_component_.component.md).[MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)*
