import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login/Login';

import React from 'react';
import { Landing } from '../screens/login/Landing';
import { SignUp } from '../screens/login/SignUp';
import { ResetPassword } from '../screens/login/ResetPassword';
import { BottomTabNavigator } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false}}/>
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false}}  />
    </Stack.Navigator>
  );
}
    