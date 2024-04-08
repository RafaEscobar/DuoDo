import React, { useState } from 'react';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';
import DateTimePicker from "@react-native-community/datetimepicker";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { FontAwesome5 } from '@expo/vector-icons';

export const Calendar = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }
    const [items, setItems] = useState({});
    const [markedDates, setMarkedDates] = useState({});
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDescription, setEvenDescription] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const renderItem = (item) => {
        return (
            <View style={tw`bg-[#c3e3fa] p-4 mt-2 rounded-xl w-80`}>
                <Text style={[tw`text-xl text-black`, { fontFamily: 'Poppins_700Bold' }]}>{item.name}</Text>
                <Text style={[tw`text-base text-black opacity-50`, { fontFamily: 'Poppins_400Regular' }]}>Detalles: {item.description}</Text>
            </View>
        );
    }

    const addEvent = (date: string, event: { name: string, height: number, description: string }) => {
        setItems((prevItems) => {
            const newItems = { ...prevItems };
            if (!newItems[date]) {
                newItems[date] = [];
            }
            newItems[date].push(event);
            return newItems;
        });

        setMarkedDates((prevDates) => {
            return { ...prevDates, [date]: { marked: true } };
        });
    };

    const handleAddEvent = () => {
        addEvent(eventDate, { name: eventName, height: 50, description: eventDescription });
        setEventName('');
        setEvenDescription('');
        setEventDate('');
    };

    const handleDatePicker = () => {
        setIsDatePickerVisible(true);
    };

    return (
        <View style={{ flex: 1, paddingTop: 30 }}>
            <Agenda
                items={items}
                loadItemsForMonth={(month) => console.log('Month: ', month)}
                renderItem={renderItem}
                markedDates={markedDates}
            />
            <TouchableOpacity onPress={() => { setModalVisible(true) }} style={tw`flex-row items-center justify-center p-2 bg-[#6bb8ef] gap-2`}>
                <MaterialIcons name="event-note" size={30} color="black" />
                <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 20 }}>Agregar evento</Text>
            </TouchableOpacity>
            <Modal
                backdropOpacity={0.3}
                isVisible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                style={{ justifyContent: 'flex-end', margin: 0 }}
            >
                <View style={{ backgroundColor: '#111827', paddingTop: 22, borderTopRightRadius: 17, borderTopLeftRadius: 17 }}>
                    <View style={tw`flex-row items-center justify-center gap-2 mb-6`}>
                        <MaterialIcons name="add-card" size={30} color="#9bd1f5" />
                        <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold", color: '#FAF8F4' }}>Añade tu evento</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end', margin: 0, paddingLeft: 10 }}>
                        <View style={tw`flex-row gap-2`}>
                            <MaterialIcons name="task" size={20} color="white" />
                            <TextInput
                                style={[tw`w-80 border-b border-gray-400 text-base mb-8 text-white`, { fontFamily: "Poppins_400Regular" }]}
                                placeholder="Agregar titulo"
                                placeholderTextColor={'#FAF8F4'}
                                onChangeText={setEventName}
                            />
                        </View>
                        <View style={tw`flex-row gap-2`}>
                            <FontAwesome5 name="tasks" size={20} color="white" />
                            <TextInput
                                style={[tw`w-80 border-b border-gray-400 text-base mb-8 text-white`, { fontFamily: "Poppins_400Regular" }]}
                                placeholder="Agregar detalles"
                                placeholderTextColor={'#FAF8F4'}
                                onChangeText={setEvenDescription}
                            />

                        </View>
                        <View style={tw`mb-6 flex-row gap-2`}>
                            <MaterialIcons name="date-range" size={20} color="white" />
                            <TouchableOpacity onPress={handleDatePicker}>
                                <TextInput
                                    style={[tw`w-80 border-b border-gray-400 text-base mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
                                    placeholder='Añadir fecha'
                                    placeholderTextColor={'#FAF8F4'}
                                    value={eventDate}
                                    editable={false}
                                />
                            </TouchableOpacity>
                            {isDatePickerVisible && (
                                <DateTimePicker
                                    value={selectedDate || new Date()}
                                    mode='date'
                                    display='default'
                                    onChange={(event, date) => {
                                        setIsDatePickerVisible(false);
                                        if (event.type === 'set' && date) {
                                            setSelectedDate(date);
                                            setEventDate(date.toISOString().split('T')[0]);
                                        }
                                    }}
                                />
                            )}
                        </View>
                        <View style={tw`mb-4 justify-center items-center`}>
                            <TouchableOpacity onPress={handleAddEvent} style={tw`bg-sky-500 p-2 w-30 rounded-xl`}>
                                <Text style={[tw`text-center text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};