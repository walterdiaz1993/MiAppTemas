import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';
import { CustomButton } from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

export const SettingsScreen: React.FC = () => {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.subtitle, { color: colors.primary }]}>
          CONFIGURACIÓN
        </Text>
        <Text style={[styles.title, { color: colors.text }]}>
          Ajustes de Tema
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Personaliza la apariencia visual de la aplicación según tus preferencias.
        </Text>
      </View>

      <Card title="Preferencia de Tema" iconName="color-palette-outline">
        <View style={styles.row}>
          <View style={styles.labelContainer}>
            <Ionicons
              name={isDark ? 'moon' : 'sunny'}
              size={24}
              color={colors.primary}
              style={styles.iconMargin}
            />
            <View>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                {isDark ? 'Modo Oscuro' : 'Modo Claro'}
              </Text>
              <Text
                style={[styles.optionSubtitle, { color: colors.textSecondary }]}
              >
                {isDark
                  ? 'Fondo oscuro con texto claro'
                  : 'Fondo claro con texto oscuro'}
              </Text>
            </View>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#CBD5E1', true: colors.primary }}
            thumbColor={isDark ? '#FFFFFF' : '#F8FAFC'}
          />
        </View>
      </Card>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Valores Actuales del Tema
        </Text>

        <Card title="Paleta de Colores Activa" iconName="eye-outline">
          <View style={styles.colorRow}>
            <View
              style={[
                styles.colorCircle,
                { backgroundColor: colors.primary },
              ]}
            />
            <Text style={[styles.colorLabel, { color: colors.text }]}>
              Primario: <Text style={styles.bold}>{colors.primary}</Text>
            </Text>
          </View>

          <View style={styles.colorRow}>
            <View
              style={[
                styles.colorCircle,
                { backgroundColor: colors.background, borderWidth: 1, borderColor: colors.border },
              ]}
            />
            <Text style={[styles.colorLabel, { color: colors.text }]}>
              Fondo: <Text style={styles.bold}>{colors.background}</Text>
            </Text>
          </View>

          <View style={styles.colorRow}>
            <View
              style={[
                styles.colorCircle,
                { backgroundColor: colors.cardBackground, borderWidth: 1, borderColor: colors.border },
              ]}
            />
            <Text style={[styles.colorLabel, { color: colors.text }]}>
              Tarjeta: <Text style={styles.bold}>{colors.cardBackground}</Text>
            </Text>
          </View>
        </Card>
      </View>

      <View style={styles.buttonSection}>
        <CustomButton
          title={isDark ? 'Cambiar a Modo Claro ☀️' : 'Cambiar a Modo Oscuro 🌙'}
          variant="primary"
          onPress={toggleTheme}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  iconMargin: {
    marginRight: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  optionSubtitle: {
    fontSize: 13,
    marginTop: 2,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  colorCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 12,
  },
  colorLabel: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
  buttonSection: {
    marginTop: 20,
  },
});

export default SettingsScreen;

