import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { GroupList } from '../../component/groupchat/GroupList';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export const GroupChat = () => {
  return (
    <View style={tw`bg-[#271C3A] h-full`}>
      <View style={tw`ml-4.5`}>
        <GroupList />
      </View>
      <TouchableOpacity
        style={tw`w-13 h-13 bg-indigo-400 p-3 rounded-full absolute bottom-5 right-4`}
      >
        <MaterialCommunityIcons name="message-text" size={30} color="black" />
      </TouchableOpacity>
    </View>
  )
}