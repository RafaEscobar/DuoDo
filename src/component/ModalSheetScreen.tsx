import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useFonts } from 'expo-font';
import { MaterialIcons } from '@expo/vector-icons';
import tw from 'twrnc';

export const ModalSheetScreen = ({ navigate }: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View>
      <TouchableOpacity
        onPress={() => { setModalVisible(true) }}
        style={{ marginTop: 4, marginLeft: 6, marginRight: 6 }}
      >
        <Image
          source={{ uri: 'https://kaihatsu-code.com/assets/add-removebg-preview.png' }}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <View>
        <Modal
          backdropOpacity={0.3}
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          style={styles.contentView}
        >
          <View style={styles.content}>
            <View>
              <Text style={styles.contentTitle}>¿Qué deseas crear?</Text>
              <Text style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20, fontFamily: 'Poppins_400Regular', color: '#FAF8F4'}}>Puedes crear una tarea individual/grupal o un espacio de trabajo para poder gestionar tus pendientes y colaborar con otras personas.</Text>
            </View>
            <View style={{ marginTop: 25 }}>
              <View
                style={{ marginTop: 5, borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10, paddingBottom: 10 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigate('Add');
                  }}
                >
                  <View style={tw`flex flex-row items-center gap-3 ml-10`}>
                    <MaterialIcons name="add-task" size={30} color="#b0ffd2" />
                    <Text style={styles.optionText}>Tarea</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{  borderTopWidth: 1, borderTopColor: '#FAF8F4', paddingTop: 10, paddingBottom: 5 , marginBottom: 8 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(false);
                    navigate('AddWorkspace');
                  }}
                >
                  <View style={tw`flex flex-row items-center gap-3 ml-10`}>
                    <MaterialIcons name="workspaces" size={30} color="#8100f4" />
                    <Text style={styles.optionText}>Espacio de trabajo</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#111827',
    paddingTop: 22,
    paddingBottom: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 12,
    fontFamily: "Poppins_700Bold",
    color: '#FAF8F4',
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
    textAlign: 'center',
    color: '#FAF8F4',
  }

});