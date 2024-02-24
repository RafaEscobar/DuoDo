import React, { useContext } from 'react';
import { TouchableOpacity, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tw from 'twrnc';

export const LogoutAction = (navigate: any) => {
    const handlePress = async() => {
        try {
          await AsyncStorage.removeItem('u-token');
          await AsyncStorage.removeItem('user');
          navigate('Login');
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