
# Class: SpriteSystem

SpriteSystem handles converting sprites into renderable objects that are fed into
a rendering system.

## Hierarchy

  ↳ [ArraySystem](arraysystem.md)

  ↳ **SpriteSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](spritesystem.md#constructor)

### Properties

* [entities](spritesystem.md#protected-entities)
* [frustumCuller](spritesystem.md#private-frustumculler)
* [messageBus](spritesystem.md#protected-messagebus)
* [renderables](spritesystem.md#private-renderables)
* [scene](spritesystem.md#protected-optional-scene)
* [subscriberID](spritesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](spritesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](spritesystem.md#static-message_register)
* [MESSAGE_UPDATE](spritesystem.md#static-message_update)
* [SPRITE_RENDERABLE_QUAD](spritesystem.md#static-private-sprite_renderable_quad)

### Methods

* [Destroy](spritesystem.md#destroy)
* [OnDestroy](spritesystem.md#protected-ondestroy)
* [OnMessage](spritesystem.md#onmessage)
* [Update](spritesystem.md#protected-update)
* [freeRenderables](spritesystem.md#private-freerenderables)
* [prepareSprites](spritesystem.md#private-preparesprites)
* [register](spritesystem.md#protected-register)
* [remove](spritesystem.md#protected-remove)
* [EVALUATOR](spritesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new SpriteSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `frustumCuller`: [IFrustumCuller](../interfaces/ifrustumculler.md), `renderables`: [IRenderable](../interfaces/irenderable.md)[], `entities?`: [SystemEntity](systementity.md)[], `subscriberID?`: undefined | number): *[SpriteSystem](spritesystem.md)*

*Overrides [ArraySystem](arraysystem.md).[constructor](arraysystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`frustumCuller` | [IFrustumCuller](../interfaces/ifrustumculler.md) | new FrustumCuller() |
`renderables` | [IRenderable](../interfaces/irenderable.md)[] | [] |
`entities?` | [SystemEntity](systementity.md)[] | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[SpriteSystem](spritesystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [ArraySystem](arraysystem.md).[entities](arraysystem.md#protected-entities)*

The list of entities the system is tracking.

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

___

### `Static` `Private` SPRITE_RENDERABLE_QUAD

▪ **SPRITE_RENDERABLE_QUAD**: *[Polygon](polygon.md)‹›* = Polygon.QuadByDimensions(1, 1, 0, 0)

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

### `Private` prepareSprites

▸ **prepareSprites**(`alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | number |

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

Ensure is Sprite entity with Transform and Sprite, or Camera entity with
Transform and Camera

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
