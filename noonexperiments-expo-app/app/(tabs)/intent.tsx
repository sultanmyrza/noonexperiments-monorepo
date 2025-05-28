import { useShareIntent } from 'expo-share-intent';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function IntentScreen() {
  const { hasShareIntent, shareIntent, resetShareIntent, error } = useShareIntent();

  const handleResetIntent = () => {
    resetShareIntent();
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="square.and.arrow.up"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Share Intent</ThemedText>
      </ThemedView>

      <ThemedView style={styles.container}>
        <ThemedView style={styles.section}>
          <ThemedText type="subtitle">Status</ThemedText>
          <ThemedText>
            Has Share Intent:{' '}
            <ThemedText type="defaultSemiBold">{hasShareIntent ? 'Yes' : 'No'}</ThemedText>
          </ThemedText>
        </ThemedView>

        {error && (
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Error</ThemedText>
            <ThemedText style={styles.errorText}>{error}</ThemedText>
          </ThemedView>
        )}

        {shareIntent && (
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Share Data</ThemedText>
            <ThemedText>
              Type: <ThemedText type="defaultSemiBold">{shareIntent.type || 'None'}</ThemedText>
            </ThemedText>
            {shareIntent.text && (
              <ThemedText>
                Text: <ThemedText type="defaultSemiBold">{shareIntent.text}</ThemedText>
              </ThemedText>
            )}
            {shareIntent.webUrl && (
              <ThemedText>
                Web URL: <ThemedText type="defaultSemiBold">{shareIntent.webUrl}</ThemedText>
              </ThemedText>
            )}
            {shareIntent.files && shareIntent.files.length > 0 && (
              <ThemedView>
                <ThemedText type="defaultSemiBold">Files:</ThemedText>
                {shareIntent.files.map((file, index) => (
                  <ThemedView key={index} style={styles.fileInfo}>
                    <ThemedText>Name: {file.fileName}</ThemedText>
                    <ThemedText>Type: {file.mimeType}</ThemedText>
                    {file.size && <ThemedText>Size: {(file.size / 1024).toFixed(2)} KB</ThemedText>}
                  </ThemedView>
                ))}
              </ThemedView>
            )}
            {shareIntent.meta && Object.keys(shareIntent.meta).length > 0 && (
              <ThemedView>
                <ThemedText type="defaultSemiBold">Metadata:</ThemedText>
                {Object.entries(shareIntent.meta).map(([key, value]) => (
                  <ThemedText key={key}>
                    {key}: {value}
                  </ThemedText>
                ))}
              </ThemedView>
            )}
          </ThemedView>
        )}

        {hasShareIntent && (
          <ThemedView style={styles.section}>
            <ThemedText type="link" onPress={handleResetIntent}>
              Reset Share Intent
            </ThemedText>
          </ThemedView>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    gap: 16,
  },
  section: {
    gap: 8,
  },
  fileInfo: {
    paddingLeft: 16,
    gap: 4,
  },
  errorText: {
    color: '#ff4444',
  },
});
