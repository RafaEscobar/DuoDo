import { View, Text } from 'react-native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from "expo-image";
import { SwiperComponent } from '../../component/SwiperComponent';
import { TaskComponent } from '../../component/TaskComponent';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';



export const Create = ({ navigation: { navigate }, route }: any) => {

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
                        <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Alexis</Text>
                        <Text style={[tw`text-xl opacity-50`, { fontFamily: "Poppins_400Regular" }]}>Desarrollador Web</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row-reverse items-center -top-15 -left-5 gap-2`}>
                    <Ionicons name="notifications" size={25} color="black" style={tw`bg-orange-400 p-2 rounded-2xl mb-4`} />
                    <Image
                        style={tw`w-15 h-15 rounded-full`}
                        source="http://github.com/AlexisSM377.png"
                    />
                </View>
                <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Teams</Text>
            </View>
            <View>
                <SwiperComponent />
            </View>
            <View style={tw`flex ml-3 mt-6 sm:ml-4 sm:mt-5`}>
                <View>
                    <View>
                        <Text style={[tw`text-3xl`, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
                    </View>
                    <View style={tw`flex flex-row pl-70 gap-2 items-center -mt-6`} >
                        <TouchableOpacity onPress={() => { navigate('AllTask') }}>
                            <MaterialIcons name="add-task" size={25} color="black" style={tw`bg-indigo-400 p-2 rounded-2xl -top-4`} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={tw`w-92 h-80`}>
                    <TaskComponent />
                </View>
            </View>
        </View>
    )
}
