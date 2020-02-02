
# Class: FakeEntity

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeEntity**

## Implements

* [IEntity](../interfaces/ientity.md)

## Index

### Constructors

* [constructor](fakeentity.md#constructor)

### Properties

* [id](fakeentity.md#id)
* [scene](fakeentity.md#optional-scene)

### Methods

* [Add](fakeentity.md#add)
* [Destroy](fakeentity.md#destroy)
* [Remove](fakeentity.md#remove)

## Constructors

###  constructor

\+ **new FakeEntity**(`id`: number, `scene?`: [Scene](scene.md), `reactors`: [Reactor](reactor.md)[]): *[FakeEntity](fakeentity.md)*

*Overrides [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number | - |
`scene?` | [Scene](scene.md) | - |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeEntity](fakeentity.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IEntity](../interfaces/ientity.md).[id](../interfaces/ientity.md#id)*

___

### `Optional` scene

• **scene**? : *[Scene](scene.md)*

*Implementation of [IEntity](../interfaces/ientity.md).[scene](../interfaces/ientity.md#optional-scene)*

## Methods

###  Add

▸ **Add**(`component`: [Component](component.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`component` | [Component](component.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

**Returns:** *void*

___

###  Remove

▸ **Remove**(`key`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*
