import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Calendar, Create, Dashboard, Profile } from '../screens';

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