
# Class: MessageBus

MessageBus is the core link between each part of the Engine, it handles processing
messages and deciding which subscribers should recieve each message.
An object can subscribe to a certain message, the message bus will keep track of
subscribers for a message type.
Messages can be sent to the message bus, which will be queued up.
A dispatch can be triggered on the message bus, which will cause the message bus
to send all the messages and to the subscribers that have subscribed to the message
type.
The dispatch should probably be left to the core game loop for triggering.

## Hierarchy

* **MessageBus**

## Implements

* [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)

## Index

### Constructors

* [constructor](_message_message_bus_.messagebus.md#constructor)

### Properties

* [messageQueue](_message_message_bus_.messagebus.md#private-messagequeue)
* [subscribers](_message_message_bus_.messagebus.md#private-subscribers)

### Methods

* [Dispatch](_message_message_bus_.messagebus.md#dispatch)
* [Publish](_message_message_bus_.messagebus.md#publish)
* [Subscribe](_message_message_bus_.messagebus.md#subscribe)
* [Unsubscribe](_message_message_bus_.messagebus.md#unsubscribe)
* [UnsubscribeAll](_message_message_bus_.messagebus.md#unsubscribeall)

## Constructors

###  constructor

\+ **new MessageBus**(`subscribers`: Record‹string, [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)[]›, `messageQueue`: [IMessage](../interfaces/_message_imessage_.imessage.md)[]): *[MessageBus](_message_message_bus_.messagebus.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscribers` | Record‹string, [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)[]› | {} |
`messageQueue` | [IMessage](../interfaces/_message_imessage_.imessage.md)[] | [] |

**Returns:** *[MessageBus](_message_message_bus_.messagebus.md)*

## Properties

### `Private` messageQueue

• **messageQueue**: *[IMessage](../interfaces/_message_imessage_.imessage.md)[]*

___

### `Private` subscribers

• **subscribers**: *Record‹string, [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)[]›*

## Methods

###  Dispatch

▸ **Dispatch**(): *void*

Processes the message bus queue and forwards the messages to the subscribers.
who have subscribed to each message type.

**Returns:** *void*

___

###  Publish

▸ **Publish**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

Publish adds a message to the message bus queue to be dispatched.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) | The message to send  |

**Returns:** *void*

___

###  Subscribe

▸ **Subscribe**(`subscriber`: [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md), `types`: string | string[]): *void*

Subscribe subscibes a subscriber to a particular message type or types.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md) | The subscriber to the message type(s) |
`types` | string &#124; string[] | The message type(s) to subscribe to  |

**Returns:** *void*

___

###  Unsubscribe

▸ **Unsubscribe**(`subscriber`: [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md), `types`: string | string[]): *void*

Unsubscribe unsubscribes a subscriber from a specific message type or types.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md) | The subscriber to unsubscribe |
`types` | string &#124; string[] | The message type(s) to unsubscribe from  |

**Returns:** *void*

___

###  UnsubscribeAll

▸ **UnsubscribeAll**(`subscriber`: [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)): *void*

UnsubscribeAll unsubscribes a Subscriber from all messages.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`subscriber` | [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md) | The subscriber to unsubscribe  |

**Returns:** *void*
