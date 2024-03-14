import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { userData } from '../data/user';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';

export const ChatList = ({ navigate }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const [searchText, setSearchText] = useState('');

    const filteredData = userData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <View>
            <View style={tw`flex justify-center items-center mt-2`}>
                <Input style={tw`bg-neutral-200 w-60 p-2 rounded-full flex flex-row gap-2`}>
                    <FontAwesome name="search" size={24} color="black" />
                    <InputField placeholder="Buscar amigo..." onChangeText={text => setSearchText(text)} />
                </Input>
            </View>
            <FlatList
                data={filteredData}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                decelerationRate={3}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => { navigate('ChatMessage', { name: item.name }) }}>
                        <View >
                            <View style={tw`flex flex-row w-90 rounded-xl pl-2 p-2 mt-2 h-18 bg-[#100323] rounded-xl`}>
                                <View>

                                    <Image
                                        source={{ uri: item.avatar }}
                                        style={tw`w-14 h-14 rounded-2xl mr-2`}
                                    />
                                    <View style={tw`bg-green-500 shadow-lg shadow-green-500/50 rounded-full w-2.5 h-2.5 absolute top-12 right-3`} />
                                </View>

                                <View style={tw`flex-grow mt-1`}>
                                    <Text style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                    <Text style={[tw`text-sm text-white w-50 opacity-60`, { fontFamily: "Poppins_400Regular" }]}>{item.message}</Text>
                                </View>

                                <View style={tw`flex items-end justify-between`}>
                                    <Text style={[tw`text-sm text-white`, { fontFamily: "Poppins_700Bold" }]}>{item.hours}</Text>
                                    <Text style={[tw`text-sm bg-sky-500 rounded-full h-5 w-5 text-center`, { fontFamily: "Poppins_700Bold" }]}>{item.notification}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}