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
import { View, Text, TouchableOpacity } from 'react-native';
import { WorkspaceListMapper } from '../../mappers/Dashboard/WorkspaceListMapper';
import React, { useContext, useEffect, useState } from 'react';
import tw from 'twrnc';

export const Dashboard = ({ navigation: { navigate } }: any) => {
    const { user, token, baseUrl }: any = useContext(AuthContext);
    const [workspaces, setWorkspaces] = useState([]);
    const [tasks, setTask] = useState([]);

    const currentUser = JSON.parse(user);

    let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

    const loadData = async() => {
        const workpaces_res = await IndexWorkspace(currentUser.external_identifier, token, baseUrl);
        if (workpaces_res.status == 200) {
            setWorkspaces(WorkspaceListMapper(workpaces_res.body.data));
            setTask(TasksListMapper(workpaces_res.body.data));
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    // useEffect(() => {
    //     console.log(workspaces);
    //     console.log(tasks);
    // }, [workspaces, tasks]);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <AlertNotificationRoot>
            <View style={tw`bg-[#271C3A]`}>
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
                <View>
                    <View>
                        <View style={tw`flex flex-row justify-between items-center w-90 ml-3`}>
                            <Text style={[tw`text-3xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Workspace</Text>
                            <TouchableOpacity onPress={() => navigate('Workspace')}>
                                <Text style={[tw`text-base text-sky-500`, { fontFamily: "Poppins_700Bold" }]}>Ver todas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <SwiperComponent workspaces={workspaces} />
                </View>
                <View style={tw`flex ml-3 mt-6 sm:ml-4 sm:mt-5`}>
                    <View>
                        <View style={tw`flex flex-row justify-between items-center w-90`}>
                            <Text style={[tw`text-3xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                            <TouchableOpacity onPress={() => navigate('Task')}>
                                <Text style={[tw`text-base text-sky-500`, { fontFamily: "Poppins_700Bold" }]}>Ver todas</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`w-92 h-85`}>
                        <TaskComponent tasks={tasks} />
                    </View>
                </View>
            </View>
        </AlertNotificationRoot>
    )
}