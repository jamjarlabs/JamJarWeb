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
/* eslint-disable */

import Fake from "./fake";

class FakeResponse extends Fake implements Response {
    headers!: Headers;
    ok!: boolean;
    redirected!: boolean;
    status!: number;
    statusText!: string;
    trailer!: Promise<Headers>;
    type!: ResponseType;
    url!: string;
    clone(): Response {
        return new Response();
    }
    body!: ReadableStream<Uint8Array> | null;
    bodyUsed!: boolean;
    arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(0));
    }
    blob(): Promise<Blob> {
        return Promise.resolve(new Blob());
    }
    formData(): Promise<FormData> {
        return Promise.resolve(new FormData());
    }
    json(): Promise<any> {
        return Promise.resolve();
    }
    text(): Promise<string> {
        return Promise.resolve("");
    }
}

export default FakeResponse;
