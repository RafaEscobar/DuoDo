import React from "react";
import { ScrollView, Text, View } from "react-native";
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Checkbox } from "./Checkbox";

const formatDate = (date:any) => {
    const newDate = new Date(date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric',   hour12: true});
    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}

export const Todo = (props:any) => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const {id, title, status, due_date} = props;

    return (

        <ScrollView>
            <View style={tw`mb-4 flex flex-row w-80`}>
                <Checkbox
                    id={id}
                    text={title}
                    isCompleted={status}
                    hours={due_date}
                />
                <View>
                    <Text style={
                        status
                            ? [tw`text-lg opacity-50 w-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }] : [tw`text-lg w-50 text-white`, { fontFamily: "Poppins_400Regular" }]}>
                        {title.slice(0, 36)}
                    </Text>
                    <Text style={
                        status
                            ? [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }]
                            : [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular" }]}>
                        {formatDate(due_date)}
                    </Text>
                </View>
            </View>
        </ScrollView>

    )
}