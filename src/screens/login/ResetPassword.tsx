import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'twrnc';
import { Poppins_700Bold, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField, ScrollView } from '@gluestack-ui/themed';
import { ForgotPasswordRequest } from '../../modules/requests/Index';
import { ModalComponent } from '../../component/ModalComponent';
import { LoadingComponent } from '../../component/LoadingComponent';
import { AuthContext } from '../../context/AuthContext';

export const  ResetPassword = ({ navigation: { navigate }, route }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const {authUrl}:any = useContext(AuthContext);

  const handleForgotPassword = async() => {
    setLoading(true);
    const response = await ForgotPasswordRequest(email, authUrl);
    setLoading(false);
    if (response == 'ok') {
      setModalVisible(true);
    }
  }

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={tw`bg-[#271C3A] h-full`}>
      <View style={tw`flex items-center pt-20`}>
        <Text style={[tw`text-3xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Restrablecer constraseña</Text>
        <Text style={[tw`text-center mt-5 text-base w-80 text-white`, { fontFamily: "Poppins_400Regular" }]}>
          Ingrese su correo electrónico y le enviaremos un enlace para restablecer su contraseña.
        </Text>

        <FormControl style={tw`mt-8`}>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>
              Correo electrónico
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              placeholder="admin@duo.com"
              keyboardType="email-address"
              style={[tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base text-black`, { fontFamily: "Poppins_400Regular" }]}
              value={email}
              onChangeText={setEmail}
            />
          </Input>
        </FormControl>
        <View style={tw`flex flex-row gap-5 items-center justify-center mt-10`}>
            <TouchableOpacity style={tw`bg-[#106414] p-3 rounded-xl`} onPress={() => { navigate('Login') }}>
              <Text style={[tw`text-base text-white`, { fontFamily: "Poppins_700Bold" }]}>Regresar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`bg-sky-600 p-4 rounded-xl`} onPress={handleForgotPassword}>
              <Text style={[tw`text-xl text-white`, { fontFamily: "Poppins_700Bold" }]}>Enviar correo</Text>
            </TouchableOpacity>
        </View>
      </View>
      <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalText="El correo electrónico ha sido enviado."
      />
      <LoadingComponent
          modalVisible={loading}
          modalText='Enviando...'
      />
    </ScrollView>
  )
}
