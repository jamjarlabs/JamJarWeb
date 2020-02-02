
# Class: System

System is one of the key elements of the Entity-Component-System architecture.
A system is for implementing logic, manipulating entities and their components.

## Hierarchy

* [Subscriber](_message_subscriber_.subscriber.md)

  ↳ **System**

  ↳ [CameraSystem](_standard_camera_camera_system_.camerasystem.md)

  ↳ [CollisionSystem](_standard_collision_collision_system_.collisionsystem.md)

  ↳ [InterpolationSystem](_standard_interpolation_interpolation_system_.interpolationsystem.md)

  ↳ [MotionSystem](_standard_motion_motion_system_.motionsystem.md)

  ↳ [SpriteSystem](_standard_sprite_sprite_system_.spritesystem.md)

  ↳ [TestSystem](_system_system_test_.testsystem.md)

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_system_system_.system.md#constructor)

### Properties

* [entities](_system_system_.system.md#protected-entities)
* [evaluator](_system_system_.system.md#private-optional-evaluator)
* [messageBus](_system_system_.system.md#protected-messagebus)
* [scene](_system_system_.system.md#protected-optional-scene)
* [subscriberID](_system_system_.system.md#subscriberid)
* [MESSAGE_DEREGISTER](_system_system_.system.md#static-message_deregister)
* [MESSAGE_REGISTER](_system_system_.system.md#static-message_register)
* [MESSAGE_UPDATE](_system_system_.system.md#static-message_update)

### Methods

* [Destroy](_system_system_.system.md#destroy)
* [GetSystemEntity](_system_system_.system.md#protected-getsystementity)
* [OnMessage](_system_system_.system.md#onmessage)
* [Update](_system_system_.system.md#protected-update)
* [register](_system_system_.system.md#private-register)
* [remove](_system_system_.system.md#private-remove)

## Constructors

###  constructor

\+ **new System**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `args`: object, `entities`: [SystemEntity](_system_system_entity_.systementity.md)[]): *[System](_system_system_.system.md)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[constructor](_message_subscriber_.subscriber.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

▪`Default value`  **args**: *object*= {}

Name | Type |
------ | ------ |
`evaluator?` | undefined &#124; function |
`scene?` | [IScene](../interfaces/_scene_iscene_.iscene.md) |

▪`Default value`  **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*= []

**Returns:** *[System](_system_system_.system.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*

___

### `Private` `Optional` evaluator

• **evaluator**? : *undefined | function*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/_scene_iscene_.iscene.md)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

## Methods

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

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

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` register

▸ **register**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `components`: [Component](_component_component_.component.md)[]): *void*

register is used when a new entity is created with components, or an existing
entity's components are changed; register calls the evaluator to check if the
system should track this entity. If the evaluator returns true, the entity
is added to the System's internal entity array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to register |
`components` | [Component](_component_component_.component.md)[] | The components of the registering entity.  |

**Returns:** *void*

___

### `Private` remove

▸ **remove**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

remove removes an entity from being tracked by the system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to remove  |

**Returns:** *void*
