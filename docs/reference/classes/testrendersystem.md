
# Class: TestRenderSystem

TextRenderSystem is the implementation of the abstract RenderSystem, used
only for testing

## Hierarchy

  ↳ [RenderSystem](rendersystem.md)

  ↳ **TestRenderSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](testrendersystem.md#constructor)

### Properties

* [entities](testrendersystem.md#protected-entities)
* [messageBus](testrendersystem.md#protected-messagebus)
* [renderables](testrendersystem.md#protected-renderables)
* [scene](testrendersystem.md#protected-optional-scene)
* [subscriberID](testrendersystem.md#subscriberid)
* [MESSAGE_DEREGISTER](testrendersystem.md#static-message_deregister)
* [MESSAGE_LOAD_RENDERABLES](testrendersystem.md#static-message_load_renderables)
* [MESSAGE_REGISTER](testrendersystem.md#static-message_register)
* [MESSAGE_UPDATE](testrendersystem.md#static-message_update)

### Methods

* [Destroy](testrendersystem.md#destroy)
* [OnDestroy](testrendersystem.md#protected-ondestroy)
* [OnMessage](testrendersystem.md#onmessage)
* [Update](testrendersystem.md#protected-update)
* [register](testrendersystem.md#protected-register)
* [remove](testrendersystem.md#protected-remove)

## Constructors

###  constructor

\+ **new TestRenderSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `evaluator?`: [Evaluator](../README.md#evaluator), `renderables`: [IRenderable](../interfaces/irenderable.md)[], `entities?`: [SystemEntity](systementity.md)[], `subscriberID?`: undefined | number): *[TestRenderSystem](testrendersystem.md)*

*Inherited from [RenderSystem](rendersystem.md).[constructor](rendersystem.md#constructor)*

*Overrides [ArraySystem](arraysystem.md).[constructor](arraysystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`evaluator?` | [Evaluator](../README.md#evaluator) | - |
`renderables` | [IRenderable](../interfaces/irenderable.md)[] | [] |
`entities?` | [SystemEntity](systementity.md)[] | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[TestRenderSystem](testrendersystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [ArraySystem](arraysystem.md).[entities](arraysystem.md#protected-entities)*

The list of entities the system is tracking.

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Protected` renderables

• **renderables**: *[IRenderable](../interfaces/irenderable.md)[]*

*Inherited from [RenderSystem](rendersystem.md).[renderables](rendersystem.md#protected-renderables)*

A list of things to be rendered.

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

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"stateful_system_deregister"* = "stateful_system_deregister"

*Inherited from [StatefulSystem](statefulsystem.md).[MESSAGE_DEREGISTER](statefulsystem.md#static-message_deregister)*

Message to deregister an entity + components with a system so it is no longer tracked.

___

### `Static` MESSAGE_LOAD_RENDERABLES

▪ **MESSAGE_LOAD_RENDERABLES**: *"load_renderables"* = "load_renderables"

*Inherited from [RenderSystem](rendersystem.md).[MESSAGE_LOAD_RENDERABLES](rendersystem.md#static-message_load_renderables)*

Message used to add new renderables into the render system's render list.

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"stateful_system_register"* = "stateful_system_register"

*Inherited from [StatefulSystem](statefulsystem.md).[MESSAGE_REGISTER](statefulsystem.md#static-message_register)*

Message to register an entity + components with a system so it can be tracked.

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

*Inherited from [RenderSystem](rendersystem.md).[OnMessage](rendersystem.md#onmessage)*

*Overrides [StatefulSystem](statefulsystem.md).[OnMessage](statefulsystem.md#onmessage)*

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

### `Protected` register

▸ **register**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *void*

*Inherited from [ArraySystem](arraysystem.md).[register](arraysystem.md#protected-register)*

*Overrides [StatefulSystem](statefulsystem.md).[register](statefulsystem.md#protected-abstract-register)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *void*

___

### `Protected` remove

▸ **remove**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

*Inherited from [ArraySystem](arraysystem.md).[remove](arraysystem.md#protected-remove)*

*Overrides [StatefulSystem](statefulsystem.md).[remove](statefulsystem.md#protected-abstract-remove)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*
