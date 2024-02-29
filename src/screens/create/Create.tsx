import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from "expo-image";

export const Create = ({ navigation: { navigate }, route }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={tw`flex ml-3 mt-10 sm:ml-4 sm:mt-5`}>
                <View>
                    <View>
                        <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Alexis</Text>
                        <Text style={[tw`text-xl opacity-50`, { fontFamily: "Poppins_400Regular" }]}>Desarrollador Web</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row-reverse items-center -top-15 -left-5 gap-2`}>
                    <Ionicons name="notifications" size={25} color="black" style={tw`bg-orange-400 p-2 rounded-2xl mb-4`} />
                    <Image
                        style={tw`w-15 h-15 rounded-full`}
                        source="http://github.com/AlexisSM377.png"
                    />
                </View>
            </View>
            <View style={tw`flex ml-3 sm:ml-4 sm:mt-5`}>
                <View>
                    <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                </View>
            </View>
        </View>
    )
}
