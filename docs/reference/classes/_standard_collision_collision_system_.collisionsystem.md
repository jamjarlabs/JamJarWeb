
# Class: CollisionSystem

CollisionSystem watches for collisions between entities with Colliders and Transforms.
It uses a number of algorithms to first do a broad sweep of possible collisions,
then do a narrow sweep of the possible collisions to determine actual collisions and
info around them.
Once it has determined all collisions, it broadcasts them as messages.

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **CollisionSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_standard_collision_collision_system_.collisionsystem.md#constructor)

### Properties

* [entities](_standard_collision_collision_system_.collisionsystem.md#protected-entities)
* [messageBus](_standard_collision_collision_system_.collisionsystem.md#protected-messagebus)
* [scene](_standard_collision_collision_system_.collisionsystem.md#protected-optional-scene)
* [subscriberID](_standard_collision_collision_system_.collisionsystem.md#subscriberid)
* [MESSAGE_COLLISION_DETECTED](_standard_collision_collision_system_.collisionsystem.md#static-message_collision_detected)
* [MESSAGE_DEREGISTER](_standard_collision_collision_system_.collisionsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_standard_collision_collision_system_.collisionsystem.md#static-message_register)
* [MESSAGE_UPDATE](_standard_collision_collision_system_.collisionsystem.md#static-message_update)

### Methods

* [Destroy](_standard_collision_collision_system_.collisionsystem.md#destroy)
* [GetSystemEntity](_standard_collision_collision_system_.collisionsystem.md#protected-getsystementity)
* [OnMessage](_standard_collision_collision_system_.collisionsystem.md#onmessage)
* [Update](_standard_collision_collision_system_.collisionsystem.md#update)
* [broadPhase](_standard_collision_collision_system_.collisionsystem.md#broadphase)
* [narrowPhase](_standard_collision_collision_system_.collisionsystem.md#narrowphase)
* [EVALUATOR](_standard_collision_collision_system_.collisionsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new CollisionSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `scene?`: [Scene](_scene_scene_.scene.md)): *[CollisionSystem](_standard_collision_collision_system_.collisionsystem.md)*

*Overrides [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) |
`scene?` | [Scene](_scene_scene_.scene.md) |

**Returns:** *[CollisionSystem](_standard_collision_collision_system_.collisionsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*

*Inherited from [System](_system_system_.system.md).[entities](_system_system_.system.md#protected-entities)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

*Inherited from [System](_system_system_.system.md).[messageBus](_system_system_.system.md#protected-messagebus)*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/_scene_iscene_.iscene.md)*

*Inherited from [System](_system_system_.system.md).[scene](_system_system_.system.md#protected-optional-scene)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

___

### `Static` MESSAGE_COLLISION_DETECTED

▪ **MESSAGE_COLLISION_DETECTED**: *"collision_detected"* = "collision_detected"

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](_system_system_.system.md).[MESSAGE_DEREGISTER](_system_system_.system.md#static-message_deregister)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](_system_system_.system.md).[MESSAGE_REGISTER](_system_system_.system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](_system_system_.system.md).[MESSAGE_UPDATE](_system_system_.system.md#static-message_update)*

## Methods

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [System](_system_system_.system.md).[Destroy](_system_system_.system.md#destroy)*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

*Inherited from [System](_system_system_.system.md).[GetSystemEntity](_system_system_.system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

The system entity if it exists, otherwise undefined

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Inherited from [System](_system_system_.system.md).[OnMessage](_system_system_.system.md#onmessage)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

###  Update

▸ **Update**(): *void*

*Overrides [System](_system_system_.system.md).[Update](_system_system_.system.md#protected-update)*

**Returns:** *void*

___

###  broadPhase

▸ **broadPhase**(`entities`: [SystemEntity](_system_system_entity_.systementity.md)[]): *[[SystemEntity](_system_system_entity_.systementity.md), [SystemEntity](_system_system_entity_.systementity.md)][]*

broadPhase uses a broad phase collision detection algorithm, gathering pairs of possible
entities that are colliding.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entities` | [SystemEntity](_system_system_entity_.systementity.md)[] | Array of entities to check for possible collisions. |

**Returns:** *[[SystemEntity](_system_system_entity_.systementity.md), [SystemEntity](_system_system_entity_.systementity.md)][]*

A list of pairs of entities that could be colliding.

___

###  narrowPhase

▸ **narrowPhase**(`possibleCollisions`: [[SystemEntity](_system_system_entity_.systementity.md), [SystemEntity](_system_system_entity_.systementity.md)][]): *[Collision](_standard_collision_collision_.collision.md)[]*

narrowPhase uses a narrow phase collision detection algorithm, taking a list of possible
collisions and determining actual collisions; alongside relevant collision info.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`possibleCollisions` | [[SystemEntity](_system_system_entity_.systementity.md), [SystemEntity](_system_system_entity_.systementity.md)][] | Array of pairs of possible colliding entities. |

**Returns:** *[Collision](_standard_collision_collision_.collision.md)[]*

Array of detected collisions.

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `components`: [Component](_component_component_.component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |
`components` | [Component](_component_component_.component.md)[] |

**Returns:** *boolean*
