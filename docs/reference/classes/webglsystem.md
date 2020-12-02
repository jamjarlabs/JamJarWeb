
# Class: WebGLSystem

WebGLSystem handles rendering to an HTML5 canvas using WebGL.
Takes in renderables created by pre rendering steps and
renders them onto a canvas.

## Hierarchy

  ↳ [RenderSystem](rendersystem.md)

  ↳ **WebGLSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](webglsystem.md#constructor)

### Properties

* [entities](webglsystem.md#protected-entities)
* [gl](webglsystem.md#private-gl)
* [messageBus](webglsystem.md#protected-messagebus)
* [programs](webglsystem.md#private-programs)
* [renderables](webglsystem.md#protected-renderables)
* [scene](webglsystem.md#protected-optional-scene)
* [shaders](webglsystem.md#private-shaders)
* [subscriberID](webglsystem.md#subscriberid)
* [textures](webglsystem.md#private-textures)
* [DRAW_MODES](webglsystem.md#static-private-draw_modes)
* [FILTER_MODES](webglsystem.md#static-private-filter_modes)
* [MESSAGE_DEREGISTER](webglsystem.md#static-message_deregister)
* [MESSAGE_LOAD_RENDERABLES](webglsystem.md#static-message_load_renderables)
* [MESSAGE_REGISTER](webglsystem.md#static-message_register)
* [MESSAGE_UPDATE](webglsystem.md#static-message_update)
* [WRAP_MODES](webglsystem.md#static-private-wrap_modes)

### Methods

* [Destroy](webglsystem.md#destroy)
* [OnDestroy](webglsystem.md#protected-ondestroy)
* [OnMessage](webglsystem.md#onmessage)
* [Update](webglsystem.md#protected-update)
* [loadShader](webglsystem.md#private-loadshader)
* [loadTexture](webglsystem.md#private-loadtexture)
* [render](webglsystem.md#private-render)
* [EVALUATOR](webglsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new WebGLSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [IScene](../interfaces/iscene.md), `renderables`: Map‹number, [IRenderable](../interfaces/irenderable.md)[]›, `defaultShaderAssets`: [ShaderAsset](shaderasset.md)[], `shaders`: Map‹string, [WebGLShader, [GLSLShader](glslshader.md)]›, `textures`: Map‹string, WebGLTexture›, `programs`: Map‹string, WebGLProgram›, `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[WebGLSystem](webglsystem.md)*

*Overrides [RenderSystem](rendersystem.md).[constructor](rendersystem.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`gl` | WebGL2RenderingContext | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`renderables` | Map‹number, [IRenderable](../interfaces/irenderable.md)[]› | new Map() |
`defaultShaderAssets` | [ShaderAsset](shaderasset.md)[] | [
            new ShaderAsset(ShaderAsset.DEFAULT_TEXTURE_FRAGMENT_SHADER_NAME, new DefaultTextureFragmentShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_TEXTURE_VERTEX_SHADER_NAME, new DefaultTextureVertexShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_TEXT_FRAGMENT_SHADER_NAME, new DefaultTextFragmentShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_PRIMITIVE_FRAGMENT_SHADER_NAME, new DefaultPrimitiveFragmentShader()),
            new ShaderAsset(ShaderAsset.DEFAULT_PRIMITIVE_VERTEX_SHADER_NAME, new DefaultPrimitiveVertexShader()),
        ] |
`shaders` | Map‹string, [WebGLShader, [GLSLShader](glslshader.md)]› | new Map() |
`textures` | Map‹string, WebGLTexture› | new Map() |
`programs` | Map‹string, WebGLProgram› | new Map() |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[WebGLSystem](webglsystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` gl

• **gl**: *WebGL2RenderingContext*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` programs

• **programs**: *Map‹string, WebGLProgram›*

___

### `Protected` renderables

• **renderables**: *Map‹number, [IRenderable](../interfaces/irenderable.md)[]›*

*Inherited from [RenderSystem](rendersystem.md).[renderables](rendersystem.md#protected-renderables)*

A list of things to be rendered.

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

___

### `Private` shaders

• **shaders**: *Map‹string, [WebGLShader, [GLSLShader](glslshader.md)]›*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Private` textures

• **textures**: *Map‹string, WebGLTexture›*

___

### `Static` `Private` DRAW_MODES

▪ **DRAW_MODES**: *Map‹[DrawMode](../enums/drawmode.md), number›* = new Map<DrawMode, number>(
        new Map([
            [DrawMode.POINTS, WebGL2RenderingContext.POINTS],
            [DrawMode.LINES, WebGL2RenderingContext.LINES],
            [DrawMode.LINE_STRIP, WebGL2RenderingContext.LINE_STRIP],
            [DrawMode.TRIANGLES, WebGL2RenderingContext.TRIANGLES],
            [DrawMode.TRIANGLE_STRIP, WebGL2RenderingContext.TRIANGLE_STRIP],
        ])
    )

___

### `Static` `Private` FILTER_MODES

▪ **FILTER_MODES**: *Map‹[TextureFiltering](../enums/texturefiltering.md), number›* = new Map<TextureFiltering, number>(
        new Map([
            [TextureFiltering.NEAREST, WebGL2RenderingContext.NEAREST],
            [TextureFiltering.BILINEAR, WebGL2RenderingContext.LINEAR],
            [TextureFiltering.TRILINEAR, WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR],
        ])
    )

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](system.md).[MESSAGE_DEREGISTER](system.md#static-message_deregister)*

___

### `Static` MESSAGE_LOAD_RENDERABLES

▪ **MESSAGE_LOAD_RENDERABLES**: *"load_renderables"* = "load_renderables"

*Inherited from [RenderSystem](rendersystem.md).[MESSAGE_LOAD_RENDERABLES](rendersystem.md#static-message_load_renderables)*

Message used to add new renderables into the render system's render list.

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](system.md).[MESSAGE_UPDATE](system.md#static-message_update)*

___

### `Static` `Private` WRAP_MODES

▪ **WRAP_MODES**: *Map‹[TextureWrapping](../enums/texturewrapping.md), number›* = new Map<TextureWrapping, number>(
        new Map([
            [TextureWrapping.REPEAT, WebGL2RenderingContext.REPEAT],
            [TextureWrapping.MIRRORED_REPEAT, WebGL2RenderingContext.MIRRORED_REPEAT],
            [TextureWrapping.CLAMP_TO_EDGE, WebGL2RenderingContext.CLAMP_TO_EDGE],
        ])
    )

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

*Overrides [RenderSystem](rendersystem.md).[OnMessage](rendersystem.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

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

### `Private` loadShader

▸ **loadShader**(`asset`: [ShaderAsset](shaderasset.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | [ShaderAsset](shaderasset.md) |

**Returns:** *void*

___

### `Private` loadTexture

▸ **loadTexture**(`asset`: [ImageAsset](imageasset.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | [ImageAsset](imageasset.md) |

**Returns:** *void*

___

### `Private` render

▸ **render**(`alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | number |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
