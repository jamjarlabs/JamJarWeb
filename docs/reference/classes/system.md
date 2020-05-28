
# Class: System

System is one of the key elements of the Entity-Component-System architecture.
A system is for implementing logic, manipulating entities and their components.

## Hierarchy

* [Subscriber](subscriber.md)

  ↳ **System**

  ↳ [CollisionSystem](collisionsystem.md)

  ↳ [FullscreenSystem](fullscreensystem.md)

  ↳ [HTTPImageSystem](httpimagesystem.md)

  ↳ [InterpolationSystem](interpolationsystem.md)

  ↳ [KeyboardSystem](keyboardsystem.md)

  ↳ [MotionSystem](motionsystem.md)

  ↳ [PointerSystem](pointersystem.md)

  ↳ [RenderSystem](rendersystem.md)

  ↳ [PrimitiveSystem](primitivesystem.md)

  ↳ [SpriteSystem](spritesystem.md)

  ↳ [SpriteAnimatorSystem](spriteanimatorsystem.md)

  ↳ [TextSystem](textsystem.md)

  ↳ [TestSystem](testsystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](system.md#constructor)

### Properties

* [entities](system.md#protected-entities)
* [evaluator](system.md#private-optional-evaluator)
* [messageBus](system.md#protected-messagebus)
* [scene](system.md#protected-optional-scene)
* [subscriberID](system.md#subscriberid)
* [MESSAGE_DEREGISTER](system.md#static-message_deregister)
* [MESSAGE_REGISTER](system.md#static-message_register)
* [MESSAGE_UPDATE](system.md#static-message_update)

### Methods

* [Destroy](system.md#destroy)
* [OnDestroy](system.md#protected-ondestroy)
* [OnMessage](system.md#onmessage)
* [Update](system.md#protected-update)
* [register](system.md#private-register)
* [remove](system.md#private-remove)

## Constructors

###  constructor

\+ **new System**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `evaluator?`: [Evaluator](../README.md#evaluator), `entities`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[System](system.md)*

*Overrides [Subscriber](subscriber.md).[constructor](subscriber.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`evaluator?` | [Evaluator](../README.md#evaluator) | - |
`entities` | Map‹number, [SystemEntity](systementity.md)› | new Map() |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[System](system.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` `Optional` evaluator

• **evaluator**? : *[Evaluator](../README.md#evaluator)*

The evaluator is used to evaluate if an entity with its components should be
tracked by the system

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

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

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

## Methods

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` OnDestroy

▸ **OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` register

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

### `Private` remove

▸ **remove**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

remove removes an entity from being tracked by the system

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to remove  |

**Returns:** *void*
