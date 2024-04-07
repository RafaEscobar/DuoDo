import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { AllTask } from '../../screens/create/AllTask';
import { Workspace } from '../../screens/create/Workspace';

const TopTap = createMaterialTopTabNavigator();

export const TopTapChat = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <TopTap.Navigator
            screenOptions={({ route }) => ({
                tabBarLabelStyle: {
                    fontSize: 20,
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins_700Bold',
                    color: '#58b4ff',
                },
                tabBarContentContainerStyle: {
                    backgroundColor: '#271C3A',
                    paddingTop: 20,
                },
            })}
        >
            <TopTap.Screen name="Task" component={AllTask} />
            <TopTap.Screen name="Workspace" component={Workspace} />
        </TopTap.Navigator>
    );
}