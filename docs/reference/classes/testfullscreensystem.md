
# Class: TestFullscreenSystem

TestFullscreenSystem is an extension of the FullscreenSystem that exposes the fullscreen functions,
allows testing them without having to use JS event listeners

## Hierarchy

  ↳ [FullscreenSystem](fullscreensystem.md)

  ↳ **TestFullscreenSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](testfullscreensystem.md#constructor)

### Properties

* [entities](testfullscreensystem.md#protected-entities)
* [messageBus](testfullscreensystem.md#protected-messagebus)
* [scene](testfullscreensystem.md#protected-optional-scene)
* [subscriberID](testfullscreensystem.md#subscriberid)
* [MESSAGE_DEREGISTER](testfullscreensystem.md#static-message_deregister)
* [MESSAGE_ENTER_FULLSCREEN](testfullscreensystem.md#static-message_enter_fullscreen)
* [MESSAGE_EXIT_FULLSCREEN](testfullscreensystem.md#static-message_exit_fullscreen)
* [MESSAGE_REGISTER](testfullscreensystem.md#static-message_register)
* [MESSAGE_REQUEST_ENTER_FULLSCREEN](testfullscreensystem.md#static-message_request_enter_fullscreen)
* [MESSAGE_REQUEST_EXIT_FULLSCREEN](testfullscreensystem.md#static-message_request_exit_fullscreen)
* [MESSAGE_UPDATE](testfullscreensystem.md#static-message_update)

### Methods

* [Destroy](testfullscreensystem.md#destroy)
* [OnDestroy](testfullscreensystem.md#protected-ondestroy)
* [OnMessage](testfullscreensystem.md#onmessage)
* [SimulateFullScreenEvent](testfullscreensystem.md#simulatefullscreenevent)
* [Update](testfullscreensystem.md#protected-update)
* [onFullscreenChange](testfullscreensystem.md#protected-onfullscreenchange)

## Constructors

###  constructor

\+ **new TestFullscreenSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `canvas`: HTMLCanvasElement, `document`: HTMLDocument, `__namedParameters`: object): *[TestFullscreenSystem](testfullscreensystem.md)*

*Inherited from [FullscreenSystem](fullscreensystem.md).[constructor](fullscreensystem.md#constructor)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪ **canvas**: *HTMLCanvasElement*

▪ **document**: *HTMLDocument*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: new Map(), subscriberID: undefined }

Name | Type |
------ | ------ |
`entities` | Map‹number, [SystemEntity](systementity.md)‹›› |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[TestFullscreenSystem](testfullscreensystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

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

### `Static` MESSAGE_ENTER_FULLSCREEN

▪ **MESSAGE_ENTER_FULLSCREEN**: *"message_enter_fullscreen"* = "message_enter_fullscreen"

*Inherited from [FullscreenSystem](fullscreensystem.md).[MESSAGE_ENTER_FULLSCREEN](fullscreensystem.md#static-message_enter_fullscreen)*

___

### `Static` MESSAGE_EXIT_FULLSCREEN

▪ **MESSAGE_EXIT_FULLSCREEN**: *"message_exit_fullscreen"* = "message_exit_fullscreen"

*Inherited from [FullscreenSystem](fullscreensystem.md).[MESSAGE_EXIT_FULLSCREEN](fullscreensystem.md#static-message_exit_fullscreen)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_REQUEST_ENTER_FULLSCREEN

▪ **MESSAGE_REQUEST_ENTER_FULLSCREEN**: *"message_request_enter_fullscreen"* = "message_request_enter_fullscreen"

*Inherited from [FullscreenSystem](fullscreensystem.md).[MESSAGE_REQUEST_ENTER_FULLSCREEN](fullscreensystem.md#static-message_request_enter_fullscreen)*

___

### `Static` MESSAGE_REQUEST_EXIT_FULLSCREEN

▪ **MESSAGE_REQUEST_EXIT_FULLSCREEN**: *"message_request_exit_fullscreen"* = "message_request_exit_fullscreen"

*Inherited from [FullscreenSystem](fullscreensystem.md).[MESSAGE_REQUEST_EXIT_FULLSCREEN](fullscreensystem.md#static-message_request_exit_fullscreen)*

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

*Inherited from [FullscreenSystem](fullscreensystem.md).[OnMessage](fullscreensystem.md#onmessage)*

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  SimulateFullScreenEvent

▸ **SimulateFullScreenEvent**(`event`: Event): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](system.md).[Update](system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Protected` onFullscreenChange

▸ **onFullscreenChange**(`event`: Event): *void*

*Inherited from [FullscreenSystem](fullscreensystem.md).[onFullscreenChange](fullscreensystem.md#protected-onfullscreenchange)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *void*
