import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from "expo-image";
import { SwiperComponent } from '../../component/SwiperComponent';

export const Create = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={tw`flex ml-8 mt-10 sm:ml-4 sm:mt-5`}>
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
                <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Teams</Text>
            </View>
            <View>
                <SwiperComponent />
            </View>
            <View style={tw`flex ml-8 mt-6 sm:ml-4 sm:mt-5`}>
                <View>
                    <View>
                        <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                    </View>
                    <View style={tw`flex justify-end pl-50 items-center -mt-6`} >
                        <Text style={[tw`text-base opacity-50`, { fontFamily: "Poppins_400Regular", fontWeight: 'bold' }]}>Agregar Tareas</Text>
                    </View>
                </View>
                <View style={tw`bg-orange-300 w-84 p-3 rounded-2xl mt-2`}>
                    <Text style={[tw`text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Tarea 1</Text>
                    <Text style={[tw`w-60`, { fontFamily: "Poppins_400Regular" }]}>Hacer un slide que me permita mostrar info</Text>
                    <Text style={[tw`text-base opacity-50`, { fontFamily: "Poppins_700Bold" }]}>9:00 am</Text>
                </View>
                <View style={tw`bg-orange-300 w-84 p-3 rounded-2xl mt-2`}>
                    <Text style={[tw`text-xl`, { fontFamily: "Poppins_700Bold" }]}>Tarea 2</Text>
                    <Text style={[tw`w-60`, { fontFamily: "Poppins_400Regular" }]}>Hacer un slide que me permita mostrar info</Text>
                    <Text style={[tw`text-base opacity-50`, { fontFamily: "Poppins_700Bold" }]}>9:00 am</Text>
                </View>
                <View style={tw`bg-orange-300 w-84 p-3 rounded-2xl mt-2`}>
                    <Text style={[tw`text-xl`, { fontFamily: "Poppins_700Bold" }]}>Tarea 3</Text>
                    <Text style={[tw`w-60`, { fontFamily: "Poppins_400Regular" }]}>Hacer un slide que me permita mostrar info</Text>
                    <Text style={[tw`text-base opacity-50`, { fontFamily: "Poppins_700Bold" }]}>9:00 am</Text>
                </View>
            </View>
        </View>
    )
}