import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image, SafeAreaView, Animated, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import * as Progress from 'react-native-progress';
import tw from 'twrnc';


const slide1 = [
  {
    title: 'Terminar el slide',
    team: 'Desarrollador Web',
    avatar: 'http://github.com/AlexisSM377.png',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'

  },
  {
    title: 'Integrar con la app',
    team: 'Desarrollador Web',
    avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
    image: 'http://github.com/AlexisSM377.png'
  },
  {
    title: 'Integrar la app',
    team: 'Desarrollador Web',
    avatar: 'http://github.com/AlexisSM377.png',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Integrar la app',
    team: 'Desarrollador Web',
    avatar: 'https://kaihatsu-code.com/assets/logo_solid.png',
    image: 'http://github.com/AlexisSM377.png'
  }
];

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ANCHO_CONTENEDOR = width * 0.7;
// const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;

export const SwiperComponent = () => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  const scollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scollX } } }],
          { useNativeDriver: true }
        )}
        data={slide1}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 50,
          // paddingHorizontal: ESPACIO_LATERAL
        }}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        scrollEventThrottle={16}
        // keyExtractor={(element: any) => element}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ANCHO_CONTENEDOR,
            index * ANCHO_CONTENEDOR,
            (index + 1) * ANCHO_CONTENEDOR
          ];

          const outputRange = [0, -30, 0];

          const translateY = scollX.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <View style={{ width: 300 }}>
              <Animated.View
                style={{
                  marginHorizontal: ESPACIO,
                  padding: ESPACIO,
                  borderRadius: 25,
                  backgroundColor: '#fc9745',
                  paddingLeft: 20,
                  transform: [{ translateY }],
                }}
              >
                <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold" }}>{item.title}</Text>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: "Poppins_700Bold" }}>{item.team}</Text>
                <View style={tw`flex flex-row gap-1`}>
                  <Image
                    style={tw`w-10 h-10 rounded-full`}
                    source={{ uri: item.image }}
                  />
                  <Image
                    style={tw`w-10 h-10 rounded-full`}
                    source={{ uri: item.avatar }}
                  />
                </View>
                <View style={tw`flex flex-row mt-3 gap-1`}>
                  <Progress.Bar progress={.9} width={200} height={20} color='#0dac4a' borderRadius={20}
                  />
                  <Text style={{ fontSize: 12, fontFamily: "Poppins_700Bold" }}>80%</Text>
                </View>


              </Animated.View>
              <StatusBar style="auto" />
            </View>
          )
        }
        }
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({

  posterImage: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  }
});



