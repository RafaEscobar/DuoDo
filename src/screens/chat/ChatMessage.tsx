import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc';

export const ChatMessage = ({route}: any) => {

  const { id, name } = route.params;

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Id: {id}</Text>
      <Text>Nombre del usuario: {name}</Text>
    </View>
  )
}