# Class: ScriptingReference

ScriptingReference is a reference that ties together a script and the game
engine, with functions for the script to retrieve information/send messages
to the game engine.

## Table of contents

### Constructors

- [constructor](scriptingreference.md#constructor)

### Methods

- [GetEntitiesByLayer](scriptingreference.md#getentitiesbylayer)
- [GetEntitiesByTag](scriptingreference.md#getentitiesbytag)
- [GetEntityByID](scriptingreference.md#getentitybyid)
- [GetScriptEntity](scriptingreference.md#getscriptentity)
- [SendMessage](scriptingreference.md#sendmessage)

## Constructors

### constructor

\+ **new ScriptingReference**(`getScriptEntity`: () => *undefined* \| [*SystemEntity*](systementity.md), `getEntityByID`: (`id`: *number*) => *undefined* \| [*SystemEntity*](systementity.md), `getEntitiesByTag`: (`tag`: *string*) => [*SystemEntity*](systementity.md)[], `getEntitiesByLayer`: (`layer`: *string*) => [*SystemEntity*](systementity.md)[], `sendMessage`: (`message`: [*IMessage*](../interfaces/imessage.md)) => *void*): [*ScriptingReference*](scriptingreference.md)

#### Parameters:

Name | Type |
:------ | :------ |
`getScriptEntity` | () => *undefined* \| [*SystemEntity*](systementity.md) |
`getEntityByID` | (`id`: *number*) => *undefined* \| [*SystemEntity*](systementity.md) |
`getEntitiesByTag` | (`tag`: *string*) => [*SystemEntity*](systementity.md)[] |
`getEntitiesByLayer` | (`layer`: *string*) => [*SystemEntity*](systementity.md)[] |
`sendMessage` | (`message`: [*IMessage*](../interfaces/imessage.md)) => *void* |

**Returns:** [*ScriptingReference*](scriptingreference.md)

## Methods

### GetEntitiesByLayer

▸ **GetEntitiesByLayer**(`layer`: *string*): [*SystemEntity*](systementity.md)[]

GetEntitiesByLayer returns a list of any entities with the layer
provided.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`layer` | *string* | Layer to search for    |

**Returns:** [*SystemEntity*](systementity.md)[]

___

### GetEntitiesByTag

▸ **GetEntitiesByTag**(`tag`: *string*): [*SystemEntity*](systementity.md)[]

GetEntitiesByTag returns a list of any entities with the tag provided.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`tag` | *string* | Tag to search for    |

**Returns:** [*SystemEntity*](systementity.md)[]

___

### GetEntityByID

▸ **GetEntityByID**(`id`: *number*): *undefined* \| [*SystemEntity*](systementity.md)

GetEntityByID returns any entity with a matching ID, otherwise it
returns undefined.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`id` | *number* | ID of the entity to search for.    |

**Returns:** *undefined* \| [*SystemEntity*](systementity.md)

___

### GetScriptEntity

▸ **GetScriptEntity**(): *undefined* \| [*SystemEntity*](systementity.md)

GetScriptEntity returns any entity associated with the script being
executed. This can be undefined if no entity is associated.

**Returns:** *undefined* \| [*SystemEntity*](systementity.md)

___

### SendMessage

▸ **SendMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

SendMessage sends a message to the JamJar engine message bus.

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*
