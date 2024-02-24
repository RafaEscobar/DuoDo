import React, { useContext } from 'react';
import { TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { LogoutRequest } from '../../modules/requests/LogoutRequest';

export const LogoutAction = ({navigation}:any) => {
    const {token}:any = useContext(AuthContext);
    const handlePress = async() => {
        try {
            const response = await LogoutRequest(token);
            if (response == 'ok') {
                await AsyncStorage.removeItem('u-token');
                await AsyncStorage.removeItem('user');
                navigation.navigate('Login');
            }
        } catch (error) {
          console.error('Error al realizar el logout:', error);
        }
      };
    return (
        <View style={tw``}>
            <TouchableOpacity
            onPress={handlePress}
                style={tw`mb-4`}
            >
                <AntDesign name="login" size={35} color="black" />
            </TouchableOpacity>
        </View>
    )
}