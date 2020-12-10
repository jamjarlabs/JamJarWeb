
# Class: ArraySystem

ArraySystem defines a system that tracks entities and components using an array, allowing easy iteration.

## Hierarchy

  ↳ [StatefulSystem](statefulsystem.md)

  ↳ **ArraySystem**

  ↳ [CollisionSystem](collisionsystem.md)

  ↳ [InterpolationSystem](interpolationsystem.md)

  ↳ [RenderSystem](rendersystem.md)

  ↳ [SpriteSystem](spritesystem.md)

  ↳ [TestSystem](testsystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](arraysystem.md#constructor)

### Properties

* [entities](arraysystem.md#protected-entities)
* [evaluator](arraysystem.md#private-optional-evaluator)
* [messageBus](arraysystem.md#protected-messagebus)
* [scene](arraysystem.md#protected-optional-scene)
* [subscriberID](arraysystem.md#subscriberid)
* [MESSAGE_DEREGISTER](arraysystem.md#static-message_deregister)
* [MESSAGE_REGISTER](arraysystem.md#static-message_register)
* [MESSAGE_UPDATE](arraysystem.md#static-message_update)

### Methods

* [Destroy](arraysystem.md#destroy)
* [OnDestroy](arraysystem.md#protected-ondestroy)
* [OnMessage](arraysystem.md#onmessage)
* [Update](arraysystem.md#protected-update)
* [register](arraysystem.md#protected-register)
* [remove](arraysystem.md#protected-remove)

## Constructors

###  constructor

\+ **new ArraySystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `evaluator?`: [Evaluator](../README.md#evaluator), `entities`: [SystemEntity](systementity.md)[], `subscriberID?`: undefined | number): *[ArraySystem](arraysystem.md)*

*Overrides [StatefulSystem](statefulsystem.md).[constructor](statefulsystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`evaluator?` | [Evaluator](../README.md#evaluator) | - |
`entities` | [SystemEntity](systementity.md)[] | [] |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[ArraySystem](arraysystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

The list of entities the system is tracking.

___

### `Private` `Optional` evaluator

• **evaluator**? : *[Evaluator](../README.md#evaluator)*

The evaluator is used to evaluate if an entity with its components should be
tracked by the system

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

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

*Inherited from [StatefulSystem](statefulsystem.md).[OnMessage](statefulsystem.md#onmessage)*

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

### `Protected` register

▸ **register**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *void*

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

*Overrides [StatefulSystem](statefulsystem.md).[remove](statefulsystem.md#protected-abstract-remove)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*
