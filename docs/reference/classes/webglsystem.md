
# Class: WebGLSystem

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
* [program](webglsystem.md#private-program)
* [renderables](webglsystem.md#private-renderables)
* [scene](webglsystem.md#protected-optional-scene)
* [subscriberID](webglsystem.md#subscriberid)
* [FRAGMENT_SHADER](webglsystem.md#static-private-fragment_shader)
* [MESSAGE_DEREGISTER](webglsystem.md#static-message_deregister)
* [MESSAGE_LOAD_RENDERABLES](webglsystem.md#static-message_load_renderables)
* [MESSAGE_REGISTER](webglsystem.md#static-message_register)
* [MESSAGE_UPDATE](webglsystem.md#static-message_update)
* [VERTEX_SHADER](webglsystem.md#static-private-vertex_shader)

### Methods

* [Destroy](webglsystem.md#destroy)
* [GetSystemEntity](webglsystem.md#protected-getsystementity)
* [OnMessage](webglsystem.md#onmessage)
* [Update](webglsystem.md#protected-update)
* [createProgram](webglsystem.md#createprogram)
* [createShader](webglsystem.md#createshader)
* [render](webglsystem.md#private-render)
* [EVALUATOR](webglsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new WebGLSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `__namedParameters`: object): *[WebGLSystem](webglsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪ **gl**: *WebGL2RenderingContext*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: [], subscriberID: undefined, renderables: [] }

Name | Type |
------ | ------ |
`entities` | [SystemEntity](systementity.md)‹›[] |
`renderables` | [Renderable](renderable.md)‹›[] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[WebGLSystem](webglsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Private` gl

• **gl**: *WebGL2RenderingContext*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

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

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` `Private` FRAGMENT_SHADER

▪ **FRAGMENT_SHADER**: *"#version 300 es
        precision mediump float;

        uniform vec4 uColor;

        out vec4 outColor;

        void main() {
            outColor = uColor;
        }
    "* = `#version 300 es
        precision mediump float;

        uniform vec4 uColor;

        out vec4 outColor;

        void main() {
            outColor = uColor;
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

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
        }
    "* = `#version 300 es
        in vec2 aVertexPosition;

        uniform mat4 uViewMatrix;
        uniform mat4 uModelMatrix;
        uniform mat4 uProjectionMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * vec4(aVertexPosition, 0, 1);
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

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *[SystemEntity](systementity.md) | undefined*

*Inherited from [System](system.md).[GetSystemEntity](system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](systementity.md) | undefined*

The system entity if it exists, otherwise undefined

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

###  createProgram

▸ **createProgram**(`vertex`: WebGLShader, `fragment`: WebGLShader): *WebGLProgram*

**Parameters:**

Name | Type |
------ | ------ |
`vertex` | WebGLShader |
`fragment` | WebGLShader |

**Returns:** *WebGLProgram*

___

###  createShader

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
