# Component Library Test

## About

This is a basic setup for a cross-platform component library using React-Native, TypeScript and Storybook.
It utilizes <b><a href="https://docs.expo.dev/">Expo</a></b> which allows developers to easily spin up a playground on their mobile-device OR simulator to view their component as they're making changes.

<hr>
<br>

## Installing

```
yarn install
```


## Open Storybook

```
yarn run storybook
```

<img src="assets/storybook-demo.png" alt="drawing" height="290" width="500"/>

<br>
<br>

## Launch Expo
** Used to launch mobile environment

```
yarn start
```

OR

```
npx expo start
```

Follow the command line instructions to select an environment. Scanning the QR code to launch on your device requires you to download the Expo Go app. Your device must also be connected to the same network as your computer. More information on this can be found here: <a href="https://docs.expo.dev/workflow/run-on-device/">https://docs.expo.dev/workflow/run-on-device/</a>

<br>

<img src="assets/ios-simulator.png" alt="drawing" height="500"/>

<br>
<br>


# Building

```
yarn run build
```


The build command compiles the TypeScript into two different directories, and runs a script on the web directory that replaces all instances of <code>react-native</code> imports to <code>react-native-web</code> imports

<br>

From here you can open another project, and use a relative import to the build/{web|mobile} folder. The demo is available on NPM at: 

```
npm install @jhahn678/component-lib-test
```


<br>


<hr><br>

TODO:

- [x] Functioning build process
- [ ] Configure dependencies so that web consumers don't have to install additional packages manually
- [ ] Automatic generation of Prop-Types
- [ ] Configure NPM publishing
- [ ] Configure install pattern so consumers can <code>yarn add @library/{web/mobile}</code> without installing both bundles

## References

https://www.npmjs.com/package/replace-in-file#replace-multiple-files-or-globs