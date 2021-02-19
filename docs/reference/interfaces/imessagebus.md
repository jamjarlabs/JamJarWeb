# Interface: IMessageBus

IMessageBus defines the contract for a message bus, handling receiver subscription/unsubcription, message publishing,
and message dispatching.

## Implemented by

* [*FakeMessageBus*](../classes/fakemessagebus.md)
* [*MessageBus*](../classes/messagebus.md)

## Table of contents

### Properties

- [Dispatch](imessagebus.md#dispatch)
- [DispatchUntilEmpty](imessagebus.md#dispatchuntilempty)
- [Publish](imessagebus.md#publish)
- [Subscribe](imessagebus.md#subscribe)
- [Unsubscribe](imessagebus.md#unsubscribe)
- [UnsubscribeAll](imessagebus.md#unsubscribeall)

## Properties

### Dispatch

• **Dispatch**: () => *void*

Dispatch processes the current message bus queue and forwards the messages to the subscribers who have
subscribed to each message type.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

___

### DispatchUntilEmpty

• **DispatchUntilEmpty**: () => *void*

DispatchUntilEmpty repeatedly dispatches until the message queue is empty, used to make sure everything is
processed, e.g. if there is a message that causes a new message to be added, it will ensure that all recursive
messages are processed.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

___

### Publish

• **Publish**: (`message`: [*IMessage*](imessage.md)) => *void*

Publish adds a message to the message bus queue to be dispatched.

**`param`** The message to send

#### Type declaration:

▸ (`message`: [*IMessage*](imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](imessage.md) |

**Returns:** *void*

___

### Subscribe

• **Subscribe**: (`subscriber`: [*ISubscriber*](isubscriber.md), `types`: *string* \| *string*[]) => *void*

Subscribe subscibes a subscriber to a particular message type or types.

**`param`** The subscriber to the message type(s)

**`param`** The message type(s) to subscribe to

#### Type declaration:

▸ (`subscriber`: [*ISubscriber*](isubscriber.md), `types`: *string* \| *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*ISubscriber*](isubscriber.md) |
`types` | *string* \| *string*[] |

**Returns:** *void*

___

### Unsubscribe

• **Unsubscribe**: (`subscriber`: [*ISubscriber*](isubscriber.md), `types`: *string* \| *string*[]) => *void*

Unsubscribe unsubscribes a subscriber from a specific message type or types.

**`param`** The subscriber to unsubscribe

**`param`** The message type(s) to unsubscribe from

#### Type declaration:

▸ (`subscriber`: [*ISubscriber*](isubscriber.md), `types`: *string* \| *string*[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*ISubscriber*](isubscriber.md) |
`types` | *string* \| *string*[] |

**Returns:** *void*

___

### UnsubscribeAll

• **UnsubscribeAll**: (`subscriber`: [*ISubscriber*](isubscriber.md)) => *void*

UnsubscribeAll unsubscribes a Subscriber from all messages.

**`param`** The subscriber to unsubscribe

#### Type declaration:

▸ (`subscriber`: [*ISubscriber*](isubscriber.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*ISubscriber*](isubscriber.md) |

**Returns:** *void*
