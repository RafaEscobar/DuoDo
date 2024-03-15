import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { LogoutRequest } from '../../modules/requests/LogoutRequest';
import { TouchableOpacity, View, Text } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const LogoutAction = ({ navigation, setLoading }: any) => {
    const { token, setStatus, authUrl }: any = useContext(AuthContext);
    const handlePress = async () => {
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
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <TouchableOpacity
                onPress={handlePress}
                style={tw`mb-4 flex flex-row justify-center items-center bg-[#f04343] p-4 rounded-xl gap-4`}
            >
                <Text style={[tw`text-2xl text-white`, {fontFamily:"Poppins_700Bold"}]}>Cerrar sesión</Text>
                <AntDesign name="login" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}