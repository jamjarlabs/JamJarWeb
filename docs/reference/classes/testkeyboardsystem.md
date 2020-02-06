
# Class: TestKeyboardSystem

TestKeyboardSystem is an extension of the KeyboardSystem that exposes the keypress functions,
allows testing them without having to use JS event listeners

## Hierarchy

  ↳ [KeyboardSystem](keyboardsystem.md)

  ↳ **TestKeyboardSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](testkeyboardsystem.md#constructor)

### Properties

* [entities](testkeyboardsystem.md#protected-entities)
* [messageBus](testkeyboardsystem.md#protected-messagebus)
* [scene](testkeyboardsystem.md#protected-optional-scene)
* [subscriberID](testkeyboardsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](testkeyboardsystem.md#static-message_deregister)
* [MESSAGE_KEY_DOWN](testkeyboardsystem.md#static-message_key_down)
* [MESSAGE_KEY_UP](testkeyboardsystem.md#static-message_key_up)
* [MESSAGE_REGISTER](testkeyboardsystem.md#static-message_register)
* [MESSAGE_UPDATE](testkeyboardsystem.md#static-message_update)

### Methods

* [Destroy](testkeyboardsystem.md#destroy)
* [GetSystemEntity](testkeyboardsystem.md#protected-getsystementity)
* [OnDestroy](testkeyboardsystem.md#protected-ondestroy)
* [OnMessage](testkeyboardsystem.md#onmessage)
* [SimulateKeyEvent](testkeyboardsystem.md#simulatekeyevent)
* [Update](testkeyboardsystem.md#protected-update)
* [keyEvent](testkeyboardsystem.md#protected-keyevent)

## Constructors

###  constructor

\+ **new TestKeyboardSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLDocument, `__namedParameters`: object): *[TestKeyboardSystem](testkeyboardsystem.md)*

*Inherited from [KeyboardSystem](keyboardsystem.md).[constructor](keyboardsystem.md#constructor)*

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

**Returns:** *[TestKeyboardSystem](testkeyboardsystem.md)*

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

### `Static` MESSAGE_KEY_DOWN

▪ **MESSAGE_KEY_DOWN**: *string* = "keyboard_key_down"

*Inherited from [KeyboardSystem](keyboardsystem.md).[MESSAGE_KEY_DOWN](keyboardsystem.md#static-message_key_down)*

___

### `Static` MESSAGE_KEY_UP

▪ **MESSAGE_KEY_UP**: *string* = "keyboard_key_up"

*Inherited from [KeyboardSystem](keyboardsystem.md).[MESSAGE_KEY_UP](keyboardsystem.md#static-message_key_up)*

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

*Inherited from [KeyboardSystem](keyboardsystem.md).[OnDestroy](keyboardsystem.md#protected-ondestroy)*

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

###  SimulateKeyEvent

▸ **SimulateKeyEvent**(`event`: KeyboardEvent): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | KeyboardEvent |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(): *void*

*Inherited from [KeyboardSystem](keyboardsystem.md).[Update](keyboardsystem.md#protected-update)*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Returns:** *void*

___

### `Protected` keyEvent

▸ **keyEvent**(`event`: KeyboardEvent): *void*

*Inherited from [KeyboardSystem](keyboardsystem.md).[keyEvent](keyboardsystem.md#protected-keyevent)*

When a Keyboard Event occurs; used to store keyboard events to be dispatched at the next update.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`event` | KeyboardEvent | Keyboard Event  |

**Returns:** *void*
