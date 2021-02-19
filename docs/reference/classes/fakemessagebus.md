# Class: FakeMessageBus

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeMessageBus**

## Implements

* [*IMessageBus*](../interfaces/imessagebus.md)

## Table of contents

### Constructors

- [constructor](fakemessagebus.md#constructor)

### Methods

- [Dispatch](fakemessagebus.md#dispatch)
- [DispatchUntilEmpty](fakemessagebus.md#dispatchuntilempty)
- [Publish](fakemessagebus.md#publish)
- [Subscribe](fakemessagebus.md#subscribe)
- [Unsubscribe](fakemessagebus.md#unsubscribe)
- [UnsubscribeAll](fakemessagebus.md#unsubscribeall)

## Constructors

### constructor

\+ **new FakeMessageBus**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeMessageBus*](fakemessagebus.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeMessageBus*](fakemessagebus.md)

Inherited from: [Fake](fake.md)

## Methods

### Dispatch

▸ **Dispatch**(): *void*

Dispatch processes the current message bus queue and forwards the messages to the subscribers who have
subscribed to each message type.

**Returns:** *void*

___

### DispatchUntilEmpty

▸ **DispatchUntilEmpty**(): *void*

DispatchUntilEmpty repeatedly dispatches until the message queue is empty, used to make sure everything is
processed, e.g. if there is a message that causes a new message to be added, it will ensure that all recursive
messages are processed.

**Returns:** *void*

___

### Publish

▸ **Publish**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

Publish adds a message to the message bus queue to be dispatched.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

___

### Subscribe

▸ **Subscribe**(`subscriber`: [*Subscriber*](subscriber.md), `types`: *string* \| *string*[]): *void*

Subscribe subscibes a subscriber to a particular message type or types.

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*Subscriber*](subscriber.md) |
`types` | *string* \| *string*[] |

**Returns:** *void*

___

### Unsubscribe

▸ **Unsubscribe**(`subscriber`: [*Subscriber*](subscriber.md), `types`: *string* \| *string*[]): *void*

Unsubscribe unsubscribes a subscriber from a specific message type or types.

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*Subscriber*](subscriber.md) |
`types` | *string* \| *string*[] |

**Returns:** *void*

___

### UnsubscribeAll

▸ **UnsubscribeAll**(`subscriber`: [*Subscriber*](subscriber.md)): *void*

UnsubscribeAll unsubscribes a Subscriber from all messages.

#### Parameters:

Name | Type |
:------ | :------ |
`subscriber` | [*Subscriber*](subscriber.md) |

**Returns:** *void*
