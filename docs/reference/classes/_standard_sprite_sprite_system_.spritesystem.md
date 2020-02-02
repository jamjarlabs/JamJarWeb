
# Class: SpriteSystem

## Hierarchy

  ↳ [System](_system_system_.system.md)

  ↳ **SpriteSystem**

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)

## Index

### Constructors

* [constructor](_standard_sprite_sprite_system_.spritesystem.md#constructor)

### Properties

* [entities](_standard_sprite_sprite_system_.spritesystem.md#protected-entities)
* [gl](_standard_sprite_sprite_system_.spritesystem.md#private-gl)
* [messageBus](_standard_sprite_sprite_system_.spritesystem.md#protected-messagebus)
* [program](_standard_sprite_sprite_system_.spritesystem.md#private-program)
* [scene](_standard_sprite_sprite_system_.spritesystem.md#protected-optional-scene)
* [subscriberID](_standard_sprite_sprite_system_.spritesystem.md#subscriberid)
* [FRAGMENT_SHADER](_standard_sprite_sprite_system_.spritesystem.md#static-private-fragment_shader)
* [MESSAGE_DEREGISTER](_standard_sprite_sprite_system_.spritesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](_standard_sprite_sprite_system_.spritesystem.md#static-message_register)
* [MESSAGE_UPDATE](_standard_sprite_sprite_system_.spritesystem.md#static-message_update)
* [VERTEX_SHADER](_standard_sprite_sprite_system_.spritesystem.md#static-private-vertex_shader)

### Methods

* [Destroy](_standard_sprite_sprite_system_.spritesystem.md#destroy)
* [GetSystemEntity](_standard_sprite_sprite_system_.spritesystem.md#protected-getsystementity)
* [OnMessage](_standard_sprite_sprite_system_.spritesystem.md#onmessage)
* [Update](_standard_sprite_sprite_system_.spritesystem.md#protected-update)
* [createProgram](_standard_sprite_sprite_system_.spritesystem.md#createprogram)
* [createShader](_standard_sprite_sprite_system_.spritesystem.md#createshader)
* [renderSprites](_standard_sprite_sprite_system_.spritesystem.md#private-rendersprites)
* [EVALUATOR](_standard_sprite_sprite_system_.spritesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new SpriteSystem**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `gl`: WebGL2RenderingContext, `scene?`: [Scene](_scene_scene_.scene.md)): *[SpriteSystem](_standard_sprite_sprite_system_.spritesystem.md)*

*Overrides [System](_system_system_.system.md).[constructor](_system_system_.system.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) |
`gl` | WebGL2RenderingContext |
`scene?` | [Scene](_scene_scene_.scene.md) |

**Returns:** *[SpriteSystem](_standard_sprite_sprite_system_.spritesystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](_system_system_entity_.systementity.md)[]*

*Inherited from [System](_system_system_.system.md).[entities](_system_system_.system.md#protected-entities)*

___

### `Private` gl

• **gl**: *WebGL2RenderingContext*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

*Inherited from [System](_system_system_.system.md).[messageBus](_system_system_.system.md#protected-messagebus)*

___

### `Private` program

• **program**: *WebGLProgram | null*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/_scene_iscene_.iscene.md)*

*Inherited from [System](_system_system_.system.md).[scene](_system_system_.system.md#protected-optional-scene)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

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

*Inherited from [System](_system_system_.system.md).[MESSAGE_DEREGISTER](_system_system_.system.md#static-message_deregister)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](_system_system_.system.md).[MESSAGE_REGISTER](_system_system_.system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](_system_system_.system.md).[MESSAGE_UPDATE](_system_system_.system.md#static-message_update)*

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

*Inherited from [System](_system_system_.system.md).[Destroy](_system_system_.system.md#destroy)*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

*Inherited from [System](_system_system_.system.md).[GetSystemEntity](_system_system_.system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](_system_system_entity_.systementity.md) | undefined*

The system entity if it exists, otherwise undefined

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Overrides [System](_system_system_.system.md).[OnMessage](_system_system_.system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](_system_system_.system.md).[Update](_system_system_.system.md#protected-update)*

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

▸ **renderSprites**(`gl`: WebGL2RenderingContext, `entities`: [SystemEntity](_system_system_entity_.systementity.md)[], `alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`gl` | WebGL2RenderingContext |
`entities` | [SystemEntity](_system_system_entity_.systementity.md)[] |
`alpha` | number |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md), `components`: [Component](_component_component_.component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |
`components` | [Component](_component_component_.component.md)[] |

**Returns:** *boolean*
