import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { Text } from 'react-native';
import { BottomTabNavigator } from './src/navigation/BottomTabNavigation';

export default function App() {
  const { token, setAuthToken }: any = useContext(AuthContext);

  if (token === '') {
    return <Text>Loading...</Text>;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        {token ? <BottomTabNavigator /> : <StackNavigation />}
      </NavigationContainer>
    </AuthProvider>
  );
}