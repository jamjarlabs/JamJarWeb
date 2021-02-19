# Class: MapSystem

MapSystem defines a system that tracks entities and components using a map, allowing looking up an entity and its
components quickly by entity ID.

## Hierarchy

* [*StatefulSystem*](statefulsystem.md)

  ↳ **MapSystem**

  ↳↳ [*AudioSourceSystem*](audiosourcesystem.md)

  ↳↳ [*FullscreenSystem*](fullscreensystem.md)

  ↳↳ [*HTTPAudioSystem*](httpaudiosystem.md)

  ↳↳ [*HTTPImageSystem*](httpimagesystem.md)

  ↳↳ [*HTTPScriptSystem*](httpscriptsystem.md)

  ↳↳ [*KeyboardSystem*](keyboardsystem.md)

  ↳↳ [*MotionSystem*](motionsystem.md)

  ↳↳ [*PointerSystem*](pointersystem.md)

  ↳↳ [*PrimitiveSystem*](primitivesystem.md)

  ↳↳ [*ScriptTriggerSystem*](scripttriggersystem.md)

  ↳↳ [*ScriptingEngineSystem*](scriptingenginesystem.md)

  ↳↳ [*SpriteAnimatorSystem*](spriteanimatorsystem.md)

  ↳↳ [*TextSystem*](textsystem.md)

## Table of contents

### Constructors

- [constructor](mapsystem.md#constructor)

### Properties

- [entities](mapsystem.md#entities)
- [messageBus](mapsystem.md#messagebus)
- [scene](mapsystem.md#scene)
- [subscriberID](mapsystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](mapsystem.md#message_deregister)
- [MESSAGE\_REGISTER](mapsystem.md#message_register)
- [MESSAGE\_UPDATE](mapsystem.md#message_update)

### Methods

- [Destroy](mapsystem.md#destroy)
- [OnDestroy](mapsystem.md#ondestroy)
- [OnMessage](mapsystem.md#onmessage)
- [Update](mapsystem.md#update)
- [register](mapsystem.md#register)
- [remove](mapsystem.md#remove)

## Constructors

### constructor

\+ **new MapSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `evaluator?`: [*Evaluator*](../README.md#evaluator), `entities?`: *Map*<number, [*SystemEntity*](systementity.md)\>, `subscriberID?`: *number*): [*MapSystem*](mapsystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`evaluator?` | [*Evaluator*](../README.md#evaluator) |
`entities` | *Map*<number, [*SystemEntity*](systementity.md)\> |
`subscriberID?` | *number* |

**Returns:** [*MapSystem*](mapsystem.md)

Inherited from: [StatefulSystem](statefulsystem.md)

## Properties

### entities

• `Protected` **entities**: *Map*<number, [*SystemEntity*](systementity.md)\>

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [StatefulSystem](statefulsystem.md).[messageBus](statefulsystem.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [StatefulSystem](statefulsystem.md).[scene](statefulsystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [StatefulSystem](statefulsystem.md).[subscriberID](statefulsystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_DEREGISTER](statefulsystem.md#message_deregister)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_REGISTER](statefulsystem.md#message_register)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_UPDATE](statefulsystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Overrides: [StatefulSystem](statefulsystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Overrides: [StatefulSystem](statefulsystem.md)
