
# Class: SystemEntity

SystemEntity is a wrapper around an entity and its components,
used in systems to provide an easier way to group an entity and its
components.
Includes a number of helper functions for retrieving/adding/removing components,
and destroying the entity.

## Hierarchy

* **SystemEntity**

## Index

### Constructors

* [constructor](systementity.md#constructor)

### Properties

* [components](systementity.md#private-components)
* [entity](systementity.md#entity)

### Methods

* [Add](systementity.md#add)
* [Destroy](systementity.md#destroy)
* [Get](systementity.md#get)
* [Remove](systementity.md#remove)

## Constructors

###  constructor

\+ **new SystemEntity**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *[SystemEntity](systementity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *[SystemEntity](systementity.md)*

## Properties

### `Private` components

• **components**: *Record‹string, [Component](component.md)›*

___

###  entity

• **entity**: *[IEntity](../interfaces/ientity.md)*

## Methods

###  Add

▸ **Add**(`component`: [Component](component.md)): *void*

Add adds a component to an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | [Component](component.md) | The component to add  |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the entity and all of its components.

**Returns:** *void*

___

###  Get

▸ **Get**(`key`: string): *[Component](component.md) | undefined*

Get returns any Component with the key provided if it exists;
otherwise it returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key identifier of the component |

**Returns:** *[Component](component.md) | undefined*

The component if it exists, otherwise undefined

___

###  Remove

▸ **Remove**(`key`: string): *void*

Remove removes a component from an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key of the component to remove  |

**Returns:** *void*
