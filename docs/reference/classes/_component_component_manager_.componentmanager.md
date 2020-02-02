
# Class: ComponentManager

ComponentManager holds a map/record of components of the same type, mapped
to the ID of the entity the component belongs to.
Used in conjunction with the EntityManager for managing Entities/Components.

## Hierarchy

* **ComponentManager**

## Index

### Constructors

* [constructor](_component_component_manager_.componentmanager.md#constructor)

### Properties

* [components](_component_component_manager_.componentmanager.md#private-components)
* [key](_component_component_manager_.componentmanager.md#key)

### Methods

* [Add](_component_component_manager_.componentmanager.md#add)
* [Get](_component_component_manager_.componentmanager.md#get)
* [Remove](_component_component_manager_.componentmanager.md#remove)

## Constructors

###  constructor

\+ **new ComponentManager**(`key`: string, `components`: Record‹number, [Component](_component_component_.component.md)›): *[ComponentManager](_component_component_manager_.componentmanager.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`key` | string | - |
`components` | Record‹number, [Component](_component_component_.component.md)› | {} |

**Returns:** *[ComponentManager](_component_component_manager_.componentmanager.md)*

## Properties

### `Private` components

• **components**: *Record‹number, [Component](_component_component_.component.md)›*

___

###  key

• **key**: *string*

## Methods

###  Add

▸ **Add**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `component`: [Component](_component_component_.component.md)): *void*

Add adds a component to the ComponentManager, mapped to
the entity that the component belongs to.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | Entity of the component to add |
`component` | [Component](_component_component_.component.md) | Component to add  |

**Returns:** *void*

___

###  Get

▸ **Get**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[Component](_component_component_.component.md) | undefined*

Get returns a component associated with an entity if it
exists, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | Entity to get the component of |

**Returns:** *[Component](_component_component_.component.md) | undefined*

Component retrieved, if doesn't exist, undefined

___

###  Remove

▸ **Remove**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

Remove removes a component from the ComponentManager if it
exists.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | Entity of the component to remove  |

**Returns:** *void*
