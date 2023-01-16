// Mobile specific package.json properties
// 
// All dependencies and peerDependencies will be combined
// with the shared config at build.
//
// *************  Important *****************
// Dependencies should only be added here if they're 
// specific to the mobile build. Otherwise, dependencies will
// be sourced from the root package.json


/** Mobile specific package.json properties */

export default {
    "name": "@jhahn678/mobile",
    "peerDependencies": {
        "react-native": ">=0.68.0"
    }
}