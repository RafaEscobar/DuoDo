import { AuthContext } from '../../context/AuthContext';
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { SwiperComponent } from '../../component/SwiperComponent';
import { TaskComponent } from '../../component/TaskComponent';
import { useFonts } from 'expo-font';
import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import tw from 'twrnc';

export const Dashboard = ({ navigation: { navigate } }: any) => {
    const { user }:any = useContext(AuthContext);
    const currentUser = JSON.parse(user);

    let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={tw`flex ml-3 mt-10 sm:ml-4 sm:mt-5`}>
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
                <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Teams</Text>
            </View>
            <View>
                <SwiperComponent />
            </View>
            <View style={tw`flex ml-3 mt-6 sm:ml-4 sm:mt-5`}>
                <View>
                    <View style={tw`flex flex-row justify-between items-center w-90`}>
                        <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                        <TouchableOpacity onPress={() => navigate('AllTask')}>
                            <Text style={[tw`text-base text-sky-500`, {fontFamily: "Poppins_700Bold"}]}>Ver todas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tw`w-92 h-85`}>
                    <TaskComponent />
                </View>
            </View>
        </View>
    )
}