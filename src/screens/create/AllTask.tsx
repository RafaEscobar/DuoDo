import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import { TodoList } from '../../component/TodoList'
import { todosData } from '../../data/todos';
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { AuthContext } from '../../context/AuthContext';
import { IndexWorkspace } from '../../modules/requests/workspaces/IndexWorkspace';
import { TasksListMapper } from '../../mappers/Dashboard/TasksListMapper';

export const AllTask = ({ navigation: { navigate }, route }: any) => {
  const { user, token, baseUrl }: any = useContext(AuthContext);
  const currentUser = JSON.parse(user);
  const [tasks, setTask] = useState([]);

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

  const loadData = async() => {
    const workpaces_res = await IndexWorkspace(currentUser.external_identifier, token, baseUrl);
    if (workpaces_res.status == 200) {
        setTask(TasksListMapper(workpaces_res.body.data));
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={tw`bg-[#271C3A] h-full`}>
      <SafeAreaView style={tw`flex pt-10 ml-2.5`}>
        <View style={tw`flex flex-row justify-between -top-6 w-88 ml-2.5`}>
          <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Tareas de hoy</Text>
          <TouchableOpacity onPress={handleHidePress}>
            <Text style={{ color: '#3478f6', fontFamily: "Poppins_400Regular", fontSize: 18 }}>{isHidden ? "Visualisar" : "Ocultar"}</Text>
          </TouchableOpacity>
        </View>
        <TodoList tasks={tasks} />
      </SafeAreaView>
    </View>
  )
}