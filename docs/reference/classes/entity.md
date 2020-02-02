
# Class: Entity

Entity is one of the key elements of the Entity-Component-System architecture.
Entity is just to tie components together, and to give Systems ways to group
and link components.
The entity is basically just an ID, alongside some helper functions for
adding/removing components and destroying itself.

## Hierarchy

* **Entity**

## Implements

* [IEntity](../interfaces/ientity.md)

## Index

### Constructors

* [constructor](entity.md#constructor)

### Properties

* [id](entity.md#id)
* [messageBus](entity.md#private-messagebus)
* [scene](entity.md#optional-scene)
* [ID](entity.md#static-private-id)
* [KEY](entity.md#static-key)
* [MESSAGE_DESTROY](entity.md#static-message_destroy)

### Methods

* [Add](entity.md#add)
* [Destroy](entity.md#destroy)
* [Remove](entity.md#remove)

## Constructors

###  constructor

\+ **new Entity**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [Scene](scene.md) | undefined, `id`: number): *[Entity](entity.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [Scene](scene.md) &#124; undefined | - |
`id` | number | Entity.ID++ |

**Returns:** *[Entity](entity.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IEntity](../interfaces/ientity.md).[id](../interfaces/ientity.md#id)*

___

### `Private` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

___

### `Optional` scene

• **scene**? : *[Scene](scene.md)*

*Implementation of [IEntity](../interfaces/ientity.md).[scene](../interfaces/ientity.md#optional-scene)*

___

### `Static` `Private` ID

▪ **ID**: *number* = 0

___

### `Static` KEY

▪ **KEY**: *"entity"* = "entity"

___

### `Static` MESSAGE_DESTROY

▪ **MESSAGE_DESTROY**: *"entity_destroy"* = "entity_destroy"

## Methods

###  Add

▸ **Add**(`component`: [Component](component.md)): *void*

Add adds a component to the entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | [Component](component.md) | The component to add  |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

Destroy deletes the entity and all associated components.

**Returns:** *void*

___

###  Remove

▸ **Remove**(`key`: string): *void*

Remove removes a component from the entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The component to remove  |

**Returns:** *void*
