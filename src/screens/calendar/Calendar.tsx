import { ModalSheetComponent } from '../../component/ModalSheetComponent';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { View, Text, Button } from 'react-native';
import React from 'react';

export const Calendar = () => {
    const { showActionSheetWithOptions } = useActionSheet();
    return (
        <View >
            <Text>Nose</Text>
            <Button title="Menu" onPress={() => {ModalSheetComponent(showActionSheetWithOptions)}}/>
        </View>
    )
}