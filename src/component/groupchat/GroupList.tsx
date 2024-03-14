import React, { useState } from 'react'
import { View, Text, FlatList, Touchable, TouchableOpacity, ScrollView } from 'react-native';
import { userData } from '../../data/user'
import tw from 'twrnc';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';


export const GroupList = ({ navigate }: any) => {

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
            <ScrollView style={tw`h-[90%]`}>
                <View style={tw`flex-row flex-wrap`}>
                    {filteredData.map((item) => (
                        <View style={tw`w-1/2 mt-3`} key={item.id}>
                            <View style={tw`bg-[#100323] w-44 h-50 rounded-2xl`}>
                                <TouchableOpacity onPress={() => { navigate('GroupMessage', { name: item.name }) }}>
                                    <View style={tw`justify-start ml-4 mt-4`}>
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={tw`w-15 h-15 rounded-full`}
                                        />
                                        <Text style={[tw`text-white mt-1 text-lg w-30`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                        <Text style={[tw`text-white mt-1 text-sm w-40`, { fontFamily: "Poppins_400Regular" }]}>
                                            Descripción: {item.message}
                                        </Text>
                                        <Text style={[tw`text-white mt-1 text-sm w-30 opacity-50`, { fontFamily: "Poppins_700Bold" }]}>
                                            Integrantes: {item.notification}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}