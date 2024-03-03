import { AddTask } from '../screens/create/AddTask';
import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login/Login';
import { Profile } from '../screens';
import React from 'react';


const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false}}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={AddTask} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
