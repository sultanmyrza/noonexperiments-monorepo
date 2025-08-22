# Expo SDK 54 Beta Testing - Issue #38990

This repository is specifically created to test and reproduce the iOS development build issue reported in [Expo Issue #38990](https://github.com/expo/expo/issues/38990).

## Environment

```
System:
  OS: macOS 26.0
  CPU: (8) arm64 Apple M1 Pro
  Shell: 5.9 - /bin/zsh
Binaries:
  Node: 22.18.0 - ~/.nvm/versions/node/v22.18.0/bin/node
  Yarn: 4.9.2 - ~/.nvm/versions/node/v22.18.0/bin/yarn
  npm: 10.9.3 - ~/.nvm/versions/node/v22.18.0/bin/npm
  pnpm: 10.14.0 - ~/.nvm/versions/node/v22.18.0/bin/pnpm
IDEs:
  Xcode 26.0
  Build version 17A5285i
```

## Issue
Currently, running `eas build --local -p ios -e development` gives the following error:

<details><summary>click to expand</summary>

```bash
eas build --local -p ios -e development

Resolved "development" environment for the build. Learn more: https://docs.expo.dev/eas/environment-variables/#setting-the-environment-for-your-builds                                                                                                                
No environment variables with visibility "Plain text" and "Sensitive" found for the "development" environment on EAS.

📝  iOS Bundle Identifier Learn more: https://expo.fyi/bundle-identifier
✔ What would you like your iOS bundle identifier to be? … com.sultanmyrza.coolapp
✔ iOS app only uses standard/exempt encryption? Learn more: https://developer.apple.com/documentation/Security/complying-with-encryption-export-regulations … yes                                                                                                     
No remote versions are configured for this project, buildNumber will be initialized based on the value from the local project.
✔ Initialized buildNumber with 1.
✔ Using remote iOS credentials (Expo server)

If you provide your Apple account credentials we will be able to generate all necessary build credentials and fully validate them.
This is optional, but without Apple account access you will need to provide all the missing values manually and we can only run minimal validation on them.                                                                                                           
✔ Do you want to log in to your Apple account? … yes

› Log in to your Apple Developer account to continue
✔ Apple ID: … sultanmyrza@icloud.com
› Restoring session /Users/sultanmyrza/.app-store/auth/sultanmyrza@icloud.com/cookie
✔ Select a Team › Sultanmyrza Kasymbekov - Individual (B864A438ZP)
› Provider Sultanmyrza Kasymbekov (121376417)
✔ Switched to provider: Sultanmyrza Kasymbekov (121376417)
✔ Logged in Local session
✔ Bundle identifier registered com.sultanmyrza.coolapp
✔ Synced capabilities: No updates
✔ Synced capability identifiers: No updates
✔ Fetched Apple distribution certificates
✔ Reuse this distribution certificate?
Cert ID: FYA3W44P97, Serial number: 2C1E1EC1920152DF55FAF77BA2F89A3E, Team ID: B864A438ZP, Team name: Sultanmyrza Kasymbekov (Individual)                                                                                                                             
    Created: 10 months ago, Updated: 10 months ago,
    Expires: Sat, 18 Oct 2025 10:05:37 GMT+0800
    📲 Used by: @sultanmyrza/expo-playground-eas … yes
Using distribution certificate with serial number 2C1E1EC1920152DF55FAF77BA2F89A3E
✔ Select devices for the ad hoc build: › 00008101-000E643836F0001E (iPhone) (Sultanmyrza’s iPhone) (created at: 2025-01-03T08:25:43.293Z)                                                                                                                             
✔ Created new profile: *[expo] com.sultanmyrza.coolapp AdHoc 1755855233829

Project Credentials Configuration

Project                   @sultanmyrza/cool-app
Bundle Identifier         com.sultanmyrza.coolapp
                          
Ad Hoc Configuration      
                          
Distribution Certificate  
Serial Number             2C1E1EC1920152DF55FAF77BA2F89A3E
Expiration Date           Sat, 18 Oct 2025 10:05:37 GMT+0800
Apple Team                B864A438ZP (Sultanmyrza Kasymbekov (Individual))
Updated                   10 months ago
                          
Provisioning Profile      
Developer Portal ID       6ZS98YKBC3
Status                    active
Expiration                Sat, 18 Oct 2025 10:05:37 GMT+0800
Apple Team                B864A438ZP (Sultanmyrza Kasymbekov (Individual))
Provisioned devices       - Sultanmyrza’s iPhone - iPhone (UDID: 00008101-000E643836F0001E)
Updated                   1 second ago
                          
All credentials are ready to build @sultanmyrza/cool-app (com.sultanmyrza.coolapp)

✔ Computed project fingerprint
[SETUP_WORKINGDIR] Preparing workingdir /var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99                                                                                                                  
[START_BUILD] Starting build
  "job": {
    "type": "managed",
    "platform": "ios",
    "projectArchive": {
      "type": "PATH",
      "path": "/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-cli-nodejs/24bb1c24-3d68-4a71-851d-b050ca8316f4.tar.gz"
    },
    "projectRootDirectory": "cool-app",
    "builderEnvironment": {
      "env": {}
    },
    "cache": {
      "disabled": false,
      "paths": [],
      "clear": false
    },
    "updates": {},
    "developmentClient": true,
    "scheme": "coolapp",
    "username": "sultanmyrza",
    "version": {
      "buildNumber": "1"
    },
    "experimental": {},
    "mode": "build",
    "triggeredBy": "EAS_CLI",
    "appId": "23d815db-39e4-4194-8fe0-32090f2ea175",
    "initiatingUserId": "b067330c-49cb-496e-878e-aa77fb661477"
  }
[READ_PACKAGE_JSON] Using package.json:
[READ_PACKAGE_JSON] {
  "name": "cool-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "expo lint"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.1.0",
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/elements": "^2.6.3",
    "@react-navigation/native": "^7.1.8",
    "expo": "~54.0.0-preview.5",
    "expo-constants": "~18.0.3",
    "expo-dev-client": "~6.0.4",
    "expo-font": "~14.0.2",
    "expo-haptics": "~15.0.2",
    "expo-image": "~3.0.2",
    "expo-linking": "~8.0.2",
    "expo-router": "~6.0.0-beta.5",
    "expo-splash-screen": "~31.0.3",
    "expo-status-bar": "~3.0.3",
    "expo-symbols": "~1.0.2",
    "expo-web-browser": "~15.0.2",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.0",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.0.2",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.14.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "~0.4.1"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2"
  },
  "private": true
}
[INSTALL_DEPENDENCIES] Running "yarn install --no-immutable --inline-builds" in /var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app directory                                                 
[INSTALL_DEPENDENCIES] ➤ YN0000: · Yarn 4.9.2
[INSTALL_DEPENDENCIES] ➤ YN0000: ┌ Resolution step
[INSTALL_DEPENDENCIES] ➤ YN0000: └ Completed
[INSTALL_DEPENDENCIES] ➤ YN0000: ┌ Post-resolution validation
[INSTALL_DEPENDENCIES] ➤ YN0002: │ cool-app@workspace:. doesn't provide @babel/core (p05555), requested by react-native-reanimated and other dependencies.                                                                                                            
[INSTALL_DEPENDENCIES] ➤ YN0086: │ Some peer dependencies are incorrectly met by your project; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code.                                                                 
[INSTALL_DEPENDENCIES] ➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies; run yarn explain peer-requirements for details.                                                                                                                        
[INSTALL_DEPENDENCIES] ➤ YN0000: └ Completed
[INSTALL_DEPENDENCIES] ➤ YN0000: ┌ Fetch step
[INSTALL_DEPENDENCIES] ➤ YN0000: └ Completed in 0s 343ms
[INSTALL_DEPENDENCIES] ➤ YN0000: ┌ Link step
[INSTALL_DEPENDENCIES] ➤ YN0007: │ unrs-resolver@npm:1.11.1 must be built because it never has been before or the last one failed
[INSTALL_DEPENDENCIES] ➤ YN0000: └ Completed in 4s 994ms
[INSTALL_DEPENDENCIES] ➤ YN0000: · Done with warnings in 5s 564ms
The NODE_ENV environment variable is required but was not specified. Ensure the project is bundled with Expo CLI or NODE_ENV is set.                                                                                                                                  
Proceeding without mode-specific .env
[READ_APP_CONFIG] Using app configuration:
[READ_APP_CONFIG] {
  "name": "cool-app",
  "slug": "cool-app",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "coolapp",
  "userInterfaceStyle": "automatic",
  "newArchEnabled": true,
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": "com.sultanmyrza.coolapp",
    "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false
    }
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    "edgeToEdgeEnabled": true,
    "predictiveBackGestureEnabled": true,
    "package": "com.sultanmyrza.coolapp"
  },
  "web": {
    "output": "static",
    "favicon": "./assets/images/favicon.png"
  },
  "plugins": [
    "expo-router",
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png",
        "imageWidth": 200,
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      }
    ]
  ],
  "experiments": {
    "typedRoutes": true,
    "reactCompiler": true
  },
  "extra": {
    "router": {},
    "eas": {
      "projectId": "23d815db-39e4-4194-8fe0-32090f2ea175"
    }
  },
  "sdkVersion": "54.0.0",
  "platforms": [
    "ios",
    "android",
    "web"
  ],
  "androidStatusBar": {
    "backgroundColor": "#ffffff"
  }
}
[RUN_EXPO_DOCTOR] Running "expo doctor"
[RUN_EXPO_DOCTOR] Running 17 checks on your project...
[RUN_EXPO_DOCTOR] 17/17 checks passed. No issues detected!
[PREPARE_CREDENTIALS] Preparing credentials
[PREPARE_CREDENTIALS] Creating keychain
[PREPARE_CREDENTIALS] Preparing credentials for target 'coolapp'
[PREPARE_CREDENTIALS] Getting distribution certificate fingerprint and common name
[PREPARE_CREDENTIALS] Fingerprint = "854BAE66CE71C1AAD033D3B63C69963010E18B24", common name = iPhone Distribution: Sultanmyrza Kasymbekov (B864A438ZP)                                                                                                                
[PREPARE_CREDENTIALS] Writing distribution certificate to /var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/32145cc2-4765-4eee-8307-a56719e2a6c0.p12                                                                                                                   
[PREPARE_CREDENTIALS] Importing distribution certificate into the keychain
[PREPARE_CREDENTIALS] Initializing provisioning profile
[PREPARE_CREDENTIALS] Validating whether the distribution certificate has been imported successfully
[PREPARE_CREDENTIALS] Verifying whether the distribution certificate and provisioning profile match
[PREBUILD] - Creating native directory (./ios)
[PREBUILD] ✔ Created native directory
[PREBUILD] - Updating package.json
[PREBUILD] ✔ Updated package.json
[PREBUILD] - Running prebuild
[PREBUILD] ✔ Finished prebuild
[PREBUILD] Running "yarn install --no-immutable --inline-builds" in /var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app directory                                                             
[PREBUILD] ➤ YN0000: · Yarn 4.9.2
[PREBUILD] ➤ YN0000: ┌ Resolution step
[PREBUILD] ➤ YN0000: └ Completed
[PREBUILD] ➤ YN0000: ┌ Post-resolution validation
[PREBUILD] ➤ YN0002: │ cool-app@workspace:. doesn't provide @babel/core (p05555), requested by react-native-reanimated and other dependencies.                                                                                                                        
[PREBUILD] ➤ YN0086: │ Some peer dependencies are incorrectly met by your project; run yarn explain peer-requirements <hash> for details, where <hash> is the six-letter p-prefixed code.                                                                             
[PREBUILD] ➤ YN0086: │ Some peer dependencies are incorrectly met by dependencies; run yarn explain peer-requirements for details.
[PREBUILD] ➤ YN0000: └ Completed
[PREBUILD] ➤ YN0000: ┌ Fetch step
[PREBUILD] ➤ YN0000: └ Completed in 0s 321ms
[PREBUILD] ➤ YN0000: ┌ Link step
[PREBUILD] ➤ YN0000: └ Completed
[PREBUILD] ➤ YN0000: · Done with warnings in 0s 600ms
[INSTALL_PODS] Using Expo modules
[INSTALL_PODS] [Expo] Enabling modular headers for pod ExpoModulesCore
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-RCTAppDelegate
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-RCTFabric
[INSTALL_PODS] [Expo] Enabling modular headers for pod ReactAppDependencyProvider
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-Core
[INSTALL_PODS] [Expo] Enabling modular headers for pod ReactCodegen
[INSTALL_PODS] [Expo] Enabling modular headers for pod RCTRequired
[INSTALL_PODS] [Expo] Enabling modular headers for pod RCTTypeSafety
[INSTALL_PODS] [Expo] Enabling modular headers for pod ReactCommon
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-NativeModulesApple
[INSTALL_PODS] [Expo] Enabling modular headers for pod Yoga
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-Fabric
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-graphics
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-utils
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-featureflags
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-debug
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-ImageManager
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-rendererdebug
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-jsi
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-renderercss
[INSTALL_PODS] [Expo] Enabling modular headers for pod hermes-engine
[INSTALL_PODS] [Expo] Enabling modular headers for pod glog
[INSTALL_PODS] [Expo] Enabling modular headers for pod boost
[INSTALL_PODS] [Expo] Enabling modular headers for pod DoubleConversion
[INSTALL_PODS] [Expo] Enabling modular headers for pod fast_float
[INSTALL_PODS] [Expo] Enabling modular headers for pod fmt
[INSTALL_PODS] [Expo] Enabling modular headers for pod RCT-Folly
[INSTALL_PODS] [Expo] Enabling modular headers for pod SocketRocket
[INSTALL_PODS] [Expo] Enabling modular headers for pod expo-dev-menu-interface
[INSTALL_PODS] [Expo] Enabling modular headers for pod EXManifests
[INSTALL_PODS] [Expo] Enabling modular headers for pod EXUpdatesInterface
[INSTALL_PODS] [Expo] Enabling modular headers for pod expo-dev-menu
[INSTALL_PODS] [Expo] Enabling modular headers for pod React-jsinspector
[INSTALL_PODS] [Expo] Enabling modular headers for pod expo-dev-launcher
[INSTALL_PODS] [Expo] Enabling modular headers for pod SDWebImage
[INSTALL_PODS] [Expo] Enabling modular headers for pod SDWebImageAVIFCoder
[INSTALL_PODS] [Expo] Enabling modular headers for pod SDWebImageSVGCoder
[INSTALL_PODS] [Expo] Enabling modular headers for pod SDWebImageWebPCoder
[INSTALL_PODS] [Expo] Enabling modular headers for pod libavif
[INSTALL_PODS] Found 6 modules for target `coolapp`
[INSTALL_PODS] link_native_modules! {ios_packages: [{configurations: [], name: "expo", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/expo", path: "../node_modules/expo", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/expo/Expo.podspec", script_phases: []}, {configurations: [], name: "react-native-gesture-handler", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-gesture-handler", path: "../node_modules/react-native-gesture-handler", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-gesture-handler/RNGestureHandler.podspec", script_phases: []}, {configurations: [], name: "react-native-reanimated", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-reanimated", path: "../node_modules/react-native-reanimated", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-reanimated/RNReanimated.podspec", script_phases: []}, {configurations: [], name: "react-native-safe-area-context", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-safe-area-context", path: "../node_modules/react-native-safe-area-context", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-safe-area-context/react-native-safe-area-context.podspec", script_phases: []}, {configurations: [], name: "react-native-screens", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-screens", path: "../node_modules/react-native-screens", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-screens/RNScreens.podspec", script_phases: []}, {configurations: [], name: "react-native-worklets", root: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-worklets", path: "../node_modules/react-native-worklets", podspec_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/node_modules/react-native-worklets/RNWorklets.podspec", script_phases: []}], ios_project_root_path: "/private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios", react_native_path: "../node_modules/react-native"} 
[INSTALL_PODS] Auto-linking React Native modules for target `coolapp`: RNGestureHandler, RNReanimated, RNScreens, RNWorklets, and react-native-safe-area-context                                                                                                      
[INSTALL_PODS] Framework build type is static library
[INSTALL_PODS] [ReactNativeDependencies] Setting up ReactNativeDependencies...
[INSTALL_PODS] [ReactNativeDependencies] Building from source: false
[INSTALL_PODS] [ReactNativeDependencies] Using release tarball
[INSTALL_PODS] [ReactNativeDependencies] Using tarball from URL: https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-dependencies-debug.tar.gz                                                  
[INSTALL_PODS] % Total
[INSTALL_PODS] % Received % Xferd  Average Speed   Time    Time     Time  Current
[INSTALL_PODS]                                  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 0     0    0     0    0     0      0      0 --:--:-- --:--:-- --
[INSTALL_PODS] :--:--     0
[INSTALL_PODS] 4 18.3M    4  906k    0     0   795k      0  0:00:23  0:00:01  0:00:22  795k
[INSTALL_PODS] 81 18.3M   81 14.8M    0     0  7064k      0  0:00:02  0:00:02 --:--:--
[INSTALL_PODS] 7061k
[INSTALL_PODS] 100 18.3M  100 18.3M    0     0  8431k
[INSTALL_PODS] 0  0:00:02  0:00:02 --:--:-- 8429k
[INSTALL_PODS] % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
[INSTALL_PODS] Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 2 10.0M    2  206k    0     0   234k      0  0:00:43 --:--:--  0:00:43  234k
[INSTALL_PODS] 100 10.0M  100 10.0M    0     0  5626k      0  0:00:01  0:00:01 --:--:
[INSTALL_PODS] -- 5627k
[INSTALL_PODS] [ReactNativeDependencies] Source: {http: "https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-dependencies-debug.tar.gz"}                                                        
[INSTALL_PODS] [ReactNativeCore] Setting up ReactNativeCore...
[INSTALL_PODS] [ReactNativeCore] Building from source: false
[INSTALL_PODS] [ReactNativeCore] Using tarball from URL: https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-core-debug.tar.gz                                                                  
[INSTALL_PODS] % Total    % Received % Xferd  Average Speed   Time    Time
[INSTALL_PODS] Time  Current
[INSTALL_PODS]                                  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 0 79.0M    0  5667    0     0  10554
[INSTALL_PODS] 0  2:10:53 --:--:--  2:10:53 10553
[INSTALL_PODS] 6 79.0M    6 5277k    0     0  3613k      0  0:00
[INSTALL_PODS] :22  0:00:01  0:00:21 3612k
[INSTALL_PODS] 30 79.0M   30 23.9M    0     0  9975k      0  0:00:08  0:00:02  0:00:06 9972k
[INSTALL_PODS] 55 79.0M   55 44.0M    0     0  12.7M      0  0:00:06  0:00:0
[INSTALL_PODS] 3  0:00:03 12.7M
[INSTALL_PODS] 83 79.0M   83 65.7M    0     0  14.7M      0  0:00:05  0:00:04  0:00:01 14.7M
[INSTALL_PODS] 100 79.0M  100 79.0M    0     0  15.5M      0  0:00:05  0:00:05 --:--:-- 17.3M
[INSTALL_PODS] % Total    % Received % Xferd  Average Speed   Time    Time     Time
[INSTALL_PODS] Current
[INSTALL_PODS]                                  Dload  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 9 26.5M    9 2655k    0     0  1976k      0  0:00:13  0:00:01  0:00:12 1976k
[INSTALL_PODS] 69 26.5M   69 18.3M    0     0  7900k      0  0:00:03  0:00:02  0:00:01 7898k
[INSTALL_PODS] 100 26.5M  100 26.5M    0     0  9795k      0  0:00:02  0:00:02 --:--:-- 9793k
[INSTALL_PODS] [ReactNativeCore] Source: {http: "https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-core-debug.tar.gz"}                                                                        
[INSTALL_PODS] Configuring the target with the New Architecture
[INSTALL_PODS] [ReactNativeCore] Using React Native Core and React Native Dependencies prebuilt versions.
[INSTALL_PODS] [Codegen] Analyzing /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/package.json                                                                                   
[INSTALL_PODS] [Codegen] Searching for codegen-enabled libraries in the app.
[INSTALL_PODS] [Codegen] The "codegenConfig" field is not defined in package.json. Assuming there is nothing to generate at the app level.                                                                                                                            
[INSTALL_PODS] [Codegen] Searching for codegen-enabled libraries in the project dependencies.
[INSTALL_PODS] [Codegen] Found react-native
[INSTALL_PODS] [Codegen] Found react-native-gesture-handler
[INSTALL_PODS] [Codegen] Found react-native-reanimated
[INSTALL_PODS] [Codegen] Found react-native-safe-area-context
[INSTALL_PODS] [Codegen] Found react-native-screens
[INSTALL_PODS] [Codegen] Found react-native-worklets
[INSTALL_PODS] [Codegen] Searching for codegen-enabled libraries in react-native.config.js
[INSTALL_PODS] [Codegen] Processing FBReactNativeSpec
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Processing rngesturehandler_codegen
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Supported Apple platforms: ios, macos, tvos, visionos for rngesturehandler_codegen
[INSTALL_PODS] [Codegen] Processing rnreanimated
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Supported Apple platforms: ios, macos, tvos, visionos for rnreanimated
[INSTALL_PODS] [Codegen] Processing safeareacontext
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Supported Apple platforms: ios, macos, tvos, visionos for safeareacontext
[INSTALL_PODS] [Codegen] Processing rnscreens
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Supported Apple platforms: ios, tvos, visionos for rnscreens
[INSTALL_PODS] [Codegen] Processing rnworklets
[INSTALL_PODS] [Codegen] Searching for podspec in the project dependencies.
[INSTALL_PODS] [Codegen] Supported Apple platforms: ios, macos, tvos, visionos for rnworklets
[INSTALL_PODS] [Codegen] [Codegen - FBReactNativeSpec] Skipping iOS code generation for FBReactNativeSpec as it has been generated already.                                                                                                                           
[INSTALL_PODS] [Codegen] Generating Native Code for rngesturehandler_codegen - ios
[INSTALL_PODS] [Codegen] Generated artifacts: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios                                                             
[INSTALL_PODS] [Codegen] Generating Native Code for rnreanimated - ios
[INSTALL_PODS] [Codegen] Generated artifacts: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios                                                             
[INSTALL_PODS] [Codegen] Generating Native Code for safeareacontext - ios
[INSTALL_PODS] [Codegen] Generated artifacts: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios                                                             
[INSTALL_PODS] [Codegen] Generating Native Code for rnscreens - ios
[INSTALL_PODS] [Codegen] Generated artifacts: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios                                                             
[INSTALL_PODS] [Codegen] Generating Native Code for rnworklets - ios
[INSTALL_PODS] [Codegen] Generated artifacts: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios                                                             
[INSTALL_PODS] [Codegen] Generating RCTThirdPartyComponentsProvider.h
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTThirdPartyComponentsProvider.h                            
[INSTALL_PODS] [Codegen] Generating RCTThirdPartyComponentsProvider.mm
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTThirdPartyComponentsProvider.mm                           
[INSTALL_PODS] [Codegen] Generating RCTModulesProvider.h
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTModuleProviders.h                                         
[INSTALL_PODS] [Codegen] Generating RCTModuleProviders.mm
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTModuleProviders.mm                                        
[INSTALL_PODS] [Codegen] Generating RCTAppDependencyProvider
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTAppDependencyProvider.h                                   
[INSTALL_PODS] [Codegen] Generated artifact: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/RCTAppDependencyProvider.mm                                  
[INSTALL_PODS] [Codegen] Generated podspec: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/ReactAppDependencyProvider.podspec                            
[INSTALL_PODS] [Codegen] Generated podspec: /private/var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-local-nodejs/919bc81c-06ec-4a19-ae52-0ed7e8eabc99/build/cool-app/ios/build/generated/ios/ReactCodegen.podspec                                          
[INSTALL_PODS] [Codegen] Done.
[INSTALL_PODS] Analyzing dependencies
[INSTALL_PODS] Fetching podspec for `React-Core-prebuilt` from `../node_modules/react-native/React-Core-prebuilt.podspec`
[INSTALL_PODS] [ReactNativeCore] Using tarball from URL: https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-core-debug.tar.gz                                                                  
[INSTALL_PODS] Fetching podspec for `ReactNativeDependencies` from `../node_modules/react-native/third-party-podspecs/ReactNativeDependencies.podspec`                                                                                                                
[INSTALL_PODS] [ReactNativeDependencies] Using release tarball
[INSTALL_PODS] [ReactNativeDependencies] Using tarball from URL: https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-reactnative-dependencies-debug.tar.gz                                                  
[INSTALL_PODS] Fetching podspec for `hermes-engine` from `../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec`
[INSTALL_PODS] [Hermes] Using release tarball from URL: https://repo1.maven.org/maven2/com/facebook/react/react-native-artifacts/0.81.0/react-native-artifacts-0.81.0-hermes-ios-debug.tar.gz                                                                         
[INSTALL_PODS] % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
[INSTALL_PODS]                                  Dl
[INSTALL_PODS] oad  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 1 29.0M    1  399k    0     0   404k      0  0:01:13 --:--:--  0:01:13  404k
[INSTALL_PODS] 43 29.0M   43 12.5M    0     0  6369k      0  0:00:04  0:00:02  0:00:02 6369k
[INSTALL_PODS] 86 29.0M   86 25.0M    0     0  8378k      0  0:00:03  0:00:03 --:--:-- 8380k
[INSTALL_PODS] 100 29.0M  100 29.0M    0     0  9060k      0  0:00:03  0:00:03 --:--:-- 9062k
[INSTALL_PODS] % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
[INSTALL_PODS]                                  Dlo
[INSTALL_PODS] ad  Upload   Total   Spent    Left  Speed
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
[INSTALL_PODS] 0 20.3M    0 42543    0     0  61153      0  0:05:49 --:--:--  0:05:49 61125
[INSTALL_PODS] 39 20.3M   39 8282k    0     0  4965k      0  0:00:04  0:00:01  0:00:03 4962k
[INSTALL_PODS] 100 20.3M  100 20.3M    0     0  8991k      0  0:00:02  0:00:02 --:--:-- 8995k
[INSTALL_PODS] Downloading dependencies
[INSTALL_PODS] Installing EXConstants (18.0.3)
[INSTALL_PODS] Installing EXJSONUtils (0.15.0)
[INSTALL_PODS] Installing EXManifests (1.0.3)
[INSTALL_PODS] Installing EXUpdatesInterface (2.0.0)
[INSTALL_PODS] Installing Expo (54.0.0-preview.6)
[INSTALL_PODS] Installing ExpoAsset (12.0.3)
[INSTALL_PODS] Installing ExpoFont (14.0.2)
[INSTALL_PODS] Installing ExpoHaptics (15.0.2)
[INSTALL_PODS] Installing ExpoHead (6.0.0-beta.5)
[INSTALL_PODS] Installing ExpoImage (3.0.2)
[INSTALL_PODS] Installing ExpoKeepAwake (15.0.2)
[INSTALL_PODS] Installing ExpoLinking (8.0.3)
[INSTALL_PODS] Installing ExpoModulesCore (3.0.5)
[INSTALL_PODS] Installing ExpoSplashScreen (31.0.4)
[INSTALL_PODS] Installing ExpoSymbols (1.0.2)
[INSTALL_PODS] Installing ExpoWebBrowser (15.0.2)
[INSTALL_PODS] Installing FBLazyVector (0.81.0)
[INSTALL_PODS] Installing RCTDeprecation (0.81.0)
[INSTALL_PODS] Installing RCTRequired (0.81.0)
[INSTALL_PODS] Installing RCTTypeSafety (0.81.0)
[INSTALL_PODS] Installing RNGestureHandler (2.28.0)
[INSTALL_PODS] Installing RNReanimated (4.0.2)
[INSTALL_PODS] Installing RNScreens (4.14.1)
[INSTALL_PODS] Installing RNWorklets (0.4.1)
[INSTALL_PODS] Installing React (0.81.0)
[INSTALL_PODS] Installing React-Core (0.81.0)
[INSTALL_PODS] Installing React-Core-prebuilt (0.81.0)
[INSTALL_PODS] Installing React-CoreModules (0.81.0)
[INSTALL_PODS] Installing React-Fabric (0.81.0)
[INSTALL_PODS] Installing React-FabricComponents (0.81.0)
[INSTALL_PODS] Installing React-FabricImage (0.81.0)
[INSTALL_PODS] Installing React-ImageManager (0.81.0)
[INSTALL_PODS] Installing React-Mapbuffer (0.81.0)
[INSTALL_PODS] Installing React-NativeModulesApple (0.81.0)
[INSTALL_PODS] Installing React-RCTActionSheet (0.81.0)
[INSTALL_PODS] Installing React-RCTAnimation (0.81.0)
[INSTALL_PODS] Installing React-RCTAppDelegate (0.81.0)
[INSTALL_PODS] Installing React-RCTBlob (0.81.0)
[INSTALL_PODS] Installing React-RCTFBReactNativeSpec (0.81.0)
[INSTALL_PODS] Installing React-RCTFabric (0.81.0)
[INSTALL_PODS] Installing React-RCTImage (0.81.0)
[INSTALL_PODS] Installing React-RCTLinking (0.81.0)
[INSTALL_PODS] Installing React-RCTNetwork (0.81.0)
[INSTALL_PODS] Installing React-RCTRuntime (0.81.0)
[INSTALL_PODS] Installing React-RCTSettings (0.81.0)
[INSTALL_PODS] Installing React-RCTText (0.81.0)
[INSTALL_PODS] Installing React-RCTVibration (0.81.0)
[INSTALL_PODS] Installing React-RuntimeApple (0.81.0)
[INSTALL_PODS] Installing React-RuntimeCore (0.81.0)
[INSTALL_PODS] Installing React-RuntimeHermes (0.81.0)
[INSTALL_PODS] Installing React-callinvoker (0.81.0)
[INSTALL_PODS] Installing React-cxxreact (0.81.0)
[INSTALL_PODS] Installing React-debug (0.81.0)
[INSTALL_PODS] Installing React-defaultsnativemodule (0.81.0)
[INSTALL_PODS] Installing React-domnativemodule (0.81.0)
[INSTALL_PODS] Installing React-featureflags (0.81.0)
[INSTALL_PODS] Installing React-featureflagsnativemodule (0.81.0)
[INSTALL_PODS] Installing React-graphics (0.81.0)
[INSTALL_PODS] Installing React-hermes (0.81.0)
[INSTALL_PODS] Installing React-idlecallbacksnativemodule (0.81.0)
[INSTALL_PODS] Installing React-jserrorhandler (0.81.0)
[INSTALL_PODS] Installing React-jsi (0.81.0)
[INSTALL_PODS] Installing React-jsiexecutor (0.81.0)
[INSTALL_PODS] Installing React-jsinspector (0.81.0)
[INSTALL_PODS] Installing React-jsinspectorcdp (0.81.0)
[INSTALL_PODS] Installing React-jsinspectornetwork (0.81.0)
[INSTALL_PODS] Installing React-jsinspectortracing (0.81.0)
[INSTALL_PODS] Installing React-jsitooling (0.81.0)
[INSTALL_PODS] Installing React-jsitracing (0.81.0)
[INSTALL_PODS] Installing React-logger (0.81.0)
[INSTALL_PODS] Installing React-microtasksnativemodule (0.81.0)
[INSTALL_PODS] Installing React-oscompat (0.81.0)
[INSTALL_PODS] Installing React-perflogger (0.81.0)
[INSTALL_PODS] Installing React-performancetimeline (0.81.0)
[INSTALL_PODS] Installing React-rendererconsistency (0.81.0)
[INSTALL_PODS] Installing React-renderercss (0.81.0)
[INSTALL_PODS] Installing React-rendererdebug (0.81.0)
[INSTALL_PODS] Installing React-runtimeexecutor (0.81.0)
[INSTALL_PODS] Installing React-runtimescheduler (0.81.0)
[INSTALL_PODS] Installing React-timing (0.81.0)
[INSTALL_PODS] Installing React-utils (0.81.0)
[INSTALL_PODS] Installing ReactAppDependencyProvider (0.81.0)
[INSTALL_PODS] Installing ReactCodegen (0.81.0)
[INSTALL_PODS] Installing ReactCommon (0.81.0)
[INSTALL_PODS] Installing ReactNativeDependencies (0.81.0)
[INSTALL_PODS] [!] /bin/bash -c 
[INSTALL_PODS] set -e
[INSTALL_PODS] CURRENT_PATH=$(pwd)
[INSTALL_PODS] mkdir -p Headers
[INSTALL_PODS] XCFRAMEWORK_PATH=$(find "$CURRENT_PATH" -type d -name "ReactNativeDependencies.xcframework")
[INSTALL_PODS] HEADERS_PATH=$(find "$XCFRAMEWORK_PATH" -type d -name "Headers" | head -n 1)
[INSTALL_PODS] # Check if XCFRAMEWORK_PATH is empty
[INSTALL_PODS] if [ -z "$XCFRAMEWORK_PATH" ]; then
[INSTALL_PODS]   echo "ERROR: XCFRAMEWORK_PATH is empty."
[INSTALL_PODS]   exit 0
[INSTALL_PODS] fi
[INSTALL_PODS] # Check if HEADERS_PATH is empty
[INSTALL_PODS] if [ -z "$HEADERS_PATH" ]; then
[INSTALL_PODS]   echo "ERROR: HEADERS_PATH is empty."
[INSTALL_PODS]   exit 0
[INSTALL_PODS] fi
[INSTALL_PODS] cp -R "$HEADERS_PATH/" Headers
[INSTALL_PODS] mkdir -p framework/packages/react-native
[INSTALL_PODS] cp -R "$XCFRAMEWORK_PATH/.." framework/packages/react-native/
[INSTALL_PODS] find "$XCFRAMEWORK_PATH/.." -type f -exec rm {} +
[INSTALL_PODS] find "$CURRENT_PATH" -type d -empty -delete
[INSTALL_PODS] cp: framework/packages/react-native/..: File exists
[INSTALL_PODS] 
Error: pod install exited with non-zero code: 1
    at ChildProcess.completionListener (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/spawn-async/build/spawnAsync.js:42:23)                                                                                                                       
    at Object.onceWrapper (node:events:633:26)
    at ChildProcess.emit (node:events:518:28)
    at maybeClose (node:internal/child_process:1101:16)
    at Socket.<anonymous> (node:internal/child_process:456:11)
    at Socket.emit (node:events:518:28)
    at Pipe.<anonymous> (node:net:346:12)
    ...
    at spawnAsync (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/spawn-async/build/spawnAsync.js:7:23)
    at spawn (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/turtle-spawn/dist/index.js:16:47)
    at installPods (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/ios/pod.js:12:50)
    at runInstallPodsAsync (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/builders/ios.js:221:70)                                                                                                                                 
    at /Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/builders/ios.js:75:19
    at BuildContext.runBuildPhase (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/context.js:121:34)                                                                                                                               
    at buildAsync (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/builders/ios.js:74:19)
    at async runBuilderWithHooksAsync (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/builders/common.js:12:13)                                                                                                                    
    at async Object.iosBuilder (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/@expo/build-tools/dist/builders/ios.js:34:16)                                                                                                                              
    at async buildIosAsync (/Users/sultanmyrza/.npm/_npx/a4ff5c16beb6b833/node_modules/eas-cli-local-build-plugin/dist/ios.js:44:12)                                                                                                                                  
[CLEAN_UP_CREDENTIALS] Destroying keychain - /var/folders/9v/9g8b3wjd5cn8j3l9z__8mfx40000gn/T/eas-build-c5d3db93-0dd4-4f3d-a825-035179953425.keychain                                                                                                                 
[CLEAN_UP_CREDENTIALS] Removing provisioning profile

Build failed
Unknown error. See logs of the Install pods build phase for more information.
npx -y eas-cli-local-build-plugin@1.0.171 eyJqb2IiOnsidHlwZSI6Im1hbmFnZWQiLCJwbGF0Zm9ybSI6ImlvcyIsInByb2plY3RBcmNoaXZlIjp7InR5cGUiOiJQQVRIIiwicGF0aCI6Ii92YXIvZm9sZGVycy85di85ZzhiM3dqZDVjbjhqM2w5el9fOG1meDQwMDAwZ24vVC9lYXMtY2xpLWaWxkUHJvZmlsZSI6ImRldmVsb3BtZW50IiwiZ2l0Q29tbWl0SGFzaCI6ImQxOGQ3NzUzMDM2NzRiNzQ0ZWIwY2IwNjJiNmVmMDM4MjExYWMyYTMiLCJnaXRDb21taXRNZXNzYWdlIjoieWFybiBjcmVhdGUgZXhwby1hcHAgLS10ZW1wbGF0ZSBkZWZhdWx0QG5leHQiLCJpc0dpdFdvcmtpbmdUcmVlRGlydHkiOnRydWUsInVzZXJuYW1lIjoic3VsdGFubXlyemEiLCJydW5XaXRoTm9XYWl0RmxhZyI6ZmFsc2UsInJ1bkZyb21DSSI6ZmFsc2UsImRldmVsb3BtZW50Q2xpZW50Ijp0cnVlLCJyZXF1aXJlZFBhY2thZ2VNYW5hZ2VyIjoieWFybiIsInNpbXVsYXRvciI6ZmFsc2V9fQ== exited with non-zero code: 1                                       
    Error: build command failed.
```