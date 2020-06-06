
# Class: AudioSourceSystem

AudioSourceSystem handles interpreting AudioSources and playing the audio
associated with them with the Audio Web API.

## Hierarchy

  ↳ [System](system.md)

  ↳ **AudioSourceSystem**

  ↳ [TestAudioSourceSystem](testaudiosourcesystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](audiosourcesystem.md#constructor)

### Properties

* [assets](audiosourcesystem.md#private-assets)
* [context](audiosourcesystem.md#private-context)
* [entities](audiosourcesystem.md#protected-entities)
* [instances](audiosourcesystem.md#private-instances)
* [messageBus](audiosourcesystem.md#protected-messagebus)
* [scene](audiosourcesystem.md#protected-optional-scene)
* [subscriberID](audiosourcesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](audiosourcesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](audiosourcesystem.md#static-message_register)
* [MESSAGE_UPDATE](audiosourcesystem.md#static-message_update)

### Methods

* [Destroy](audiosourcesystem.md#destroy)
* [OnDestroy](audiosourcesystem.md#protected-ondestroy)
* [OnMessage](audiosourcesystem.md#onmessage)
* [Update](audiosourcesystem.md#protected-update)
* [audioEnd](audiosourcesystem.md#protected-audioend)
* [load](audiosourcesystem.md#private-load)
* [EVALUATOR](audiosourcesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new AudioSourceSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `instances`: Map‹number, AudioBufferSourceNode›, `assets`: Map‹string, AudioBuffer›, `context`: AudioContext): *[AudioSourceSystem](audiosourcesystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`instances` | Map‹number, AudioBufferSourceNode› | new Map() |
`assets` | Map‹string, AudioBuffer› | new Map() |
`context` | AudioContext | new AudioContext() |

**Returns:** *[AudioSourceSystem](audiosourcesystem.md)*

## Properties

### `Private` assets

• **assets**: *Map‹string, AudioBuffer›*

Map of audio data, mapped to unique key names for retrieval and reuse.

___

### `Private` context

• **context**: *AudioContext*

The context for playing the audio.

___

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` instances

• **instances**: *Map‹number, AudioBufferSourceNode›*

Map of audio instances, mapped to entity IDs.

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

### `Protected` audioEnd

▸ **audioEnd**(`entityID`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entityID` | number |

**Returns:** *void*

___

### `Private` load

▸ **load**(`asset`: [AudioAsset](audioasset.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | [AudioAsset](audioasset.md) |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Only entities with an audio source.

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
