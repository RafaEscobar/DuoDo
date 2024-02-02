import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import tw from "twrnc";
import React from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "Comfortaa_700Bold",
          color: "white",
          fontSize: 40,
        }}
      >
        Hola Git
      </Text>
      <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
        Whereas recognition of the inherent dignity
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center bg-black`,
  text: tw`text-yellow-500 text-4xl`,
});
