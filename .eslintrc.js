module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
    env: {
        browser: true,
        node: true,
        jasmine: true,
    },
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
    },
    rules: {
        "no-undef": "off",
        semi: 2,
        "@typescript-eslint/no-unused-vars": "off",
        eqeqeq: 2,
        "no-tabs": 2,
    },
};
