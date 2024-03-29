import React, { useState } from 'react';
import { Text, StyleSheet, View, SafeAreaView, Animated, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import tw from 'twrnc';



export const TaskComponent = () => {
    const [task, setTask] = useState([
        {
            id: '1',
            title: 'Terminar el slide',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '2',
            
            title: 'Integrar con la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '3',
            
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '4',
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '5',
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '6',
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '7',
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        },
        {
            id: '8',
            title: 'Integrar la app',
            description: 'Hacer un slide que me permita mostrar info',
            hours: '9:00 am',
            completed: false
        }
    ])
    
    const CheckMark = ({ id, completed }: any) => {
        return (
            <Pressable
                onPress={() => toggleTodo(id)}
                style={[tw`w-8 h-8 rounded-xl`, { backgroundColor: completed ? '#E9E9EF' : '#0EA5E9' }]}
            >
            </Pressable>
        )
    }

    const toggleTodo = (id: string) => {
        const updatedTasks = task.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed}
            }
            return task;
        });
        setTask(updatedTasks);
    };

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return null;
    };

    const [isDeleteActive, setIsDeleteActive] = useState(false);

    const deleteTodo = (id: string) => {
        setTask(task.filter((item) => item.id !== id));
    }

    return (
        <View>
            <FlatList
                data={task}
                keyExtractor={(item) => item.id}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                decelerationRate={3}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onLongPress={() => setIsDeleteActive(true)}
                        onPress={() => setIsDeleteActive(false)}
                        activeOpacity={0.5}
                        style={tw`bg-[#c4bbf7] p-4 rounded-2xl mt-3`}
                    >
                        <View style={tw`flex-row items-center grow gap-2`}>
                            <CheckMark id={item.id} completed={item.completed} />
                            <View style={tw`flex flex-col`}>
                                <Text style={[tw`text-2xl`, { fontFamily: "Poppins_700Bold" }]}>{item.title}</Text>
                                <Text style={[tw`w-60 text-base`, { fontFamily: "Poppins_400Regular" }]}>{item.description}</Text>
                                <Text style={[tw`text-base opacity-60 text-violet-800`, { fontFamily: "Poppins_700Bold" }]}>{item.hours}</Text>
                            </View>
                        </View>
                        {isDeleteActive && (
                            <Pressable onPress={() => deleteTodo(item.id)} style={tw`absolute -top-2 w-7 h-7 right-2 items-center justify-center bg-red-500 rounded-xl`}>
                                <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18, top: -2 }}>x</Text>
                            </Pressable>
                        )}
                    </TouchableOpacity>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}


