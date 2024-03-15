import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';

export const Calendar = ({ navigate }: any) => {
    return (
        <View style={tw`flex pt-10 ml-2.5`}>
            <Text style={tw`text-4xl text-center`}>Aqui va ir el calendario</Text>
        </View>
    )
}