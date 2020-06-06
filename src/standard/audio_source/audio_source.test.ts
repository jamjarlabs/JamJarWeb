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

import AudioSource from "./audio_source";

describe("AudioSource - Play", () => {
    type TestTuple = [string, Error | undefined, AudioSource, AudioSource];
    test.each<TestTuple>([
        [
            "Already playing, reset play count",
            undefined,
            new AudioSource(
                "test",
                {
                    playing: true
                },
                0
            ),
            new AudioSource(
                "test",
                {
                    playing: true
                },
                5
            )
        ],
        [
            "Stopped, changed to playing",
            undefined,
            new AudioSource(
                "test",
                {
                    playing: true
                },
                0
            ),
            new AudioSource(
                "test",
                {
                    playing: false
                },
                3
            )
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: AudioSource, source: AudioSource) => {
        if (expected instanceof Error) {
            expect(() => {
                source.Play();
            }).toThrow(expected);
        } else {
            expect(source.Play()).toEqual(expected);
        }
        expect(source).toEqual(expectedState);
    });
});

describe("AudioSource - Stop", () => {
    type TestTuple = [string, Error | undefined, AudioSource, AudioSource];
    test.each<TestTuple>([
        [
            "Already stopped",
            undefined,
            new AudioSource(
                "test",
                {
                    playing: false
                },
                5
            ),
            new AudioSource(
                "test",
                {
                    playing: false
                },
                5
            )
        ],
        [
            "Playing, changed to not playing",
            undefined,
            new AudioSource(
                "test",
                {
                    playing: false
                },
                3
            ),
            new AudioSource(
                "test",
                {
                    playing: true
                },
                3
            )
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: AudioSource, source: AudioSource) => {
        if (expected instanceof Error) {
            expect(() => {
                source.Stop();
            }).toThrow(expected);
        } else {
            expect(source.Stop()).toEqual(expected);
        }
        expect(source).toEqual(expectedState);
    });
});