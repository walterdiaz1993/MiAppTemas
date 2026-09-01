// src/components/Card.tsx
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export type Props = {
  title: string;
  icon?: string; // nombre de icono de Ionicons, ej: 'star', 'heart'
  iconName?: keyof typeof Ionicons.glyphMap | string;
  description?: string;
  badgeText?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: ViewStyle;
};

export default function Card({
  title,
  icon,
  iconName,
  description,
  badgeText,
  onPress,
  children,
  style,
}: Props) {
  const { colors } = useTheme();
  const activeIcon = icon || iconName;

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
      {/* Icono en la parte superior */}
      {activeIcon && (
        <Ionicons
          name={activeIcon as any}
          size={36}
          color={colors.primary}
          style={styles.icon}
        />
      )}

      {/* Titulo */}
      <View style={styles.titleRow}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        {badgeText && (
          <View style={[styles.badge, { backgroundColor: colors.surface }]}>
            <Text style={[styles.badgeText, { color: colors.primary }]}>
              {badgeText}
            </Text>
          </View>
        )}
      </View>

      {/* Descripcion */}
      {description ? (
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>
      ) : null}

      {children}
    </ContainerComponent>
  );
}

export { Card };

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 20,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: { marginBottom: 10 },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 6, textAlign: 'center' },
  description: { fontSize: 14, textAlign: 'center', lineHeight: 20 },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginLeft: 8,
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
