
# Class: Entity

Entity is one of the key elements of the Entity-Component-System architecture.
Entity is just to tie components together, and to give Systems ways to group
and link components.
The entity is basically just an ID, alongside some helper functions for
adding/removing components and destroying itself.

## Hierarchy

* **Entity**

## Implements

* [IEntity](../interfaces/_entity_ientity_.ientity.md)

## Index

### Constructors

* [constructor](_entity_entity_.entity.md#constructor)

### Properties

* [id](_entity_entity_.entity.md#id)
* [messageBus](_entity_entity_.entity.md#private-messagebus)
* [scene](_entity_entity_.entity.md#optional-scene)
* [ID](_entity_entity_.entity.md#static-private-id)
* [KEY](_entity_entity_.entity.md#static-key)
* [MESSAGE_DESTROY](_entity_entity_.entity.md#static-message_destroy)

### Methods

* [Add](_entity_entity_.entity.md#add)
* [Destroy](_entity_entity_.entity.md#destroy)
* [Remove](_entity_entity_.entity.md#remove)

## Constructors

###  constructor

\+ **new Entity**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `scene?`: [Scene](_scene_scene_.scene.md) | undefined, `id`: number): *[Entity](_entity_entity_.entity.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) | - |
`scene?` | [Scene](_scene_scene_.scene.md) &#124; undefined | - |
`id` | number | Entity.ID++ |

**Returns:** *[Entity](_entity_entity_.entity.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IEntity](../interfaces/_entity_ientity_.ientity.md).[id](../interfaces/_entity_ientity_.ientity.md#id)*

___

### `Private` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

___

### `Optional` scene

• **scene**? : *[Scene](_scene_scene_.scene.md)*

*Implementation of [IEntity](../interfaces/_entity_ientity_.ientity.md).[scene](../interfaces/_entity_ientity_.ientity.md#optional-scene)*

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

▸ **Add**(`component`: [Component](_component_component_.component.md)): *void*

Add adds a component to the entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | [Component](_component_component_.component.md) | The component to add  |

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
