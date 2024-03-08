import { View, Text, FlatList, ScrollView, SafeAreaView } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import * as Progress from 'react-native-progress';

export const List = () => {

    const slide1 = [
        {
            id: 1,
            title: 'Nombre del equipo 1',
            team: 'Equipo 1',
            avatar: 'http://github.com/AlexisSM377.png',
            image: 'https://kaihatsu-code.com/assets/logo_solid.png'

        },
        {
            id: 2,
            title: 'Nombre del equipo 2',
            team: 'Equipo 2',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 3,
            title: 'Nombre del equipo 3',
            team: 'Equipo 3',
            avatar: 'http://github.com/AlexisSM377.png',
            image: 'https://kaihatsu-code.com/assets/logo_solid.png'
        },
        {
            id: 4,
            title: 'Nombre del equipo 4',
            team: 'Equipo 4',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 5,
            title: 'Nombre del equipo 5',
            team: 'Equipo 5',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 6,
            title: 'Nombre del equipo 6',
            team: 'Equipo 6',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 7,
            title: 'Nombre del equipo 7',
            team: 'Equipo 7',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 8,
            title: 'nombre del equipo 8',
            team: 'Equipo 8',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        }
        ,
        {
            id: 9,
            title: 'Nombre del equipo 9',
            team: 'Equipo 9',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        },
        {
            id: 10,
            title: 'Nombre del equipo 10',
            team: 'Equipo 10',
            avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
            image: 'http://github.com/AlexisSM377.png'
        }
    ];

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView>
            <ScrollView style={tw`h-[90%]`}>
                <View style={tw`flex-row flex-wrap`}>
                    {slide1.map((item) => (
                        <View style={tw`w-1/2 mt-3`} key={item.id}>
                            <View style={tw`bg-[#3C2A5A] w-44 h-44 rounded-2xl `}>
                                <View style={tw`justify-start ml-4 mt-2`}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={tw`w-15 h-15 rounded-full`}
                                    />
                                    <Text style={[tw`text-white mt-1 text-base w-30`, { fontFamily: "Poppins_700Bold" }]}>{item.title}</Text>
                                    <Text style={[tw`text-white opacity-50 text-xs mt-1`, { fontFamily: "Poppins_700Bold" }]}>{item.team}</Text>
                                    <View style={tw`flex flex-row gap-1 items-center mt-3`}>
                                        <Progress.Bar progress={.9} width={100} height={10} color='#0dac4a' borderRadius={20}
                                        />
                                        <Text style={{ fontSize: 12, fontFamily: "Poppins_700Bold" , color: "white"}}>80%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
