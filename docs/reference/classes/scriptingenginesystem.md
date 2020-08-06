
# Class: ScriptingEngineSystem

ScriptingEngineSystem handles executing scripts, listening out for trigger
events. The ScriptingEngineSystem also provides an interface for
communicating between the game engine and the scripts
(entities/messages/components) through the global window namespace.

## Hierarchy

  ↳ [System](system.md)

  ↳ **ScriptingEngineSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](scriptingenginesystem.md#constructor)

### Properties

* [assets](scriptingenginesystem.md#private-assets)
* [entities](scriptingenginesystem.md#protected-entities)
* [messageBus](scriptingenginesystem.md#protected-messagebus)
* [reference](scriptingenginesystem.md#private-reference)
* [scene](scriptingenginesystem.md#protected-optional-scene)
* [scriptEntity](scriptingenginesystem.md#private-scriptentity)
* [subscriberID](scriptingenginesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](scriptingenginesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](scriptingenginesystem.md#static-message_register)
* [MESSAGE_UPDATE](scriptingenginesystem.md#static-message_update)

### Methods

* [Destroy](scriptingenginesystem.md#destroy)
* [OnDestroy](scriptingenginesystem.md#protected-ondestroy)
* [OnMessage](scriptingenginesystem.md#onmessage)
* [Update](scriptingenginesystem.md#protected-update)
* [getEntitiesByLayer](scriptingenginesystem.md#private-getentitiesbylayer)
* [getEntitiesByTag](scriptingenginesystem.md#private-getentitiesbytag)
* [getEntityByID](scriptingenginesystem.md#private-getentitybyid)
* [getScriptEntity](scriptingenginesystem.md#private-getscriptentity)
* [sendMessage](scriptingenginesystem.md#private-sendmessage)
* [EVALUATOR](scriptingenginesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new ScriptingEngineSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `ref`: string, `scene?`: [IScene](../interfaces/iscene.md), `scripts`: Map‹string, [ScriptAsset](scriptasset.md)›, `scriptEntity`: [SystemEntity](systementity.md) | undefined, `reference`: [ScriptingReference](scriptingreference.md) | undefined, `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[ScriptingEngineSystem](scriptingenginesystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`ref` | string | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`scripts` | Map‹string, [ScriptAsset](scriptasset.md)› | new Map() |
`scriptEntity` | [SystemEntity](systementity.md) &#124; undefined | undefined |
`reference` | [ScriptingReference](scriptingreference.md) &#124; undefined | undefined |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[ScriptingEngineSystem](scriptingenginesystem.md)*

## Properties

### `Private` assets

• **assets**: *Map‹string, [ScriptAsset](scriptasset.md)›*

___

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` reference

• **reference**: *[ScriptingReference](scriptingreference.md)*

reference provides the functions interface for scripts to interact with
the game engine

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

___

### `Private` scriptEntity

• **scriptEntity**: *[SystemEntity](systementity.md) | undefined*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](system.md).[MESSAGE_DEREGISTER](system.md#static-message_deregister)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](system.md).[MESSAGE_UPDATE](system.md#static-message_update)*

## Methods

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [System](system.md).[Destroy](system.md#destroy)*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` OnDestroy

▸ **OnDestroy**(): *void*

*Inherited from [System](system.md).[OnDestroy](system.md#protected-ondestroy)*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](system.md).[Update](system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` getEntitiesByLayer

▸ **getEntitiesByLayer**(`layer`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`layer` | string |

**Returns:** *[SystemEntity](systementity.md)[]*

___

### `Private` getEntitiesByTag

▸ **getEntitiesByTag**(`tag`: string): *[SystemEntity](systementity.md)[]*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |

**Returns:** *[SystemEntity](systementity.md)[]*

___

### `Private` getEntityByID

▸ **getEntityByID**(`id`: number): *[SystemEntity](systementity.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |

**Returns:** *[SystemEntity](systementity.md) | undefined*

___

### `Private` getScriptEntity

▸ **getScriptEntity**(): *[SystemEntity](systementity.md) | undefined*

**Returns:** *[SystemEntity](systementity.md) | undefined*

___

### `Private` sendMessage

▸ **sendMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Track all entities

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
