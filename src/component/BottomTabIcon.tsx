import { View, Text } from 'react-native'
import { Image } from "expo-image";
import React from 'react'

type Props = {
    route: string;
    isFocused: boolean;
};

export const BottomTabIcon = ({ route, isFocused }: Props) => {

    const renderIcon = (route: string, isFocused: boolean) => {
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
            case 'Add':
                return <Image
                    source={{ uri: isFocused ? 'https://kaihatsu-code.com/assets/add-removebg-preview.png' : 'https://kaihatsu-code.com/assets/add-removebg-preview.png' }}
                    style={{ width, height }}
                />;
            case 'Creación':
                return <Image
                    source={{ uri: isFocused ? "https://kaihatsu-code.com/assets/task.png" : "https://kaihatsu-code.com/assets/task-focused.png" }}
                    style={{ width, height }}
                />;
            case 'ProfileModal':
                return <Image
                    source={{ uri: isFocused ? "https://kaihatsu-code.com/assets/menu.png" : "https://kaihatsu-code.com/assets/menu.png" }}
                    style={{ width, height }}
                />;
            default:
                break;
        }
    };

    return (
        <View>
            {renderIcon(route, isFocused)}
        </View>
    )
}