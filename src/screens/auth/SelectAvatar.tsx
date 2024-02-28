import { AuthContext } from '../../context/AuthContext';
import { AvatarRequest } from '../../modules/requests/AvatarRequest';
import { LoadingComponent } from '../../component/LoadingComponent';
import { RefreshUser, SetAvatarRequest } from '../../modules/requests/Index';
import { View, Text, Image, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import tw from 'twrnc';

export const SelectAvatar = () => {
    const [avatars, setAvatars] = useState([]);
    const [selected, setSelected] = useState('https://kaihatsu-code.com/assets/avatars/avatar_a.png');
    const [selectedId, setSelectedId] = useState(1);
    const [loading, setLoading] = useState(false);

    const { baseUrl, authUrl, user, setUser }:any = useContext(AuthContext);

    useEffect(() => {
        const handleAvatar = async() => {
            const data = await AvatarRequest(baseUrl);
            setAvatars(data);
        }
        handleAvatar();
    }, []);

    const handleSelect = (url:any, id:any) => {
        setSelected(url);
        setSelectedId(id);
    }

    const handleSaveSelect = async() => {
        setLoading(true);
        const currentUser = JSON.parse(user);
        SetAvatarRequest(authUrl, currentUser.external_identifier, selectedId);
        await procedures();
        setLoading(false);
        // navigate('BottomTabNavigation');
    }

    const procedures = async() => {
        const response = await RefreshUser(authUrl);
        await AsyncStorage.setItem('user', JSON.stringify(response.data));
        console.log(JSON.stringify(response.data));
        console.log(await AsyncStorage.getItem('user'));
        setUser(JSON.stringify(response.data));
    }

    return (
        <View style={tw`flex justify-center items-center h-full bg-[#271C3A]`}>
            <View style={tw`h-[60%] top-25`}>
                <Text style={tw`text-3xl text-white font-semibold bottom-15 text-center`}>Elige tu avatar</Text>
                <ScrollView
                    horizontal
                >
                    {avatars.map((image:any) => (
                        <TouchableOpacity key={image.id} onPress={() => handleSelect(image.url, image.id)}>
                            <Image
                                source={{ uri: image.url }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={tw`flex items-center top-6`}>
                    <Text style={tw`text-2xl text-white font-semibold`}>Selección</Text>
                    <Image
                        source={{ uri: selected }}
                        style={styles.imageSelected}
                    />
                </View>
                <View style={tw`mt-8 flex items-center`}>
                    <TouchableOpacity
                        onPress={handleSaveSelect}
                        style={tw`w-4/12 bg-[#5556FF] py-2 rounded-xl`}
                    >
                        <Text style={tw`text-center text-xl text-white font-semibold`}>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <LoadingComponent modalVisible={loading} modalText='Guardando' />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      marginBottom: 10,
      borderRadius: 100,
      borderColor: '#5556FF',
      borderWidth: 3,
      marginRight: 30,
    },
    imageSelected: {
      width: 90,
      height: 90,
      marginBottom: 10,
      borderRadius: 100,
      borderColor: '#5556FF',
      borderWidth: 3,
    },
  });