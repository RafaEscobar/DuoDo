import { View, Text, FlatList } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Checkbox } from '../Checkbox';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const CheckList = ({ todosData }: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={tw`h-[68%]`}>
            <FlatList
                data={todosData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={tw`flex flex-row items-center mt-2 border-solid border border-violet-300 w-90 rounded-xl`}>
                        <Checkbox
                            id={item.id}
                            text={item.text}
                            isCompleted={item.isCompleted}
                            isToday={item.isToday}
                            hours={item.hours}
                        />
                        <View>
                            <Text style={item.isCompleted ? [tw`text-lg opacity-50 w-50 text-white`, { textDecorationLine: 'line-through', color: 'white', fontFamily: "Poppins_400Regular" }] : [tw`text-lg w-50 text-white`, { fontFamily: "Poppins_400Regular" }]}
                            >{item.text}
                            </Text>
                            <Text
                                style={item.isCompleted ? [tw`text-sm opacity-50 text-white`, { textDecorationLine: 'line-through', color: 'white', fontFamily: "Poppins_400Regular" }] : [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular" }]}
                            >{item.hours}</Text>
                        </View>
                    </View>
                }
            />
        </View>
    )
}