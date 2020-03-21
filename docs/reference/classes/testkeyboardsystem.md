
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
* [MESSAGE_REGISTER](testkeyboardsystem.md#static-message_register)
* [MESSAGE_UPDATE](testkeyboardsystem.md#static-message_update)

### Methods

* [Destroy](testkeyboardsystem.md#destroy)
* [OnDestroy](testkeyboardsystem.md#protected-ondestroy)
* [OnMessage](testkeyboardsystem.md#onmessage)
* [SimulateKeyEvent](testkeyboardsystem.md#simulatekeyevent)
* [Update](testkeyboardsystem.md#protected-update)
* [keyEvent](testkeyboardsystem.md#protected-keyevent)

## Constructors

###  constructor

\+ **new TestKeyboardSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `inputElement`: HTMLDocument, `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `keyEvents`: [string, string][]): *[TestKeyboardSystem](testkeyboardsystem.md)*

*Inherited from [KeyboardSystem](keyboardsystem.md).[constructor](keyboardsystem.md#constructor)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`inputElement` | HTMLDocument | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`keyEvents` | [string, string][] | [] |

**Returns:** *[TestKeyboardSystem](testkeyboardsystem.md)*

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
