// Shared package.json properties
//
// peerDependencies will be combined with what's in the
// build specific config
//
// *************  Important *****************
// Dependencies should not be added here. They will be
// sourced from the root package.json

/** Shared package.json properties */
export default {
    "license": "LICENSE.md",
    "version": "1.0.25",
    "author": "Julian Hahn",
    "main": "cjs/index.js",
    "module": "esm/index.js",
    "types": "lib/index.d.ts",
    "publishConfig": {
        "registry": "https://npm.pkg.github.com"
    },
    "sideEffects": false,
    "peerDependencies": {
        "react": ">=17.0.2"
    }
};