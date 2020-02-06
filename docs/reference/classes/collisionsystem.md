
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

* [entities](collisionsystem.md#protected-entities)
* [messageBus](collisionsystem.md#protected-messagebus)
* [scene](collisionsystem.md#protected-optional-scene)
* [subscriberID](collisionsystem.md#subscriberid)
* [MESSAGE_COLLISION_DETECTED](collisionsystem.md#static-message_collision_detected)
* [MESSAGE_DEREGISTER](collisionsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](collisionsystem.md#static-message_register)
* [MESSAGE_UPDATE](collisionsystem.md#static-message_update)

### Methods

* [Destroy](collisionsystem.md#destroy)
* [GetSystemEntity](collisionsystem.md#protected-getsystementity)
* [OnDestroy](collisionsystem.md#protected-ondestroy)
* [OnMessage](collisionsystem.md#onmessage)
* [Update](collisionsystem.md#update)
* [broadPhase](collisionsystem.md#broadphase)
* [narrowPhase](collisionsystem.md#narrowphase)
* [EVALUATOR](collisionsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new CollisionSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `__namedParameters`: object): *[CollisionSystem](collisionsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: [], subscriberID: undefined }

Name | Type |
------ | ------ |
`entities` | [SystemEntity](systementity.md)‹›[] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[CollisionSystem](collisionsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

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

### `Static` MESSAGE_COLLISION_DETECTED

▪ **MESSAGE_COLLISION_DETECTED**: *"collision_detected"* = "collision_detected"

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

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *[SystemEntity](systementity.md) | undefined*

*Inherited from [System](system.md).[GetSystemEntity](system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](systementity.md) | undefined*

The system entity if it exists, otherwise undefined

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

###  broadPhase

▸ **broadPhase**(`entities`: [SystemEntity](systementity.md)[]): *[[SystemEntity](systementity.md), [SystemEntity](systementity.md)][]*

broadPhase uses a broad phase collision detection algorithm, gathering pairs of possible
entities that are colliding.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entities` | [SystemEntity](systementity.md)[] | Array of entities to check for possible collisions. |

**Returns:** *[[SystemEntity](systementity.md), [SystemEntity](systementity.md)][]*

A list of pairs of entities that could be colliding.

___

###  narrowPhase

▸ **narrowPhase**(`possibleCollisions`: [[SystemEntity](systementity.md), [SystemEntity](systementity.md)][]): *[Collision](collision.md)[]*

narrowPhase uses a narrow phase collision detection algorithm, taking a list of possible
collisions and determining actual collisions; alongside relevant collision info.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`possibleCollisions` | [[SystemEntity](systementity.md), [SystemEntity](systementity.md)][] | Array of pairs of possible colliding entities. |

**Returns:** *[Collision](collision.md)[]*

Array of detected collisions.

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
