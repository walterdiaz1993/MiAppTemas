import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  iconName,
  iconPosition = 'left',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  const { colors, isDark } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: colors.surface,
          borderWidth: 1,
          borderColor: colors.border,
        };
      case 'tertiary':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: colors.border,
        };
      case 'primary':
      default:
        return {
          backgroundColor: colors.primary,
        };
    }
  };

  const getTextStyle = (): TextStyle => {
    switch (variant) {
      case 'secondary':
        return {
          color: colors.text,
        };
      case 'tertiary':
        return {
          color: colors.textSecondary,
        };
      case 'primary':
      default:
        return {
          color: isDark ? '#121212' : '#FFFFFF',
        };
    }
  };

  const getIconColor = (): string => {
    return getTextStyle().color as string;
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.button,
        getButtonStyle(),
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={getIconColor()} size="small" />
      ) : (
        <View style={styles.contentContainer}>
          {iconName && iconPosition === 'left' && (
            <Ionicons
              name={iconName}
              size={20}
              color={getIconColor()}
              style={styles.leftIcon}
            />
          )}
          <Text style={[styles.text, getTextStyle(), textStyle]}>
            {title}
          </Text>
          {iconName && iconPosition === 'right' && (
            <Ionicons
              name={iconName}
              size={20}
              color={getIconColor()}
              style={styles.rightIcon}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
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
