
# Class: Component

Component is one of the key elements of the Entity-Component-System architecture.
A component is there to store data, logic shouldn't exist within
a component, apart from helper functions for retrieving
component data.
Each entity can only have 1 component of each type.

## Hierarchy

* **Component**

  ↳ [FakeComponent](fakecomponent.md)

  ↳ [Camera](camera.md)

  ↳ [Transform](transform.md)

  ↳ [Collider](collider.md)

  ↳ [Motion](motion.md)

  ↳ [Sprite](sprite.md)

  ↳ [UI](ui.md)

  ↳ [Text](text.md)

## Index

### Constructors

* [constructor](component.md#constructor)

### Properties

* [key](component.md#key)
* [MESSAGE_ADD](component.md#static-message_add)
* [MESSAGE_REMOVE](component.md#static-message_remove)

## Constructors

###  constructor

\+ **new Component**(`key`: string): *[Component](component.md)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Component](component.md)*

## Properties

###  key

• **key**: *string*

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"
