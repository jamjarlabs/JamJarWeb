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
        "semi": 2,
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/interface-name-prefix": [
            "error",
            { "prefixWithI": "always" }
        ],
        "eqeqeq": 2
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    },
};