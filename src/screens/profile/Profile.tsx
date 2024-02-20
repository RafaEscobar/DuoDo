
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LogoutModule } from '../../modules/api/LogoutModule';
import tw from 'twrnc';

export const Profile = () => {
    const logoutModule = async () => {
        let token = await AsyncStorage.getItem('u-token');
        await LogoutModule(token);
    };
    const removeToken = async () => {
        await AsyncStorage.removeItem('u-token');
        console.log(await AsyncStorage.getItem('u-token'))
    };

    return (
        <View>
            <Text>Profile</Text>
            <Text>Token</Text>
            <TouchableOpacity onPress={()=>logoutModule()} style={tw`bg-orange-500`}>
                <Text>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>removeToken()} style={tw`bg-orange-500`}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}