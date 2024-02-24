import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export const ValidatingLogin = () => {
    return (
        <View style={tw`flex justify-center items-center h-full`}>
            <Text style={tw`text-4xl text-center`}>Validando....</Text>
        </View>
    )
}