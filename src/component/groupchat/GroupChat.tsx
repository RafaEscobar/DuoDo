import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Image } from 'expo-image';
import { userData } from '../../data/user';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';

export const GroupChat = ({
    id,
    name,
    avatar,
    message,
    hours,
    notification
}: any) => {

    

    return (
        <View style={tw`flex-col justify-center mt-2 w-full`}>
            <View style={tw`flex flex-col`}>
                <View style={tw`flex bg-orange-500 mb-3 w-2/3`}>
                    <Image source={avatar} style={tw`w-12 h-12 rounded-full`} />
                    <Text>{name}</Text>
                    <Text>{message}</Text>
                    <Text>{hours}</Text>
                    <Text>{notification}</Text>
                </View>
            </View>
        </View>
    )
}