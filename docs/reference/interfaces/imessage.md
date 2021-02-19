# Interface: IMessage

IMessage is the interface for passing messages between systems/engine parts.
Each message is guaranteed to have a message type, used for filtering/determining
meaning for each message.

## Hierarchy

* [*IFreeable*](ifreeable.md)

  ↳ **IMessage**

## Implemented by

* [*Message*](../classes/message.md)

## Table of contents

### Properties

- [type](imessage.md#type)

### Methods

- [Free](imessage.md#free)

## Properties

### type

• **type**: *string*

## Methods

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Inherited from: [IFreeable](ifreeable.md)
