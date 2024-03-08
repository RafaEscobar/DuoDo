import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Image } from 'expo-image';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const GroupChat = ({
    id,
    name,
    avatar,
    message,
    hours,
    notification,
}: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    };

    return (
        
        <View style={tw`bg-[#a8a9f9] w-90 mb-1 mt-2 rounded-xl`}>
            <View style={tw`ml-3 flex-row items-center justify-between p-2`}>
                <View style={tw`flex justify-between mt-2`}>
                    <Text style={[tw`text-2xl`, { fontFamily: "Poppins_700Bold" }]}>{name}</Text>
                    <Text style={[tw`text-lg w-60`, { fontFamily: "Poppins_400Regular" }]}>{message}</Text>
                    <Text style={[tw`text-base opacity-50`, { fontFamily: "Poppins_400Regular" }]}>Integrantes: <Text style={tw`text-sky-700 text-base`}>{notification}<Text /></Text></Text>
                </View>
                <View style={tw`flex overflow-hidden flex-row justify-end`}>
                    <Image source={avatar} style={tw`h-15 w-15 rounded-full`} />
                </View>
            </View>
        </View>

    )
}