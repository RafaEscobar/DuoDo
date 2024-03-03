import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import React, { useState } from 'react';

export const ModalSheetScreen = ({navigate}:any) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log("nose");
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
            <Text style={styles.contentTitle}>Hi !</Text>
            <Text>La alin no se baña, pero aun asi la quiero xq es mi compa 🫶🏻</Text>
            <TouchableOpacity onPress={ () => {
              setModalVisible(false);
               navigate('Add');
              }}>
                <Text>Ir a another</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  contentView: {
    justifyContent: 'flex-end',
    margin: 0,
  }
});