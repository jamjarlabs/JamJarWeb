# Class: EntityManager

EntityManager keeps tracks of all entities and their components/changes in their components.
The EntityManager watches for changes in which components belong to an entity (add/remove), and
when a change is detected it will broadcast that a change has been detected in the entity and the
entity's new list of components.
The EntityManager also watches for entities being deleted and removes the deleted entity's
components.

## Hierarchy

* [*Subscriber*](subscriber.md)

  ↳ **EntityManager**

## Table of contents

### Constructors

- [constructor](entitymanager.md#constructor)

### Properties

- [subscriberID](entitymanager.md#subscriberid)

### Methods

- [OnMessage](entitymanager.md#onmessage)

## Constructors

### constructor

\+ **new EntityManager**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `componentManagers?`: [*ComponentManager*](componentmanager.md)[], `subscriberID?`: *number*): [*EntityManager*](entitymanager.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`componentManagers` | [*ComponentManager*](componentmanager.md)[] |
`subscriberID?` | *number* |

**Returns:** [*EntityManager*](entitymanager.md)

Inherited from: [Subscriber](subscriber.md)

## Properties

### subscriberID

• **subscriberID**: *number*

Inherited from: [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)

## Methods

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [Subscriber](subscriber.md)
