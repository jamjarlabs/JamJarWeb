
# Class: StatefulSystem

StatefulSystem defines a system that tracks the state of entities and components by listening for register and
deregister messages.

## Hierarchy

  ↳ [System](system.md)

  ↳ **StatefulSystem**

  ↳ [MapSystem](mapsystem.md)

  ↳ [ArraySystem](arraysystem.md)

  ↳ [TestSystem](testsystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](statefulsystem.md#constructor)

### Properties

* [messageBus](statefulsystem.md#protected-messagebus)
* [scene](statefulsystem.md#protected-optional-scene)
* [subscriberID](statefulsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](statefulsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](statefulsystem.md#static-message_register)
* [MESSAGE_UPDATE](statefulsystem.md#static-message_update)

### Methods

* [Destroy](statefulsystem.md#destroy)
* [OnDestroy](statefulsystem.md#protected-ondestroy)
* [OnMessage](statefulsystem.md#onmessage)
* [Update](statefulsystem.md#protected-update)
* [register](statefulsystem.md#protected-abstract-register)
* [remove](statefulsystem.md#protected-abstract-remove)

## Constructors

###  constructor

\+ **new StatefulSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `subscriberID?`: undefined | number): *[StatefulSystem](statefulsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) |
`scene?` | [IScene](../interfaces/iscene.md) |
`subscriberID?` | undefined &#124; number |

**Returns:** *[StatefulSystem](statefulsystem.md)*

## Properties

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

Message to deregister an entity + components with a system so it is no longer tracked.

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"stateful_system_register"* = "stateful_system_register"

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

### `Protected` `Abstract` register

▸ **register**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *void*

register is used when a new entity is created with components, or an existing
entity's components are changed; register calls the evaluator to check if the
system should track this entity. If the evaluator returns true, the entity
is added to the System's internal entity array.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to register |
`components` | [Component](component.md)[] | The components of the registering entity.  |

**Returns:** *void*

___

### `Protected` `Abstract` remove

▸ **remove**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

remove removes an entity from being tracked by the system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to remove  |

**Returns:** *void*
