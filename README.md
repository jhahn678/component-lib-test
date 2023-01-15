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
yarn storybook
```

<br>

<img src="assets/storybook-demo.png" alt="drawing" height="290" width="500"/>

<br><br>

## Launch Expo
<strong>Used to launch mobile environment</strong>

```
yarn start
```
<strong> ** Requires setup for iOS and Android ** </strong><br>
Follow the command line instructions to select an environment. Scanning the QR code to launch on your device requires you to download the Expo Go app. Your device must also be connected to the same network as your computer. More information on this can be found here: <a href="https://docs.expo.dev/workflow/run-on-device/">https://docs.expo.dev/workflow/run-on-device/</a>

<br>

<img src="assets/ios-simulator.png" alt="drawing" height="500"/>

<br><br>

# Building

```
yarn build
```


The build command compiles the TypeScript into two different directories, and runs a script on the web directory that replaces all instances of <code>react-native</code> imports to <code>react-native-web</code> imports<br>

To test the builds locally, you can open up another project and use a relative import to the build/{web|mobile} folder, ensuring that all peer dependecies are installed.

<br>

# Demo


### The demos are available on NPM
<br>

### In an existing web project:

```
yarn add @jhahn678/web react-native-web
```
### In an existing react-native project:

```
yarn add @jhahn678/mobile
```
<br><br>

# Other Scripts

### Launch on android simulator
```
yarn android
```
### Launch on iOS simulator
```
yarn ios
```
### Launch expo in browser
```
yarn web
```
### Launch on iOS simulator
```
yarn build:mobile
```
### Launch on iOS simulator
```
yarn build:web
```
### Build and create package analytics 
<i>@build/package/lib/stats.html</i>

```
yarn build:analyze
```
### Compile TypeScript for web package
```
yarn tsc:web
```
### Compile TypeScript for mobile package
```
yarn tsc:mobile
```

<br>


<hr><br>

TODO:

- [x] Functioning build process
- [ ] Configure dependencies so that web consumers don't have to install additional packages manually ?? If possible ??
- [ ] Automatic generation of Prop-Types
- [x] Configure NPM publishing
- [x] Configure install pattern so consumers can <code>yarn add @library/{web/mobile}</code> without installing both bundles

## References

https://www.npmjs.com/package/replace-in-file#replace-multiple-files-or-globs
