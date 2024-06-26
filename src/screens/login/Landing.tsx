import React from 'react';
import { StyleSheet, View, useColorScheme, Text, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import tw from "twrnc";
import { Image } from "expo-image";
import { Button } from "@gluestack-ui/themed";
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const { width } = Dimensions.get('window');

export const Landing = ({ navigation: { navigate }, route }: any) => {
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
        style={{ width: width * 0.9, height: width * 0.9 * 0.567, alignSelf: "center", borderRadius: 20}}
        source="https://kaihatsu-code.com/assets/logo_solid.png"
      />
      <View style={tw`mt-8 pl-8`}>
        <Text style={[tw`text-5xl py-2`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Tareas</Text>
        <Text style={[tw`text-5xl py-2`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Chats</Text>
        <Text style={[tw`text-5xl py-2`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>Workspace</Text>
        <Text style={[tw`text-5xl py-2`, themeTextStyle, { fontFamily: "Poppins_700Bold", }]}>Teams</Text>
      </View>
      <LottieView
        source={require('../../../assets/animations/space.json')}
        autoPlay
        loop
        style={{ width: width * 0.9, height: width * 0.9 * 0.54, alignSelf: "center", borderRadius: 20 }}
      />
      <Button
        onPress={() => { navigate('Login') }} style={[tw`flex justify-center items-center `]}>
        <Text style={[tw`text-center text-2xl bg-indigo-500 p-4 rounded-3xl w-80 text-white`, { fontFamily: "Poppins_700Bold" }]}>Empezar ahora</Text>
      </Button>
      <View style={styles.contex}>
        <Text style={[tw`text-base`, themeTextStyle, { fontFamily: "Poppins_700Bold" }]}>No tienes cuenta?</Text>
        <TouchableOpacity>
          <Text style={[tw`text-base`, { fontFamily: "Poppins_700Bold", color: '#8955E3' }]} onPress={() => navigate('SignUp')} >
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
    paddingTop: 40,
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
});
