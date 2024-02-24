import { Text, View } from 'react-native';
import React, { useContext } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { LogoutAction } from '../../component/actions/LogoutAction';

export const Profile = ({ navigation: { navigate } }: any) => {
    const { user }:any = useContext(AuthContext);
    const currentUser = JSON.parse(user);
    return (
        <View>
            <View style={tw`flex items-end pr-4 pt-4 w-full`}>
                <LogoutAction navigation={navigate} />
            </View>
            <Text>Profile</Text>
            <Text>Usuario: {currentUser.name}</Text>
            <Text>Correo electronico: {currentUser.email}</Text>
        </View>
    )
}