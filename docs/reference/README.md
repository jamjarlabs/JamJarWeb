
# jamjar

## Index

### Enumerations

* [TextAlignment](enums/textalignment.md)

### Classes

* [AlwaysCollideAlgorithm](classes/alwayscollidealgorithm.md)
* [Camera](classes/camera.md)
* [Collider](classes/collider.md)
* [Collision](classes/collision.md)
* [CollisionInfo](classes/collisioninfo.md)
* [CollisionSystem](classes/collisionsystem.md)
* [Color](classes/color.md)
* [Component](classes/component.md)
* [ComponentManager](classes/componentmanager.md)
* [DefaultFragmentShader](classes/defaultfragmentshader.md)
* [DefaultTextFragmentShader](classes/defaulttextfragmentshader.md)
* [DefaultVertexShader](classes/defaultvertexshader.md)
* [Ellipse](classes/ellipse.md)
* [Entity](classes/entity.md)
* [EntityManager](classes/entitymanager.md)
* [Fake](classes/fake.md)
* [FakeComponent](classes/fakecomponent.md)
* [FakeEntity](classes/fakeentity.md)
* [FakeMessageBus](classes/fakemessagebus.md)
* [FakeSDFGenerator](classes/fakesdfgenerator.md)
* [FakeScene](classes/fakescene.md)
* [FakeSubscriber](classes/fakesubscriber.md)
* [FakeWebGL2RenderingContext](classes/fakewebgl2renderingcontext.md)
* [FontAsset](classes/fontasset.md)
* [FontMapping](classes/fontmapping.md)
* [FrustumCuller](classes/frustumculler.md)
* [FullscreenSystem](classes/fullscreensystem.md)
* [GJKAlgorithm](classes/gjkalgorithm.md)
* [GLSLContext](classes/glslcontext.md)
* [GLSLShader](classes/glslshader.md)
* [Game](classes/game.md)
* [HTTPImageSystem](classes/httpimagesystem.md)
* [ImageAsset](classes/imageasset.md)
* [InterpolationSystem](classes/interpolationsystem.md)
* [KeyboardSystem](classes/keyboardsystem.md)
* [Material](classes/material.md)
* [Matrix3D](classes/matrix3d.md)
* [Matrix4D](classes/matrix4d.md)
* [Message](classes/message.md)
* [MessageBus](classes/messagebus.md)
* [Motion](classes/motion.md)
* [MotionSystem](classes/motionsystem.md)
* [NeverCollideAlgorithm](classes/nevercollidealgorithm.md)
* [Pointer](classes/pointer.md)
* [PointerCameraInfo](classes/pointercamerainfo.md)
* [PointerSystem](classes/pointersystem.md)
* [Polygon](classes/polygon.md)
* [Reactor](classes/reactor.md)
* [RenderSystem](classes/rendersystem.md)
* [Renderable](classes/renderable.md)
* [Scene](classes/scene.md)
* [ShaderAsset](classes/shaderasset.md)
* [Sprite](classes/sprite.md)
* [SpriteSystem](classes/spritesystem.md)
* [Subscriber](classes/subscriber.md)
* [System](classes/system.md)
* [SystemEntity](classes/systementity.md)
* [TestCollisionAlgorithm](classes/testcollisionalgorithm.md)
* [TestFullscreenSystem](classes/testfullscreensystem.md)
* [TestGame](classes/testgame.md)
* [TestKeyboardSystem](classes/testkeyboardsystem.md)
* [TestPointerSystem](classes/testpointersystem.md)
* [TestRenderSystem](classes/testrendersystem.md)
* [TestScene](classes/testscene.md)
* [TestShader](classes/testshader.md)
* [TestSystem](classes/testsystem.md)
* [Text](classes/text.md)
* [TextRender](classes/textrender.md)
* [TextSystem](classes/textsystem.md)
* [Texture](classes/texture.md)
* [Transform](classes/transform.md)
* [UI](classes/ui.md)
* [Vector](classes/vector.md)
* [WebGLSystem](classes/webglsystem.md)

### Interfaces

* [ICollisionAlgorithm](interfaces/icollisionalgorithm.md)
* [IEntity](interfaces/ientity.md)
* [IFrustumCuller](interfaces/ifrustumculler.md)
* [IGame](interfaces/igame.md)
* [IMessage](interfaces/imessage.md)
* [IMessageBus](interfaces/imessagebus.md)
* [IRenderable](interfaces/irenderable.md)
* [IScene](interfaces/iscene.md)
* [IShader](interfaces/ishader.md)
* [IShape](interfaces/ishape.md)
* [ISubscriber](interfaces/isubscriber.md)

### Type aliases

* [Evaluator](README.md#evaluator)
* [Matrix3DValues](README.md#matrix3dvalues)
* [Matrix4DValues](README.md#matrix4dvalues)

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
