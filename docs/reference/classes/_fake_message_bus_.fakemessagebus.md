
# Class: FakeMessageBus

## Hierarchy

* [Fake](_fake_fake_.fake.md)

  ↳ **FakeMessageBus**

## Implements

* [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)

## Index

### Constructors

* [constructor](_fake_message_bus_.fakemessagebus.md#constructor)

### Methods

* [Dispatch](_fake_message_bus_.fakemessagebus.md#dispatch)
* [Publish](_fake_message_bus_.fakemessagebus.md#publish)
* [Subscribe](_fake_message_bus_.fakemessagebus.md#subscribe)
* [Unsubscribe](_fake_message_bus_.fakemessagebus.md#unsubscribe)
* [UnsubscribeAll](_fake_message_bus_.fakemessagebus.md#unsubscribeall)

## Constructors

###  constructor

\+ **new FakeMessageBus**(`reactors`: [Reactor](_fake_reactor_.reactor.md)[]): *[FakeMessageBus](_fake_message_bus_.fakemessagebus.md)*

*Inherited from [Fake](_fake_fake_.fake.md).[constructor](_fake_fake_.fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reactors` | [Reactor](_fake_reactor_.reactor.md)[] | [] |

**Returns:** *[FakeMessageBus](_fake_message_bus_.fakemessagebus.md)*

## Methods

###  Dispatch

▸ **Dispatch**(): *void*

**Returns:** *void*

___

###  Publish

▸ **Publish**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

###  Subscribe

▸ **Subscribe**(`subscriber`: [Subscriber](_message_subscriber_.subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](_message_subscriber_.subscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  Unsubscribe

▸ **Unsubscribe**(`subscriber`: [Subscriber](_message_subscriber_.subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](_message_subscriber_.subscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  UnsubscribeAll

▸ **UnsubscribeAll**(`subscriber`: [Subscriber](_message_subscriber_.subscriber.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](_message_subscriber_.subscriber.md) |

**Returns:** *void*
