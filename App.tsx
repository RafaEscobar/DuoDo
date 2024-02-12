import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigation";
import { StackNavigation } from './src/navigation/StackNavigation';
import { AuthProvider } from './src/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}