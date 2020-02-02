
# Class: Subscriber

Subscriber represents something that can subscribe to and recieve messages
from the message bus

## Hierarchy

* **Subscriber**

  ↳ [Scene](scene.md)

  ↳ [System](system.md)

  ↳ [EntityManager](entitymanager.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](subscriber.md#constructor)

### Properties

* [subscriberID](subscriber.md#subscriberid)
* [SUBSCRIBER_ID](subscriber.md#static-private-subscriber_id)

### Methods

* [OnMessage](subscriber.md#abstract-onmessage)

## Constructors

###  constructor

\+ **new Subscriber**(`subscriberID`: number): *[Subscriber](subscriber.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscriberID` | number | Subscriber.SUBSCRIBER_ID++ |

**Returns:** *[Subscriber](subscriber.md)*

## Properties

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

___

### `Static` `Private` SUBSCRIBER_ID

▪ **SUBSCRIBER_ID**: *number* = 0

## Methods

### `Abstract` OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

OnMessage handles a subscriber recieving a message.
Called by the message bus for appropriate messages.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) | The message that has been sent to the subscriber  |

**Returns:** *void*
