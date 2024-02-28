import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { LogoutRequest } from '../../modules/requests/LogoutRequest';
import { TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import tw from 'twrnc';

export const LogoutAction = ({navigation, setLoading}:any) => {
    const {token, setStatus, authUrl}:any = useContext(AuthContext);
    const handlePress = async() => {
        try {
            setLoading(true);
            const response = await LogoutRequest(token, authUrl);
            if (response == 'ok') {
                setStatus('unauthorized');
                await AsyncStorage.removeItem('u-token');
                await AsyncStorage.removeItem('user');
                setLoading(false);
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