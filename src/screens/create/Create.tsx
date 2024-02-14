import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';



export const Create = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={tw`flex ml-8 mt-10 sm:ml-4 sm:mt-5`}>
            <View>
                <View>
                    <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Alexis</Text>
                    <Text style={[tw`text-xl opacity-50`, { fontFamily: "Poppins_400Regular" }]}>Desarrollador Web</Text>
                </View>
            </View>
            <View style={tw`flex justify-end pl-50 items-center -top-15`}>
                <Ionicons name="notifications" size={30} color="black" style={tw`bg-orange-400 p-2 rounded-2xl`} />
            </View>
            <View>
                <Text>En progreso</Text>
            </View>
        </SafeAreaView>
    )
}