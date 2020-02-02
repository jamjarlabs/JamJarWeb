
# Class: Subscriber

Subscriber represents something that can subscribe to and recieve messages
from the message bus

## Hierarchy

* **Subscriber**

  ↳ [Scene](_scene_scene_.scene.md)

  ↳ [System](_system_system_.system.md)

  ↳ [EntityManager](_entity_entity_manager_.entitymanager.md)

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_message_subscriber_.subscriber.md#constructor)

### Properties

* [subscriberID](_message_subscriber_.subscriber.md#subscriberid)
* [SUBSCRIBER_ID](_message_subscriber_.subscriber.md#static-private-subscriber_id)

### Methods

* [OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)

## Constructors

###  constructor

\+ **new Subscriber**(`subscriberID`: number): *[Subscriber](_message_subscriber_.subscriber.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscriberID` | number | Subscriber.SUBSCRIBER_ID++ |

**Returns:** *[Subscriber](_message_subscriber_.subscriber.md)*

## Properties

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

___

### `Static` `Private` SUBSCRIBER_ID

▪ **SUBSCRIBER_ID**: *number* = 0

## Methods

### `Abstract` OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

OnMessage handles a subscriber recieving a message.
Called by the message bus for appropriate messages.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) | The message that has been sent to the subscriber  |

**Returns:** *void*
