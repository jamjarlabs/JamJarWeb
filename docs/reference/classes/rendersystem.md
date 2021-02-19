# Class: RenderSystem

RenderSystem is an abstract class representing a generic rendering system,
has logic for handling loading renderables.
Contains the message constant for loading renderables.

## Hierarchy

* [*ArraySystem*](arraysystem.md)

  ↳ **RenderSystem**

  ↳↳ [*WebGLSystem*](webglsystem.md)

## Table of contents

### Constructors

- [constructor](rendersystem.md#constructor)

### Properties

- [entities](rendersystem.md#entities)
- [messageBus](rendersystem.md#messagebus)
- [renderables](rendersystem.md#renderables)
- [scene](rendersystem.md#scene)
- [subscriberID](rendersystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](rendersystem.md#message_deregister)
- [MESSAGE\_LOAD\_RENDERABLES](rendersystem.md#message_load_renderables)
- [MESSAGE\_REGISTER](rendersystem.md#message_register)
- [MESSAGE\_UPDATE](rendersystem.md#message_update)

### Methods

- [Destroy](rendersystem.md#destroy)
- [OnDestroy](rendersystem.md#ondestroy)
- [OnMessage](rendersystem.md#onmessage)
- [Update](rendersystem.md#update)
- [register](rendersystem.md#register)
- [remove](rendersystem.md#remove)

## Constructors

### constructor

\+ **new RenderSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `evaluator?`: [*Evaluator*](../README.md#evaluator), `renderables?`: [*IRenderable*](../interfaces/irenderable.md)[], `entities?`: [*SystemEntity*](systementity.md)[], `subscriberID?`: *number*): [*RenderSystem*](rendersystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`evaluator?` | [*Evaluator*](../README.md#evaluator) |
`renderables` | [*IRenderable*](../interfaces/irenderable.md)[] |
`entities?` | [*SystemEntity*](systementity.md)[] |
`subscriberID?` | *number* |

**Returns:** [*RenderSystem*](rendersystem.md)

Inherited from: [ArraySystem](arraysystem.md)

## Properties

### entities

• `Protected` **entities**: [*SystemEntity*](systementity.md)[]

The list of entities the system is tracking.

Inherited from: [ArraySystem](arraysystem.md).[entities](arraysystem.md#entities)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [ArraySystem](arraysystem.md).[messageBus](arraysystem.md#messagebus)

___

### renderables

• `Protected` **renderables**: [*IRenderable*](../interfaces/irenderable.md)[]

A list of things to be rendered.

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [ArraySystem](arraysystem.md).[scene](arraysystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [ArraySystem](arraysystem.md).[subscriberID](arraysystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_DEREGISTER](arraysystem.md#message_deregister)

___

### MESSAGE\_LOAD\_RENDERABLES

▪ `Readonly` `Static` **MESSAGE\_LOAD\_RENDERABLES**: *load_renderables*= "load\_renderables"

Message used to add new renderables into the render system's render list.

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_REGISTER](arraysystem.md#message_register)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [ArraySystem](arraysystem.md).[MESSAGE_UPDATE](arraysystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [ArraySystem](arraysystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Inherited from: [ArraySystem](arraysystem.md)
