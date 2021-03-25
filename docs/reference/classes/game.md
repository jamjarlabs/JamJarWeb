# Class: Game

Game is the core engine class.
The game contains the game loop, which handles triggering updates in systems and
setting up rendering.

## Hierarchy

* [*Subscriber*](subscriber.md)

  ↳ **Game**

## Implements

* [*IGame*](../interfaces/igame.md)

## Table of contents

### Constructors

- [constructor](game.md#constructor)

### Properties

- [messageBus](game.md#messagebus)
- [name](game.md#name)
- [subscriberID](game.md#subscriberid)
- [MESSAGE\_POST\_RENDER](game.md#message_post_render)
- [MESSAGE\_PRE\_RENDER](game.md#message_pre_render)
- [MESSAGE\_RENDER](game.md#message_render)
- [MESSAGE\_STOP\_GAME](game.md#message_stop_game)

### Methods

- [OnMessage](game.md#onmessage)
- [OnStart](game.md#onstart)
- [OnStop](game.md#onstop)
- [Start](game.md#start)

## Constructors

### constructor

\+ **new Game**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `name?`: *string*, `frameRequestCallback?`: (`callback`: FrameRequestCallback) => *number*, `running?`: *boolean*, `browserWindow?`: Window, `subscriberID?`: *number*): [*Game*](game.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) | - |
`name` | *string* | "game" |
`frameRequestCallback` | (`callback`: FrameRequestCallback) => *number* | - |
`running` | *boolean* | false |
`browserWindow` | Window | - |
`subscriberID?` | *number* | - |

**Returns:** [*Game*](game.md)

Inherited from: [Subscriber](subscriber.md)

## Properties

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

___

### name

• `Readonly` **name**: *string*

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)

___

### MESSAGE\_POST\_RENDER

▪ `Readonly` `Static` **MESSAGE\_POST\_RENDER**: *post_render*= "post\_render"

___

### MESSAGE\_PRE\_RENDER

▪ `Readonly` `Static` **MESSAGE\_PRE\_RENDER**: *pre_render*= "pre\_render"

___

### MESSAGE\_RENDER

▪ `Readonly` `Static` **MESSAGE\_RENDER**: *render*= "render"

___

### MESSAGE\_STOP\_GAME

▪ `Readonly` `Static` **MESSAGE\_STOP\_GAME**: *jamjar_stop_game*= "jamjar\_stop\_game"

## Methods

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [Subscriber](subscriber.md)

___

### OnStart

▸ `Protected`**OnStart**(): *void*

OnStart is triggered when the game is started.

**Returns:** *void*

___

### OnStop

▸ `Protected`**OnStop**(): *void*

OnStop is triggered when the game is stopped.

**Returns:** *void*

___

### Start

▸ **Start**(): *void*

Start kicks off the game, setting up systems and starting the game loop.

**Returns:** *void*
