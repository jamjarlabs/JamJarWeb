# Class: CanvasResizeSystem

CanvasResizeSystem handles automatically resizing the game canvas based on the aspect ratio, maximum resolution, and
the HTML wrapper element around the canvas. The system set the canvas to the resolution that meets the following
criteria:
1. In the aspect ratio provided.
2. Smaller than or equal to the maximum resolution if provided.
3. Smaller than or equal to the wrapper size in pixels if not full screen.
4. Smaller than or equal to the screen resolution if full screen.
5. The largest possible resolution within these criteria.

## Hierarchy

* [*System*](system.md)

  ↳ **CanvasResizeSystem**

## Table of contents

### Constructors

- [constructor](canvasresizesystem.md#constructor)

### Properties

- [messageBus](canvasresizesystem.md#messagebus)
- [scene](canvasresizesystem.md#scene)
- [subscriberID](canvasresizesystem.md#subscriberid)
- [MESSAGE\_SET\_ASPECT\_RATIO](canvasresizesystem.md#message_set_aspect_ratio)
- [MESSAGE\_SET\_MAX\_RESOLUTION](canvasresizesystem.md#message_set_max_resolution)
- [MESSAGE\_UPDATE](canvasresizesystem.md#message_update)

### Methods

- [Destroy](canvasresizesystem.md#destroy)
- [OnDestroy](canvasresizesystem.md#ondestroy)
- [OnMessage](canvasresizesystem.md#onmessage)
- [Update](canvasresizesystem.md#update)
- [onResize](canvasresizesystem.md#onresize)

## Constructors

### constructor

\+ **new CanvasResizeSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `canvas`: HTMLCanvasElement, `wrapper`: HTMLElement, `aspectRatio?`: *number*, `maxResolution?`: *null* \| [*number*, *number*], `scene?`: [*IScene*](../interfaces/iscene.md), `isFullscreen?`: *boolean*, `browserScreen?`: Screen, `subscriberID?`: *number*): [*CanvasResizeSystem*](canvasresizesystem.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) | - |
`canvas` | HTMLCanvasElement | - |
`wrapper` | HTMLElement | - |
`aspectRatio` | *number* | - |
`maxResolution` | *null* \| [*number*, *number*] | null |
`scene?` | [*IScene*](../interfaces/iscene.md) | - |
`isFullscreen` | *boolean* | false |
`browserScreen` | Screen | - |
`subscriberID?` | *number* | - |

**Returns:** [*CanvasResizeSystem*](canvasresizesystem.md)

Inherited from: [System](system.md)

## Properties

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [System](system.md).[messageBus](system.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [System](system.md).[scene](system.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [System](system.md).[subscriberID](system.md#subscriberid)

___

### MESSAGE\_SET\_ASPECT\_RATIO

▪ `Readonly` `Static` **MESSAGE\_SET\_ASPECT\_RATIO**: *jamjar_set_aspect_ratio*= "jamjar\_set\_aspect\_ratio"

Message to set the aspect ratio.

___

### MESSAGE\_SET\_MAX\_RESOLUTION

▪ `Readonly` `Static` **MESSAGE\_SET\_MAX\_RESOLUTION**: *jamjar_set_max_resolution*= "jamjar\_set\_max\_resolution"

Message to set the maximum resolution.

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [System](system.md).[MESSAGE_UPDATE](system.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [System](system.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

**Returns:** *void*

Overrides: [System](system.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [System](system.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [System](system.md)

___

### onResize

▸ `Protected`**onResize**(): *void*

**Returns:** *void*
