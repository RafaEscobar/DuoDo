import { View, Text } from 'react-native'
import { Image } from "expo-image";
import React from 'react'
import { ModalSheetScreen } from './ModalSheetScreen';
import { ModalProfile } from './ModalProfile';

type Props = {
    route: string;
    isFocused: boolean;
    navigation: any;
};

export const BottomTabIcon = ({ route, isFocused, navigation }: Props) => {
    const renderIcon = (route: string, isFocused: boolean, navigation:any) => {
        let height: number = 30;
        let width: number = 30;

        switch (route) {
            case 'Inicio':
                return <Image
                    source={{ uri: isFocused ? "https://kaihatsu-code.com/assets/home-focused.png" : "https://kaihatsu-code.com/assets/home.png" }}
                    style={{ width, height }}
                />;
            case 'ChatStack':
                return <Image
                    source={{ uri: isFocused ? "https://kaihatsu-code.com/assets/chat.png" : "https://kaihatsu-code.com/assets/chat-focused.png" }}
                    style={{ width, height }}
                />;
            case 'AddModal':
                return <ModalSheetScreen navigate={navigation.navigate} /> ;                
            case 'Creación':
                return <Image
                    source={{ uri: isFocused ? "https://kaihatsu-code.com/assets/task.png" : "https://kaihatsu-code.com/assets/task-focused.png" }}
                    style={{ width, height }}
                />;
            case 'ProfileModal':
                return <ModalProfile  navigate={navigation.navigate}/> ;
            default:
                break;
        }
    };

    return (
        <View>
            {renderIcon(route, isFocused, navigation)}
        </View>
    )
}