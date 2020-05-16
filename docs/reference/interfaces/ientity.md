
# Interface: IEntity

IEntity defines how an entity should behave, and it's underlying core
requirements - an ID, tags, and layers.

## Hierarchy

* **IEntity**

## Implemented by

* [Entity](../classes/entity.md)
* [FakeEntity](../classes/fakeentity.md)

## Index

### Properties

* [Add](ientity.md#add)
* [Destroy](ientity.md#destroy)
* [Remove](ientity.md#remove)
* [id](ientity.md#id)
* [layers](ientity.md#layers)
* [tags](ientity.md#tags)

## Properties

###  Add

• **Add**: *function*

Add adds a component to the entity.

**`param`** The component to add

#### Type declaration:

▸ (`component`: [Component](../classes/component.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`component` | [Component](../classes/component.md) |

___

###  Destroy

• **Destroy**: *function*

Destroy deletes the entity and all associated components.

#### Type declaration:

▸ (): *void*

___

###  Remove

• **Remove**: *function*

Remove removes a component from the entity.

**`param`** The component to remove

#### Type declaration:

▸ (`key`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

___

###  id

• **id**: *number*

Unique numeric identifier of the entity.

___

###  layers

• **layers**: *string[]*

A list of layers the entity belongs to, used for grouping entities.

___

###  tags

• **tags**: *string[]*

A list of tags the entity has, used for discriminating between entities
without having to add custom components.
