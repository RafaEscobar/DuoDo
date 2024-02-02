import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { GluestackUIProvider, Box, Spinner, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from '@react-navigation/native';

import tw from "twrnc";
import React from "react";
import { BottomTabNavigator } from "./src/navigation/BottomTabNavigation";

export default function App() {
  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>

    // <View style={styles.container}>
    //   <Text
    //     style={{
    //       fontFamily: "Comfortaa_700Bold",
    //       color: "white",
    //       fontSize: 40,
    //     }}
    //   >
    //     Hola Mundo!
    //   </Text>
    //   <Text style={[styles.text, { fontFamily: "Poppins_400Regular" }]}>
    //     Whereas recognition of the inherent dignity
    //   </Text>
    //   <GluestackUIProvider config={config}>
    //     <Box width="100%" justifyContent="center" borderRadius="$lg" alignItems="center"  bg="$primary500" p="$5" r>
    //       <Text style={[styles.text, { fontFamily: "Comfortaa_700Bold" }]}>Open up App.js to start working on your app!</Text>
    //     </Box>
    //     <Spinner size="small" />
    //   </GluestackUIProvider>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: tw`flex-1 justify-center items-center bg-black`,
  text: tw`text-yellow-500 text-4xl`,
});
