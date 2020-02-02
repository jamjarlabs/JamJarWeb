
# Class: Game

Game is the core engine class.
The game contains the game loop, which handles triggering updates in systems and
setting up rendering.

## Hierarchy

* **Game**

  ↳ [TestGame](testgame.md)

## Implements

* [IGame](../interfaces/igame.md)

## Index

### Constructors

* [constructor](game.md#constructor)

### Properties

* [accumulator](game.md#private-accumulator)
* [currentTime](game.md#private-currenttime)
* [frameRequestCallback](game.md#private-framerequestcallback)
* [messageBus](game.md#protected-messagebus)
* [name](game.md#name)
* [MESSAGE_POST_RENDER](game.md#static-message_post_render)
* [MESSAGE_PRE_RENDER](game.md#static-message_pre_render)
* [MESSAGE_RENDER](game.md#static-message_render)
* [TIME_STEP](game.md#static-private-time_step)

### Methods

* [OnStart](game.md#protected-onstart)
* [Start](game.md#start)
* [loop](game.md#private-loop)

## Constructors

###  constructor

\+ **new Game**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `name`: string, `frameRequestCallback`: function): *[Game](game.md)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **name**: *string*= "game"

▪`Default value`  **frameRequestCallback**: *function*= window.requestAnimationFrame.bind(window)

▸ (`callback`: FrameRequestCallback): *number*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | FrameRequestCallback |

**Returns:** *[Game](game.md)*

## Properties

### `Private` accumulator

• **accumulator**: *number*

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

### `Static` MESSAGE_POST_RENDER

▪ **MESSAGE_POST_RENDER**: *"post_render"* = "post_render"

___

### `Static` MESSAGE_PRE_RENDER

▪ **MESSAGE_PRE_RENDER**: *"pre_render"* = "pre_render"

___

### `Static` MESSAGE_RENDER

▪ **MESSAGE_RENDER**: *"render"* = "render"

___

### `Static` `Private` TIME_STEP

▪ **TIME_STEP**: *number* = 1000 / 100

## Methods

### `Protected` OnStart

▸ **OnStart**(): *void*

OnStart is triggered when the game is started.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*

___

### `Private` loop

▸ **loop**(): *void*

loop is the core game loop, it handles repeatedly calling itself to manage updates and rendering.
Updates should be fixed and occur consistently, therefore there is an accumulator to make sure
that enough updates happen to keep up with the time step.
Rendering can occur as fast as possible, rendering systems will have to account for interpolation,
which uses the alpha value that is calculated.
See: https://gameprogrammingpatterns.com/game-loop.html

**Returns:** *void*
