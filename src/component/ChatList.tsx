import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { userData } from '../data/user';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const ChatList = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }


    return (
        <View>
            <FlatList
                data={userData}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                decelerationRate={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <View >
                        <View style={tw`flex flex-row  mb-2  w-90 rounded-xl pl-2 p-2`}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={tw`w-14 h-14 rounded-full border-2 border-sky-500 mr-2`}
                            />
                            <View style={tw`flex-grow mt-2`}>
                                <Text style={[tw`text-lg`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                <Text style={[tw`text-sm w-50`, { fontFamily: "Poppins_400Regular" }]}>{item.message}</Text>
                            </View>

                            <View style={tw`flex items-end justify-between`}>
                                <Text style={[tw`text-sm`, { fontFamily: "Poppins_700Bold" }]}>{item.hours}</Text>
                                <Text style={[tw`text-sm bg-sky-500 p-2 rounded-full`, { fontFamily: "Poppins_700Bold" }]}>{item.notification}</Text>
                            </View>
                        </View>

                    </View>
                }
            />
            <TouchableOpacity 
                style={tw`w-13 h-13 bg-indigo-400 p-3 rounded-full absolute bottom-15 right-4`}
            >
                <MaterialCommunityIcons name="message-text" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}