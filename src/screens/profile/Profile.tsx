import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import tw from 'twrnc';

export const Profile = ({ navigation: { navigate } }: any) => {

    const deleteToken = async() => {
        await AsyncStorage.removeItem('u-token');
        navigate('Login');
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