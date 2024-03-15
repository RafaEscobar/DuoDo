import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';



export const List = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  const friendList = [
    {
      id: 1,
      name: 'Alexis',
      avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
    },
    {
      id: 2,
      name: 'Rafa',
      avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
    },
    {
      id: 3,
      name: 'Nelson',
      avatar: 'https://i.postimg.cc/QxJGcqDZ/b.png'
    }
  ];

  return (
    <SafeAreaView style={tw`bg-gray-900 h-full`}>
      <View style={tw`flex pt-10 ml-5 w-90`}>
        <Text style={[tw`text-white text-3xl text-center`, { fontFamily: "Poppins_700Bold" }]}>Amigos</Text>
        <View style={{
          marginTop: 10, borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10
        }}>
          {friendList.map((friend) => {
            return (
              <View key={friend.id} style={tw`flex flex-row items-center justify-between mt-2`}>
                <TouchableOpacity>
                  <View style={tw`flex flex-row items-center border-2 border-neutral-500 w-90 rounded-xl p-2`}>
                    <Image
                      style={tw`w-12 h-12 rounded-full`}
                      source={{
                        uri: friend.avatar
                      }}
                    />
                    <Text style={[tw`text-white text-xl ml-5`, { fontFamily: "Poppins_600SemiBold" }]}>{friend.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}