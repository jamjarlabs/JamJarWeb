
# Class: KeyboardSystem

KeyboardSystem handles Keyboard input events, converting them into JamJar ECS messages.

## Hierarchy

  ↳ [System](system.md)

  ↳ **KeyboardSystem**

  ↳ [TestKeyboardSystem](testkeyboardsystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](keyboardsystem.md#constructor)

### Properties

* [entities](keyboardsystem.md#protected-entities)
* [inputElement](keyboardsystem.md#private-inputelement)
* [keyEvents](keyboardsystem.md#private-keyevents)
* [messageBus](keyboardsystem.md#protected-messagebus)
* [scene](keyboardsystem.md#protected-optional-scene)
* [subscriberID](keyboardsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](keyboardsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](keyboardsystem.md#static-message_register)
* [MESSAGE_UPDATE](keyboardsystem.md#static-message_update)

### Methods

* [Destroy](keyboardsystem.md#destroy)
* [GetSystemEntity](keyboardsystem.md#protected-getsystementity)
* [OnDestroy](keyboardsystem.md#protected-ondestroy)
* [OnMessage](keyboardsystem.md#onmessage)
* [Update](keyboardsystem.md#protected-update)
* [keyEvent](keyboardsystem.md#protected-keyevent)

## Constructors

###  constructor

\+ **new KeyboardSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLDocument, `__namedParameters`: object): *[KeyboardSystem](keyboardsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪ **inputElement**: *HTMLDocument*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: [], subscriberID: undefined, keyEvents: [] }

Name | Type |
------ | ------ |
`entities` | [SystemEntity](systementity.md)‹›[] |
`keyEvents` | [string, string][] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[KeyboardSystem](keyboardsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Private` inputElement

• **inputElement**: *HTMLDocument*

___

### `Private` keyEvents

• **keyEvents**: *[string, string][]*

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

*Overrides [System](system.md).[OnDestroy](system.md#protected-ondestroy)*

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

### `Protected` keyEvent

▸ **keyEvent**(`event`: KeyboardEvent): *void*

When a Keyboard Event occurs; used to store keyboard events to be dispatched at the next update.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | KeyboardEvent | Keyboard Event  |

**Returns:** *void*
