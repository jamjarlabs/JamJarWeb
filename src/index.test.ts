import * as JamJar from "./index";

describe("Index import", () => {
    test("Check imports work without error", () => {
        expect(JamJar).not.toBeNull();
    });
});
