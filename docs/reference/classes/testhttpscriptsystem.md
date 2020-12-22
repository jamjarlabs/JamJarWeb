
# Class: TestHTTPScriptSystem

## Hierarchy

  ↳ [HTTPScriptSystem](httpscriptsystem.md)

  ↳ **TestHTTPScriptSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](testhttpscriptsystem.md#constructor)

### Properties

* [entities](testhttpscriptsystem.md#protected-entities)
* [messageBus](testhttpscriptsystem.md#protected-messagebus)
* [scene](testhttpscriptsystem.md#protected-optional-scene)
* [subscriberID](testhttpscriptsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](testhttpscriptsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](testhttpscriptsystem.md#static-message_register)
* [MESSAGE_REQUEST_CLEAR](testhttpscriptsystem.md#static-message_request_clear)
* [MESSAGE_REQUEST_FLUSH](testhttpscriptsystem.md#static-message_request_flush)
* [MESSAGE_UPDATE](testhttpscriptsystem.md#static-message_update)

### Methods

* [Destroy](testhttpscriptsystem.md#destroy)
* [OnDestroy](testhttpscriptsystem.md#protected-ondestroy)
* [OnMessage](testhttpscriptsystem.md#onmessage)
* [SimulateHTTPError](testhttpscriptsystem.md#simulatehttperror)
* [SimulateHTTPSuccess](testhttpscriptsystem.md#simulatehttpsuccess)
* [SimulateHandleResponse](testhttpscriptsystem.md#simulatehandleresponse)
* [Update](testhttpscriptsystem.md#protected-update)
* [handleResponse](testhttpscriptsystem.md#protected-handleresponse)
* [httpError](testhttpscriptsystem.md#protected-httperror)
* [httpSuccess](testhttpscriptsystem.md#protected-httpsuccess)
* [register](testhttpscriptsystem.md#protected-register)
* [remove](testhttpscriptsystem.md#protected-remove)

## Constructors

###  constructor

\+ **new TestHTTPScriptSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number, `assets`: [ScriptAsset](scriptasset.md)[]): *[TestHTTPScriptSystem](testhttpscriptsystem.md)*

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[constructor](httpscriptsystem.md#constructor)*

*Overrides [MapSystem](mapsystem.md).[constructor](mapsystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |
`assets` | [ScriptAsset](scriptasset.md)[] | [] |

**Returns:** *[TestHTTPScriptSystem](testhttpscriptsystem.md)*

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

### `Static` MESSAGE_REQUEST_CLEAR

▪ **MESSAGE_REQUEST_CLEAR**: *"request_script_clear"* = "request_script_clear"

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[MESSAGE_REQUEST_CLEAR](httpscriptsystem.md#static-message_request_clear)*

Message to clear out loaded assets.

___

### `Static` MESSAGE_REQUEST_FLUSH

▪ **MESSAGE_REQUEST_FLUSH**: *"request_script_flush"* = "request_script_flush"

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[MESSAGE_REQUEST_FLUSH](httpscriptsystem.md#static-message_request_flush)*

Message to send out all loaded script messages that are currently loaded.

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

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[OnMessage](httpscriptsystem.md#onmessage)*

*Overrides [StatefulSystem](statefulsystem.md).[OnMessage](statefulsystem.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

###  SimulateHTTPError

▸ **SimulateHTTPError**(`request`: [ScriptRequest](scriptrequest.md), `error`: Error): *void*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ScriptRequest](scriptrequest.md) |
`error` | Error |

**Returns:** *void*

___

###  SimulateHTTPSuccess

▸ **SimulateHTTPSuccess**(`code`: string, `request`: [ScriptRequest](scriptrequest.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`request` | [ScriptRequest](scriptrequest.md) |

**Returns:** *void*

___

###  SimulateHandleResponse

▸ **SimulateHandleResponse**(`response`: Response): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`response` | Response |

**Returns:** *Promise‹string›*

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

### `Protected` handleResponse

▸ **handleResponse**(`response`: Response): *Promise‹string›*

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[handleResponse](httpscriptsystem.md#protected-handleresponse)*

**Parameters:**

Name | Type |
------ | ------ |
`response` | Response |

**Returns:** *Promise‹string›*

___

### `Protected` httpError

▸ **httpError**(`request`: [ScriptRequest](scriptrequest.md), `error`: Error): *void*

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[httpError](httpscriptsystem.md#protected-httperror)*

**Parameters:**

Name | Type |
------ | ------ |
`request` | [ScriptRequest](scriptrequest.md) |
`error` | Error |

**Returns:** *void*

___

### `Protected` httpSuccess

▸ **httpSuccess**(`code`: string, `request`: [ScriptRequest](scriptrequest.md)): *void*

*Inherited from [HTTPScriptSystem](httpscriptsystem.md).[httpSuccess](httpscriptsystem.md#protected-httpsuccess)*

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |
`request` | [ScriptRequest](scriptrequest.md) |

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
