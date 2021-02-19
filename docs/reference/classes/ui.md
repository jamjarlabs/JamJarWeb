# Class: UI

UI is a component for marking an entity as part of the UI,
this changes how it is rendered, and how any transform
attached to it is interpreted. When attached will cause
the entity to be rendered relative to the camera, rather
than in world space.

## Hierarchy

* [*Component*](component.md)

  ↳ **UI**

## Table of contents

### Constructors

- [constructor](ui.md#constructor)

### Properties

- [camera](ui.md#camera)
- [key](ui.md#key)
- [KEY](ui.md#key)
- [MESSAGE\_ADD](ui.md#message_add)
- [MESSAGE\_REMOVE](ui.md#message_remove)

### Methods

- [Free](ui.md#free)

## Constructors

### constructor

\+ **new UI**(`camera`: [*IEntity*](../interfaces/ientity.md)): [*UI*](ui.md)

#### Parameters:

Name | Type |
:------ | :------ |
`camera` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** [*UI*](ui.md)

Inherited from: [Component](component.md)

## Properties

### camera

• **camera**: [*IEntity*](../interfaces/ientity.md)

Entity of the camera to render this UI element on.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### KEY

▪ `Readonly` `Static` **KEY**: *ui*= "ui"

Key of the UI component.

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

Inherited from: [Component](component.md)
