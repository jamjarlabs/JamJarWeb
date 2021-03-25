# Class: PointerSystem

PointerSystem handles Pointer (mouse, touch etc.) input events, converting them into JamJar ECS messages.

## Hierarchy

* [*MapSystem*](mapsystem.md)

  ↳ **PointerSystem**

## Table of contents

### Constructors

- [constructor](pointersystem.md#constructor)

### Properties

- [entities](pointersystem.md#entities)
- [messageBus](pointersystem.md#messagebus)
- [scene](pointersystem.md#scene)
- [subscriberID](pointersystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](pointersystem.md#message_deregister)
- [MESSAGE\_REGISTER](pointersystem.md#message_register)
- [MESSAGE\_UPDATE](pointersystem.md#message_update)

### Methods

- [Destroy](pointersystem.md#destroy)
- [OnDestroy](pointersystem.md#ondestroy)
- [OnMessage](pointersystem.md#onmessage)
- [Update](pointersystem.md#update)
- [moveEvent](pointersystem.md#moveevent)
- [pointerEvent](pointersystem.md#pointerevent)
- [register](pointersystem.md#register)
- [remove](pointersystem.md#remove)
- [wheelEvent](pointersystem.md#wheelevent)

## Constructors

### constructor

\+ **new PointerSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `inputElement`: HTMLElement, `scene?`: [*IScene*](../interfaces/iscene.md), `entities?`: *Map*<number, [*SystemEntity*](systementity.md)\>, `subscriberID?`: *number*, `isFullscreen?`: *boolean*, `lockedPointerPosition?`: [*Vector*](vector.md), `lastWheelEvent?`: WheelEvent, `lastMoveEvent?`: PointerEvent, `pointersToPublish?`: PointerEvent[], `lastPublishedPointers?`: [*Pointer*](pointer.md)[]): [*PointerSystem*](pointersystem.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) | - |
`inputElement` | HTMLElement | - |
`scene?` | [*IScene*](../interfaces/iscene.md) | - |
`entities?` | *Map*<number, [*SystemEntity*](systementity.md)\> | - |
`subscriberID?` | *number* | - |
`isFullscreen` | *boolean* | false |
`lockedPointerPosition?` | [*Vector*](vector.md) | - |
`lastWheelEvent?` | WheelEvent | - |
`lastMoveEvent?` | PointerEvent | - |
`pointersToPublish` | PointerEvent[] | - |
`lastPublishedPointers` | [*Pointer*](pointer.md)[] | - |

**Returns:** [*PointerSystem*](pointersystem.md)

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

▸ **Update**(): *void*

**Returns:** *void*

Overrides: [MapSystem](mapsystem.md)

___

### moveEvent

▸ `Protected`**moveEvent**(`event`: PointerEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | PointerEvent |

**Returns:** *void*

___

### pointerEvent

▸ `Protected`**pointerEvent**(`event`: PointerEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | PointerEvent |

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

___

### wheelEvent

▸ `Protected`**wheelEvent**(`event`: WheelEvent): *void*

When a Wheel Event occurs; used to store the last wheel event to be
dispatched at the next update. This is to throttle this event which can
be fired many times.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`event` | WheelEvent | Fired wheel event    |

**Returns:** *void*
