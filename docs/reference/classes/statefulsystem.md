# Class: StatefulSystem

StatefulSystem defines a system that tracks the state of entities and components by listening for register and
deregister messages.

## Hierarchy

* [*System*](system.md)

  ↳ **StatefulSystem**

  ↳↳ [*MapSystem*](mapsystem.md)

  ↳↳ [*ArraySystem*](arraysystem.md)

## Table of contents

### Constructors

- [constructor](statefulsystem.md#constructor)

### Properties

- [messageBus](statefulsystem.md#messagebus)
- [scene](statefulsystem.md#scene)
- [subscriberID](statefulsystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](statefulsystem.md#message_deregister)
- [MESSAGE\_REGISTER](statefulsystem.md#message_register)
- [MESSAGE\_UPDATE](statefulsystem.md#message_update)

### Methods

- [Destroy](statefulsystem.md#destroy)
- [OnDestroy](statefulsystem.md#ondestroy)
- [OnMessage](statefulsystem.md#onmessage)
- [Update](statefulsystem.md#update)
- [register](statefulsystem.md#register)
- [remove](statefulsystem.md#remove)

## Constructors

### constructor

\+ **new StatefulSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `subscriberID?`: *number*): [*StatefulSystem*](statefulsystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`subscriberID?` | *number* |

**Returns:** [*StatefulSystem*](statefulsystem.md)

Inherited from: [System](system.md)

## Properties

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [System](system.md).[messageBus](system.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [System](system.md).[scene](system.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [System](system.md).[subscriberID](system.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [System](system.md).[MESSAGE_UPDATE](system.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [System](system.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [System](system.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [System](system.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [System](system.md)

___

### register

▸ `Protected` `Abstract`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

register is used when a new entity is created with components, or an existing
entity's components are changed; register calls the evaluator to check if the
system should track this entity. If the evaluator returns true, the entity
is added to the System's internal entity array.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) | The entity to register   |
`components` | [*Component*](component.md)[] | The components of the registering entity.    |

**Returns:** *void*

___

### remove

▸ `Protected` `Abstract`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

remove removes an entity from being tracked by the system

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) | The entity to remove    |

**Returns:** *void*
