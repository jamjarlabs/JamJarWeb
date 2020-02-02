
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

* [constructor](_system_system_entity_.systementity.md#constructor)

### Properties

* [components](_system_system_entity_.systementity.md#private-components)
* [entity](_system_system_entity_.systementity.md#entity)

### Methods

* [Add](_system_system_entity_.systementity.md#add)
* [Destroy](_system_system_entity_.systementity.md#destroy)
* [Get](_system_system_entity_.systementity.md#get)
* [Remove](_system_system_entity_.systementity.md#remove)

## Constructors

###  constructor

\+ **new SystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `components`: [Component](_component_component_.component.md)[]): *[SystemEntity](_system_system_entity_.systementity.md)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |
`components` | [Component](_component_component_.component.md)[] |

**Returns:** *[SystemEntity](_system_system_entity_.systementity.md)*

## Properties

### `Private` components

• **components**: *Record‹string, [Component](_component_component_.component.md)›*

___

###  entity

• **entity**: *[IEntity](../interfaces/_entity_ientity_.ientity.md)*

## Methods

###  Add

▸ **Add**(`component`: [Component](_component_component_.component.md)): *void*

Add adds a component to an entity.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`component` | [Component](_component_component_.component.md) | The component to add  |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the entity and all of its components.

**Returns:** *void*

___

###  Get

▸ **Get**(`key`: string): *[Component](_component_component_.component.md) | undefined*

Get returns any Component with the key provided if it exists;
otherwise it returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The key identifier of the component |

**Returns:** *[Component](_component_component_.component.md) | undefined*

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
