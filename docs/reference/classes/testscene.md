
# Class: TestScene

## Hierarchy

  ↳ [Scene](scene.md)

  ↳ **TestScene**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)
* [IScene](../interfaces/iscene.md)

## Index

### Constructors

* [constructor](testscene.md#constructor)

### Properties

* [id](testscene.md#id)
* [messageBus](testscene.md#protected-messagebus)
* [subscriberID](testscene.md#subscriberid)
* [MESSAGE_DESTROY](testscene.md#static-message_destroy)
* [MESSAGE_ON_START](testscene.md#static-message_on_start)

### Methods

* [AddEntity](testscene.md#addentity)
* [Destroy](testscene.md#destroy)
* [OnMessage](testscene.md#onmessage)
* [OnStart](testscene.md#protected-onstart)
* [Start](testscene.md#start)

## Constructors

###  constructor

\+ **new TestScene**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `id`: number, `entities`: [IEntity](../interfaces/ientity.md)[]): *[TestScene](testscene.md)*

*Overrides [Scene](scene.md).[constructor](scene.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`id` | number | - |
`entities` | [IEntity](../interfaces/ientity.md)[] | [] |

**Returns:** *[TestScene](testscene.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/iscene.md).[id](../interfaces/iscene.md#id)*

*Inherited from [Scene](scene.md).[id](scene.md#id)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [Scene](scene.md).[messageBus](scene.md#protected-messagebus)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DESTROY

▪ **MESSAGE_DESTROY**: *"scene_destroy"* = "scene_destroy"

*Inherited from [Scene](scene.md).[MESSAGE_DESTROY](scene.md#static-message_destroy)*

___

### `Static` MESSAGE_ON_START

▪ **MESSAGE_ON_START**: *"scene_on_start"* = "scene_on_start"

*Inherited from [Scene](scene.md).[MESSAGE_ON_START](scene.md#static-message_on_start)*

## Methods

###  AddEntity

▸ **AddEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

*Inherited from [Scene](scene.md).[AddEntity](scene.md#addentity)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [Scene](scene.md).[Destroy](scene.md#destroy)*

Destroy destroys the scene, alongside all linked entities, components and systems.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Inherited from [Scene](scene.md).[OnMessage](scene.md#onmessage)*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` OnStart

▸ **OnStart**(): *void*

*Inherited from [Scene](scene.md).[OnStart](scene.md#protected-onstart)*

OnStart is triggered on scene start.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

*Inherited from [Scene](scene.md).[Start](scene.md#start)*

Start starts this scene

**Returns:** *void*
