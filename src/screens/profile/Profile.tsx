import React, {useContext} from 'react';
import { Text, View } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

export const Profile = () => {
    const { token }:any = useContext(AuthContext);
    console.log(token);
    return (
        <View>
            <Text>Profile</Text>
            <Text>Token: {token}</Text>
        </View>
    )
}