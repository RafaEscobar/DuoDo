import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';


export const Manage = ({ navigation }: any) => {

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
          <Text style={[tw`text-white text-center text-2xl left-15`, { fontFamily: "Poppins_700Bold" }]}>Estadisticas</Text>
        </View>
        <Text style={[tw`text-white text-sm mt-5`, { fontFamily: "Poppins_400Regular" }]}>
          Este mes has sido muy activo en Duo Do es por eso que te premiamos con un badge🎉
        </Text>
        <View style={tw`flex justify-center items-center mt-2`}>
          <View style={tw`flex flex-row w-90 rounded-xl p-3 mt-2 h-20 bg-violet-700 rounded-xl`}>
            <View style={tw`flex-grow mt-1`}>
              <Text style={[tw`text-lg text-white`, { fontFamily: "Poppins_700Bold" }]}>Agregaste nuevos amigos</Text>
              <Text style={[tw`text-sm text-white w-70 opacity-60`, { fontFamily: "Poppins_400Regular" }]}>Este mes agregaste mas de 10 amigos</Text>
            </View>
          </View>
          <View style={tw`bg-violet-600 p-3 w-90 rounded-xl mt-2`}>
            <Text style={[tw`text-white text-base`, { fontFamily: "Poppins_700Bold" }]}>
              Completaste todas las tareas en un dia
            </Text>
            <Text style={[tw`text-white opacity-60`, { fontFamily: "Poppins_400Regular" }]}>
              Este mes fuiste de los mejores en completar tareas
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}