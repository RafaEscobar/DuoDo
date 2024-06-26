import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SelectAvatar } from '../screens/auth/SelectAvatar';
import { DashboardStack } from './DashboardStack';

const Stack = createNativeStackNavigator();

export const SelectedStackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="SelectAvatar" component={SelectAvatar} options={{ headerShown: false}} />
        <Stack.Screen name="DashboardStack" component={DashboardStack} options={{ headerShown: false}}  />
    </Stack.Navigator>
  );
}