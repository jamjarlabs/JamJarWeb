# Class: ArraySystem

ArraySystem defines a system that tracks entities and components using an array, allowing easy iteration.

## Hierarchy

* [*StatefulSystem*](statefulsystem.md)

  ↳ **ArraySystem**

  ↳↳ [*CollisionSystem*](collisionsystem.md)

  ↳↳ [*InterpolationSystem*](interpolationsystem.md)

  ↳↳ [*RenderSystem*](rendersystem.md)

  ↳↳ [*SpriteSystem*](spritesystem.md)

## Table of contents

### Constructors

- [constructor](arraysystem.md#constructor)

### Properties

- [entities](arraysystem.md#entities)
- [messageBus](arraysystem.md#messagebus)
- [scene](arraysystem.md#scene)
- [subscriberID](arraysystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](arraysystem.md#message_deregister)
- [MESSAGE\_REGISTER](arraysystem.md#message_register)
- [MESSAGE\_UPDATE](arraysystem.md#message_update)

### Methods

- [Destroy](arraysystem.md#destroy)
- [OnDestroy](arraysystem.md#ondestroy)
- [OnMessage](arraysystem.md#onmessage)
- [Update](arraysystem.md#update)
- [register](arraysystem.md#register)
- [remove](arraysystem.md#remove)

## Constructors

### constructor

\+ **new ArraySystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `evaluator?`: [*Evaluator*](../README.md#evaluator), `entities?`: [*SystemEntity*](systementity.md)[], `subscriberID?`: *number*): [*ArraySystem*](arraysystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`evaluator?` | [*Evaluator*](../README.md#evaluator) |
`entities` | [*SystemEntity*](systementity.md)[] |
`subscriberID?` | *number* |

**Returns:** [*ArraySystem*](arraysystem.md)

Inherited from: [StatefulSystem](statefulsystem.md)

## Properties

### entities

• `Protected` **entities**: [*SystemEntity*](systementity.md)[]

The list of entities the system is tracking.

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [StatefulSystem](statefulsystem.md).[messageBus](statefulsystem.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [StatefulSystem](statefulsystem.md).[scene](statefulsystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [StatefulSystem](statefulsystem.md).[subscriberID](statefulsystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_DEREGISTER](statefulsystem.md#message_deregister)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_REGISTER](statefulsystem.md#message_register)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [StatefulSystem](statefulsystem.md).[MESSAGE_UPDATE](statefulsystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [StatefulSystem](statefulsystem.md)

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Overrides: [StatefulSystem](statefulsystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Overrides: [StatefulSystem](statefulsystem.md)
