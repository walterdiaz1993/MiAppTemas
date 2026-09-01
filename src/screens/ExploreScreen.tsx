import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Card } from '../components/Card';
import { CustomButton } from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  iconName: keyof typeof Ionicons.glyphMap;
  badge: string;
  category: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Diseño React Native',
    description: 'Aprende a construir interfaces nativas dinámicas con componentes modulares y estilos limpios.',
    iconName: 'code-slash',
    badge: 'Mobile',
    category: 'Desarrollo',
  },
  {
    id: '2',
    title: 'Navegación por Pestañas',
    description: 'Organiza la estructura de tu aplicación de forma intuitiva con React Navigation Bottom Tabs.',
    iconName: 'compass-outline',
    badge: 'UX / UI',
    category: 'Navegación',
  },
  {
    id: '3',
    title: 'Context API & Estados',
    description: 'Gestiona estados globales de tema (Claro/Oscuro) sin prop-drilling utilizando React Context.',
    iconName: 'hardware-chip-outline',
    badge: 'Estado',
    category: 'Arquitectura',
  },
  {
    id: '4',
    title: 'Iconos y Tipografía',
    description: 'Integra fácilmente miles de vectores de alta calidad con @expo/vector-icons en tus componentes.',
    iconName: 'color-wand-outline',
    badge: 'Assets',
    category: 'Diseño',
  },
  {
    id: '5',
    title: 'Rendimiento y Animaciones',
    description: 'Saca el máximo provecho de react-native-reanimated para transiciones fluidas a 60 FPS.',
    iconName: 'rocket-outline',
    badge: 'Optimizado',
    category: 'Rendimiento',
  },
];

export const ExploreScreen: React.FC = () => {
  const { colors } = useTheme();

  const handleCardPress = (item: GalleryItem) => {
    Alert.alert(item.title, `Categoría: ${item.category}\n\n${item.description}`);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.subtitle, { color: colors.primary }]}>
          GALERÍA DE CARDS
        </Text>
        <Text style={[styles.title, { color: colors.text }]}>
          Explorar Componentes
        </Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          Colección de tarjetas adaptadas al tema con diferentes tipos de iconos y atributos.
        </Text>
      </View>

      {GALLERY_ITEMS.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          iconName={item.iconName}
          badgeText={item.badge}
          onPress={() => handleCardPress(item)}
        >
          <View style={styles.cardActions}>
            <CustomButton
              title="Ver Detalles"
              variant="tertiary"
              iconName="arrow-forward"
              iconPosition="right"
              style={styles.actionBtn}
              onPress={() => handleCardPress(item)}
            />
          </View>
        </Card>
      ))}
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
  cardActions: {
    marginTop: 8,
    alignItems: 'flex-end',
  },
  actionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginVertical: 0,
  },
});
