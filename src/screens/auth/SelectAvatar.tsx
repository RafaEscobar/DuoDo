import { LogoutAction } from '../../component/actions/LogoutAction';
import { Image, Text, View } from "react-native"
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { AvatarRequest } from '../../modules/requests/Index';

export const SelectAvatar = ({ navigation }: any) => {
    const [loading, setLoading] = useState(false);
    const { token, baseUrl }:any = useContext(AuthContext);

    let avatars:any;
    const handleAvatar = async() => {
        avatars = await AvatarRequest(token, baseUrl);
        console.log(avatars);
    }
    handleAvatar();
    return (
        <View style={tw`flex items-center justify-center h-full`}>
            <Text>Holis</Text>
            <View>
                <LogoutAction navigation={navigation} setLoading={setLoading} />
            </View>
            {
            avatars.map( (image:any) => (
                <Image key={image.id} source={{ uri: image.url }} />
            ))
            }
        </View>
    )
}