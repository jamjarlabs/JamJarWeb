
# Interface: IMessageBus

## Hierarchy

* **IMessageBus**

## Implemented by

* [FakeMessageBus](../classes/_fake_message_bus_.fakemessagebus.md)
* [MessageBus](../classes/_message_message_bus_.messagebus.md)

## Index

### Properties

* [Dispatch](_message_imessage_bus_.imessagebus.md#dispatch)
* [Publish](_message_imessage_bus_.imessagebus.md#publish)
* [Subscribe](_message_imessage_bus_.imessagebus.md#subscribe)
* [Unsubscribe](_message_imessage_bus_.imessagebus.md#unsubscribe)
* [UnsubscribeAll](_message_imessage_bus_.imessagebus.md#unsubscribeall)

## Properties

###  Dispatch

• **Dispatch**: *function*

#### Type declaration:

▸ (): *void*

___

###  Publish

• **Publish**: *function*

#### Type declaration:

▸ (`message`: [IMessage](_message_imessage_.imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](_message_imessage_.imessage.md) |

___

###  Subscribe

• **Subscribe**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/_message_subscriber_.subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/_message_subscriber_.subscriber.md) |
`types` | string &#124; string[] |

___

###  Unsubscribe

• **Unsubscribe**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/_message_subscriber_.subscriber.md), `types`: string | string[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/_message_subscriber_.subscriber.md) |
`types` | string &#124; string[] |

___

###  UnsubscribeAll

• **UnsubscribeAll**: *function*

#### Type declaration:

▸ (`subscriber`: [Subscriber](../classes/_message_subscriber_.subscriber.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | [Subscriber](../classes/_message_subscriber_.subscriber.md) |
