import React from 'react';
import LottieView from 'lottie-react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';

export const ValidatingLogin = () => {
    return (
        <View>
            <View style={tw`w-full flex items-center justify-center h-[100%]`}>
                <Text style={tw`text-3xl text-center top-48`}>Cargando...</Text>
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