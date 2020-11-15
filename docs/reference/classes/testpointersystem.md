
# Class: TestPointerSystem

TestPointerSystem is an extension of the PointerSystem that exposes the pointer event functions,
allows testing them without having to use JS event listeners

## Hierarchy

  ↳ [PointerSystem](pointersystem.md)

  ↳ **TestPointerSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](testpointersystem.md#constructor)

### Properties

* [entities](testpointersystem.md#protected-entities)
* [messageBus](testpointersystem.md#protected-messagebus)
* [scene](testpointersystem.md#protected-optional-scene)
* [subscriberID](testpointersystem.md#subscriberid)
* [MESSAGE_DEREGISTER](testpointersystem.md#static-message_deregister)
* [MESSAGE_REGISTER](testpointersystem.md#static-message_register)
* [MESSAGE_UPDATE](testpointersystem.md#static-message_update)

### Methods

* [Destroy](testpointersystem.md#destroy)
* [OnDestroy](testpointersystem.md#protected-ondestroy)
* [OnMessage](testpointersystem.md#onmessage)
* [SimulateMoveEvent](testpointersystem.md#simulatemoveevent)
* [SimulatePointerEvent](testpointersystem.md#simulatepointerevent)
* [SimulateWheelEvent](testpointersystem.md#simulatewheelevent)
* [Update](testpointersystem.md#update)
* [moveEvent](testpointersystem.md#protected-moveevent)
* [pointerEvent](testpointersystem.md#protected-pointerevent)
* [wheelEvent](testpointersystem.md#protected-wheelevent)

## Constructors

###  constructor

\+ **new TestPointerSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLElement, `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `isFullscreen`: boolean, `lockedPointerPosition?`: [Vector](vector.md), `lastWheelEvent?`: WheelEvent, `lastMoveEvent?`: PointerEvent, `pointersToPublish`: PointerEvent[], `lastPublishedPointers`: [Pointer](pointer.md)[]): *[TestPointerSystem](testpointersystem.md)*

*Inherited from [PointerSystem](pointersystem.md).[constructor](pointersystem.md#constructor)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`inputElement` | HTMLElement | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`isFullscreen` | boolean | false |
`lockedPointerPosition?` | [Vector](vector.md) | - |
`lastWheelEvent?` | WheelEvent | - |
`lastMoveEvent?` | PointerEvent | - |
`pointersToPublish` | PointerEvent[] | [] |
`lastPublishedPointers` | [Pointer](pointer.md)[] | [] |

**Returns:** *[TestPointerSystem](testpointersystem.md)*

## Properties

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

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

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

*Inherited from [PointerSystem](pointersystem.md).[OnMessage](pointersystem.md#onmessage)*

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  SimulateMoveEvent

▸ **SimulateMoveEvent**(`event`: PointerEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |

**Returns:** *void*

___

###  SimulatePointerEvent

▸ **SimulatePointerEvent**(`event`: PointerEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |

**Returns:** *void*

___

###  SimulateWheelEvent

▸ **SimulateWheelEvent**(`event`: WheelEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | WheelEvent |

**Returns:** *void*

___

###  Update

▸ **Update**(): *void*

*Inherited from [PointerSystem](pointersystem.md).[Update](pointersystem.md#update)*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Returns:** *void*

___

### `Protected` moveEvent

▸ **moveEvent**(`event`: PointerEvent): *void*

*Inherited from [PointerSystem](pointersystem.md).[moveEvent](pointersystem.md#protected-moveevent)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |

**Returns:** *void*

___

### `Protected` pointerEvent

▸ **pointerEvent**(`event`: PointerEvent): *void*

*Inherited from [PointerSystem](pointersystem.md).[pointerEvent](pointersystem.md#protected-pointerevent)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |

**Returns:** *void*

___

### `Protected` wheelEvent

▸ **wheelEvent**(`event`: WheelEvent): *void*

*Inherited from [PointerSystem](pointersystem.md).[wheelEvent](pointersystem.md#protected-wheelevent)*

When a Wheel Event occurs; used to store the last wheel event to be
dispatched at the next update. This is to throttle this event which can
be fired many times.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | WheelEvent | Fired wheel event  |

**Returns:** *void*
