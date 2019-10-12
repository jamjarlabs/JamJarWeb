module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    env: {
        "browser": true,
        "node": true,
        "jasmine": true
    },
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
        sourceType: "module",  // Allows for the use of imports
    },
    rules: {
        "no-undef": "off",
        "@typescript-eslint/interface-name-prefix": [
            "error",
            { "prefixWithI": "always" }
        ]
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
};