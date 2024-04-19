import { Checkbox } from "./Checkbox";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { ScrollView, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import { useFonts } from 'expo-font';
import React, { useState } from "react";
import tw from 'twrnc';

const formatDate = (date: any) => {
    const newDate = new Date(date).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true });
    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
}

export const Todo = (props: any) => {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    const [localStatus, setLocalStatus] = useState(false);

    const { id, title, due_date } = props;
    const [status, setSatus] = useState(props.status);
    const [modalVisible, setModalVisible] = useState(false);


    const toggleStatus = () => {
        setSatus(!status);
    }
    // Esta función se encarga de eliminar una tarea de la lista de tareas,se va a a utilizar cuando las api este lista
    const [tasks, setTasks] = useState([props.tasks]);

    const deleteTask = (id:string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={tw`mb-4 flex flex-row items-center border-solid border border-violet-300 rounded-xl p-2`}>
                <Checkbox
                    id={id}
                    text={title}
                    isCompleted={status}
                    hours={due_date}
                    onToggle={toggleStatus}
                />
                <TouchableOpacity onPress={() => { setModalVisible(true) }}>
                    <Text style={
                        status
                            ? [tw`text-lg opacity-50 w-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }] : [tw`text-lg w-50 text-slate-300`, { fontFamily: "Poppins_700Bold" }]}>
                        {title.slice(0, 36)}
                    </Text>
                    <Text style={
                        status
                            ? [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular", textDecorationLine: 'line-through', color: 'white' }]
                            : [tw`text-sm opacity-50 text-white`, { fontFamily: "Poppins_400Regular" }]}>
                        {formatDate(due_date)}
                    </Text>
                </TouchableOpacity>
                <Modal
                    backdropOpacity={0.3}
                    isVisible={modalVisible}
                    onBackdropPress={() => setModalVisible(false)}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View style={tw`bg-gray-800 p-6 rounded-t-3xl`}>
                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                            <AntDesign name="closecircle" size={30} color="#6bb8ef" />
                        </TouchableOpacity>
                        <Text style={[tw`text-2xl text-white text-center mb-4`, { fontFamily: 'Poppins_700Bold' }]}>{title}</Text>
                        <Text style={[tw`text-base text-white opacity-50 mb-1`, { fontFamily: 'Poppins_400Regular' }]}>Detalles: {title}</Text>
                        <Text style={[tw`text-base text-white opacity-50 mb-1`, { fontFamily: 'Poppins_400Regular' }]}>Fecha: {formatDate(due_date)}</Text>
                        <View>
                            {
                                status ? (
                                    <Text style={[tw`text-base text-green-500 opacity-50 mb-1`, { fontFamily: 'Poppins_700Bold' }]}>Estado: Completado</Text>
                                ) : (
                                    <Text style={[tw`text-base text-blue-500 mb-1`, { fontFamily: 'Poppins_700Bold' }]}>Estado: Pendiente</Text>
                                )
                            }
                        </View>
                        <View style={tw`flex flex-row items-center justify-center gap-3 mt-2`}>
                            <TouchableOpacity>
                                <AntDesign name="delete" size={30} color="#e63d3d" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <FontAwesome name="edit" size={30} color="#dead22" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    )
}