import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { TodoList } from '../../component/TodoList'
import { todosData } from '../../data/todos';
import { AntDesign } from '@expo/vector-icons';
import tw from 'twrnc';
import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { useFonts } from 'expo-font';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const AllTask = () => {

  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Comfortaa_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
  );

  const [isHidden, setIsHidden] = useState(false);

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(todosData.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)));
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(localData.filter(todo => !todo.isCompleted));
  };

  return (
    <SafeAreaView style={tw`flex-1 pt-10 ml-2.5`}>
      <TouchableOpacity>
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={tw`flex-row items-center justify-around`}>
        <Text style={[tw`text-3xl mb-4 mt-4 text-center`, { fontFamily: "Comfortaa_700Bold" }]}>Tareas de hoy</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: '#3478f6', fontFamily: "Comfortaa_500Medium", fontSize: 18 }}>{isHidden ? "Visualisar" : "Ocultar"}</Text>
        </TouchableOpacity>
      </View>

      <TodoList todosData={localData.filter(todo => todo.isToday)} />

      <Text style={[tw`text-3xl mb-4 mt-4 pl-9`, { fontFamily: "Comfortaa_700Bold" }]}>Tareas para mañana</Text>
      <TodoList todosData={todosData.filter(todo => !todo.isToday)} />

      <TouchableOpacity  style={tw`w-15 h-15 bg-indigo-400 p-2 rounded-2xl absolute bottom-5 right-8`}>
        <MaterialIcons name="add-task" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}