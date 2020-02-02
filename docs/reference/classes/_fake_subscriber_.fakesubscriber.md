
# Class: FakeSubscriber

## Hierarchy

* [Fake](_fake_fake_.fake.md)

  ↳ **FakeSubscriber**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_fake_subscriber_.fakesubscriber.md#constructor)

### Properties

* [subscriberID](_fake_subscriber_.fakesubscriber.md#subscriberid)

### Methods

* [OnMessage](_fake_subscriber_.fakesubscriber.md#onmessage)

## Constructors

###  constructor

\+ **new FakeSubscriber**(`subscriberID`: number, `reactors`: [Reactor](_fake_reactor_.reactor.md)[]): *[FakeSubscriber](_fake_subscriber_.fakesubscriber.md)*

*Overrides [Fake](_fake_fake_.fake.md).[constructor](_fake_fake_.fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`subscriberID` | number | - |
`reactors` | [Reactor](_fake_reactor_.reactor.md)[] | [] |

**Returns:** *[FakeSubscriber](_fake_subscriber_.fakesubscriber.md)*

## Properties

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*
