import { View, Text, FlatList, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import * as Progress from 'react-native-progress';
import { workspaceData } from '../../data/workspaceData'

export const List = ({ navigate }: any) => {

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
                    {workspaceData.map((item) => (
                        <View style={tw`w-1/2 mt-3`} key={item.id}>
                            <View style={tw`bg-[#100323] w-44 h-44 rounded-2xl `}>
                                <TouchableOpacity onPress={() => navigate('DetailsWorkspace', {id: item.id})} >
                                    <View style={tw`justify-start ml-4 mt-2`}>
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={tw`w-15 h-15 rounded-full`}
                                        />
                                        <Text style={[tw`text-white mt-1 text-base w-30`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                        <Text style={[tw`text-white opacity-50 text-xs mt-1`, { fontFamily: "Poppins_700Bold" }]}>{item.description}</Text>
                                        <View style={tw`flex flex-row gap-1 items-center mt-3`}>
                                            <Progress.Bar progress={.9} width={100} height={10} color='#0dac4a' borderRadius={20}
                                            />
                                            <Text style={{ fontSize: 12, fontFamily: "Poppins_700Bold", color: "white" }}>80%</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
