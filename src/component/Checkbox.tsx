import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import tw from 'twrnc';

export const Checkbox = ({
    id,
    text,
    isCompleted,
    isToday,
    hours,
}: any) => {
    return isToday ? (

        <TouchableOpacity style={isCompleted ? tw`w-8 h-8 mr-3.5 rounded-xl bg-black items-center justify-center ml-1.5 bg-cyan-500 shadow-lg shadow-cyan-500/50` : tw`w-8 h-8 mr-3.5 rounded-xl bg-black items-center justify-center ml-1.5 bg-white shadow-lg shadow-cyan-500/50` }>
            {isCompleted && <Entypo name="check" size={24} color="#FAFAFA" />}
        </TouchableOpacity>
    ) : (
        <View style={tw`w-8 h-8 rounded-xl bg-orange-300 mr-3.5 ml-3`}/>
    )
}