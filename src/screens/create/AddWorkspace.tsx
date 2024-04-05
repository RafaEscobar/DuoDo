import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { StoreWorkspace } from '../../modules/requests/workspaces/Index';
import { useFonts } from 'expo-font';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Animated } from 'react-native';
import ColorPicker, { Panel1, OpacitySlider, HueSlider, PreviewText } from 'reanimated-color-picker';
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { useAlert } from '../../hooks/useAlert';
import { ALERT_TYPE, AlertNotificationRoot } from 'react-native-alert-notification';
import { LoadingComponent } from '../../component/LoadingComponent';

export const AddWorkspace = ({ navigation: { navigate } }: any) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [color, setColor] = useState('#ffff');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const { baseUrl, token, user }:any = useContext(AuthContext);

    const handleSaveWorkspace = async() => {
        if (name.length > 0 && description.length > 0 && color.length > 0) {
            if (name.length >= 6 && description.length >= 8) {
                setLoading(true);
                let external_identifier = JSON.parse(user).external_identifier;
                const response = await StoreWorkspace(name, description, color, token, baseUrl, external_identifier);
                setLoading(false);
            } else {
                setLoading(false);
                useAlert(ALERT_TYPE.INFO, 'Indicación', 'Atiende a las especificaciones de tamaño para el nombre y descripción del espacio de trabajo.');
            }
        } else {
            setLoading(false);
            useAlert(ALERT_TYPE.INFO, 'Campos faltantes', 'Rellena todos los campos.');
        }
    };

    const onSelectColor = ({ hex }) => {
        setColor(hex);
    };

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const validateName = () => {
        if (name.length < 6) {
          setNameError('El nombre debe contener mínimo 6 caracteres.');
        } else {
          setNameError('');
        }
    }

    const validateDescription = () => {
        if (name.length < 8) {
          setDescriptionError('La descripción debe contener mínimo 8 caracteres.');
        } else {
          setDescription('');
        }
    }

    return (
        <AlertNotificationRoot>
            <View style={tw`bg-gray-900 h-full`}>
                <View style={tw`flex ml-4 mt-10 sm:ml-4 sm:mt-5`}>
                    <View style={tw`flex flex-row items-center gap-5`}>
                        <TouchableOpacity
                            onPress={() => { navigate('BottomTabNavigation') }}
                        >
                            <AntDesign name="left" size={25} color="black" style={tw`bg-neutral-300 rounded-lg p-1`}/>
                        </TouchableOpacity>
                        <Text style={[tw`text-xl text-center text-white`, { fontFamily: "Poppins_700Bold" }]}>Nuevo espacio de trabajo</Text>
                    </View>
                    <View style={tw`mb-6`}>
                        <Text style={[tw`leading-8 text-xl mt-10 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
                        <TextInput
                            style={[tw`w-90 border-b border-gray-400 text-base text-white`, { fontFamily: "Poppins_400Regular", }]}
                            placeholder="¿Qué proyecto gestionarás?"
                            placeholderTextColor={'#58b4ff'}
                            onChangeText={(text) => { setName(text) }}
                            maxLength={38}
                            onEndEditing={validateName}
                        />
                        {nameError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{nameError}</Text> : null}
                    </View>
                    <View style={tw`mb-6`}>
                        <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripcion:</Text>
                        <TextInput
                            style={[tw`w-90 border-b border-gray-400 text-base text-white`, { fontFamily: "Poppins_400Regular" }]}
                            placeholder="Los detalles de tu proyecto..."
                            placeholderTextColor={'#58b4ff'}
                            onChangeText={(text) => { setDescription(text) }}
                            multiline={true}
                            underlineColorAndroid={'transparent'}
                            numberOfLines={4}
                            maxLength={245}
                            onEndEditing={validateDescription}
                        />
                        {descriptionError ? <Text style={tw`text-red-500 text-sm mt-1 text-right font-bold`}>{descriptionError}</Text> : null}
                    </View>
                    <View style={tw`w-90`}>
                        <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Establece el color:</Text>
                        <View style={tw`flex justify-center items-center mt-4`}>
                            <TouchableOpacity
                                onPress={() => setShowModal(true)}
                            >
                                <View style={[tw`w-8 h-8 rounded-full`, {backgroundColor: color}]}></View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Modal onRequestClose={() => setShowModal(false)} visible={showModal} animationType='slide'>
                        <Animated.View style={styles.container}>
                            <View style={[styles.container, {backgroundColor: color}]}>
                                <View style={styles.pickerContainer}>
                                    <ColorPicker
                                    sliderThickness={25}
                                    thumbSize={24}
                                    thumbShape='circle'
                                    boundedThumb
                                    onComplete={onSelectColor}
                                    >
                                    <Panel1 style={styles.panelStyle} />
                                    <HueSlider style={styles.sliderStyle} />
                                    <OpacitySlider style={styles.sliderStyle} />
                                    <View style={styles.previewTxtContainer}>
                                        <PreviewText style={{ color: '#707070' }} />
                                    </View>
                                    </ColorPicker>
                                </View>
                                <TouchableOpacity style={styles.closeButton} onPress={() => setShowModal(false)}>
                                    <Text style={{ color: '#707070', fontWeight: 'bold' }}>Elegir</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </Modal>
                    <View style={tw`mt-20 justify-center items-center`}>
                        <TouchableOpacity onPress={() => {
                                validateName();
                                validateDescription();
                                handleSaveWorkspace();
                                // navigate('Workspace');
                            }} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
                            <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <LoadingComponent
                    modalVisible={loading}
                    modalText='Creando espacio de trabajo'
                />
            </View>
        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#111827'
    },
    pickerContainer: {
      alignSelf: 'center',
      width: 300,
      backgroundColor: '#111827; ',
      padding: 20,
      borderRadius: 20,

    },
    panelStyle: {
      borderRadius: 16,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    sliderStyle: {
      borderRadius: 20,
      marginTop: 20,

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    previewTxtContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: '#bebdbe',
    },
    closeButton: {
      position: 'absolute',
      bottom: 10,
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      alignSelf: 'center',
      backgroundColor: '#fff',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
  });
