
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Text, View } from 'react-native';

export const Profile = () => {
    let token;
    const handleGetToken = async () => {
        try {
            token = await AsyncStorage.getItem('u-token');
            console.log(token);
        } catch (e) {
            console.log('Error: ', e);
        }
    }
    return (
        <View>
            <Text>Profile</Text>
            <Text>Token:{token}</Text>
        </View>
    )
}