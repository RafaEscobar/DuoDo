import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import tw from "twrnc";
import { Image } from "expo-image";
import { Text, Button } from "@gluestack-ui/themed";

export const Landing = ({ navigation: { navigate }, route }:any) => {
  const colorScheme = useColorScheme();

  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Image
        style={{ width: 200, height: 200, alignSelf: "center" }}
        source="./assets/images/duodo.png"
      />
      <Text style={[styles.text, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
      <Text style={[styles.text, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Chats</Text>
      <Text style={[styles.text, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Workspace</Text>
      <Text style={[styles.text, themeTextStyle, { fontFamily: "Poppins_700Bold", }]}>Teams</Text>
        {/* <Button
          style={[styles.button]}
          title="Iniciar Sesión"
          onPress={() => {
              navigate('Login')
            }
          }
        /> */}
        <Button 
          onPress={() => {
              navigate('Login')
            }
          }
          style={[styles.button]}
        >
          <Text style={[styles.buttTex, { fontFamily: "Poppins_700Bold" }]}>Empezar ahora</Text>
        </Button>
      <View style={[styles.contex]}>
        <Text style={[styles.textRe, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>
          No tienes cuenta?
          <Text style={[styles.textL,{ fontFamily: "Poppins_700Bold" }]}>
            Registrate
          </Text>
        </Text>
      </View>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
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
  text: tw`text-6xl pl-8 py-3`,
  contex: tw`flex justify-center items-center mt-4`,
  textRe: tw`text-xl`,
  textL: {
    color: '#8955E3',
  },
  button: tw`flex justify-center items-center mt-38`,
  buttTex: tw`text-center text-3xl bg-indigo-500 p-4 rounded-3xl w-80 text-white`,
});
