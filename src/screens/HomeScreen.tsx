import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { CustomButton } from '../components/CustomButton';
import { Card } from '../components/Card';

export const HomeScreen: React.FC = () => {
  const { colors, isDark } = useTheme();
  const [clickCount, setClickCount] = useState<number>(0);

  const handleButtonPress = (variant: string) => {
    setClickCount((prev) => prev + 1);
    Alert.alert(
      '¡Botón Presionado!',
      `Has presionado la variante: ${variant.toUpperCase()}\nTotal de clics: ${clickCount + 1}`
    );
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerSection}>
        <Text style={[styles.welcomeSubtitle, { color: colors.primary }]}>
          DEMOSTRACIÓN DE TEMAS
        </Text>
        <Text style={[styles.welcomeTitle, { color: colors.text }]}>
          Inicio & Componentes
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Modo actual: <Text style={{ fontWeight: '700', color: colors.text }}>{isDark ? 'Oscuro 🌙' : 'Claro ☀️'}</Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Variantes de Botones
        </Text>
        <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
          Componentes CustomButton adaptados al tema:
        </Text>

        <CustomButton
          title="Botón Primario"
          variant="primary"
          iconName="flash"
          onPress={() => handleButtonPress('primary')}
        />

        <CustomButton
          title="Botón Secundario"
          variant="secondary"
          iconName="star"
          onPress={() => handleButtonPress('secondary')}
        />

        <CustomButton
          title="Botón Terciario"
          variant="tertiary"
          iconName="layers-outline"
          onPress={() => handleButtonPress('tertiary')}
        />
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Tarjetas de Ejemplo
        </Text>

        <Card
          title="Tarjeta Informativa"
          description="Esta es una tarjeta reutilizable que reacciona automáticamente al contexto de tema."
          iconName="information-circle"
          badgeText="Nuevo"
        >
          <Text style={[styles.cardFootnote, { color: colors.textSecondary }]}>
            Contadores de interacción actual: {clickCount} clics
          </Text>
        </Card>

        <Card
          title="Resumen del Sistema"
          description="Los colores de fondo, bordes, sombras y tipografía cambian sin reiniciar la aplicación."
          iconName="color-palette"
          onPress={() => Alert.alert('Tarjeta', 'Has tocado la tarjeta de Resumen')}
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
  headerSection: {
    marginBottom: 24,
  },
  welcomeSubtitle: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 6,
  },
  description: {
    fontSize: 15,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  cardFootnote: {
    fontSize: 13,
    fontStyle: 'italic',
  },
});
