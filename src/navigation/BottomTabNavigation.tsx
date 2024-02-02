import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/dashboard/Dashboard';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Dashboard} />
        </Tab.Navigator>
    )
}