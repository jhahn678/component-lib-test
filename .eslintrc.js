// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/jsx-runtime"
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        "react",
        "react-native",
    ],
    rules: {
        "react-native/no-unused-styles": 2,
        "@typescript-eslint/no-empty-interface": 0,
        "import/no-restricted-paths": [2, {
            "zones": [
                // Scripts should not be accessible to src
                {
                    "target": "src",
                    "from": "scripts",
                    "message": "Importing from outside of src is forbidden"
                },
                // All imported assets should come from src/assets
                {
                    "target": "src",
                    "from": "assets",
                    "message": "Importing assets from outside of the src directory is forbidden"
                }
            ]
        }]
    },
    settings: {
        react: {
            version: "detect",
        },
        // Workaround for https://github.com/facebook/react-native/issues/28549
        'import/ignore': [
            'node_modules/react-native/index\\.js$'
        ]
    }
}


