# Class: SpriteSystem

SpriteSystem handles converting sprites into renderable objects that are fed into
a rendering system.

## Hierarchy

* [*ArraySystem*](arraysystem.md)

  ↳ **SpriteSystem**

## Table of contents

### Constructors

- [constructor](spritesystem.md#constructor)

### Properties

- [entities](spritesystem.md#entities)
- [messageBus](spritesystem.md#messagebus)
- [scene](spritesystem.md#scene)
- [subscriberID](spritesystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](spritesystem.md#message_deregister)
- [MESSAGE\_REGISTER](spritesystem.md#message_register)
- [MESSAGE\_UPDATE](spritesystem.md#message_update)

### Methods

- [Destroy](spritesystem.md#destroy)
- [OnDestroy](spritesystem.md#ondestroy)
- [OnMessage](spritesystem.md#onmessage)
- [Update](spritesystem.md#update)
- [register](spritesystem.md#register)
- [remove](spritesystem.md#remove)

## Constructors

### constructor

\+ **new SpriteSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `frustumCuller?`: [*IFrustumCuller*](../interfaces/ifrustumculler.md), `renderables?`: [*IRenderable*](../interfaces/irenderable.md)[], `entities?`: [*SystemEntity*](systementity.md)[], `subscriberID?`: *number*): [*SpriteSystem*](spritesystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`frustumCuller` | [*IFrustumCuller*](../interfaces/ifrustumculler.md) |
`renderables` | [*IRenderable*](../interfaces/irenderable.md)[] |
`entities?` | [*SystemEntity*](systementity.md)[] |
`subscriberID?` | *number* |

**Returns:** [*SpriteSystem*](spritesystem.md)

Inherited from: [ArraySystem](arraysystem.md)

## Properties

### entities

• `Protected` **entities**: [*SystemEntity*](systementity.md)[]

The list of entities the system is tracking.

Inherited from: [ArraySystem](arraysystem.md).[entities](arraysystem.md#entities)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [ArraySystem](arraysystem.md).[messageBus](arraysystem.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [ArraySystem](arraysystem.md).[scene](arraysystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [ArraySystem](arraysystem.md).[subscriberID](arraysystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_DEREGISTER](arraysystem.md#message_deregister)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_REGISTER](arraysystem.md#message_register)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_UPDATE](arraysystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [ArraySystem](arraysystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)
