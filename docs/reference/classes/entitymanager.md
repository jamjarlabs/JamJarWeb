
# Class: EntityManager

EntityManager keeps tracks of all entities and their components/changes in their components.
The EntityManager watches for changes in which components belong to an entity (add/remove), and
when a change is detected it will broadcast that a change has been detected in the entity and the
entity's new list of components.
The EntityManager also watches for entities being deleted and removes the deleted entity's
components.

## Hierarchy

* [Subscriber](subscriber.md)

  ↳ **EntityManager**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](entitymanager.md#constructor)

### Properties

* [componentManagers](entitymanager.md#private-componentmanagers)
* [messageBus](entitymanager.md#private-messagebus)
* [subscriberID](entitymanager.md#subscriberid)

### Methods

* [OnMessage](entitymanager.md#onmessage)
* [addComponent](entitymanager.md#private-addcomponent)
* [destroyEntity](entitymanager.md#private-destroyentity)
* [getComponentManager](entitymanager.md#private-getcomponentmanager)
* [getComponents](entitymanager.md#private-getcomponents)
* [registerEntity](entitymanager.md#private-registerentity)
* [removeComponent](entitymanager.md#private-removecomponent)

## Constructors

###  constructor

\+ **new EntityManager**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `componentManagers`: [ComponentManager](componentmanager.md)[], `subscriberID?`: undefined | number): *[EntityManager](entitymanager.md)*

*Overrides [Subscriber](subscriber.md).[constructor](subscriber.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`componentManagers` | [ComponentManager](componentmanager.md)[] | [] |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[EntityManager](entitymanager.md)*

## Properties

### `Private` componentManagers

• **componentManagers**: *[ComponentManager](componentmanager.md)[]*

___

### `Private` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Private` addComponent

▸ **addComponent**(`entity`: [IEntity](../interfaces/ientity.md), `component`: [Component](component.md)): *void*

addComponent adds a component to the entity manager for an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | Entity of the component to add |
`component` | [Component](component.md) | Component to add  |

**Returns:** *void*

___

### `Private` destroyEntity

▸ **destroyEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

destroyEntity publishes that an entity has been deleted and deregistered from the entity manager.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity that has been deleted  |

**Returns:** *void*

___

### `Private` getComponentManager

▸ **getComponentManager**(`key`: string): *[ComponentManager](componentmanager.md) | undefined*

getComponentManager gets a component manager for a specific component, if it doesn't exist,
undefined is returned instead.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key of the component to get the manager for |

**Returns:** *[ComponentManager](componentmanager.md) | undefined*

The component manager for the component, if it doesn't exist undefined

___

### `Private` getComponents

▸ **getComponents**(`entity`: [IEntity](../interfaces/ientity.md)): *[Component](component.md)[]*

getComponents gets all components belonging to an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to get the components of |

**Returns:** *[Component](component.md)[]*

The list of components for the entity

___

### `Private` registerEntity

▸ **registerEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

registerEntity publishes that a change has happened to an entity's components, alongside its new
component list.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity that has changed components  |

**Returns:** *void*

___

### `Private` removeComponent

▸ **removeComponent**(`entity`: [IEntity](../interfaces/ientity.md), `key`: string): *void*

removeComponent removes an entity's component by the component key provided.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | Entity to remove the component from |
`key` | string | Key of the component to remove  |

**Returns:** *void*
