import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/Home';
import FavoritesScreen from '../pages/Favorites';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import ItemReciept from '../components/itemReciept';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Ionicons name="ios-home" color="black" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: () => (
            <Ionicons name="ios-star" color="black" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();

function Nav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Georgian Cuisine" component={MyTabs} />
      <Stack.Screen name="RECIEPT" component={ItemReciept} />
    </Stack.Navigator>
  );
}

export default Nav;
