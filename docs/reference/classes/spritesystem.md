
# Class: SpriteSystem

## Hierarchy

  ↳ [System](system.md)

  ↳ **SpriteSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](spritesystem.md#constructor)

### Properties

* [entities](spritesystem.md#protected-entities)
* [gl](spritesystem.md#private-gl)
* [messageBus](spritesystem.md#protected-messagebus)
* [program](spritesystem.md#private-program)
* [scene](spritesystem.md#protected-optional-scene)
* [subscriberID](spritesystem.md#subscriberid)
* [FRAGMENT_SHADER](spritesystem.md#static-private-fragment_shader)
* [MESSAGE_DEREGISTER](spritesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](spritesystem.md#static-message_register)
* [MESSAGE_UPDATE](spritesystem.md#static-message_update)
* [VERTEX_SHADER](spritesystem.md#static-private-vertex_shader)

### Methods

* [Destroy](spritesystem.md#destroy)
* [GetSystemEntity](spritesystem.md#protected-getsystementity)
* [OnMessage](spritesystem.md#onmessage)
* [Update](spritesystem.md#protected-update)
* [createProgram](spritesystem.md#createprogram)
* [createShader](spritesystem.md#createshader)
* [renderSprites](spritesystem.md#private-rendersprites)
* [EVALUATOR](spritesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new SpriteSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [Scene](scene.md)): *[SpriteSystem](spritesystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) |
`gl` | WebGL2RenderingContext |
`scene?` | [Scene](scene.md) |

**Returns:** *[SpriteSystem](spritesystem.md)*

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

▸ **createProgram**(`gl`: WebGL2RenderingContext, `vertex`: WebGLShader, `fragment`: WebGLShader): *WebGLProgram*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | WebGL2RenderingContext |
`vertex` | WebGLShader |
`fragment` | WebGLShader |

**Returns:** *WebGLProgram*

___

###  createShader

▸ **createShader**(`gl`: WebGL2RenderingContext, `type`: number, `source`: string): *WebGLShader*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | WebGL2RenderingContext |
`type` | number |
`source` | string |

**Returns:** *WebGLShader*

___

### `Private` renderSprites

▸ **renderSprites**(`gl`: WebGL2RenderingContext, `entities`: [SystemEntity](systementity.md)[], `alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | WebGL2RenderingContext |
`entities` | [SystemEntity](systementity.md)[] |
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
