import React from 'react'
import tw from 'twrnc';
import { View, Text } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { ChatList } from '../../component/ChatList';

export const Chat = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`bg-neutral-300`}>
            <View style={tw`ml-3.5`}>
                <Text style={[tw`text-sm`, { fontFamily: "Poppins_700Bold" }]}>Aqui va ir el buscador para que buscar algun chat</Text>
                <ChatList />
            </View>
        </View>
    )
}

