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
            component => component.key == type
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
    private pointers: [string, Pointer][];
    /**
     * Position of the pointer if it is locked, used with the PointerAPI to
     * keep track of pointer position using movementX and movementY.
     * If it is undefined there is no pointer lock.
     */
    private lockedPointerPosition: Vector | undefined;

    constructor(messageBus: IMessageBus, inputElement: HTMLElement,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number,
        pointers: [string, Pointer][] = [],
        isFullscreen = false,
        lockedPointerPosition?: Vector) {
        super(messageBus, scene, PointerSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, [FullscreenSystem.MESSAGE_ENTER_FULLSCREEN, FullscreenSystem.MESSAGE_EXIT_FULLSCREEN]);
        this.inputElement = inputElement;
        this.pointers = pointers;
        this.isFullscreen = isFullscreen;
        this.lockedPointerPosition = lockedPointerPosition;
        // Set up listeners
        this.inputElement.addEventListener("pointermove", this.pointerEvent.bind(this));
        this.inputElement.addEventListener("pointerdown", this.pointerEvent.bind(this));
        this.inputElement.addEventListener("pointerup", this.pointerEvent.bind(this));
    }

    protected Update(): void {
        // Publish all stored pointers, then clear pointer queue
        for (let i = 0; i < this.pointers.length; i++) {
            const pointer = this.pointers[i];
            this.messageBus.Publish(new Message<Pointer>(pointer[0], pointer[1]));
        }
        this.pointers = [];
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

    /**
     * When a Pointer Event occurs; used to store pointer events to be dispatched at the next update.
     * Adds in useful information, such as pointer position within camera bounds, pointer world position
     * for each camera and if the pointer is within a camera's bounds.
     * @param {PointerEvent} event Pointer Event
     */
    protected pointerEvent(event: PointerEvent): void {
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
                this.lockedPointerPosition = this.lockedPointerPosition.Add(new Vector(event.movementX, event.movementY));
                pointerX = this.lockedPointerPosition.x;
                pointerY = this.lockedPointerPosition.y;
            } else {
                this.lockedPointerPosition = new Vector(event.clientX, event.clientY);
            }
        }
        const elementPosition = new Vector(
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

            const viewportHalfWidth = viewportScale.x / 2;
            const viewportHalfHeight = viewportScale.y / 2;

            const cameraWorldPosition = transform.position;

            const withinBounds = elementPosition.x < viewportPosition.x + viewportHalfWidth &&
                elementPosition.x > viewportPosition.x - viewportHalfWidth &&
                elementPosition.y < viewportPosition.y + viewportHalfHeight &&
                elementPosition.y > viewportPosition.y - viewportHalfHeight;

            // Position relative to camera viewport
            const cameraPosition = new Vector(
                (elementPosition.x - viewportPosition.x) / viewportScale.x,
                (elementPosition.y - viewportPosition.y) / viewportScale.y
            );

            // Position in the world according to the camera
            const worldPosition = new Vector(
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

        this.pointers.push([event.type, new Pointer(event, elementPosition, pointerCameraInfos)]);

    }
}

export default PointerSystem;