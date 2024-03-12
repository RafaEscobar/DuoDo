import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react'
import tw from 'twrnc';
import { SelectList } from 'react-native-dropdown-select-list';
import { todosData } from '../../data/todos';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';

export const AddWorkspace = ({ navigation: { navigate } }: any) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [isToday, setIsToday] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const [select, setSelect] = useState([]);

    const handleDateChange = (event: any, selectedDate: Date | undefined) => {
        setSelectedDate(selectedDate);
        setIsDatePickerVisible(false);
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
                <TouchableOpacity
                    onPress={() => { navigate('Workspace') }}
                >
                    <AntDesign name="left" size={30} color="black" style={tw`bg-neutral-300 w-10 h-10 rounded-xl p-1`} />
                </TouchableOpacity>
                <Text style={[tw`text-2xl text-center mt-3 text-white`, { fontFamily: "Poppins_700Bold" }]}>Crear espacio de trabajo</Text>
                <View>
                    <Text style={[tw`leading-8 text-xl mt-3 text-white`, { fontFamily: "Poppins_700Bold" }]}>Nombre:</Text>
                    <TextInput
                        style={[tw`w-90 border-b border-gray-400 text-base mb-5`, { fontFamily: "Poppins_400Regular", }]}
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
                <View>
                    <Text style={[tw`leading-8 text-xl mt-6 text-white`, { fontFamily: "Poppins_700Bold" }]}>Fecha:</Text>
                    <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
                        <TextInput
                            style={[tw`w-90 border-b border-gray-400 text-lg mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                            placeholder='Añadir fecha'
                            placeholderTextColor={'#58b4ff'}
                            value={selectedDate?.toString() || ''}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {isDatePickerVisible && (
                        <DateTimePicker
                            value={selectedDate || new Date()}
                            mode="date"
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                </View>
                <View style={tw`mt-20 justify-center items-center`}>
                    <TouchableOpacity onPress={() => navigate('Workspace')} style={tw`bg-sky-500 p-3 w-50 rounded-xl`}>
                        <Text style={[tw`text-center text-4xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
