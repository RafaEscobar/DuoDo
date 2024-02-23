import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from '../screens/login/Landing';
import { Login } from '../screens/login/Login';
import { ResetPassword } from '../screens/login/ResetPassword';
import { SignUp } from '../screens/login/SignUp';
import React from 'react';
import { BottomTabNavigation } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false}}/>
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false}}  />
    </Stack.Navigator>
  );
}
