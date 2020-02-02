
# Class: MotionSystem

MotionSystem handles basic physics calculations for entities with a motion component.
This system handles velocity, acceleration, angular velocity and angular acceleration.

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **MotionSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_standard_motion_motion_system_.motionsystem.md#constructor)

### Properties

* [entities](_standard_motion_motion_system_.motionsystem.md#protected-entities)
* [messageBus](_standard_motion_motion_system_.motionsystem.md#protected-messagebus)
* [scene](_standard_motion_motion_system_.motionsystem.md#protected-optional-scene)
* [subscriberID](_standard_motion_motion_system_.motionsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](_standard_motion_motion_system_.motionsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_standard_motion_motion_system_.motionsystem.md#static-message_register)
* [MESSAGE_UPDATE](_standard_motion_motion_system_.motionsystem.md#static-message_update)

### Methods

* [Destroy](_standard_motion_motion_system_.motionsystem.md#destroy)
* [GetSystemEntity](_standard_motion_motion_system_.motionsystem.md#protected-getsystementity)
* [OnMessage](_standard_motion_motion_system_.motionsystem.md#onmessage)
* [Update](_standard_motion_motion_system_.motionsystem.md#protected-update)
* [EVALUATOR](_standard_motion_motion_system_.motionsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new MotionSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `scene?`: [Scene](_scene_scene_.scene.md)): *[MotionSystem](_standard_motion_motion_system_.motionsystem.md)*

*Overrides [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) |
`scene?` | [Scene](_scene_scene_.scene.md) |

**Returns:** *[MotionSystem](_standard_motion_motion_system_.motionsystem.md)*

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

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Overrides [System](_system_system_.system.md).[Update](_system_system_.system.md#protected-update)*

**Parameters:**

Name | Type |
------ | ------ |
`dt` | number |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `components`: [Component](_component_component_.component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |
`components` | [Component](_component_component_.component.md)[] |

**Returns:** *boolean*
