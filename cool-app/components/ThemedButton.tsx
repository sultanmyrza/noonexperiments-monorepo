import { StyleSheet, TouchableOpacity, type TouchableOpacityProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightBorderColor?: string;
  darkBorderColor?: string;
  lightBackgroundColor?: string;
  darkBackgroundColor?: string;
};

export function ThemedButton({ 
  style, 
  lightBorderColor, 
  darkBorderColor, 
  lightBackgroundColor, 
  darkBackgroundColor, 
  ...otherProps 
}: ThemedButtonProps) {
  const borderColor = useThemeColor({ light: lightBorderColor, dark: darkBorderColor }, 'icon');
  const backgroundColor = useThemeColor({ light: lightBackgroundColor, dark: darkBackgroundColor }, 'background');

  return (
    <TouchableOpacity 
      style={[styles.button, { borderColor, backgroundColor }, style]} 
      {...otherProps} 
    />
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
