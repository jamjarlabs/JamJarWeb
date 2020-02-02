
# Class: FakeMessageBus

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeMessageBus**

## Implements

* [IMessageBus](../interfaces/imessagebus.md)

## Index

### Constructors

* [constructor](fakemessagebus.md#constructor)

### Methods

* [Dispatch](fakemessagebus.md#dispatch)
* [Publish](fakemessagebus.md#publish)
* [Subscribe](fakemessagebus.md#subscribe)
* [Unsubscribe](fakemessagebus.md#unsubscribe)
* [UnsubscribeAll](fakemessagebus.md#unsubscribeall)

## Constructors

###  constructor

\+ **new FakeMessageBus**(`reactors`: [Reactor](reactor.md)[]): *[FakeMessageBus](fakemessagebus.md)*

*Inherited from [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeMessageBus](fakemessagebus.md)*

## Methods

###  Dispatch

▸ **Dispatch**(): *void*

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

▸ **Subscribe**(`subscriber`: [Subscriber](subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](subscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  Unsubscribe

▸ **Unsubscribe**(`subscriber`: [Subscriber](subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](subscriber.md) |
`types` | string &#124; string[] |

**Returns:** *void*

___

###  UnsubscribeAll

▸ **UnsubscribeAll**(`subscriber`: [Subscriber](subscriber.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](subscriber.md) |

**Returns:** *void*
