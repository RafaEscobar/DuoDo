import { Text, View, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { AntDesign } from '@expo/vector-icons';

export const Profile = ({ navigation: { navigate } }: any) => {
    const { user }:any = useContext(AuthContext);
    const currentUser = JSON.parse(user);
    const deleteToken = async() => {
        await AsyncStorage.removeItem('u-token');
        navigate('Login');
    }
    return (
        <View>
            <View style={tw`flex items-end pr-4 pt-4 w-full`}>
                <View style={tw``}>
                    <TouchableOpacity
                    onPress={() => { deleteToken() }}
                        style={tw`mb-4`}
                    >
                        <AntDesign name="login" size={35} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text>Profile</Text>
            <Text>Usuario: {currentUser.name}</Text>
            <Text>Correo electronico: {currentUser.email}</Text>
        </View>
    )
}