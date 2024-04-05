import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SelectList } from 'react-native-dropdown-select-list';
import { StoreWorkspace } from '../../modules/requests/workspaces/Index';
import { todosData } from '../../data/todos';
import { useFonts } from 'expo-font';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Button, Animated } from 'react-native';
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { ScrollView } from 'react-native-gesture-handler';
import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider, PreviewText } from 'reanimated-color-picker';

export const AddWorkspace = ({ navigation: { navigate } }: any) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [select, setSelect] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [color, setColor] = useState('#111827');

    const { baseUrl, token, user }:any = useContext(AuthContext);

    const handleSaveWorkspace = async() => {
        let external_identifier = JSON.parse(user).external_identifier;
        const response = await StoreWorkspace(name, description, select, token, baseUrl, external_identifier);
        console.log(response);
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

    return (
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
                <View>
                    <Text style={[tw`leading-8 text-xl mt-10 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
                    <TextInput
                        style={[tw`w-90 border-b border-gray-400 text-base mb-5 text-white`, { fontFamily: "Poppins_400Regular", }]}
                        placeholder="¿Qué proyecto gestionarás?"
                        placeholderTextColor={'#58b4ff'}
                        onChangeText={(text) => { setName(text) }}
                    />
                </View>
                <View>
                    <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripcion:</Text>
                    <TextInput
                        style={[tw`w-90 border-b border-gray-400 text-base mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                        placeholder="Los detalles de tu proyecto..."
                        placeholderTextColor={'#58b4ff'}
                        onChangeText={(text) => { setDescription(text) }}
                        multiline={true}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={4}
                    />
                </View>
                <View style={tw`w-90`}>
                    <TouchableOpacity
                        onPress={() => setShowModal(true)}
                    >
                        <Text style={[tw`leading-8 text-lg mt-2 text-[#58b4ff]`, { fontFamily: "Poppins_700Bold" }]}> - Establecer color - </Text>
                    </TouchableOpacity>
                    <View style={tw`flex justify-center items-center mt-4`}>
                        <View style={[tw`w-8 h-8 rounded-full`, {backgroundColor: color}]}></View>
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
                            handleSaveWorkspace();
                            // navigate('Workspace');
                        }} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
                        <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    swatchesContainer: {
      paddingTop: 20,
      marginTop: 20,
      borderTopWidth: 1,
      borderColor: '#bebdbe',
      alignItems: 'center',
      flexWrap: 'nowrap',
      gap: 10,
    },
    swatchStyle: {
      borderRadius: 20,
      height: 30,
      width: 30,
      margin: 0,
      marginBottom: 0,
      marginHorizontal: 0,
      marginVertical: 0,
    },
    openButton: {
      width: '100%',
      borderRadius: 20,
      paddingHorizontal: 40,
      paddingVertical: 10,
      backgroundColor: '#fff',

      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
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
