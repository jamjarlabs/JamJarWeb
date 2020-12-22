
# Class: InterpolationSystem

InterpolationSystem is responsible for updating each entities transform value after a render, so
its previous value is always 1 frame before.
This is part of the rendering process.

## Hierarchy

  ↳ [ArraySystem](arraysystem.md)

  ↳ **InterpolationSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](interpolationsystem.md#constructor)

### Properties

* [entities](interpolationsystem.md#protected-entities)
* [messageBus](interpolationsystem.md#protected-messagebus)
* [scene](interpolationsystem.md#protected-optional-scene)
* [subscriberID](interpolationsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](interpolationsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](interpolationsystem.md#static-message_register)
* [MESSAGE_UPDATE](interpolationsystem.md#static-message_update)

### Methods

* [Destroy](interpolationsystem.md#destroy)
* [OnDestroy](interpolationsystem.md#protected-ondestroy)
* [OnMessage](interpolationsystem.md#onmessage)
* [Update](interpolationsystem.md#protected-update)
* [interpolateTransforms](interpolationsystem.md#private-interpolatetransforms)
* [register](interpolationsystem.md#protected-register)
* [remove](interpolationsystem.md#protected-remove)
* [EVALUATOR](interpolationsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new InterpolationSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: [SystemEntity](systementity.md)[], `subscriberID?`: undefined | number): *[InterpolationSystem](interpolationsystem.md)*

*Overrides [ArraySystem](arraysystem.md).[constructor](arraysystem.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) |
`scene?` | [IScene](../interfaces/iscene.md) |
`entities?` | [SystemEntity](systementity.md)[] |
`subscriberID?` | undefined &#124; number |

**Returns:** *[InterpolationSystem](interpolationsystem.md)*

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

### `Private` interpolateTransforms

▸ **interpolateTransforms**(): *void*

interpolateTransforms updates the `previous` member to be the current position of the transform.
This is used in rendering, allowing render systems to use the previous and current position to
interpolate its position when drawing.

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

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Ensure has Transform

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
