# Class: ComponentManager

ComponentManager holds a map/record of components of the same type, mapped
to the ID of the entity the component belongs to.
Used in conjunction with the EntityManager for managing Entities/Components.

## Table of contents

### Constructors

- [constructor](componentmanager.md#constructor)

### Properties

- [key](componentmanager.md#key)

### Methods

- [Add](componentmanager.md#add)
- [Get](componentmanager.md#get)
- [Remove](componentmanager.md#remove)

## Constructors

### constructor

\+ **new ComponentManager**(`key`: *string*, `components?`: *Map*<number, [*Component*](component.md)\>): [*ComponentManager*](componentmanager.md)

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`components` | *Map*<number, [*Component*](component.md)\> |

**Returns:** [*ComponentManager*](componentmanager.md)

## Properties

### key

• **key**: *string*

## Methods

### Add

▸ **Add**(`entity`: [*IEntity*](../interfaces/ientity.md), `component`: [*Component*](component.md)): *void*

Add adds a component to the ComponentManager, mapped to
the entity that the component belongs to.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) | Entity of the component to add   |
`component` | [*Component*](component.md) | Component to add    |

**Returns:** *void*

___

### Get

▸ **Get**(`entity`: [*IEntity*](../interfaces/ientity.md)): *undefined* \| [*Component*](component.md)

Get returns a component associated with an entity if it
exists, otherwise returns undefined.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) | Entity to get the component of   |

**Returns:** *undefined* \| [*Component*](component.md)

Component retrieved, if doesn't exist, undefined

___

### Remove

▸ **Remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

Remove removes a component from the ComponentManager if it
exists.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) | Entity of the component to remove    |

**Returns:** *void*
