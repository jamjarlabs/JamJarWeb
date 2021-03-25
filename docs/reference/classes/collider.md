# Class: Collider

Collider is a component that defines a shape for detecting collisions
with other Colliders.

## Hierarchy

* [*Component*](component.md)

  ↳ **Collider**

## Table of contents

### Constructors

- [constructor](collider.md#constructor)

### Properties

- [currentlyCollidingWith](collider.md#currentlycollidingwith)
- [enterScript](collider.md#enterscript)
- [exitScript](collider.md#exitscript)
- [key](collider.md#key)
- [shape](collider.md#shape)
- [KEY](collider.md#key)
- [MESSAGE\_ADD](collider.md#message_add)
- [MESSAGE\_REMOVE](collider.md#message_remove)

### Methods

- [Free](collider.md#free)

## Constructors

### constructor

\+ **new Collider**(`shape`: [*IShape*](../interfaces/ishape.md), `enterScript?`: *string*, `exitScript?`: *string*, `currentlyCollidingWith?`: [*IEntity*](../interfaces/ientity.md)[]): [*Collider*](collider.md)

#### Parameters:

Name | Type |
:------ | :------ |
`shape` | [*IShape*](../interfaces/ishape.md) |
`enterScript?` | *string* |
`exitScript?` | *string* |
`currentlyCollidingWith` | [*IEntity*](../interfaces/ientity.md)[] |

**Returns:** [*Collider*](collider.md)

Inherited from: [Component](component.md)

## Properties

### currentlyCollidingWith

• **currentlyCollidingWith**: [*IEntity*](../interfaces/ientity.md)[]

___

### enterScript

• `Optional` **enterScript**: *undefined* \| *string*

___

### exitScript

• `Optional` **exitScript**: *undefined* \| *string*

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### shape

• **shape**: [*IShape*](../interfaces/ishape.md)

___

### KEY

▪ `Readonly` `Static` **KEY**: *collider*= "collider"

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
