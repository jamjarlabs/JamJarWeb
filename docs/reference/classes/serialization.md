# Class: Serialization

## Table of contents

### Constructors

- [constructor](serialization.md#constructor)

### Properties

- [types](serialization.md#types)

### Methods

- [Deserialize](serialization.md#deserialize)
- [Serialize](serialization.md#serialize)

## Constructors

### constructor

\+ **new Serialization**(): [*Serialization*](serialization.md)

**Returns:** [*Serialization*](serialization.md)

## Properties

### types

▪ `Static` **types**: *Map*<string, (`json`: *any*) => [*ISerializable*](../interfaces/iserializable.md)\>

## Methods

### Deserialize

▸ `Static`**Deserialize**(`input`: SerializationJSON): *any*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | SerializationJSON |

**Returns:** *any*

___

### Serialize

▸ `Static`**Serialize**(`input`: *string* \| *number* \| *bigint* \| *boolean* \| [*ISerializable*](../interfaces/iserializable.md) \| [*ISerializable*](../interfaces/iserializable.md)[]): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`input` | *string* \| *number* \| *bigint* \| *boolean* \| [*ISerializable*](../interfaces/iserializable.md) \| [*ISerializable*](../interfaces/iserializable.md)[] |

**Returns:** *string*
