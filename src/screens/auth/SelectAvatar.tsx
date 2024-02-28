import { LogoutAction } from '../../component/actions/LogoutAction';
import { Text, View } from "react-native"
import React, { useState } from 'react';

export const SelectAvatar = ({ navigation }: any) => {
    const [loading, setLoading] = useState(false);
    return (
        <View>
            <Text>Holis</Text>
            <View>
                <LogoutAction navigation={navigation} setLoading={setLoading} />
            </View>
        </View>
    )
}