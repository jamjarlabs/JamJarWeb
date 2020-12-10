
# Class: PrimitiveSystem

PrimitiveSystem handles processing primitives for render systems, tracking
primitives and generating renderables from them.

## Hierarchy

  ↳ [MapSystem](mapsystem.md)

  ↳ **PrimitiveSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](primitivesystem.md#constructor)

### Properties

* [entities](primitivesystem.md#protected-entities)
* [frustumCuller](primitivesystem.md#private-frustumculler)
* [messageBus](primitivesystem.md#protected-messagebus)
* [renderables](primitivesystem.md#private-renderables)
* [scene](primitivesystem.md#protected-optional-scene)
* [subscriberID](primitivesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](primitivesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](primitivesystem.md#static-message_register)
* [MESSAGE_UPDATE](primitivesystem.md#static-message_update)

### Methods

* [Destroy](primitivesystem.md#destroy)
* [OnDestroy](primitivesystem.md#protected-ondestroy)
* [OnMessage](primitivesystem.md#onmessage)
* [Update](primitivesystem.md#protected-update)
* [freeRenderables](primitivesystem.md#private-freerenderables)
* [preparePrimitives](primitivesystem.md#private-prepareprimitives)
* [register](primitivesystem.md#protected-register)
* [remove](primitivesystem.md#protected-remove)
* [EVALUATOR](primitivesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new PrimitiveSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `frustumCuller`: [IFrustumCuller](../interfaces/ifrustumculler.md), `renderables`: [IRenderable](../interfaces/irenderable.md)[], `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[PrimitiveSystem](primitivesystem.md)*

*Overrides [MapSystem](mapsystem.md).[constructor](mapsystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`frustumCuller` | [IFrustumCuller](../interfaces/ifrustumculler.md) | new FrustumCuller() |
`renderables` | [IRenderable](../interfaces/irenderable.md)[] | [] |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[PrimitiveSystem](primitivesystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [MapSystem](mapsystem.md).[entities](mapsystem.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` frustumCuller

• **frustumCuller**: *[IFrustumCuller](../interfaces/ifrustumculler.md)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` renderables

• **renderables**: *[IRenderable](../interfaces/irenderable.md)[]*

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

### `Private` freeRenderables

▸ **freeRenderables**(): *void*

**Returns:** *void*

___

### `Private` preparePrimitives

▸ **preparePrimitives**(`alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | number |

**Returns:** *void*

___

### `Protected` register

▸ **register**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *void*

*Inherited from [MapSystem](mapsystem.md).[register](mapsystem.md#protected-register)*

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

*Inherited from [MapSystem](mapsystem.md).[remove](mapsystem.md#protected-remove)*

*Overrides [StatefulSystem](statefulsystem.md).[remove](statefulsystem.md#protected-abstract-remove)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Track primitives and cameras.

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
