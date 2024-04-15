import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../context/AuthContext';
import { Image, SafeAreaView, Text, View, TouchableOpacity, FlatList, Modal, StyleSheet, Pressable, Alert, TextInput } from 'react-native';
import { LoadingComponent } from '../../component/LoadingComponent';
import { LogoutAction } from '../../component/actions/LogoutAction';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { ScrollView } from '@gluestack-ui/themed';
import { useFonts } from 'expo-font';
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import * as Clipboard from 'expo-clipboard';
import { FriendRequestStore } from '../../modules/requests/FriendRequests/FriendRequestStore';
import { ALERT_TYPE, AlertNotificationRoot } from 'react-native-alert-notification';
import { useAlert } from '../../hooks/useAlert';
import { IndexFriends } from '../../modules/requests/Friends/IndexFriends';
import {useEffect} from 'react';
import { FriendListMapper } from '../../mappers/Friends/FriendListMapper';

export const Profile = ({ navigation }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [friendCode, setFriendCode] = useState('');
    const [friends, setFriends] = useState([]);
    const { user,  baseUrl, token }: any = useContext(AuthContext);
    const currentUser = JSON.parse(user);
    let urlImage = (currentUser.avatar.length > 0) ? currentUser.avatar[0].url : 'https://i.postimg.cc/FH8ZXxfK/default.png';

    const loadContent = async() => {
        const friends_res = await IndexFriends(currentUser.external_identifier, token, baseUrl);
        setFriends(FriendListMapper(friends_res.body.data));
    }

    useEffect(() => {
        loadContent();
    }, []);

    const [loading, setLoading] = useState(false);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(currentUser.external_identifier);
    };

    const handleFriendRequest = async() => {
        if (friendCode.length > 0) {
            setModalVisible(!modalVisible);
            const response = await FriendRequestStore(currentUser.external_identifier, friendCode, baseUrl, token);
            if (response.status == 200) {
                if (response.body.status == 'rejected') {
                    useAlert(ALERT_TYPE.INFO, 'Rechazada', response.body.message);
                } else {
                    useAlert(ALERT_TYPE.SUCCESS, 'Enviado', "Solicitud de amistad enviada exitosamente.");
                }
            } else {
                useAlert(ALERT_TYPE.WARNING, 'Algo salió mal', response.body.message);
            }
        } else {
            useAlert(ALERT_TYPE.WARNING, 'Sin código', "Ingresa un código de usuario.");
        }
    }

    return (
        <AlertNotificationRoot>
            <ScrollView style={tw`bg-gray-900 h-full`}>
                <SafeAreaView style={tw`bg-gray-900 h-full pb-10`}>
                    <View style={tw`flex pt-10 w-full px-4`}>
                        <View style={tw`flex flex-row justify-between `}>
                            <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigation')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
                                <AntDesign name="close" size={30} color="white" style={tw`top-1`} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Edit')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
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
                            <TouchableOpacity onPress={copyToClipboard}>
                                <Text style={[tw`text-white text-sm font-semibold opacity-70 text-center`, { fontFamily: "Poppins_400Regular" }]}>
                                    <AntDesign name="copy1" size={18} color="white" />
                                    <Text>Código de usuario</Text>
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={tw`mt-4`}>
                            <View style={tw`flex flex-row justify-between items-center`}>
                                <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>Lista de amigos</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('ListFriends')}>
                                    <Text style={[tw`text-sky-400 text-base`, { fontFamily: "Poppins_600SemiBold" }]}>Ver todos</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={tw`flex flex-row bg-gray-800 p-3 rounded-xl mt-1`}>
                                    {
                                        (friends.length > 0) ?
                                            <FlatList
                                                data={friends}
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                                keyExtractor={(item:any) => item.id}
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
                                            :
                                            <Text style={{color: 'white'}}>No tienes amigos que mostrar.</Text>
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={tw`mt-4`}>
                            <Text style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Estadisticas</Text>
                            <View style={tw`bg-gray-800 p-4 rounded-xl mt-1`}>
                                <Text style={[tw`text-white`, { fontFamily: "Poppins_600SemiBold" }]}>Resumen de actividad:</Text>
                                <Text style={[tw`text-white`, { fontFamily: "Poppins_600SemiBold" }]}>¡Mide tu progreso!</Text>
                                <View style={tw`w-full flex items-center mt-2`}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Manage')} style={tw`bg-blue-600 text-white py-1 px-4 rounded-lg text-xl w-6/12`}>
                                        <Text style={[tw`text-center text-white text-lg`, { fontFamily: "Poppins_600SemiBold" }]}>Ver resumen</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={tw`w-full`}>
                                    <Text style={tw`mb-4`}>Enviar solicitud de amistad a:</Text>
                                    <TextInput
                                        style={[tw`border-b border-gray-400 text-xs mb-4 text-black`, { fontFamily: "Poppins_400Regular" }]}
                                        placeholderTextColor={'#58b4ff'}
                                        placeholder='El código de tu amigo.'
                                        onChangeText={(text) => { setFriendCode(text) }}
                                        multiline={true}
                                        underlineColorAndroid={'transparent'}
                                        numberOfLines={1}
                                    />
                                </View>
                                <View style={[{flexDirection: 'row', justifyContent: 'flex-end'}, tw`w-[65%]`]}>
                                    <TouchableOpacity
                                        style={[styles.button, tw`bg-gray-900 mr-2`]}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={tw`text-white font-semibold`}>Cerrar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[styles.button, tw`bg-blue-600`]}
                                        onPress={() => {
                                            handleFriendRequest();
                                        }}>
                                        <Text style={tw`text-white font-semibold`}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </SafeAreaView>
            </ScrollView>
        </AlertNotificationRoot>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  });