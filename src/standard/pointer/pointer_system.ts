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

/**
 * PointerSystem handles Pointer (mouse, touch etc.) input events, converting them into JamJar ECS messages.
 */
class PointerSystem extends System {
    // Only entities with camera and transform components
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Camera.KEY, Transform.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private inputElement: HTMLElement;

    private pointers: [string, Pointer][];

    constructor(messageBus: IMessageBus, inputElement: HTMLElement,
        { scene, entities, subscriberID, pointers }:
            { scene: IScene | undefined; entities: Map<number, SystemEntity>; subscriberID: number | undefined; pointers: [string, Pointer][] } =
            { scene: undefined, entities: new Map(), subscriberID: undefined, pointers: [] }) {
        super(messageBus, { scene, evaluator: PointerSystem.EVALUATOR, entities, subscriberID });
        this.inputElement = inputElement;
        this.pointers = pointers;
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

    /**
     * When a Pointer Event occurs; used to store pointer events to be dispatched at the next update.
     * Adds in useful information, such as pointer position within camera bounds, pointer world position
     * for each camera and if the pointer is within a camera's bounds.
     * @param {PointerEvent} event Pointer Event
     */
    protected pointerEvent(event: PointerEvent): void {
        // Get HTML element dimensions, calculate relative position within element
        const rect = this.inputElement.getBoundingClientRect();
        const elementPosition = new Vector(
            ((event.clientX - rect.left) - (rect.width / 2)) / rect.width,
            -((event.clientY - rect.top) - (rect.height / 2)) / rect.height
        );

        const pointerCameraInfos: PointerCameraInfo[] = [];

        // Calculate relevant information for each camerea
        for (const entity of this.entities.values()) {
            const camera = entity.Get(Camera.KEY) as Camera;
            const transform = entity.Get(Transform.KEY) as Transform;

            const viewportScale = camera.viewportScale;
            const viewportPosition = camera.viewportPosition;
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
                cameraWorldPosition.x + virtualScale.x * cameraPosition.x,
                cameraWorldPosition.y + virtualScale.y * cameraPosition.y
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