# Class: Entity

Entity is one of the key elements of the Entity-Component-System architecture.
Entity is just to tie components together, and to give Systems ways to group
and link components.
The entity is basically just an ID, with some meta information of tags and
layers for grouping and filtering, alongside some helper functions for
adding/removing components and destroying itself.

## Implements

* [*IEntity*](../interfaces/ientity.md)

## Table of contents

### Constructors

- [constructor](entity.md#constructor)

### Properties

- [id](entity.md#id)
- [layers](entity.md#layers)
- [tags](entity.md#tags)
- [MESSAGE\_DESTROY](entity.md#message_destroy)

### Methods

- [Add](entity.md#add)
- [Destroy](entity.md#destroy)
- [Remove](entity.md#remove)

## Constructors

### constructor

\+ **new Entity**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `tags?`: *string*[], `layers?`: *string*[], `id?`: *number*): [*Entity*](entity.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`tags` | *string*[] |
`layers` | *string*[] |
`id` | *number* |

**Returns:** [*Entity*](entity.md)

## Properties

### id

• **id**: *number*

Unique numeric identifier of the entity.

Implementation of: [IEntity](../interfaces/ientity.md).[id](../interfaces/ientity.md#id)

___

### layers

• **layers**: *string*[]

A list of layers the entity belongs to, used for grouping entities.

Implementation of: [IEntity](../interfaces/ientity.md).[layers](../interfaces/ientity.md#layers)

___

### tags

• **tags**: *string*[]

A list of tags the entity has, used for discriminating between entities
without having to add custom components.

Implementation of: [IEntity](../interfaces/ientity.md).[tags](../interfaces/ientity.md#tags)

___

### MESSAGE\_DESTROY

▪ `Readonly` `Static` **MESSAGE\_DESTROY**: *entity_destroy*= "entity\_destroy"

Message broadcast when an entity is destroyed.

## Methods

### Add

▸ **Add**(`component`: [*Component*](component.md)): *void*

Add adds a component to the entity.

#### Parameters:

Name | Type |
:------ | :------ |
`component` | [*Component*](component.md) |

**Returns:** *void*

___

### Destroy

▸ **Destroy**(): *void*

Destroy deletes the entity and all associated components.

**Returns:** *void*

___

### Remove

▸ **Remove**(`key`: *string*): *void*

Remove removes a component from the entity.

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*
