import { View, Text, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Poppins_700Bold, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { Button, FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import { useColorMode } from "@gluestack-style/react"
import { AntDesign } from '@expo/vector-icons';


export const  ResetPassword = ({ navigation: { navigate }, route }: any) => {
  // Forma de colocar el tema de nuestro dispositivo, aun queda por definir el tema de la aplicacion
  // const scheme = useColorScheme();

  // const theme = {
  //   backgroundColor: scheme === 'dark' ? '#fff' : '#271C3A',
  //   color: scheme === 'dark' ? '#333' : '#fff',
  // };

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <View style={tw`flex-1 items-center pt-14`}>
      <Button
        onPress={() => { navigate('Login') }}
        style={tw`absolute top-0 left-0 mt-14 ml-4 bg-indigo-400 p-2 rounded-full hover:bg-orange-200`}
      >
        <AntDesign name="left" size={30} color="black" />
      </Button>
      <Text style={[tw`text-2xl mt-20`, { fontFamily: "Poppins_700Bold" }]}>Restrablecer constraseña</Text>
      <Text style={[tw`text-center mt-5 text-xl w-80`, { fontFamily: "Poppins_600SemiBold" }]}>Te enviaremos un correo electrónico con tu nueva contraseña</Text>

      <FormControl style={tw`mt-8`}>
        <FormControlLabel>
          <FormControlLabelText style={[tw`text-xl`, { fontFamily: "Poppins_600SemiBold" }]}>
            Correo electrónico
          </FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            placeholder="admin@duo.com"
            keyboardType="email-address"
            style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base`}
          />
        </Input>
      </FormControl>

    </View>
  )
}

