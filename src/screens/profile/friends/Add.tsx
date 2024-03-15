import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Input, InputField } from '@gluestack-ui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { userData } from '../../../data/user';
import { Image } from 'expo-image';

export const Add = () => {

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
        <Text style={[tw`text-white text-center text-xl`, { fontFamily: "Poppins_700Bold" }]}>Busca a tus amigos</Text>
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
        <View>
          <Text style={[tw`text-white text-xl mt-5`, { fontFamily: "Poppins_700Bold" }]}>Sugerencias</Text>
          <FlatList
            data={userData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              <View style={tw`flex w-40 rounded-xl pl-2 p-2 mt-2 h-40 border-2 border-neutral-500 rounded-xl mr-2`}>
                <View style={tw`justify-center items-center mt-2`}>
                  <Image
                    source={{ uri: item.avatar }}
                    style={tw`w-14 h-14 rounded-2xl mr-2`}
                  />
                  <Text style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>{item.name}</Text>
                  <TouchableOpacity style={tw`bg-sky-500 w-20 items-center p-2 rounded-xl`}>
                    <Text style={[tw`text-white text-center text-base`, { fontFamily: "Poppins_400Regular" }]}>Seguir</Text>
                  </TouchableOpacity>
                </View>
              </View>
            }
          />
        </View>
      </View>
    </SafeAreaView>
  )
}