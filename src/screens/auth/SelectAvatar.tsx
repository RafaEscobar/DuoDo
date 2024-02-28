import { LogoutAction } from '../../component/actions/LogoutAction';
import { Image, Text, View } from "react-native"
import React, { useContext, useState } from 'react';
import tw from 'twrnc';
import { AuthContext } from '../../context/AuthContext';
import { AvatarRequest } from '../../modules/requests/Index';

export const SelectAvatar = ({ navigation }: any) => {
    return (
        <View style={tw`flex items-center justify-center h-full`}>
            <Text>Holis</Text>
        </View>
    )
}