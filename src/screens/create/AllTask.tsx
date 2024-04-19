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
import LottieView from 'lottie-react-native';

export const AllTask = ({ navigation: { navigate }, route }: any) => {
  const { user, token, baseUrl }: any = useContext(AuthContext);
  const currentUser = JSON.parse(user);
  const [tasks, setTask] = useState([]);
  const [load, setLoad] = useState(false);

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
      <View style={tw`flex pt-3 ml-2.5 w-90`}>
        <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
        {
            load ?
              <View style={tw`flex justify-center items-center h-full`}>
                  <LottieView
                    source={require('../../../assets/animations/load.json')}
                    style={{width: "50%", height: "50%"}}
                    autoPlay
                    loop
                  />
              </View>
            :
              (tasks.length > 0) ?
                <TodoList tasks={tasks} />
              :
                <View style={tw`mt-10 flex justify-center items-center`}>
                    <Text style={tw`text-white text-center font-semibold`}>No tienes tareas para mostrar.</Text>
                    <LottieView
                        source={require('../../../assets/animations/empty.json')}
                        style={{width: "80%", height: "80%"}}
                        autoPlay
                        loop
                    />
                </View>
        }
      </View>
    </View>
  )
}