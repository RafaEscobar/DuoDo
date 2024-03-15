import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Image } from "expo-image";
import { AntDesign } from '@expo/vector-icons';


export const Edit = ({ navigation }: any) => {

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
        <View style={tw`flex flex-row justify-between items-center`}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`bg-gray-600 w-10 h-10 items-center rounded-full`}>
            <AntDesign name="close" size={30} color="white" style={tw`top-1`} />
          </TouchableOpacity>
          <Text style={[tw`text-white text-2xl text-center ml-10`, { fontFamily: "Poppins_700Bold" }]}>Cuenta</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={tw`bg-neutral-500 p-2 rounded-xl`}>
            <Text style={[tw`text-white text-sm text-center`, { fontFamily: "Poppins_700Bold" }]}>Guardar</Text>
          </TouchableOpacity>
        </View>
        <View style={tw`mt-4`}>
          <Image
            style={{ width: 100, height: 100, alignSelf: "center", borderRadius: 50, marginTop: 20 }}
            source={{ uri: 'https://i.postimg.cc/FH8ZXxfK/default.png' }}
          />
          <TouchableOpacity>
            <View>
              <Text style={[tw`text-sky-500 text-center text-xl`, { fontFamily: "Poppins_600SemiBold" }]}>Cambiar avatar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[tw`leading-8 text-xl mt-10 text-white opacity-50`, { fontFamily: "Poppins_700Bold" }]}>Nombre</Text>
          <TextInput
            style={[tw`w-90 bg-gray-800 rounded-xl p-3 border-2 border-neutral-500 text-lg mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="Alexis"
            placeholderTextColor={'#fff'}
          />
        </View>
        <View>
          <Text style={[tw`leading-8 text-xl text-white opacity-50`, { fontFamily: "Poppins_700Bold" }]}>Correo</Text>
          <TextInput
            style={[tw`w-90 bg-gray-800 rounded-xl p-3 border-2 border-neutral-500 text-lg mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="asovera@bit.lat"
            placeholderTextColor={'#fff'}
          />
        </View>
        <View>
          <Text style={[tw`leading-8 text-xl text-white opacity-50`, { fontFamily: "Poppins_700Bold" }]}>Contraseña</Text>
          <TextInput
            style={[tw`w-90 bg-gray-800 rounded-xl p-3 border-2 border-neutral-500 text-lg mb-5 text-white`, { fontFamily: "Poppins_400Regular" }]}
            placeholder="*********" secureTextEntry={true}
            placeholderTextColor={'#fff'}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}