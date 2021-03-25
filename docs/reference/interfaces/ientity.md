# Interface: IEntity

IEntity defines how an entity should behave, and it's underlying core
requirements - an ID, tags, and layers.

## Implemented by

* [*Entity*](../classes/entity.md)
* [*FakeEntity*](../classes/fakeentity.md)

## Table of contents

### Properties

- [Add](ientity.md#add)
- [Destroy](ientity.md#destroy)
- [Remove](ientity.md#remove)
- [id](ientity.md#id)
- [layers](ientity.md#layers)
- [tags](ientity.md#tags)

## Properties

### Add

• **Add**: (`component`: [*Component*](../classes/component.md)) => *void*

Add adds a component to the entity.

**`param`** The component to add

#### Type declaration:

▸ (`component`: [*Component*](../classes/component.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`component` | [*Component*](../classes/component.md) |

**Returns:** *void*

___

### Destroy

• **Destroy**: () => *void*

Destroy deletes the entity and all associated components.

#### Type declaration:

▸ (): *void*

**Returns:** *void*

___

### Remove

• **Remove**: (`key`: *string*) => *void*

Remove removes a component from the entity.

**`param`** The component to remove

#### Type declaration:

▸ (`key`: *string*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*

___

### id

• **id**: *number*

Unique numeric identifier of the entity.

___

### layers

• **layers**: *string*[]

A list of layers the entity belongs to, used for grouping entities.

___

### tags

• **tags**: *string*[]

A list of tags the entity has, used for discriminating between entities
without having to add custom components.
