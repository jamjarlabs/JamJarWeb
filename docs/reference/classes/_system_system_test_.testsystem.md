
# Class: TestSystem

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **TestSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_system_system_test_.testsystem.md#constructor)

### Properties

* [entities](_system_system_test_.testsystem.md#protected-entities)
* [messageBus](_system_system_test_.testsystem.md#protected-messagebus)
* [scene](_system_system_test_.testsystem.md#protected-optional-scene)
* [subscriberID](_system_system_test_.testsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](_system_system_test_.testsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_system_system_test_.testsystem.md#static-message_register)
* [MESSAGE_UPDATE](_system_system_test_.testsystem.md#static-message_update)

### Methods

* [Destroy](_system_system_test_.testsystem.md#destroy)
* [GetSystemEntity](_system_system_test_.testsystem.md#protected-getsystementity)
* [OnMessage](_system_system_test_.testsystem.md#onmessage)
* [TestGetSystemEntity](_system_system_test_.testsystem.md#testgetsystementity)
* [Update](_system_system_test_.testsystem.md#protected-update)

## Constructors

###  constructor

\+ **new TestSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `args`: object, `entities`: [SystemEntity](_system_system_entity_.systementity.md)[]): *[TestSystem](_system_system_test_.testsystem.md)*

*Inherited from [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[constructor](_message_subscriber_.subscriber.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

▪`Default value`  **args**: *object*= {}

Name | Type |
------ | ------ |
`evaluator?` | undefined &#124; function |
`scene?` | [IScene](../interfaces/_scene_iscene_.iscene.md) |

▪`Default value`  **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*= []

**Returns:** *[TestSystem](_system_system_test_.testsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*

*Inherited from [System](_system_system_.system.md).[entities](_system_system_.system.md#protected-entities)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

*Inherited from [System](_system_system_.system.md).[messageBus](_system_system_.system.md#protected-messagebus)*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/_scene_iscene_.iscene.md)*

*Inherited from [System](_system_system_.system.md).[scene](_system_system_.system.md#protected-optional-scene)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](_system_system_.system.md).[MESSAGE_DEREGISTER](_system_system_.system.md#static-message_deregister)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](_system_system_.system.md).[MESSAGE_REGISTER](_system_system_.system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](_system_system_.system.md).[MESSAGE_UPDATE](_system_system_.system.md#static-message_update)*

## Methods

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [System](_system_system_.system.md).[Destroy](_system_system_.system.md#destroy)*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

*Inherited from [System](_system_system_.system.md).[GetSystemEntity](_system_system_.system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

The system entity if it exists, otherwise undefined

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Inherited from [System](_system_system_.system.md).[OnMessage](_system_system_.system.md#onmessage)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

###  TestGetSystemEntity

▸ **TestGetSystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |

**Returns:** *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](_system_system_.system.md).[Update](_system_system_.system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*
