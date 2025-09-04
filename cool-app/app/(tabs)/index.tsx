import { StyleSheet } from 'react-native';

import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView, { WebViewMessageEvent } from 'react-native-webview';

export default function HomeScreen() {
  const webViewRef = useRef<WebView>(null);
  const webViewUri = process.env.EXPO_PUBLIC_WEB_VIEW_URL;
  const marginBottom = useBottomTabOverflow();
  const [lastMessageFromWeb, setLastMessageFromWeb] = useState<string>('No messages yet');

  const borderColor = useThemeColor({}, 'icon');

  const handleOnMessage = (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      setLastMessageFromWeb(data.message || 'Unknown message');
    } catch (error) {
      console.error('[TabWebView] Failed to parse message: ', error);
    }
  };

  const sendMessageToWeb = () => {
    const message = `Hello from React Native! ${new Date().toLocaleTimeString()}`;
    webViewRef.current?.postMessage(JSON.stringify({ message }));
  };

  return (
    <SafeAreaView style={[styles.container, { marginBottom }]} edges={['top']}>
      {/* React Native Row */}
      <ThemedView style={styles.reactNativeRow}>
        <ThemedText type="title">React Native</ThemedText>
        <ThemedButton onPress={sendMessageToWeb}>
          <ThemedText>Send Message to WebView</ThemedText>
        </ThemedButton>
        <ThemedView style={[styles.messageArea, { borderColor }]}>
          <ThemedText>Last message from WebView:</ThemedText>
          <ThemedText>{lastMessageFromWeb}</ThemedText>
        </ThemedView>
      </ThemedView>

      {/* WebView Row */}
      <ThemedView style={styles.webviewRow}>
        <WebView
          ref={webViewRef}
          source={{ uri: webViewUri }}
          style={styles.webview}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          webviewDebuggingEnabled={__DEV__}
          onMessage={handleOnMessage}
        />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reactNativeRow: {
    flex: 1,
    padding: 20,
    gap: 8,
  },
  webviewRow: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
  messageArea: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
});
