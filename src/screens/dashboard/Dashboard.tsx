import { AlertNotificationRoot } from 'react-native-alert-notification';
import { AuthContext } from '../../context/AuthContext';
import { Image } from "expo-image";
import { IndexWorkspace } from '../../modules/requests/workspaces/IndexWorkspace';
import { Ionicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SwiperComponent } from '../../component/SwiperComponent';
import { TaskComponent } from '../../component/TaskComponent';
import { TasksListMapper } from '../../mappers/Dashboard/TasksListMapper';
import { useFonts } from 'expo-font';
import { WorkspaceListMapper } from '../../mappers/Dashboard/WorkspaceListMapper';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';
import tw from 'twrnc';
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native';
import { TodoList } from '../../component/TodoList';
import { IndexTasks } from '../../modules/requests/Tasks/IndexTask';

export const Dashboard = ({ navigation: { navigate } }: any) => {
    const { user, token, baseUrl }: any = useContext(AuthContext);
    const [workspaces, setWorkspaces] = useState([]);
    const [tasks, setTask] = useState([]);
    const [load, setLoad] = useState(false);

    const currentUser = JSON.parse(user);

    let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

    const loadData = async() => {
        setLoad(true);
        const workpaces_res = await IndexWorkspace(currentUser.external_identifier, token, baseUrl);
        const tasks_res = await IndexTasks(currentUser.external_identifier, token, baseUrl);
        if (workpaces_res.status == 200) {
            setWorkspaces(WorkspaceListMapper(workpaces_res.body.data.reverse()));
            setTask(TasksListMapper(tasks_res.body.data.reverse()));
        }
        setLoad(false);
    }

    useEffect(() => {
        loadData();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
         loadData();
        }, [])
    )

    // useEffect(() => {
    //     console.log(workspaces);
    // }, [workspaces]);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <AlertNotificationRoot>
            <View style={tw`bg-[#271C3A] h-full`}>
                <View style={tw`flex ml-3 mt-10 sm:ml-4 sm:mt-5`}>
                    <View>
                        <View>
                            <Text style={[tw`text-3xl text-white`, { fontFamily: "Poppins_700Bold" }]}>{currentUser.name}</Text>
                            <Text style={[tw`text-lg opacity-80 text-indigo-200`, { fontFamily: "Poppins_400Regular" }]}>Desarrollador Web</Text>
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
                <View style={tw`h-[25%] mb-6`}>
                    <View>
                        <View style={tw`flex flex-row justify-between items-center w-90 ml-3`}>
                            <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Espacios de trabajo</Text>
                            <TouchableOpacity onPress={() => navigate('Workspace')}>
                                <Text style={[tw`text-base text-sky-500`, { fontFamily: "Poppins_700Bold" }]}>Ver todas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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
                            (workspaces.length > 0) ?
                                <SwiperComponent workspaces={workspaces} navigate={navigate} />
                            :
                                <View style={tw`mt-10 flex justify-center items-center`}>
                                    <Text style={tw`text-white text-center font-semibold`}>No tienes espacios de trabajo para mostrar.</Text>
                                    <LottieView
                                        source={require('../../../assets/animations/empty.json')}
                                        style={{width: "80%", height: "80%"}}
                                        autoPlay
                                        loop
                                    />
                                </View>
                    }
                </View>
                <View style={tw`flex h-[45%] px-4 w-full`}>
                    <View>
                        <View style={tw`flex flex-row justify-between items-center`}>
                            <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                            <TouchableOpacity onPress={() => navigate('Task')}>
                                <Text style={[tw`text-base text-sky-500`, { fontFamily: "Poppins_700Bold" }]}>Ver todas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {
                        load ?
                            <View style={tw`flex justify-center items-center h-full`}>
                                <LottieView
                                    source={require('../../../assets/animations/load.json')}
                                    style={{width: "35%", height: "35%"}}
                                    autoPlay
                                    loop
                                />
                            </View>
                        :
                            (tasks.length > 0) ?
                                <TodoList tasks={tasks.slice(0, 3)} />
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
        </AlertNotificationRoot>
    )
}