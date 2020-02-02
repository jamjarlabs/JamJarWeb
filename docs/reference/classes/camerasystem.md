
# Class: CameraSystem

CameraSystem handles setting up the canvas/preparing WebGL for drawing to cameras.
It is responsible for loading cameras; setting up viewports, background colors and draw options.

## Hierarchy

  ↳ [System](system.md)

  ↳ **CameraSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](camerasystem.md#constructor)

### Properties

* [entities](camerasystem.md#protected-entities)
* [gl](camerasystem.md#private-gl)
* [messageBus](camerasystem.md#protected-messagebus)
* [scene](camerasystem.md#protected-optional-scene)
* [subscriberID](camerasystem.md#subscriberid)
* [MESSAGE_DEREGISTER](camerasystem.md#static-message_deregister)
* [MESSAGE_REGISTER](camerasystem.md#static-message_register)
* [MESSAGE_UPDATE](camerasystem.md#static-message_update)

### Methods

* [Destroy](camerasystem.md#destroy)
* [GetSystemEntity](camerasystem.md#protected-getsystementity)
* [OnMessage](camerasystem.md#onmessage)
* [Update](camerasystem.md#protected-update)
* [prepareCameras](camerasystem.md#private-preparecameras)
* [EVALUATOR](camerasystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new CameraSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [Scene](scene.md)): *[CameraSystem](camerasystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) |
`gl` | WebGL2RenderingContext |
`scene?` | [Scene](scene.md) |

**Returns:** *[CameraSystem](camerasystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Private` gl

• **gl**: *WebGL2RenderingContext*

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

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](system.md).[Update](system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` prepareCameras

▸ **prepareCameras**(`gl`: WebGL2RenderingContext, `entities`: [SystemEntity](systementity.md)[]): *void*

prepareCameras sets up viewports, background colors and draw options for cameras.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gl` | WebGL2RenderingContext | WebGL context for interacting with WebGL |
`entities` | [SystemEntity](systementity.md)[] | Array of camera entities  |

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
