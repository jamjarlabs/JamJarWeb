
# Class: FakeScene

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeScene**

## Implements

* [IScene](../interfaces/iscene.md)

## Index

### Constructors

* [constructor](fakescene.md#constructor)

### Properties

* [id](fakescene.md#id)

### Methods

* [AddEntity](fakescene.md#addentity)
* [Destroy](fakescene.md#destroy)
* [OnMessage](fakescene.md#onmessage)
* [Start](fakescene.md#start)

## Constructors

###  constructor

\+ **new FakeScene**(`id`: number, `reactors`: [Reactor](reactor.md)[]): *[FakeScene](fakescene.md)*

*Overrides [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number | - |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeScene](fakescene.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/iscene.md).[id](../interfaces/iscene.md#id)*

## Methods

###  AddEntity

▸ **AddEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

**Returns:** *void*
