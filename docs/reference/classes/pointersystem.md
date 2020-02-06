
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
* [messageBus](pointersystem.md#protected-messagebus)
* [pointers](pointersystem.md#private-pointers)
* [scene](pointersystem.md#protected-optional-scene)
* [subscriberID](pointersystem.md#subscriberid)
* [MESSAGE_DEREGISTER](pointersystem.md#static-message_deregister)
* [MESSAGE_REGISTER](pointersystem.md#static-message_register)
* [MESSAGE_UPDATE](pointersystem.md#static-message_update)

### Methods

* [Destroy](pointersystem.md#destroy)
* [GetSystemEntity](pointersystem.md#protected-getsystementity)
* [OnDestroy](pointersystem.md#protected-ondestroy)
* [OnMessage](pointersystem.md#onmessage)
* [Update](pointersystem.md#protected-update)
* [pointerEvent](pointersystem.md#protected-pointerevent)
* [EVALUATOR](pointersystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new PointerSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLElement, `__namedParameters`: object): *[PointerSystem](pointersystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪ **inputElement**: *HTMLElement*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: [], subscriberID: undefined, pointers: [] }

Name | Type |
------ | ------ |
`entities` | [SystemEntity](systementity.md)‹›[] |
`pointers` | [string, [Pointer](pointer.md)‹›][] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[PointerSystem](pointersystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Private` inputElement

• **inputElement**: *HTMLElement*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

___

### `Private` pointers

• **pointers**: *[string, [Pointer](pointer.md)][]*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

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

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *[SystemEntity](systementity.md) | undefined*

*Inherited from [System](system.md).[GetSystemEntity](system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](systementity.md) | undefined*

The system entity if it exists, otherwise undefined

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

*Inherited from [System](system.md).[OnMessage](system.md#onmessage)*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

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

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
