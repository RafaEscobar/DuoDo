import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { useFonts } from 'expo-font';
import { Image } from "expo-image";

export const GroupMessage = ({ navigation: { navigate }, route }: any) => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSendMessage = () => {
        setMessages(prevMessages => [...prevMessages, message]);
        setMessage(''); // Limpiar el input después de enviar el mensaje
    };

    const { name } = route.params;

    const [fontsLoaded] = useFonts({
        Comfortaa_700Bold,
        Comfortaa_500Medium
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex ml-3 mt-12 sm:ml-4 sm:mt-5 w-90`}>
                <View style={tw`flex flex-row items-center gap-4`}>
                    <TouchableOpacity onPress={() => navigate('Grupos')}>
                        <AntDesign name="left" size={30} color="black" style={tw`bg-neutral-300 w-10 h-10 rounded-2xl p-1`}/>
                    </TouchableOpacity>
                    <View style={tw`flex-row gap-2`}>
                        <Image
                            source="https://kaihatsu-code.com/assets/logo_solid.png"
                            style={tw`w-10 h-10 rounded-full border-2 border-sky-300`}
                        />
                        <View>
                            <Text style={[tw`text-xl text-white`, { fontFamily: "Comfortaa_700Bold" }]}>{name}</Text>
                            <Text style={[tw`text-xs text-white opacity-50`, { fontFamily: "Comfortaa_500Medium" }]}>Integrantes:{name}.....</Text>
                        </View>
                    </View>
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={tw`flex-1 justify-end`}>
                <ScrollView>
                    <View>
                        {messages.map((message, index) => (
                            <View key={index} style={tw`flex-row justify-end`}>
                                <View style={tw`bg-[#007AFF] rounded-2xl p-2 m-2`}>
                                    <Text style={[tw`text-white`, { fontFamily: "Comfortaa_500Medium" }]}>{message}</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View style={tw`flex-row items-center -top-3 pl-2`}>
                    <TextInput
                        style={[tw`flex-1 pl-4 mr-2 bg-[#1C1D22] h-14 w-80 rounded-2xl text-base text-white`, { fontFamily: "Comfortaa_500Medium" }]}
                        placeholder="Escribe un mensaje.."
                        placeholderTextColor={"#fff"}
                        multiline
                        value={message}
                        onChangeText={text => setMessage(text)}
                    />
                    <TouchableOpacity style={tw`absolute right-4 top-4`} onPress={handleSendMessage}>
                        <Ionicons name="send" size={25} color="#007AFF" style={tw`mb-2`} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}