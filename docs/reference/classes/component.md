# Class: Component

Component is one of the key elements of the Entity-Component-System architecture.
A component is there to store data, logic shouldn't exist within
a component, apart from helper functions for retrieving
component data.
Each entity can only have 1 component of each type.

## Hierarchy

* **Component**

  ↳ [*FakeComponent*](fakecomponent.md)

  ↳ [*AudioSource*](audiosource.md)

  ↳ [*Camera*](camera.md)

  ↳ [*Collider*](collider.md)

  ↳ [*Motion*](motion.md)

  ↳ [*Primitive*](primitive.md)

  ↳ [*Script*](script.md)

  ↳ [*Sprite*](sprite.md)

  ↳ [*SpriteAnimator*](spriteanimator.md)

  ↳ [*Text*](text.md)

  ↳ [*Transform*](transform.md)

  ↳ [*UI*](ui.md)

## Implements

* [*IFreeable*](../interfaces/ifreeable.md)

## Table of contents

### Constructors

- [constructor](component.md#constructor)

### Properties

- [key](component.md#key)
- [MESSAGE\_ADD](component.md#message_add)
- [MESSAGE\_REMOVE](component.md#message_remove)

### Methods

- [Free](component.md#free)

## Constructors

### constructor

\+ **new Component**(`key`: *string*): [*Component*](component.md)

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** [*Component*](component.md)

## Properties

### key

• **key**: *string*

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IFreeable](../interfaces/ifreeable.md)
