import { Text, View } from 'react-native';
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
            <View style={tw`flex items-end pr-4 pt-4 w-full`}>
                <LogoutAction navigation={navigation} setLoading={setLoading} />
            </View>
            <Text>Profile</Text>
            <Text>Usuario: {currentUser.name}</Text>
            <Text>Correo electronico: {currentUser.email}</Text>
            <LoadingComponent
                modalVisible={loading}
                modalText='Saliendo'
            />
        </View>
    )
}