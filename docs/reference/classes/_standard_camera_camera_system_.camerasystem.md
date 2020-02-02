
# Class: CameraSystem

CameraSystem handles setting up the canvas/preparing WebGL for drawing to cameras.
It is responsible for loading cameras; setting up viewports, background colors and draw options.

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **CameraSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_standard_camera_camera_system_.camerasystem.md#constructor)

### Properties

* [entities](_standard_camera_camera_system_.camerasystem.md#protected-entities)
* [gl](_standard_camera_camera_system_.camerasystem.md#private-gl)
* [messageBus](_standard_camera_camera_system_.camerasystem.md#protected-messagebus)
* [scene](_standard_camera_camera_system_.camerasystem.md#protected-optional-scene)
* [subscriberID](_standard_camera_camera_system_.camerasystem.md#subscriberid)
* [MESSAGE_DEREGISTER](_standard_camera_camera_system_.camerasystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_standard_camera_camera_system_.camerasystem.md#static-message_register)
* [MESSAGE_UPDATE](_standard_camera_camera_system_.camerasystem.md#static-message_update)

### Methods

* [Destroy](_standard_camera_camera_system_.camerasystem.md#destroy)
* [GetSystemEntity](_standard_camera_camera_system_.camerasystem.md#protected-getsystementity)
* [OnMessage](_standard_camera_camera_system_.camerasystem.md#onmessage)
* [Update](_standard_camera_camera_system_.camerasystem.md#protected-update)
* [prepareCameras](_standard_camera_camera_system_.camerasystem.md#private-preparecameras)
* [EVALUATOR](_standard_camera_camera_system_.camerasystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new CameraSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [Scene](_scene_scene_.scene.md)): *[CameraSystem](_standard_camera_camera_system_.camerasystem.md)*

*Overrides [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) |
`gl` | WebGL2RenderingContext |
`scene?` | [Scene](_scene_scene_.scene.md) |

**Returns:** *[CameraSystem](_standard_camera_camera_system_.camerasystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*

*Inherited from [System](_system_system_.system.md).[entities](_system_system_.system.md#protected-entities)*

___

### `Private` gl

• **gl**: *WebGL2RenderingContext*

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

### `Private` prepareCameras

▸ **prepareCameras**(`gl`: WebGL2RenderingContext, `entities`: [SystemEntity](_system_system_entity_.systementity.md)[]): *void*

prepareCameras sets up viewports, background colors and draw options for cameras.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gl` | WebGL2RenderingContext | WebGL context for interacting with WebGL |
`entities` | [SystemEntity](_system_system_entity_.systementity.md)[] | Array of camera entities  |

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
