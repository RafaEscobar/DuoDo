import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';

export const Members = ({ navigation: { navigate } }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const members = [
        {
            "id": 1,
            "name": "Alejandro",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Administrador"
        },
        {
            "id": 2,
            "name": "Juan",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Miembro"
        },
        {
            "id": 3,
            "name": "Pedro",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Miembro"
        }
    ];

    return (
        <SafeAreaView style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex pt-10 ml-4.5 w-90`}>
                <View style={tw`flex flex-row items-end gap-5`}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={30} color="black" style={tw`bg-neutral-300 w-10 h-10 rounded-xl p-1`} />
                    </TouchableOpacity>
                    <Text style={[tw`text-center text-3xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Miembros</Text>
                </View>
                <ScrollView>
                    {members.map((item) => (
                        <View style={tw`flex flex-row items-center mt-3 gap-3 bg-gray-800 p-2 rounded-xl`} key={item.id}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={tw`w-10 h-10 rounded-full ml-2`}
                            />
                            <View>
                                <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                <Text style={[tw`text-white text-base opacity-50`, { fontFamily: "Poppins_400Regular" }]}>{item.role}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}