import React from 'react';
import { Text, Dimensions, StyleSheet, View, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import tw from 'twrnc';

const slide = [
  {
    title: 'Alexis',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Rafa',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  },
  {
    title: 'Nelson',
    subtitle: 'Desarrollador Web',
    image: 'https://kaihatsu-code.com/assets/logo_solid.png'
  }
];

const SwiperComponent = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={10}
      autoplayLoop
      index={2}
      showPagination
      data={slide}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.subtitle}</Text>
          <Image 
            source={{ uri: item.image }}
            style={tw`w-10 h-10 rounded-full`}
          />
        </View>
      )}
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { backgroundColor: 'white' },
  child: { width, height: 200},
  text: { fontSize: width * 0.2,},
});

export default SwiperComponent;