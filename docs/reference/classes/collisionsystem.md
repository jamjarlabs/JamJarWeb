# Class: CollisionSystem

CollisionSystem watches for collisions between entities with Colliders and Transforms.
It uses a number of algorithms to first do a broad sweep of possible collisions,
then do a narrow sweep of the possible collisions to determine actual collisions and
info around them.
Once it has determined all collisions, it broadcasts them as messages.

## Hierarchy

* [*ArraySystem*](arraysystem.md)

  ↳ **CollisionSystem**

## Table of contents

### Constructors

- [constructor](collisionsystem.md#constructor)

### Properties

- [entities](collisionsystem.md#entities)
- [messageBus](collisionsystem.md#messagebus)
- [scene](collisionsystem.md#scene)
- [subscriberID](collisionsystem.md#subscriberid)
- [DESCRIPTOR\_COLLISION\_ENTER](collisionsystem.md#descriptor_collision_enter)
- [DESCRIPTOR\_COLLISION\_EXIT](collisionsystem.md#descriptor_collision_exit)
- [MESSAGE\_COLLISION\_ENTER](collisionsystem.md#message_collision_enter)
- [MESSAGE\_COLLISION\_EXIT](collisionsystem.md#message_collision_exit)
- [MESSAGE\_DEREGISTER](collisionsystem.md#message_deregister)
- [MESSAGE\_REGISTER](collisionsystem.md#message_register)
- [MESSAGE\_UPDATE](collisionsystem.md#message_update)

### Methods

- [Destroy](collisionsystem.md#destroy)
- [OnDestroy](collisionsystem.md#ondestroy)
- [OnMessage](collisionsystem.md#onmessage)
- [Update](collisionsystem.md#update)
- [register](collisionsystem.md#register)
- [remove](collisionsystem.md#remove)

## Constructors

### constructor

\+ **new CollisionSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `layerPairs?`: [*string*, *string*][], `scene?`: [*IScene*](../interfaces/iscene.md), `narrowAlgorithm?`: [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md), `broadAlgorithm?`: [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md), `colliding?`: [*Collision*](collision.md)[], `entities?`: [*SystemEntity*](systementity.md)[], `subscriberID?`: *number*): [*CollisionSystem*](collisionsystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`layerPairs` | [*string*, *string*][] |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`narrowAlgorithm` | [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md) |
`broadAlgorithm` | [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md) |
`colliding` | [*Collision*](collision.md)[] |
`entities?` | [*SystemEntity*](systementity.md)[] |
`subscriberID?` | *number* |

**Returns:** [*CollisionSystem*](collisionsystem.md)

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

### DESCRIPTOR\_COLLISION\_ENTER

▪ `Readonly` `Static` **DESCRIPTOR\_COLLISION\_ENTER**: *collision_enter*= "collision\_enter"

Descriptor of a script triggered when a collision enter occurs.

___

### DESCRIPTOR\_COLLISION\_EXIT

▪ `Readonly` `Static` **DESCRIPTOR\_COLLISION\_EXIT**: *collision_exit*= "collision\_exit"

Descriptor of a script triggered when a collision exit occurs.

___

### MESSAGE\_COLLISION\_ENTER

▪ `Readonly` `Static` **MESSAGE\_COLLISION\_ENTER**: *collision_enter*= "collision\_enter"

Message published when a collision enter occurs.

___

### MESSAGE\_COLLISION\_EXIT

▪ `Readonly` `Static` **MESSAGE\_COLLISION\_EXIT**: *collision_exit*= "collision\_exit"

Message published when a collision exit occurs.

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

Inherited from: [ArraySystem](arraysystem.md)

___

### Update

▸ **Update**(): *void*

**Returns:** *void*

Overrides: [ArraySystem](arraysystem.md)

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
