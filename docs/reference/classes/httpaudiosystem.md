
# Class: HTTPAudioSystem

HTTPAudioSystem handles loading audio assets over HTTP and making them
available to the engine for playing.

## Hierarchy

  ↳ [MapSystem](mapsystem.md)

  ↳ **HTTPAudioSystem**

  ↳ [TestHTTPAudioSystem](testhttpaudiosystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](httpaudiosystem.md#constructor)

### Properties

* [assets](httpaudiosystem.md#private-assets)
* [context](httpaudiosystem.md#private-context)
* [entities](httpaudiosystem.md#protected-entities)
* [messageBus](httpaudiosystem.md#protected-messagebus)
* [scene](httpaudiosystem.md#protected-optional-scene)
* [subscriberID](httpaudiosystem.md#subscriberid)
* [MESSAGE_DEREGISTER](httpaudiosystem.md#static-message_deregister)
* [MESSAGE_REGISTER](httpaudiosystem.md#static-message_register)
* [MESSAGE_REQUEST_CLEAR](httpaudiosystem.md#static-message_request_clear)
* [MESSAGE_REQUEST_FLUSH](httpaudiosystem.md#static-message_request_flush)
* [MESSAGE_UPDATE](httpaudiosystem.md#static-message_update)

### Methods

* [Destroy](httpaudiosystem.md#destroy)
* [OnDestroy](httpaudiosystem.md#protected-ondestroy)
* [OnMessage](httpaudiosystem.md#onmessage)
* [Update](httpaudiosystem.md#protected-update)
* [clear](httpaudiosystem.md#private-clear)
* [flush](httpaudiosystem.md#private-flush)
* [handleResponse](httpaudiosystem.md#protected-handleresponse)
* [httpError](httpaudiosystem.md#protected-httperror)
* [httpSuccess](httpaudiosystem.md#protected-httpsuccess)
* [load](httpaudiosystem.md#private-load)
* [register](httpaudiosystem.md#protected-register)
* [remove](httpaudiosystem.md#protected-remove)

## Constructors

###  constructor

\+ **new HTTPAudioSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `assets`: [AudioAsset](audioasset.md)[], `context`: AudioContext): *[HTTPAudioSystem](httpaudiosystem.md)*

*Overrides [MapSystem](mapsystem.md).[constructor](mapsystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`assets` | [AudioAsset](audioasset.md)[] | [] |
`context` | AudioContext | new AudioContext() |

**Returns:** *[HTTPAudioSystem](httpaudiosystem.md)*

## Properties

### `Private` assets

• **assets**: *[AudioAsset](audioasset.md)[]*

___

### `Private` context

• **context**: *AudioContext*

___

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [MapSystem](mapsystem.md).[entities](mapsystem.md#protected-entities)*

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

▪ **MESSAGE_REQUEST_CLEAR**: *"request_audio_clear"* = "request_audio_clear"

Message to clear out loaded assets.

___

### `Static` MESSAGE_REQUEST_FLUSH

▪ **MESSAGE_REQUEST_FLUSH**: *"request_audio_flush"* = "request_audio_flush"

Message to send out all loaded asset messages that are currently loaded.

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

### `Protected` handleResponse

▸ **handleResponse**(`response`: Response): *Promise‹ArrayBuffer›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | Response |

**Returns:** *Promise‹ArrayBuffer›*

___

### `Protected` httpError

▸ **httpError**(`request`: [AudioRequest](audiorequest.md), `error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AudioRequest](audiorequest.md) |
`error` | Error |

**Returns:** *void*

___

### `Protected` httpSuccess

▸ **httpSuccess**(`buffer`: AudioBuffer, `request`: [AudioRequest](audiorequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | AudioBuffer |
`request` | [AudioRequest](audiorequest.md) |

**Returns:** *void*

___

### `Private` load

▸ **load**(`request`: [AudioRequest](audiorequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [AudioRequest](audiorequest.md) |

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
