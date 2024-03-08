import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { List } from '../../component/workspace/List';

export const Workspace = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={tw`bg-[#271C3A] h-full`}>
      <View style={tw`flex pt-3 ml-2.5`}>
        <Text style={[tw`text-2xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Espacios de trabajo</Text>
        <Text style={[tw`text-white mt-1`, { fontFamily: "Poppins_400Regular" }]}>Organiza tus proyectos y colaborar con tu equipo.</Text>
        <List />
      </View>
    </View>
  )
}