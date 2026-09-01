// src/components/CustomButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, View } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export type Variant = 'primary' | 'secondary' | 'tertiary';

export type Props = {
  title: string;
  onPress: () => void;
  variant?: Variant;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  variant = 'primary',
  iconName,
  iconPosition = 'left',
  style,
  textStyle,
  disabled,
}: Props) {
  const { colors } = useTheme();

  const getBackground = (): string => {
    if (variant === 'primary') return colors.primary;
    if (variant === 'secondary') return colors.surface;
    return 'transparent'; // tertiary
  };

  const getTextColor = (): string => {
    if (variant === 'primary') return '#FFFFFF';
    if (variant === 'secondary') return colors.text;
    return colors.primary; // tertiary
  };

  const getBorder = (): ViewStyle => {
    if (variant === 'tertiary') return { borderWidth: 1.5, borderColor: colors.primary };
    if (variant === 'secondary') return { borderWidth: 1, borderColor: colors.border };
    return {};
  };

  return (
    <TouchableOpacity
      style={[
        styles.base,
        { backgroundColor: getBackground() },
        getBorder(),
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.75}
    >
      <View style={styles.content}>
        {iconName && iconPosition === 'left' && (
          <Ionicons
            name={iconName}
            size={20}
            color={getTextColor()}
            style={styles.leftIcon}
          />
        )}
        <Text style={[styles.label, { color: getTextColor() }, textStyle]}>
          {title}
        </Text>
        {iconName && iconPosition === 'right' && (
          <Ionicons
            name={iconName}
            size={20}
            color={getTextColor()}
            style={styles.rightIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

export { CustomButton };

const styles = StyleSheet.create({
  base: {
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});
