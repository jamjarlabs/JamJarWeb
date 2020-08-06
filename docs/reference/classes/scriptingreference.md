
# Class: ScriptingReference

ScriptingReference is a reference that ties together a script and the game
engine, with functions for the script to retrieve information/send messages
to the game engine.

## Hierarchy

* **ScriptingReference**

## Index

### Constructors

* [constructor](scriptingreference.md#constructor)

### Properties

* [getEntitiesByLayer](scriptingreference.md#private-getentitiesbylayer)
* [getEntitiesByTag](scriptingreference.md#private-getentitiesbytag)
* [getEntityByID](scriptingreference.md#private-getentitybyid)
* [getScriptEntity](scriptingreference.md#private-getscriptentity)
* [sendMessage](scriptingreference.md#private-sendmessage)

### Methods

* [GetEntitiesByLayer](scriptingreference.md#getentitiesbylayer)
* [GetEntitiesByTag](scriptingreference.md#getentitiesbytag)
* [GetEntityByID](scriptingreference.md#getentitybyid)
* [GetScriptEntity](scriptingreference.md#getscriptentity)
* [SendMessage](scriptingreference.md#sendmessage)

## Constructors

###  constructor

\+ **new ScriptingReference**(`getScriptEntity`: function, `getEntityByID`: function, `getEntitiesByTag`: function, `getEntitiesByLayer`: function, `sendMessage`: function): *[ScriptingReference](scriptingreference.md)*

**Parameters:**

▪ **getScriptEntity**: *function*

▸ (): *[SystemEntity](systementity.md) | undefined*

▪ **getEntityByID**: *function*

▸ (`id`: number): *[SystemEntity](systementity.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

▪ **getEntitiesByTag**: *function*

▸ (`tag`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

▪ **getEntitiesByLayer**: *function*

▸ (`layer`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | string |

▪ **sendMessage**: *function*

▸ (`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *[ScriptingReference](scriptingreference.md)*

## Properties

### `Private` getEntitiesByLayer

• **getEntitiesByLayer**: *function*

#### Type declaration:

▸ (`layer`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | string |

___

### `Private` getEntitiesByTag

• **getEntitiesByTag**: *function*

#### Type declaration:

▸ (`tag`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

___

### `Private` getEntityByID

• **getEntityByID**: *function*

#### Type declaration:

▸ (`id`: number): *[SystemEntity](systementity.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

___

### `Private` getScriptEntity

• **getScriptEntity**: *function*

#### Type declaration:

▸ (): *[SystemEntity](systementity.md) | undefined*

___

### `Private` sendMessage

• **sendMessage**: *function*

#### Type declaration:

▸ (`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

## Methods

###  GetEntitiesByLayer

▸ **GetEntitiesByLayer**(`layer`: string): *[SystemEntity](systementity.md)[]*

GetEntitiesByLayer returns a list of any entities with the layer
provided.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`layer` | string | Layer to search for  |

**Returns:** *[SystemEntity](systementity.md)[]*

___

###  GetEntitiesByTag

▸ **GetEntitiesByTag**(`tag`: string): *[SystemEntity](systementity.md)[]*

GetEntitiesByTag returns a list of any entities with the tag provided.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tag` | string | Tag to search for  |

**Returns:** *[SystemEntity](systementity.md)[]*

___

###  GetEntityByID

▸ **GetEntityByID**(`id`: number): *[SystemEntity](systementity.md) | undefined*

GetEntityByID returns any entity with a matching ID, otherwise it
returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | number | ID of the entity to search for.  |

**Returns:** *[SystemEntity](systementity.md) | undefined*

___

###  GetScriptEntity

▸ **GetScriptEntity**(): *[SystemEntity](systementity.md) | undefined*

GetScriptEntity returns any entity associated with the script being
executed. This can be undefined if no entity is associated.

**Returns:** *[SystemEntity](systementity.md) | undefined*

___

###  SendMessage

▸ **SendMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

SendMessage sends a message to the JamJar engine message bus.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |   |

**Returns:** *void*
