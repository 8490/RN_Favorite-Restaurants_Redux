import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Favorites, Restaurants } from "./pages";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="FavoritePage" component={Favorites} />
        <Tab.Screen name="RestaurantPage" component={Restaurants} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}