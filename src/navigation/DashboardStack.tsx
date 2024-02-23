import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Profile } from '../screens';
import { Login } from '../screens/login/Login';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false}}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} /> 
    </Stack.Navigator>
  );
}
