import React from "react";
import { Text, View } from "react-native";
import tw from 'twrnc';
import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
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
        Comfortaa_700Bold,
        Comfortaa_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`mb-4 flex flex-row items-center w-80`}>
            <Checkbox
                id={id}
                text={text}
                isCompleted={isCompleted}
                isToday={isToday}
                hours={hours}
            />
            <View>
                <Text style={
                    isCompleted
                        ? [tw`text-lg opacity-50 w-50`, { fontFamily: "Comfortaa_500Medium", textDecorationLine: 'line-through', color: '#737373' }] : [tw`text-lg w-50`, { fontFamily: "Comfortaa_500Medium" }]}>
                    {text}
                </Text>
                <Text style={
                    isCompleted
                        ? [tw`text-sm opacity-50`, { fontFamily: "Comfortaa_500Medium", textDecorationLine: 'line-through', color: '#737373' }]
                        : [tw`text-sm opacity-50`, { fontFamily: "Comfortaa_500Medium" }]}>
                    {hours}
                </Text>
            </View>
        </View>
    )
}