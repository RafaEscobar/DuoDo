import React, { useState } from 'react';
import { Text, View } from "react-native"
import { LogoutAction } from '../../component/actions/LogoutAction';

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