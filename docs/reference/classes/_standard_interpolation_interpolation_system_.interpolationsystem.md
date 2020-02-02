
# Class: InterpolationSystem

InterpolationSystem is responsible for updating each entities transform value after a render, so
its previous value is always 1 frame before.
This is part of the rendering process.

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **InterpolationSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_standard_interpolation_interpolation_system_.interpolationsystem.md#constructor)

### Properties

* [entities](_standard_interpolation_interpolation_system_.interpolationsystem.md#protected-entities)
* [messageBus](_standard_interpolation_interpolation_system_.interpolationsystem.md#protected-messagebus)
* [scene](_standard_interpolation_interpolation_system_.interpolationsystem.md#protected-optional-scene)
* [subscriberID](_standard_interpolation_interpolation_system_.interpolationsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](_standard_interpolation_interpolation_system_.interpolationsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_standard_interpolation_interpolation_system_.interpolationsystem.md#static-message_register)
* [MESSAGE_UPDATE](_standard_interpolation_interpolation_system_.interpolationsystem.md#static-message_update)

### Methods

* [Destroy](_standard_interpolation_interpolation_system_.interpolationsystem.md#destroy)
* [GetSystemEntity](_standard_interpolation_interpolation_system_.interpolationsystem.md#protected-getsystementity)
* [OnMessage](_standard_interpolation_interpolation_system_.interpolationsystem.md#onmessage)
* [Update](_standard_interpolation_interpolation_system_.interpolationsystem.md#protected-update)
* [interpolateTransforms](_standard_interpolation_interpolation_system_.interpolationsystem.md#private-interpolatetransforms)
* [EVALUATOR](_standard_interpolation_interpolation_system_.interpolationsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new InterpolationSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `scene?`: [Scene](_scene_scene_.scene.md)): *[InterpolationSystem](_standard_interpolation_interpolation_system_.interpolationsystem.md)*

*Overrides [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) |
`scene?` | [Scene](_scene_scene_.scene.md) |

**Returns:** *[InterpolationSystem](_standard_interpolation_interpolation_system_.interpolationsystem.md)*

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

*Overrides [System](_system_system_.system.md).[OnMessage](_system_system_.system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](_system_system_.system.md).[Update](_system_system_.system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` interpolateTransforms

▸ **interpolateTransforms**(`entities`: [SystemEntity](_system_system_entity_.systementity.md)[]): *void*

interpolateTransforms updates the `previous` member to be the current position of the transform.
This is used in rendering, allowing render systems to use the previous and current position to
interpolate its position when drawing.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entities` | [SystemEntity](_system_system_entity_.systementity.md)[] | The entities to update the interpolation positions of  |

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
