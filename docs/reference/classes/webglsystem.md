
# Class: WebGLSystem

WebGLSystem handles rendering to an HTML5 canvas using WebGL.
Takes in renderables created by pre rendering steps and
renders them onto a canvas.

## Hierarchy

  ↳ [System](system.md)

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
* [placeholderTexture](webglsystem.md#private-placeholdertexture)
* [program](webglsystem.md#private-program)
* [renderables](webglsystem.md#private-renderables)
* [scene](webglsystem.md#protected-optional-scene)
* [subscriberID](webglsystem.md#subscriberid)
* [textures](webglsystem.md#private-textures)
* [FRAGMENT_SHADER](webglsystem.md#static-private-fragment_shader)
* [MESSAGE_DEREGISTER](webglsystem.md#static-message_deregister)
* [MESSAGE_LOAD_RENDERABLES](webglsystem.md#static-message_load_renderables)
* [MESSAGE_REGISTER](webglsystem.md#static-message_register)
* [MESSAGE_UPDATE](webglsystem.md#static-message_update)
* [VERTEX_SHADER](webglsystem.md#static-private-vertex_shader)

### Methods

* [Destroy](webglsystem.md#destroy)
* [OnDestroy](webglsystem.md#protected-ondestroy)
* [OnMessage](webglsystem.md#onmessage)
* [Update](webglsystem.md#protected-update)
* [createProgram](webglsystem.md#private-createprogram)
* [createShader](webglsystem.md#private-createshader)
* [render](webglsystem.md#private-render)
* [EVALUATOR](webglsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new WebGLSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [IScene](../interfaces/iscene.md), `renderables`: [Renderable](renderable.md)[], `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[WebGLSystem](webglsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`gl` | WebGL2RenderingContext | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`renderables` | [Renderable](renderable.md)[] | [] |
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

### `Private` placeholderTexture

• **placeholderTexture**: *WebGLTexture*

___

### `Private` program

• **program**: *WebGLProgram | null*

___

### `Private` renderables

• **renderables**: *[Renderable](renderable.md)[]*

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

### `Private` textures

• **textures**: *Record‹string, WebGLTexture›*

___

### `Static` `Private` FRAGMENT_SHADER

▪ **FRAGMENT_SHADER**: *"#version 300 es
        precision mediump float;

        uniform bool uTexturePresent;
        uniform vec4 uColor;
        uniform sampler2D uTexture;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            vec4 texturedColor;
            if (uTexturePresent) {
                texturedColor = texture(uTexture, vTextureCoordinate);
            }
            else {
                texturedColor = uColor;
            }
            outColor = texturedColor;
        }
    "* = `#version 300 es
        precision mediump float;

        uniform bool uTexturePresent;
        uniform vec4 uColor;
        uniform sampler2D uTexture;

        in vec2 vTextureCoordinate;

        out vec4 outColor;

        void main() {
            vec4 texturedColor;
            if (uTexturePresent) {
                texturedColor = texture(uTexture, vTextureCoordinate);
            }
            else {
                texturedColor = uColor;
            }
            outColor = texturedColor;
        }
    `

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](system.md).[MESSAGE_DEREGISTER](system.md#static-message_deregister)*

___

### `Static` MESSAGE_LOAD_RENDERABLES

▪ **MESSAGE_LOAD_RENDERABLES**: *"load_renderables"* = "load_renderables"

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](system.md).[MESSAGE_UPDATE](system.md#static-message_update)*

___

### `Static` `Private` VERTEX_SHADER

▪ **VERTEX_SHADER**: *"#version 300 es
        in vec2 aVertexPosition;
        in vec2 aTexturePosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        out vec2 vTextureCoordinate;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
            vTextureCoordinate = aTexturePosition;
        }
    "* = `#version 300 es
        in vec2 aVertexPosition;
        in vec2 aTexturePosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        out vec2 vTextureCoordinate;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
            vTextureCoordinate = aTexturePosition;
        }
    `

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

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

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

### `Private` createProgram

▸ **createProgram**(`vertex`: WebGLShader, `fragment`: WebGLShader): *WebGLProgram*

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | WebGLShader |
`fragment` | WebGLShader |

**Returns:** *WebGLProgram*

___

### `Private` createShader

▸ **createShader**(`type`: number, `source`: string): *WebGLShader*

**Parameters:**

Name | Type |
------ | ------ |
`type` | number |
`source` | string |

**Returns:** *WebGLShader*

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
