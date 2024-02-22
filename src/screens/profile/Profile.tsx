import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import tw from 'twrnc';

export const Profile = () => {
    const deleteToken = async() => {
        await AsyncStorage.removeItem('u-token');
    }
    return (
        <View>
            <Text>Profile</Text>
            <Text>Token:</Text>
            <TouchableOpacity
            onPress={() => { deleteToken() }}
                style={tw`mt-8 bg-blue-500`}
            >
                <Text>Salir</Text>
            </TouchableOpacity>
        </View>
    )
}