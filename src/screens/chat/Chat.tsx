import React from 'react'
import tw from 'twrnc';
import { View, Text, TouchableOpacity } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { ChatList } from '../../component/ChatList';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const Chat = ({ navigation: { navigate }, route }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`bg-[#271C3A] h-full`}>
            <View style={tw`ml-4.5`}>
                <ChatList navigate={navigate}/>
            </View>
        </View>
    )
}

