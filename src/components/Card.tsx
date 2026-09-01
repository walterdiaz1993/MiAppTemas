import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

interface CardProps {
  title: string;
  description?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  badgeText?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  iconName,
  badgeText,
  onPress,
  children,
  style,
}) => {
  const { colors } = useTheme();

  const ContainerComponent = onPress ? TouchableOpacity : View;

  return (
    <ContainerComponent
      activeOpacity={onPress ? 0.85 : 1}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: colors.cardBackground,
          borderColor: colors.cardBorder,
        },
        style,
      ]}
    >
      <View style={styles.header}>
        {iconName && (
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: colors.surface },
            ]}
          >
            <Ionicons name={iconName} size={24} color={colors.primary} />
          </View>
        )}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
          {badgeText && (
            <View
              style={[
                styles.badge,
                { backgroundColor: colors.surface },
              ]}
            >
              <Text style={[styles.badgeText, { color: colors.primary }]}>
                {badgeText}
              </Text>
            </View>
          )}
        </View>
      </View>

      {description ? (
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>
      ) : null}

      {children && <View style={styles.body}>{children}</View>}
    </ContainerComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  body: {
    marginTop: 12,
  },
});
