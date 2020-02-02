
# Class: TestGame

## Hierarchy

* [Game](game.md)

  ↳ **TestGame**

## Implements

* [IGame](../interfaces/igame.md)

## Index

### Constructors

* [constructor](testgame.md#constructor)

### Properties

* [messageBus](testgame.md#protected-messagebus)
* [name](testgame.md#name)
* [MESSAGE_POST_RENDER](testgame.md#static-message_post_render)
* [MESSAGE_PRE_RENDER](testgame.md#static-message_pre_render)
* [MESSAGE_RENDER](testgame.md#static-message_render)

### Methods

* [OnStart](testgame.md#protected-onstart)
* [Start](testgame.md#start)

## Constructors

###  constructor

\+ **new TestGame**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `name`: string, `frameRequestCallback`: function): *[TestGame](testgame.md)*

*Inherited from [Game](game.md).[constructor](game.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **name**: *string*= "game"

▪`Default value`  **frameRequestCallback**: *function*= window.requestAnimationFrame.bind(window)

▸ (`callback`: FrameRequestCallback): *number*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | FrameRequestCallback |

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

## Methods

### `Protected` OnStart

▸ **OnStart**(): *void*

*Inherited from [Game](game.md).[OnStart](game.md#protected-onstart)*

OnStart is triggered when the game is started.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

*Inherited from [Game](game.md).[Start](game.md#start)*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*
