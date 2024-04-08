import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';

export const Notification = ({ navigation }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const notifications = [
        {
            id: 1,
            title: 'Nueva notificación',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'Hace 5 minutos',
            image: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        },
        {
            id: 2,
            title: 'Nueva notificación',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'Hace 10 minutos',
            image: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        },
        {
            id: 3,
            title: 'Nueva notificación',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'Hace 15 minutos',
            image: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        },
        {
            id: 4,
            title: 'Nueva notificación',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: 'Hace 20 minutos',
            image: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        }
    ];

    return (
        <SafeAreaView style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex ml-4 mt-12 sm:ml-4 sm:mt-5 w-90`}>
                <View style={tw`flex flex-row items-center border`}>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigation')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
                        <AntDesign name="close" size={30} color="white" style={tw`top-1`} />
                    </TouchableOpacity>
                    <Text style={[tw`text-white text-3xl pl-15`, {fontFamily: 'Poppins_700Bold'}]}>Novedades</Text>
                </View>
                <View>
                    <ScrollView style={tw`h-[94%]`}>
                            {notifications.map((notification) => (
                                <TouchableOpacity>
                                    <View key={notification.id} style={tw`flex flex-row items-center justify-between mt-5 border-4 p-2 rounded-2xl border-sky-500`}>
                                        <View style={tw`flex flex-col w-full`}>
                                            <View>
                                                <Text style={[tw`text-black text-2xl`, {fontFamily: 'Poppins_600SemiBold', position: 'absolute', top: 50, left: 65, zIndex: 1}]}>{notification.title}</Text>
                                                <Image source={{ uri: notification.image }} style={tw`w-full h-30 rounded-2xl`} />
                                            </View>
                                            <View style={tw`mt-2`}>
                                                <Text style={[tw`text-white opacity-50 text-base`, {fontFamily: 'Poppins_400Regular'}]}>{notification.date}</Text>
                                                <Text style={[tw`text-white text-base w-90`, {fontFamily: 'Poppins_400Regular'}]}>{notification.description}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </ScrollView>
                </View>

            </View>
        </SafeAreaView>
    )
}