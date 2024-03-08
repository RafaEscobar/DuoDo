import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react'
import { TodoList } from '../../component/TodoList'
import { todosData } from '../../data/todos';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from "expo-image";
import { AuthContext } from '../../context/AuthContext';

export const AllTask = ({ navigation: { navigate }, route }: any) => {

  const { user }: any = useContext(AuthContext);
  const currentUser = JSON.parse(user);

  let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

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

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`bg-[#271C3A] h-full`}>
      <SafeAreaView style={tw`flex pt-10 ml-2.5`}>
        <View style={tw`flex flex-row justify-between -top-6 w-88 ml-2.5`}>
          <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Tareas de hoy</Text>
          <TouchableOpacity onPress={handleHidePress}>
            <Text style={{ color: '#3478f6', fontFamily: "Poppins_400Regular", fontSize: 18 }}>{isHidden ? "Visualisar" : "Ocultar"}</Text>
          </TouchableOpacity>
        </View>

        <TodoList todosData={localData.filter(todo => todo.isToday)} />

        {/* Esto es para las tareas futuras, en caso de que se quiera implementar
        <Text style={[tw`text-3xl mb-4 mt-4 pl-9`, { fontFamily: "Comfortaa_700Bold" }]}>Tareas Futuras</Text>
        <TodoList todosData={todosData.filter(todo => !todo.isToday)} /> */}
      </SafeAreaView>
    </View>
  )
}