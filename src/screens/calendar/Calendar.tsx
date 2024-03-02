import { useActionSheet } from '@expo/react-native-action-sheet';
import React from 'react';
import { View, Text, Button } from 'react-native';

export const Calendar = () => {
    const { showActionSheetWithOptions } = useActionSheet();

    const showBottomSheet = () => {
        const options = ['Tarea', 'Espacio de trabajo', 'Cerrar'];

        const cancelButtonIndex = 2;
        const title = '¿Qué deseas crear?';
        const message = 'Puedes generar una tarea individual/colaborativa o un espacio de trabajo para mantener tus pendientes más organizados y llevar un seguimiento de los mismos.';

        showActionSheetWithOptions({
            options,
            cancelButtonIndex,
            title,
            message,
            cancelButtonTintColor:'red'
        },
        (selectedIndex) => {
            switch (selectedIndex) {
                case 1:
                // Save
                break;

                case 2:
                // Delete
                break;
                case cancelButtonIndex:
                // Canceled
            }
        });
    }
    return (
        <View >
            <Text>Nose</Text>
            <Button title="Menu" onPress={showBottomSheet}/>
        </View>
    )
}