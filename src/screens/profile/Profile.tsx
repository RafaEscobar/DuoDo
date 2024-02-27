import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { LogoutAction } from '../../component/actions/LogoutAction';
import { LoadingComponent } from '../../component/LoadingComponent';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export const Profile = ({ navigation }: any) => {
const [loading, setLoading] = useState(false);

const { user }:any = useContext(AuthContext);
const currentUser = JSON.parse(user);
    return (
        <ScrollView>
            <View>
                <View style={tw`bg-[#271C3A] w-full h-[100%]`}>
                    <View style={tw`w-full flex pr-6 pt-6`}>
                        <View style={tw`flex flex-col items-end`}>
                            <LogoutAction navigation={navigation} setLoading={setLoading} />
                        </View>
                    </View>
                    <View style={tw`flex items-center mt-8 w-full`}>
                        <Image
                            source={{ uri: 'https://i.postimg.cc/Vvkd9khj/avatar.png' }}
                            style={tw`border-2 border-blue-500 rounded-full w-38 h-38`}
                        />
                    </View>
                    <View style={tw`flex flex-col justify-center mt-4`}>
                        <View>
                            <Text style={tw`text-white text-3xl font-bold text-center`}>
                                <Text style={tw``}>{currentUser.name}</Text>
                                <Text style={tw`pr-10`}> </Text>
                                <Entypo name="edit" size={24} color="white" />
                            </Text>
                        </View>
                        <Text style={tw`text-white text-xl font-semibold text-center`}>{currentUser.email}</Text>
                    </View>
                    <View style={tw`bg-white mt-10 rounded-t-2xl p-4`}>
                        <View>
                            <Text style={tw`font-bold text-xl mb-4`}>Lista de amigos</Text>
                            <View style={tw`flex bg-[#271C3A] w-full py-2 px-6 rounded-2xl`}>
                                <View style={tw`w-3/12 flex flex-col justify-center items-center `}>
                                    <Image
                                        source={{ uri: 'https://i.postimg.cc/QxJGcqDZ/b.png' }}
                                        style={tw`border-2 border-blue-600 rounded-full w-16 h-16`}
                                    />
                                    <Text style={tw`text-white font-semibold`}>Nombre</Text>
                                </View>
                                {/* <View style={tw`w-3/12 flex flex-col justify-center items-center `}>
                                    <Image
                                        source={{ uri: 'https://i.postimg.cc/QxJGcqDZ/b.png' }}
                                        style={tw`border-2 border-blue-500 rounded-full w-16 h-16`}
                                    />
                                    <Text style={tw`text-white font-semibold`}>Nombre</Text>
                                </View> */}
                            </View>
                            <View style={tw`mt-10`}>
                                <Text style={tw`font-bold text-xl mb-4`}>Estadisticas</Text>
                                <View style={tw`bg-[#271C3A] w-full py-4 rounded-2xl px-4`}>
                                    <Text style={tw`text-xl mb-1 font-semibold text-white`}>Resumen de actividad:</Text>
                                    <Text style={tw`text-lg mb-4 text-white`}>¡Mide tu progreso!</Text>
                                    <View style={tw`w-full flex items-center`}>
                                        <TouchableOpacity style={tw`bg-blue-600 text-white py-1 px-4 rounded-lg text-xl w-6/12`}>
                                            <Text style={tw`text-center text-white text-lg`}>Ver resumen</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <LoadingComponent modalVisible={loading} modalText='Saliendo' />
                </View>
            </View>
        </ScrollView>
    )
}