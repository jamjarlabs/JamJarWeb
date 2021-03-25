# Class: Subscriber

Subscriber represents something that can subscribe to and recieve messages
from the message bus

## Hierarchy

* **Subscriber**

  ↳ [*Game*](game.md)

  ↳ [*EntityManager*](entitymanager.md)

  ↳ [*Scene*](scene.md)

  ↳ [*System*](system.md)

## Implements

* [*ISubscriber*](../interfaces/isubscriber.md)

## Table of contents

### Constructors

- [constructor](subscriber.md#constructor)

### Properties

- [subscriberID](subscriber.md#subscriberid)

### Methods

- [OnMessage](subscriber.md#onmessage)

## Constructors

### constructor

\+ **new Subscriber**(`subscriberID?`: *number*): [*Subscriber*](subscriber.md)

#### Parameters:

Name | Type |
:------ | :------ |
`subscriberID` | *number* |

**Returns:** [*Subscriber*](subscriber.md)

## Properties

### subscriberID

• **subscriberID**: *number*

Implementation of: [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)

## Methods

### OnMessage

▸ `Abstract`**OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

OnMessage handles a subscriber recieving a message.
Called by the message bus for appropriate messages.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) | The message that has been sent to the subscriber    |

**Returns:** *void*
