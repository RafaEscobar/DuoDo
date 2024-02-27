import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { LogoutAction } from '../../component/actions/LogoutAction';
import { LoadingComponent } from '../../component/LoadingComponent';

export const Profile = ({ navigation }: any) => {
const [loading, setLoading] = useState(false);

const { user }:any = useContext(AuthContext);
const currentUser = JSON.parse(user);
    return (
        <View>
            <View style={tw`bg-[#271C3A] w-full h-[100%]`}>
                <View style={tw`w-full flex justify-end pr-10 pt-8`}>
                    <Text style={tw`w-8 h-8 fill-white`}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path
                                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"
                                style={tw`w-8 h-8 fill-white`} /></svg> */}
                    </Text>
                </View>
                <View style={tw`flex justify-center mt-8`}>
                    <Image
                        source={{ uri: 'https://i.postimg.cc/Vvkd9khj/avatar.png' }}
                        style={tw`border-2 border-blue-500 rounded-full`}
                    />
                </View>
                <View style={tw`flex flex-col justify-center mt-4`}>
                    <Text style={tw`block text-white text-3xl font-bold text-center`}>Nombre</Text>
                    <Text style={tw`block text-white text-2xl font-semibold text-center`}>rafa@gmail.com</Text>
                </View>
                <View style={tw`bg-white mt-10 rounded-t-2xl p-4`}>
                    <View>
                        <Text style={tw`block font-bold text-xl mb-4`}>Lista de amigos</Text>
                        <View style={tw`bg-[#271C3A] w-full py-2 rounded-2xl`}>
                            <View style={tw`w-2/12 flex flex-col justify-center items-center`}>
                                <Image
                                    source={{ uri: 'https://i.postimg.cc/QxJGcqDZ/b.png' }}
                                    style={tw`border-2 border-blue-500 rounded-full`}
                                />
                                <Text style={tw`text-white`}>Nombre</Text>
                            </View>
                        </View>
                        <View style={tw`mt-10`}>
                            <Text style={tw`block font-bold text-xl mb-4`}>Estadisticas</Text>
                            <View style={tw`bg-[#271C3A] w-full py-4 rounded-2xl px-4`}>
                                <Text style={tw`block text-xl mb-1 font-semibold text-white`}>Resumen de actividad:</Text>
                                <Text style={tw`block text-xl mb-4 text-white`}>¡Mide tu progreso!</Text>
                                <View style={tw`w-full flex justify-center`}>
                                    <TouchableOpacity style={tw`bg-blue-600 text-white py-1 px-4 rounded-lg text-xl`}>
                                        <Text>Ver resumen</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <View style={tw`flex items-end pr-4 pt-4 w-full`}>
                    <LogoutAction navigation={navigation} setLoading={setLoading} />
                </View>
                <LoadingComponent modalVisible={loading} modalText='Saliendo' /> */}
            </View>
        </View>
    )
}