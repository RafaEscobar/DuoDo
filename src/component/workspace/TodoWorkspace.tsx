import { View, Text } from 'react-native'
import React from 'react'

export const TodoWorkspace = ({
    id,
    text,
    isCompleted,
    isToday,
    hours,
}: any) => {
    return (
        <View>
            <Text>{text}</Text>
        </View>
    )
}