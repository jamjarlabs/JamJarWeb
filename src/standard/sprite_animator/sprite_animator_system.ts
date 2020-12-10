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

import Component from "../../component/component";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import SystemEntity from "../../system/system_entity";
import IScene from "../../scene/iscene";
import SpriteAnimator from "./sprite_animator";
import Sprite from "../sprite/sprite";
import MapSystem from "../../system/map_system";

/**
 * SpriteAnimatorSystem handles interpreting SpriteAnimator components and
 * updating Sprite components based on animation state and progress.
 */
class SpriteAnimatorSystem extends MapSystem {
    /**
     * Only components with Sprite and SpriteAnimator components
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Sprite.KEY, SpriteAnimator.KEY].every((type) => components.some((component) => component.key === type));
    };

    constructor(messageBus: IMessageBus, scene?: IScene, entities?: Map<number, SystemEntity>, subscriberID?: number) {
        super(messageBus, scene, SpriteAnimatorSystem.EVALUATOR, entities, subscriberID);
    }

    public Update(alpha: number): void {
        for (const entity of this.entities.values()) {
            const animator = entity.Get(SpriteAnimator.KEY) as SpriteAnimator;
            if (animator.current === undefined) {
                // Animation disabled
                continue;
            }

            const animation = animator.animations.get(animator.current);
            if (animation === undefined) {
                console.warn(`Unknown animation ${animator.current}`);
                continue;
            }

            if (animation.keyframes.length === 0) {
                // No key frames
                continue;
            }

            // Count the total number of frames the animation has
            let totalFrames = 0;
            for (let i = 0; i < animation.keyframes.length; i++) {
                totalFrames += animation.keyframes[i].frameCount;
            }

            // Determine total animation time in seconds
            const totalAnimationTime = totalFrames / animation.frameRate;

            // Iterate over each key frame, totalling the time passed
            let targetFrame = 0;
            let expectedTimePassed = 0;
            for (let i = 0; i < animation.keyframes.length; i++) {
                expectedTimePassed += animation.keyframes[i].frameCount / animation.frameRate;
                // If time since last repeat is greater than the current
                // keyframe passed animation time (mod total animation time to
                // avoid looping) then the current frame is the target key frame
                if (expectedTimePassed > animation.durationSinceRepeat % totalAnimationTime) {
                    targetFrame = i;
                    break;
                }
            }

            // If more time has passed since the animation has started than the
            // total time the animation takes, loop if configured to loop
            if (animation.durationSinceRepeat >= totalAnimationTime) {
                if (animation.repeat === -1 || animation.repeat > animation.repeatCount) {
                    // Loop enabled, reset values and increment the number of loops
                    animation.durationSinceRepeat = 0;
                    animation.repeatCount++;
                } else {
                    // Loop disabled, skip changing animation sprite
                    continue;
                }
            } else {
                // No loop required, just increment time passed
                animation.durationSinceRepeat += alpha;
            }

            // Update sprite to use the target key frame's material
            const sprite = entity.Get(Sprite.KEY) as Sprite;
            sprite.material = animation.keyframes[targetFrame].material;
        }
    }
}

export default SpriteAnimatorSystem;
