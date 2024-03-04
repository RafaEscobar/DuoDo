import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Chat } from '../../screens/chat/Chat';
import { GroupChat } from '../../screens/chat/GroupChat';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

const TopTap = createMaterialTopTabNavigator();

export const TopTapGroup = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <TopTap.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 18,
                    textTransform: 'capitalize',
                    fontFamily: 'Poppins_700Bold',
                    color: '#fff',
                },
                tabBarContentContainerStyle: {
                    backgroundColor: '#271C3A',
                    paddingTop: 20,
                },
            }}
        >
            <TopTap.Screen name="Mensajes" component={Chat} />
            <TopTap.Screen name="Grupos" component={GroupChat} />
        </TopTap.Navigator>
    );
}