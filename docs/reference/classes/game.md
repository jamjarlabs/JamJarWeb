
# Class: Game

Game is the core engine class.
The game contains the game loop, which handles triggering updates in systems and
setting up rendering.

## Hierarchy

* [Subscriber](subscriber.md)

  ↳ **Game**

  ↳ [TestGame](testgame.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)
* [IGame](../interfaces/igame.md)

## Index

### Constructors

* [constructor](game.md#constructor)

### Properties

* [accumulator](game.md#private-accumulator)
* [browserWindow](game.md#private-browserwindow)
* [currentTime](game.md#private-currenttime)
* [frameRequestCallback](game.md#private-framerequestcallback)
* [messageBus](game.md#protected-messagebus)
* [name](game.md#name)
* [running](game.md#private-running)
* [subscriberID](game.md#subscriberid)
* [MESSAGE_POST_RENDER](game.md#static-message_post_render)
* [MESSAGE_PRE_RENDER](game.md#static-message_pre_render)
* [MESSAGE_RENDER](game.md#static-message_render)
* [MESSAGE_STOP_GAME](game.md#static-message_stop_game)
* [TIME_STEP](game.md#static-private-time_step)

### Methods

* [OnMessage](game.md#onmessage)
* [OnStart](game.md#protected-onstart)
* [OnStop](game.md#protected-onstop)
* [Start](game.md#start)
* [loop](game.md#private-loop)
* [stop](game.md#private-stop)
* [stopAllGames](game.md#static-private-stopallgames)

## Constructors

###  constructor

\+ **new Game**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `name`: string, `frameRequestCallback`: function, `running`: boolean, `browserWindow`: Window, `subscriberID?`: undefined | number): *[Game](game.md)*

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

**Returns:** *[Game](game.md)*

## Properties

### `Private` accumulator

• **accumulator**: *number*

___

### `Private` browserWindow

• **browserWindow**: *Window*

___

### `Private` currentTime

• **currentTime**: *number*

___

### `Private` frameRequestCallback

• **frameRequestCallback**: *function*

#### Type declaration:

▸ (`callback`: FrameRequestCallback): *number*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | FrameRequestCallback |

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

___

###  name

• **name**: *string*

___

### `Private` running

• **running**: *boolean*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_POST_RENDER

▪ **MESSAGE_POST_RENDER**: *"post_render"* = "post_render"

___

### `Static` MESSAGE_PRE_RENDER

▪ **MESSAGE_PRE_RENDER**: *"pre_render"* = "pre_render"

___

### `Static` MESSAGE_RENDER

▪ **MESSAGE_RENDER**: *"render"* = "render"

___

### `Static` MESSAGE_STOP_GAME

▪ **MESSAGE_STOP_GAME**: *"jamjar_stop_game"* = "jamjar_stop_game"

___

### `Static` `Private` TIME_STEP

▪ **TIME_STEP**: *0.01* = 0.01

## Methods

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` OnStart

▸ **OnStart**(): *void*

OnStart is triggered when the game is started.

**Returns:** *void*

___

### `Protected` OnStop

▸ **OnStop**(): *void*

OnStop is triggered when the game is stopped.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*

___

### `Private` loop

▸ **loop**(`timestamp`: number): *void*

loop is the core game loop, it handles repeatedly calling itself to manage updates and rendering.
Updates should be fixed and occur consistently, therefore there is an accumulator to make sure
that enough updates happen to keep up with the time step.
Rendering can occur as fast as possible, rendering systems will have to account for interpolation,
which uses the alpha value that is calculated.
See: https://gameprogrammingpatterns.com/game-loop.html

**Parameters:**

Name | Type |
------ | ------ |
`timestamp` | number |

**Returns:** *void*

___

### `Private` stop

▸ **stop**(): *void*

**Returns:** *void*

___

### `Static` `Private` stopAllGames

▸ **stopAllGames**(`browserWindow`: Window): *void*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`browserWindow` | Window | window |

**Returns:** *void*
