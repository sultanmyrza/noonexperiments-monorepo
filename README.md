# ExpoAsset.downloadAsync fails on Android with SDK 54 beta - Module 'expo.modules.interfaces.filesystem.AppDirectories' not found

## Description

When running an Expo SDK 54 beta project on Android, `ExpoAsset.downloadAsync` consistently fails with a module linking error. The error occurs immediately when launching the development build and prevents the app from functioning properly.

## Error Summary

```
ERROR  [Error: Uncaught (in promise, id: 0) Error: Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?] 
```

## Environment

**Expo Environment:**
- Expo SDK: 54 beta
- Platform: Android (development build)
- Build tool: EAS Build (local)

**System Information:**
```
System:
  OS: macOS 26.0
  CPU: (8) arm64 Apple M1 Pro
  Memory: 159.23 MB / 16.00 GB
  Shell: 5.9 - /bin/zsh
  Xcode: 26.0 (Build version 17A5285i)
Binaries:
  Node: 22.18.0 - ~/.nvm/versions/node/v22.18.0/bin/node
  Yarn: 4.9.2 - ~/.nvm/versions/node/v22.18.0/bin/yarn
  npm: 10.9.3 - ~/.nvm/versions/node/v22.18.0/bin/npm
  pnpm: 10.14.0 - ~/.nvm/versions/node/v22.18.0/bin/pnpm
```

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/2d51969c-d5bb-45ce-b559-dd2ff965ce43" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/02195638-1410-4f0b-89ca-200043e92bc0" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/7446df1a-43e3-4cb4-9cf1-5fe9a580f5bf" width="200"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/83c90db0-ca84-4713-942d-1e648e08d908" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/120ecf24-3a71-42d6-9152-80d77593e29b" width="200"/></td>
    <td><img src="https://github.com/user-attachments/assets/6c068174-58d2-49ae-a1d5-d57f6de2f8c1" width="200"/></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/861f2912-7be0-4679-aac8-591271574ad8" width="200"/></td>
    <td></td>
    <td></td>
  </tr>
</table>

## Steps to Reproduce

### Option 1: New Project
1. [Initialize a new project with SDK 54 beta](https://expo.dev/changelog/sdk-54-beta#initialize-a-new-project-with-sdk-54-beta)
2. Setup development build configuration
3. Build APK locally: `eas build --local --platform android --profile development`
4. Launch the app on Android device/emulator

### Option 2: Existing Project
1. Checkout to branch: [expo-sdk-54-android-issue-module-expo.modules.interfaces.filesystem.AppDirectories-not-found](https://github.com/sultanmyrza/noonexperiments-monorepo/tree/expo-sdk-54-android-issue-module-expo.modules.interfaces.filesystem.AppDirectories-not-found)
2. Install dependencies
3. Build APK locally: `eas build --local --platform android --profile development`
4. Launch the app on Android device/emulator

## Expected Behavior

The app should launch successfully without module linking errors, and `ExpoAsset.downloadAsync` should function properly.

## Actual Behavior

The app displays warning `expo.modules.interfaces.filesystem.AppDirectories` module cannot be found. As a result, the tab bar icons do not appear.

## Error Details

### Key Error Message
```
Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?
```

## Additional Information

- **Issue appears to be:** A regression in SDK 54 beta where the filesystem interface module is not properly linked or available
- **Impact:** Complete app failure on Android development builds
- **iOS status:** Not tested yet

<details><summary>Full Console Logs</summary>

```bash
› Metro waiting on exp+cool-app://expo-development-client/?url=http%3A%2F%2F10.186.242.35%3A8082
› Scan the QR code above to open the project in a development build. Learn more: https://expo.fyi/start

› Web is waiting on http://localhost:8082

› Using development build
› Press s │ switch to Expo Go

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu
› shift+m │ more tools
› Press o │ open project code in your editor

› Press ? │ show all commands

Logs for your project will appear below. Press Ctrl+C to exit.
Android Bundled 5209ms node_modules/expo-router/entry.js (1414 modules)

 ERROR  [Error: Uncaught (in promise, id: 0) Error: Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?] 

Code: construct.js
  2 | var setPrototypeOf = require("./setPrototypeOf.js");
  3 | function _construct(t, e, r) {
> 4 |   if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    |                                                                 ^
  5 |   var o = [null];
  6 |   o.push.apply(o, e);
  7 |   var p = new (t.bind.apply(t, o))();

 ERROR  [Error: Uncaught (in promise, id: 2) Error: Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?] 

 ERROR  [Error: Uncaught (in promise, id: 1) Error: Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?] 

 ERROR  [Error: Uncaught (in promise, id: 3) Error: Call to function 'ExpoAsset.downloadAsync' has been rejected.
→ Caused by: Module 'expo.modules.interfaces.filesystem.AppDirectories' not found. Are you sure all modules are linked correctly?] 
```

</details>