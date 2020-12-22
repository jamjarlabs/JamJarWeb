
# Class: Message <**T**>

Message is a message that can be sent along the event bus to subscribers.
Message has a generic type payload for passing more data than just the message type.

## Type parameters

▪ **T**

## Hierarchy

* [Pooled](pooled.md)

  ↳ **Message**

## Implements

* [IMessage](../interfaces/imessage.md)
* [IPoolable](../interfaces/ipoolable.md)

## Index

### Constructors

* [constructor](message.md#constructor)

### Properties

* [objectInPool](message.md#objectinpool)
* [payload](message.md#optional-payload)
* [type](message.md#type)
* [POOL_KEY](message.md#static-private-pool_key)
* [pools](message.md#static-protected-pools)

### Methods

* [Free](message.md#free)
* [Recycle](message.md#recycle)
* [Free](message.md#static-free)
* [INIT_MESSAGE](message.md#static-private-init_message)
* [Init](message.md#static-init)
* [New](message.md#static-new)
* [free](message.md#static-protected-free)
* [init](message.md#static-protected-init)
* [new](message.md#static-protected-new)

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

###  objectInPool

• **objectInPool**: *boolean* = false

*Implementation of [IPoolable](../interfaces/ipoolable.md).[objectInPool](../interfaces/ipoolable.md#objectinpool)*

*Inherited from [Pooled](pooled.md).[objectInPool](pooled.md#objectinpool)*

objectInPool is true if an object is made available in the object pool. If it is false it is not
currently available in the object pool.
This is used to avoid adding the same object to the same object pool multiple times if there are successive
calls to free the the same object.

___

### `Optional` payload

• **payload**? : *T*

___

###  type

• **type**: *string*

*Implementation of [IMessage](../interfaces/imessage.md).[type](../interfaces/imessage.md#type)*

___

### `Static` `Private` POOL_KEY

▪ **POOL_KEY**: *"jamjar_message"* = "jamjar_message"

Value of the Message object pool.

___

### `Static` `Protected` pools

▪ **pools**: *Map‹string, [number, [IPoolable](../interfaces/ipoolable.md)[]]›* = new Map()

*Inherited from [Pooled](pooled.md).[pools](pooled.md#static-protected-pools)*

pools is the global, static mapping of string keys to object pools.
An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
make up the pool as an array (second value).

## Methods

###  Free

▸ **Free**(): *void*

*Implementation of [IPoolable](../interfaces/ipoolable.md)*

**Returns:** *void*

___

###  Recycle

▸ **Recycle**(`type`: string, `payload?`: T): *[IPoolable](../interfaces/ipoolable.md)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload?` | T |

**Returns:** *[IPoolable](../interfaces/ipoolable.md)*

___

### `Static` Free

▸ **Free**<**T**>(`obj`: [Message](message.md)‹T›): *void*

Free the provided Message.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`obj` | [Message](message.md)‹T› |

**Returns:** *void*

___

### `Static` `Private` INIT_MESSAGE

▸ **INIT_MESSAGE**(): *[Message](message.md)‹unknown›*

**Returns:** *[Message](message.md)‹unknown›*

___

### `Static` Init

▸ **Init**(`size`: number): *void*

Initialize the Message pool to the size provided.

**Parameters:**

Name | Type |
------ | ------ |
`size` | number |

**Returns:** *void*

___

### `Static` New

▸ **New**<**T**>(`type`: string, `payload?`: T): *[Message](message.md)‹T›*

Create a Message.New, using pooling if available.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`payload?` | T |

**Returns:** *[Message](message.md)‹T›*

___

### `Static` `Protected` free

▸ **free**(`poolKey`: string, `obj`: [IPoolable](../interfaces/ipoolable.md)): *void*

*Inherited from [Pooled](pooled.md).[free](pooled.md#static-protected-free)*

free is used to mark a provided object as free in the pool provided. This method can be called multiple times
with the same object, it will only add one entry to the pool.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`poolKey` | string | The key of the pool to add the object to. |
`obj` | [IPoolable](../interfaces/ipoolable.md) | The object to add to the pool.  |

**Returns:** *void*

___

### `Static` `Protected` init

▸ **init**(`poolKey`: string, `emptyGenerator`: function, `size`: number): *void*

*Inherited from [Pooled](pooled.md).[init](pooled.md#static-protected-init)*

init is used to initialize an object pool to a certain size. This method takes a key of the pool to initialize,
an 'empty generator' which is a function that should return an empty/blank instance of the object being pooled
which can be overwritten at a later point, and the maximum size of the pool (which it will be initialized to
at the start using the empty generator).

**Parameters:**

▪ **poolKey**: *string*

▪ **emptyGenerator**: *function*

▸ (): *[IPoolable](../interfaces/ipoolable.md)*

▪ **size**: *number*

**Returns:** *void*

___

### `Static` `Protected` new

▸ **new**<**T**>(`poolKey`: string, `type`: object, ...`args`: any): *T*

*Inherited from [Pooled](pooled.md).[new](pooled.md#static-protected-new)*

new is used to request a new object from the pool specified, if the pool is unavailable or empty it will use
the type to provision a new object through a constructor.
This is a generic method, it includes a cast to the generic type provided - this cast can fail if the objects
returned from the pool are not the type expected.

**Type parameters:**

▪ **T**: *[IPoolable](../interfaces/ipoolable.md)*

**Parameters:**

▪ **poolKey**: *string*

The key of the pool to retrieve from.

▪ **type**: *object*

The fallback constructor to use if the pool is not initialized/empty.

Name | Type |
------ | ------ |
`constructor` |  |

▪... **args**: *any*

The args to use when creating/recycling the object.

**Returns:** *T*
