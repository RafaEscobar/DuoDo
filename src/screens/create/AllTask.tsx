import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react'
import { TodoList } from '../../component/TodoList'
import { todosData } from '../../data/todos';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { Comfortaa_700Bold, Comfortaa_500Medium } from "@expo-google-fonts/comfortaa";
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from "expo-image";
import { AuthContext } from '../../context/AuthContext';

export const AllTask = ({ navigation: { navigate }, route }: any) => {

  const { user }:any = useContext(AuthContext);
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
    Comfortaa_700Bold,
    Comfortaa_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={tw`flex-1 pt-10 ml-2.5`}>
      <View style={tw`flex ml-2.5 sm:ml-4 sm:mt-5`}>
        <View>
          <View>
            <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>{currentUser.name}</Text>
            <Text style={[tw`text-xl opacity-50`, { fontFamily: "Poppins_400Regular" }]}>Desarrollador Web</Text>
          </View>
        </View>
        <View style={tw`flex flex-row-reverse items-center -top-15 -left-5 gap-2`}>
          <Ionicons name="notifications" size={25} color="black" style={tw`bg-orange-400 p-2 rounded-2xl mb-4`} />
          <Image
            style={tw`w-15 h-15 rounded-full`}
            source={urlImage}	
          />
        </View>
      </View>

      <View style={tw`flex flex-row justify-between -top-6 w-88 ml-2.5`}>
        <Text style={[tw`text-3xl text-center`, { fontFamily: "Comfortaa_700Bold" }]}>Tareas de hoy</Text>
        <TouchableOpacity onPress={handleHidePress}>
          <Text style={{ color: '#3478f6', fontFamily: "Comfortaa_500Medium", fontSize: 18 }}>{isHidden ? "Visualisar" : "Ocultar"}</Text>
        </TouchableOpacity>
      </View>

      <TodoList todosData={localData.filter(todo => todo.isToday)} />

      {/* Esto es para las tareas futuras, en caso de que se quiera implementar
      <Text style={[tw`text-3xl mb-4 mt-4 pl-9`, { fontFamily: "Comfortaa_700Bold" }]}>Tareas Futuras</Text>
      <TodoList todosData={todosData.filter(todo => !todo.isToday)} /> */}

      <TouchableOpacity onPress={() => navigate('AddTask')} style={tw`w-15 h-15 bg-indigo-400 p-2 rounded-2xl absolute bottom-5 right-8`}>
        <MaterialIcons name="add-task" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}