import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import React, { useState } from 'react';

export const ModalSheetScreen = ({navigate}:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };


  return (
    <View>
      <TouchableOpacity
        onPress={() => {setModalVisible(true)}}
        style={{ marginTop: 4, marginLeft: 6, marginRight: 6}}
        >
        <Image
            source={{uri: 'https://kaihatsu-code.com/assets/add-removebg-preview.png'}}
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
              <Text style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20, }}>Puedes crear una tarea individual/grupal o un espacio de trabajo para poder gestionar tus pendientes y colaborar con otras personas.</Text>
            </View>
            <View style={{ marginTop: 25 }}>
              <View
                style={{backgroundColor: '#FAF8F4', paddingTop:4, paddingBottom:4, borderRadius: 20, marginBottom: 10 }}
              >
                <TouchableOpacity
                  onPress={ () => {
                    setModalVisible(false);
                    navigate('Add');
                  }}
                  style={styles.button}
                >
                    <Text style={styles.optionText}>Tarea</Text>
                </TouchableOpacity>
              </View>
              <View 
                style={{backgroundColor: '#FAF8F4', paddingTop:4, paddingBottom:4, borderRadius: 20 }}
              >
                <TouchableOpacity
                  onPress={ () => {
                    setModalVisible(false);
                    navigate('AddWorkspace');
                  }}
                  style={styles.button}
                >
                    <Text style={styles.optionText}>Espacio de trabajo</Text>
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
    backgroundColor: 'white',
    paddingTop: 22,
    paddingBottom: 22,
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  button: {
    paddingLeft: 25,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  optionText: {
    fontSize: 24,
  }

});