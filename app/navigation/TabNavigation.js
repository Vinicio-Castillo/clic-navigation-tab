import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Main/HomeScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import BuscarScreen from '../screens/Main/BuscarScreen';
import PerfilScreen from '../screens/Main/PerfilScreen';
import CarritoScreen from '../screens/Main/CarritoScreen';
import FavoritosScreen from '../screens/Main/FavoritosScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home': 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }else if(route.name==='Buscar'){
            iconName = focused ? 'search' :'search-outline'
          }else if(route.name==='Favoritos'){
            iconName = focused ? 'heart' :'heart-outline'
          }else if(route.name==='Carrito'){
            iconName = focused ? 'cart' :'cart-outline'
          }else if(route.name==='Perfil Usuario'){
            iconName = focused ? 'person' :'person-outline'
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'skyblue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={BuscarScreen}/>
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Carrito" component={CarritoScreen} />
      <Tab.Screen name="Perfil Usuario" component={PerfilScreen} />
      
      
    </Tab.Navigator>
  );
}
