
# Class: CollisionSystem

CollisionSystem watches for collisions between entities with Colliders and Transforms.
It uses a number of algorithms to first do a broad sweep of possible collisions,
then do a narrow sweep of the possible collisions to determine actual collisions and
info around them.
Once it has determined all collisions, it broadcasts them as messages.

## Hierarchy

  ↳ [System](system.md)

  ↳ **CollisionSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](collisionsystem.md#constructor)

### Properties

* [broadAlgorithm](collisionsystem.md#private-broadalgorithm)
* [colliding](collisionsystem.md#private-colliding)
* [entities](collisionsystem.md#protected-entities)
* [layerPairs](collisionsystem.md#private-layerpairs)
* [messageBus](collisionsystem.md#protected-messagebus)
* [narrowAlgorithm](collisionsystem.md#private-narrowalgorithm)
* [scene](collisionsystem.md#protected-optional-scene)
* [subscriberID](collisionsystem.md#subscriberid)
* [DESCRIPTOR_COLLISION_ENTER](collisionsystem.md#static-descriptor_collision_enter)
* [DESCRIPTOR_COLLISION_EXIT](collisionsystem.md#static-descriptor_collision_exit)
* [MESSAGE_COLLISION_ENTER](collisionsystem.md#static-message_collision_enter)
* [MESSAGE_COLLISION_EXIT](collisionsystem.md#static-message_collision_exit)
* [MESSAGE_DEREGISTER](collisionsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](collisionsystem.md#static-message_register)
* [MESSAGE_UPDATE](collisionsystem.md#static-message_update)

### Methods

* [Destroy](collisionsystem.md#destroy)
* [OnDestroy](collisionsystem.md#protected-ondestroy)
* [OnMessage](collisionsystem.md#onmessage)
* [Update](collisionsystem.md#update)
* [EVALUATOR](collisionsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new CollisionSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `layerPairs`: [string, string][], `scene?`: [IScene](../interfaces/iscene.md), `narrowAlgorithm`: [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md), `broadAlgorithm`: [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md), `colliding`: [Collision](collision.md)[], `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[CollisionSystem](collisionsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`layerPairs` | [string, string][] | [] |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`narrowAlgorithm` | [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md) | new GJKAlgorithm() |
`broadAlgorithm` | [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md) | new AllCollideAlgorithm() |
`colliding` | [Collision](collision.md)[] | [] |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[CollisionSystem](collisionsystem.md)*

## Properties

### `Private` broadAlgorithm

• **broadAlgorithm**: *[ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

___

### `Private` colliding

• **colliding**: *[Collision](collision.md)[]*

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

### `Private` layerPairs

• **layerPairs**: *[string, string][]*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` narrowAlgorithm

• **narrowAlgorithm**: *[ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

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

### `Static` DESCRIPTOR_COLLISION_ENTER

▪ **DESCRIPTOR_COLLISION_ENTER**: *"collision_enter"* = "collision_enter"

Descriptor of a script triggered when a collision enter occurs.

___

### `Static` DESCRIPTOR_COLLISION_EXIT

▪ **DESCRIPTOR_COLLISION_EXIT**: *"collision_exit"* = "collision_exit"

Descriptor of a script triggered when a collision exit occurs.

___

### `Static` MESSAGE_COLLISION_ENTER

▪ **MESSAGE_COLLISION_ENTER**: *"collision_enter"* = "collision_enter"

Message published when a collision enter occurs.

___

### `Static` MESSAGE_COLLISION_EXIT

▪ **MESSAGE_COLLISION_EXIT**: *"collision_exit"* = "collision_exit"

Message published when a collision exit occurs.

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

*Inherited from [System](system.md).[OnMessage](system.md#onmessage)*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  Update

▸ **Update**(): *void*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
