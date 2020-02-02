
# Class: Message <**T**>

Message is a message that can be sent along the event bus to subscribers.
Message has a generic type payload for passing more data than just the message type.

## Type parameters

▪ **T**

## Hierarchy

* **Message**

## Implements

* [IMessage](../interfaces/imessage.md)

## Index

### Constructors

* [constructor](message.md#constructor)

### Properties

* [payload](message.md#optional-payload)
* [type](message.md#type)

## Constructors

###  constructor

\+ **new Message**(`type`: string, `payload?`: T): *[Message](message.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload?` | T |

**Returns:** *[Message](message.md)*

## Properties

### `Optional` payload

• **payload**? : *T*

___

###  type

• **type**: *string*

*Implementation of [IMessage](../interfaces/imessage.md).[type](../interfaces/imessage.md#type)*
