# Class: WebGLSystem

WebGLSystem handles rendering to an HTML5 canvas using WebGL.
Takes in renderables created by pre rendering steps and
renders them onto a canvas.

## Hierarchy

* [*RenderSystem*](rendersystem.md)

  ↳ **WebGLSystem**

## Table of contents

### Constructors

- [constructor](webglsystem.md#constructor)

### Properties

- [entities](webglsystem.md#entities)
- [messageBus](webglsystem.md#messagebus)
- [renderables](webglsystem.md#renderables)
- [scene](webglsystem.md#scene)
- [subscriberID](webglsystem.md#subscriberid)
- [MESSAGE\_DEREGISTER](webglsystem.md#message_deregister)
- [MESSAGE\_LOAD\_RENDERABLES](webglsystem.md#message_load_renderables)
- [MESSAGE\_REGISTER](webglsystem.md#message_register)
- [MESSAGE\_UPDATE](webglsystem.md#message_update)

### Methods

- [Destroy](webglsystem.md#destroy)
- [OnDestroy](webglsystem.md#ondestroy)
- [OnMessage](webglsystem.md#onmessage)
- [Update](webglsystem.md#update)
- [register](webglsystem.md#register)
- [remove](webglsystem.md#remove)

## Constructors

### constructor

\+ **new WebGLSystem**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [*IScene*](../interfaces/iscene.md), `renderables?`: [*IRenderable*](../interfaces/irenderable.md)[], `defaultShaderAssets?`: [*ShaderAsset*](shaderasset.md)[], `shaders?`: *Map*<string, [WebGLShader, [*GLSLShader*](glslshader.md)]\>, `textures?`: *Map*<string, WebGLTexture\>, `programs?`: *Map*<string, WebGLProgram\>, `entities?`: [*SystemEntity*](systementity.md)[], `subscriberID?`: *number*): [*WebGLSystem*](webglsystem.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`gl` | WebGL2RenderingContext |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`renderables?` | [*IRenderable*](../interfaces/irenderable.md)[] |
`defaultShaderAssets` | [*ShaderAsset*](shaderasset.md)[] |
`shaders` | *Map*<string, [WebGLShader, [*GLSLShader*](glslshader.md)]\> |
`textures` | *Map*<string, WebGLTexture\> |
`programs` | *Map*<string, WebGLProgram\> |
`entities?` | [*SystemEntity*](systementity.md)[] |
`subscriberID?` | *number* |

**Returns:** [*WebGLSystem*](webglsystem.md)

Inherited from: [RenderSystem](rendersystem.md)

## Properties

### entities

• `Protected` **entities**: [*SystemEntity*](systementity.md)[]

The list of entities the system is tracking.

Inherited from: [RenderSystem](rendersystem.md).[entities](rendersystem.md#entities)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [RenderSystem](rendersystem.md).[messageBus](rendersystem.md#messagebus)

___

### renderables

• `Protected` **renderables**: [*IRenderable*](../interfaces/irenderable.md)[]

A list of things to be rendered.

Inherited from: [RenderSystem](rendersystem.md).[renderables](rendersystem.md#renderables)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [RenderSystem](rendersystem.md).[scene](rendersystem.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [RenderSystem](rendersystem.md).[subscriberID](rendersystem.md#subscriberid)

___

### MESSAGE\_DEREGISTER

▪ `Readonly` `Static` **MESSAGE\_DEREGISTER**: *stateful_system_deregister*= "stateful\_system\_deregister"

Message to deregister an entity + components with a system so it is no longer tracked.

Inherited from: [RenderSystem](rendersystem.md).[MESSAGE_DEREGISTER](rendersystem.md#message_deregister)

___

### MESSAGE\_LOAD\_RENDERABLES

▪ `Readonly` `Static` **MESSAGE\_LOAD\_RENDERABLES**: *load_renderables*= "load\_renderables"

Message used to add new renderables into the render system's render list.

Inherited from: [RenderSystem](rendersystem.md).[MESSAGE_LOAD_RENDERABLES](rendersystem.md#message_load_renderables)

___

### MESSAGE\_REGISTER

▪ `Readonly` `Static` **MESSAGE\_REGISTER**: *stateful_system_register*= "stateful\_system\_register"

Message to register an entity + components with a system so it can be tracked.

Inherited from: [RenderSystem](rendersystem.md).[MESSAGE_REGISTER](rendersystem.md#message_register)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [RenderSystem](rendersystem.md).[MESSAGE_UPDATE](rendersystem.md#message_update)

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [RenderSystem](rendersystem.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [RenderSystem](rendersystem.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [RenderSystem](rendersystem.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*

Inherited from: [RenderSystem](rendersystem.md)

___

### register

▸ `Protected`**register**(`entity`: [*IEntity*](../interfaces/ientity.md), `components`: [*Component*](component.md)[]): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |
`components` | [*Component*](component.md)[] |

**Returns:** *void*

Inherited from: [RenderSystem](rendersystem.md)

___

### remove

▸ `Protected`**remove**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

Inherited from: [RenderSystem](rendersystem.md)
