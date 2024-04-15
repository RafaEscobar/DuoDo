import { AddTask } from '../screens/create/AddTask';
import { BottomTabNavigation } from './BottomTabNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login/Login';
import { Calendar, Profile } from '../screens';
import React from 'react';
import { ChatMessage } from '../screens/chat/ChatMessage';
import { GroupMessage } from '../screens/chat/GroupMessage';
import { DetailsWorkspace } from '../screens/create/DetailsWorkspace';
import { Members } from '../screens/create/Members';
import { AddWorkspace } from '../screens/create/AddWorkspace';
import { Edit } from '../screens/profile/Edit';
import { List } from '../screens/profile/friends/List';
import { Add } from '../screens/profile/friends/Add';
import { Manage } from '../screens/profile/Manage';
import App from '../../App';
import { CollaborationMessage } from '../screens/messages/CollaborationMessage';

const Stack = createNativeStackNavigator();

export const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Edit" component={Edit} options={{ headerShown: false }} />
      <Stack.Screen name="ListFriends" component={List} options={{ headerShown: false }} />
      <Stack.Screen name="AddFriend" component={Add} options={{ headerShown: false }} />
      <Stack.Screen name="Manage" component={Manage} options={{ headerShown: false }} />
      <Stack.Screen name="Calendar" component={Calendar} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Add" component={AddTask} options={{ headerShown: false }} />
      <Stack.Screen name="AddWorkspace" component={AddWorkspace} options={{ headerShown: false }} />
      <Stack.Screen name="ChatMessage" component={ChatMessage} options={{ headerShown: false }} />
      <Stack.Screen name="GroupMessage" component={GroupMessage} options={{ presentation: "modal", headerShown: false }} />
      <Stack.Screen name="DetailsWorkspace" component={DetailsWorkspace} options={{ presentation: "modal", headerShown: false }} />
      <Stack.Screen name="Members" component={Members} options={{ presentation: "modal", headerShown: false }} />
      <Stack.Screen name="CollaborationMessage" component={CollaborationMessage} options={{ presentation: "modal", headerShown: false }} />
    </Stack.Navigator>
  );
}
