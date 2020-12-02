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

/**
 * TextAlignment is the alignment options for text.
 */
enum TextAlignment {
    /**
     * Left Align text, farthest left point of the text is set to the
     * transform position.
     */
    Left = 0,
    /**
     * Center Align text, center of text is set to the transform
     * position.
     */
    Center = 1,
    /**
     * Right Align text, farthest right point of the text is set to the
     * transform position.
     */
    Right = 2,
}

export default TextAlignment;
