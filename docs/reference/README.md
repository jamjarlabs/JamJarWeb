
# jamjar

## Index

### Classes

* [Camera](classes/camera.md)
* [Collider](classes/collider.md)
* [Collision](classes/collision.md)
* [CollisionSystem](classes/collisionsystem.md)
* [Color](classes/color.md)
* [Component](classes/component.md)
* [ComponentManager](classes/componentmanager.md)
* [Ellipse](classes/ellipse.md)
* [Entity](classes/entity.md)
* [EntityManager](classes/entitymanager.md)
* [Fake](classes/fake.md)
* [FakeComponent](classes/fakecomponent.md)
* [FakeEntity](classes/fakeentity.md)
* [FakeGame](classes/fakegame.md)
* [FakeMessageBus](classes/fakemessagebus.md)
* [FakeScene](classes/fakescene.md)
* [FakeSubscriber](classes/fakesubscriber.md)
* [GJKSimplex](classes/gjksimplex.md)
* [Game](classes/game.md)
* [InterpolationSystem](classes/interpolationsystem.md)
* [KeyboardSystem](classes/keyboardsystem.md)
* [Matrix3D](classes/matrix3d.md)
* [Matrix4D](classes/matrix4d.md)
* [Message](classes/message.md)
* [MessageBus](classes/messagebus.md)
* [Motion](classes/motion.md)
* [MotionSystem](classes/motionsystem.md)
* [Polygon](classes/polygon.md)
* [Reactor](classes/reactor.md)
* [Renderable](classes/renderable.md)
* [Scene](classes/scene.md)
* [Sprite](classes/sprite.md)
* [SpriteSystem](classes/spritesystem.md)
* [Subscriber](classes/subscriber.md)
* [System](classes/system.md)
* [SystemEntity](classes/systementity.md)
* [TestGame](classes/testgame.md)
* [TestScene](classes/testscene.md)
* [TestSystem](classes/testsystem.md)
* [Transform](classes/transform.md)
* [Vector](classes/vector.md)
* [WebGLSystem](classes/webglsystem.md)

### Interfaces

* [IEntity](interfaces/ientity.md)
* [IGame](interfaces/igame.md)
* [IMessage](interfaces/imessage.md)
* [IMessageBus](interfaces/imessagebus.md)
* [IScene](interfaces/iscene.md)
* [IShape](interfaces/ishape.md)
* [ISubscriber](interfaces/isubscriber.md)

### Type aliases

* [Evaluator](README.md#evaluator)
* [Matrix3DValues](README.md#matrix3dvalues)
* [Matrix4DValues](README.md#matrix4dvalues)

### Functions

* [Calculate](README.md#calculate)
* [support](README.md#support)

## Type aliases

###  Evaluator

Ƭ **Evaluator**: *function*

#### Type declaration:

▸ (`entity`: [IEntity](interfaces/ientity.md), `components`: [Component](classes/component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](interfaces/ientity.md) |
`components` | [Component](classes/component.md)[] |

___

###  Matrix3DValues

Ƭ **Matrix3DValues**: *[[number, number, number], [number, number, number], [number, number, number]]*

Matrix3DValues is shorthand for the 3x3 tuple of the matrix values

___

###  Matrix4DValues

Ƭ **Matrix4DValues**: *[[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]]*

Matrix4DValues is shorthand for the 4x4 tuple of the matrix values

## Functions

###  Calculate

▸ **Calculate**(`a`: [SystemEntity](classes/systementity.md), `b`: [SystemEntity](classes/systementity.md)): *[Collision](classes/collision.md) | undefined*

Calculate determines if a collision/intersection exists between two entities

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [SystemEntity](classes/systementity.md) | First entity |
`b` | [SystemEntity](classes/systementity.md) | Second entity |

**Returns:** *[Collision](classes/collision.md) | undefined*

A collision if it has been detected; if not undefined

___

###  support

▸ **support**(`a`: [IShape](interfaces/ishape.md), `b`: [IShape](interfaces/ishape.md), `direction`: [Vector](classes/vector.md)): *[Vector](classes/vector.md)*

support calculates a support point in a direction for two shapes

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`a` | [IShape](interfaces/ishape.md) | First shape |
`b` | [IShape](interfaces/ishape.md) | Second shape |
`direction` | [Vector](classes/vector.md) | The direction to calculate the support point in |

**Returns:** *[Vector](classes/vector.md)*

The support point; returns undefined if invalid shapes provided
