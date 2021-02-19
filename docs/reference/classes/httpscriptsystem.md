# Class: HTTPScriptSystem

HTTPScriptSystem handles loading script assets over HTTP and making them
available to the engine for execution.

## Hierarchy

* [*MapSystem*](mapsystem.md)

  ↳ **HTTPScriptSystem**

## Table of contents

### Constructors

- [constructor](httpscriptsystem.md#constructor)

### Properties

- [entities](httpscriptsystem.md#entities)
- [messageBus](httpscriptsystem.md#messagebus)
- [scene](httpscriptsystem.md#scene)
- [subscriberID](httpscriptsystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](httpscriptsystem.md#message_deregister)
- [MESSAGE\_REGISTER](httpscriptsystem.md#message_register)
- [MESSAGE\_REQUEST\_CLEAR](httpscriptsystem.md#message_request_clear)
- [MESSAGE\_REQUEST\_FLUSH](httpscriptsystem.md#message_request_flush)
- [MESSAGE\_UPDATE](httpscriptsystem.md#message_update)

### Methods

- [Destroy](httpscriptsystem.md#destroy)
- [OnDestroy](httpscriptsystem.md#ondestroy)
- [OnMessage](httpscriptsystem.md#onmessage)
- [Update](httpscriptsystem.md#update)
- [handleResponse](httpscriptsystem.md#handleresponse)
- [httpError](httpscriptsystem.md#httperror)
- [httpSuccess](httpscriptsystem.md#httpsuccess)
- [register](httpscriptsystem.md#register)
- [remove](httpscriptsystem.md#remove)

## Constructors

### constructor

\+ **new HTTPScriptSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `entities?`: *Map*<number, [*SystemEntity*](systementity.md)\>, `subscriberID?`: *number*, `assets?`: [*ScriptAsset*](scriptasset.md)[]): [*HTTPScriptSystem*](httpscriptsystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`entities?` | *Map*<number, [*SystemEntity*](systementity.md)\> |
`subscriberID?` | *number* |
`assets` | [*ScriptAsset*](scriptasset.md)[] |

**Returns:** [*HTTPScriptSystem*](httpscriptsystem.md)

Inherited from: [MapSystem](mapsystem.md)

## Properties

### entities

• `Protected` **entities**: *Map*<number, [*SystemEntity*](systementity.md)\>

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

Inherited from: [MapSystem](mapsystem.md).[entities](mapsystem.md#entities)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [MapSystem](mapsystem.md).[messageBus](mapsystem.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [MapSystem](mapsystem.md).[scene](mapsystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [MapSystem](mapsystem.md).[subscriberID](mapsystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_DEREGISTER](mapsystem.md#message_deregister)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_REGISTER](mapsystem.md#message_register)

___

### MESSAGE\_REQUEST\_CLEAR

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_CLEAR**: *request_script_clear*= "request\_script\_clear"

Message to clear out loaded assets.

___

### MESSAGE\_REQUEST\_FLUSH

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_FLUSH**: *request_script_flush*= "request\_script\_flush"

Message to send out all loaded script messages that are currently loaded.

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_UPDATE](mapsystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [MapSystem](mapsystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### handleResponse

▸ `Protected`**handleResponse**(`response`: Response): *Promise*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`response` | Response |

**Returns:** *Promise*<string\>

___

### httpError

▸ `Protected`**httpError**(`request`: [*ScriptRequest*](scriptrequest.md), `error`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`request` | [*ScriptRequest*](scriptrequest.md) |
`error` | Error |

**Returns:** *void*

___

### httpSuccess

▸ `Protected`**httpSuccess**(`code`: *string*, `request`: [*ScriptRequest*](scriptrequest.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`code` | *string* |
`request` | [*ScriptRequest*](scriptrequest.md) |

**Returns:** *void*

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)
