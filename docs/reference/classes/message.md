# Class: Message<T\>

Message is a message that can be sent along the event bus to subscribers.
Message has a generic type payload for passing more data than just the message type.

## Type parameters

Name |
:------ |
`T` |

## Hierarchy

* [*Pooled*](pooled.md)

  ↳ **Message**

## Implements

* [*IMessage*](../interfaces/imessage.md)
* [*IPoolable*](../interfaces/ipoolable.md)
* [*ISerializable*](../interfaces/iserializable.md)

## Table of contents

### Constructors

- [constructor](message.md#constructor)

### Properties

- [objectInPool](message.md#objectinpool)
- [payload](message.md#payload)
- [type](message.md#type)
- [CLASS\_SERIALIZATION\_KEY](message.md#class_serialization_key)
- [pools](message.md#pools)

### Methods

- [Free](message.md#free)
- [Recycle](message.md#recycle)
- [Serialize](message.md#serialize)
- [Deserialize](message.md#deserialize)
- [Free](message.md#free)
- [Init](message.md#init)
- [New](message.md#new)
- [free](message.md#free)
- [init](message.md#init)
- [new](message.md#new)

## Constructors

### constructor

\+ **new Message**<T\>(`type`: *string*, `payload?`: T): [*Message*](message.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`payload?` | T |

**Returns:** [*Message*](message.md)<T\>

Inherited from: [Pooled](pooled.md)

## Properties

### objectInPool

• **objectInPool**: *boolean*= false

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

Implementation of: [IPoolable](../interfaces/ipoolable.md).[objectInPool](../interfaces/ipoolable.md#objectinpool)

Inherited from: [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)

___

### payload

• `Optional` **payload**: *undefined* \| T

___

### type

• **type**: *string*

Implementation of: [IMessage](../interfaces/imessage.md).[type](../interfaces/imessage.md#type)

___

### CLASS\_SERIALIZATION\_KEY

▪ `Readonly` `Static` **CLASS\_SERIALIZATION\_KEY**: *jamjar.Message*= "jamjar.Message"

___

### pools

▪ `Protected` `Static` **pools**: *Map*<string, [*number*, [*IPoolable*](../interfaces/ipoolable.md)[]]\>

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

Inherited from: [Pooled](pooled.md).[pools](pooled.md#pools)

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IPoolable](../interfaces/ipoolable.md)

___

### Recycle

▸ **Recycle**(`type`: *string*, `payload?`: T): [*IPoolable*](../interfaces/ipoolable.md)

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`payload?` | T |

**Returns:** [*IPoolable*](../interfaces/ipoolable.md)

___

### Serialize

▸ **Serialize**(): *string*

**Returns:** *string*

Implementation of: [ISerializable](../interfaces/iserializable.md)

___

### Deserialize

▸ `Static`**Deserialize**(`json`: *any*): [*Message*](message.md)<unknown\>

#### Parameters:

Name | Type |
:------ | :------ |
`json` | *any* |

**Returns:** [*Message*](message.md)<unknown\>

___

### Free

▸ `Static`**Free**<T\>(`obj`: [*Message*](message.md)<T\>): *void*

Free the provided Message.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | [*Message*](message.md)<T\> |

**Returns:** *void*

___

### Init

▸ `Static`**Init**(`size`: *number*): *void*

Initialize the Message pool to the size provided.

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *void*

___

### New

▸ `Static`**New**<T\>(`type`: *string*, `payload?`: T): [*Message*](message.md)<T\>

Create a Message.New, using pooling if available.

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`payload?` | T |

**Returns:** [*Message*](message.md)<T\>

___

### free

▸ `Protected` `Static`**free**(`poolKey`: *string*, `obj`: [*IPoolable*](../interfaces/ipoolable.md)): *void*

free is used to mark a provided object as free in the pool provided. This method can be called multiple times
with the same object, it will only add one entry to the pool.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`poolKey` | *string* | The key of the pool to add the object to.   |
`obj` | [*IPoolable*](../interfaces/ipoolable.md) | The object to add to the pool.    |

**Returns:** *void*

Inherited from: [Pooled](pooled.md)

___

### init

▸ `Protected` `Static`**init**(`poolKey`: *string*, `emptyGenerator`: () => [*IPoolable*](../interfaces/ipoolable.md), `size`: *number*): *void*

init is used to initialize an object pool to a certain size. This method takes a key of the pool to initialize,
an 'empty generator' which is a function that should return an empty/blank instance of the object being pooled
which can be overwritten at a later point, and the maximum size of the pool (which it will be initialized to
at the start using the empty generator).

#### Parameters:

Name | Type |
:------ | :------ |
`poolKey` | *string* |
`emptyGenerator` | () => [*IPoolable*](../interfaces/ipoolable.md) |
`size` | *number* |

**Returns:** *void*

Inherited from: [Pooled](pooled.md)

___

### new

▸ `Protected` `Static`**new**<T\>(`poolKey`: *string*, `type`: (...`args`: *any*) => T, ...`args`: *any*): T

new is used to request a new object from the pool specified, if the pool is unavailable or empty it will use
the type to provision a new object through a constructor.
This is a generic method, it includes a cast to the generic type provided - this cast can fail if the objects
returned from the pool are not the type expected.

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*IPoolable*](../interfaces/ipoolable.md) |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`poolKey` | *string* | The key of the pool to retrieve from.   |
`type` | (...`args`: *any*) => T | The fallback constructor to use if the pool is not initialized/empty.   |
`...args` | *any* | The args to use when creating/recycling the object.    |

**Returns:** T

Inherited from: [Pooled](pooled.md)
