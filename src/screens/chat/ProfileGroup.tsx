import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Image } from "expo-image";
import { AntDesign } from '@expo/vector-icons';
import { Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const ProfileGroup = () => {

    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex pt-14`}>
                <View style={tw`ml-2.5`}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={30} color="black" style={tw`bg-slate-100 w-10 h-10 rounded-xl p-1 `} />
                    </TouchableOpacity>
                </View>

                <View style={tw`flex items-center justify-center mt-10`}>
                    <Image
                        source="https://kaihatsu-code.com/assets/logo_solid.png"
                        style={tw`w-35 h-35 rounded-full border-2 border-sky-300`}
                    />
                    <Text style={[tw`text-3xl text-white mt-3`, { fontFamily: "Poppins_700Bold" }]}>Nombre del equipo</Text>
                    <Text style={[tw`text-lg text-white`, { fontFamily: "Poppins_600SemiBold" }]}>Integrantes</Text>
                </View>
            </View>
        </View>
    )
}