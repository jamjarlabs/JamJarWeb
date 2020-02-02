
# Class: FakeSubscriber

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeSubscriber**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](fakesubscriber.md#constructor)

### Properties

* [subscriberID](fakesubscriber.md#subscriberid)

### Methods

* [OnMessage](fakesubscriber.md#onmessage)

## Constructors

###  constructor

\+ **new FakeSubscriber**(`subscriberID`: number, `reactors`: [Reactor](reactor.md)[]): *[FakeSubscriber](fakesubscriber.md)*

*Overrides [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscriberID` | number | - |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeSubscriber](fakesubscriber.md)*

## Properties

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*
