
# Class: HTTPImageSystem

HTTPImageSystem handles loading image assets over HTTP and making them
available to the engine for rendering.

## Hierarchy

  ↳ [MapSystem](mapsystem.md)

  ↳ **HTTPImageSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](httpimagesystem.md#constructor)

### Properties

* [entities](httpimagesystem.md#protected-entities)
* [images](httpimagesystem.md#private-images)
* [messageBus](httpimagesystem.md#protected-messagebus)
* [scene](httpimagesystem.md#protected-optional-scene)
* [subscriberID](httpimagesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](httpimagesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](httpimagesystem.md#static-message_register)
* [MESSAGE_REQUEST_CLEAR](httpimagesystem.md#static-message_request_clear)
* [MESSAGE_REQUEST_FLUSH](httpimagesystem.md#static-message_request_flush)
* [MESSAGE_UPDATE](httpimagesystem.md#static-message_update)

### Methods

* [Destroy](httpimagesystem.md#destroy)
* [OnDestroy](httpimagesystem.md#protected-ondestroy)
* [OnMessage](httpimagesystem.md#onmessage)
* [Update](httpimagesystem.md#protected-update)
* [clear](httpimagesystem.md#private-clear)
* [flush](httpimagesystem.md#private-flush)
* [load](httpimagesystem.md#private-load)
* [onError](httpimagesystem.md#protected-onerror)
* [onLoad](httpimagesystem.md#protected-onload)
* [register](httpimagesystem.md#protected-register)
* [remove](httpimagesystem.md#protected-remove)

## Constructors

###  constructor

\+ **new HTTPImageSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `images`: [ImageAsset](imageasset.md)[]): *[HTTPImageSystem](httpimagesystem.md)*

*Overrides [MapSystem](mapsystem.md).[constructor](mapsystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`images` | [ImageAsset](imageasset.md)[] | [] |

**Returns:** *[HTTPImageSystem](httpimagesystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [MapSystem](mapsystem.md).[entities](mapsystem.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` images

• **images**: *[ImageAsset](imageasset.md)[]*

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

▪ **MESSAGE_DEREGISTER**: *"stateful_system_deregister"* = "stateful_system_deregister"

*Inherited from [StatefulSystem](statefulsystem.md).[MESSAGE_DEREGISTER](statefulsystem.md#static-message_deregister)*

Message to deregister an entity + components with a system so it is no longer tracked.

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"stateful_system_register"* = "stateful_system_register"

*Inherited from [StatefulSystem](statefulsystem.md).[MESSAGE_REGISTER](statefulsystem.md#static-message_register)*

Message to register an entity + components with a system so it can be tracked.

___

### `Static` MESSAGE_REQUEST_CLEAR

▪ **MESSAGE_REQUEST_CLEAR**: *"request_image_clear"* = "request_image_clear"

___

### `Static` MESSAGE_REQUEST_FLUSH

▪ **MESSAGE_REQUEST_FLUSH**: *"request_image_flush"* = "request_image_flush"

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

*Overrides [StatefulSystem](statefulsystem.md).[OnMessage](statefulsystem.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

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

### `Private` clear

▸ **clear**(): *void*

**Returns:** *void*

___

### `Private` flush

▸ **flush**(): *void*

**Returns:** *void*

___

### `Private` load

▸ **load**(`request`: [ImageRequest](imagerequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ImageRequest](imagerequest.md) |

**Returns:** *void*

___

### `Protected` onError

▸ **onError**(`event`: Event | undefined, `image`: HTMLImageElement, `request`: [ImageRequest](imagerequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event &#124; undefined |
`image` | HTMLImageElement |
`request` | [ImageRequest](imagerequest.md) |

**Returns:** *void*

___

### `Protected` onLoad

▸ **onLoad**(`event`: Event | undefined, `image`: HTMLImageElement, `request`: [ImageRequest](imagerequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event &#124; undefined |
`image` | HTMLImageElement |
`request` | [ImageRequest](imagerequest.md) |

**Returns:** *void*

___

### `Protected` register

▸ **register**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *void*

*Inherited from [MapSystem](mapsystem.md).[register](mapsystem.md#protected-register)*

*Overrides [StatefulSystem](statefulsystem.md).[register](statefulsystem.md#protected-abstract-register)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *void*

___

### `Protected` remove

▸ **remove**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

*Inherited from [MapSystem](mapsystem.md).[remove](mapsystem.md#protected-remove)*

*Overrides [StatefulSystem](statefulsystem.md).[remove](statefulsystem.md#protected-abstract-remove)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*
