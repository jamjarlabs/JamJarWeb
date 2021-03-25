# Class: ScriptTriggerSystem

ScriptTriggerSystem handles triggering scripts to be executed based on the
Script component. Interprets Script components to trigger events at the
expected times.

## Hierarchy

* [*MapSystem*](mapsystem.md)

  ↳ **ScriptTriggerSystem**

## Table of contents

### Constructors

- [constructor](scripttriggersystem.md#constructor)

### Properties

- [entities](scripttriggersystem.md#entities)
- [messageBus](scripttriggersystem.md#messagebus)
- [scene](scripttriggersystem.md#scene)
- [subscriberID](scripttriggersystem.md#subscriberid)
- [DESCRIPTOR\_UPDATE](scripttriggersystem.md#descriptor_update)
- [MESSAGE\_DEREGISTER](scripttriggersystem.md#message_deregister)
- [MESSAGE\_REGISTER](scripttriggersystem.md#message_register)
- [MESSAGE\_UPDATE](scripttriggersystem.md#message_update)

### Methods

- [Destroy](scripttriggersystem.md#destroy)
- [OnDestroy](scripttriggersystem.md#ondestroy)
- [OnMessage](scripttriggersystem.md#onmessage)
- [Update](scripttriggersystem.md#update)
- [register](scripttriggersystem.md#register)
- [remove](scripttriggersystem.md#remove)

## Constructors

### constructor

\+ **new ScriptTriggerSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `entities?`: *Map*<number, [*SystemEntity*](systementity.md)\>, `subscriberID?`: *number*): [*ScriptTriggerSystem*](scripttriggersystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`entities?` | *Map*<number, [*SystemEntity*](systementity.md)\> |
`subscriberID?` | *number* |

**Returns:** [*ScriptTriggerSystem*](scripttriggersystem.md)

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

### DESCRIPTOR\_UPDATE

▪ `Readonly` `Static` **DESCRIPTOR\_UPDATE**: *update*= "update"

Descriptor for a script triggered as part of an update event.

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

Inherited from: [MapSystem](mapsystem.md)

___

### Update

▸ **Update**(`dt`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`dt` | *number* |

**Returns:** *void*

Overrides: [MapSystem](mapsystem.md)

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
