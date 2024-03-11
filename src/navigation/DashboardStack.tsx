import { AddTask } from '../screens/create/AddTask';
import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login/Login';
import { Profile } from '../screens';
import React from 'react';
import { ChatMessage } from '../screens/chat/ChatMessage';
import { GroupMessage } from '../screens/chat/GroupMessage';
import { DetailsWorkspace } from '../screens/create/DetailsWorkspace';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false}}  />
        <Stack.Screen name="Profile" component={Profile}  />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={AddTask} options={{ headerShown: false }} />
        <Stack.Screen name="ChatMessage" component={ChatMessage} options={{ headerShown: false }} />
        <Stack.Screen name="GroupMessage" component={GroupMessage} options={{ presentation:"modal", headerShown: false }} />
        <Stack.Screen name="DetailsWorkspace" component={DetailsWorkspace} options={{ presentation:"modal", headerShown: false }} />
    </Stack.Navigator>
  );
}
