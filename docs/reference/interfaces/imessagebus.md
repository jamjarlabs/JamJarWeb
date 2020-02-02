
# Interface: IMessageBus

## Hierarchy

* **IMessageBus**

## Implemented by

* [FakeMessageBus](../classes/fakemessagebus.md)
* [MessageBus](../classes/messagebus.md)

## Index

### Properties

* [Dispatch](imessagebus.md#dispatch)
* [Publish](imessagebus.md#publish)
* [Subscribe](imessagebus.md#subscribe)
* [Unsubscribe](imessagebus.md#unsubscribe)
* [UnsubscribeAll](imessagebus.md#unsubscribeall)

## Properties

###  Dispatch

• **Dispatch**: *function*

#### Type declaration:

▸ (): *void*

___

###  Publish

• **Publish**: *function*

#### Type declaration:

▸ (`message`: [IMessage](imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](imessage.md) |

___

###  Subscribe

• **Subscribe**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/subscriber.md) |
`types` | string &#124; string[] |

___

###  Unsubscribe

• **Unsubscribe**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/subscriber.md) |
`types` | string &#124; string[] |

___

###  UnsubscribeAll

• **UnsubscribeAll**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/subscriber.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/subscriber.md) |
