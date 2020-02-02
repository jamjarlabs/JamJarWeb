
# Class: EntityManager

EntityManager keeps tracks of all entities and their components/changes in their components.
The EntityManager watches for changes in which components belong to an entity (add/remove), and
when a change is detected it will broadcast that a change has been detected in the entity and the
entity's new list of components.
The EntityManager also watches for entities being deleted and removes the deleted entity's
components.

## Hierarchy

* [Subscriber](_message_subscriber_.subscriber.md)

  ↳ **EntityManager**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_entity_entity_manager_.entitymanager.md#constructor)

### Properties

* [componentManagers](_entity_entity_manager_.entitymanager.md#private-componentmanagers)
* [messageBus](_entity_entity_manager_.entitymanager.md#private-messagebus)
* [subscriberID](_entity_entity_manager_.entitymanager.md#subscriberid)

### Methods

* [OnMessage](_entity_entity_manager_.entitymanager.md#onmessage)
* [addComponent](_entity_entity_manager_.entitymanager.md#private-addcomponent)
* [destroyEntity](_entity_entity_manager_.entitymanager.md#private-destroyentity)
* [getComponentManager](_entity_entity_manager_.entitymanager.md#private-getcomponentmanager)
* [getComponents](_entity_entity_manager_.entitymanager.md#private-getcomponents)
* [registerEntity](_entity_entity_manager_.entitymanager.md#private-registerentity)
* [removeComponent](_entity_entity_manager_.entitymanager.md#private-removecomponent)

## Constructors

###  constructor

\+ **new EntityManager**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `componentManagers`: [ComponentManager](_component_component_manager_.componentmanager.md)[], `subscriberID?`: undefined | number): *[EntityManager](_entity_entity_manager_.entitymanager.md)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[constructor](_message_subscriber_.subscriber.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) | - |
`componentManagers` | [ComponentManager](_component_component_manager_.componentmanager.md)[] | [] |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[EntityManager](_entity_entity_manager_.entitymanager.md)*

## Properties

### `Private` componentManagers

• **componentManagers**: *[ComponentManager](_component_component_manager_.componentmanager.md)[]*

___

### `Private` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

### `Private` addComponent

▸ **addComponent**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `component`: [Component](_component_component_.component.md)): *void*

addComponent adds a component to the entity manager for an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | Entity of the component to add |
`component` | [Component](_component_component_.component.md) | Component to add  |

**Returns:** *void*

___

### `Private` destroyEntity

▸ **destroyEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

destroyEntity publishes that an entity has been deleted and deregistered from the entity manager.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity that has been deleted  |

**Returns:** *void*

___

### `Private` getComponentManager

▸ **getComponentManager**(`key`: string): *[ComponentManager](_component_component_manager_.componentmanager.md) | undefined*

getComponentManager gets a component manager for a specific component, if it doesn't exist,
undefined is returned instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key of the component to get the manager for |

**Returns:** *[ComponentManager](_component_component_manager_.componentmanager.md) | undefined*

The component manager for the component, if it doesn't exist undefined

___

### `Private` getComponents

▸ **getComponents**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[Component](_component_component_.component.md)[]*

getComponents gets all components belonging to an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to get the components of |

**Returns:** *[Component](_component_component_.component.md)[]*

The list of components for the entity

___

### `Private` registerEntity

▸ **registerEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

registerEntity publishes that a change has happened to an entity's components, alongside its new
component list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity that has changed components  |

**Returns:** *void*

___

### `Private` removeComponent

▸ **removeComponent**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `key`: string): *void*

removeComponent removes an entity's component by the component key provided.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | Entity to remove the component from |
`key` | string | Key of the component to remove  |

**Returns:** *void*
