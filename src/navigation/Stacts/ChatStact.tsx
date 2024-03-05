import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ChatMessage } from '../../screens/chat/ChatMessage';
import { TopTapGroup } from './TopTapGroup';

const Stack = createNativeStackNavigator();

export const ChatStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="TopTapGroup" component={TopTapGroup} options={{ headerShown: false }} />
        <Stack.Screen name="ChatMessage" component={ChatMessage} options={{ presentation: 'modal', headerShown: false }} />
    </Stack.Navigator>
  );
}
