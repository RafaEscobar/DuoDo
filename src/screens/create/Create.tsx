import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { AvatarRequest } from '../../modules/requests/AvatarRequest';
import tw from 'twrnc';
import { SetAvatarRequest } from '../../modules/requests/Index';
import { LoadingComponent } from '../../component/LoadingComponent';

export const Create = () => {
    const [avatars, setAvatars] = useState([]);
    const [selected, setSelected] = useState('https://kaihatsu-code.com/assets/avatars/avatar_a.png');
    const [selectedId, setSelectedId] = useState(1);
    const [loading, setLoading] = useState(false);

    const { token, baseUrl, authUrl, user }:any = useContext(AuthContext);

    useEffect(() => {
        const handleAvatar = async() => {
            const data = await AvatarRequest(token, baseUrl)
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
        SetAvatarRequest(token, authUrl, currentUser.external_identifier, selectedId);
        setLoading(false);
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