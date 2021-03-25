# Class: FakeEntity

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeEntity**

## Implements

* [*IEntity*](../interfaces/ientity.md)

## Table of contents

### Constructors

- [constructor](fakeentity.md#constructor)

### Properties

- [id](fakeentity.md#id)
- [layers](fakeentity.md#layers)
- [tags](fakeentity.md#tags)

### Methods

- [Add](fakeentity.md#add)
- [Destroy](fakeentity.md#destroy)
- [Remove](fakeentity.md#remove)

## Constructors

### constructor

\+ **new FakeEntity**(`id`: *number*, `tags?`: *string*[], `layers?`: *string*[], `reactors?`: [*Reactor*](reactor.md)[]): [*FakeEntity*](fakeentity.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *number* |
`tags` | *string*[] |
`layers` | *string*[] |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeEntity*](fakeentity.md)

Inherited from: [Fake](fake.md)

## Properties

### id

• **id**: *number*

Unique numeric identifier of the entity.

Implementation of: [IEntity](../interfaces/ientity.md).[id](../interfaces/ientity.md#id)

___

### layers

• **layers**: *string*[]

A list of layers the entity belongs to, used for grouping entities.

Implementation of: [IEntity](../interfaces/ientity.md).[layers](../interfaces/ientity.md#layers)

___

### tags

• **tags**: *string*[]

A list of tags the entity has, used for discriminating between entities
without having to add custom components.

Implementation of: [IEntity](../interfaces/ientity.md).[tags](../interfaces/ientity.md#tags)

## Methods

### Add

▸ **Add**(`component`: [*Component*](component.md)): *void*

Add adds a component to the entity.

#### Parameters:

Name | Type |
:------ | :------ |
`component` | [*Component*](component.md) |

**Returns:** *void*

___

### Destroy

▸ **Destroy**(): *void*

Destroy deletes the entity and all associated components.

**Returns:** *void*

___

### Remove

▸ **Remove**(`key`: *string*): *void*

Remove removes a component from the entity.

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*
