
# Class: TestGame

## Hierarchy

* [Game](_game_.game.md)

  ↳ **TestGame**

## Implements

* [IGame](../interfaces/_igame_.igame.md)

## Index

### Constructors

* [constructor](_game_test_.testgame.md#constructor)

### Properties

* [messageBus](_game_test_.testgame.md#protected-messagebus)
* [name](_game_test_.testgame.md#name)
* [MESSAGE_POST_RENDER](_game_test_.testgame.md#static-message_post_render)
* [MESSAGE_PRE_RENDER](_game_test_.testgame.md#static-message_pre_render)
* [MESSAGE_RENDER](_game_test_.testgame.md#static-message_render)

### Methods

* [OnStart](_game_test_.testgame.md#protected-onstart)
* [Start](_game_test_.testgame.md#start)

## Constructors

###  constructor

\+ **new TestGame**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `name`: string, `frameRequestCallback`: function): *[TestGame](_game_test_.testgame.md)*

*Inherited from [Game](_game_.game.md).[constructor](_game_.game.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

▪`Default value`  **name**: *string*= "game"

▪`Default value`  **frameRequestCallback**: *function*= window.requestAnimationFrame.bind(window)

▸ (`callback`: FrameRequestCallback): *number*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | FrameRequestCallback |

**Returns:** *[TestGame](_game_test_.testgame.md)*

## Properties

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

*Inherited from [Game](_game_.game.md).[messageBus](_game_.game.md#protected-messagebus)*

___

###  name

• **name**: *string*

*Inherited from [Game](_game_.game.md).[name](_game_.game.md#name)*

___

### `Static` MESSAGE_POST_RENDER

▪ **MESSAGE_POST_RENDER**: *"post_render"* = "post_render"

*Inherited from [Game](_game_.game.md).[MESSAGE_POST_RENDER](_game_.game.md#static-message_post_render)*

___

### `Static` MESSAGE_PRE_RENDER

▪ **MESSAGE_PRE_RENDER**: *"pre_render"* = "pre_render"

*Inherited from [Game](_game_.game.md).[MESSAGE_PRE_RENDER](_game_.game.md#static-message_pre_render)*

___

### `Static` MESSAGE_RENDER

▪ **MESSAGE_RENDER**: *"render"* = "render"

*Inherited from [Game](_game_.game.md).[MESSAGE_RENDER](_game_.game.md#static-message_render)*

## Methods

### `Protected` OnStart

▸ **OnStart**(): *void*

*Inherited from [Game](_game_.game.md).[OnStart](_game_.game.md#protected-onstart)*

OnStart is triggered when the game is started.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

*Inherited from [Game](_game_.game.md).[Start](_game_.game.md#start)*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*
