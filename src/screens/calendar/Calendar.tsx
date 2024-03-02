import { BottonSheetComponent } from '../../component/BottonSheetComponent';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { View, Text, Button } from 'react-native';
import React from 'react';

export const Calendar = () => {
    const { showActionSheetWithOptions } = useActionSheet();
    return (
        <View >
            <Text>Nose</Text>
            <Button title="Menu" onPress={() => {BottonSheetComponent(showActionSheetWithOptions)}}/>
        </View>
    )
}