import { AuthContext } from '../../context/AuthContext';
import { CheckList } from '../../component/workspace/CheckList';
import { CollaboratorsList } from '../../mappers/Collaborators/CollaboratorsList';
import { FontAwesome } from '@expo/vector-icons';
import { IndexCollaborators } from '../../modules/requests/Collaborators/IndexCollaborators';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { todosData } from '../../data/todos';
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import { useFocusEffect } from '@react-navigation/native';
import { TodoList } from '../../component/TodoList';

export const DetailsWorkspace = ({ navigation: { navigate }, route }: any) => {
  const [localData, setLocalData] = useState(
    todosData.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted))
  );

  const [isHidden, setIsHidden] = useState(false);
  const [collaborators, setCollaborators] = useState([]);
  const { workspace } = route.params;
  console.log(workspace);
  const { baseUrl, token, user }:any = useContext(AuthContext);

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(todosData.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)));
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(localData.filter(todo => !todo.isCompleted));
  };

  const loadData = async() => {
    const collaborators_res = await IndexCollaborators(workspace.id, token, baseUrl);
    if (collaborators_res.status == 200) {
      console.log(collaborators_res.body.data.length);
      setCollaborators(CollaboratorsList(collaborators_res.body.data));
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
     loadData();
    }, [])
  )

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={tw`bg-gray-900 h-full`}>
      <View style={tw`flex pt-10 ml-3.5 w-90`}>
        <View style={tw`flex flex-row justify-between`}>
          <Text style={[tw`text-sky-400 text-2xl `, { fontFamily: "Poppins_700Bold" }]}>
            {workspace.name.slice(0, 22)}...
          </Text>
          <TouchableOpacity onPress={() => navigate('Members', {workspace: workspace.id, collaborators: collaborators})}>
            <FontAwesome name="group" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={tw`mt-3`}>
          <Text style={[tw`text-white text-lg`, { fontFamily: "Poppins_700Bold" }]}>
            Tareas: {workspace.tasks.length}
          </Text>
          <Text style={[tw`text-white text-lg`, { fontFamily: "Poppins_700Bold" }]}>
            Miembros: {collaborators.length}
          </Text>
        </View>
        <View style={tw`mt-3`}>
          <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>
            Descripcion
          </Text>
          <Text style={[tw`text-white text-base opacity-50`, { fontFamily: "Poppins_400Regular" }]}>
            {workspace.description}
          </Text>
        </View>
        <View style={tw`flex flex-row justify-between mt-2 items-center`}>
          <Text style={[tw`text-white text-2xl`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
          <TouchableOpacity>
            <Text style={[tw`text-[#3478f6] text-lg`, { fontFamily: "Poppins_700Bold" }]} onPress={handleHidePress}>
              {isHidden ? 'Mostrar' : 'Ocultar'}
            </Text>
          </TouchableOpacity>
        </View>
        <TodoList tasks={workspace.tasks} />
      </View>
    </SafeAreaView>
  )
}