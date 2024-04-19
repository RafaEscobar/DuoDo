import React from 'react';
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const ValidatingLogin = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View>
            <View style={tw`w-full flex items-center justify-center h-[100%]`}>
                <Text style={[tw`text-3xl text-center top-48`, {fontFamily: "Poppins_700Bold"}]}>Cargando...</Text>
                <LottieView
                    source={require('../../../assets/animations/a.json')}
                    style={{width: "80%", height: "80%"}}
                    autoPlay
                    loop
                />
            </View>
        </View>
    )
}