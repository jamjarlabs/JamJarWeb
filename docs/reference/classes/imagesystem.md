
# Class: ImageSystem

## Hierarchy

  ↳ [System](system.md)

  ↳ **ImageSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](imagesystem.md#constructor)

### Properties

* [entities](imagesystem.md#protected-entities)
* [images](imagesystem.md#private-images)
* [loadQueue](imagesystem.md#private-loadqueue)
* [messageBus](imagesystem.md#protected-messagebus)
* [scene](imagesystem.md#protected-optional-scene)
* [subscriberID](imagesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](imagesystem.md#static-message_deregister)
* [MESSAGE_FINISH_LOAD](imagesystem.md#static-message_finish_load)
* [MESSAGE_REGISTER](imagesystem.md#static-message_register)
* [MESSAGE_REQUEST_CLEAR](imagesystem.md#static-message_request_clear)
* [MESSAGE_REQUEST_FLUSH](imagesystem.md#static-message_request_flush)
* [MESSAGE_REQUEST_LOAD](imagesystem.md#static-message_request_load)
* [MESSAGE_UPDATE](imagesystem.md#static-message_update)

### Methods

* [Destroy](imagesystem.md#destroy)
* [OnDestroy](imagesystem.md#protected-ondestroy)
* [OnMessage](imagesystem.md#onmessage)
* [Update](imagesystem.md#protected-update)
* [clear](imagesystem.md#private-clear)
* [flush](imagesystem.md#private-flush)
* [load](imagesystem.md#private-load)
* [onError](imagesystem.md#protected-onerror)
* [onLoad](imagesystem.md#protected-onload)

## Constructors

###  constructor

\+ **new ImageSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `__namedParameters`: object): *[ImageSystem](imagesystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: new Map(), subscriberID: undefined, loadQueue: [], images: [] }

Name | Type |
------ | ------ |
`entities` | Map‹number, [SystemEntity](systementity.md)‹›› |
`images` | [ImageAsset](imageasset.md)‹›[] |
`loadQueue` | [ImageAsset](imageasset.md)‹›[] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[ImageSystem](imagesystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Private` images

• **images**: *[ImageAsset](imageasset.md)[]*

___

### `Private` loadQueue

• **loadQueue**: *[ImageAsset](imageasset.md)[]*

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

### `Static` MESSAGE_FINISH_LOAD

▪ **MESSAGE_FINISH_LOAD**: *"request_finish_load_image"* = "request_finish_load_image"

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_REQUEST_CLEAR

▪ **MESSAGE_REQUEST_CLEAR**: *"request_image_clear"* = "request_image_clear"

___

### `Static` MESSAGE_REQUEST_FLUSH

▪ **MESSAGE_REQUEST_FLUSH**: *"request_image_flush"* = "request_image_flush"

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_image_load"* = "request_image_load"

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

### `Private` clear

▸ **clear**(): *void*

**Returns:** *void*

___

### `Private` flush

▸ **flush**(): *void*

**Returns:** *void*

___

### `Private` load

▸ **load**(`name`: string, `src`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`src` | string |

**Returns:** *void*

___

### `Protected` onError

▸ **onError**(`event`: Event | undefined, `image`: HTMLImageElement, `name`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event &#124; undefined |
`image` | HTMLImageElement |
`name` | string |

**Returns:** *void*

___

### `Protected` onLoad

▸ **onLoad**(`event`: Event | undefined, `image`: HTMLImageElement, `name`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event &#124; undefined |
`image` | HTMLImageElement |
`name` | string |

**Returns:** *void*
