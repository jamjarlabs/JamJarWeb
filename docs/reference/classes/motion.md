# Class: Motion

Motion is a component that represents an entity with motion values.
Holds info such as velocity, acceleration, angular velocity and angular acceleration.

## Hierarchy

* [*Component*](component.md)

  ↳ **Motion**

## Table of contents

### Constructors

- [constructor](motion.md#constructor)

### Properties

- [acceleration](motion.md#acceleration)
- [angularAcceleration](motion.md#angularacceleration)
- [angularVelocity](motion.md#angularvelocity)
- [key](motion.md#key)
- [velocity](motion.md#velocity)
- [KEY](motion.md#key)
- [MESSAGE\_ADD](motion.md#message_add)
- [MESSAGE\_REMOVE](motion.md#message_remove)

### Methods

- [Free](motion.md#free)

## Constructors

### constructor

\+ **new Motion**(`velocity?`: [*Vector*](vector.md), `acceleration?`: [*Vector*](vector.md), `angularVelocity?`: *number*, `angularAcceleration?`: *number*): [*Motion*](motion.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`velocity` | [*Vector*](vector.md) | - |
`acceleration` | [*Vector*](vector.md) | - |
`angularVelocity` | *number* | 0 |
`angularAcceleration` | *number* | 0 |

**Returns:** [*Motion*](motion.md)

Inherited from: [Component](component.md)

## Properties

### acceleration

• **acceleration**: [*Vector*](vector.md)

Acceleration of the entity.

___

### angularAcceleration

• **angularAcceleration**: *number*

Angular acceleration of the entity around the Z axis, scalar value.

___

### angularVelocity

• **angularVelocity**: *number*

Angular velocity of the entity around the Z axis, scalar value.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### velocity

• **velocity**: [*Vector*](vector.md)

Velocity of the entity.

___

### KEY

▪ `Readonly` `Static` **KEY**: *motion*= "motion"

Key of the motion component.

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
