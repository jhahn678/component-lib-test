# Important

The files in this directory configure the package.json for the web and mobile builds. Changes to these files should be done with care.

<br>

<code>shared-config.ts</code> contains properties that are shared between both packages such as version, license, entry points, shared peerDependencies, etc.
<br>

<code>web-config.ts</code> contains properties that are specific to web.
<br>

<code>mobile-config.ts</code> contains properties that are specific to mobile.

<br>

<strong>Note:</strong>
<br>
All three of these configs have a peerDependencies property. The shared peerDependencies and package-specific peerDependencies will be combined at build time, with the package-specific deps taking precedence over the shared.

<br>
Additionally, any <b>dependencies</b> added to these configs will be combined with the dependencies in the <b>root</b> package.json, which will then be filtered of the following:

<br>

- react
- react-dom
- react-native
- react-native-web
- native-base
- react-native-svg
- react-native-safe-area-context
- <i>any expo related packages</i>

<br>

<strong>Note:</strong>
Any conflicting dependency names follow the precedence of <i>package-specific > shared > root</i>

<br>

[The code for all of this can be found here](../scripts/utils/configure-package-json.ts)

<br>

The final result will look something like this:

```
{
  "name": "@PackageName",
  "version": "1.2.3",
  "license": "MIT",
  "author": "The Author",
  "main": "cjs/index.js",
  "module": "esm/index.js",
  "types": "lib/index.d.ts",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  },
  "sideEffects": false,
  "dependencies": {},
  "peerDependencies": {
    "react-native-web": ">=0.17.7",
    "react": ">=17.0.2"
  }
}
```
