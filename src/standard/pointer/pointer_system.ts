/*
Copyright 2020 JamJar Authors

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

import System from "../../system/system";
import IMessageBus from "../../message/imessage_bus";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import Message from "../../message/message";
import Pointer from "./pointer";
import Camera from "../camera/camera";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Vector from "../../geometry/vector";
import PointerCameraInfo from "./pointer_camera_info";
import Transform from "../transform/transform";
import FullscreenSystem from "../fullscreen/fullscreen_system";
import IMessage from "../../message/imessage";

/**
 * PointerSystem handles Pointer (mouse, touch etc.) input events, converting them into JamJar ECS messages.
 */
class PointerSystem extends System {
    /**
     * Ensure has Camera and Transform
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Camera.KEY, Transform.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    /**
     * The HTML element to get pointer events on.
     */
    private inputElement: HTMLElement;
    /**
     * If the game is in fullscreen mode or not.
     * true = in fullscreen, false = not in fullscreen
     */
    private isFullscreen: boolean;
    /**
     * Position of the pointer if it is locked, used with the PointerAPI to keep track of pointer position using
     * movementX and movementY.
     * If it is undefined there is no pointer lock.
     */
    private lockedPointerPosition: Vector | undefined;
    /**
     * Last wheel event captured, stored here to throttle a potentially frequently firing event.
     */
    private lastWheelEvent: WheelEvent | undefined;
    /**
     * Last pointer move event captured, stored here to throttle a potentially frequently firing event.
     */
    private lastMoveEvent: PointerEvent | undefined;
    /**
     * The pointers published in the last update.
     * Used to free up objects back into pools.
     */
    private lastPublishedPointers: Pointer[];
    /**
     * The pointer events recieved since the last update that should be published.
     */
    private pointerEventsToPublish: PointerEvent[];

    constructor(messageBus: IMessageBus, inputElement: HTMLElement,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
        isFullscreen = false,
        lockedPointerPosition?: Vector,
        lastWheelEvent?: WheelEvent,
        lastMoveEvent?: PointerEvent,
        pointersToPublish: PointerEvent[] = [],
        lastPublishedPointers: Pointer[] = []) {
        super(messageBus, scene, PointerSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, [FullscreenSystem.MESSAGE_ENTER_FULLSCREEN, FullscreenSystem.MESSAGE_EXIT_FULLSCREEN]);
        this.inputElement = inputElement;
        this.pointerEventsToPublish = pointersToPublish;
        this.isFullscreen = isFullscreen;
        this.lockedPointerPosition = lockedPointerPosition;
        this.lastWheelEvent = lastWheelEvent;
        this.lastMoveEvent = lastMoveEvent;
        this.lastPublishedPointers = lastPublishedPointers;
        // Set up listeners
        this.inputElement.addEventListener("pointermove", this.moveEvent.bind(this));
        this.inputElement.addEventListener("pointerdown", this.pointerEvent.bind(this));
        this.inputElement.addEventListener("pointerup", this.pointerEvent.bind(this));
        this.inputElement.addEventListener("wheel", this.wheelEvent.bind(this));
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case FullscreenSystem.MESSAGE_ENTER_FULLSCREEN: {
                this.isFullscreen = true;
                break;
            }
            case FullscreenSystem.MESSAGE_EXIT_FULLSCREEN: {
                this.isFullscreen = false;
                this.lockedPointerPosition = undefined;
                break;
            }
        }
    }

    public Update(): void {
        // If move event waiting, process it before publishing it
        if (this.lastMoveEvent !== undefined) {
            this.pointerEventsToPublish.push(this.lastMoveEvent);
            this.lastMoveEvent = undefined;
        }
        // If wheel event waiting, publish it - in a throttled way
        if (this.lastWheelEvent !== undefined) {
            this.messageBus.Publish(new Message<WheelEvent>("wheel", this.lastWheelEvent));
            this.lastWheelEvent = undefined;
        }
        // Free any previously published pointers
        for (const freePointer of this.lastPublishedPointers) {
            freePointer.Free();
        }
        this.lastPublishedPointers = [];
        // Publish any stored pointer events
        for (const pointerEvent of this.pointerEventsToPublish) {
            const pointer = this.processPointerEvent(pointerEvent);
            this.messageBus.Publish(new Message<Pointer>(pointer.event.type, pointer));
            this.lastPublishedPointers.push(pointer);
        }
        this.pointerEventsToPublish = [];
    }

    /**
     * When a Wheel Event occurs; used to store the last wheel event to be
     * dispatched at the next update. This is to throttle this event which can
     * be fired many times.
     * @param {WheelEvent} event Fired wheel event
     */
    protected wheelEvent(event: WheelEvent): void {
        this.lastWheelEvent = event;
    }

    protected moveEvent(event: PointerEvent): void {
        this.lastMoveEvent = event;
    }

    protected pointerEvent(event: PointerEvent): void {
        this.pointerEventsToPublish.push(event);
    }

    /**
     * When a Pointer Event occurs; dispatches the pointer event with extra info
     * through the JamJar messaging system as a Pointer.
     * Adds in useful information, such as pointer position within camera
     * bounds, pointer world position for each camera and if the pointer is
     * within a camera's bounds.
     * @param {PointerEvent} event Pointer Event
     */
    private processPointerEvent(event: PointerEvent): Pointer {
        // Get HTML element dimensions, calculate relative position within element
        const rect = this.inputElement.getBoundingClientRect();
        let pointerX = event.clientX;
        let pointerY = event.clientY;

        if (this.isFullscreen) {
            // If fullscreen, position calculated differently, using movementX and movementY
            // https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
            // movementX and movementY are the change in pointer position from the last event
            // lockedPointerPosition is undefined when not fullscreen, when fullscreen it is used to
            // keep track of the last pointer position
            if (this.lockedPointerPosition !== undefined) {
                this.lockedPointerPosition.x += event.movementX;
                this.lockedPointerPosition.y += event.movementY;
                pointerX = this.lockedPointerPosition.x;
                pointerY = this.lockedPointerPosition.y;
            } else {
                this.lockedPointerPosition = Vector.New(event.clientX, event.clientY);
            }
        }

        const elementPosition = Vector.New(
            ((pointerX - rect.left) - (rect.width / 2)) / (rect.width / 2),
            -((pointerY - rect.top) - (rect.height / 2)) / (rect.height / 2)
        );

        const pointerCameraInfos: PointerCameraInfo[] = [];

        // Calculate relevant information for each camerea
        for (const entity of this.entities.values()) {
            const camera = entity.Get(Camera.KEY) as Camera;
            const transform = entity.Get(Transform.KEY) as Transform;

            const viewportScale = camera.viewportScale;
            const viewportPosition = camera.viewportPosition.Scale(0.5);
            const virtualScale = camera.virtualScale;

            const cameraWorldPosition = transform.position;

            const withinBounds = elementPosition.x < viewportPosition.x + viewportScale.x &&
                elementPosition.x > viewportPosition.x - viewportScale.x &&
                elementPosition.y < viewportPosition.y + viewportScale.y &&
                elementPosition.y > viewportPosition.y - viewportScale.y;

            // Position relative to camera viewport
            const cameraPosition = Vector.New(
                (elementPosition.x - viewportPosition.x) / viewportScale.x,
                (elementPosition.y - viewportPosition.y) / viewportScale.y
            );

            // Position in the world according to the camera
            const worldPosition = Vector.New(
                cameraWorldPosition.x + virtualScale.x * (cameraPosition.x / 2),
                cameraWorldPosition.y + virtualScale.y * (cameraPosition.y / 2)
            );

            pointerCameraInfos.push(new PointerCameraInfo(
                entity.entity,
                cameraPosition,
                worldPosition,
                withinBounds
            ));
        }
        return new Pointer(event, elementPosition, pointerCameraInfos);
    }
}

export default PointerSystem;
