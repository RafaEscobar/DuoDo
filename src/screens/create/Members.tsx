import { AntDesign, Octicons, FontAwesome } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { IndexFriends } from '../../modules/requests/Friends/IndexFriends';
import { AuthContext } from '../../context/AuthContext';
import { SelectList } from 'react-native-dropdown-select-list';
import { FriendSelectMapper } from '../../mappers/Friends/FriendSelectMapper';
import { AddCollaborator } from '../../modules/requests/workspaces/AddCollaborator';

export const Members = ({ route }: any) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [friendCode, setFriendCode] = useState('');
    const [friends, setFriends] = useState([]);
    const [friend, setFriend] = useState([]);

    const { workspace } = route.params;

    const { baseUrl, token, user }:any = useContext(AuthContext);

    const loadData = async() => {
        let external_identifier = JSON.parse(user).external_identifier;
        const friends_res = await IndexFriends(external_identifier, token, baseUrl);
        if (friends_res.status== 200) {
            setFriends(FriendSelectMapper(friends_res.body.data));
        }
    }

    const handleCollaborationInvite = async() => {
        let external_identifier = JSON.parse(user).external_identifier;
        const res = await AddCollaborator(external_identifier, friend, workspace, token, baseUrl);
        console.log(res);
    }

    useEffect(() => {
        loadData();
    }, []);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold
    });

    if (!fontsLoaded) {
        return null;
    }

    const members = [
        {
            "id": 1,
            "name": "Alejandro",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Administrador"
        },
        {
            "id": 2,
            "name": "Juan",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Miembro"
        },
        {
            "id": 3,
            "name": "Pedro",
            "avatar": "https://www.w3schools.com/w3images/avatar2.png",
            "role": "Miembro"
        }
    ];

    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-gray-900 h-full`}>
            <View style={tw`flex pt-10 ml-4.5 w-90`}>
                <View style={tw`flex flex-row items-end gap-5`}>
                    <TouchableOpacity
                    onPress={() => navigation.goBack() }
                    >
                        <AntDesign name="left" size={26} color="black" style={tw`bg-neutral-300 w-9 h-9 rounded-xl p-1`} />
                    </TouchableOpacity>
                    <View style={tw`flex flex-row w-[80%] justify-between`}>
                        <View style={tw``}>
                            <Text style={[tw`text-center text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Miembros</Text>
                        </View>
                        <View style={tw``}>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <AntDesign name="addusergroup" size={28} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    {members.map((item) => (
                        <View style={tw`flex flex-row items-center mt-3 gap-3 bg-gray-800 p-2 rounded-xl`} key={item.id}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={tw`w-10 h-10 rounded-full ml-2`}
                            />
                            <View>
                                <Text style={[tw`text-white text-xl`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                                <Text style={[tw`text-white text-base opacity-50`, { fontFamily: "Poppins_400Regular" }]}>{item.role}</Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={tw`w-[80%] mb-4`}>
                                <Text style={tw`mb-4`}>Invitar a un amigo:</Text>
                                <SelectList
                                    data={friends}
                                    setSelected={(item:any) => setFriend(item)}
                                    save='key'
                                    search={false}
                                    inputStyles={tw`text-black`}
                                    dropdownTextStyles={tw`text-black`}
                                    fontFamily='Poppins_400Regular'
                                    placeholder='- Eligue a un amigo -'
                                    notFoundText="No tienes espacios de trabajo, crea uno antes."
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
                                        handleCollaborationInvite()
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <Text style={tw`text-white font-semibold`}>Invitar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
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