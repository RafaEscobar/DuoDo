import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { StatusBar } from 'expo-status-bar';
import { Text, Dimensions, View, Image, SafeAreaView, Animated, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as Progress from 'react-native-progress';
import React, { useEffect } from 'react';
import tw from 'twrnc';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO = 10;

export const SwiperComponent = (props:any) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const { workspaces } = props;

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
        data={workspaces}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 50,
        }}
        decelerationRate={0}
        snapToInterval={ANCHO_CONTENEDOR}
        scrollEventThrottle={16}
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
                  backgroundColor: item.color,
                  paddingLeft: 20,
                  transform: [{ translateY }],
                }}
              >
                <Text style={[styles.title, tw`text-white shadow-2xl`]}>{item.title}</Text>
                <Text style={ styles.subtitle }>{item.description.slice(0, 68)}...</Text>
                <View style={tw`flex flex-row gap-1`}>
                  {/* <Image
                    style={tw`w-10 h-10 rounded-full`}
                    source={{ uri: item.image }}
                  />
                  <Image
                    style={tw`w-10 h-10 rounded-full`}
                    source={{ uri: item.avatar }}
                  /> */}
                </View>
                <View style={tw`flex flex-row mt-3 gap-1`}>
                  <Progress.Bar progress={(item.advance/100)} width={200} height={20} color='#0dac4a' borderRadius={20}
                  />
                  <Text style={styles.advance}>{item.advance}%</Text>
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
  title: {
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
    fontFamily: "Poppins_700Bold",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  advance: {
    fontSize: 12,
    fontFamily: "Poppins_700Bold",
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  }
})