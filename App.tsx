import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigation";
import { StackNavigation } from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />

      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
}