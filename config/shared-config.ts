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
    "version": "1.0.7",
    "license": "MIT",
    "author": "Some Author",
    "main": "cjs/index.js",
    "module": "esm/index.js",
    "types": "lib/index.d.ts",
    "publishConfig": {
        "access": "public"
    },
    "sideEffects": false,
    "peerDependencies": {
        "react": ">=17.0.2"
    }
};