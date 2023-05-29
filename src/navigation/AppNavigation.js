import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import BienvenidoScreen from '../screens/BienvenidoScreen';
import NotasScreen from '../screens/NotasScreen';
import CurasScreen from '../screens/CurasScreen';
import ProfileScreen from '../profile/ProfileScreen';
import EditProfileScreen from '../profile/EditProfileScreen';
import LoginScreen from '../autenticacion/LoginScreen';
import RegisterScreen from '../autenticacion/RegisterScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        let iconName;

        if (route.name === 'Notas') {
          iconName = 'md-document-text';
        } else if (route.name === 'Curas') {
          iconName = 'md-medkit';
        } else if (route.name === 'Perfil') {
          iconName = 'md-person';
        } else if (route.name === 'Home') {
          iconName = 'md-home';
        }

        const iconColor = focused ? 'green' : color;

        return <Icon name={iconName} size={size} color={iconColor} />;
      },
      tabBarActiveTintColor: 'green'
    })}
  >
    <Tab.Screen name="Home" component={BienvenidoScreen} />
    <Tab.Screen name="Notas" component={NotasScreen} />
    <Tab.Screen name="Curas" component={CurasScreen} />
    <Tab.Screen name="Perfil" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigation = () => {
  const isLoggedIn = true; // Variable que indica si el usuario está autenticado o no

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Main" component={MainStack} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registro" component={RegisterScreen} />
            <Stack.Screen name="EditPerfil" component={EditProfileScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={BienvenidoScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
