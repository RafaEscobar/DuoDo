import { AntDesign } from '@expo/vector-icons';
import { Button } from "@gluestack-ui/themed";
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField } from '@gluestack-ui/themed';
import { handleLogin } from '../../modules/handles';
import { Image } from "expo-image";
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import tw from "twrnc";


export const Login = ({ navigation: { navigate } }: any) => {

  /**
   ** useState's
   */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  /**
   ** Variables
   */
  const colorScheme = useColorScheme();
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  /**
   ** Conditionals
   */
  if (!fontsLoaded) {
    return null;
  }

  /**
   ** Function to validate the email
   *  @returns void
   */
  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      setEmailError('Formato de correo inválido');
    } else {
      setEmailError('');
    }
  };

  /**
   ** Function to validate the password
   *  @returns void
   */
  const validatePassword = () => {
    if (password.length <= 6) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Button
        onPress={() => { navigate('Landing') }}
        style={tw`absolute top-0 left-0 mt-16 ml-6 bg-indigo-400 p-2 rounded-full hover:bg-orange-200 z-10`}
      >
        <AntDesign name="left" size={30} color="black" />
      </Button>
      <Image
        style={{ width: 370, height: 210, alignSelf: "center", borderRadius: 20 }}
        source="https://kaihatsu-code.com/assets/logo_solid.png"
      />
      <Text style={[styles.fonText, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Iniciar sesión</Text>
      <View style={tw`flex justify-center items-center`}>
        <FormControl>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-xl mt-4`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>
              Correo electrónico
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              onChangeText={setEmail}
              onEndEditing={validateEmail}
              value={email}
              keyboardType="email-address"
              placeholder="admin@duo.com"
              style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base`}
            />
            {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
          </Input>
          <FormControlLabel>
            <FormControlLabelText style={[tw`text-xl mt-4`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>
              Contraseña
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              onChangeText= {setPassword}
              onEndEditing={validatePassword}
              value={password}
              placeholder="*********"
              secureTextEntry
              style={tw`rounded-xl bg-indigo-50 rounded-md p-2 w-80 mt-3 text-base`}
            />
            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
          </Input>
          <Text style={[styles.endText, { fontFamily: "Poppins_700Bold", color: '#0090c9' }]} onPress={() => navigate('ResetPassword')} >¿Olvidaste tu contraseña?</Text>
        </FormControl>
      </View>
      <Button
        onPress={() => handleLogin(email, password, navigate)} style={[styles.button]}>
        <Text style={[styles.buttTex, { fontFamily: "Poppins_700Bold" }]}>Iniciar</Text>
      </Button>
      <View style={styles.contex}>
        <Text style={[styles.textFont, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>No tienes cuenta?</Text>
        <TouchableOpacity>
          <Text style={[styles.textFont, { fontFamily: "Poppins_700Bold", color: '#8955E3' }]} onPress={() => navigate('SignUp')} >
            Registrate
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#271C3A',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#ffffff',
  },
  fonText: tw`text-3xl items-center justify-center text-center pt-8 py-8`,
  button: tw`flex justify-center items-center`,
  buttTex: tw`text-center text-3xl bg-indigo-500 p-4 rounded-3xl w-64 text-white mt-20`,
  contex: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    gap: 5
  },
  textFont: tw`text-base`,
  input: tw`rounded-xl w-80 bg-gray-200 mt-3 p-3 font-bold`,
  endText: tw`text-right text-base mt-2 text-indigo-500`,
  errorText: tw`text-red-500 text-sm mt-1 text-right font-bold`,
});


