
# Class: Entity

Entity is one of the key elements of the Entity-Component-System architecture.
Entity is just to tie components together, and to give Systems ways to group
and link components.
The entity is basically just an ID, with some meta information of tags and
layers for grouping and filtering, alongside some helper functions for
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
* [layers](entity.md#layers)
* [messageBus](entity.md#private-messagebus)
* [tags](entity.md#tags)
* [ID](entity.md#static-private-id)
* [MESSAGE_DESTROY](entity.md#static-message_destroy)

### Methods

* [Add](entity.md#add)
* [Destroy](entity.md#destroy)
* [Remove](entity.md#remove)

## Constructors

###  constructor

\+ **new Entity**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `tags`: string[], `layers`: string[], `id`: number): *[Entity](entity.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`tags` | string[] | [] |
`layers` | string[] | [] |
`id` | number | Entity.ID++ |

**Returns:** *[Entity](entity.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IEntity](../interfaces/ientity.md).[id](../interfaces/ientity.md#id)*

___

###  layers

• **layers**: *string[]*

*Implementation of [IEntity](../interfaces/ientity.md).[layers](../interfaces/ientity.md#layers)*

___

### `Private` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

___

###  tags

• **tags**: *string[]*

*Implementation of [IEntity](../interfaces/ientity.md).[tags](../interfaces/ientity.md#tags)*

___

### `Static` `Private` ID

▪ **ID**: *number* = 0

___

### `Static` MESSAGE_DESTROY

▪ **MESSAGE_DESTROY**: *"entity_destroy"* = "entity_destroy"

Message broadcast when an entity is destroyed.

## Methods

###  Add

▸ **Add**(`component`: [Component](component.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`component` | [Component](component.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

**Returns:** *void*

___

###  Remove

▸ **Remove**(`key`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*
