# Class: HTTPImageSystem

HTTPImageSystem handles loading image assets over HTTP and making them
available to the engine for rendering.

## Hierarchy

* [*MapSystem*](mapsystem.md)

  ↳ **HTTPImageSystem**

## Table of contents

### Constructors

- [constructor](httpimagesystem.md#constructor)

### Properties

- [entities](httpimagesystem.md#entities)
- [messageBus](httpimagesystem.md#messagebus)
- [scene](httpimagesystem.md#scene)
- [subscriberID](httpimagesystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](httpimagesystem.md#message_deregister)
- [MESSAGE\_REGISTER](httpimagesystem.md#message_register)
- [MESSAGE\_REQUEST\_CLEAR](httpimagesystem.md#message_request_clear)
- [MESSAGE\_REQUEST\_FLUSH](httpimagesystem.md#message_request_flush)
- [MESSAGE\_UPDATE](httpimagesystem.md#message_update)

### Methods

- [Destroy](httpimagesystem.md#destroy)
- [OnDestroy](httpimagesystem.md#ondestroy)
- [OnMessage](httpimagesystem.md#onmessage)
- [Update](httpimagesystem.md#update)
- [onError](httpimagesystem.md#onerror)
- [onLoad](httpimagesystem.md#onload)
- [register](httpimagesystem.md#register)
- [remove](httpimagesystem.md#remove)

## Constructors

### constructor

\+ **new HTTPImageSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `entities?`: *Map*<number, [*SystemEntity*](systementity.md)\>, `subscriberID?`: *number*, `images?`: [*ImageAsset*](imageasset.md)[]): [*HTTPImageSystem*](httpimagesystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`entities?` | *Map*<number, [*SystemEntity*](systementity.md)\> |
`subscriberID?` | *number* |
`images` | [*ImageAsset*](imageasset.md)[] |

**Returns:** [*HTTPImageSystem*](httpimagesystem.md)

Inherited from: [MapSystem](mapsystem.md)

## Properties

### entities

• `Protected` **entities**: *Map*<number, [*SystemEntity*](systementity.md)\>

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

Inherited from: [MapSystem](mapsystem.md).[entities](mapsystem.md#entities)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [MapSystem](mapsystem.md).[messageBus](mapsystem.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [MapSystem](mapsystem.md).[scene](mapsystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [MapSystem](mapsystem.md).[subscriberID](mapsystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_DEREGISTER](mapsystem.md#message_deregister)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_REGISTER](mapsystem.md#message_register)

___

### MESSAGE\_REQUEST\_CLEAR

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_CLEAR**: *request_image_clear*= "request\_image\_clear"

___

### MESSAGE\_REQUEST\_FLUSH

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_FLUSH**: *request_image_flush*= "request\_image\_flush"

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [MapSystem](mapsystem.md).[MESSAGE_UPDATE](mapsystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [MapSystem](mapsystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### onError

▸ `Protected`**onError**(`event`: *undefined* \| Event, `image`: HTMLImageElement, `request`: [*ImageRequest*](imagerequest.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *undefined* \| Event |
`image` | HTMLImageElement |
`request` | [*ImageRequest*](imagerequest.md) |

**Returns:** *void*

___

### onLoad

▸ `Protected`**onLoad**(`event`: *undefined* \| Event, `image`: HTMLImageElement, `request`: [*ImageRequest*](imagerequest.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *undefined* \| Event |
`image` | HTMLImageElement |
`request` | [*ImageRequest*](imagerequest.md) |

**Returns:** *void*

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Inherited from: [MapSystem](mapsystem.md)
