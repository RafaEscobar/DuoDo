import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/dashboard/Dashboard';
import { Profile } from '../screens/profile/Profile';
import { Calendar } from '../screens/calendar/Calendar';
import { Create } from '../screens/create/create';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Inicio' component={Dashboard} />
            <Tab.Screen name='Calendario' component={Calendar} />
            <Tab.Screen name='Creación' component={Create} />
            <Tab.Screen name='Info' component={Profile} />
        </Tab.Navigator>
    )
}