import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AllTask } from '../../screens/create/AllTask';
import { AddTask } from '../../screens/create/AddTask';

const Stack = createNativeStackNavigator();

export const TaskStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="AllTask" component={AllTask} options={{ headerShown: false }} />
        <Stack.Screen name="AddTask" component={AddTask} options={{ presentation: 'modal', headerShown: false }} />
    </Stack.Navigator>
  );
}
