
# Class: FakeScene

## Hierarchy

* [Fake](_fake_fake_.fake.md)

  ↳ **FakeScene**

## Implements

* [IScene](../interfaces/_scene_iscene_.iscene.md)

## Index

### Constructors

* [constructor](_fake_scene_.fakescene.md#constructor)

### Properties

* [id](_fake_scene_.fakescene.md#id)

### Methods

* [AddEntity](_fake_scene_.fakescene.md#addentity)
* [Destroy](_fake_scene_.fakescene.md#destroy)
* [OnMessage](_fake_scene_.fakescene.md#onmessage)
* [Start](_fake_scene_.fakescene.md#start)

## Constructors

###  constructor

\+ **new FakeScene**(`id`: number, `reactors`: [Reactor](_fake_reactor_.reactor.md)[]): *[FakeScene](_fake_scene_.fakescene.md)*

*Overrides [Fake](_fake_fake_.fake.md).[constructor](_fake_fake_.fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number | - |
`reactors` | [Reactor](_fake_reactor_.reactor.md)[] | [] |

**Returns:** *[FakeScene](_fake_scene_.fakescene.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/_scene_iscene_.iscene.md).[id](../interfaces/_scene_iscene_.iscene.md#id)*

## Methods

###  AddEntity

▸ **AddEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

**Returns:** *void*
