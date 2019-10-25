/*
Copyright 2019 JamJar Authors

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

import System from "../system/system";
import MessageBus from "../message/message_bus";
import Scene from "../scene/scene";
import IMessage from "../message/imessage";
import Camera from "./camera";
import Entity from "../entity/entity";
import Component from "../component/component";
import SystemEntity from "../system/system_entity";
import Vector from "../geometry/vector";

class CameraSystem extends System {

    public static readonly MESSAGE_PREPARE_CAMERAS = "canvas_system_prepare_cameras"

    private static readonly EVALUATOR = (entity: Entity, components: Component[]): boolean => {
        return [Camera.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    private gl: WebGL2RenderingContext;

    constructor(messageBus: MessageBus, gl: WebGL2RenderingContext, scene?: Scene) {
        super(messageBus, { evaluator: CameraSystem.EVALUATOR, scene: scene });
        this.gl = gl;
        this.messageBus.Subscribe(this, CameraSystem.MESSAGE_PREPARE_CAMERAS);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case CameraSystem.MESSAGE_PREPARE_CAMERAS: {
                this.prepareCameras(this.gl, this.entities);
                break;
            }
        }
    }

    private prepareCameras(gl: WebGL2RenderingContext, entities: SystemEntity[]): void {
        const canvasWidth = gl.canvas.width;
        const canvasHeight = gl.canvas.height;
        
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            const camera = entity.Get(Camera.KEY) as Camera;

            const realWidth = canvasWidth * camera.viewportScale.x;
            const realHeight = canvasHeight * camera.viewportScale.y;

            const realPosition = new Vector(
                (canvasWidth / 2 + camera.viewportPosition.x * canvasWidth) - realWidth / 2,
                (canvasHeight / 2 + camera.viewportPosition.y * canvasHeight) - realHeight / 2
            );

            gl.viewport(
				realPosition.x,
				realPosition.y,
				realWidth,
				realHeight
			);

			gl.scissor(
				realPosition.x,
				realPosition.y,
				realWidth,
				realHeight
            );
            
            gl.enable(gl.SCISSOR_TEST);
            gl.enable(gl.BLEND);
    
            // Clear the screen
            gl.clearDepth(1.0);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            gl.clearColor(
                camera.backgroundColor.red, 
                camera.backgroundColor.green, 
                camera.backgroundColor.blue, 
                camera.backgroundColor.alpha
            );
    
            // Enable depth testing (objects can appear behind/infront of eachother)
            gl.enable(gl.DEPTH_TEST);
            gl.depthFunc(gl.LEQUAL);
    
            // Enable alpha blending
            gl.enable(gl.BLEND);
            gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        }
    }
}

export default CameraSystem;