import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { SelectList } from 'react-native-dropdown-select-list';
import { todosData } from '../../data/todos';
import { AntDesign } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { StoreWorkspace } from '../../modules/requests/workspaces/Index';
import { AuthContext } from '../../context/AuthContext';
import { LoadingComponent } from '../../component/LoadingComponent';

export const AddWorkspace = ({ navigation: { navigate } }: any) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [select, setSelect] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalText, setModalText] = useState('');

    const { baseUrl, token }:any = useContext(AuthContext);

    const handleSaveWorkspace = async() => {
        const response = await StoreWorkspace(name, description, select, token, baseUrl);
        console.log(response);
        if (response == 200) {
            setLoading(true);
            setModalText('Espacio de trabajo creado correctamente.');
        } else {
            setLoading(true);
            setModalText('Error en el servidor, intentalo más tarde.');
        }
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
                        onPress={() => { navigate('Workspace') }}
                    >
                        <AntDesign name="left" size={25} color="black" style={tw`bg-neutral-300 rounded-lg p-1`}/>
                    </TouchableOpacity>
                    <Text style={[tw`text-2xl text-center text-white`, { fontFamily: "Poppins_700Bold" }]}>Crear espacio de trabajo</Text>
                </View>
                <View>
                    <Text style={[tw`leading-8 text-xl mt-10 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
                    <TextInput
                        style={[tw`w-90 border-b border-gray-400 text-base mb-5 text-white`, { fontFamily: "Poppins_400Regular", }]}
                        placeholder="nombre de la tarea"
                        placeholderTextColor={'#58b4ff'}
                        onChangeText={(text) => { setName(text) }}
                    />
                </View>
                <View>
                    <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Descripcion:</Text>
                    <TextInput
                        style={[tw`w-90 border-b border-gray-400 text-base mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                        placeholder="descripcion de la tarea"
                        placeholderTextColor={'#58b4ff'}
                        onChangeText={(text) => { setDescription(text) }}
                        multiline={true}
                        underlineColorAndroid={'transparent'}
                        numberOfLines={4}
                    />
                </View>
                <View style={tw`w-90`}>
                    <Text style={[tw`leading-8 text-xl mt-2 text-white`, { fontFamily: "Poppins_700Bold" }]}>Asignar a:</Text>
                    <SelectList
                        data={todosData.map((item) => item.text)}
                        setSelected={setSelect}
                        save='value'
                        search={false}
                        inputStyles={tw`text-white`}
                        dropdownTextStyles={tw`text-white`}
                        fontFamily='Poppins_400Regular'
                    />
                </View>
                <View style={tw`mt-20 justify-center items-center`}>
                    <TouchableOpacity onPress={() => {
                            handleSaveWorkspace();
                            // navigate('Workspace');
                        }} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
                        <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <LoadingComponent
                modalVisible={loading}
                modalText={modalText}
            />
        </View>
    )
}
