
# Class: PointerSystem

PointerSystem handles Pointer (mouse, touch etc.) input events, converting them into JamJar ECS messages.

## Hierarchy

  ↳ [System](system.md)

  ↳ **PointerSystem**

  ↳ [TestPointerSystem](testpointersystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](pointersystem.md#constructor)

### Properties

* [entities](pointersystem.md#protected-entities)
* [inputElement](pointersystem.md#private-inputelement)
* [isFullscreen](pointersystem.md#private-isfullscreen)
* [lockedPointerPosition](pointersystem.md#private-lockedpointerposition)
* [messageBus](pointersystem.md#protected-messagebus)
* [pointers](pointersystem.md#private-pointers)
* [scene](pointersystem.md#protected-optional-scene)
* [subscriberID](pointersystem.md#subscriberid)
* [MESSAGE_DEREGISTER](pointersystem.md#static-message_deregister)
* [MESSAGE_REGISTER](pointersystem.md#static-message_register)
* [MESSAGE_UPDATE](pointersystem.md#static-message_update)

### Methods

* [Destroy](pointersystem.md#destroy)
* [OnDestroy](pointersystem.md#protected-ondestroy)
* [OnMessage](pointersystem.md#onmessage)
* [Update](pointersystem.md#protected-update)
* [pointerEvent](pointersystem.md#protected-pointerevent)
* [EVALUATOR](pointersystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new PointerSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLElement, `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `pointers`: [string, [Pointer](pointer.md)][], `isFullscreen`: boolean, `lockedPointerPosition?`: [Vector](vector.md)): *[PointerSystem](pointersystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`inputElement` | HTMLElement | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`pointers` | [string, [Pointer](pointer.md)][] | [] |
`isFullscreen` | boolean | false |
`lockedPointerPosition?` | [Vector](vector.md) | - |

**Returns:** *[PointerSystem](pointersystem.md)*

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

### `Private` inputElement

• **inputElement**: *HTMLElement*

The HTML element to get pointer events on.

___

### `Private` isFullscreen

• **isFullscreen**: *boolean*

If the game is in fullscreen mode or not.
true = in fullscreen, false = not in fullscreen

___

### `Private` lockedPointerPosition

• **lockedPointerPosition**: *[Vector](vector.md) | undefined*

Position of the pointer if it is locked, used with the PointerAPI to
keep track of pointer position using movementX and movementY.
If it is undefined there is no pointer lock.

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` pointers

• **pointers**: *[string, [Pointer](pointer.md)][]*

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

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(): *void*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Returns:** *void*

___

### `Protected` pointerEvent

▸ **pointerEvent**(`event`: PointerEvent): *void*

When a Pointer Event occurs; used to store pointer events to be dispatched at the next update.
Adds in useful information, such as pointer position within camera bounds, pointer world position
for each camera and if the pointer is within a camera's bounds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | PointerEvent | Pointer Event  |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Ensure has Camera and Transform

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
