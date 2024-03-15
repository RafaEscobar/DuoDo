import { AuthContext } from '../../context/AuthContext';
import { Entypo } from '@expo/vector-icons';
import { Image, SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { LoadingComponent } from '../../component/LoadingComponent';
import { LogoutAction } from '../../component/actions/LogoutAction';
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export const Profile = ({ navigation }: any) => {

    const friendList = [
        {
            id: 1,
            name: 'Alexis',
            avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        },
        {
            id: 2,
            name: 'Rafa',
            avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        },
        {
            id: 3,
            name: 'Nelson',
            avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
        }
    ];

    const { user }: any = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const currentUser = JSON.parse(user);
    let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex pt-10 ml-5 w-90`}>
                <View style={tw`flex flex-row justify-between `}>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigation')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
                        <AntDesign name="close" size={30} color="white" style={tw`top-1`} />
                    </TouchableOpacity>
                    <TouchableOpacity style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
                        <MaterialCommunityIcons name="account-edit" size={30} color="white" style={tw`top-1`} />
                    </TouchableOpacity>
                </View>
                <View style={tw`flex items-center`}>
                    <Image
                        source={{ uri: urlImage }}
                        style={tw`border-2 border-blue-500 rounded-full w-38 h-38`}
                    />
                </View>
                <View style={tw`flex flex-col justify-center mt-4`}>
                    <View style={tw`flex justify-center items-center`}>
                        <View style={tw`flex flex-row gap-2 items-stretch`}>
                            <Text style={[tw`text-4xl text-white`, { fontFamily: "Poppins_700Bold" }]}>{currentUser.name}</Text>
                        </View>
                    </View>
                    <Text style={[tw`text-center text-white text-xl`, { fontFamily: "Poppins_600SemiBold" }]}>Desarrollador Web</Text>
                    <Text style={[tw`text-white text-lg font-semibold text-center opacity-50`, { fontFamily: "Poppins_400Regular" }]}>{currentUser.email}</Text>
                </View>
                <View style={tw`mt-4`}>
                    <View style={tw`flex flex-row justify-between items-center`}>
                        <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>Lista de amigos</Text>
                        <TouchableOpacity>
                            <Text style={[tw`text-sky-400 text-base`, { fontFamily: "Poppins_600SemiBold" }]}>Ver todos</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={tw`flex flex-row bg-gray-800 p-3 rounded-xl mt-1`}>
                            <FlatList
                                data={friendList}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }) =>
                                    <View style={tw`flex flex-col items-center justify-center p-1`}>
                                        <Image
                                            source={{ uri: item.avatar }}
                                            style={tw`border-2 border-blue-500 rounded-full w-14 h-14`}
                                        />
                                        <Text style={[tw`text-white`, { fontFamily: "Poppins_600SemiBold" }]}>{item.name}</Text>
                                    </View>
                                }
                            />
                        </View>
                    </View>
                </View>
                <View style={tw`mt-4`}>
                    <Text style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Estadisticas</Text>
                    <View style={tw`bg-gray-800 p-4 rounded-xl mt-1`}>
                        <Text style={[tw`text-white`, { fontFamily: "Poppins_600SemiBold" }]}>Resumen de actividad:</Text>
                        <Text style={[tw`text-white`, { fontFamily: "Poppins_600SemiBold" }]}>¡Mide tu progreso!</Text>
                        <View style={tw`w-full flex items-center mt-2`}>
                            <TouchableOpacity style={tw`bg-blue-600 text-white py-1 px-4 rounded-lg text-xl w-6/12`}>
                                <Text style={[tw`text-center text-white text-lg`, { fontFamily: "Poppins_600SemiBold" }]}>Ver resumen</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={tw`flex flex-row bg-gray-800 p-4 mt-4 rounded-xl items-center justify-center gap-3`}>
                        <Octicons name="person-add" size={30} color="white" />
                        <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>AGREGAR AMIGOS</Text>
                    </View>
                </TouchableOpacity>
                <View style={tw`mt-3`}>
                    <LogoutAction navigation={navigation} setLoading={setLoading} />
                    <LoadingComponent modalVisible={loading} modalText='Saliendo' />
                </View>
            </View>
        </SafeAreaView>
    )
}