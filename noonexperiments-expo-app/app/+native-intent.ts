import { getShareExtensionKey } from 'expo-share-intent';
import { Platform } from 'react-native';

export function redirectSystemPath({ path, initial }: { path: string; initial: string }) {
  // issue: when sharing from photos app to expo app redirectSystemPath get called on iOS but not on Android
  console.log(`(${Platform.OS}) redirectSystemPath, path: ${path}, initial: ${initial}`);

  try {
    if (path.includes(`dataUrl=${getShareExtensionKey()}`)) {
      // redirect to the ShareIntent Screen to handle data with the hook
      console.debug('[expo-router-native-intent] redirect to ShareIntent screen');
      return '/intent';
    }
    return path;
  } catch {
    return '/';
  }
}
