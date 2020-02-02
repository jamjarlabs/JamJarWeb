
# Class: Message <**T**>

Message is a message that can be sent along the event bus to subscribers.
Message has a generic type payload for passing more data than just the message type.

## Type parameters

▪ **T**

## Hierarchy

* **Message**

## Implements

* [IMessage](../interfaces/_message_imessage_.imessage.md)

## Index

### Constructors

* [constructor](_message_message_.message.md#constructor)

### Properties

* [payload](_message_message_.message.md#optional-payload)
* [type](_message_message_.message.md#type)

## Constructors

###  constructor

\+ **new Message**(`type`: string, `payload?`: T): *[Message](_message_message_.message.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload?` | T |

**Returns:** *[Message](_message_message_.message.md)*

## Properties

### `Optional` payload

• **payload**? : *T*

___

###  type

• **type**: *string*

*Implementation of [IMessage](../interfaces/_message_imessage_.imessage.md).[type](../interfaces/_message_imessage_.imessage.md#type)*
