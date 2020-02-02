
# Class: Component

Component is one of the key elements of the Entity-Component-System architecture.
A component is there to store data, logic shouldn't exist within
a component, apart from helper functions for retrieving
component data.
Each entity can only have 1 component of each type.

## Hierarchy

* **Component**

  ↳ [FakeComponent](_fake_component_.fakecomponent.md)

  ↳ [Camera](_standard_camera_camera_.camera.md)

  ↳ [Transform](_standard_transform_transform_.transform.md)

  ↳ [Collider](_standard_collision_collider_.collider.md)

  ↳ [Motion](_standard_motion_motion_.motion.md)

  ↳ [Sprite](_standard_sprite_sprite_.sprite.md)

## Index

### Constructors

* [constructor](_component_component_.component.md#constructor)

### Properties

* [key](_component_component_.component.md#key)
* [MESSAGE_ADD](_component_component_.component.md#static-message_add)
* [MESSAGE_REMOVE](_component_component_.component.md#static-message_remove)

## Constructors

###  constructor

\+ **new Component**(`key`: string): *[Component](_component_component_.component.md)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Component](_component_component_.component.md)*

## Properties

###  key

• **key**: *string*

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"
