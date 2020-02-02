
# Class: Motion

Motion is a component that represents an entity with motion values.
Holds info such as velocity, acceleration, angular velocity and angular acceleration.

## Hierarchy

* [Component](component.md)

  ↳ **Motion**

## Index

### Constructors

* [constructor](motion.md#constructor)

### Properties

* [acceleration](motion.md#acceleration)
* [angularAcceleration](motion.md#angularacceleration)
* [angularVelocity](motion.md#angularvelocity)
* [key](motion.md#key)
* [velocity](motion.md#velocity)
* [KEY](motion.md#static-key)
* [MESSAGE_ADD](motion.md#static-message_add)
* [MESSAGE_REMOVE](motion.md#static-message_remove)

## Constructors

###  constructor

\+ **new Motion**(`velocity`: [Vector](vector.md)‹›, `acceleration`: [Vector](vector.md)‹›, `angularVelocity`: number, `angularAcceleration`: number): *[Motion](motion.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`velocity` | [Vector](vector.md)‹› | new Vector(0,0) |
`acceleration` | [Vector](vector.md)‹› | new Vector(0,0) |
`angularVelocity` | number | 0 |
`angularAcceleration` | number | 0 |

**Returns:** *[Motion](motion.md)*

## Properties

###  acceleration

• **acceleration**: *[Vector](vector.md)*

___

###  angularAcceleration

• **angularAcceleration**: *number*

___

###  angularVelocity

• **angularVelocity**: *number*

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  velocity

• **velocity**: *[Vector](vector.md)*

___

### `Static` KEY

▪ **KEY**: *"motion"* = "motion"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
