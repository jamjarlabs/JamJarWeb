
# Class: UI

UI is a component for marking an entity as part of the UI,
this changes how it is rendered, and how any transform
attached to it is interpreted. When attached will cause
the entity and the sprite it has to be rendered relative
to the camera, rather than in world space.

## Hierarchy

* [Component](component.md)

  ↳ **UI**

## Index

### Constructors

* [constructor](ui.md#constructor)

### Properties

* [camera](ui.md#camera)
* [key](ui.md#key)
* [KEY](ui.md#static-key)
* [MESSAGE_ADD](ui.md#static-message_add)
* [MESSAGE_REMOVE](ui.md#static-message_remove)

## Constructors

###  constructor

\+ **new UI**(`camera`: [IEntity](../interfaces/ientity.md)): *[UI](ui.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`camera` | [IEntity](../interfaces/ientity.md) |

**Returns:** *[UI](ui.md)*

## Properties

###  camera

• **camera**: *[IEntity](../interfaces/ientity.md)*

Entity of the camera to render this UI element on.

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

### `Static` KEY

▪ **KEY**: *"ui"* = "ui"

Key of the UI component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
