
# Class: TestPointerSystem

TestKeyboardSystem is an extension of the PointerSystem that exposes the pointer event functions,
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
* [MESSAGE_DOWN](testpointersystem.md#static-message_down)
* [MESSAGE_MOVE](testpointersystem.md#static-message_move)
* [MESSAGE_REGISTER](testpointersystem.md#static-message_register)
* [MESSAGE_UP](testpointersystem.md#static-message_up)
* [MESSAGE_UPDATE](testpointersystem.md#static-message_update)

### Methods

* [Destroy](testpointersystem.md#destroy)
* [GetSystemEntity](testpointersystem.md#protected-getsystementity)
* [OnDestroy](testpointersystem.md#protected-ondestroy)
* [OnMessage](testpointersystem.md#onmessage)
* [SimulatePointerEvent](testpointersystem.md#simulatepointerevent)
* [Update](testpointersystem.md#protected-update)
* [pointerEvent](testpointersystem.md#protected-pointerevent)

## Constructors

###  constructor

\+ **new TestPointerSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLElement, `__namedParameters`: object): *[TestPointerSystem](testpointersystem.md)*

*Inherited from [PointerSystem](pointersystem.md).[constructor](pointersystem.md#constructor)*

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

**Returns:** *[TestPointerSystem](testpointersystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

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

### `Static` MESSAGE_DOWN

▪ **MESSAGE_DOWN**: *string* = "pointer_down"

*Inherited from [PointerSystem](pointersystem.md).[MESSAGE_DOWN](pointersystem.md#static-message_down)*

___

### `Static` MESSAGE_MOVE

▪ **MESSAGE_MOVE**: *string* = "pointer_move"

*Inherited from [PointerSystem](pointersystem.md).[MESSAGE_MOVE](pointersystem.md#static-message_move)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_UP

▪ **MESSAGE_UP**: *string* = "pointer_up"

*Inherited from [PointerSystem](pointersystem.md).[MESSAGE_UP](pointersystem.md#static-message_up)*

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

###  SimulatePointerEvent

▸ **SimulatePointerEvent**(`event`: PointerEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | PointerEvent |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(): *void*

*Inherited from [PointerSystem](pointersystem.md).[Update](pointersystem.md#protected-update)*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Returns:** *void*

___

### `Protected` pointerEvent

▸ **pointerEvent**(`event`: PointerEvent): *void*

*Inherited from [PointerSystem](pointersystem.md).[pointerEvent](pointersystem.md#protected-pointerevent)*

When a Pointer Event occurs; used to store pointer events to be dispatched at the next update.
Adds in useful information, such as pointer position within camera bounds, pointer world position
for each camera and if the pointer is within a camera's bounds.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | PointerEvent | Pointer Event  |

**Returns:** *void*
