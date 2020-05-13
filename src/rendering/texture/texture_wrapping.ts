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
 * TextureWrapping specifies modes for wrapping a texture.
 */
enum TextureWrapping {
    /**
     * Repeat the textures image.
     */
    REPEAT = 1,
    /**
     * Repeat the texture image, mirroring the image with each repeat.
     */
    MIRRORED_REPEAT = 2,
    /**
     * Clamps the coordinates between 0 and 1.
     */
    CLAMP_TO_EDGE = 3
}

export default TextureWrapping;