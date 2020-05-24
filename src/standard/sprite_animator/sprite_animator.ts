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
import SpriteAnimation from "./sprite_animation";

/**
 * SpriteAnimator is a component for storing sprite animation information. The
 * SpriteAnimator can contain multiple SpriteAnimations, which can be selected
 * and set as the current animation.
 * SpriteAnimator can be used to add sprite animation, and allows defining
 * different animations. 
 * SpriteAnimator should be used with a Sprite component in conjunction.
 */
class SpriteAnimator extends Component {
    /**
     * Key of the sprite animator component.
     */
    public static readonly KEY = "sprite_animator";
    /**
     * A map of SpriteAnimations, which are available to the SpriteAnimator as
     * different animations to switch between.
     */
    public animations: Map<string, SpriteAnimation>;
    /**
     * The key of the current SpriteAnimation in the animations map, if this is
     * undefined there is no active animation.
     */
    public current: string | undefined;

    constructor(animations: Map<string, SpriteAnimation>, current: string | undefined = undefined) {
        super(SpriteAnimator.KEY);
        this.animations = animations;
        this.current = current;
    }
}

export default SpriteAnimator;