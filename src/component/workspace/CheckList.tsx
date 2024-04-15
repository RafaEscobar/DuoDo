import { View, Text, FlatList } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Checkbox } from '../Checkbox';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

const formatDate = (date:any) => {
    const newDate = new Date(date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric',   hour12: true});
    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}

export const CheckList = (props:any) => {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });
    if (!fontsLoaded) {
        return null;
    }
    const { tasks } = props;

    return (
        <View style={tw`h-[68%]`}>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <View style={tw`flex flex-row items-center mt-2 border-solid border border-violet-300 w-90 rounded-xl`}>
                        <Checkbox
                            id={item.id}
                            text={item.title}
                            isCompleted={item.status}
                            hours={item.due_date}
                        />
                        <View>
                            <Text style={item.status ? [tw`opacity-50 w-50 text-white`, { textDecorationLine: 'line-through', color: 'white', fontFamily: "Poppins_400Regular" }] : [tw`text-base w-50 text-white`, { fontFamily: "Poppins_400Regular" }]}
                            >{item.title}
                            </Text>
                            <Text
                                style={item.status ? [tw`text-sm opacity-50 text-white`, { textDecorationLine: 'line-through', color: 'white', fontFamily: "Poppins_400Regular" }] : [tw`text-xs opacity-50 text-white`, { fontFamily: "Poppins_400Regular" }]}
                            >{formatDate(item.due_date)}</Text>
                        </View>
                    </View>
                }
            />
        </View>
    )
}