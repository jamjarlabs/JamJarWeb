module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testMatch: ["**/src/**/?(*.)+(spec|test).[jt]s?(x)"],
    coveragePathIgnorePatterns: ["/node_modules/", "/example/"],
    collectCoverageFrom: ["**/src/**/*.ts"],
    setupFiles: ["./mocks/browser.js"],
};
