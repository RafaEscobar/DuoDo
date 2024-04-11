import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Checkbox } from "./Checkbox";

export const Todo = ({
    id,
    text,
    isCompleted,
    isToday,
    hours,
}: any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (

        <ScrollView>
            <View style={tw`mb-4 flex flex-row`}>
                <Checkbox
                    id={id}
                    text={text}
                    isCompleted={isCompleted}
                    isToday={isToday}
                    hours={hours}
                />
                <TouchableOpacity>
                    <View>
                        <Text style={
                            isCompleted
                                ? [tw`text-lg opacity-50 w-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }] : [tw`text-lg w-50 text-white`, { fontFamily: "Poppins_400Regular" }]}>
                            {text}
                        </Text>
                        <Text style={
                            isCompleted
                                ? [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }]
                                : [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular" }]}>
                            {hours}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}