/*
Copyright 2021 JamJar Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import Game from "./game";
import IGame from "./igame";
import AudioAsset from "./audio/audio_asset";
import AudioRequest from "./audio/audio_request";
import IAudioOptions from "./audio/iaudio_options";
import Component from "./component/component";
import ComponentManager from "./component/component_manager";
import Entity from "./entity/entity";
import EntityManager from "./entity/entity_manager";
import IEntity from "./entity/ientity";
import FakeAudioBufferSourceNode from "./fake/audio_buffer_source_node";
import FakeAudioContext from "./fake/audio_context";
import FakeComponent from "./fake/component";
import FakeEntity from "./fake/entity";
import Fake from "./fake/fake";
import FakeGainNode from "./fake/gain_node";
import FakeMessageBus from "./fake/message_bus";
import Reactor from "./fake/reactor";
import FakeResponse from "./fake/response";
import FakeScene from "./fake/scene";
import FakeSubscriber from "./fake/subscriber";
import FakeWebGL2RenderingContext from "./fake/webgl2_rendering_context";
import Matrix3D from "./geometry/matrix_3d";
import Matrix4D from "./geometry/matrix_4d";
import Vector from "./geometry/vector";
import IMessage from "./message/imessage";
import IMessageBus from "./message/imessage_bus";
import ISubscriber from "./message/isubscriber";
import Message from "./message/message";
import MessageBus from "./message/message_bus";
import Subscriber from "./message/subscriber";
import FontAsset from "./rendering/font/font_asset";
import FontRequest from "./rendering/font/font_request";
import IFontOptions from "./rendering/font/ifont_options";
import ImageAsset from "./rendering/image/image_asset";
import ImageRequest from "./rendering/image/image_request";
import IMaterialOptions from "./rendering/material/imaterial_options";
import Material from "./rendering/material/material";
import IShader from "./rendering/shader/ishader";
import ShaderAsset from "./rendering/shader/shader_asset";
import ITextureOptions from "./rendering/texture/itexture_options";
import Texture from "./rendering/texture/texture";
import TextureFiltering from "./rendering/texture/texture_filtering";
import TextureWrapping from "./rendering/texture/texture_wrapping";
import Color from "./rendering/color";
import DrawMode from "./rendering/draw_mode";
import IRenderable from "./rendering/irenderable";
import Renderable from "./rendering/renderable";
import IScene from "./scene/iscene";
import Scene from "./scene/scene";
import ScriptAsset from "./scripting/script_asset";
import ScriptRequest from "./scripting/script_request";
import AABB from "./shape/aabb";
import Ellipse from "./shape/ellipse";
import IShape from "./shape/ishape";
import Polygon from "./shape/polygon";
import Evaluator from "./system/evaluator";
import System from "./system/system";
import MapSystem from "./system/map_system";
import SystemEntity from "./system/system_entity";
import AudioSource from "./standard/audio_source/audio_source";
import AudioSourceSystem from "./standard/audio_source/audio_source_system";
import Camera from "./standard/camera/camera";
import AABBAlgorithm from "./standard/collision/algorithm/aabb_algorithm";
import AllCollideAlgorithm from "./standard/collision/algorithm/all_collide_algorithm";
import Collider from "./standard/collision/collider";
import Collision from "./standard/collision/collision";
import CollisionInfo from "./standard/collision/collision_info";
import CollisionSystem from "./standard/collision/collision_system";
import GJKAlgorithm from "./standard/collision/algorithm/gjk_algorithm";
import ICollisionAlgorithm from "./standard/collision/algorithm/icollision_algorithm";
import NoneCollideAlgorithm from "./standard/collision/algorithm/none_collide_algorithm";
import FrustumCuller from "./standard/frustum_culler/frustum_culler";
import IFrustumCuller from "./standard/frustum_culler/ifrustum_culler";
import FullscreenSystem from "./standard/fullscreen/fullscreen_system";
import GLSLContext from "./standard/glsl/glsl_context";
import GLSLShader from "./standard/glsl/glsl_shader";
import HTTPAudioSystem from "./standard/http_audio/http_audio_system";
import HTTPImageSystem from "./standard/http_image/http_image_system";
import HTTPScriptSystem from "./standard/http_script/http_script_system";
import InterpolationSystem from "./standard/interpolation/interpolation_system";
import KeyboardSystem from "./standard/keyboard/keyboard_system";
import MotionSystem from "./standard/motion/motion_system";
import Motion from "./standard/motion/motion";
import Pointer from "./standard/pointer/pointer";
import PointerCameraInfo from "./standard/pointer/pointer_camera_info";
import PointerSystem from "./standard/pointer/pointer_system";
import Primitive from "./standard/primitive/primitive";
import PrimitiveSystem from "./standard/primitive/primitive_system";
import RenderSystem from "./standard/render/render_system";
import Script from "./standard/script_trigger/script";
import ScriptTrigger from "./standard/script_trigger/script_trigger";
import ScriptTriggerRequest from "./standard/script_trigger/script_trigger_request";
import ScriptTriggerSystem from "./standard/script_trigger/script_trigger_system";
import ScriptingEngineSystem from "./standard/scripting_engine/scripting_engine_system";
import ScriptingReference from "./standard/scripting_engine/scripting_reference";
import Sprite from "./standard/sprite/sprite";
import SpriteSystem from "./standard/sprite/sprite_system";
import SpriteAnimation from "./standard/sprite_animator/sprite_animation";
import SpriteAnimator from "./standard/sprite_animator/sprite_animator";
import SpriteAnimatorSystem from "./standard/sprite_animator/sprite_animator_system";
import SpriteKeyFrame from "./standard/sprite_animator/sprite_key_frame";
import FontMapping from "./standard/text/font_mapping";
import Text from "./standard/text/text";
import TextAlignment from "./standard/text/text_alignment";
import TextRender from "./standard/text/text_render";
import TextSystem from "./standard/text/text_system";
import Transform from "./standard/transform/transform";
import UI from "./standard/ui/ui";
import DefaultPrimitiveFragmentShader from "./standard/webgl/default_primitive_fragment_shader";
import DefaultPrimitiveVertexShader from "./standard/webgl/default_primitive_vertex_shader";
import DefaultTextFragmentShader from "./standard/webgl/default_text_fragment_shader";
import DefaultTextureFragmentShader from "./standard/webgl/default_texture_fragment_shader";
import DefaultTextureVertexShader from "./standard/webgl/default_texture_vertex_shader";
import WebGLSystem from "./standard/webgl/webgl_system";
import Pooled from "./pooling/pooled";
import IPoolable from "./pooling/ipoolable";
import IFreeable from "./pooling/ifreeable";
import ArraySystem from "./system/array_system";
import StatefulSystem from "./system/stateful_system";
import IJamJarGlobals from "./jamjar_globals";
import CanvasResizeSystem from "./standard/canvas_resize/canvas_resize_system";
import CanvasResize from "./standard/canvas_resize/canvas_resize";
import FakeResizeObserver from "./fake/fake_resize_observer";
import FakeScreen from "./fake/fake_screen";

export {
    // Core
    Game,
    IGame,
    AudioAsset,
    AudioRequest,
    IAudioOptions,
    Component,
    ComponentManager,
    Entity,
    EntityManager,
    IEntity,
    Matrix3D,
    Matrix4D,
    Vector,
    IMessage,
    IMessageBus,
    ISubscriber,
    Message,
    MessageBus,
    Subscriber,
    FontAsset,
    FontRequest,
    IFontOptions,
    ImageAsset,
    ImageRequest,
    IMaterialOptions,
    Material,
    IShader,
    ShaderAsset,
    ITextureOptions,
    Texture,
    TextureFiltering,
    TextureWrapping,
    Color,
    DrawMode,
    IRenderable,
    Renderable,
    IScene,
    Scene,
    ScriptAsset,
    ScriptRequest,
    AABB,
    Ellipse,
    IShape,
    Polygon,
    Evaluator,
    System,
    MapSystem,
    ArraySystem,
    StatefulSystem,
    SystemEntity,
    // Pooling
    Pooled,
    IPoolable,
    IFreeable,
    // Fake
    FakeAudioBufferSourceNode,
    FakeAudioContext,
    FakeComponent,
    FakeEntity,
    Fake,
    FakeGainNode,
    FakeMessageBus,
    Reactor,
    FakeResponse,
    FakeScene,
    FakeSubscriber,
    FakeWebGL2RenderingContext,
    FakeResizeObserver,
    FakeScreen,
    // Standard Lib
    // Audio Source
    AudioSource,
    AudioSourceSystem,
    // Camera
    Camera,
    // Collision
    Collider,
    Collision,
    CollisionInfo,
    CollisionSystem,
    AABBAlgorithm,
    AllCollideAlgorithm,
    GJKAlgorithm,
    ICollisionAlgorithm,
    NoneCollideAlgorithm,
    // Frustum Culler
    FrustumCuller,
    IFrustumCuller,
    // Fullscreen
    FullscreenSystem,
    // GLSL
    GLSLContext,
    GLSLShader,
    // HTTP Audio
    HTTPAudioSystem,
    // HTTP Image
    HTTPImageSystem,
    // HTTP Script
    HTTPScriptSystem,
    // Interpolation
    InterpolationSystem,
    // Keyboard
    KeyboardSystem,
    // Motion
    Motion,
    MotionSystem,
    // Pointer
    Pointer,
    PointerCameraInfo,
    PointerSystem,
    // Primitive
    Primitive,
    PrimitiveSystem,
    // Render
    RenderSystem,
    // Script Trigger
    Script,
    ScriptTrigger,
    ScriptTriggerRequest,
    ScriptTriggerSystem,
    // Scripting Engine
    ScriptingEngineSystem,
    ScriptingReference,
    // Sprite
    Sprite,
    SpriteSystem,
    // Sprite Animator
    SpriteAnimation,
    SpriteAnimator,
    SpriteAnimatorSystem,
    SpriteKeyFrame,
    // Text
    FontMapping,
    Text,
    TextAlignment,
    TextRender,
    TextSystem,
    // Transform
    Transform,
    // UI
    UI,
    // WebGL
    DefaultPrimitiveFragmentShader,
    DefaultPrimitiveVertexShader,
    DefaultTextFragmentShader,
    DefaultTextureFragmentShader,
    DefaultTextureVertexShader,
    WebGLSystem,
    // Canvas resizing
    CanvasResizeSystem,
    CanvasResize,
};

declare global {
    // Window is a globally defined interface, it does not conform to the I
    // prefix naming scheme.
    interface Window {
        JamJar: IJamJarGlobals;
    }
}
