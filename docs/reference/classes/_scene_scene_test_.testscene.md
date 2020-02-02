
# Class: TestScene

## Hierarchy

  ↳ [Scene](_scene_scene_.scene.md)

  ↳ **TestScene**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)
* [IScene](../interfaces/_scene_iscene_.iscene.md)

## Index

### Constructors

* [constructor](_scene_scene_test_.testscene.md#constructor)

### Properties

* [id](_scene_scene_test_.testscene.md#id)
* [messageBus](_scene_scene_test_.testscene.md#protected-messagebus)
* [subscriberID](_scene_scene_test_.testscene.md#subscriberid)
* [MESSAGE_DESTROY](_scene_scene_test_.testscene.md#static-message_destroy)
* [MESSAGE_ON_START](_scene_scene_test_.testscene.md#static-message_on_start)

### Methods

* [AddEntity](_scene_scene_test_.testscene.md#addentity)
* [Destroy](_scene_scene_test_.testscene.md#destroy)
* [OnMessage](_scene_scene_test_.testscene.md#onmessage)
* [OnStart](_scene_scene_test_.testscene.md#protected-onstart)
* [Start](_scene_scene_test_.testscene.md#start)

## Constructors

###  constructor

\+ **new TestScene**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `id`: number, `entities`: [IEntity](../interfaces/_entity_ientity_.ientity.md)[]): *[TestScene](_scene_scene_test_.testscene.md)*

*Overrides [Scene](_scene_scene_.scene.md).[constructor](_scene_scene_.scene.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) | - |
`id` | number | - |
`entities` | [IEntity](../interfaces/_entity_ientity_.ientity.md)[] | [] |

**Returns:** *[TestScene](_scene_scene_test_.testscene.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/_scene_iscene_.iscene.md).[id](../interfaces/_scene_iscene_.iscene.md#id)*

*Inherited from [Scene](_scene_scene_.scene.md).[id](_scene_scene_.scene.md#id)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

*Inherited from [Scene](_scene_scene_.scene.md).[messageBus](_scene_scene_.scene.md#protected-messagebus)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DESTROY

▪ **MESSAGE_DESTROY**: *"scene_destroy"* = "scene_destroy"

*Inherited from [Scene](_scene_scene_.scene.md).[MESSAGE_DESTROY](_scene_scene_.scene.md#static-message_destroy)*

___

### `Static` MESSAGE_ON_START

▪ **MESSAGE_ON_START**: *"scene_on_start"* = "scene_on_start"

*Inherited from [Scene](_scene_scene_.scene.md).[MESSAGE_ON_START](_scene_scene_.scene.md#static-message_on_start)*

## Methods

###  AddEntity

▸ **AddEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

*Inherited from [Scene](_scene_scene_.scene.md).[AddEntity](_scene_scene_.scene.md#addentity)*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [Scene](_scene_scene_.scene.md).[Destroy](_scene_scene_.scene.md#destroy)*

Destroy destroys the scene, alongside all linked entities, components and systems.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Inherited from [Scene](_scene_scene_.scene.md).[OnMessage](_scene_scene_.scene.md#onmessage)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

### `Protected` OnStart

▸ **OnStart**(): *void*

*Inherited from [Scene](_scene_scene_.scene.md).[OnStart](_scene_scene_.scene.md#protected-onstart)*

OnStart is triggered on scene start.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

*Inherited from [Scene](_scene_scene_.scene.md).[Start](_scene_scene_.scene.md#start)*

Start starts this scene

**Returns:** *void*
