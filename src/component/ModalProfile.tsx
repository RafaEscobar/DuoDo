import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import Modal from 'react-native-modal';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export const ModalProfile = ({ navigate }: any) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => { setModalVisible(true) }}
                style={{ marginTop: 10, marginRight: 10 }}
            >
                <Image
                    source="https://kaihatsu-code.com/assets/menu.png"
                    style={{ width: 40, height: 40 }}
                />
            </TouchableOpacity>
            <View>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={styles.contentView}
                >
                    <View style={styles.content}>
                        <View>
                            <Text style={[tw`text-center text-4xl mb-4 text-white`, { fontFamily: 'Poppins_700Bold' }]}>
                                Perfil
                            </Text>
                            <Text style={[tw`text-center text-white pl-6 pr-6`, { fontFamily: 'Poppins_400Regular' }]}>
                                En este apartado puedes ver tu perfil, acceder al calendario y ver tus notificaciónes.
                            </Text>
                        </View>
                        <View style={{
                            marginTop: 25, borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10, paddingBottom: 10
                        }}>
                            <View style={tw`mb-2`}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigate('Profile');
                                    }}
                                >
                                    <View style={tw`flex flex-row items-center gap-3 ml-10 `}>
                                        <MaterialCommunityIcons name="face-man-profile" size={30} color="#4195f0" />
                                        <Text style={[tw`text-xl text-white`, { fontFamily: 'Poppins_700Bold' }]}>Perfil</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10, paddingBottom: 5 , marginBottom: 8}}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setModalVisible(false);
                                        navigate('Calendar');
                                    }}
                                >
                                    <View style={tw`flex flex-row items-center gap-3 ml-10`}>
                                        <FontAwesome5 name="calendar-alt" size={30} color="#cb7f14" />
                                        <Text style={[tw`text-xl text-white`, { fontFamily: 'Poppins_700Bold' }]}>Calendario</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10, paddingBottom: 5 }}>
                                <TouchableOpacity>
                                    <View style={tw`flex flex-row items-center gap-3 ml-10`}>
                                        <MaterialCommunityIcons name="bell" size={30} color="#ecc233" />
                                        <Text style={[tw`text-xl text-white`, { fontFamily: 'Poppins_700Bold' }]}>Notificaciones</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#111827',
        paddingTop: 22,
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
    },
    contentTitle: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 12,
        fontFamily: "Poppins_700Bold",
        color: '#FAF8F4',
    },
    contentView: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    buttonPressed: {
        backgroundColor: 'red',
    },
});