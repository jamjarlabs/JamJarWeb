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

import SpriteKeyFrame from "./sprite_key_frame";

/**
 * SpriteAnimation is used to define an animation as a series of materials to
 * apply to a Sprite, with specifications on key frames, frame rate, and if the
 * animation should repeat.
 * 
 * SpriteAnimation uses an array of key frames to iterate through for
 * defining the materials to apply and for how long to apply them.
 */
class SpriteAnimation {
    /**
     * Key frames to apply, each one specifies a material and duration of
     * keyframe in frames.
     */
    public keyframes: SpriteKeyFrame[];
    /**
     * The frame rate of the animation in frames per second
     */
    public frameRate: number;
    /**
     * If the animation should repeat, a value of 0 means 0 repetitions and it
     * will not repeat, a value of 5 means 5 repeats. A value of -1 means
     * infinite repetitions.
     */
    public repeat: number;
    /**
     * State tracker, keeping track of the time since the animation has repeated.
     */
    public durationSinceRepeat: number;
    /**
     * State tracker, keeping track of the number of times the animation has repeated.
     */
    public repeatCount: number;

    constructor(keyframes: SpriteKeyFrame[], frameRate: number, repeat: number, durationSinceRepeat = 0, repeatCount = 0) {
        this.keyframes = keyframes;
        this.frameRate = frameRate;
        this.repeat = repeat;
        this.durationSinceRepeat = durationSinceRepeat;
        this.repeatCount = repeatCount;
    }
}

export default SpriteAnimation;