import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image, SafeAreaView, Animated, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import CircularProgress from 'react-native-circular-progress-indicator';
import tw from 'twrnc';


const slide1 = [
  {
    title: 'Terminar el slide',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Integrar con la app',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Integrar la app',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Integrar la app',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
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
                  borderRadius: 34,
                  backgroundColor: '#fc9745' ,
                  paddingLeft: 30,
                  transform: [{ translateY }],
                }}
              >
                <Text style={{ fontSize: 24, fontFamily: "Poppins_700Bold" }}>{item.title}</Text>
                <Text style={{ fontSize: 16, color: 'white', fontFamily: "Poppins_700Bold" }}>{item.subtitle}</Text>
                <View>
                  <CircularProgress
                    value={80}
                    valueSuffix='%'
                    activeStrokeColor={'#2465FD'}
                    activeStrokeSecondaryColor={'#2ecc71'}
                  />
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



