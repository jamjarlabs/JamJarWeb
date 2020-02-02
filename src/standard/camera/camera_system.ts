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

import System from "../../system/system";
import Scene from "../../scene/scene";
import IMessage from "../../message/imessage";
import Camera from "./camera";
import Component from "../../component/component";
import SystemEntity from "../../system/system_entity";
import Vector from "../../geometry/vector";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import Game from "../../game";

/**
 * CameraSystem handles setting up the canvas/preparing WebGL for drawing to cameras.
 * It is responsible for loading cameras; setting up viewports, background colors and draw options.
 */
class CameraSystem extends System {

    // Only entities with a camera
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return components.some(
            component => component.key == Camera.KEY
        );
    };

    private gl: WebGL2RenderingContext;

    constructor(messageBus: IMessageBus, gl: WebGL2RenderingContext, scene?: Scene) {
        super(messageBus, { evaluator: CameraSystem.EVALUATOR, scene: scene });
        this.gl = gl;
        this.messageBus.Subscribe(this, Game.MESSAGE_PRE_RENDER);
    }


    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_PRE_RENDER: {
                this.prepareCameras(this.gl, this.entities);
                break;
            }
        }
    }

    /**
     * prepareCameras sets up viewports, background colors and draw options for cameras.
     * @param {WebGL2RenderingContext} gl WebGL context for interacting with WebGL
     * @param {SystemEntity[]} entities Array of camera entities
     */
    private prepareCameras(gl: WebGL2RenderingContext, entities: SystemEntity[]): void {
        const canvasWidth = gl.canvas.width;
        const canvasHeight = gl.canvas.height;
        
        for (let i = 0; i < entities.length; i++) {
            const entity = entities[i];
            const camera = entity.Get(Camera.KEY) as Camera;

            // realWidth and realHeight are the width and height of the viewport
            // relative to the canvas with and height, rather than the normalised
            // scale of viewportScale
            const realWidth = canvasWidth * camera.viewportScale.x;
            const realHeight = canvasHeight * camera.viewportScale.y;

            // realPosition is the center position of the camera viewport in relation to 
            // the canvas converted from the -1 to +1 coordinates of the viewportPosition
            // combined with the real width and height to make sure it is in the center
            // of the viewport.
            const realPosition = new Vector(
                (canvasWidth / 2 + camera.viewportPosition.x * canvasWidth) - realWidth / 2,
                (canvasHeight / 2 + camera.viewportPosition.y * canvasHeight) - realHeight / 2
            );

            // Define the viewport position of the camera
            gl.viewport(
				realPosition.x,
				realPosition.y,
				realWidth,
				realHeight
			);

            // Define scissor around camera viewport, ensures that nothing is rendered outside
            // of the viewport defined for this camera
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
            
            // Set the background color
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