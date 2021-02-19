
# Class: TestGame

## Hierarchy

  ↳ [Game](game.md)

  ↳ **TestGame**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)
* [IGame](../interfaces/igame.md)

## Index

### Constructors

* [constructor](testgame.md#constructor)

### Properties

* [messageBus](testgame.md#protected-messagebus)
* [name](testgame.md#name)
* [subscriberID](testgame.md#subscriberid)
* [MESSAGE_POST_RENDER](testgame.md#static-message_post_render)
* [MESSAGE_PRE_RENDER](testgame.md#static-message_pre_render)
* [MESSAGE_RENDER](testgame.md#static-message_render)
* [MESSAGE_STOP_GAME](testgame.md#static-message_stop_game)

### Methods

* [OnMessage](testgame.md#onmessage)
* [OnStart](testgame.md#protected-onstart)
* [OnStop](testgame.md#protected-onstop)
* [Start](testgame.md#start)

## Constructors

###  constructor

\+ **new TestGame**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `name`: string, `frameRequestCallback`: function, `running`: boolean, `browserWindow`: Window, `subscriberID?`: undefined | number): *[TestGame](testgame.md)*

*Inherited from [Game](game.md).[constructor](game.md#constructor)*

*Overrides [Subscriber](subscriber.md).[constructor](subscriber.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **name**: *string*= "game"

▪`Default value`  **frameRequestCallback**: *function*= window.requestAnimationFrame.bind(window)

▸ (`callback`: FrameRequestCallback): *number*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | FrameRequestCallback |

▪`Default value`  **running**: *boolean*= false

▪`Default value`  **browserWindow**: *Window*= window

▪`Optional`  **subscriberID**: *undefined | number*

**Returns:** *[TestGame](testgame.md)*

## Properties

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [Game](game.md).[messageBus](game.md#protected-messagebus)*

___

###  name

• **name**: *string*

*Inherited from [Game](game.md).[name](game.md#name)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_POST_RENDER

▪ **MESSAGE_POST_RENDER**: *"post_render"* = "post_render"

*Inherited from [Game](game.md).[MESSAGE_POST_RENDER](game.md#static-message_post_render)*

___

### `Static` MESSAGE_PRE_RENDER

▪ **MESSAGE_PRE_RENDER**: *"pre_render"* = "pre_render"

*Inherited from [Game](game.md).[MESSAGE_PRE_RENDER](game.md#static-message_pre_render)*

___

### `Static` MESSAGE_RENDER

▪ **MESSAGE_RENDER**: *"render"* = "render"

*Inherited from [Game](game.md).[MESSAGE_RENDER](game.md#static-message_render)*

___

### `Static` MESSAGE_STOP_GAME

▪ **MESSAGE_STOP_GAME**: *"jamjar_stop_game"* = "jamjar_stop_game"

*Inherited from [Game](game.md).[MESSAGE_STOP_GAME](game.md#static-message_stop_game)*

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Inherited from [Game](game.md).[OnMessage](game.md#onmessage)*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` OnStart

▸ **OnStart**(): *void*

*Inherited from [Game](game.md).[OnStart](game.md#protected-onstart)*

OnStart is triggered when the game is started.

**Returns:** *void*

___

### `Protected` OnStop

▸ **OnStop**(): *void*

*Inherited from [Game](game.md).[OnStop](game.md#protected-onstop)*

OnStop is triggered when the game is stopped.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

*Inherited from [Game](game.md).[Start](game.md#start)*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*
