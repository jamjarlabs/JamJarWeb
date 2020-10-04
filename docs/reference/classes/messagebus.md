
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

* [IMessageBus](../interfaces/imessagebus.md)

## Index

### Constructors

* [constructor](messagebus.md#constructor)

### Properties

* [messageQueue](messagebus.md#private-messagequeue)
* [subscribers](messagebus.md#private-subscribers)

### Methods

* [Dispatch](messagebus.md#dispatch)
* [DispatchUntilEmpty](messagebus.md#dispatchuntilempty)
* [Publish](messagebus.md#publish)
* [Subscribe](messagebus.md#subscribe)
* [Unsubscribe](messagebus.md#unsubscribe)
* [UnsubscribeAll](messagebus.md#unsubscribeall)

## Constructors

###  constructor

\+ **new MessageBus**(`subscribers`: Record‹string, [ISubscriber](../interfaces/isubscriber.md)[]›, `messageQueue`: [IMessage](../interfaces/imessage.md)[]): *[MessageBus](messagebus.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscribers` | Record‹string, [ISubscriber](../interfaces/isubscriber.md)[]› | {} |
`messageQueue` | [IMessage](../interfaces/imessage.md)[] | [] |

**Returns:** *[MessageBus](messagebus.md)*

## Properties

### `Private` messageQueue

• **messageQueue**: *[IMessage](../interfaces/imessage.md)[]*

___

### `Private` subscribers

• **subscribers**: *Record‹string, [ISubscriber](../interfaces/isubscriber.md)[]›*

## Methods

###  Dispatch

▸ **Dispatch**(): *void*

**Returns:** *void*

___

###  DispatchUntilEmpty

▸ **DispatchUntilEmpty**(): *void*

**Returns:** *void*

___

###  Publish

▸ **Publish**(`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  Subscribe

▸ **Subscribe**(`subscriber`: [ISubscriber](../interfaces/isubscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [ISubscriber](../interfaces/isubscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  Unsubscribe

▸ **Unsubscribe**(`subscriber`: [ISubscriber](../interfaces/isubscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [ISubscriber](../interfaces/isubscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  UnsubscribeAll

▸ **UnsubscribeAll**(`subscriber`: [ISubscriber](../interfaces/isubscriber.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [ISubscriber](../interfaces/isubscriber.md) |

**Returns:** *void*
