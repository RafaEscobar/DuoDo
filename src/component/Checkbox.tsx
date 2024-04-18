import React from "react";
import { TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import tw from 'twrnc';

export const Checkbox = ({
    isCompleted,
    onToggle
}: any) => {
    return isCompleted ? (
        <TouchableOpacity
            style={tw`w-8 h-8 mr-3.5 rounded-xl bg-blue-600 items-center justify-center ml-1.5 shadow-lg shadow-blue-500/50`}
            onPress={onToggle}
        >
            {isCompleted && <Entypo name="check" size={24} color="#FAFAFA" />}
        </TouchableOpacity>
    ): (
        <TouchableOpacity
            style={ tw`w-8 h-8 mr-3.5 rounded-xl bg-white items-center justify-center ml-1.5 shadow-lg shadow-blue-500/50`}
            onPress={onToggle}
        >
        </TouchableOpacity>
    );
}