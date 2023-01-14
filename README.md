# Component Library Test

## About

This is a basic setup for a cross-platform component library using React-Native, TypeScript and Storybook.
It utilizes <b><a href="https://docs.expo.dev/">Expo</a></b> which allows developers to easily spin up a playground on their mobile-device to view their components.

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


## Launch Expo
** Used to launch mobile environment
```
yarn start
```
OR
```
npx expo start
```
Follow the command line instructions to select an environment. Scanning the QR code to launch on your device requires you to download the Expo Go app. Your device must also be connected to the same network as your computer. More information on this can be found here: https://docs.expo.dev/workflow/run-on-device/

<br>


# Building

```
yarn run build
```


The build command compiles the TypeScript into two different directories, and runs a script on the web directory that replaces all instances of <code>react-native</code> imports to <code>react-native-web</code> imports

<br>


<hr><br>

TODO:

- [x] Functioning build process
- [ ] Configure dependencies so that web consumers don't have to install additional packages manually
- [ ] Automatic generation of Prop-Types
- [ ] Configure NPM publishing
- [ ] Configure install pattern so consumers can <code>yarn add @library/{web/mobile}</code> without installing both bundles

## References

https://medium.com/propertyfinder-engineering/shared-component-library-for-reactjs-and-react-native-with-storybook-e1abbe9d84cb

https://www.npmjs.com/package/replace-in-file#replace-multiple-files-or-globs
