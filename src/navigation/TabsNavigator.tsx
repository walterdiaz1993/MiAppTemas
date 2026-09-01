import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { HomeScreen } from '../screens/HomeScreen';
import { ExploreScreen } from '../screens/ExploreScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

export type RootTabParamList = {
  Inicio: undefined;
  Explorar: undefined;
  Ajustes: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabsNavigator: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'help-circle-outline';

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explorar') {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === 'Ajustes') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.cardBackground,
          borderTopColor: colors.border,
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
        headerStyle: {
          backgroundColor: colors.cardBackground,
          elevation: 2,
        },
        headerTitleStyle: {
          color: colors.text,
          fontWeight: '700',
        },
        headerTintColor: colors.primary,
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen
        name="Explorar"
        component={ExploreScreen}
        options={{ title: 'Explorar' }}
      />
      <Tab.Screen
        name="Ajustes"
        component={SettingsScreen}
        options={{ title: 'Ajustes' }}
      />
    </Tab.Navigator>
  );
};
