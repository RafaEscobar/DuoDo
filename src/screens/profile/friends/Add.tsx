import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { userData } from '../../../data/user';
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';

export const Add = ({ navigation }: any) => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={tw`bg-gray-900 h-full`}>
      <View style={tw`flex pt-10 ml-5 w-90`}>
        <View style={tw`flex flex-row items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
            <AntDesign name="close" size={30} color="white" style={tw`top-1`} />
          </TouchableOpacity>
          <Text style={[tw`text-white text-center text-xl left-15`, { fontFamily: "Poppins_700Bold" }]}>Busca a tus amigos</Text>
        </View>
        <View style={tw`flex justify-center items-center mt-2`}>
          <Input style={tw`border-2 border-neutral-500 w-90 p-2 rounded-xl flex flex-row gap-2`}>
            <FontAwesome name="search" size={24} color="white" />
            <InputField
              placeholder="Nombre de usuario..."
              placeholderTextColor={'#fff'}
              style={[tw`text-white w-90 mt-1`, { fontFamily: "Poppins_400Regular" }]}
            />
          </Input>
        </View>
        <View>
          <Text style={[tw`text-white text-center text-xl mt-5`, { fontFamily: "Poppins_700Bold" }]}>Solicitudes de amistad</Text>
          <Text style={[tw`text-white text-center text-sm mt-2`, { fontFamily: "Poppins_400Regular" }]}>No tienes solicitudes de amistad</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}